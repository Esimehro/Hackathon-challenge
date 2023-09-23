<template>
  <div class="container">
    <div class="block1">
      <img src="../assets/Purple3.png" alt="" class="img3" />
      <img
        src="../assets/satagra.png"
        alt=""
        class="img4"
        style="width: 20px; height: 22px"
      />
      <img
        src="../assets/star.png"
        alt=""
        class="img5"
        style="width: 20px; height: 22px"
      />
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
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
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
  padding: 50px 80px 0px 181px;
  display: flex;
  height: 517px;
  align-items: center;
  gap: 5px;
  position: relative;
  max-width: 1440px;
  width: 100%;
  border-bottom: 1px solid grey;
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
  top: -510px;
  opacity: 0.6;
}
.img4 {
  position: absolute;
  background-blend-mode: hard-light;
  left: 200px;
  top: -50px;
  background: white;
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
  width: 85%;
}
.block2 {
  margin-top: -4rem;
  right: 200px;
  height: 100%;
}
.block2 img {
  height: 100%;
}
@media screen and (max-width: 1253px) {
  .block2 {
    right: 100px;
    height: 100%;
  }
  .our-tech-hackathon {
    font-size: 14px;
    margin-top: 18px;
    z-index: 999;
    width: 47%;
  }
}
@media screen and (max-width: 1253px) {
  .container {
    background: #150e28;
    padding: 100px 20px 100px 105px;
    max-width: 1253px;
    width: 100%;
  }
  .block2 {
    right: 50px;
    height: 100%;
  }
  .our-tech-hackathon {
    font-size: 14px;
    margin-top: 18px;
    z-index: 999;
    width: 40%;
  }
}
@media screen and (max-width: 975px) {
  .container {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 5px;
    padding: 100px 50px 100px 50px;
    justify-content: center;
    height: 100%;
    max-width: 975px;
    width: 100%;
  }
  .block1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .block2 {
    height: 100%;
  }
  .our-tech-hackathon {
    font-size: 14px;
    margin-top: 18px;
    z-index: 999;
    width: 100%;
  }
  .img3 {
    height: 948px;
    left: -200px;
    top: -950px;
    opacity: 0.6;
    width: 537px;
  }
}
@media screen and (max-width: 680px) {
  .block2 {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img5 {
    height: 948px;
    left: 300px;
    top: 245px;
    opacity: 0.6;
    width: 1037px;
  }
  .block2 img {
    width: 100%;
  }
}
@media screen and (max-width: 410px) {
  .rules-and-guidelines {
    font-size: 24px;
    font-weight: 700;
  }
  .img3 {
    width: 337px;
  }
  .img5 {
    left: 200px;
    top: 345px;
  }
}
</style>
