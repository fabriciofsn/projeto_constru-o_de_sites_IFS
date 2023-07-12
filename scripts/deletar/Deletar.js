export class Deletar {
  categorias;
  tr;
  deleteButton;
  artigo = "";
  verbo = "";

  constructor(categorias, tr, deleteButton, artigo, verbo) {
    this.categorias = categorias;
    this.tr = tr;
    this.deleteButton = deleteButton;
    this.artigo = artigo;
    this.verbo = verbo;
  }
  init() {
    if (this.categorias && this.tr && this.deleteButton)
      this.deleteButton.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          let deleteRow = confirm(
            `Deseja deletar ${this.artigo} ${this.verbo}?`
          );
          if (deleteRow) {
            this.categorias.removeChild(this.tr[index]);
            setTimeout(() => alert(`${this.verbo} deletada!`), 200);
          }
        });
      });
  }
}
