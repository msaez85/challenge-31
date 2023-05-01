/*challenge 31*/

class Pelicula {
  #Titulo = '';
  #Genero = '';
  #Anio = '';
  #Sinopsis = '';

  constructor(titulo, genero,anio,sinopsis) {
    this.#Titulo = titulo;
    this.#Genero = genero;
    this.#Anio = anio;
    this.#Sinopsis = sinopsis;
  }

  get getTitulo(){
    return this.#Titulo
  }

  get getGenero(){
    return this.#Genero
  }

  get getAnio(){
    return this.#Anio
  }

  get getSinopsis(){
    return this.#Sinopsis
  }

  set setTitulo(titulo){
    this.#Titulo = titulo;
  }

  set setGenero(genero){
    this.#Genero = genero;
  }

  set setAnio(anio){
    this.#Anio = anio;
  }

  set setSinopsis(sinopsis){
    this.#Sinopsis = sinopsis;
  }

  mostrarPeliculas(){
    return `Su pelicula se llama ${this.#Titulo}, es del genero ${this.#Genero}, del año ${this.#Anio} y se trata de: ${this.#Sinopsis} <br/>`;
  }
}

let pelis = [];

function agregarpelis() {
	const peli = new Pelicula(document.getElementById("titulo").value, document.getElementById("genero").value, document.getElementById("anio").value, document.getElementById("synopsis").value);
	pelis.push(peli);
  document.getElementById('form-peli').reset();
	alert("Pelicula agregada exitosamente");
}

function mostrarpelis() {
	if (pelis.length == 0) {
		alert('No hay peliculas para mostrar');
	} else {
		document.write('Lista de peliculas: <br/>');
		pelis.forEach( m => {document.write(m.mostrarPeliculas());});
	}
}