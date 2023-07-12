export class Produto {
  nome;
  categoria;
  descricao;
  valor;
  button;
  produtos;

  arrId = [];
  arrNome = [];
  arrCategoria = [];
  arrDes = [];
  arrValor = [];

  id = Math.floor(Math.random() * 10000);

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
    this.onload();
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

          this.arrId.push(this.id);
          this.arrNome.push(this.valores.nome);
          this.arrCategoria.push(select.value);
          this.arrDes.push(this.valores.descricao);
          this.arrValor.push(this.valores.valor);

          localStorage.setItem("idPro", JSON.stringify(this.arrId));
          localStorage.setItem("nomePro", JSON.stringify(this.arrNome));
          localStorage.setItem("catPro", JSON.stringify(this.arrCategoria));
          localStorage.setItem("desPro", JSON.stringify(this.arrDes));
          localStorage.setItem("valorPro", JSON.stringify(this.arrValor));
        }
        console.log(this.valores);

        this.addValuesToBody();
      });
  }

  onload() {
    if (
      localStorage.getItem("idPro") &&
      localStorage.getItem("nomePro") &&
      localStorage.getItem("catPro") &&
      localStorage.getItem("desPro") &&
      localStorage.getItem("valorPro") &&
      window.location.href == "http://127.0.0.1:5500/index.html"
    ) {
      let id = localStorage.getItem("idPro");
      let nome = localStorage.getItem("nomePro");
      let cat = localStorage.getItem("catPro");
      let des = localStorage.getItem("desPro");
      let valor = localStorage.getItem("valorPro");

      let jsonId = JSON.parse(id);
      let jsonNome = JSON.parse(nome);
      let jsonCat = JSON.parse(cat);
      let jsonDes = JSON.parse(des);
      let jsonValor = JSON.parse(valor);

      let arrID = Array.from(jsonId);
      let arrNome = Array.from(jsonNome);
      let arrCat = Array.from(jsonCat);
      let arrDes = Array.from(jsonDes);
      let arrValor = Array.from(jsonValor);

      for (let i = 0; i < arrNome.length; i++) {
        const tr = document.createElement("tr");
        const thIdCat = document.createElement("th");
        const thNomeCat = document.createElement("th");
        const thDesCat = document.createElement("th");
        const thDes = document.createElement("th");
        const thDesc = document.createElement("th");
        const thValor = document.createElement("th");
        const thEditar = document.createElement("th");
        const thDeletar = document.createElement("th");
        const editar = document.createElement("button");
        const deletar = document.createElement("button");

        editar.innerText = "Editar";
        editar.classList.add("editar");
        deletar.innerText = "Excluir";
        deletar.classList.add("excluir");

        thIdCat.innerText = arrID[i];
        tr.append(thIdCat);
        this.produtos.appendChild(tr);

        thNomeCat.innerText = arrNome[i];
        tr.appendChild(thNomeCat);
        this.produtos.appendChild(tr);

        thDesCat.innerText = arrCat[i];
        tr.appendChild(thDesCat);
        this.produtos.appendChild(tr);

        thDes.innerText = arrCat[i];
        tr.appendChild(thDesCat);
        this.produtos.appendChild(tr);

        thDesc.innerText = arrDes[i];
        tr.appendChild(thDesc);
        this.produtos.appendChild(tr);

        thValor.innerText = arrValor[i];
        tr.appendChild(thValor);
        this.produtos.appendChild(tr);

        thEditar.appendChild(editar);
        tr.appendChild(thEditar);
        this.produtos.appendChild(tr);

        thDeletar.appendChild(deletar);
        tr.appendChild(thDeletar);
        this.produtos.appendChild(tr);
      }

      this.addValuesToBody();
    }
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
    this.id = Math.floor(Math.random() * 10000);

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
