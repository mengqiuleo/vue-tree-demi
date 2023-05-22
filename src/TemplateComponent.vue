<template>
  <div>
    <div ma4 class="template-component">Template Component</div>
    <div>test</div>
    <h1>牛逼plus</h1>
  </div>
</template>

<script lang="ts">
import { templateComponentProps } from "./props";
import { defineComponent } from "vue-demi";

//@ts-ignore
export default defineComponent({
  name: "VueDemiTemplateComponent",
  props: templateComponentProps,
  setup() {},
});
</script>
