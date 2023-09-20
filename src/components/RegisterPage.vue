<template>
  <div class="register-page">
    <div class="vector-container">
      <img src="../assets/sata-gra.png" alt="purple star" />
      <img
        class="vector"
        src="../assets/3d-graphic-designer-showing-thumbs-up.png"
        alt="Thumbs up graphic"
      />
      <img src="../assets/star.png" alt="white star" />
      <img src="../assets/sata-gra.png" alt="purple star" />
    </div>

    <div class="overlay-wrapper">
      <img src="../assets/star.png" alt="white star" />

      <h2 class="text-wrapper-1">Register</h2>

      <div class="movement">
        <p class="text-wrapper-2">
          Be part of this movement! <img src="../assets/line.png" alt="line" />
        </p>
        <img
          class="vector-girl"
          src="../assets/girl.png"
          alt="boy vector image"
        />
        <img
          class="vector-boy"
          src="../assets/boy.png"
          alt="boy vector image"
        />
      </div>

      <h2 class="form-header">CREATE YOUR ACCOUNT</h2>

      <form action="" @submit.prevent="proceed" class="form" novalidate>
        <div class="form-body">
          <div class="form-block">
            <label for="">Team's Name</label>
            <input
              type="text"
              placeholder="Enter the name of your group"
              v-model="userData.teamsName"
            />

            <div
              v-if="submitted && userData.teamsName.length < 3"
              class="error-message"
            >
              Team's name must be at least 3 characters.
            </div>
          </div>

          <div class="form-block">
            <label for="">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              v-model="userData.phoneNumber"
            />

            <div
              v-if="submitted && !isValidPhoneNumber(userData.phoneNumber)"
              class="error-message"
            >
              Phone number is required.
            </div>
          </div>
        </div>

        <div class="form-body">
          <div class="form-block">
            <label for="">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              v-model="userData.email"
            />

            <div
              v-if="submitted && !isValidEmail(userData.email)"
              class="error-message"
            >
              Invalid email address.
            </div>
          </div>

          <div class="form-block">
            <label for="">Project Topic</label>
            <input
              type="text"
              placeholder="What is your group project topic"
              v-model="userData.projectTopic"
            />

            <div
              v-if="submitted && userData.projectTopic.length < 3"
              class="error-message"
            >
              Project topic must be at least 3 characters.
            </div>
          </div>
        </div>

        <div class="form-body">
          <div class="form-dropdown">
            <label for="">Category</label>
            <select name="category" id="category" v-model="userData.category">
              <option value="volvo">Select your category</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

            <div v-if="submitted && !userData.category" class="error-message">
      Please select a category.
    </div>
          </div>

          <div class="form-dropdown">
            <label for="">Group Size</label>
            <select
              name="groupSize"
              id="groupSize"
              v-model="userData.groupSize"
            >
              <option value="select">Select</option>
              <option value="food">food</option>
              <option value="travel">travel</option>
              <option value="sleep">sleep</option>
            </select>

            <div v-if="submitted && userData.groupSize === 'select'" class="error-message">
      Please select a group size.
    </div>
          </div>
        </div>
        <p class="note">
          Please review your registration details before submitting
        </p>
        <div class="terms">
          <input
            type="checkbox"
            class="check"
            id="agreement"
            v-model="userData.agreement"
            required
          />
          <label for="agreement" class="agreement"
            >I agree with the event terms and conditions and privacy
            policy</label
          >

          <div v-if="submitted && !userData.agreement" class="error-message">
      Please agree to the terms and conditions.
    </div>
        </div>

        <div class="form-btn">
          <button type="submit">Register now</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "RegisterPage",

  setup() {
    const userData = ref({
      teamsName: "",
      phoneNumber: "",
      email: "",
      projectTopic: "",
      category: "volvo",
      groupSize: "select",
      agreement: false,
    });

    const submitted = ref(false);

    const isValidEmail = (email) => {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
      return cleanedPhoneNumber.length >= 11;
    };

    const isValidSelectCategory = (value) => {
      return value !== "volvo";
    };

    const isValidSelect = (value) => {
      return value !== "select";
    };

    const proceed = async () => {
      const isValidName = userData.value.teamsName.length >= 3;
      const isValidTopic = userData.value.projectTopic.length >= 3;
      const isValidEmailValue = isValidEmail(userData.value.email);
      const isValidPhoneNumberValue = isValidPhoneNumber(
        userData.value.phoneNumber
      );
      const isValidCategory = isValidSelect(userData.value.category);
      const isValidGroupSize = isValidSelect(userData.value.groupSize);
      const isValidAgreement = userData.value.agreement;

      if (
        !isValidName ||
        !isValidEmailValue ||
        !isValidPhoneNumberValue ||
        !isValidTopic ||
        !isValidCategory ||
        !isValidGroupSize ||
        !isValidAgreement
      ) {
        submitted.value = true;
      } else {
        try {
          const response = await axios.post(
            "https://backend.getlinked.ai/hackathon/registration",
            {
              teamsName: userData.value.teamsName,
              projectTopic: userData.value.projectTopic,
              email: userData.value.email,
              phoneNumber: userData.value.phoneNumber,
              category: userData.value.category,
              groupSize: userData.value.groupSize,
            }
          );

          userData.value.teamsName = "";
          userData.value.projectTopic = "";
          userData.value.email = "";
          userData.value.phoneNumber = "";
          userData.value.category = "volvo";
          userData.value.groupSize = "volvo";
          userData.value.agreement = false;

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
      userData,
      submitted,
      proceed,
      isValidEmail,
      isValidPhoneNumber,
      isValidSelectCategory,
      isValidSelect,
    };
  },
};
</script>

<style scoped>
.register-page {
  background-color: #150e28;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 2rem 2rem 2rem 0rem;
  /* justify-content: center; */
}
.vector-container .vector {
  height: 600px;
  width: 600px;
}
.overlay-wrapper {
  /* background: linear-gradient(
    180deg,
    rgb(144, 58, 255) 0%,
    rgb(212, 52, 254) 56.42%,
    rgb(255, 37.9, 184.51) 99.99%,
    rgb(254, 52, 185.32) 100%
  ); */
  background-color: #1e182e;
  box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  -webkit-box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: -3px 11px 12px -6px rgba(0, 0, 0, 0.69);
  /* box-shadow: 0px 0px 81px -11px rgba(0,0,0,0.1); */
  padding: 3rem;
  border-radius: 12px;
  width: 42%;
  /* height: 80%; */
}
.text-wrapper-1 {
  color: #d434fe;
  font-family: Clash Display;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.movement {
  display: flex;
  align-items: center;
  margin-bottom: 7px;
}
.text-wrapper-2 {
  position: absolute;
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
}
.vector-girl,
.vector-boy {
  position: relative;
  left: 10rem;
  top: -12px;
}
.form-header {
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 15px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form-body {
  gap: 1rem;
  display: flex;
}
.form-block {
  display: flex;
  flex-direction: column;
  position: relative;
}
.form-block label,
.form-dropdown label {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
}
.form-block input {
  width: 220px;
  height: 40px;
  padding-left: 10px;
  border-radius: 4px;
  border: none;
  outline: none;
  border: 1px solid #fff;
  color: white;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.form-block input::placeholder {
  color: rgba(255, 255, 255, 0.25);
}
.error-message {
  position: absolute;
  color: red;
  left: -1px;
  top: 4rem;
  font-size: 13px;
}
.form-dropdown {
  display: flex;
  flex-direction: column;
  /* width: 200px; */
}
.form-dropdown select {
  height: 40px;
  width: 220px;
  padding-left: 7px;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.note {
  color: #ff26b9;
  font-size: 14px;
}
.terms {
  display: flex;
  align-items: center;
}
.check {
  margin-right: 7px;
}
/* .terms label{
    color: #FFF;
    font-size: 12px;
} */
.agreement {
  font-size: 14px;
  color: #fff;
}
.form-btn button {
  width: 457px;
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
  font-size: 16px;
}
</style>
