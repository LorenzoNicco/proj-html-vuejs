import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { faCopyright } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faCopyright, faChevronDown)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
