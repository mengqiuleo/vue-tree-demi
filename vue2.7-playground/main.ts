import Vue, { version} from 'vue'
import App from './App.vue'
import treeSFC from '../src/index'
import TemplateComponent from '../dist/v2.7/index.es'


console.warn('Vue version: ', version)
Vue.config.productionTip = false
Vue.use(TemplateComponent)
Vue.use(treeSFC)

new Vue({ render: (h) => h(App) }).$mount('#app')


