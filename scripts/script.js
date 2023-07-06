import { ActiveModal } from "./active_modal/ActiveModal.js";
import { Categoria } from "./catalogo/Categoria.js";
import { Produto } from "./catalogo/Produto.js";

const btnCadastrar = document.querySelector("#cadastrar");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".close");

const activeModal = new ActiveModal(btnCadastrar, popup, btnClose);
activeModal.init();

const catPro = document.querySelector("#cat");
const desPro = document.querySelector("#desPro");
const nomePro = document.querySelector("#namePro");
const valor = document.querySelector("#valor");
const btnAdd = document.querySelector("#addPro");
const produtos = document.querySelector("#produtos");

const produto = new Produto(catPro, desPro, nomePro, valor, btnAdd, produtos);
produto.init();

const nome = document.querySelector("#nameCat");
const desCate = document.querySelector("#desCat");
const button = document.querySelector("#add");
const categorias = document.querySelector("#categorias");

const categoria = new Categoria(nome, desCate, button, categorias);
categoria.init();
