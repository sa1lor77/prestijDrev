const gridItems = document.querySelectorAll(".grid__item");
const body = document.querySelector("body");

gridItems.forEach((item) => {
  const popup = item.querySelector(".grid__item-popup");
  const openPopupButton = item.querySelector(".grid__item-box");
  const closePopupButton = item.querySelector(".popup__box-btn-close");

  openPopupButton.addEventListener("click", (e) => {
    popup.showModal();
    body.classList.add("over");
  });

  closePopupButton.addEventListener("click", (e) => {
    popup.close();
    body.classList.remove("over");
  });
});

const header = document.querySelector(".header");
const openBurger = header.querySelector(".header__burger-btn");
const orderCall = header.querySelector("#callOrder");

const burgerList = header.querySelector(".burger__menu-list");

burgerList.addEventListener("click", function (event) {
  let li = event.target.closest("li");
  if (li) {
    header.classList.remove("open");
    body.classList.remove("over");
  }
});

orderCall.addEventListener("click", closeBurger);

openBurger.addEventListener("click", closeBurger);

function closeBurger() {
  if (!header.classList.contains("open")) {
    header.classList.add("open");
    body.classList.add("over");
  } else {
    header.classList.remove("open");
    body.classList.remove("over");
  }
}

const inputName = document.querySelector("#inputName");
const inputNum = document.querySelector("#inputNumber");
const formBtn = document.querySelector(".form__button");
const validate = document.querySelector(".form__validate");

const validName = document.querySelector(".form__validate-name");
const validNum = document.querySelector(".form__validate-num");
const validAll = document.querySelector(".form__validate-all");

formBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  if (!inputName.value && inputNum.value) {
    validName.classList.add("validate__active");
  }
  if ((!inputNum.value || inputName.value.length > 13) && inputName.value) {
    validNum.classList.add("validate__active");
  }

  if (!inputName.value && !inputNum.value) {
    validAll.classList.add("validate__active");
  }

  if (inputName.value && inputNum.value) {
    validName.classList.remove("validate__active");
    validNum.classList.remove("validate__active");
    validAll.classList.remove("validate__active");
  }
});

async function request(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const formMailBtn = document
  .querySelector(".formMailBtn")
  .addEventListener("click", function () {
    const data = {
      name: inputName.value,
      number: inputNum.value,
    };

    request("/mail.php", data).then((response) => {
      console.log(response);
    });
    console.log(1);
    location.reload();
  });
