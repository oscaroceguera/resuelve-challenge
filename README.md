# Resuelve challenge - Autocompletado para Ghubli films API

### `npm start`

Corre la aplicación en mode development.
Abre [http://localhost:3000](http://localhost:3000) para ver en el browser.

### `npm test`

Lanza el modo de prueba en modo watch.

### `npm run storybook`

Corre storybook el cual es una herramienta para desarrollar UI de componentes.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.<br>
La compilación minifica e incluyen hashes a los nombres de archivos. 

## Problema y solución

Hacer una busqueda de película usando autocompletado. Para esto decidí recrear un componente `Autocomplete` que tiene la funcionalidad del autocompletado de las películas disponibles en el **API**. Al Cargarse el componente obtengo la lista de todas las películas para listarlas y de ahi tomo los títulos disponibles para almacenarlos en un array de títulos disponibles los cuales usare en el diccionario para el autocompletado.

## Arquitectura

La arquitectura elegida fue la de manejar el state interno de los componentes ya que creo que no es necesario usar algo mas complejo como `redux`, `redux-sagas`, `redux-observable`, etc.

## Stack

Para esta aplicación se uso:

* CRA
* React
* Storybook
* Css-modules
* Eslint
* Precommit
* Jest
* Enzyme
* Netlify

## Trade-offs

Me gustaría pulir mas el componente `Autocomplete`, hacer testing mas robusto y configurar las variables de entorno como la dirección del API no cambio no lo vi necesario.

## Parte de código que me siente orgulloso

https://github.com/oscaroceguera/resuelve-challenge/blob/master/src/components/Autocomplete/index.js

## Codigo en produccción usando netlify

Abre [resuelve_challenge](https://quirky-jepsen-ccd4ac.netlify.com/) para ver la aplicación en producción en el browser.