<template>
  <div id="App">
    <!-- <Introduction /> -->
    <!-- <Timeline /> -->
    <!-- <Guidelines /> -->
    <Cart />
  </div>
</template>
<script>
// import Guidelines from './views/Guidelines.vue'
import Cart from "./views/Cart.vue"
// import Introduction from './views/Introduction.vue'
// import  Timeline from "./views/Timeline.vue"
export default {
  components: {
    // Timeline,
    // Introduction,
    // Guidelines,
    Cart
  }
}
</script>
<style scoped>
  #App{
    max-width: 1440px;
  }
</style>