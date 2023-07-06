export class Categoria {
  descricao;
  nome;
  button;
  categorias;
  id = 0;

  valores = {
    descricao: "",
    nome: "",
  };
  constructor(nome, descricao, button, categorias) {
    this.descricao = descricao;
    this.nome = nome;
    this.button = button;
    this.categorias = categorias;
  }

  init() {
    this.getValues();
  }

  getValues() {
    this.button.addEventListener("click", () => {
      this.valores = {
        descricao: "",
        nome: "",
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
