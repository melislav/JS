$(document).ready(function(){
    console.log('Jquery logeado');
})


class Usuario{
    constructor(nombre, apellido, edad, mail, id){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad,
    this.mail = mail
    this.id = id
    }
};

const listaUsuarios = [];

const nombre = $('#input-nombre').value;
const apellido = $('#input-apellido').value;
const edad = $('#input-edad').value;
const mail = $('#input-mail').value;
const id = $('#input-id').value;

const usuario1 = new Usuario(nombre, apellido, edad, mail, id);

function nuevoUsuario(){
    let element = $('#form-usuario');
    let usuarios = localStorage.setItem("id", JSON.stringify(usuario1))
    console.log(usuarios)
    alert('Usted se ha inscripto en el curso de Yoga')
};







