import { Editar } from "./editar/Editar.js";
import { ActiveModal } from "./active_modal/ActiveModal.js";
import { Categoria } from "./catalogo/Categoria.js";
import { Produto } from "./catalogo/Produto.js";
import { Deletar } from "./deletar/Deletar.js";

const btnCadastrar = document.querySelector("#cadastrar");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".close");

const activeModal = new ActiveModal(btnCadastrar, popup, btnClose);
activeModal.init();

const nomePro = document.querySelector("#namePro");
const catPro = document.querySelector("#opcoes");
const desPro = document.querySelector("#desPro");
const valor = document.querySelector("#valor");
const btnAdd = document.querySelector("#addPro");
const produtos = document.querySelector("#produtos");

const produto = new Produto(nomePro, catPro, desPro, valor, btnAdd, produtos);
produto.init();

const nome = document.querySelector("#nameCat");
const descricao = document.querySelector("#desCat");
const button = document.querySelector("#add");
const categorias = document.querySelector("#categorias");

const categoria = new Categoria(nome, descricao, button, categorias);
categoria.init();

const categoriasRow = document.querySelector("#categorias");
const trRow = document.querySelectorAll("#categorias tr");
const deleteButton = document.querySelectorAll(".excluir");

const deletarCategoria = new Deletar(
  categoriasRow,
  trRow,
  deleteButton,
  "esta",
  "categoria"
);
if (window.location.href == "http://127.0.0.1:5500/categoria.html") {
  deletarCategoria.init();
}

const popupEl = document.querySelector(".popup");
const editButton = document.querySelectorAll(".editar");
const nomeCat = document.querySelector("#nameCat");
const desCat = document.querySelector("#desCat");
const tr = document.querySelectorAll("#categorias tr");
const popupBtn = document.querySelector(".popup #add");

const editarCategoria = new Editar(
  popupEl,
  editButton,
  nomeCat,
  desCat,
  tr,
  popupBtn
);

editarCategoria.init();

const produtosBody = document.querySelector("#produtos");
const trPro = document.querySelectorAll("#produtos tr");
const deleteBtn = document.querySelectorAll(".excluir");

const deleteProduto = new Deletar(
  produtosBody,
  trPro,
  deleteBtn,
  "este",
  "produto"
);
if (window.location.href == "http://127.0.0.1:5500/index.html") {
  deleteProduto.init();
}
