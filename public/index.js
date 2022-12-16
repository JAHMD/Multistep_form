const sections = [...document.querySelectorAll(".section")];
const userInput = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const inputFields = document.querySelectorAll(".input-field");
const plans = document.querySelectorAll(".plan");
const monthlyOrYearlyPlan = document.querySelectorAll(".m-y");
const monthOrYearBtn = document.querySelector(".m-y-btn");
const planConstPer = document.querySelectorAll(".plan-per");
const pickAddsPer = document.querySelectorAll(".pick-adds-per");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const btnsContainer = document.querySelector(".buttons-container");
const stepsProgress = [...document.querySelectorAll(".step-num")];
const userData = {
  plan: "Arcade",
  billing: "monthly",
};
let secCounter = 0;
let stepsCounter = 0;

nextBtn.addEventListener("click", () => {
  // const state = checkInfo();
  // if (!state) return;
  secCounter++;
  stepsCounter =
    stepsCounter >= stepsProgress.length - 1 ? 3 : stepsCounter + 1;
  if (secCounter > sections.length) return;
  backBtn.classList.remove("hidden");
  sections.forEach((section) => {
    section.classList.add("hidden");
  });
  stepsProgress.forEach((step) => {
    step.classList.remove("active");
  });
  sections[secCounter].classList.remove("hidden");
  stepsProgress[stepsCounter].classList.add("active");
  if (secCounter >= 3) {
    nextBtn.innerText = "Confirm";
    if (secCounter > 3) btnsContainer.classList.add("hidden");
  }
});

backBtn.addEventListener("click", function () {
  secCounter--;
  stepsCounter = stepsCounter > 0 ? stepsCounter - 1 : 0;
  if (secCounter < 1) {
    backBtn.classList.add("hidden");
  }
  nextBtn.innerText = "Next Step";
  sections.forEach((section) => {
    section.classList.add("hidden");
  });
  stepsProgress.forEach((step) => {
    step.classList.remove("active");
  });
  sections[secCounter].classList.remove("hidden");
  stepsProgress[stepsCounter].classList.add("active");
});

plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    plans.forEach((plan) => {
      plan.classList.remove("active");
    });
    plan.classList.add("active");
    userData.plan = plan.getAttribute("data-plan");
    console.log(userData);
  });
});

monthOrYearBtn.addEventListener("click", () => {
  monthlyOrYearlyPlan[0].classList.toggle("active");
  monthlyOrYearlyPlan[1].classList.toggle("active");
  if (monthlyOrYearlyPlan[0].classList.contains("active")) {
    userData.billing = "monthly";
    planConstPer.forEach((plan) => {
      plan.innerText = "mo";
    });
    pickAddsPer.forEach((addOns) => {
      addOns.innerText = "mo";
    });
  } else {
    userData.billing = "monthly";
    planConstPer.forEach((plan) => {
      plan.innerText = "yr";
    });
    pickAddsPer.forEach((addOns) => {
      addOns.innerText = "yr";
    });
  }
  monthOrYearBtn.firstElementChild.classList.toggle("left-5");
});

// check info
function checkInfo() {
  const validName = /^[a-zA-Z]+$/gi;
  const validEmail = /\w+@\w+\.\w+/gi;
  const validPhone = /^[0-9]+$/gi;
  const validationConditions = [validName, validEmail, validPhone];
  const states = [];

  for (let i = 0; i < inputFields.length; i++) {
    const errMsg =
      inputFields[i].previousElementSibling.querySelector(".err-msg");
    if (!validationConditions[i].test(inputFields[i].value)) {
      errMsg.classList.remove("hidden");
      states.push(false);
      continue;
    }
    errMsg.classList.add("hidden");
    states.push(true);
  }
  return states.every((state) => state === true);
}
