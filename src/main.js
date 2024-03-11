import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css';

import {store} from './store.js';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).mount('#app')
