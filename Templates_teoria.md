# Formularios dirigidos por template o por plantilla  

**a) ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?**  
Los formularios dirigidos por *template* son parte del módulo `FormsModule`, mientras que los reactivos son parte del módulo `ReactiveFormsModule`.  

Los formularios dirigidos por *template* deben importar:  
```import { FormsModule } from '@angular/forms';```  
En los formularios reactivo se debe importar:     
```import { ReactiveFormsModule } from '@angular/forms';```   

Los formularios dirigidos por *template* tienen un enfoque de trabajo más parecido a AngularJS ya que en la plantilla se controlarán los errores del formulario, mientras que en los reactivos la lógica se desplaza a la clase del componente.  

Los formularios por *template* a priori son más fáciles de crear e implementar, pero a medida que crecen en tamaño, el código se vuelve más enorme y difícil de mantener, mientras que los reactivos son más completos y son más fáciles de mantener si el código es grande. Además, la tendencia es utilizar este tipo de formularios que se crearon para suplir las carencias de los formularios por *template*.

Los formularios reactivos son conducidos y gestionados desde el componente, mientras que los dirigidos por template la lógica de la validación se realiza desde la plantilla o *template*. 
Al pasar la lógica del formulario al componente, los formularios reactivos son más limpios y a medida que crece un formulario en tamaño es mejor porque así porque la vista queda más limpia, además de ser mejor de mantener, como indiqué anteriormente.  


**b) ¿Qué son, para qué sirven y cómo se utilizan las directivas `ngModel` y `ngModelChange?`**    
La directiva *ngModel* se agrega desde el módulo *FormsModule*. Una vez importado este módulo, podemos usar la directiva.  
Usando esta directiva podemos utilizar enlaces de 1 dirección o de 2 direcciones (*two way binding*):
En el de 1 dirección el valor va desde la plantilla del componente a la clase del componente:   
```
<input type="text" [ngModel]="valor">
```
El enlace en 2 direcciones utiliza lo que se llama la sintaxis *banana in a box*:  
```
<input type="text" [(ngModel)]="valor">
```
El evento `ngModelChange` es un evento de Angular y se dispara cuando cambia el valor de una propiedad que esté enlazada con el modelo mediante `ngModel`:  
En este caso, cuando se modifique valor, se irá a realizar lo indicado en el método de la clase del componente `realizarAlgo()`:  
```
<input type="text" [ngModel]="valor" ngModelChange="realizarAlgo()">
```

**c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?**  
Los estados sirven para poder validar los formularios y ver si los controles se han cambiado o no, si se han visitado o no, o si el control es válido o no.  
Los estados de los formularios dirigidos por templates son los siguientes:    
`ng-touched` o `ng-untouched` si el control se ha visitado o no  
`ng-dirty` o `ng-pristine` si el control se ha cambiado o no  
`ng-valid` o `ng-invalid` si el valor del control es válido o no  
Estos estados nos permiten programar dependiendo del valor y generan unas clases a las que le podemos asignar valores CSS para cambiar la apariencia dependiendo del estado.    

**d) ¿Qué ventajas aportan los FormGroup en la composición de formularios?**    
Trabajar con los *FormGroup* es un método para trabajar con los formularios controlados por plantillas.  
Con *FormGroup* se agrupan los elementos del formulario bajo un nombre común.
De esta forma, podemos utilizar todos los campos del formulario de forma centralizada, no cada control por separado.  
Las directivas que se utilizan en los formularios dirigidos por templates son las siguientes:  
    `NgForm`: crea la instancia y la vincula al formulario.  
    `NgModelGroup`: vincula el FormGroup a un elemento del DOM.  
    `NgModel`: se encarga de sincronizar los cambios en el control del formulario con el modelo de datos. De esta forma se puede responder a la entrada del usuario mediante la validación de los datos y manejando los posibles errores.