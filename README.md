# Formularios por template vs Formularios reactivos

---

## Desarrollo de la práctica  

Durante el desarrollo del ejercicio he realizado las siguientes tareas:  

**Ejercicios**  
A continuación describo lo más importante de lo realizado en el desarrollo de cada ejercicio.

## Template  

Durante el desarrollo del ejercicio he utilizado la siguiente información por pantalla para comprobar que los valores eran correctos:  
`<p>Form Control value: {{ wineForm.value | json }}</p>`  
`<p>Form Control status: {{ wineForm.status | json }}</p>`  

## Reactivos  

Con respecto a preguntar por los posibles errores de los controles, se puede preguntar de esta forma:  

```<div *ngIf="name?.errors?.['required']">```  

Pero también con el método `hasError()` también se puede realizar y así queda el código más claro:  
```<div *ngIf="name?.hasError('required')">```  
  
Para obtener los errores se puede utilizar el método `getError()`

```typescript
<div *ngIf="name?.hasError('invalidName')">
   Wine Name incorrect. {{name?.getError('invalidName')}} 
</div>
```

Se puede mostrar un mensaje de error si lo que se añade al formulario no es válido, o también se puede impedir que se envíe la información hasta que el formulario sea correcto de la siguiente forma:

```<button type="submit" [disabled]="!wineForm.valid">Create</button>```

El validador *custom* o personalizdo que está en la carpeta `validator` dentro del fichero `nombre.validator.ts`
En el caso de error devuelvo una propiedad, `invalidName` en la que indico los valores permitidos.  
En el caso de validación correcta se devuelve *null*.  
