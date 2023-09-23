<template>
  <div>
    <div class="mobile-container">
      <div v-show="!mobileMenuOpen" class="header">
        <img
          src="../assets/Vector (3).png"
          alt=""
          class="open"
          @click="openMobileMenu"
        />
        <div class="logo">
          <img src="../assets/logo.png" alt="Brand logo" />
        </div>
      </div>

      <div class="mobile" v-show="mobileMenuOpen">
        <div class="close-block">
          <img
            src="../assets/Vector (4).png"
            alt=""
            class="close"
            @click="closeMobileMenu"
          />
        </div>
        <div>
          <ul class="links">
            <li><a href="#section-6" class="active-link">Timeline</a></li>
            <li><a href="#">Overview</a></li>
            <li><a href="#">FAQs</a></li>
            <li><router-link to="/contact" class="active-link">Contact</router-link></li>
          </ul>
          <div class="register-btn2">
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation">
      <div class="logo">
        <router-link to="/">
        <img src="../assets/logo.png" alt="Brand logo" />
      </router-link>
      </div>
      <div class="nav-right">
        <ul class="nav-links">
          <li><a href="#section-6" class="active-link">Timeline</a></li>
            <li><a href="#">Overview</a></li>
            <li><a href="#">FAQs</a></li>
          <li><router-link to="/contact" class="active-link">Contact</router-link></li>
        </ul>

        <div class="register-btn" >
          <router-link to="/register">
          <button>Register</button>
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    openMobileMenu() {
      this.mobileMenuOpen = true;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    closeMobileMenuAndNavigate(page) {
      this.closeMobileMenu();
    },
  },
};
</script>

<style scoped>
.navigation {
  position: relative;
  background: #150e28;
  max-width: 1440px;
  width: 100%;
  height: 118px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat-Regular", Helvetica;
  padding: 56px 125px 30px 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}
.logo img {
  width: 10rem;
}
.nav-right {
  display: flex;
  justify-content: space-between;
}
.nav-links {
  display: flex;
  align-items: center;
}
.nav-links li {
  list-style-type: none;
  color: #ffffff;
  font-size: 16px;
  margin: 0rem 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.nav-links li:hover {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(
    180deg,
    rgb(144, 58, 255) 0%,
    rgb(255, 37.9, 184.51) 100%
  );
  background-clip: text;
  color: transparent;
  text-fill-color: transparent;
}
.links a.active-link {
  color: green;
}
.register-btn button {
  background: linear-gradient(
    180deg,
    rgb(144, 58, 255) 0%,
    rgb(212, 52, 254) 56.42%,
    rgb(255, 37.9, 184.51) 99.99%,
    rgb(254, 52, 185.32) 100%
  );
  border-radius: 4px;
  cursor: pointer;
  height: 53px;
  width: 172px;
  border: 2px solid #9a39ff;
  color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 3rem;
  width: 8rem;
  height: 2rem;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}
.register-btn2 button {
  margin-top: 18px;
  background: linear-gradient(
    180deg,
    rgb(144, 58, 255) 0%,
    rgb(212, 52, 254) 56.42%,
    rgb(255, 37.9, 184.51) 99.99%,
    rgb(254, 52, 185.32) 100%
  );
  border-radius: 4px;
  cursor: pointer;
  height: 53px;
  width: 172px;
  border: 2px solid #9a39ff;
  color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
}
.register-btn button:hover {
  background: transparent;
  transition: all 0.5s ease-in-out;
}
.mobile {
  background: #150e28;
  left: 0;
  padding: 40px 47px 114px 47px;
  width: 100vw;
  position: absolute;
  top: 0;
}
.close-block {
  display: flex;
  justify-content: flex-end;
}
.close {
  padding: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ff26b9;
  cursor: pointer;
}
.links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.links li {
  list-style-type: none;
  color: #ffffff;
  font-size: 18px;
}
.header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
.mobile-container {
  display: none;
}
.open {
  cursor: pointer;
}
@media screen and (max-width: 1176px) {
  .navigation {
    max-width: 1176px;
    padding: 56px 85px 30px 85px;
  }
  .nav-links li {
    margin: 0rem 1.5rem;
  }
  .register-btn button {
    margin-left: 2rem;
  }
}
@media screen and (max-width: 1000px) {
  .navigation {
    max-width: 1000px;
    padding: 56px 55px 30px 55px;
  }
  .nav-links li {
    margin: 0rem 1.2rem;
  }
  .logo img {
    width: 8rem;
  }
}
@media screen and (max-width: 835px) {
  .navigation {
    max-width: 835px;
    padding: 56px 35px 30px 35px;
  }
  .nav-links li {
    margin: 0rem 1rem;
  }
}
@media screen and (max-width: 745px) {
  .navigation {
    max-width: 745px;
    padding: 56px 35px 30px 35px;
  }
  .nav-links li {
    margin: 0rem 0.8rem;
  }
  .register-btn button {
    height: 53px;
    font-size: 16px;
    font-weight: 400;
    margin-left: 1.5rem;
    width: 7rem;
    height: 2rem;
    padding: 1.2rem;
  }
}
@media screen and (max-width: 681px) {
  .navigation {
    max-width: 681px;
    padding: 56px 25px 30px 25px;
  }
  .nav-links li {
    margin: 0rem 0.8rem;
    font-size: 14px;
  }
  .logo img {
    width: 6rem;
  }
  .register-btn button {
    height: 53px;
    font-size: 14px;
    font-weight: 400;
    margin-left: 1rem;
    width: 6.5rem;
    height: 2rem;
    padding: 1.2rem;
  }
}
@media screen and (max-width: 540px) {
  .navigation {
    display: none;
  }
  .mobile-container {
    display: block;
  }
  .logo img {
    width: 8rem;
  }
  .mobile-container {
    position: relative;
    background: #150e28;
    max-width: 540px;
    width: 100%;
    height: 100px;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s ease-in-out;
    font-family: "Montserrat-Regular", Helvetica;
    padding: 40px 47px 10px 47px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }
}
@media screen and (max-width: 340px) {
  .mobile-container {
    max-width: 340px;
    padding: 40px 27px 10px 27px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }
}
</style>
