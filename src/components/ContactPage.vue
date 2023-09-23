<template>
  <div class="container">
    <Navbar />
    <div class="contact-page">
      <div class="get-in-touch">
        <h3>Get in touch</h3>
        <p class="info">Contact Information</p>
        <p class="address">27 Alara Street Yaba 100012 Lagos State</p>
        <p class="phone-number">Call us, 07067981819</p>
        <p class="availability">
          We are open from Monday- Friday 08:00am - 05:00pm
        </p>
        <p class="share-header">Share on</p>
        <div class="social-links">
          <a href=""><img src="../assets/instagram.png" alt="Instagram" /> </a>
          <a href=""><img src="../assets/x.png" alt="x" /> </a>
          <a href=""><img src="../assets/facebook.png" alt="facebook" /> </a>
          <a href=""><img src="../assets/linkedin.png" alt="linkedin" /> </a>
        </div>
      </div>

      <div class="overlay-wrapper">
        <div class="contact-text-wrapper-1">
          <h4>Questions or need assistance?</h4>
          <h4>Let us know about it</h4>
        </div>
        <p class="help">Email us below to any question related 
to our event</p>

        <form
          action=""
          @submit.prevent="proceed"
          class="contact-form"
          novalidate
        >
          <div class="text-box">
            <input
              type="text"
              placeholder="Firstname"
              v-model="contactData.firstName"
            />

            <div
              v-if="
                submitted &&
                (!contactData.firstName || contactData.firstName.length < 3)
              "
              class="error-message"
            >
              First name must be at least 3 characters.
            </div>
          </div>

          <div class="text-box">
            <input
              type="email"
              placeholder="Mail"
              v-model="contactData.email"
            />

            <div
              v-if="submitted && !isValidEmail(contactData.email)"
              class="error-message"
            >
              Invalid email address.
            </div>
          </div>

          <div class="text-box">
            <textarea
              name=""
              id=""
              cols="48"
              rows="7"
              placeholder="Message"
              v-model="contactData.message"
            ></textarea>

            <div
              v-if="
                submitted &&
                (!contactData.message || contactData.message.length < 3)
              "
              class="error-message"
            >
              Message must be at least 3 characters.
            </div>
          </div>

          <div class="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import { ref } from "vue";
import axios from "axios";
export default {
  name: "ContactPage",
  components: {
    Navbar,
  },

  setup() {
    const contactData = ref({
      firstName: "",
      email: "",
      message: "",
    });

    const submitted = ref(false);

    const isValidEmail = (email) => {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      return emailRegex.test(email);
    };

    const proceed = async () => {
      const isValidName = contactData.value.firstName.length >= 3;
      const isValidMessage = contactData.value.message.length >= 3;
      const isValidEmailValue = isValidEmail(contactData.value.email);

      if (!isValidName || !isValidEmailValue || !isValidMessage) {
        submitted.value = true;
      } else {
        try {
          const response = await axios.post(" ", {
            firstName: contactData.value.firstName,
            message: contactData.value.message,
            email: contactData.value.email,
          });

          contactData.value.firstName = "";
          contactData.value.message = "";
          contactData.value.email = "";

          submitted.value = false;
        } catch (error) {
          console.log("API request error:", error);
          if (error.response) {
            console.log("Response data:", error.response.data);
          }
        }
      }
    };
    return {
      contactData,
      submitted,
      proceed,
      isValidEmail,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
}
.contact-page {
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
  height: 100%;
  padding: 2rem 10rem 2rem 10rem;
  justify-content: space-between;
}
.get-in-touch {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.get-in-touch h3 {
  color: #d434fe;
  font-family: Clash Display;
  font-weight: 600;
  font-size: 32px;
  line-height: 39.36px;
}

.info,
.address {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.5px;
  color: #ffff;
  width: 8rem;
}
.phone-number,
.availability {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.5px;
  color: #ffff;
  width: 15rem;
}
.share-header {
  font-family: Montserrat;
  color: #d434fe;
  font-weight: 400;
  font-size: 15px;
  line-height: 19.5px;
  margin-top: 20px;
}
.social-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.social-links a img {
  width: 15px;
  height: 15px;
}
.overlay-wrapper {
  background-color: #1e182e;
  box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  -webkit-box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  /* box-shadow: 0px 0px 81px -11px rgba(0,0,0,0.1); */
  padding: 4rem;
  border-radius: 12px;
  height: 510px;
  /* width: 45%; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.contact-text-wrapper-1 h4 {
  font-family: Clash Display;
  font-weight: 600;
  font-size: 20px;
  line-height: 24.6px;
  color: #d434fe;
}
.help{
  display: none;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.text-box {
  position: relative;
}
.text-box input {
  height: 40px;
  width: 377px;
  padding-left: 7px;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #ffffff;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.text-box input::placeholder,
.text-box textarea::placeholder {
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
}
.text-box textarea {
  padding-left: 7px;
  padding-top: 8px;
  width: 377px;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #ffffff;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.submit-btn {
  display: flex;
  justify-content: center;
}
.submit-btn button {
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
.error-message {
  position: absolute;
  color: red;
  /* left: -1px;
  top: 4rem; */
  font-size: 13px;
}

@media screen and (max-width: 1217px) {
  .container {
    max-width: 1217px;
  }

  .contact-page {
    padding: 2rem 9rem 2rem 9rem;
  }
}

@media screen and (max-width: 1173px) {
  .container {
    max-width: 1173px;
  }

  .contact-page {
    padding: 2rem 7rem 2rem 7rem;
  }
}

@media screen and (max-width: 1053px) {
  .container {
    max-width: 1053px;
  }

  .contact-page {
    padding: 2rem 5rem 2rem 5rem;
  }
}

@media screen and (max-width: 865px) {
  .container {
    max-width: 865px;
  }

  .contact-page {
    padding: 0rem 0rem;
    height: 100%;
    display: flex;
    flex-direction: column-reverse; 
    gap: 6rem;
    align-items: center;
  }
  .help{
    display: block;
    font-family: Montserrat;
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  line-height: 14.63px;
  display: flex;
  justify-content: center;
  }
  .get-in-touch h3, .get-in-touch .info, .get-in-touch .address, .get-in-touch .phone-number, .get-in-touch .availability{
    display: none;
  }
  .overlay-wrapper{
    /* background-color: #1e182e; */
  /* box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  -webkit-box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  padding: 4rem;
  border-radius: 12px; */
  height: 510px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(21, 14, 40);
  /* gap: 1.5rem; */
}

.contact-text-wrapper-1 h4{
  font-family: Clash Display;
  font-weight: 600;
  font-size: 40px;
  line-height: 50.6px;
  color: #d434fe;
  width: 100%;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
}
.contact-form{
  width: 100%;
}
.text-box{
  display: flex;
  justify-content: center;
}

.text-box input{
  height: 45px;
  width: 70%;
  padding-left: 10px;
}
.text-box textarea {
  padding-left: 10px;
  padding-top: 10px;
  width: 70%;
}

.share-header{
  display: block;
  align-self: center;
}
.social-links{
  display: flex;
  gap: 20px;
}
}

@media screen and (max-width: 665px) {
  .contact-text-wrapper-1 h4{
  font-size: 30px;
  line-height: 50.6px;
  width: 100%;
}

.help{
    display: block;
    font-family: Montserrat;
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  line-height: 14.63px;
  display: flex;
  justify-content: center;
  }

}

@media screen and (max-width: 540px) {
  .container{
    max-width: 540px;
  }
  .contact-text-wrapper-1 h4{
  font-family: Clash Display;
  font-weight: 600;
  font-size: 30px;
  line-height: 35.6px;
  color: #d434fe;
  width: 80%;
  display: flex;
  justify-content: flex-start;
}
.help{
    display: block;
    font-family: Montserrat;
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  line-height: 20.63px;
  width: 80%;
  }
  .text-box input{
  height: 45px;
  width: 100%;
  padding-left: 10px;
}
.text-box textarea {
  padding-left: 10px;
  padding-top: 10px;
  width: 100%;
}
}

@media screen and (max-width: 412px) {
  .container{
    max-width: 412px;
  }
  .contact-page{
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    gap: 9rem;
    align-items: center;
    justify-content: space-between;
  }
}

</style>
