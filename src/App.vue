<script>
import Navbar from './components/Navbar.vue';
import Banner from './components/Banner.vue';

 export default {
    name: 'App',
    components: { Navbar, Banner}
}
</script>

<template>
 <div id="App">
<Navbar/>
<Banner/>
 </div>
</template>

<style scoped>

</style>
