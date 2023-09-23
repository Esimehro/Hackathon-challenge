<template >
    <div>
        <Navbar />
        <GetLinked />
        <Introduction />
        <Guidelines />
        <Timeline />
        <!-- <judging /> -->
        <!-- <Partner /> -->
        <Footer />
    </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import GetLinked from "../views/GetLinked.vue";
import Introduction from "../views/Introduction.vue";
import Guidelines from "../views/Guidelines.vue";
// import Judging from '../views/Judging.vue';
import Footer from '../views/Footer.vue';
import Timeline from '../views/Timeline.vue';
export default {
    name: "Layout",
    components : {
        Navbar,
        GetLinked,
        Introduction,
        Guidelines,
        // Judging, 
        Footer,
        Timeline
        // Partner,
    }
}
</script>
<style >
    
</style>