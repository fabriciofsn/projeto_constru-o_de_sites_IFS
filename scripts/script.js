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
const nomePro = document.querySelector("#namePro");
const desCat = document.querySelector("#desCat");
const nomeCat = document.querySelector("#nameCat");
const valor = document.querySelector("#valor");
const btnAdd = document.querySelector("#add");
const produtos = document.querySelector("#produtos");

const produto = new Produto(nomePro, catPro, desPro, valor, btnAdd, produtos);
produto.init();
