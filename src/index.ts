import TreeSFC from './tree/tree.vue'
// import TreeSFC from './tree/tree'
import 'uno.css'

const TemplateComponent = {
  install(app: any, options: any) {
    console.log(options)
    app.component(TreeSFC.name, TreeSFC)
    // app.component(TemplateSFC.name, TemplateSFC)
  }
}

export default TemplateComponent
