export class ActiveModal {
  btnCadastrar;
  popup;
  btnClose;
  constructor(btnCadastrar, popup, btnClose) {
    this.btnCadastrar = btnCadastrar;
    this.popup = popup;
    this.btnClose = btnClose;
  }

  init() {
    this.activeModal();
  }

  activeModal() {
    this.btnCadastrar.addEventListener("click", () => {
      this.popup.classList.add("active");
    });
    this.btnClose.addEventListener("click", () => {
      this.popup.classList.remove("active");
    });
  }
}
