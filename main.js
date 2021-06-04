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
    const tfiln = document.createElement('td');
    tfiln.id=`name${i}`
    tcol.appendChild(tfiln);
    const tfil = document.createElement('td');
    tfil.id=`id${i}`
    tcol.appendChild(tfil);
    tbody.appendChild(tcol);
}
