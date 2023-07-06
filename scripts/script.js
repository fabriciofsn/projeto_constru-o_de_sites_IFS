import { ActiveModal } from "./active_modal/ActiveModal.js";
import { Produto } from "./produto/Produto.js";

const btnCadastrar = document.querySelector("#cadastrar");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".close");

const activeModal = new ActiveModal(btnCadastrar, popup, btnClose);
activeModal.init();

const catPro = document.querySelector("#cat");
const desPro = document.querySelector("#desPro");
const nomePro = document.querySelector("#namePro");
const desCat = document.querySelector("#desCat");
const nomeCat = document.querySelector("#nameCat");
const valor = document.querySelector("#valor");
const btnAdd = document.querySelector("#add");
const produtos = document.querySelector("#produtos");
const categorias = document.querySelector("#categorias");

const produto = new Produto(catPro, desPro, nomePro, valor, btnAdd, produtos);
produto.init();
