class Alumno{
    constructor (nombre, cantidad, costo, id){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.costo=costo;
        this.id=id;
        this.hijoIzq=null;
        this.hijoDer=null;
    }
}
class ArbolBinario{
    constructor (){
        this.raiz=null;
    }
    agregar(nuevo){
      if (this.raiz==null)
        this.raiz=nuevo;
      else
        this.queTeAtienda(nuevo, this.raiz)
    }
    queTeAtienda(nuevo, nodoX){
       if (nuevo<nodoX) if(nuevo.id<nodoX.id)
         if (nodoX.hijoIzq==null)
            nodoX.hijoIzq=nuevo
         else
            this.queTeAtienda(nuevo, nodoX.hijoIzq)
       else
        if (nuevo>nodoX) if(nuevo.id>nodoX.id)
          if (nodoX.hijoDer==null)
             nodoX.hijoDer=nuevo
          else
             this.queTeAtienda(nuevo, nodoX.hijoDer)
    }
}
   buscar(dato)
   {
      if(this.raiz!=null)
      this.dato=raiz;
      this.hijoDer=dato;
         if(this.dato==hijoIzq)
          this.hijoIzq=dato;
   }

   eliminar(dato)
   {
      if(this.raiz!=null)
      this.dato=raiz;
      if(this.hijoIzq>dato)
      this.dato=hijoDer;
      else
      this.dato=hijoIzq
   }


   inOrder()  //IRD
    {
      if (this.raiz==null)
          console.log("");
        else
           this.procesaInorder(this.raiz)
    }
      procesaInorder(nodo)
      {   
        if (nodo.hi!=null)  
           this.procesaInorder(nodo.hi) 
        console.log(nodo.info())  
        if (nodo.hd!=null)     
           this.procesaInOrder(nodo.hd) 
      }

      PreOrder()  //RID
    {
      if (this.hi==null)
          console.log("");
        else
           this.procesaInorder(this.hi)
    }
      procesaPreorder(nodo)
      {   
        if (nodo.raiz!=null)  
           this.procesaInorder(nodo.raiz) 
        console.log(nodo.info())  
        if (nodo.hd!=null)     
           this.procesaInOrder(nodo.hd) 
      }
   

      PostOrder()  //IDR
    {
      if (this.hi==null)
          console.log("");
        else
           this.procesaInorder(this.hi)
    }
      procesaPostorder(nodo)
      {   
        if (nodo.hd!=null)  
           this.procesaInorder(nodo.hd) 
        console.log(nodo.info())  
        if (nodo.raiz!=null)     
           this.procesaInOrder(nodo.raiz) 
      }
