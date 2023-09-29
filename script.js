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
        updateResult(); //Modificamos los datos
    }
//Fin de la funcion
function Add_Operator(op){
    //Validamos primero
    if(Operator != ""){
        //calculamos el resultado
        calculateResult();
    }
    //Inciaciamos un nuevo operador
    Operator = op;
    Number_previos = Number_current;//Number_Current le pasa el valor a la variable Number Previos 
    //Para poder agregar otro numero y recordar el ultimo numero ingresado
    Number_current = "0"//Almacena el valor de 0 para poder almacenar otro numero
}//Fin de la funcion Add Operator

//Creamos la funcion que sirve para realizar las operaciones
function calculateResult(){
    //Creamos una variable que almacena el resultado de las operaciones
    let result;
    switch(Operator){
        case '+':
            result = parseInt(Number_previos) + parseInt(Number_current);
            break;
            case '-':
                result = parseInt(Number_previos) - parseInt(Number_current);
                break;
                case '*':
                    result = parseInt(Number_previos) * parseInt(Number_current);
                    break;
                    //Agregamos una validacion al momento de realizar una division no 
                    //podemos dividir por 0
                    case '/':
                        if(Number_current !== '0'){
                            result = parseFloat(previousInput) / parseFloat(currentInput);
                            break;
                        }else{
                            alert("No puedes dividir por cero 0!!!");//Mostramos mensaje
                            Clear();//Funcion que sirve para limpiar
                            return;
                        }
                        break;
    }
    //Convertimos en una cadena de texto
    Number_current = result.toString();//Esa variable gurada el resultado
    Operator = "";
    updateResult();//Se moddifica
}//Fin de la funcion
