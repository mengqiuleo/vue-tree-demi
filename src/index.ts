import TreeSFC from './tree/tree.vue'
import TemplateSFC from './TemplateComponent.vue'
// import 'uno.css'
import 'virtual:uno.css'


const TemplateComponent = {
  install(app: any, options: any) {
    console.log(options)
    app.component(TreeSFC.name, TreeSFC)
    app.component(TemplateSFC.name, TemplateSFC)
  }
}

export default TemplateComponent
