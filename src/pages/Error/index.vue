<template>
  <h3>Error Page</h3>
  <p>{{ messageRef }}</p>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "ErrorPage",
  setup() {
    const messageRef = ref("This is a vue3.0 project with Error page.");

    return {
      messageRef,
    };
  },
});
</script>
