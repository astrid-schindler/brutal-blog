import { createApp } from 'vue'
import App from './App.vue'

// STYLES
import 'animate.css'
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
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faBehance} from "@fortawesome/free-brands-svg-icons"
import { faICursor} from "@fortawesome/free-solid-svg-icons"

// Ich würde mich sehr freuen dieses Icon zu bekommen!!!!!!!!

// ROUTER
import router from './router'

/* add icons to the library */
library.add(faUserSecret)
library.add(faBug)
library.add(faVirus)
library.add(faEnvelope)
library.add(faVideo)
library.add(faTwitter)
library.add(faFacebook)
library.add(faBehance)
library.add(faICursor)

createApp(App).use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
