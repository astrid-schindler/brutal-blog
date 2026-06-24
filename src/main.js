import { createApp, h, nextTick } from 'vue'
import App from './App.vue'
// STYLES
import 'animate.css'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
import 'flowbite';


// ROUTER
import router from './router'

const motionSelector = [
    '.app-shell .layout-grid > *',
    '.app-shell article',
    '.app-shell figure',
    '.app-shell form > *',
    '.app-shell img',
    '.app-shell video',
    '.app-shell .pixel-heading',
    '.app-shell .brutal-copy',
    '.app-shell .brutal-panel',
    '.app-shell .pixel-card',
].join(',')

const motionContainerSelector = [
    '.app-shell section',
    '.app-shell .minimal-home',
    '.app-shell .layout-grid',
    '.app-shell .layout-section',
    '.app-shell .fullpage-wrapper',
    '.app-shell .fp-section',
    '.app-shell .fp-tableCell',
].join(',')

let motionObserver
let lastScrollY = window.scrollY
let scrollDirection = 'down'

function updateScrollDirection() {
    const currentScrollY = window.scrollY
    scrollDirection = currentScrollY >= lastScrollY ? 'down' : 'up'
    lastScrollY = currentScrollY
    document.documentElement.dataset.scrollDirection = scrollDirection
}

function setupMotionObserver() {
    updateScrollDirection()

    document.querySelectorAll(motionContainerSelector).forEach((element) => {
        element.classList.remove('motion-item', 'is-visible')
    })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll(motionSelector).forEach((element) => {
            element.classList.add('is-visible')
        })
        return
    }

    if (!motionObserver) {
        motionObserver = new IntersectionObserver((entries) => {
            updateScrollDirection()
            entries.forEach((entry) => {
                entry.target.classList.toggle('is-scroll-up', scrollDirection === 'up')
                entry.target.classList.toggle('is-scroll-down', scrollDirection === 'down')

                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    return
                }

                entry.target.classList.remove('is-visible')
            })
        }, {
            rootMargin: '-8% 0px -8% 0px',
            threshold: 0.18,
        })
    }

    document.querySelectorAll(motionSelector).forEach((element) => {
        if (element.classList.contains('is-visible')) {
            return
        }

        element.classList.add('motion-item')
        element.classList.toggle('is-scroll-up', scrollDirection === 'up')
        element.classList.toggle('is-scroll-down', scrollDirection === 'down')
        motionObserver.observe(element)
    })
}

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


const app = createApp({
    render: () => h(App),
    mounted() {
        window.addEventListener('scroll', updateScrollDirection, { passive: true })
        AOS.init({
            duration: 720,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
        })
        nextTick(setupMotionObserver)
    },
})

app.use(router)
router.afterEach(() => {
    nextTick(() => {
        AOS.refresh()
        setupMotionObserver()
    })
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
