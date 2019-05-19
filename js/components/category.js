import { buildURL } from '../utils'
import { h } from 'preact'
import ReactGA from 'react-ga';

const food = (
  <svg viewBox="0 0 480 480.00004" width="480pt" xmlns="http://www.w3.org/2000/svg">
    <path d="m472 304h-69.808594c5.273438-4.636719 9.753906-10.101562 13.265625-16.183594.640625 0 1.285157.183594 1.925781.183594 10.605469-.003906 20.777344-4.21875 28.273438-11.71875l22.632812-22.625c15.59375-15.632812 15.59375-40.9375 0-56.566406-4.292968-4.3125-9.523437-7.570313-15.28125-9.53125l5.914063-5.902344c15.59375-15.632812 15.59375-40.9375 0-56.566406-2.609375-2.613282-5.570313-4.84375-8.800781-6.625l8.800781-8.800782c12.34375-12.277343 15.304687-31.140624 7.316406-46.609374-7.988281-15.472657-25.082031-23.976563-42.238281-21.023438v-2.03125c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v2.03125c-17.152344-2.945312-34.238281 5.5625-42.21875 21.027344-7.984375 15.464844-5.027344 34.320312 7.308594 46.597656l8.796875 8.800781c-3.230469 1.777344-6.195313 4.007813-8.796875 6.621094-1.039063 1.132813-2.011719 2.320313-2.914063 3.5625-19.8125-10.699219-43.488281-11.523437-64-2.234375-16.019531-16.359375-41.371093-19.109375-60.527343-6.566406-19.15625 12.542968-26.773438 36.878906-18.183594 58.105468-10.265625 6.035157-18.875 14.527344-25.046875 24.710938l3.957031-41.601562 1.625-17.054688c-.007812-17.925781-7.554688-35.023438-20.800781-47.105469l12.640625-63.292969c.480468-2.355468-.121094-4.800781-1.640625-6.660156-1.519531-1.863281-3.796875-2.941406-6.199219-2.941406h-25.207031l1.207031-15.382812c.171875-2.226563-.59375-4.425782-2.113281-6.0625-1.519531-1.632813-3.652344-2.5625005-5.886719-2.554688h-48c-2.234375-.0078125-4.367188.921875-5.886719 2.554688-1.519531 1.636718-2.285156 3.835937-2.113281 6.0625l1.207031 15.382812h-25.207031c-2.402344 0-4.679688 1.078125-6.199219 2.941406-1.519531 1.859375-2.121093 4.304688-1.640625 6.660156l14.078125 70.398438c-9.265625 11.574219-14.292969 25.972656-14.238281 40.800781l15.199219 159.199219h-15.199219c-4.417969 0-8 3.582031-8 8v160c0 4.417969 3.582031 8 8 8h464c4.417969 0 8-3.582031 8-8v-160c0-4.417969-3.582031-8-8-8zm-133.769531-187.832031-17.832031-17.824219c-8.394532-8.332031-9.433594-21.550781-2.449219-31.09375s19.898437-12.546875 30.378906-7.066406c2.480469 1.28125 5.445313 1.175781 7.832031-.273438 2.382813-1.449218 3.839844-4.039062 3.839844-6.832031v-13.078125c0-13.253906 10.746094-24 24-24s24 10.746094 24 24v13.078125c0 2.792969 1.457031 5.382813 3.839844 6.832031 2.386718 1.449219 5.351562 1.554688 7.832031.273438 10.480469-5.480469 23.394531-2.476563 30.378906 7.066406s5.945313 22.761719-2.449219 31.09375l-17.832031 17.824219c-2.15625 2.128906-2.921875 5.292969-1.980469 8.175781.941407 2.878906 3.429688 4.976562 6.425782 5.425781 8.96875 1.292969 16.429687 7.554688 19.265625 16.15625 2.839843 8.605469.558593 18.078125-5.878907 24.449219l-17.808593 17.785156c-2.457031 2.433594-3.074219 6.167969-1.53125 9.257813 1.546875 3.09375 4.902343 4.84375 8.324219 4.34375 7.46875-1.160157 15.042968 1.316406 20.390624 6.664062 9.351563 9.378907 9.351563 24.558594 0 33.941407l-22.640624 22.625c-3.367188 3.304687-7.640626 5.53125-12.28125 6.398437 7.019531-27.652344-5.277344-56.589844-30.054688-70.734375v-12.65625l28.800781-21.601562c3.535157-2.648438 4.25-7.664063 1.597657-11.199219-2.648438-3.535157-7.664063-4.25-11.199219-1.597657l-19.199219 14.398438v-44l28.800781-21.601562c3.535157-2.648438 4.25-7.664063 1.597657-11.199219-2.648438-3.535157-7.664063-4.25-11.199219-1.597657l-19.199219 14.398438v-24c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v24l-19.199219-14.398438c-3.535156-2.652343-8.550781-1.9375-11.199219 1.597657-2.652343 3.535156-1.9375 8.550781 1.597657 11.199219l28.800781 21.601562v44l-19.199219-14.398438c-3.535156-2.652343-8.550781-1.9375-11.199219 1.597657-2.652343 3.535156-1.9375 8.550781 1.597657 11.199219l28.800781 21.601562v6.105469c-10.523438-2.835938-21.613281-2.804688-32.121094.085937 0-.726562.121094-1.457031.121094-2.191406-.007812-20.796875-9.035156-40.566406-24.742188-54.191406.390626-.457032.71875-.984375 1.148438-1.410156 3.628906-3.601563 8.316406-5.9375 13.378906-6.664063 2.996094-.445313 5.484375-2.546875 6.425782-5.425781.941406-2.878906.175781-6.042969-1.980469-8.171875zm-10.230469 75.832031c-.027344 3.09375-.3125 6.183594-.847656 9.230469-11.089844 6.625-19.917969 16.445312-25.320313 28.175781-9.675781-5.042969-20.792969-6.597656-31.480469-4.40625-5.597656-25.824219-24.828124-46.542969-50.167968-54.039062 10.050781-24.832032 36.289062-39.054688 62.582031-33.921876 26.289063 5.128907 45.257813 28.175782 45.234375 54.960938zm-152-32c-.027344-12.292969 7.007812-23.511719 18.085938-28.84375 11.078124-5.332031 24.234374-3.832031 33.824218 3.859375-11 8.507813-19.285156 20.027344-23.855468 33.160156-1.351563-.070312-2.6875-.175781-4.054688-.175781-7.421875.011719-14.796875 1.171875-21.863281 3.441406-1.40625-3.652344-2.128907-7.53125-2.136719-11.441406zm-31.632812 73.800781c3.199218-28.765625 27.804687-50.347656 56.742187-49.761719 28.9375.585938 52.652344 23.144532 54.683594 52.015626.183593 2.597656 1.617187 4.941406 3.84375 6.285156 2.230469 1.347656 4.972656 1.523437 7.355469.476562 11.226562-5.117187 24.414062-3.152344 33.664062 5.015625 2.09375 1.796875 4.964844 2.390625 7.597656 1.566407 2.632813-.824219 4.65625-2.945313 5.355469-5.613282 6.339844-24.101562 30.070313-39.335937 54.621094-35.078125 24.554687 4.257813 41.761719 26.597657 39.617187 51.421875-2.140625 24.828125-22.929687 43.886719-47.847656 43.871094h-232c-12.277344.050781-23.496094-6.925781-28.886719-17.957031-5.386719-11.03125-3.988281-24.167969 3.597657-33.820313 7.589843-9.648437 20.027343-14.109375 32.015624-11.480468 2.210938.46875 4.511719-.023438 6.339844-1.34375 1.828125-1.324219 3.011719-3.355469 3.261719-5.597657zm-26.128907-193.800781-9.390625 46.953125c-3.386718-1.734375-6.921875-3.160156-10.566406-4.257813l3.320312-42.695312zm-30.878906-24-4.960937 64.121094c-.796876 0-1.597657-.121094-2.398438-.121094h-8c-3.484375.019531-6.964844.328125-10.398438.921875l-4.960937-64.921875zm-44.917969 24 3.503906 45.601562c-3.480468 1.5625-6.8125 3.4375-9.953124 5.597657l-10.230469-51.199219zm-6.226562 232h27.785156c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-29.3125l-1.519531-16h22.832031c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-24c-.128906 0-.230469.0625-.359375.070312l-1.601563-16.460937c.632813.214844 1.292969.34375 1.960938.390625h40c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-40c-1.160156.015625-2.300781.289062-3.34375.800781l-1.601562-16.800781h28.945312c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-30.472656l-1.527344-16c.027344-26.5 21.5-47.972656 48-48h8c10.847656-.003906 21.378906 3.660156 29.878906 10.398438l.089844.074218c11.304688 8.863282 17.945312 22.402344 18.03125 36.765625l-1.550781 16.320313-6.203125 65.089844c-17.3125 2.800781-31.710938 14.835937-37.53125 31.378906-5.824219 16.542968-2.136719 34.945312 9.605468 47.972656h-53.046874zm427.785156 48v24h-208c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h208v24h-448v-24h136c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-136v-24zm-448 144v-24h288c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-288v-24h448v24h-64c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h64v24zm0 0"/>
  </svg>
)

const family = (
  <svg viewBox="0 -16 480.08193 480" width="480pt" xmlns="http://www.w3.org/2000/svg">
    <path d="m48.042969 88.105469h16v16h-16zm0 0"/><path d="m128.042969 88.105469h16v16h-16zm0 0"/><path d="m88.042969 96.105469h16v40h-16zm0 0"/><path d="m64.042969 152.105469h64v16h-64zm0 0"/><path d="m336.042969 96.105469h16v16h-16zm0 0"/><path d="m400.042969 96.105469h16v16h-16zm0 0"/><path d="m368.042969 104.105469h16v40h-16zm0 0"/><path d="m344.042969 160.105469h64v16h-64zm0 0"/><path d="m200.042969 240.105469h16v16h-16zm0 0"/><path d="m264.042969 240.105469h16v16h-16zm0 0"/><path d="m224.042969 272.105469h32v16h-32zm0 0"/><path d="m368.042969 256.105469h16v16h-16zm0 0"/><path d="m368.042969 288.105469h16v16h-16zm0 0"/><path d="m368.042969 320.105469h16v16h-16zm0 0"/><path d="m424.082031.105469h-96c-30.914062.035156-55.964843 25.085937-56 56v88.648437c-2.660156-.410156-5.347656-.625-8.039062-.648437h-48c-15.054688-.019531-29.476563 6.039062-40 16.800781v-98.136719c9.199219-2.582031 15.671875-10.824219 16-20.375 0-1.828125-.257813-3.648437-.761719-5.40625 5.558594-5.996093 8.683594-13.851562 8.761719-22.027343v-14.855469h-176c-6.496094-.484375-12.902344 1.738281-17.703125 6.136719-6.488282 6.542968-6.402344 15.863281-6.3203128 25.734374v10.402344c.3281248 9.550782 6.7968748 17.789063 15.9999998 20.375v145.351563h48v16h-47.976562v224h432v-208c17.726562-.183594 32.007812-14.589844 32.039062-32.320313v-151.679687c-.035156-30.914063-25.085937-55.964844-56-56zm-208.039062 160h48c22.078125.027343 39.972656 17.921875 40 40v8h-127.960938v-8.421875c.230469-21.910156 18.046875-39.554688 39.960938-39.578125zm128.039062 48v16h-24.039062v-16zm48 16h-32v-16h32zm-72-32v-112h112v112zm-192 16h32v16h-32zm48 16h127.960938v80h-128zm32 96v16h-32.039062v-16zm16 16v-16h32v16zm32 16c0 8.835937-7.164062 16-16 16-8.835937 0-16-7.164063-16-16zm16-32h32v16h-32.039062zm-254.335937-302.605469c1.898437-1.152344 4.128906-1.640625 6.335937-1.394531h159.960938c-.535157 5.101562-3.214844 9.734375-7.367188 12.738281l-6.097656 4.796875 4.582031 6.25c.570313.722656.890625 1.609375.921875 2.527344 0 3.097656-3.664062 5.710937-8 5.710937h-144c-4.335937 0-8-2.613281-8-5.710937v-10.558594c-.039062-5.898437-.136719-12.554687 1.664063-14.359375zm14.335937 174.605469v-128h128v128zm48 16h32v16h-32zm31.960938 48h-32v-16h32zm-32 16h32v76.6875l-16 16-16-16zm80 160h-128v-192h32v115.3125l32 32 32-32v-115.3125h32zm144 0h-128v-80h32c0 17.675781 14.324219 32 32 32 17.671875 0 32-14.324219 32-32h32zm128 0h-112v-192h112zm32.039062-224.351563c-.007812 9.027344-7.324219 16.34375-16.351562 16.351563h-39.648438v-16h40v-144h-144v96.929687c-4.621093-4.71875-10.039062-8.585937-16-11.425781v-93.503906c.027344-22.078125 17.917969-39.972657 40-40h96c22.082031.027343 39.972657 17.921875 40 40zm0 0"/>
  </svg>
)

const health = (
  <svg viewBox="0 -16 480 480" width="480pt" xmlns="http://www.w3.org/2000/svg">
    <path d="m387 80h-59v-72c0-4.417969-3.582031-8-8-8h-160c-4.417969 0-8 3.582031-8 8v72h-59c-51.339844.058594-92.9414062 41.660156-93 93v99c0 4.417969 3.582031 8 8 8h8v160c0 4.417969 3.582031 8 8 8h432c4.417969 0 8-3.582031 8-8v-160h8c4.417969 0 8-3.582031 8-8v-99c-.058594-51.339844-41.660156-92.941406-93-93zm-219-64h144v64h-16v-40c0-4.417969-3.582031-8-8-8h-96c-4.417969 0-8 3.582031-8 8v40h-16zm32 64v-32h80v32zm248 352h-416v-152h16v136h384v-136h16zm-248-152h80v16h-80zm-8 32h96c4.417969 0 8-3.582031 8-8v-24h120v120h-352v-120h120v24c0 4.417969 3.582031 8 8 8zm272-48h-448v-91c.042969-42.507812 34.492188-76.957031 77-77h294c42.507812.042969 76.957031 34.492188 77 77zm0 0"/>
    <path d="m304 152h-40v-32c0-4.417969-3.582031-8-8-8h-32c-4.417969 0-8 3.582031-8 8v32h-40c-4.417969 0-8 3.582031-8 8v32c0 4.417969 3.582031 8 8 8h40v32c0 4.417969 3.582031 8 8 8h32c4.417969 0 8-3.582031 8-8v-32h40c4.417969 0 8-3.582031 8-8v-32c0-4.417969-3.582031-8-8-8zm-8 32h-40c-4.417969 0-8 3.582031-8 8v32h-16v-32c0-4.417969-3.582031-8-8-8h-40v-16h40c4.417969 0 8-3.582031 8-8v-32h16v32c0 4.417969 3.582031 8 8 8h40zm0 0"/>
    <path d="m432 184c.441406.003906.882812-.035156 1.320312-.113281 4.355469-.726563 7.296876-4.84375 6.574219-9.199219-8.855469-53.167969-68.230469-62.246094-70.75-62.609375-4.375-.625-8.429687 2.410156-9.054687 6.785156-.628906 4.375 2.40625 8.429688 6.78125 9.058594.503906.070313 50.289062 7.652344 57.25 49.390625.640625 3.855469 3.972656 6.683594 7.878906 6.6875zm0 0"/>
    <path d="m432 200c-4.417969 0-8 3.582031-8 8v32c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-32c0-4.417969-3.582031-8-8-8zm0 0"/>
    <path d="m110.863281 112.078125c-2.519531.363281-61.894531 9.441406-70.75 62.609375-.722656 4.355469 2.21875 8.472656 6.574219 9.199219.433594.078125.871094.113281 1.3125.113281 3.90625-.003906 7.238281-2.832031 7.878906-6.6875 6.929688-41.503906 55.199219-49.089844 57.265625-49.402344 4.292969-.710937 7.230469-4.726562 6.605469-9.035156-.621094-4.308594-4.574219-7.328125-8.894531-6.796875zm0 0"/>
    <path d="m48 200c-4.417969 0-8 3.582031-8 8v32c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-32c0-4.417969-3.582031-8-8-8zm0 0"/>
  </svg>
)

const housing = (
  <svg viewBox="0 0 480.06435 480" width="480pt" xmlns="http://www.w3.org/2000/svg">
    <path d="m368.0625 208.054688h-112v112h112zm-16 48h-32v-32h32zm-48-32v32h-32v-32zm-32 48h32v32h-32zm48 32v-32h32v32zm0 0"/>
    <path d="m192.0625 288.054688h16v48h-16zm0 0"/>
    <path d="m480.0625 336.054688c0-31.804688-10.988281-64-32-64-21.007812 0-32 32.195312-32 64 0 27.480468 8.226562 55.203124 24 62.25v17.75h-40v-224h72c3.445312 0 6.503906-2.203126 7.589844-5.46875 1.089844-3.265626-.035156-6.863282-2.789063-8.929688l-232-176c-2.855469-2.164062-6.804687-2.164062-9.664062 0l-232 176c-2.761719 2.074219-3.882813 5.6875-2.777344 8.960938 1.105469 3.273437 4.1875 5.46875 7.640625 5.4375h72v224h-40v-17.75c15.777344-7.046876 24-34.769532 24-62.25 0-31.804688-10.988281-64-32-64-21.007812 0-32 32.195312-32 64 0 27.480468 8.226562 55.203124 24 62.25v17.75h-24v64h480v-64h-24v-17.75c15.777344-7.046876 24-34.769532 24-62.25zm-464 0c0-29.773438 10.402344-48 16-48 5.601562 0 16 18.226562 16 48 0 29.777343-10.359375 48-16 48-5.636719 0-16-18.222657-16-48zm15.785156-160 208.214844-157.957032 208.21875 157.957032zm64.214844 16h288v224h-144v-144c0-35.34375-28.652344-64-64-64-35.34375 0-64 28.65625-64 64v144h-16zm128 224h-96v-144c0-26.507813 21.492188-48 48-48 26.511719 0 48 21.492187 48 48zm240 48h-448v-32h448zm-32-128c0-29.773438 10.402344-48 16-48 5.601562 0 16 18.226562 16 48 0 29.777343-10.398438 48-16 48-5.597656 0-16-18.222657-16-48zm0 0"/>
  </svg>
)

const education = (
  <svg viewBox="0 -1 479.416 479" width="479pt" xmlns="http://www.w3.org/2000/svg">
    <path d="m133.65625 32.4375c-.550781-.554688-28.320312-30.601562-53.136719-32.183594-14.679687-.628906-28.847656 5.453125-38.503906 16.527344l-24 24c-11.507813 10.757812-17.476563 26.183594-16.207031 41.886719 2.878906 26.992187 28.617187 46.398437 33.054687 49.601562l287.480469 287.480469c.789062.773438 1.726562 1.378906 2.761719 1.773438l103.863281 40.570312h-356.96875c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h399.464844c1.050781-.003906 2.089844-.214844 3.0625-.617188 1.007812-.425781 1.917968-1.054687 2.671875-1.847656.601562-.632812 1.089843-1.359375 1.449219-2.152344.109374-.246093.203124-.5.28125-.761718.246093-.691406.394531-1.417969.4375-2.152344 0-.160156.046874-.621094.046874-.703125-.011718-.898437-.179687-1.792969-.484374-2.640625l-55.457032-144c-.5-.992188-1.109375-1.925781-1.816406-2.78125zm-115.945312 48.46875c-.710938-10.941406 3.621093-21.609375 11.761718-28.957031l24-24c6.023438-7.152344 14.785156-11.433594 24.128906-11.792969.597657 0 1.207032 0 1.824219.0625 15.789063.984375 30.175781 14.328125 37.160157 21.945312l-77.234376 77.265626c-7.351562-6.289063-20.039062-19.226563-21.640624-34.523438zm110.289062-31.503906 20.6875 20.691406-76.6875 76.6875-20.6875-20.6875zm-44.6875 108.691406 76.6875-76.691406 20.6875 20.691406-76.6875 76.6875zm290.152344 170.269531 36.800781 5.015625 21.207031 55.113282-41.265625 41.265624-55.007812-21.433593-5.359375-36.230469 35.785156.207031c2.125-.058593 4.152344-.890625 5.703125-2.34375 1.511719-1.511719 2.355469-3.566406 2.34375-5.703125zm33.015625 107.777344 31.28125-31.28125 19.71875 51.199219zm-40-124.871094c-2.300781-.3125-4.621094.390625-6.363281 1.925781-1.742188 1.535157-2.730469 3.75-2.710938 6.074219l.195312 36.984375-37.015624-.21875c-2.34375-.042968-4.578126.972656-6.089844 2.761719-1.527344 1.757813-2.210938 4.09375-1.871094 6.398437l3.871094 26.089844-201.183594-201.191406 16.6875-16.691406 166.34375 166.347656c3.140625 3.03125 8.128906 2.988281 11.214844-.097656 3.085937-3.085938 3.128906-8.078125.097656-11.214844l-166.34375-166.34375 20.6875-20.691406 118.34375 118.347656c3.140625 3.03125 8.128906 2.988281 11.214844-.097656 3.085937-3.085938 3.128906-8.078125.097656-11.214844l-118.34375-118.34375 16.6875-16.691406 201.550781 201.554687zm0 0"/>
    <path d="m8 478.09375h32.472656c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-32.472656c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"/>
    <path d="m250.34375 104.4375c-3.121094 3.121094-3.121094 8.1875 0 11.3125l120 120c3.140625 3.03125 8.128906 2.988281 11.214844-.097656 3.085937-3.085938 3.128906-8.078125.097656-11.214844l-120-120c-3.125-3.125-8.1875-3.125-11.3125 0zm0 0"/>
    <path d="m400 214.09375c3.234375-.003906 6.152344-1.953125 7.390625-4.941406 1.238281-2.988282.550781-6.429688-1.734375-8.714844l-64-64c-3.140625-3.03125-8.128906-2.988281-11.214844.097656-3.085937 3.085938-3.128906 8.074219-.097656 11.214844l64 64c1.5 1.5 3.535156 2.339844 5.65625 2.34375zm0 0"/>
  </svg>
)

const legal = (
  <svg viewBox="-1 0 479 480" width="480pt" xmlns="http://www.w3.org/2000/svg">
    <path d="m208.5 384h-160c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h160c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0"/>
    <path d="m40.5 160h304c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-304c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0    0"/>
    <path d="m344.5 176h-136c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h136c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0"/>
    <path d="m40.5 192h136c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-136c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"/>
    <path d="m40.5 224h208c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-208c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"/>
    <path d="m40.5 64h96c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-96c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"/>
    <path d="m40.5 96h192c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-192c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0"/>
    <path d="m40.5 480h304c22.082031-.027344 39.972656-17.917969 40-40v-156.6875l77.65625-77.65625c10.253906-10.257812 25.136719-34.175781 8-51.3125s-41.054688-2.265625-51.3125 8l-34.34375 34.34375v-156.6875c-.027344-22.082031-17.917969-39.9726562-40-40h-304c-22.082031.0273438-39.972656 17.917969-40 40v400c.027344 22.082031 17.917969 39.972656 40 40zm256-131.3125-20.6875-20.6875 148.6875-148.6875 20.6875 20.6875zm-29.230469-6.597656 15.199219 15.148437-26.167969 11zm191.574219-176.433594c6.398438 6.398438 1.601562 16.160156-2.902344 22.472656l-19.570312-19.570312c6.328125-4.460938 16.058594-9.3125 22.472656-2.902344zm-442.34375-125.65625c0-13.253906 10.746094-24 24-24h304c13.253906 0 24 10.746094 24 24v172.6875l-109.65625 109.65625c-.660156.792969-1.238281 1.648438-1.71875 2.558594l-23.199219 55.203125c-1.257812 2.996093-.574219 6.453125 1.726563 8.75 2.296875 2.292969 5.757812 2.972656 8.75 1.710937l55.160156-23.199218c.910156-.480469 1.765625-1.058594 2.554688-1.71875l66.382812-66.335938v140.6875c0 13.253906-10.746094 24-24 24h-304c-13.253906 0-24-10.746094-24-24zm0 0"/>
  </svg>
)

const employment = (
  <svg viewBox="-48 0 480 480" width="480pt" xmlns="http://www.w3.org/2000/svg">
    <path d="m136 192h112v16h-112zm0 0"/>
    <path d="m280 0h-176v86.902344c-20.535156 3.230468-35.667969 20.925781-35.667969 41.714844 0 20.789062 15.132813 38.484374 35.667969 41.710937v69.671875h176v-69.671875c20.535156-3.226563 35.667969-20.921875 35.667969-41.710937 0-20.789063-15.132813-38.484376-35.667969-41.714844zm-160 16h144v40h-144zm-35.6875 112.617188c.1875-11.890626 8.214844-22.21875 19.6875-25.335938v50.671875c-11.472656-3.117187-19.5-13.449219-19.6875-25.335937zm215.375 0c-.1875 11.886718-8.214844 22.21875-19.6875 25.335937v-50.671875c11.472656 3.117188 19.5 13.445312 19.6875 25.335938zm-35.6875 95.382812h-144v-152h144zm0 0"/>
    <path d="m144 104h24v16h-24zm0 0"/>
    <path d="m216 104h24v16h-24zm0 0"/>
    <path d="m184 136h16v32h-16zm0 0"/>
    <path d="m32 256c-17.671875 0-32 14.328125-32 32v192h384v-192c0-17.671875-14.328125-32-32-32zm288 16h32c8.835938 0 16 7.164062 16 16v176h-48zm-104.144531 86.808594-24 59.65625-23.6875-59.640625 5.601562-61.761719 12.589844 12.59375c3.125 3.121094 8.1875 3.121094 11.3125 0l12.59375-12.59375zm-3.167969-86.808594-20.6875 20.6875-20.6875-20.6875zm-132.6875 0h68.6875l10.335938 10.335938-7.023438 76.9375c-.113281 1.25.070312 2.511718.535156 3.679687l31.777344 80c1.210938 3.050781 4.164062 5.050781 7.449219 5.046875 3.261719 0 6.195312-1.984375 7.414062-5.007812l32.222657-80c.492187-1.175782.695312-2.449219.601562-3.71875l-6.992188-76.9375 10.304688-10.335938h68.6875v192h-224zm-16 192h-48v-176c0-8.835938 7.164062-16 16-16h32zm0 0"/>
  </svg>
)

const money = (
  <svg viewBox="0 -104 480 480" width="480pt" xmlns="http://www.w3.org/2000/svg">
    <path d="m472 0h-384c-4.417969 0-8 3.582031-8 8v24h-24c-4.417969 0-8 3.582031-8 8v24h-40c-4.417969 0-8 3.582031-8 8v192c0 4.417969 3.582031 8 8 8h384c4.417969 0 8-3.582031 8-8v-24h40c4.417969 0 8-3.582031 8-8v-24h24c4.417969 0 8-3.582031 8-8v-192c0-4.417969-3.582031-8-8-8zm-152 80c.011719 5.453125.957031 10.867188 2.800781 16h-245.601562c1.839843-5.132812 2.785156-10.546875 2.800781-16zm64 128h-16v-80h16zm-51.679688 16h-124.320312v-16h8c4.417969 0 8-3.582031 8-8v-32c0-4.417969-3.582031-8-8-8h-24v-16h32v-16h-16v-16h124.320312c5.355469 5.972656 12.121094 10.507812 19.679688 13.199219v85.601562c-7.558594 2.691407-14.324219 7.226563-19.679688 13.199219zm-284.320312-13.199219v-85.601562c7.554688-2.6875 14.320312-7.226563 19.671875-13.199219h124.328125v16h-8c-4.417969 0-8 3.582031-8 8v32c0 4.417969 3.582031 8 8 8h24v16h-32v16h16v16h-124.328125c-5.351563-5.972656-12.117187-10.511719-19.671875-13.199219zm-16-2.800781h-16v-80h16zm352-96h-16c-17.671875 0-32-14.328125-32-32h48zm-368-32h48c0 17.671875-14.328125 32-32 32h-16zm0 176v-32h16c17.671875 0 32 14.328125 32 32zm61.199219-16h245.601562c-1.84375 5.132812-2.789062 10.546875-2.800781 16h-240c-.015625-5.453125-.960938-10.867188-2.800781-16zm306.800781 16h-48c0-17.671875 14.328125-32 32-32h16zm48-32h-32v-152c0-4.417969-3.582031-8-8-8h-328v-16h368zm32-32h-16v-152c0-4.417969-3.582031-8-8-8h-344v-16h368zm0 0"/>
  </svg>
)

const icons = { food, family, health, housing, education, legal, employment, money }

const Category = ({ name, description }) => (
  <div className="col-lg-3 col-md-3 col-sm-6 col-6 py-3">
    <a className="card category"
      onClick={ReactGA.event({
        category: 'Category Click',
        action: name
      })}
      href={`${buildURL('/search.html')}?service-type=${name.toLowerCase()}${(process.env.IS_DISASTER_MODE === 'true' && '&disaster-only=true') || ''}`}>
      <div className="card-body text-center">
        <h5 className="card-name">{name}</h5>
        {icons[name.toLowerCase()]}
      </div>
    </a>
  </div>
)

export default Category