# Explicación de `g-row-` y sus variantes

## Clase base `g-row-`
La clase `g-row-<n>` se utiliza para especificar cuántas filas debe abarcar un elemento dentro de un contenedor de cuadrícula.  
`<n>` representa el número de filas que el elemento debe ocupar.

## Clases responsivas
Las variantes responsivas como `g-row-sm-<n>`, `g-row-md-<n>`, `g-row-lg-<n>`, etc., permiten definir el comportamiento del elemento en diferentes puntos de quiebre (*breakpoints*).  
Esto es útil para ajustar el diseño en dispositivos de diferentes tamaños.

## Ejemplos

### Ejemplo básico: `g-row-`
**CSS generado:**

```css
/* Ejemplo de uso básico */
.element {
    grid-row: span <n>;
}
```

### Ejemplo responsivo: `g-row-sm-`, `g-row-md-`
**CSS generado:**

```css
/* Ejemplo responsivo */
@media (min-width: 576px) {
    .element {
        grid-row: span <n>;
    }
}

@media (min-width: 768px) {
    .element {
        grid-row: span <n>;
    }
}
```

### Ejemplo avanzado: Combinación con `g-col-`
**CSS generado:**

```css
/* Ejemplo avanzado combinando filas y columnas */
.element {
    grid-row: span <n>;
    grid-column: span <m>;
}
```
