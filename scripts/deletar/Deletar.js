export class Deletar {
  tr;
  button;
  constructor(tr, button) {
    this.tr = tr;
    this.button = button;
  }

  init() {
    this.button.addEventListener("click", () => {
      console.log("teste");
    });

    // this.deletar();
    console.log(this.tr);
    console.log(this.button);
  }

  deletar() {
    if (this.button) {
      this.button.forEach((btn) => {
        btn.addEventListener("click", () => {
          console.log("teste");
        });
      });
    }
  }
}
