**a) ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?**   
Son elementos de los formularios reactivos que nos sirven para controlar de forma más óptima la validación de los formularios.  
 *FormControl* se usa para tener un control sobre el valor y el estado de un control del formulario.
*FormGroup* es un conjunto de *FormControls* que nos permite controlar la validación en grupo, es decir, que si un control no es válido, el resultado del *FormGroup* será inválido.
*FormControl* y *FormGroup* crean un observable que nos irá mostrando los cambios de estado del formulario.

+ **FormControl**  
Se utiliza para  indicar que el control es un control de formulario.  Un formulario se puede establecer como un grupo de controles y cada control tiene un nombre que lo identifica. Se puede además añadir comportamientos y configuraciones a cada control.  


+ **FormGroup**  
Se utiliza para indicar que un grupo de controles son controles de formulario y funcionarán como un grupo a la hora de validar el formulario.  
Un formulario que utilice *FormGroup* se puede definir como un grupo de controles y nos permite añadir valores iniciales a cada control desde el modelo.  
Si usamos *FormGroup* a cada control se le asigna un nombre con *formControlName*. El nombre que se le dé es el que luego usaremos desde el componente.


+ **FormBuilder**  
Es un servicio  que se utiliza para construir el formulario que se ha creado con el módulo anterior, *FormGroup*, que indica un grupo de controles de formulario. 
Se utiliza en los formularios reactivos. Para utilizarlo hay que importar el módulo ReactiveFormModule, al  igual que los anteriores. 
Con este servicio conseguimos separar el modelo de la vista creando un FormGroup o grupo de controles que se encargue de controlar los cambios y la validez de los datos del formulario.  
Surge para dar una mayor agilidad a la validación de los formularios. 



**b) Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.**  

|    Validador     | Función                                                                                                                                                                                                                                                    |
| :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `required`    | indica que el campo ha de rellenarse obligatoriamente                                                                                                                                                                                                      |
|  `requiredTrue`  | requiere que el valor del control sea verdadero. Este validador se usa comúnmente para las casillas de verificación que sean obligatorias.                                                                                                                 |
|     `email`      | el campo debe contener un *email*  o correo electrónico válido                                                                                                                                                                                             |
|   `minLength`    | la longitud mínima de la entrada debe ser la que se indique                                                                                                                                                                                                |
|   `maxLength`    | la longitud máxima de la entrada debe ser la que se indique                                                                                                                                                                                                |
|      `min`       | indica el valor mínimo que puede contener el control                                                                                                                                                                                                       |
|      `max`       | indica el valor máximo que puede contener el control                                                                                                                                                                                                       |
|    `pattern`     | el valor se comprueba utilizando expresiones regulares que deben validarse comprobando que el valor el campo coincida con el patrón de la expresión regular                                                                                                |
|     `custom`     | se puede construir la lógica personalizada de la vadilación de manera que devuelva un error o null en caso de que la valación sea correcta, por ejemplo, que dos campos de contraseña sean iguales, que un campo de texto tenga solo ciertos valores, etc. |
|      `null`      | validador nulo que no realiza ninguna operación                                                                                                                                                                                                            |
| `composeAsync` | se compone de varios validadores asíncronos, por ejemplo, que una contraseña exista junto con un nombre de usuario en un servidor                                                                                                                          |




**c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?**  

Los estados indican si un formulario, un grupo de controles o un control es válido o no, si está en medio de un proceso de validación o si  está deshabilitado.  
Los estados de validación y lo su significado son los siguientes:  
+ **`VALID`**  indica si un *FormControl* es válido, es decir, que no hay ningún error con respecto a sus validadores

+ **`INVALID`**   indica si un *FormControl* es válido, es decir, que hay un error en la entrada

+ **`PENDING`**   indica si un *FormControl* están pendiente es decir, en proceso de validación. La validación es asíncrona y está esperando a que lleguen los errores o que indique que es válido, es decir, que no hay errores

+ **`DISABLED`**  indica que el control está deshabilitado

Además de estos estados con respecto a la validación de los formularios reactivos, dependiendo del estado de modificación de los controles, hay también unos estados que indican si el control se ha tocado, si se ha modificado o no.  
Estos estados relacionados con la modificación de los controles de los formulario son los siguientes:  
+ **PRISTINE** el usuario no ha modificado el control  
+ **DIRTY** el usuario ya ha modificado el control  
+ **TOUCHED** el control se ha tocado y además ha sucedido un evento *blur*  
+ **UNTOUCHED** no se ha tocado y salido con un evento *blur*  

Todos estos estados se pueden controlar y verificar mediante propiedades del *FormGroup* o de cada *FormControl*.

*Referencias:*  
[FormControl](https://angular.io/api/forms/FormControl "FormControl")
[FormGroup](https://angular.io/api/forms/FormGroup "FormGroup")
[FormBuilder](https://angular.io/api/forms/FormBuilder "FormBuilder")
[Validators](https://angular.io/api/forms/Validators "Validators")
[FormControlStatus](https://angular.io/api/forms/FormControlStatus "FormControlStatus")  





