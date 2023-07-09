export class Editar {
  popup;
  editButton;
  nomeCat;
  desCat;
  tr;
  constructor(popup, editButton, nomeCat, desCat, tr) {
    this.popup = popup;
    this.editButton = editButton;
    this.nomeCat = nomeCat;
    this.desCat = desCat;
    this.tr = tr;
  }
  init() {
    this.editButton.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        this.popup.classList.add("active");
        this.nomeCat.value = this.tr[index].children[1].innerText;
        this.desCat.value = this.tr[index].children[2].innerText;
      });
    });
  }
}
