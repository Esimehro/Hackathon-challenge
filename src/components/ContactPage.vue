<template>
  <div class="contact-page">
    <div class="get-in-touch">
      <h3>Get in touch</h3>
      <p class="info">Contact Information</p>
      <p class="address">27 Alara Street Yaba 100012 Lagos State</p>
      <p class="phone-number">Call us, 07067981819</p>
      <p class="availability">We are open from Monday- Friday 08:00am - 05:00pm</p>
      <p class="share-header">Share on</p>
      <div class="social-links">
        <a href=""><img src="../assets/instagram.png" alt="Instagram" />
        </a>
        <a href=""><img src="../assets/x.png" alt="x" />
        </a>
        <a href=""><img src="../assets/facebook.png" alt="facebook" />
        </a>
        <a href=""><img src="../assets/linkedin.png" alt="linkedin" />
        </a>
      </div>
    </div>

    <div class="overlay-wrapper">
      <div class="contact-text-wrapper-1">
        <h4>Questions or need assistance?</h4>
        <h4>Let us know about it</h4>
      </div>

      <form action="" class="contact-form">
        <div class="text-box">
          <input type="text" placeholder="Firstname" />
        </div>

        <div class="text-box">
          <input type="email" placeholder="Mail" />
        </div>

        <div class="text-box">
          <textarea
            name=""
            id=""
            cols="44"
            rows="7"
            placeholder="Message"
          ></textarea>
        </div>

        <div class="submit-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.contact-page{
    background-color: rgb(21, 14, 40);
    /* background: linear-gradient(
    10deg,
    rgb(21, 14, 40) 99%,
    rgb(212, 52, 254) 56.42%,
    rgb(255, 37.9, 184.51) 99.99%,
    rgb(254, 52, 185.32) 10%
  ); */
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  padding: 2rem 10rem 2rem 10rem;
  justify-content: space-between;
}
.get-in-touch{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.get-in-touch h3{
    color: #D434FE;
    font-family: Clash Display;
font-weight: 600;
font-size: 32px;
line-height: 39.36px;
}

.info, .address{
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
line-height: 19.5px;
color: #FFFF;
width: 8rem;
}
.phone-number, .availability{
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
line-height: 19.5px;
color: #FFFF;
width: 16rem;
}
.share-header{
    font-family: Montserrat;
    color: #D434FE;
    font-weight: 400;
    font-size: 15px;
line-height: 19.5px;
margin-top: 20px;
}
.social-links{
    display: flex;
    align-items: center;
    gap: .5rem;
}
.social-links a img{
    width: 15px;
    height: 15px;
}
.overlay-wrapper{
    background-color: #1e182e;
  box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  -webkit-box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  /* box-shadow: 0px 0px 81px -11px rgba(0,0,0,0.1); */
  padding: 4rem;
  border-radius: 12px;
  height: 510px;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.contact-text-wrapper-1 h4{
    font-family: Clash Display;
font-weight: 600;
font-size: 20px;
line-height: 24.6px;
color: #D434FE;
}
.contact-form{
    display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.text-box input{
    height: 40px;
  width: 350px;
  padding-left: 7px;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #FFFFFF;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.text-box input::placeholder, .text-box textarea::placeholder{
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
}
.text-box textarea{
    padding-left: 7px;
    padding-top: 8px;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #FFFFFF;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.submit-btn{
    display: flex;
    justify-content: center;
}
.submit-btn button{
    width: 145px;
  height: 40px;
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
  font-size: 12px;
}
</style>