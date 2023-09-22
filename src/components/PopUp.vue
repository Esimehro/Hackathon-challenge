<template>
  <div class="congratulations-page">
    <img class="congratulations" src="../assets/congratulation.png" alt="congratulations" />
    <div class="congrat-text-container">
      <h3 class="congrat-text-1">Congratulations</h3>
    <h3 class="congrat-text-2">you have successfully Registered!</h3>
    </div>
    
    <div class="next-step">
      <p class="congrat-text-3">Yes, it was easy and you did it!</p>
    <p class="congrat-text-4">
      check your mail box for next step Back
      <img src="../assets/emoji.png" alt="emoji" />
    </p>
    </div>
    <button class="back">Back</button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.congratulations-page{
    border: 1px solid #D434FE;
    background-color:  rgb(30, 18, 61);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 500px;
    padding: 1rem;
    margin: 20px auto;
    /* gap: 1rem; */
}
.congratulations{
    width: 320px;
}
.congrat-text-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
line-height: 28.5px;
margin-bottom: 1rem;
}
.congrat-text-1, .congrat-text-2{
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
color: #FFFF;
}
.next-step{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
line-height: 7.5px;
margin-bottom: 1.5rem;
}
.congrat-text-3, .congrat-text-4{
  font-family: Montserrat;
    font-weight: 500;
    font-size: 13px;
/* line-height: 7.5px; */
color: #FFFF;
}
.back{
  margin-top: .5rem;
  width: 360px;
  height: 37px;
  border: none;
  outline: none;
  border-radius: 4px;
  border: 1px solid
    linear-gradient(
      270deg,
      #903aff 0%,
      #d434fe 56.42%,
      #ff26b9 99.99%,
      #fe34b9 100%
    );
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  /* padding-bottom: 2rem; */
}
</style>
