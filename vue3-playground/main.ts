import { createApp } from 'vue'
import App from './App.vue'
import treeSFC from '../src/index'
import TemplateComponent from '../dist/v3/index.es'

const app = createApp(App)
app.use(TemplateComponent)
app.use(treeSFC)
app.mount('#app')


