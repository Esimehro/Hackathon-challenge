<template>
    <div class="container">
        <img src="../assets/star.png" alt="" style="width: 20px;
height: 22px;" class="star1">
<img src="../assets/Purple4.png" alt="" class="light">
        <div class="revolution">
            <p>Igniting a Revolution in HR Innovation</p>
            <img src="../assets/Vector-4.png" alt="" class="revo-image">
        </div>
        <div class="blocks">
        <div class="block-block">
            <div class="title-block">
                <img src="../assets/Title.png" alt="" class="tittle-img">
            <p>Participate in getlinked tech Hackathon 2023 stand <br>
a chance to win a Big prize</p></div>
            <div class="button-block"><button>Register</button></div>
            <div class="timer-block">
                <div class="timer">
                    <p>{{ hours }}</p> <span>H</span>
                </div>
                <div class="timer">
                    <p>{{ minutes }}</p> <span>M</span>
                </div>
                <div class="timer">
                    <p>{{ seconds }}</p> <span>S</span>
                </div>
            </div>
            <img src="../assets/star-(1).png" alt="" style="width: 16px;
height: 22px;" class="star2">
 <img src="../assets/star-(1).png" alt="" style="width: 16px;
height: 22px;" class="star3">
        </div>
        <div class="image-block">
            <img src="../assets/man.png" alt="" class="man1">
            <img src="../assets/Image-1.png" alt="" class="man2">
            <img src="../assets/metrix.png" alt="" class="metrix">
        </div>
    </div></div>
</template>
<script>
export default {
    data() {
                return {
                    targetTime: new Date().getTime() + (54 * 60 * 60 * 1000),
                    currentTime: new Date().getTime()
                };
            },
            computed: {
                timeRemaining() {
                    const timeDiff = this.targetTime - this.currentTime;
                    const hours = Math.floor(timeDiff / (60 * 60 * 1000));
                    const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
                    const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);

                    return { hours, minutes, seconds };
                },
                hours() {
                    return this.timeRemaining.hours.toString().padStart(2, '0');
                },
                minutes() {
                    return this.timeRemaining.minutes.toString().padStart(2, '0');
                },
                seconds() {
                    return this.timeRemaining.seconds.toString().padStart(2, '0');
                }
            },
            methods: {
                updateTime() {
                    this.currentTime = new Date().getTime();
                }
            },
            mounted() {
                setInterval(this.updateTime, 1000);
            }
}
</script>
<style scoped>
    .container{
        background: #150E28;
        max-width: 1440px;
        width: 100%;
        padding: 30px 40px 10px 100px;
        border-bottom: 1px solid grey;
    }
    .revolution{
        display: flex;
        flex-direction: column;
        justify-content: right;
        position: relative;
        align-items: flex-end;
        margin-bottom: 3rem;
    }
    .revolution p{
        color: #ffffff;
  font-family: "Montserrat-BoldItalic", Helvetica;
  font-size: 36px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: normal;
  width: 742px;
  text-align: right;
    }
    .revo-image{
        width: 240px;
        position: absolute;
        bottom: 0;
        top: 40px;
    }
    .blocks{
        display: flex;
        gap: 5rem;

    }
    .block-block{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
.tittle-img{
    width:110%;
    left: 96px;
    top: 110px;
    z-index: 999;
}
.title-block p{
    color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 19px;
  font-weight: 400;
  width: 110%;
  left: 0;
  letter-spacing: 0;
  line-height: 33.2px;
}
.button-block{
    margin-top: 57px;
}
.button-block button{
    background: linear-gradient(
    180deg,
    rgb(144, 58, 255) 0%,
    rgb(212, 52, 254) 56.42%,
    rgb(255, 37.9, 184.51) 99.99%,
    rgb(254, 52, 185.32) 100%
  );
  margin-bottom: 56px;
  border-radius: 4px;
  cursor: pointer;
  height: 53px;
  width: 172px;
  border: none;
  color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  border: 2px solid #9a39ff;
  letter-spacing: 0;
  line-height: normal;
}
.button-block button:hover {
    background: transparent;
  transition: all 0.5s ease-in-out;
}
.timer-block{
    display: flex;
    gap: 18px;
    color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 64px;
}
.timer{
    display: flex;
}
.timer p{
    letter-spacing: 3px;
}
.timer span{
    font-size: 12px;
    display: flex;
    height: 100%;
    margin-top: -13px;
    align-items: flex-end;
}
    .image-block{
        position: relative;
        margin-top: 1.5rem;
    }
    .man1{
        width:100%;
        margin-left: -8rem;
    }
    .man2{
        width: 100%;
        position: absolute;
        left: -115px;
        opacity: .8;
        top: -30px;
    }
    .star1{
        position: absolute;
        top: 190px;
        left: 160px;
    }
    .star2{
        position: absolute;
        top: 480px;
        left: 500px;
    }
    .star3{
        position: absolute;
        top: 230px;
        left: 710px;
    }
    .light{
        position: absolute;
        width: 430px;
        opacity: .3;
        top: 105px;
    }
    .metrix{
        width: 150%;
        position: absolute;
        left: -250px;
        opacity: .8;
        bottom: 0;
        background-size: cover;
        background-position: center;
    }
    @media screen and (max-width: 1286px) {
        .revolution p{
  font-size: 34px;
  letter-spacing: .5px;
    }
    }
    @media screen and (max-width: 1147px) {
        .revolution p{
  font-size: 32px;
  letter-spacing: 0px;
    }
    }
    @media screen and (max-width: 1176px) {
        .container{
        max-width: 1176px;
        padding: 30px 40px 10px 84px;
        border-bottom: 1px solid grey;
    }
        .revolution p{
  font-size: 30px;
  letter-spacing: 0px;
    }
    }
    @media screen and (max-width: 1107px) {
        .container{
        max-width: 1107px;
    }
    .title-block p{
  font-size: 18px;
  width: 110%;
  line-height: 33.2px;
}
    }
    @media screen and (max-width: 1086px) {
        .container{
        max-width: 1086px;
    }
    .title-block p{
  font-size: 17px;
  width: 110%;
  line-height: 33.2px;
}
        .revolution p{
  font-size: 28px;
    }
    }
@media screen and (max-width: 1000px) {
    .container{
        max-width: 1000px;
        padding: 30px 40px 10px 52px;
    }
}
@media screen and (max-width: 975px) {
    .container{
        max-width: 975px;
        padding: 30px 40px 10px 52px;
    }
    .blocks{
        display: flex;
        gap: 3rem;
        flex-direction: column;
    }
    .title-block{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.block-block{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .title-block p{
  font-size: 22px;
  width: 100%;
  text-align: center;
  line-height: 33.2px;
}
.tittle-img{
    width:100%;
    left: 96px;
    top: 110px;
    z-index: 999;
}
.button-block{
    margin-top: 27px;
}
.button-block button{
  margin-bottom: 26px;

}
.metrix{
        width: 100%;
        position: absolute;
        left: -50px;
        opacity: .8;
        bottom: 0;
        background-size: cover;
        background-position: center;
    }
}
@media screen and (max-width: 744px) {
    .star3{
        position: absolute;
        top: 230px;
        left: 400px;
    }
}
@media screen and (max-width: 600px) {
    .revolution{
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;
        text-align: center;
    }
    .revo-image{
        width: 140px;
        bottom: 0;
        top: 40px;
        left: 330px;
    }
    .revolution p{
  font-size: 24px;
  width: 100%;
    }
    .title-block p{
  font-size: 17px;
}
    .man1{
        width:100%;
        margin-left: -3rem;
    }
    .man2{
        width: 100%;
        left: -45px;
        opacity: .8;
        top: 0px;
    }
}
@media screen and (max-width: 565px) {
    .revo-image{
        width: 140px;
        bottom: 0;
        top: 40px;
        left: 300px;
    }
}
@media screen and (max-width: 550px) {
 
    .star2{
        top: 480px;
        left: 400px;
    }
    .light{
        position: absolute;
        width: 330px;
        opacity: .3;
        top: 105px;
    }
}
@media screen and (max-width: 529px) {
    .revolution p{
  font-size: 20px;
  width: 100%;
    }
    .revo-image{
        width: 120px;
        bottom: 0;
        top: 30px;
        left: 300px;
    }
}
@media screen and (max-width: 510px) {
    .revolution p{
  font-size: 18px;
  width: 100%;
    }
    .revo-image{
        width: 100px;
        bottom: 0;
        top: 30px;
        left: 280px;
    }
}
@media screen and (max-width: 485px) {
    .title-block p{
  font-size: 15px;
}
    .revo-image{
        width: 100px;
        bottom: 0;
        top: 30px;
        left: 250px;
    }
}
@media screen and (max-width: 465px) {
    .revo-image{
        width: 100px;
        bottom: 0;
        top: 30px;
        left: 220px;
    }
}
@media screen and (max-width: 450px) {
    .revolution p{
  font-size: 16px;
  width: 100%;
    } 
    .title-block p{
  font-size: 14px;
}
    .star2{
        top: 480px;
        left: 350px;
    }
    .star3{
        top: 230px;
        left: 300px;
    }
}
@media screen and (max-width: 450px) {
    .title-block p{
  font-size: 12px;
  line-height: 18px;
}
.revo-image{
        top: 24px;
        left: 200px;
    }
    .light{
        width: 250px;
        opacity: .3;
        top: 105px;
    }
    .timer-block{
  font-size: 54px;
}
}
@media screen and (max-width: 385px) {
    .star2{
        position: absolute;
        top: 430px;
        left: 200px;
    }
    .star3{
        top: 230px;
        left: 250px;
    }
    .title-block p{
  font-size: 10px;
  line-height: 18px;
}
.revolution{
    width: 110%;
    text-align: center;
}
.revolution p{
  font-size: 14px;
  width: 100%;
    } 
    .revo-image{
        top: 22px;
        left: 150px;
    }
}
@media screen and (max-width: 325px) {
    .revolution p{
  font-size: 12px;
  width: 100%;
    } 
    .revo-image{
        top: 22px;
        left: 150px;
        width: 70px;
    }
    .light{
        width: 200px;
        top: 105px;
    }
    .timer-block{
  font-size: 34px;
}
}
</style>