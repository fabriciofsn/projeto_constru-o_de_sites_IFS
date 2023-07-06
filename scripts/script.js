import { ActiveModal } from "./active_modal/ActiveModal.js";
import { Categoria } from "./catalogo/Categoria.js";
import { Produto } from "./catalogo/Produto.js";


const btnCadastrar = document.querySelector("#cadastrar");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".close");

const activeModal = new ActiveModal(btnCadastrar, popup, btnClose);
activeModal.init();

const nomePro = document.querySelector("#namePro");
const catPro = document.querySelector("#cat");
const desPro = document.querySelector("#desPro");
const valor = document.querySelector("#valor");
const nomeCat = document.querySelector("#nameCat");
const desCat = document.querySelector("#desCat");
const btnAdd = document.querySelector("#add");
const produtos = document.querySelector("#produtos");
const categorias = document.querySelector("#categorias");

const produto = new Produto(nomePro, catPro, desPro, valor, btnAdd, produtos);
produto.init();

const categoria = new Categoria(nomeCat, desCat, btnAdd, categorias);
categoria.init();
