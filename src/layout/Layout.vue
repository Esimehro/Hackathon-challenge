<template >
    <div>
        <Navbar />
        <GetLinked />
        <Introduction />
        <Guidelines />
        <judging />
        <FAQs />
        <Timeline />
        <Awards />
        <Partner />
        <Privacy />
        <Footer />
    </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Awards from "../components/Awards.vue";
import GetLinked from "../views/GetLinked.vue";
import Introduction from "../views/Introduction.vue";
import Guidelines from "../views/Guidelines.vue";
import FAQs from "../views/FAQs.vue";
import Privacy from "../components/Privacy.vue";
import Partner from "../views/Partner.vue";
import Judging from '../views/Judging.vue';
import Footer from '../views/Footer.vue';
import Timeline from '../views/Timeline.vue';
export default {
    name: "Layout",
    components : {
        Navbar,
        GetLinked,
        Introduction,
        Guidelines,
        Judging, 
        FAQs,
        Footer,
        Timeline,
        Awards,
        Partner,
        Privacy
    }
}
</script>
<style >
    
</style>