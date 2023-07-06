export class Produto {
  descricao;
  categoria;
  nome;
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
  constructor(descricao, nome, categoria, valor, button, produtos) {
    this.descricao = descricao;
    this.nome = nome;
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
        nome: "",
        valor: "",
      };
      if (
        this.categoria.value !== "" &&
        this.descricao.value !== "" &&
        this.nome.value !== "" &&
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
    const thDesPro = document.createElement("th");
    const thCat = document.createElement("th");
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
    thDesPro.innerText = this.valores.descricao;
    thCat.innerText = this.valores.categoria;
    thValor.innerText = this.valores.valor;
    tr.appendChild(thIdPro);
    tr.appendChild(thNomePro);
    tr.appendChild(thDesPro);
    tr.appendChild(thCat);
    tr.appendChild(thValor);
    tr.appendChild(thEditar);
    tr.appendChild(thExcluir);

    if (
      this.valores.categoria &&
      this.valores.descricao &&
      this.valores.nome &&
      this.valores.valor
    ) {
      this.produtos.appendChild(tr);
    }
  }
}
