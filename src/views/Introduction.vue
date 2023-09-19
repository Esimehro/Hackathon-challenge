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
        <img src="../assets/satagra.png" alt="">
            
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="introduction">
        <span class="span">
          Introduction to getlinked
          <br />
        </span>
        <span class="textWrapper">tech Hackathon 1.0</span>
        <span class="star2">
        <img src="../assets/satagra.png" alt="">

        </span>
      </p>
      <p class="our-tech-hackathon">
        Our tech hackathon is a melting pot of visionaries, and its purpose is
        as
        <br />
        clear as day: to shape the future. Whether you&#39;re a coding genius, a
        <br />
        design maverick, or a concept wizard, you&#39;ll have the chance to
        transform <br />
        your ideas into reality. Solving real-world problems, pushing the
        boundaries
        <br />
        of technology, and creating solutions that can change the world,
        <br />
        that&#39;s what we&#39;re all about!
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.big-idea-container {
  background-image: url(../assets/Rectangle7.png);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 109px;
  height: 617px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
}
.bulb-container {
  position: relative;
}
.big-idea {
  width: 492px;
}
.big-bulb {
  position: relative;
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
.introduction{
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
}
.star1,
.star2{
  width: 71px;
}
.star1 img{
  object-fit: cover;
  position: absolute;
  top: 163px;
  right: 530px;
}
.star2 img{
    object-fit: cover;
  position: absolute;
  top: 30px;
  left: 435px;
}
/* @media screen and (max-width: 412px) {
    .big-idea-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 58px;
  text-align: center;
  height: 726px;
}
.big-bulb {
    height: 257px;
  width: 100%;
}
} */
</style>
