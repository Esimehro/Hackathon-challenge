<template >
  <div class="container" id="section-5">
    <img src="../assets/Purple5.png" alt="" class="light">
    <div class="block-img">
      <img src="../assets/cwok.png" alt="" />
    </div>
    <div>
      <div class="block2">
        <div className="label">
          <p className="frequently-ask">
            <span className="text-wrapper">
              Frequently Ask
              <br />
            </span>
            <span className="span">Question</span>
          </p>
        </div>
        <div className="label">
          <p className="we-got-answers-to">
            <span className="text-wrapper">
              We got answers to the questions that you might
              <br />
              want to ask about
            </span>
            <span className="span1">getlinked Hackathon 1.0</span>
          </p>
        </div>
      </div>
      <div class="blocks">
        <div class="image-block">
          <img src="../assets/_(1).png" alt="" class="mark1">
          <img src="../assets/_(1).png" alt="" class="mark2">
          <img src="../assets/_(1).png" alt="" class="mark3">
          <img src="../assets/help.png" alt="" />
        </div>
        <div class="faq-block">
          <div class="faqs">
            <div
              v-for="(faq, i) in faqs"
              :key="i"
              class="faq"
              @click="() => toggleOpen(i)"
              :class="{ open: faq.open }"
            >
              <h4 class="question">{{ faq.question }}</h4>
              <p class="answer" v-show="faq.open">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "Can I work on a project I started before the hackathon?",
          answer:
            "Loan default can be determined when the borrowers is  financially incapable to pay back the loan. This can be because of his/her loan credit score or past history of loan defaulting. If you need further assistance ask a team member ",
          open: false,
        },
        {
          question: "What happens if I need help during the hackathon?",
          answer:
            "Loan default can be determined when the borrowers is  financially incapable to pay back the loan. This can be because of his/her loan credit score or past history of loan defaulting. If you need further assistance ask a team member ",
          open: false,
        },
        {
          question: "What happens if I don't have an idea for a project?",
          answer:
            "Loan default can be determined when the borrowers is  financially incapable to pay back the loan. This can be because of his/her loan credit score or past history of loan defaulting. If you need further assistance ask a team member ",
          open: false,
        },
        {
          question: "Can I join a team or do I have to come with one?",
          answer:
            "Loan default can be determined when the borrowers is  financially incapable to pay back the loan. This can be because of his/her loan credit score or past history of loan defaulting. If you need further assistance ask a team member ",
          open: false,
        },
        {
          question: "What happens after the hackathon ends",
          answer:
            "Loan default can be determined when the borrowers is  financially incapable to pay back the loan. This can be because of his/her loan credit score or past history of loan defaulting. If you need further assistance ask a team member ",
          open: false,
        },
        {
          question: "Can I work on a project I started before the hackathon?",
          answer:
            "Loan default can be determined when the borrowers is  financially incapable to pay back the loan. This can be because of his/her loan credit score or past history of loan defaulting. If you need further assistance ask a team member ",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleOpen(index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    },
  },
};
</script>
<style scoped>
.container {
  padding: 100px 50px 40px 150px;
  font-family: "Inter", sans-serif;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400; 
  border-bottom: 1px solid grey;
  letter-spacing: 0;
  line-height: 27.5px;
  justify-content: space-between;
  height: 100%;
  background: #150E28;
  position: relative;
}
.block-img{
    height: 630px;
}
.block-img img{
    height: 100%;
}
.label {
  height: 86px;

}
.image-block {
  position: relative;
  right: 0;
}
.mark1{
  position: absolute;
  left: 600px;
  top: -190px;
}
.mark2{
  position: absolute;
  left: 740px;
  top: -230px;
}
.mark3{
  position: absolute;
  left: 870px;
  top: -200px;
}
.light{
  position: absolute;
  right: 0px;
  width: 400px;
  top: -320px;
}
.faq-block {
  margin-bottom: 3rem;
}
.faqs {
  margin-top: 2rem;
  width: 100%;
}
.faq .question {
  position: relative;
  border-bottom: 1px solid #D434FE;
  transition: all 0.4s linear;
  padding: 15px 20px 10px 0px;
  width: 30rem;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(180deg);
}
.faq .question::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);
  width: 20px;
  height: 10px;
  background-image: url(../assets/+.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.4s linear;
  cursor: pointer;
}
.faq .answer {
  opacity: 1;
  transition: all 0.4s ease-out;
  width: 30rem;
  padding: 0px 10px;
  font-size: 16px;
}
.frequently-ask {
  color: transparent;
  font-family: "Clash Display-Bold", Helvetica;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
}

.label .text-wrapper {
  color: #ffffff;
}
.label .span {
  color: #d434fe;
}

@media screen and (max-width: 1200px) {
  .container {
  padding: 100px 50px 40px 150px;
  max-width: 1440px;
  width: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column-reverse;
  color: #ffffff;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.mark1{
  position: absolute;
  left: 0px;
  top: 460px;
}
.mark2{
  position: absolute;
  left: 135px;
  top: 420px;
}
.mark3{
  position: absolute;
  left: 280px;
  top: 450px;
}
.light{
  position: absolute;
  display: none;
  right: 0px;
  width: 400px;
  top: -320px;
}
.label{
  text-align: center;
}
}
</style>
