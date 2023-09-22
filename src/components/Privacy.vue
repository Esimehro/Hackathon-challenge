<template>
  <div class="privacy-page">
    <div class="side-1">
      <h3>Privacy Policy and <span class="terms">Terms</span></h3>
      <p class="privacy-update">Last updated on September 12, 2023</p>
      <p class="privacy-text">
        Below are our privacy & policy, which outline a lot of goodies. it’s our
        aim to always take of our participant
      </p>

      <div class="guidelines">
        <p class="privacy-text">
          At getlinked tech Hackathon 1.0, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your data when
          you participate in our tech hackathon event. By participating in our
          event, you consent to the practices described in this policy.
        </p>
        <p class="listening-policy">Licensing Policy</p>
        <p class="privacy-text">Here are terms of our Standard License:</p>
        <div class="terms-block">
          <img src="../assets/list-terms.png" alt="list checked" />
          <p class="privacy-text">
            The Standard License grants you a non-exclusive right to navigate
            and register for our event
          </p>
        </div>
        <div class="terms-block">
          <img src="../assets/list-terms.png" alt="list checked" />
          <p class="privacy-text">
            You are licensed to use the item available at any free source sites,
            for your project developement
          </p>
        </div>
        <div class="more">
            <button>Read More</button>
        </div>
      </div>
    </div>

    <div class="side-2">
        <img src="../assets/privacy.png" alt="privacy image">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.privacy-page{
    background-color: #150e28;
    display: flex;
    padding: 3rem 3rem 3rem 7rem;
    justify-content: space-between;
}
.side-1 h3{
    font-family: Clash Display;
font-weight: 700;
font-size: 30px;
line-height: 39.36px;
color: #FFFFFF;
width: 18rem;
margin-bottom: .6rem;
}
/* .side-1{
    width: 27rem;
    background-color: green;
} */
.side-1 h3 span{
    color: #D434FE;
}
.privacy-update{
    font-family: Montserrat;
font-weight: 400;
font-size: 14px;
line-height: 27.5px;
color: hsl(0, 2%, 75%);
margin-bottom: 1rem;
}
.privacy-text{
    font-family: Montserrat;
font-weight: 400;
font-size: 14px;
line-height: 27.5px;
color: #FFFFFF;
width: 27rem;
}
.guidelines{
    border: 1px solid #D434FE;
    margin-top: 2rem;
    padding: 2rem;
    /* width: 30rem; */
}
.listening-policy{
    font-family: Montserrat;
font-weight: 400;
font-size: 14px;
line-height: 27.5px;
color: #D434FE;
margin-top: 1rem;
margin-bottom: .4rem;
}
.terms-block{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 7px;
    margin: 1rem 0rem;
}
.terms-block img{
    margin-top: 6px;
}
.more{
    display: flex;
    justify-content: center;
    align-items: center;
}
.more button{
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
.side-2{
    background-image: url('../assets/privacy-logo');
    background-repeat: no-repeat;
    background-color: linear-gradient(#903AFF
14%
#FF26B9
14%);
}
.side-2 img{
    width: 530px;
}
</style>
