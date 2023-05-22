import { defineComponent } from "vue-demi";

interface Props {
  message: string
}

// @ts-ignore
export default defineComponent({
  name: 'MyComponent',
  props: {
    message: {
      type: String
    }
  },
  setup(props) {
    return () => (
      <div>
        <p>45646</p>
      </div>
    )
  }
})
