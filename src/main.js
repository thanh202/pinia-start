import {createPinia} from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).use(createPinia()).mount('#app')


// #1 making a store
// #2 state management
// #3 getters
// #4 Actions