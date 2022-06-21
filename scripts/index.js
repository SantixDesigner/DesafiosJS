let limit = 5000;
let price = 0;
let nameProduct = "";
let additionProducts = 0;
let recarga = 0;
let decision = "";
do{
    let number = parseInt(prompt("Digite la cantidad de productos"));
    for (let i = 1; i<=number; i++){ //El bucle se reinicia en caso de seguir con la línea 31
        nameProduct = prompt("¿Cuál es el nombre del producto? (pulse ESC para salir)").toUpperCase();
        alert(nameProduct);
        if (nameProduct == "ESC"){
            break;
        }
        price = parseInt(prompt("Digite el precio del producto"));
        additionProducts += price;
        if (additionProducts > limit){
            recarga = (additionProducts-limit)*1.4;
            alert("Te estás pasando del nivel máximo, ahora tendrás que hacer una recarga de $"+recarga+", es decir, un 40% por la diferencia");
            alert("En total gastaste: "+(additionProducts+recarga));
            alert("No puede continuar");
            break;
        }
        while (price >= 3000){
            alert("Estás gastando mucho en un único producto");
            nameProduct = prompt("Digite otro producto");
            price = parseInt(prompt("Digite el precio del producto"));
        }
    }
    if ((additionProducts < limit) && (nameProduct != "ESC")){
        decision = prompt("¿Desea continuar? si/no").toUpperCase(); //Si desea continuar, repregunta al inicio y vuelve a iniciar el bucle for
        console.log(decision);
    }else{
        decision = "NO"; //Me aseguro que se salga en caso contrario
    }
}while((nameProduct != "ESC") && (additionProducts < limit) && (decision != "NO")); 

alert("Muchas gracias por comprar, lo vemos pronto");