let Alumno=function(nombre, numCuenta, promedio, precio){
    this.nombre=nombre;
    this.numCuenta=numCuenta;
    this.promedio=promedio;
    this.precio=precio;
    this.info=function(){
        return "Nombre: "+this.nombre + " Codigo: " + this.numCuenta + " Con precio de: " + this.precio
    }
    this.infoHtml=function(){
        return "<div><h2> Con nombre de: "+ this.nombre +"</h2>" +
               "<h3>Codigo: " + this.numCuenta + "</h3>" + 
               "Cantidad " + this.promedio + "</p>" + 
               "Precio " + this.precio + "</p>" +
               "</div>"
    }
}






let Grupo=function(){  
    this.inicio=null;
  
    this.agregar=function(nuevo){
			if (this.inicio==null)
        this.inicio=nuevo;
      else{
        let t=this.inicio
        while(t.siguiente!=null){
          t=t.siguiente; 
        }                
        t.siguiente=nuevo;
      }
    }


 



this.buscar=function(numcuenta){  
    let t=this.inicio;
    while (t!=null && t.numCuenta!=numcuenta   ){
          t=t.siguiente;
    }
    return t;
  }
  this.listar=function(){
    let res=""; 
    let t=this.inicio;
    while(t!=null){
      res+= t.info() + "<br>";
      t=t.siguiente;
    }
    return res;
  }


  this.eliminar=function(numCuenta){
    if (this.inicio!=null){
        if (this.inicio.numerocuenta==numCuenta)
        this.inicio=this.inicio.siguiente;
        else{
        let t=this.inicio;
          while( t.siguiente!=null){
          if (t.siguiente.numerocuenta==numCuenta){
              t.siguiente=t.siguiente.siguiente;
              return true;
          }
            else
            t=t.siguiente;
          }
          return false;
      }
    }
  }









}
let grupo2c=new Grupo()



 
let btnCrear=document.getElementById('btnCrear');
btnCrear.addEventListener('click',()=>{
    let nom, numc, prom;
    nom=document.getElementById('txtNombre').value;
    numc=document.getElementById('txtNumCuenta').value;
    prom=document.getElementById('txtPromedio').value;
    pre=document.getElementById('txtPrecio').value;
    let alumno=new Alumno(nom,numc,prom,pre);
    grupo2c.agregar(alumno);
    console.log('Se agrego ' + alumno.info());
    
});
 
let btnBuscar=document.getElementById('btnBuscar');
btnBuscar.addEventListener('click',()=>{
    let num=document.getElementById('txtNumCuenta').value;
    let buscado=grupo2c.buscar(num); 
    let res=document.getElementById('resultados');
    if (buscado==null)
        res.innerHTML += "<h3>No se encontro en la busqueda</h3>"
    else{
        res.innerHTML += "<h3>Si se encontro</h3>" + buscado.infoHtml();
        document.getElementById('txtNumCuenta').value=buscado.numCuenta;
        document.getElementById('txtPromedio').value=buscado.promedio;
    }
 
})
 
let btnListar=document.getElementById('btnListar');
btnListar.addEventListener('click',()=>{
    let res=document.getElementById('resultados');
    res.innerHTML+="<h1>LISTADO</h1>" + grupo2c.listar();
})
 

let btneliminar=document.getElementById("btnEliminar");
btneliminar.addEventListener("click",()=>{
    let numCuenta=document.getElementById('txtNumCuenta').value;
    if (grupo2c.eliminar(numCuenta)==true)
        document.getElementById('resultados').innerHTML+="<p>eliminado</p>";
    else
        document.getElementById('resultados').innerHTML+="<p>no se encontro</p>";
})