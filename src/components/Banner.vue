<template>
  <div class="banner-container">
    <div class="intro-header">
      <p>Igniting a Revolution in HR Innovation</p>
    </div>

    <div class="banner-header">
      <h1>getlinked Tech</h1>
      <h1>
        Hackathon <span>1.0</span>
        <span>
          <img src="chain.png" alt="chain" />
          <img src="../assets/boom.png" alt="boom">
        </span>
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>
<style>
.banner-container{
    background-color: bisque;
}
.intro-header{
    display: flex;
    justify-content: flex-end;
}
.intro-header P{
    font-family: Montserrat;
    font-style: italic;
    font-size: 20px;
    background-color: green;
    color: #FFFFFF;
    font-weight: 700;
}
.banner-header{
    /* font-family: Montserrat;
    font-style: italic; */
}
</style>
