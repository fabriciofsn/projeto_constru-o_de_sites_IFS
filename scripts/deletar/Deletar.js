export class Deletar {
  init() {
    const categorias = document.querySelector("#categorias");
    const tr = document.querySelectorAll("#categorias tr");
    const deleteButton = document.querySelectorAll(".excluir");
    deleteButton.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        let deleteRow = confirm("Deseja deletar esta categoria?");
        if (deleteRow) {
          categorias.removeChild(tr[index]);
        }
      });
    });
  }
}
