const gridItems = document.querySelectorAll(".grid__item");
const body = document.querySelector("body");
console.log(body);

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

// const popupList = document.querySelectorAll(".grid__item-popup");

// for (let popup of popupList) {
//   const close = popup.querySelector(".popup__box-btn");
//   const product = popup.closest(".products__grid-item");

//   product.addEventListener("click", function () {
//     popup.showModal();
//   });

//   close.addEventListener("click", function () {
//     popup.close();
//   });
// }

// const productList = document.querySelectorAll(".products__grid-item");

// const popup = document.querySelectorAll(".grid__item-popup");

// for (let product of productList) {
//   const popupProduct = product.querySelector(".grid__item-popup");
//   product.addEventListener("click", function () {
//     popupProduct.showModal();
//   });
// }

// for (let modal of popup) {
//   const close = modal.querySelector(".popup__box-btn");
//   close.addEventListener("click", function () {
//     modal.close();
//   });
// }

// class Modal {
//   constructor(type) {
//     this.type = type;
//     this.modal = document.querySelector(".Modal[data-type=" + this.type + "]");
//     this.modalBtns = document.querySelectorAll(
//       ".ModalBtn[data-type=" + this.type + "]"
//     );
//     this.modalBtnsClose = this.modal.querySelectorAll(".ModalBtn");
//     // this.FormFields = this.modal.querySelectorAll(".FormField");

//     this.#init();
//   }
//   #init() {
//     this.#defaultEvents();
//   }
//   #defaultEvents() {
//     this.modalBtns.forEach((btn) => {
//       btn.addEventListener("click", (e) => {
//         this.open();
//       });
//     });
//     this.modalBtnsClose.forEach((btn) => {
//       btn.addEventListener("click", (e) => {
//         this.close();
//       });
//     });
//     // this.FormFields.forEach((FormField) => {
//     //   FormField.addEventListener("input", (e) => {
//     //     FormField.classList.remove("__error");
//     //   });
//     // });
//   }
//   open() {
//     this.modal.classList.add("__active");
//     document.body.classList.add("__modal_open");
//   }
//   close() {
//     this.modal.classList.remove("__active");
//     document.body.classList.remove("__modal_open");
//   }
// }
