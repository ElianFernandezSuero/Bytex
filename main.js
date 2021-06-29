function GuardarDatos() {

    let Datos = document.getElementById('input').value;
    id();
    document.getElementById(`name${i}`).innerHTML = Datos;

};
let i = 0;
const id = () => {
    i++;
    agregarFila();
    document.getElementById(`id${i}`).innerHTML = i;


};



function agregarFila() {
    const tbody = document.getElementById('tabla');
    const tcol = document.createElement('tr');
    const tfil = document.createElement('td');
    const tfiln = document.createElement('td');
    const tfilb = document.createElement('td');
    const btnEditar = document.createElement('btn');
    const txtEditar = document.createElement('i');
    const btnBorrar = document.createElement('btn');
    const txtBorrar = document.createElement('i');
    btnEditar.classList.add('btn', 'btn-success');
    txtEditar.classList.add('fas', 'fa-edit');
    btnBorrar.classList.add('btn', 'btn-danger');
    txtBorrar.classList.add('far', 'fa-trash-alt');
    btnEditar.appendChild(txtEditar);
    btnBorrar.appendChild(txtBorrar);
    tfilb.appendChild(btnEditar);
    tfilb.appendChild(btnBorrar);
    tfil.classList.add('text-center');
    tfilb.classList.add('text-center');
    tfiln.classList.add('text-center');
    tfiln.id = `name${i}`;
    tcol.appendChild(tfil);
    tfil.id = `id${i}`;
    tcol.appendChild(tfiln);
    tcol.appendChild(tfilb);
    tcol.id = `col${i}`;
    tbody.appendChild(tcol);
    btnBorrar.addEventListener("click", () => {
        const col = btnBorrar.parentElement;
        col.parentElement.remove();
    });
    btnEditar.addEventListener("click", () => {
        
    })
}
