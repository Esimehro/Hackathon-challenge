<template>
  <div class="container">
    <div className="image">
      <img src="../assets/manwoman.png" alt="" className="element" />
    </div>
    <div>
      <div class="blocks">
        <div className="label">
          <p className="judging-criteria-key">
            <span className="text-wrapper1">
              Judging Criteria
              <br />
            </span>
            <span className="span1">Key attributes</span>
          </p>
        </div>
        <div className="label">
          <p className="innovation-and">
            <span className="text-wrapper">Innovation and Creativity</span>
            <span className="span">
              : Evaluate the uniqueness and creativity of the
              <br />
              solution. Consider whether it addresses a real-world problem in a
              novel <br />
              way or introduces innovative features.
            </span>
          </p>
        </div>
        <div className="label">
          <p className="innovation-and">
            <span className="text-wrapper">Functionality</span>
            <span className="span">: Assess how well the solution works. Does it perform its 
              <br />
intended functions effectively and without major issues? Judges would
<br />

consider the completeness and robustness of the solution.
</span>

</p>

        </div>
        <div className="label">
          <p className="impact-and-relevance">
            <span className="text-wrapper">Impact and Relevance: </span>
            <span className="span">
              Determine the potential impact of the solution <br />
              in the real world. Does it address a significant problem, and is
              it relevant <br />
              to the target audience? Judges would assess the potential social,
              <br />
              economic, or environmental benefits.
            </span>
          </p>
        </div>
        <div className="label">
          <p className="technical-complexity">
            <span className="text-wrapper">Technical Complexity: </span>
            <span className="span">
              Evaluate the technical sophistication of the solution. <br />
              Judges would consider the complexity of the code, the use of
              advanced <br />
              technologies or algorithms, and the scalability of the solution.
            </span>
          </p>
        </div>
        <div className="label">
          <p className="adherence-to">
            <span className="text-wrapper">Adherence to Hackathon Rules: </span>
            <span className="span">
              Judges will Ensure that the team adhered <br />
              to the rules and guidelines of the hackathon, including deadlines,
              use of <br />
              specific technologies or APIs, and any other competition-specific
              requirements.
            </span>
          </p>
        </div>
        <div>
          <button>Read More</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  display: flex;
  background: #100b20;
  max-width: 1440px;
  align-items: center;
  gap: 59px;
  /* justify-content: space-between; */
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  color: #ffffff;
  padding: 54px 30px;
  position: relative;
  border-bottom: 1px solid grey;
}
.image {
  height: 587px;
  /* background: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  /* width: 410px; */
}

.image .element {
  /* height: 587px; */
  height: 100%;
  object-fit: cover;
  /* width: 710px; */
}
.blocks{
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.label {
  height: 100%;
  width: 100%;
  /* background: green; */
}

.label .judging-criteria-key {
  color: transparent;
  font-family: "Clash Display-Bold", Helvetica;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label .text-wrapper1 {
  color: #ffffff;
}

.label .span1 {
  color: #d434fe;
}
.label .innovation-and {
  color: transparent;
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: 27.8px;
  top: 0;
}

.label .text-wrapper {
  color: #ff25b8;
  font-weight: 700;
}

.label .span {
  color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 14px;
  line-height: 24.3px;
}

.label .impact-and-relevance {
  color: transparent;
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: 27.8px;
  
  top: 0;
}
 .label .technical-complexity {
  color: transparent;
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: 27.8px;
  
  top: 0;
}
.label .adherence-to {
  color: transparent;
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: 27.8px;
  
  top: 0;
} 
button {
  background: linear-gradient(
    180deg,
    rgb(144, 58, 255) 0%,
    rgb(212, 52, 254) 56.42%,
    rgb(255, 37.9, 184.51) 99.99%,
    rgb(254, 52, 185.32) 100%
  );
  border-radius: 4px;
  padding: 20px 52px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
font-style: normal;
  font-family: "Montserrat-Bold", Helvetica;
font-weight: 400;
}
</style>
