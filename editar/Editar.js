export class Editar {
  init() {
    const popup = document.querySelector(".popup");
    const editButton = document.querySelectorAll(".editar");
    const nomeCat = document.querySelector("#nameCat");
    const desCat = document.querySelector("#desCat");
    const tr = document.querySelectorAll("#categorias tr");

    editButton.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        popup.classList.add("active");

        nomeCat.value = tr[index].children[1].innerText;
        desCat.value = tr[index].children[2].innerText;
      });
    });
  }
}
