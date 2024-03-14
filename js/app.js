console.log("Ciclo For");

//Il CICLO FOR serve a fare una determinata vatutazione mentre la condizione è vera "true", quando la condizione deventa falsa "false" finisce la valutazione e il cilo finisce.

//Inizializare variabile; contorlo la condizione; incremento

/*for (let i = 0; i < 10; i++){
  //Stampa del ciclo mentre la condizione è vera, quando la condizione è falsa il ciclo finisce
  // console.log(i)
}*/

//ciclo con una condizionale nella esecuzione
const n = 100;
for (let i = 1; i <= n; i++) {
  //SE i è % 3 con resto 0 E i % 5 con reto 0
  if(i % 3 === 0 && i % 5 === 0){
    //stampa "FizzBuzz"
    console.log("FizzBuzz");

    //ALTRIMENTI SE i % 3 con resto 0
  }else if(i % 5 === 0){
    // stampa "Fizz"
    console.log("Buzz")

    //ALTRIMENTI SE i % 5 con resto 0
  }else if(i % 3 === 0){
    //stampa "Buzz"
    console.log("Fizz");

    //ALTRIMENTI
  }else{
    //stampa i
    console.log(i)
  }
}

