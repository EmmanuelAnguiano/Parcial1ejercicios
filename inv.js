let producto=function(id, nombre, cantidad, precio){
    this.nombre=nombre;
    this.id=id;
    this.cantidad=cantidad;
    this.precio=precio;
    this.infoHtml=function(){
        return "<div><h2>"+ this.nombre +"</h2>" +
               "<h3>id " + this.id + "</h3>" + 
               "<p> cantidad " + this.cantidad + "<br>" + 
               "precio " + this.precio + "</p>" + 
               "</div>"
    }
}


let inventario=function(){    
    this.datos=new Array();
    this.agregar=function(nuevo){
        this.datos.push(nuevo);
    }
    this.buscar=function(id){
        let existe=true;
        if(existe)
            return this.datos[0];
        else
            return null;
    
    }
    this.listar=function(){
        let res="";
        for(let i=0;i<this.datos.length;i++)
            res += this.datos[i].infoHtml() + "<br>";
        return res;
    }
    this.eliminar=function(id){
        return true;
    }
}


let grupo2c=new inventario()

let btncrear=document.getElementById('btncrear');
btncrear.addEventListener('click',()=>{
    let cod, nom, can, pre;
    cod=document.getElementById('txtid').value;
    nom=document.getElementById('txtnombre').value;
    can=document.getElementById('txtcantidad').value;
    pre=document.getElementById('txtprecio').value;

    let objeto=new producto(nom,cod,can,pre);
    grupo2c.agregar(objeto);
});

let btnbuscar=document.getElementById('btnbuscar');
btnbuscar.addEventListener('click',()=>{
    let id=document.getElementById('txtid').value;
    let buscado=grupo2c.buscar(id);
    let res=document.getElementById('resultados');
    if (buscado==null)
        res.innerHTML += "<h3>No se encontro en la busqueda</h3>"
    else{
        res.innerHTML += "<h3>Si se encontro</h3>" + buscado.infoHtml();
        document.getElementById('txtnombre').value=buscado.nombre;
        document.getElementById('txtid').value=buscado.id;
    }
 
})
 
let btnlistar=document.getElementById('btnlistar');
btnlistar.addEventListener('click',()=>{
    let res=document.getElementById('resultados');
    res.innerHTML+="<h1>LISTADO</h1>" + grupo2c.listar();
    
})



//function eliminar(){
let btneliminar=document.getElementById("btneliminar");
btneliminar.addEventListener("click",()=>{
    let txtid=document.getElementById('txtid').value;
    if (grupo2c.eliminar(txtid)==true)
        document.getElementById('resultados').innerHTML+="<p>eliminado</p>";
    else
        document.getElementById('resultados').innerHTML+="<p>no se encontro</p>";
})//=txtid.splice(0,1);
//alert("eliminado");
//}

/*
let btneliminar=document.getElementById('btneliminar');
btneliminar.addEventListener('click',(txtid){
    
}
                alert('eliminado')
)*/