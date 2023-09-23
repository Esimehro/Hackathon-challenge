<template>
  <div class="container">
    <div class="block1">
      <img src="../assets/Purple3.png" alt="" class="img3" />
      <img src="../assets/satagra.png" alt="" class="img4" style="width: 20px;
height: 22px;"/>
      <img src="../assets/star.png" alt="" class="img5" style="width: 20px;
height: 22px;"/>
      <div>
        <p className="rules-and-guidelines">
          <span className="text-wrapper">
            Rules and
            <br />
          </span>
          <span className="span">Guidelines</span>
        </p>
      </div>
      <div>
        <p className="our-tech-hackathon">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as
          clear as day: to shape the future. Whether you're a coding genius, a
          design maverick, or a concept wizard, you'll have the chance to
          transform 
          your ideas into reality. Solving real-world problems, pushing the
          boundaries 
          of technology, and creating solutions that can change the world,
          
          that's what we're all about!
        </p>
      </div>
    </div>
    <div class="block2">
      <img src="../assets/lady.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  background: #150e28;
  padding: 100px 20px 100px 181px;
  display: flex;
  align-items: center;
  gap: 65px;
  position: relative;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
}
.block1 {
  width: 110%;
  position: relative;
}
.rules-and-guidelines {
  color: transparent;
  font-family: "Clash Display-Bold", Helvetica;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 32px;
}
.img3 {
  position: absolute;
  background-blend-mode: hard-light;
  height: 948px;
  left: -200px;
  top: -390px;
  opacity: 0.6;
  width: 1037px;
}
.img4 {
  position: absolute;
  background-blend-mode: hard-light;
  left: 200px;
  top: -50px;
}
.img5 {
  position: absolute;
  background-blend-mode: hard-light;
  height: 948px;
  left: 500px;
  top: 245px;
  opacity: 0.6;
  width: 1037px;
}
.text-wrapper {
  color: #ffffff;
}

.span {
  color: #d434fe;
}
.our-tech-hackathon {
  color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 27.5px;
  margin-top: 18px;
  z-index: 999;
  background: green;
  width: 40%;
}
.block2{
    position: absolute;
    background: green;
    right: 200px;
    height: 100%;
}
.block2 img{
    height: 100%;

}
</style>
