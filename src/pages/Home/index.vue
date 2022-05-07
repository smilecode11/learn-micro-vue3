<template>
  <h3>Home Page</h3>
  <p>{{ messageRef }}</p>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HomePage",
  setup() {
    const messageRef = ref("This is a vue3.0 project with Home page.");

    return {
      messageRef,
    };
  },
});
</script>
