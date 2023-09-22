<template>
    <div class="container">
        <img src="../assets/star.png" alt="" style="width: 20px;
height: 22px;" class="star1">
<img src="../assets/Purple4.png" alt="" class="light">
        <div class="revolution">
            <p>Igniting a Revolution in HR Innovation</p>
            <img src="../assets/Vector 4.png" alt="" class="revo-image">
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
            <img src="../assets/star (1).png" alt="" style="width: 16px;
height: 22px;" class="star2">
 <img src="../assets/star (1).png" alt="" style="width: 16px;
height: 22px;" class="star3">
        </div>
        <div class="image-block">
            <img src="../assets/man.png" alt="" class="man1">
            <img src="../assets/Image 1.png" alt="" class="man2">
            <img src="../assets/metrix.png" alt="" class="metrix">
        </div>
    </div></div>
</template>
<script>
export default {
    data() {
                return {
                    targetTime: new Date().getTime() + (54 * 60 * 60 * 1000), // 54 hours in milliseconds
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
        padding: 10px 40px 10px 100px;
        border-bottom: 1px solid grey;
    }
    .revolution{
        /* background: green; */
        display: flex;
        flex-direction: column;
        justify-content: right;
        position: relative;
        align-items: flex-end;
        margin-bottom: 1rem;
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
        /* background: red; */
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
    }
.title-block{
    /* background: green; */
}
.tittle-img{
    width:110%;
    /* position: absolute; */
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
  /* margin-top: 3rem; */
  /* background: green; */
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
  letter-spacing: 0;
  line-height: normal;
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
    /* background: green; */
    display: flex;
    height: 100%;
    margin-top: -13px;
    align-items: flex-end;
}
    .image-block{
        /* background: green; */
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
        top: 30px;
    }
    .star2{
        position: absolute;
        top: 480px;
        left: 500px;

    }
    .star3{
        position: absolute;
        top: 80px;
        left: 710px;

    }
    .light{
        position: absolute;
        width: 430px;
        opacity: .5;
        top: -45px;
    }
    .metrix{
        width: 150%;
        position: absolute;
        left: -250px;
        opacity: .8;
        /* top: 20px; */
        bottom: 0;
        background-size: cover;
        background-position: center;
        /* background: #ffffff; */
    }
</style>