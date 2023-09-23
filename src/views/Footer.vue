<template>
  <div class="container">
    <img src="../assets/star.png" alt="" class="white-star" />
    <img src="../assets/star.png" alt="" class="white-star2" />
    <div class="block-1">
      <div class="get-block">
        <div class="label">
          <p class="getlinked">
            <span class="text-wrapper">get</span>
            <span class="span">linked</span>
          </p>
          <p class="get-text">
            Getlinked Tech Hackathon is a technology innovation program <br />
            established by a group of organizations with the aim of showcasing
            <br />
            young and talented individuals in the field of technology
          </p>
        </div>
        <div class="terms-block">
          <p>Terms of Use</p>
          <img
            src="../assets/Line 20.png"
            alt=""
            style="width: 2px; height: 17px"
          />
          <p>Privacy Policy</p>
        </div>
      </div>
      <div class="label1">
        <img src="../assets/star-(1).png" alt="" class="dark-star" />
        <div>
          <p class="text-wrapper1">Useful Links</p>
        </div>
        <div class="links-block">
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <div class="social">
            <p style="color: #d434fe">Follow us</p>
            <img src="../assets/instagram.png" alt="" />
            <img
              src="../assets/twitter.png"
              alt=""
              style="width: 19px; height: 17px"
            />
            <img
              src="../assets/facebook.png"
              alt=""
              style="width: 10.5px; height: 20px"
            />
            <img src="../assets/linkedin.png" alt="" />
          </div>
        </div>
      </div>
      <div class="label1">
        <div>
          <p class="text-wrapper1">Contact Us</p>
        </div>
        <div class="contact-block">
          <div class="contact">
            <img
              src="../assets/Group.png"
              alt=""
              style="width: 12px; height: 12px"
            />
            <p>+234 6707653444</p>
          </div>
          <div class="contact">
            <img
              src="../assets/Vector-(2).png"
              alt=""
              style="width: 13px; height: 15px"
            />
            <p>
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="rights">
      <img src="../assets/starpu.png" alt="" class="star-purple" />
      <p>All rights reserved. © getlinked Ltd.</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background: #100b20;
  max-width: 1440px;
  align-items: center;
  gap: 59px;
  width: 100%;
  height: 393px;
  flex-shrink: 0;
  color: #ffffff;
  padding: 54px 135px;
  position: relative;
  font-family: "Montserrat-Regular", Helvetica;
}
.white-star {
  position: absolute;
  left: 60px;
  top: 100px;
  width: 15px;
  height: 18px;
}
.white-star2 {
  position: absolute;
  width: 15px;
  height: 18px;
  top: 200px;
  right: 60px;
}
.dark-star {
  position: absolute;
  width: 15px;
  height: 18px;
  right: 400px;
  top: 70px;
}
.block-1 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.get-block {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.get-text {
  line-height: 24px;
  letter-spacing: 0.5px;
}
.label {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
}
.label .getlinked {
  font-size: 36px;
  font-weight: 700;
}
.label .text-wrapper {
  color: #ffffff;
}
.label .span {
  color: #d434fe;
}
.terms-block {
  display: flex;
  gap: 1rem;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0.5px;
}
.label1 {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.text-wrapper1 {
  color: #d434fe;
  font-size: 14px;
}
.links-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20.7px;
}
.social {
  display: flex;
  gap: 19px;
  align-items: center;
  letter-spacing: 0.5px;
}
.social img {
  width: 24px;
  height: 24px;
}
.contact-block {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 10px;
  font-size: 12px;
}
.contact {
  display: flex;
  gap: 16px;
}
.star-purple {
  position: absolute;
  top: -44px;
  left: 115px;
  width: 15px;
  height: 18px;
}
.rights {
  letter-spacing: 0.5px;
  position: relative;
  height: 100%;
}

@media screen and (max-width:1091px) {
  .get-text {
  width: 70%;
}
.container {
  max-width: 1091px;
  align-items: center;
  gap: 59px;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  padding: 54px 85px;
}
}
@media screen and (max-width:965px) {
  .block-1 {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
}
.get-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
}
@media screen and (max-width:693px) {
  .label .getlinked {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0;
}
  .get-text {
  width: 100%;
}
}
@media screen and (max-width:480px) {
  .container {
  max-width: 1091px;
  align-items: center;
  gap: 59px;
  padding: 54px 45px;
}
.white-star2 {
  width: 15px;
  height: 18px;
  top: 230px;
  right: 90px;
}
}
</style>
