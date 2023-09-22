<template >
    <div>
        <Navbar />
        <GetLinked />
        <Introduction />
        <Guidelines />
    </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import GetLinked from "../views/GetLinked.vue";
import Introduction from "../views/Introduction.vue";
import Guidelines from "../views/Guidelines.vue";
export default {
    name: "Layout",
    components : {
        Navbar,
        GetLinked,
        Introduction,
        Guidelines,
    }
}
</script>
<style >
    
</style>