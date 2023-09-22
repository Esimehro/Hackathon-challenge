<template>
  <div id="App">
    <!-- <Introduction /> -->
    <!-- <Timeline /> -->
    <!-- <Partner /> -->
    <GetLinked />
  </div>
</template>
<script>
import GetLinked from './views/GetLinked.vue'
// import Introduction from './views/Introduction.vue'
// import  Timeline from "./views/Timeline.vue"
// import Partner from "./views/Partner.vue"
export default {
  components: {
    // Timeline,
    // Introduction,
    GetLinked,
    // Partner,
  }
}
</script>
<style scoped>
  #App{
    max-width: 1440px;
  }
</style>