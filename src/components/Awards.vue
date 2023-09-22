<template>
  <div class="awards-page">
    <img class="trophy" src="../assets/trophy.png" alt="trophy" />

    <div class="awards">
      <div class="awards-text-wrapper">
        <h3>Prizes and <span>Rewards</span></h3>
        <p>
          Highlight of the prizes or rewards for winners and for participants
        </p>
      </div>

      <div class="position-container">
      <div class="position-block">
        <img src="../assets/second.png" alt="second award" />
        <h4>2nd</h4>
        <p>Runner</p>
        <h3>N300,000</h3>
      </div>

      <div class="position-block-1">
        <img src="../assets/first.png" alt="first award" />
        <h4>1st</h4>
        <p>Runner</p>
        <h3>N400,000</h3>
      </div>

      <div class="position-block">
        <img src="../assets/third.png" alt="third award" />
        <h4>3rd</h4>
        <p>Runner</p>
        <h3>N150,000</h3>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Awards",
};
</script>
<style scoped>
.awards-page {
  background-color: #150e28;
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  justify-content: space-around;
  height: 100%;
  padding: 2rem 2rem 5rem 0rem;
}
.trophy{
    width: 500px;
    height: 450px;
}
.awards{
    display: flex;
    flex-direction: column;
}
.awards-text-wrapper {
  display: flex;
  /* justify-content: flex-end; */
  flex-direction: column;
  /* background-color: red; */
  align-items: flex-start;
  padding-right: 7rem;
}
.awards-text-wrapper h3 {
  font-family: Clash Display;
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  line-height: 35.36px;
  width: 10rem;
}
.awards-text-wrapper h3 span {
  color: #d434fe;
}
.awards-text-wrapper p {
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  width: 22rem;
  margin-top: 1rem;
}
.position-block {
  /* background-color: #D434FE; */
  border: 1px solid #d434fe;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  height: 200px;
  margin-top: 10rem;
  position: relative;
}
.position-container{
    display: flex;
    gap: 1rem;
}
.position-block img {
  position: absolute;
  top: -5rem;
  width: 130px;
}
 .position-block h4{
    color: #ffffff;
    font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  margin-top: 3rem;
}
.position-block p{
    color: #ffffff;
    font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
}
.position-block h3{
    color: #D434FE;
    font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
}
.position-block-1{
    border: 1px solid #903AFF;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  height: 224px;
  margin-top: 10rem;
  position: relative;
}
.position-block-1 img {
  position: absolute;
  top: -8rem;
  width: 200px;
}
.position-block-1 h4{
    color: #ffffff;
    font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  margin-top: 3rem;
}
.position-block-1 p{
    color: #ffffff;
    font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
}
.position-block-1 h3{
    color: #D434FE;
    font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
}
</style>
