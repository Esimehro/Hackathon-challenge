<template>
  <div id="App">
    <!-- <Introduction /> -->
    <!-- <Timeline /> -->
    <!-- <Partner /> -->
    <!-- <ContactPage/> -->
    <FAQs />
  </div>
</template>
<script>
import ContactPage from './components/ContactPage.vue';
import FAQs from './views/FAQs.vue'
// import Introduction from './views/Introduction.vue'
// import  Timeline from "./views/Timeline.vue"
// import Partner from "./views/Partner.vue"
export default {
  components: {
    // Timeline,
    // Introduction,
    FAQs,
    // ContactPage,
}
}
</script>
<style scoped>
  #App{
    max-width: 1440px;
  }
</style>
