<template>
    <div class="navigation">
        <div class="logo">
            <img src="../assets/logo.png" alt="Brand logo">
        </div>

        <div class="nav-right">
            <ul class="nav-links">
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>

            <div class="register-btn">
            <button>Register</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
    .navigation{
        background-color: purple;
        height: 5em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 3rem .5rem 3rem;
    }
    .logo img{
        width: 10rem;
    }
    .nav-right{
        display: flex;
        justify-content: space-between;
    }
    .nav-links{
        display: flex;
        align-items: center;
    }
    .nav-links li{
        list-style-type: none;
        color: #FFFF;
        margin: 0rem 2rem;
        font-size: 16px;
        font-family: Montserrat;
        font-weight: 500;
    }
    .register-btn button{
        background-color: rgb(218, 87, 109); 
        border: 1px solid rgb(218, 87, 109);
        border-radius: 4px;
/* Linear Gradient */
/* #903AFF
100%
#D434FE
100%
#FF26B9
100%
#FE34B9
100% */
font-size: 14px;
color: #FFFF;
font-weight: 500;
margin-left: 2rem;
width: 8rem;
height: 2rem;
padding: 1.2rem;
display: flex;
align-items: center;
justify-content: center;
    }
</style>