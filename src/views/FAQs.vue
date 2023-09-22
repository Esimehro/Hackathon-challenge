<template lang="">
  <div class="container">
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
            <span className="span">getlinked Hackathon 1.0</span>
          </p>
        </div>
      </div>
      <div class="blocks">
        <div class="image-block">
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
          faq.open = false; // Close other FAQs
        }
        return faq;
      });
    },
  },
};
</script>
<style scoped>
.container {
  padding: 40px 50px 40px 150px;
  font-family: "Inter", sans-serif;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400; 
  letter-spacing: 0;
  line-height: 27.5px;
  justify-content: space-between;
  height: 100%;
  background: #150E28;
}
.block-img{
    /* background: green; */
    height: 630px;
}
.block-img img{
    height: 100%;
}
.block2{
    /* background: orange; */
    width: 100%;
}
.label {
  height: 86px;
  /* width: 253px; */
  width: 100%;
  /* background: green; */
}

.label .frequently-ask {
  color: transparent;
  font-family: "Clash Display-Bold", Helvetica;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 32px;
}

.label .text-wrapper {
  color: #ffffff;
}

.label .span {
  color: #d434fe;
}
/* .blocks {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  padding-top: 5rem;
} */
.image-block {
  /* background-color: aqua; */
  /* display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
  margin-bottom: 2rem; */
}
.image-block img {
  /* width: 20rem; */
}
.faq-block {
  height: 100%;
  margin-bottom: 3rem;
}
.faqs {
  margin-top: 2rem;
  /* background: orange; */
  width: 100%;
}
.faq.open {
    /* background: pink; */
    width: 100%;
}
.faq .question {
  position: relative;
  border-bottom: 1px solid #D434FE;
  transition: all 0.4s linear;
  padding: 15px 20px 10px 0px;
  width: 100%;
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
  /* background-color: purple; */
  height: 100%;
  width: 100%;
  /* padding: 5px 15px 15px 15px; */
  font-size: 16px;
}
</style>
