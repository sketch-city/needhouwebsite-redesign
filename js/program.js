import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import { searchURL } from './constants'
import axios from 'axios'

import { loadGoogleMapsAPI, isGoogleMapsAPILoaded, fixNavURL } from './utils'
import { handleDataFromAPIToView } from './data-mapper'

import searchFilterStore, { initialState } from './search-filter-store'

import Program from './components/program'

let mapObject

const container = document.getElementById('container')

axios.get(`${searchURL}${(location.search || '')}`)
  .then(({ data }) => {
    searchFilterStore.dispatch({ type: 'PROGRAM_VIEW', program: { data: handleDataFromAPIToView(data[0])} })
    loadGoogleMapsAPI(initMap)
    return getProgramsForAgency(data[0].agency_id)
  })

function getProgramsForAgency(agencyId) {
  return axios.get(`${searchURL}?agency_id=${agencyId}`)
    .then(({ data }) => {
      searchFilterStore.dispatch({
        type: 'PROGRAMS_BY_AGENCY_VIEW',
        programsByAgency: {
          [agencyId]: data.map(handleDataFromAPIToView),
        },
      })
    })
}

function getLatLng(program) {
  if (program.data.location.find(({ attribute }) => attribute === 'latitude')) {
    const lat = parseFloat(program.data.location.find(({ attribute }) => attribute === 'latitude').item)
    const lng = parseFloat(program.data.location.find(({ attribute }) => attribute === 'longitude').item)

    if (!lat || !lng) {
      return false
    }

    return { lat, lng }
  }

  return false
}

function updateMap(map, program) {
  if (!getLatLng(program)) {
    return
  }
  const { lat, lng } = getLatLng(program)
  const programLatLng = { lat, lng }
  const marker = new google.maps.Marker({
    position: programLatLng,
    map,
  })

  map.panTo(programLatLng)
}

searchFilterStore.subscribe(() => {
  const programState = searchFilterStore.getState().get('program')

  if (!isGoogleMapsAPILoaded() || !mapObject) {
    return
  }

  updateMap(mapObject, programState)
})

function initMap() {
  const houston = { lat: 29.76, lng: -95.37 }

  if (searchFilterStore.getState()) {
    const programState = searchFilterStore.getState().get('program')
    if (!getLatLng(programState)) {
      return
    }
    const map = new google.maps.Map(document.getElementById('map'), { zoom: 10, center: houston })
    mapObject = map
    document.getElementById('map').style.height = '400px'
    updateMap(map, programState)
  }

  return map
}

const ConnectedProgram = () => (
  <Provider store={ searchFilterStore }>
    <Program/>
  </Provider>
)

render(<ConnectedProgram/>, container)