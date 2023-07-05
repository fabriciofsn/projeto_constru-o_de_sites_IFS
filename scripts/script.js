import { ActiveModal } from "./active_modal/ActiveModal.js";
import { Produto } from "./produto/Produto.js";

const btnCadastrar = document.querySelector("#cadastrar");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".close");

const activeModal = new ActiveModal(btnCadastrar, popup, btnClose);
activeModal.init();

const categoria = document.querySelector("#cat");
const descricao = document.querySelector("#des");
const valor = document.querySelector("#valor");
const btnAdd = document.querySelector("#add");
const produtos = document.querySelector("#produtos");

const produto = new Produto(categoria, descricao, valor, btnAdd, produtos);
produto.init();
