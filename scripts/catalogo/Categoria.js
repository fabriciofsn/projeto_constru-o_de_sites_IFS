export class Categoria {
  nome;
  descricao;
  button;
  categorias;
  id = 0;

  valores = {
    nome: "",
    descricao: "",
  };
  constructor(nome, descricao, button, categorias) {
    this.nome = nome;
    this.descricao = descricao;
    this.button = button;
    this.categorias = categorias;
  }

  init() {
    this.getValues();
  }

  getValues() {
    if (this.button)
      this.button.addEventListener("click", () => {
        this.valores = {
          nome: "",
          descricao: "",
        };
        if (this.nome.value !== "" && this.descricao.value !== "") {
          this.valores.nome = this.nome.value;
          this.valores.descricao = this.descricao.value;

          this.nome.value = "";
          this.descricao.value = "";
        }
        console.log(this.valores);

        this.addValuesToBody();
      });
  }

  addValuesToBody() {
    const tr = document.createElement("tr");
    const thIdCat = document.createElement("th");
    const thNomeCat = document.createElement("th");
    const thDesCat = document.createElement("th");
    const thEditar = document.createElement("th");
    const thExcluir = document.createElement("th");
    const editar = document.createElement("button");
    const excluir = document.createElement("button");

    tr.classList.add(`${this.id}`);
    thIdCat.innerText = `${this.id}`;
    this.id++;

    editar.classList.add("editar");
    excluir.classList.add("excluir");
    editar.innerText = "Editar";
    excluir.innerText = "Excluir";

    thEditar.appendChild(editar);
    thExcluir.appendChild(excluir);
    thNomeCat.innerText = this.valores.nome;
    thDesCat.innerText = this.valores.descricao;
    tr.appendChild(thIdCat);
    tr.appendChild(thNomeCat);
    tr.appendChild(thDesCat);
    tr.appendChild(thEditar);
    tr.appendChild(thExcluir);

    if (this.valores.nome && this.valores.descricao) {
      this.categorias.appendChild(tr);
    }
  }
}
