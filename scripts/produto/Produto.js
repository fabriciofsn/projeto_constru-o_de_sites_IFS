export class Produto {
  descricao;
  categoria;
  valor;
  button;
  produtos;
  id = 0;

  valores = {
    descricao: "",
    categoria: "",
    valor: "",
  };
  constructor(categoria, descricao, valor, button, produtos) {
    this.descricao = descricao;
    this.categoria = categoria;
    this.valor = valor;
    this.button = button;
    this.produtos = produtos;
  }

  init() {
    this.getValues();
  }

  getValues() {
    this.button.addEventListener("click", () => {
      this.valores = {
        descricao: "",
        categoria: "",
        valor: "",
      };
      if (
        this.categoria.value !== "" &&
        this.descricao.value !== "" &&
        this.valor.value !== ""
      ) {
        this.valores.categoria = this.categoria.value;
        this.valores.descricao = this.descricao.value;
        this.valores.valor = this.valor.value;

        this.categoria.value = "";
        this.descricao.value = "";
        this.valor.value = "";
      }
      console.log(this.valores);

      this.addValuesToBody();
    });
  }

  addValuesToBody() {
    const tr = document.createElement("tr");
    const thDes = document.createElement("th");
    const thCat = document.createElement("th");
    const thValor = document.createElement("th");
    const thEditar = document.createElement("th");
    const thExcluir = document.createElement("th");
    const editar = document.createElement("button");
    const excluir = document.createElement("button");

    tr.classList.add(`${this.id}`);
    this.id++;

    editar.classList.add("editar");
    excluir.classList.add("excluir");
    editar.innerText = "Editar";
    excluir.innerText = "Excluir";

    thEditar.appendChild(editar);
    thExcluir.appendChild(excluir);
    thDes.innerText = this.valores.categoria;
    thCat.innerText = this.valores.descricao;
    thValor.innerText = this.valores.valor;
    tr.appendChild(thDes);
    tr.appendChild(thCat);
    tr.appendChild(thValor);
    tr.appendChild(thEditar);
    tr.appendChild(thExcluir);

    if (
      this.valores.categoria &&
      this.valores.descricao &&
      this.valores.valor
    ) {
      this.produtos.appendChild(tr);
    }
  }
}
