import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBug } from  '@fortawesome/free-solid-svg-icons'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faBug)
library.add(faVirus)
library.add(faEnvelope)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
