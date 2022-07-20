const userName = document.getElementById("userName");
const legend = document.getElementById("legend");
const submit = document.getElementById("submit");
const formResult = document.getElementById("formResult");

const createdets = (event) => {
  event.preventDefault();
  const formData = {
    title: userName.value,
    desc: legend.value,
  };

  if (!formData.title) {
    const alert = document.createElement("div");
    const alertP = document.createElement("p");
    alert.appendChild(alertP);
    const alertdel = document.createElement("button");
    alert.appendChild(alertdel);
    alertdel.className = "alert-del"
    alertP.innerHTML = "You must fill the areas";
    alert.className = "custom-alert-box";
    document.body.appendChild(alert);
    alertdel.addEventListener("click", () => {
      alert.className = "custom-alert-box-deleted";
    })
    return alert;
  }

  const formDataHtmlLi = document.createElement("li");
  const formDataHtmlH2 = document.createElement("h2");
  formDataHtmlH2.innerHTML = formData.title;
  const formDataHtmlH3 = document.createElement("h3");
  formDataHtmlH3.innerHTML = formData.desc;
  formDataHtmlLi.appendChild(formDataHtmlH2);
  formDataHtmlLi.appendChild(formDataHtmlH3);

  const formDataHtmlBtnRed = document.createElement("button");
  formDataHtmlLi.appendChild(formDataHtmlBtnRed);
  formDataHtmlBtnRed.innerHTML = "red";
  const formDataHtmlBtnRedFunc = () => {
    formDataHtmlH2.style.color = "red";
    formDataHtmlH3.style.color = "red";
  };
  formDataHtmlBtnRed.addEventListener("click", formDataHtmlBtnRedFunc);

  const formDataHtmlBtnBlack = document.createElement("button");
  formDataHtmlLi.appendChild(formDataHtmlBtnBlack);
  formDataHtmlBtnBlack.innerHTML = "black";
  const formDataHtmlBtnBlackFunc = () => {
    formDataHtmlH2.style.color = "black";
    formDataHtmlH3.style.color = "black";
  };
  formDataHtmlBtnBlack.addEventListener("click", formDataHtmlBtnBlackFunc);

  const formDataHtmlBtnYellow = document.createElement("button");
  formDataHtmlLi.appendChild(formDataHtmlBtnYellow);
  formDataHtmlBtnYellow.innerHTML = "Yellow";
  const formDataHtmlBtnYellowFunc = () => {
    formDataHtmlH2.style.color = "Yellow";
    formDataHtmlH3.style.color = "Yellow";
  };
  formDataHtmlBtnYellow.addEventListener("click", formDataHtmlBtnYellowFunc);

  formResult.appendChild(formDataHtmlLi);
};

submit.addEventListener("click", createdets);
