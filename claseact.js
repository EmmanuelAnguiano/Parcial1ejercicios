class Persona{
    constructor(celular,nombre,edad){
            this.celular=celular;
            this.nombre=nombre;
            this.edad=edad;
    }
    infoHtml(){
        return "el celular es: "+this.celular+"<br>"+
        "nombre: "+this.nombre+"<br>"+
        "edad: "+this.edad;
    }
}
class personas{
    constructor(){
        this.datos=[];
    }



    agregar(nuevo){
        this.datos.push(nuevo);
    }
    listar(){
        let texto="";
        for(let i=0; i<this.datos.length; i++){
            texto=texto+this.datos[i].infoHtml()+"<br>";
        }
        return texto;
    }
    buscar(Numero){
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].celular==Numero) {
                return this.datos[i];
            }
        }
        return null;
    }
}
let persona=new personas();
let nuevo = new Persona('111','Alan',10);
persona.agregar(nuevo);
nuevo = new Persona('222','Beto',20);
persona.agregar(nuevo);
nuevo = new Persona('333','Carlos',30);
persona.agregar(nuevo);
nuevo = new Persona('444','David',40);
persona.agregar(nuevo);
nuevo = new Persona('555','Efrain',50);
persona.agregar(nuevo);
document.write(persona.listar());
let buscado=persona.buscar(444);
document.write("se encontro a la persona con numero 444: " + "<br>" + buscado.infoHtml()+"<br>");
buscado=persona.buscar(666);
document.write("no se encontro la persona con numero 666");

/*
var myset=new set();
myset.add(1);
myset.add(5).add("algo");
console.log(myset);
*/

//Haciendo uso del MAP.SET, se agrega en la consola
var miMapa = new Map();
miMapa.set("111", "alan");
miMapa.set(1, "10");

miMapa2=new Map();
miMapa2.set("222","beto");
miMapa2.set(2,"20");

miMapa3=new Map();
miMapa3.set("333","carlos");
miMapa3.set(3,"30");

miMapa4=new Map();
miMapa4.set("333","david");
miMapa4.set(4,"40");

miMapa5=new Map();
miMapa5.set("555","efrain");
miMapa5.set(5,"50");

console.log(miMapa);
console.log(miMapa2);
console.log(miMapa3);
console.log(miMapa4);
console.log(miMapa5);