export class Editar {
  popup;
  editButton;
  nomeCat;
  desCat;
  tr;
  popupButton;
  constructor(popup, editButton, nomeCat, desCat, tr, popupButton) {
    this.popup = popup;
    this.editButton = editButton;
    this.nomeCat = nomeCat;
    this.desCat = desCat;
    this.tr = tr;
    this.popupButton = popupButton;
  }
  init() {
    this.editButton.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        this.popup.classList.add("active");
        this.popupButton.innerText = "Atualizar";
        this.nomeCat.value = this.tr[index].children[1].innerText;
        this.desCat.value = this.tr[index].children[2].innerText;
      });
    });
  }
}
