export class Categoria {
  nome;
  descricao;
  button;
  categorias;

  catID = [];
  catNome = [];
  catDesc = [];
  categoriasSearch = [];

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

  loadID() {
    const localID = localStorage.getItem("catID");
    const parseJSON = JSON.parse(localID);
    if (parseJSON) {
      const arrID = Array.from(parseJSON);
      this.id = arrID.length;
    }
  }

  init() {
    this.searchById();
    this.onLoad();
    this.getValues();
    this.loadID();
  }

  searchById() {
    const pesquisa = document.querySelector("#pesquisa");
    const btnID = document.querySelector("#id");
    if (this.categoriasSearch)
      btnID.addEventListener("click", () => {
        this.categoriasSearch.forEach((categoria) => {
          alert(`Categoria Encontrada: ${categoria[pesquisa.value]}`);
        });
        pesquisa.value = "";
        pesquisa.focus();
      });
  }

  onLoad() {
    if (
      localStorage.getItem("catID") &&
      localStorage.getItem("catNome") &&
      localStorage.getItem("catDesc") &&
      window.location.href == "http://127.0.0.1:5500/categoria.html"
    ) {
      const catID = localStorage.getItem("catID");
      const catNome = localStorage.getItem("catNome");
      const catDesc = localStorage.getItem("catDesc");

      const jsonID = JSON.parse(catID);
      const arrID = Array.from(jsonID);

      const josnNome = JSON.parse(catNome);
      const arrNome = Array.from(josnNome);

      const jsonDesc = JSON.parse(catDesc);
      const arrDesc = Array.from(jsonDesc);
      this.categoriasSearch.push(arrNome);

      arrID.forEach((id) => {
        this.id += id;
      });

      for (let i = 0; i < arrNome.length; i++) {
        const tr = document.createElement("tr");
        const thIdCat = document.createElement("th");
        const thNomeCat = document.createElement("th");
        const thDesCat = document.createElement("th");
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
        this.categorias.appendChild(tr);

        thNomeCat.innerText = arrNome[i];
        tr.appendChild(thNomeCat);
        this.categorias.appendChild(tr);

        thDesCat.innerText = arrDesc[i];
        tr.appendChild(thDesCat);
        this.categorias.appendChild(tr);

        thEditar.appendChild(editar);
        tr.appendChild(thEditar);
        this.categorias.appendChild(tr);
        thDeletar.appendChild(deletar);
        tr.appendChild(thDeletar);
        this.categorias.appendChild(tr);
      }
    }
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
          this.categoriasSearch.push(this.nome.value);

          this.catID.push(this.id);
          this.catNome.push(this.valores.nome);
          this.catDesc.push(this.valores.descricao);

          localStorage.setItem("catID", JSON.stringify(this.catID));
          localStorage.setItem("catNome", JSON.stringify(this.catNome));
          localStorage.setItem("catDesc", JSON.stringify(this.catDesc));

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
