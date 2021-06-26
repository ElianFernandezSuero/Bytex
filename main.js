function GuardarDatos(){
    
    let Datos= document.getElementById('input').value;
    id();
    document.getElementById(`name${i}`).innerHTML=Datos;
    
};
let i = 0;
const id = () => {
  i++;
  agregarFila();
    document.getElementById(`id${i}`).innerHTML=i;
    

};


function agregarFila(){
    const tbody = document.getElementById('tabla');
    const tcol = document.createElement('tr');
    const tfil = document.createElement('td');
    const tfiln = document.createElement('td');
    const tfilb = document.createElement('td');
    const btnBorrar = document.createElement('a');
    btnBorrar.classList.add('btn', 'btn-danger');
    btnBorrar.textContent = "Borrar";
    btnBorrar.id=`btn${i}`;
    tfilb.appendChild(btnBorrar);
    tfiln.id=`name${i}`;
    tcol.appendChild(tfil);
    tfil.id=`id${i}`;
    tcol.appendChild(tfiln);
    tcol.appendChild(tfilb);
    tcol.id=`col${i}`;
    tbody.appendChild(tcol);
    btnBorrar.addEventListener("click", () =>{
        const col = btnBorrar.parentElement;
        col.parentElement.remove();
     })
}
