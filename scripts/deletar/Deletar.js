export class Deletar {
  categorias;
  tr;
  deleteButton;

  constructor(categorias, tr, deleteButton) {
    this.categorias = categorias;
    this.tr = tr;
    this.deleteButton = deleteButton;
  }
  init() {
    this.deleteButton.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        let deleteRow = confirm("Deseja deletar esta categoria?");
        if (deleteRow) {
          this.categorias.removeChild(this.tr[index]);
          setTimeout(() => alert("Categoria deletada!"), 200);
        }
      });
    });
  }
}
