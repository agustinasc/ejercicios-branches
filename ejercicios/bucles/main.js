// Funciones

// //////EJERCICIO 1
// obtenerIndice(valor, array)
// Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

// obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
// obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1


// //////EJERCICIO 2
// repetir(valor, cantidad)
// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.

// repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
// repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
// repetir('html', 0) // []

// //////EJERCICIO 3
// sumarImparesHasta(numero)
// Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

// sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
// sumarImparesHasta(13) // 49
// sumarImparesHasta(47) // 576

// //////EJERCICIO 4
// crearCuentaRegresiva(numeroInicial)
// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

// crearCuentaRegresiva(3) // [3, 2, 1, 0]
// crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]

// const crearCuentaRegresiva = (numeroInicial) =>{
//     let arr = [];
//     for(let i = numeroInicial; i >= 0; i--){
//         console.log(i);
//         arr.push(i);
//     }
//     console.log(arr);
// }
// crearCuentaRegresiva(3) 

// const testCuentaRegresiva = () => {
//     x=1;
//     while(x<25){
//         crearCuentaRegresiva(x);
//         x++
//     }
// }
// testCuentaRegresiva();


// //////EJERCICIO 5
// invertir(array)
// Crear una función invertir que tome como argumento un array array y que devuelva un array con los mismos valores pero en orden invertido.

// invertir([1, 2, 3]) // [3, 2, 1]
// invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]

// //////EJERCICIO 6
// removerDuplicados(array)
// Crear una función removerDuplicados que tome como argumento un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.

// removerDuplicados([1, 1, 1]) // [1]
// removerDuplicados([1, 1, 2, 2, 3, 3]) // [1, 2 ,3]
// removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]

// //////EJERCICIO 7
// repetirLetras(palabra, cantidad)
// Crear una función repetirLetras que tome como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.

// repetirLetras('hola', 2) // 'hhoollaa'
// repetirLetras('ada', 3) // 'aaadddaaa'
// repetirLetras('ah!', 5) // 'aaaaahhhhh!!!!!'
// repetirLetras('basta', 1) // 'basta'

// //////EJERCICIO 8
// capitalizarPalabras(string)
// Crear una función capitalizarPalabras tome como argumento un string string y devuelva un string donde cada palabra está capitalizada (con la primera letra ma´yuscula). Dejar las demás letras como están.

// capitalizarPalabras('Esto es un título') // 'Esto Es Un Título'
// capitalizarPalabras('había una vez') // 'Había Una Vez'
// makeTitle('OMG') // 'OMG'

// //////EJERCICIO 9
// sumarSeccion(array, comienzo, cantidad)
// Crear una función sumarSeccion que tome como argumento un array de números enteros array, un número entero comienzo y un número entero cantidad, y que devuelva la suma de cantidad de números de array empezando a contar desde el ítem con índice comienzo.

// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) // 8 (2 + 2 + 4 = 8)
// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4) // 37 (4 + 8 + 10 + 20 = 37)
// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1) // 3

// //////EJERCICIO 10
// esSubconjunto(subconjunto, conjunto)
// Crear una función esSubconjunto que tome como argumento dos arrays, subconjunto y conjunto, y devuelva true si subconjunto es realmente subconjunto de conjunto, es decir, si todos los valores de subconjunto están en conjunto.

// esSubconjunto([1], [1, 2, 3]) // true
// esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5]) // true
// esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49]) // true
// esSubconjunto([1, 2, 3], [1, 2]) // false
// esSubconjunto([1], [2, 3, 4]) // false

// //////EJERCICIO 11
// tieneBloque(array)
// Crear una función hayBloque que tome como argumento un array array y devuelva true si dicho array tiene un bloque de 3 o más ítems consecutivos idénticos, o false si no tiene.


// const tieneBloque = (array) => {
//     let result = false;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] == array[i+1] && array[i] == array[i+2]){
//             result = true
//         }         
//     }
//     return result
// }

// console.log(tieneBloque([1, 2, 3])) // false
// console.log(tieneBloque([1, 1, 1, 2, 3])) // true
// console.log(tieneBloque([1, 2, 3, 3, 3])) // true
// console.log(tieneBloque([1, 2, 3, 3, 3, 8])) // true
// console.log(tieneBloque([1, 2, 2, 3, 3, 4])) // false



// //////EJERCICIO 12
//esPalindromo(palabra)

// Crear una función esPalindromo que tenga como par´ámetro un string palabra y devuelva true si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha que de derecha a izquierda, o false sino.

// const esPalindromo = (palabra) =>{
//     let palabraArray = palabra.replaceAll(" ", "").split("");
//     console.log(palabraArray);
//     let palabraReverse = palabraArray.reverse();
//     let resultCadena = palabraArray.join("");
//     //console.log(palabraArray, resultCadena)

//     if(palabra.replaceAll(" ", "").toLowerCase() === resultCadena.toLowerCase()){
//         console.log('true')
//         return true
//     }
//     console.log('false')
//     return false
    
// }

// esPalindromo('ada') // true
// esPalindromo('reconocer'); // true
// esPalindromo('mama') // false
// esPalindromo('javascript') // false
// esPalindromo('anita lava la tina') // true



