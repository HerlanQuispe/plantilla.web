class Carrito{

    //Añadir el producto al carrito
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains("agregar carrito")){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }

    leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector("img").src,
            titulo : producto.querySelector("h4").textCont,
            precio : producto.querySelector(".precio span").textCont,
            id : producto.querySelector("a").getAttribute("data-id"),
            cantidad : 1
        }
        this.insertarcarrito(infoProducto);

    }
    
    insertarcarrito(producto){
        const rom = document.createElement("tr");
        row.innerHTML = "<td><img src=""</td>"
    }
}