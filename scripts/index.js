let limit = 5000;
let price = 0;
let nameProduct = "";
let number = parseInt(prompt("Digite la cantidad de productos"));
let additionProducts = 0;
recarga = 0;
do{
    for (let i = 0; i<=number; i++){
        nameProduct = prompt("¿Cuál es el nombre del producto? (pulse ESC para salir)").toUpperCase();
        alert(nameProduct);
        if (nameProduct == "ESC"){
            i = x + 1;
            break;
        }
        price = parseInt(prompt("Digite el precio del producto"));
        additionProducts += price;
        if (additionProducts > limit){
            recarga = (additionProducts-limit)*0.4;
            alert("Te estás pasando del nivel máximo, ahora tendrás que hacer una recarga de $"+recarga+", es decir, un 40% por la diferencia");
            alert("En total gastaste: "+(additionProducts+recarga));
            alert("No puede continuar");
            i = x + 1;
            break;
        }
        while (price >= 3000){
            alert("Estás gastando mucho en un único producto");
            nameProduct = prompt("Digite otro producto");
            price = parseInt(prompt("Digite el precio del producto"));
        }
    }
}while((nameProduct != "ESC") || (additionProducts < limit));