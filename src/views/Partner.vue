<template>
  <div class="container">
    <img src="../assets/Purple1.png" alt="" class="purple-light1">
    <img src="../assets/Purple2.png" alt="" class="purple-light2">
    <img src="../assets/satagra.png" alt="" class="purple-star1" style="width: 15px;
  height: 18px;">
    <div class="block1">
      <h3 class="header">Partners and Sponsors</h3>
      <p class="sub-header">
        Getlinked Hackathon 1.0 is honored to have the following major <br />
        companies as its partners and sponsors
      </p>
    </div>
    <div class="block2">
      <div class="block-img" style="gap: 48px;">
        <img src="../assets/Line 12.png" alt="" class="line-1">
        <img src="../assets/Line 17.png" alt="" class="line-1-1">
        <img src="../assets/Line 17.png" alt="" class="line-1-2">
        <img
          src="../assets/Liberty.png"
          alt=""
          style="width: 120.562px; height: 113.946px"
        />
        <img
          src="../assets/whisper.png"
          alt=""
          style="width: 147.027px; height: 109.535px"
        />
      </div>
      <div class="block-img" style="gap: 134px;">
        <img src="../assets/satagra.png" alt="" class="purple-star2" style="width: 15px;">
    <img src="../assets/star.png" alt="" class="purple-star3" style="width: 15px;">

        <img src="../assets/Line 12.png" alt="" class="line-2">
        <img src="../assets/Line 17.png" alt="" class="line-2-1">
        <img src="../assets/Line 17.png" alt="" class="line-2-2">
        
        <img
          src="../assets/Liberty-pay.png"
          alt=""
          style="width: 213.189px; height: 40.432px"
        />
        <img
          src="../assets/Paybox.png"
          alt=""
          style="width: 204.368px; height: 20.584px"
        />
      </div>
      <div class="block-img" style="gap: 99px; margin-left: -20px;">
        <img src="../assets/Line 12.png" alt="" class="line-3">
        <img
          src="../assets/Winwise.png"
          alt=""
          style="width: 131.589px; height: 107.33px"
        />
        <img
          src="../assets/Vuzual.png"
          alt=""
          style="width: 231px; height: 45px"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  background: #150e28;
  padding: 100px 120px 128px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 65px;
  position: relative;
  border-bottom: 1px solid grey;
}
.purple-light1{
    position: absolute;
    height: 50%;
    left: 0;
    top: 80px;
}
.purple-light2{
    position: absolute;
    right: 0px;
    width: 20%;
    top: 600px;
    background-blend-mode: hard-light;
    opacity: .6;
    height: 300px;
}
.purple-star2{
    position: absolute;
    top: -40px;
    left: 200px;
}
.purple-star3{
    position: absolute;
    top: 250px;
    left: 200px;
}
.purple-star1{
    position: absolute;
    left: 170px;
    top: 250px;
}
.block1 {
  display: flex;
  flex-direction: column;
  color: #ffffff;
  gap: 22px;
}
.header {
  font-family: "Clash Display-Bold", Helvetica;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 27.5px;
}
.sub-header {
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 27.5px;
  text-align: center;
}
.block2 {
  padding: 114px 109px;
  border-radius: 5px;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
  display: flex;
  gap:150px;
  align-items: center;
}
.block-img {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
}
.line-1{
    position: absolute;
    top: 135px;
    width: 257.298px;
    height: 4px;
}
.line-1-1{
    position: absolute;
    left: 234px;
}
.line-1-2{
    position: absolute;
    top: 160px;
    left: 234px;
}
.line-2{
    position: absolute;
    top: 98px;
    width: 257px;
height: 4px;
}
.line-2-1{
    position: absolute;
    left: 274px;
    top: -30px;
}
.line-2-2{
    position: absolute;
    top: 130px;
    left: 274px;
}
.line-3{
    position: absolute;
    top: 128px;
    width: 257px;
height: 4px;
left: -25px;
}

@media screen and (max-width: 1200px){
  .block2 {
  padding: 94px 99px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
  display: flex;
  gap:150px;
  align-items: center;
}
.line-3{
    position: absolute;
    top: 128px;
    width: 100%;
height: 4px;
left: -25px;
}
  
}
</style>
