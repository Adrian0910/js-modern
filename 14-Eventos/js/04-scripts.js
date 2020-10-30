const  formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault(); // omite la accion default y realiza lo que nosotros ponemos
    console.log(e.target.action);
}



