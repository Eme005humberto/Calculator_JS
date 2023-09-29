//Codigo que hara el funcionamiento de la calculadora
let Number_current = ""
let Number_previos = ""
let Operator = ""

//Creamos la funcion para agregar numero a operar y a esta funcion de la pasamos 
//un parametro
function Add_Number(number){
    //Validamos si el numero actual tiene un valor de 0
    if(Number_current !== "0"){
        Number_current = number;
        }//Caso contrario
        else{
            Number_current += number;//Realizamos una suma por asignacion en donde si agregamos otro numero 
            //en primero se almacena al final y el segundo numero queda almacenado en el principio
        }
        //Modificamos los datos
        updateResult();
    }
}