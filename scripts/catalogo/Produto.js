export class Produto {
  nome;
  categoria;
  descricao;
  valor;
  button;
  produtos;
  id = 0;

  valores = {
    descricao: "",
    categoria: "",
    nome: "",
    valor: "",
  };
  constructor(nome, categoria, descricao, valor, button, produtos) {
    this.nome = nome;
    this.categoria = categoria;
    this.descricao = descricao;
    this.valor = valor;
    this.button = button;
    this.produtos = produtos;
  }

  init() {
    this.getValues();
  }

  getValues() {
    if (this.button)
      this.button.addEventListener("click", () => {
        this.valores = {
          nome: "",
          categoria: "",
          descricao: "",
          valor: "",
        };
        if (
          this.nome.value !== "" &&
          this.categoria.value !== "" &&
          this.descricao.value !== "" &&
          this.valor.value !== ""
        ) {
          this.valores.nome = this.nome.value;
          this.valores.categoria = this.categoria.value;
          this.valores.descricao = this.descricao.value;
          this.valores.valor = this.valor.value;

          this.nome.value = "";
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
    const thIdPro = document.createElement("th");
    const thNomePro = document.createElement("th");
    const thCat = document.createElement("th");
    const thDesPro = document.createElement("th");
    const thValor = document.createElement("th");
    const thEditar = document.createElement("th");
    const thExcluir = document.createElement("th");
    const editar = document.createElement("button");
    const excluir = document.createElement("button");

    tr.classList.add(`${this.id}`);
    thIdPro.innerText = `${this.id}`;
    this.id++;

    editar.classList.add("editar");
    excluir.classList.add("excluir");
    editar.innerText = "Editar";
    excluir.innerText = "Excluir";

    thEditar.appendChild(editar);
    thExcluir.appendChild(excluir);
    thNomePro.innerText = this.valores.nome;
    thCat.innerText = this.valores.categoria;
    thDesPro.innerText = this.valores.descricao;
    thValor.innerText = this.valores.valor;
    tr.appendChild(thIdPro);
    tr.appendChild(thNomePro);
    tr.appendChild(thCat);
    tr.appendChild(thDesPro);
    tr.appendChild(thValor);
    tr.appendChild(thEditar);
    tr.appendChild(thExcluir);

    if (
      this.valores.nome &&
      this.valores.categoria &&
      this.valores.descricao &&
      this.valores.valor
    ) {
      this.produtos.appendChild(tr);
    }
  }
}
