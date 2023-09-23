<template>
  <div class="big-idea-container">
    <div class="big-idea">
      <div class="big-idea-wrapper">
        <div class="bulb-container">
          <div class="big-bulb">
            <img src="../assets/the big idea 1.png" alt="" />
          </div>
          <div class="big-idea-2">
            The Big
            <br />
            Idea!
          </div>
          <div class="image">
            <img class="arrow" alt="Arrow" src="../assets/arrow.png" />
          </div>
          <div class="star1">
            <img src="../assets/satagra.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="intro-block">
      <p class="introduction">
        <span class="span">
          Introduction to getlinked
          <br />
        </span>
        <span class="textWrapper">tech Hackathon 1.0</span>
        <span class="star2">
          <img src="../assets/satagra.png" alt="" />
        </span>
      </p>
      <p class="our-tech-hackathon">
        Our tech hackathon is a melting pot of visionaries, and its purpose is
        as clear as day: to shape the future. Whether you&#39;re a coding
        genius, a design maverick, or a concept wizard, you&#39;ll have the
        chance to transform your ideas into reality. Solving real-world
        problems, pushing the boundaries of technology, and creating solutions
        that can change the world, that&#39;s what we&#39;re all about!
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.big-idea-container {
  background: #150e28;
  max-width: 1440px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 109px;
  height: 617px;
  border-bottom: 1px solid grey;
  padding: 65px 100px;
}
.bulb-container {
  position: relative;
}
.big-idea {
  width: 492px;
}
.big-bulb {
  position: relative;
  margin-top: 4rem;
}
.big-idea-2 {
  position: absolute;
  top: 228px;
  left: 197px;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.4px;
  text-align: center;
  color: #ffffff;
  font-family: "Montserrat-Bold", Helvetica;
}
.image {
  height: 66px;
  width: 71px;
}
.image .arrow {
  height: 66px;
  object-fit: cover;
  position: absolute;
  width: 71px;
  left: 457px;
  top: 422px;
}
.introduction {
  font-family: "Clash Display-Bold", Helvetica;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 86px;
  margin-bottom: 16px;
  line-height: 32px;
  position: relative;
}
.span {
  color: #ffffff;
}
.textWrapper {
  color: #d434fe;
}
.our-tech-hackathon {
  color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 27.5px;
  width: 88%;
}
.star1,
.star2 {
  width: 71px;
}
.star1 img {
  object-fit: cover;
  position: absolute;
  top: 163px;
  right: 530px;
}
.star2 img {
  object-fit: cover;
  position: absolute;
  top: 30px;
  left: 435px;
}
@media screen and (max-width: 1183px) {
  .introduction {
    font-size: 30px;
  }
  .big-idea-2 {
    top: 160px;
    left: 137px;
    font-size: 24px;
    font-weight: 700;
  }
  .big-bulb {
    width: 23rem;
  }
  .big-bulb img {
    width: 100%;
  }
  .image .arrow {
    height: 66px;
    width: 71px;
    left: 357px;
    top: 322px;
  }
}
@media screen and (max-width: 1085px) {
  .big-idea-container {
    gap: 79px;
  }
  .our-tech-hackathon {
    width: 100%;
  }
  .star1 img {
    object-fit: cover;
    position: absolute;
    top: 13px;
    right: 260px;
  }
}
@media screen and (max-width: 1005px) {
  .star2 img {
    object-fit: cover;
    position: absolute;
    top: 30px;
    left: 335px;
  }
  .introduction {
    font-size: 28px;
  }
}
@media screen and (max-width: 975px) {
  .big-idea-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 100%;
    padding: 0px 60px 100px 60px;
  }
  .big-bulb {
    width: 100%;
  }
  .big-idea-2 {
    top: 220px;
    left: 199px;
    font-size: 24px;
    font-weight: 700;
  }
  .intro-block {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .our-tech-hackathon {
    width: 80%;
  }
  .image .arrow {
    left: 228px;
    top: 472px;
  }
}
@media screen and (max-width: 700px) {
  .star1 img {
    top: 23px;
    right: 490px;
  }
  .our-tech-hackathon {
    width: 100%;
  }
}
@media screen and (max-width: 574px) {
  .big-idea-2 {
    top: 160px;
    left: 196px;
    font-size: 24px;
    font-weight: 700;
  }
  .big-bulb {
    width: 23rem;
    left: 60px;
  }
  .star1 img {
    top: 23px;
    right: 430px;
  }
  .image .arrow {
    left: 228px;
    top: 352px;
  }
  .star2 img {
    object-fit: cover;
    top: 30px;
    left: 295px;
  }
}
@media screen and (max-width: 574px) {
  .introduction {
    font-size: 20px;
    width: 100%;
    margin-top: -2rem;
  }
  .big-idea-2 {
    top: 128px;
    left: 121px;
    font-size: 20px;
    font-weight: 700;
    position: absolute;
  }
  .big-bulb {
    position: relative;
    width: 100%;
    left: 0px;
  }
  .image .arrow {
    left: 140px;
    top: 279px;
    width: 4rem;
  }
  .our-tech-hackathon {
    height: 100%;
  }
  .star2 img {
    object-fit: cover;
    position: absolute;
    top: 30px;
    left: 355px;
  }
  .big-idea {
    width: 20rem;
    height: 26rem;
  }
}
@media screen and (max-width: 450px) {
  .star2 img {
    object-fit: cover;
    position: absolute;
    top: 30px;
    left: 255px;
  }
}
@media screen and (max-width: 360px) {
  .big-idea-container {
    padding: 0px 20px;
  }
}
</style>
