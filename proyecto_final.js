//Datos
let arr = [
    {cuota: "1" , interes: 1 },{cuota: "3" , interes: 1.05 },{cuota: "6" , interes: 1.1 },{cuota: "9" , interes: 1.15 },{cuota: "12" , interes: 1.2 },
]
let cantidad = document.getElementById("cantidad");
//Funciones
function remover(){
    document.getElementById("cantidad").remove();
    document.getElementById("h3").remove();
    document.getElementById("h5").remove();
}
function aparecer(){
   let elejir = document.getElementById("elejir");
   let mensaje = document.createElement("h3");
   let input = document.createElement("input");
   mensaje.innerText = "Ahora ingresa en cuantas cuotas vas a pagarlo";
   elejir.append(mensaje); 
   elejir.append(input);
   input.setAttribute('Id', 'input');
}
function remover2(){
    let elej = document.getElementById("elejir")
    while (elej.firstChild){
        elej.removeChild(elej.firstChild);
    }
}
function remover3(){
    let pago = document.getElementById("apagar")
    while (pago.firstChild){
        pago.removeChild(pago.firstChild);
    }
}
function aparecer2(){
    let apagar = document.getElementById("apagar");
    let tot = document.createElement("h3");
    let sum = document.createElement("h3");
    let pay = document.createElement("h3");
    let va = document.createElement("h4");
    let cuo = document.createElement("h4");
    let all = document.createElement("h4");
    let prim = sessionStorage.getItem("monto");
    let seg = sessionStorage.getItem("cuota");
   let tercero = sessionStorage.getItem("tot");
    sum.innerText = "El valor del prestamo solicitado es: "
    va.innerText  = prim;
    pay.innerText = "El numero de cuotas eleigido es :"
    cuo.innerText  = seg;
    tot.innerText = "El total a devolver es:";
    all.innerText  = tercero;
    apagar.append(sum); 
    apagar.append(va); 
    apagar.append(pay); 
    apagar.append(cuo); 
    apagar.append(tot); 
    apagar.append(all);   
} 
cantidad.addEventListener("change" , function(e){
    let valor = e.target.value;
    let v1 = JSON.stringify(valor);
    remover();
    aparecer();
    cargar();
    sessionStorage.setItem("monto", v1)
   function cargar(){input.addEventListener("change", function(f){
    console.log(f.target.value);
    let cuotas = f.target.value;
    let v2 = JSON.stringify(cuotas);
    sessionStorage.setItem("cuota", v2);
    remover2();
    
    function calculo (arr){
        return arr.cuota == cuotas
    }
    let resultado = arr.find(calculo);
    console.log(resultado);  
    if (resultado !== undefined){
    let interes = resultado.interes;
    console.log(interes);
    let numero = valor * interes;
    let v4 = JSON.stringify(numero);
    sessionStorage.setItem("tot", v4);
    aparecer2();
}
else {
    Toastify({
        text: "El numero de cuotas elegidas no es valido, por favor ingrese una de las opciones que se muestran en pantalla.",
        duration: 5000,
        position: "center",
        style:{
           background: "rgb(169, 169, 169)",
           fontSize: "30px",
           color: "black",
        }
    }).showToast();
    remover3();
    aparecer();
    cargar();  
}
})};   
})
// API
fetch("https://api.openweathermap.org/data/2.5/weather?q=Mendoza&units=metric&appid=4340ec70250bd52e7dfa14d216466297")
.then(response=>response.json())
.then(data=>{
    console.log(data);
  let temperatura = document.getElementById("temp");
  let minima = document.getElementById("min");
  let maxima = document.getElementById("max");
  let humedad = document.getElementById("hum");
   temperatura.append(data.main.temp , "C°");
   minima.append(data.main.temp_min, "C°");
   maxima.append(data.main.temp_max, "C°");
   humedad.append(data.main.humidity, "%");
   
})    