import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css';

import Vuex from 'vuex'; // Importa Vuex
import store from './store'; // Importa il tuo file di configurazione dello store Vuex

const app = createApp(App);

app.use(Vuex); // Usa Vuex nel tuo progetto

app.use(store); // Usa il tuo store Vuex

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).mount('#app')
