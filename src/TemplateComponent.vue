<template>
  <div>
    <div class="template-component">
      Template Component. Vue version: {{ version }}
    </div>
    <div>
      <h3>{{ msg }}, {{ name }}</h3>
      <button @click="inc">
        Inc
      </button>
      <div>{{ count }} x 2 = {{ doubled }}</div>
      <button @click="dec()" v-html="decText" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent,computed,ref, watch, version } from "vue-demi";

//@ts-ignore
export default defineComponent({
  name: "TemplateSFC",
  props: {
    msg: {
      type: String,
      default: 'hi'
    },
    name: {
      type: String,
      default: 'pjy'
    }
  },
  setup(props, { emit }) {
    const count = ref(0)
    const doubled = computed(() => count.value * 2)

    function inc() {
      count.value += 1
    }
    function dec() {
      count.value -= 1
    }

    const decText = '<b>Dec</b>'

    // const emit = defineEmits(['foo', 'bar'])

    // const emit = defineEmits<{
    //   (event: 'update', value: number): void
    // }>()
    watch(count, value => emit('update', value))
    return {
      decText,
      doubled,
      count,
      version,
      inc,
      dec
    }
  },
});
</script>


<style scoped>
.template-component {
  color: #2c3e50;
}
</style>