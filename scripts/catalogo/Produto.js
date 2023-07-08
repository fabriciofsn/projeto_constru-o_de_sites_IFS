export class Produto {
  nome;
  categoria;
  descricao;
  valor;
  button;
  produtos;
  id = 0;

  valores = {
    nome: "",
    categoria: "",
    descricao: "",
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
    this.addOpcoes();
    this.addValuesToBody();
    this.getValues();
  }

  addOpcoes() {
    if (localStorage.getItem("catNome")) {
      const select = document.createElement("select");
      select.setAttribute("id", "categorias");

      const categorias = localStorage.getItem("catNome");

      const JSONcat = JSON.parse(categorias);
      const arrCategorias = Array.from(JSONcat);

      for (let categoria of arrCategorias) {
        let option = document.createElement("option");

        option.innerText = categoria;
        option.setAttribute("value", categoria);
        select.appendChild(option);
      }

      if (window.location.href == "http://127.0.0.1:5500/index.html")
        this.categoria.appendChild(select);
    }
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
          const select = document.querySelector("#categorias");
          this.valores.nome = this.nome.value;
          this.valores.categoria = select.value;
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
