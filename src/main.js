import { createApp, h, nextTick } from 'vue'
import App from './App.vue'
// STYLES
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faSmog } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faBehance} from "@fortawesome/free-brands-svg-icons"
import { faGithub} from "@fortawesome/free-brands-svg-icons"


// ROUTER
import router from './router'

var motionSelector = [
    '.app-shell .layout-grid > *',
    '.app-shell article',
    '.app-shell figure',
    '.app-shell form > *',
    '.app-shell img',
    '.app-shell video',
    '.app-shell .section-heading',
    '.app-shell .text-panel',
].join(',')

var motionContainerSelector = [
    '.app-shell section',
    '.app-shell .minimal-home',
    '.app-shell .layout-grid',
    '.app-shell .layout-section',
].join(',')

var motionObserver
var lastScrollY = window.scrollY
var scrollDirection = 'down'

function updateScrollDirection() {
    var currentScrollY = window.scrollY
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

library.add(faEnvelope)
library.add(faArrowDown)
library.add(faCloud)
library.add(faCloudRain)
library.add(faCloudShowersHeavy)
library.add(faCloudSun)
library.add(faSmog)
library.add(faSnowflake)
library.add(faSun)
library.add(faMoon)
library.add(faTwitter)
library.add(faFacebook)
library.add(faBehance)
library.add(faGithub)


var app = createApp({
    render: () => h(App),
    mounted() {
        window.addEventListener('scroll', updateScrollDirection, { passive: true })
        nextTick(setupMotionObserver)
    },
})

app.use(router)
router.afterEach(() => {
    nextTick(() => {
        setupMotionObserver()
    })
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
