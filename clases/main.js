// const tab = document.getElementById('tab');

// let items = ["🍉", "🍋", "🥝", "🍒", "🐶"];
// let level = 5;


// //console.log(items);


// const crearTablero = () => {
//     tab.innerHTML = "";
//     for (let i = 0; i < level; i++) {
//         for (let j = 0; j < level; j++) {
//             const newp = document.createElement('p');
//             newp.setAttribute('id', `${i}-${j}`);
//             newp.innerHTML = items[getRandom(0, 4)];
//             // console.log(i, j, items[getRandom(0, 4)]); 
//             tab.appendChild(newp)
//         }
//     }
//     // agregamos evento click a cada p (elemtno)
//     getElement();
// };

// const getElement = () =>{
//     const element = document.getElementsByTagName('p');
//     console.log(element);
//     for(i = 0, i < element.length; i++){
//         elem[i].addEventListener('click', (element)=>{
//             console.log(element)
//         })
//     }
// }

// const changeNivel = () =>{
//     level += 1;
//     tab.style.width = `${(50) * level}px`;
//     console.log(`Tamaño del tablero ${(50) * level}px`)
//     console.log(level);
//     crearTablero();
// }
// //changeNivel(level);


// const getRandom = (min, max) => {
//     let ramdom = Math.random();
//     // console.log(`ramdom: `, ramdom);
//     // console.log(`ramdom con floor`, Math.floor(ramdom));
//     // console.log(`ramdom*(max-min)`, ramdom * (max - min));
//     // console.log(`ramdom con floor y max y min`, Math.floor(ramdom * (max - min)));
//     // console.log(// `ramdom con floor max min y + min`,
//     // Math.floor(ramdom * (max - min)) + min// );
//     return Math.floor(ramdom * (max - min)) + min;
// };
// const ramdom = getRandom(0, 4);

// // const obtenerEmoj = console.log(`posicion: ${ramdom}`, items[ramdom]);
// crearTablero();
 

                //////////////////////   CLASE DEL 23/02 ///////////////////

// const ayuda = document.getElementById('ayuda');

// ayuda.addEventListener('click', ()=>{
//     swal("Para jugar selecciona el nivel!");
// })

// const noombre = 'Jonh'; 

// Stringconst edad = 34; 
// Numberconst paises = ['Argentina', 'CDMX', 'Colombia', 'Venezuela']; //Array


//OBJETOS

// const jonh = {
//     edad: 34,nombre: 'Jonh',
//     nacionalidad: 'Mexicano',
//     estatura: 1.86,
//     peso: 50,
//     ojos: 'cafe',
//     vivo: true,
//     lugaresVisitados: ['Argentina', 'CDMX', 'Colombia', 'Venezuela'],
//     canta: () => {alert('estoy Cantando')},
//     mascota: {
//         nombre: 'Logan',
//         raza: 'Dogo',
//         peso: 50
//     }
// }

// console.log(jonh.mascota.raza);

            ///////// PARA EL PLOP DE ELEGIR EL NIVEL ///////////

            // const root = document.getElementById('root')

// let longitud = 0;
// swal("A wild Pikachu appeared! What do you want to do?", {
//     // button: "success",
//     buttons: {
//         facil: {
//             text: "Facil",
//             value: "facil"
//         },
//         medio: {
//             text: "Medio",
//             value: "medio"
//         },
//         dificil: {
//             text: "dificil",
//             value: "dificil"
//         },
//     },
// })

// .then((value) => {
//     switch (value) {
//         case "facil":myFunc(value)
//         longitud = 9;
//         break;
//         case "medio":longitud = 8;
//         break;
//         case "dificil":longitud = 7;
//         break;
//         default:
//     }
//     root.innerHTML = longitud;
// }
// );
// const myFunc = (value) =>{
//     document.body.style.backgroundColor = 'red';
// }

////////// CONTADOR

const root = document.getElementById('root')

let time = 0;

setInterval(()=>{
    if(time<6){
        root.innerHTML = time;
        time ++
    }else{
        alert('Llegamos a 5');
        swal("Juego Terminado");
        return;
    }

},1000)

///PARA PARAR EL INTERVAL

// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = t;
//   }
  
//   function myStopFunction() {
//     clearInterval(myVar);
//   }