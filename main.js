
//https://developer.themoviedb.org/reference
const apiKey = 'a030899d3821596bf58a076d2e4d9cbf';

// Obtener películas populares
const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`;
const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

/*
*********************************** FUNCION PARA SCROLLING
*/
document.addEventListener('DOMContentLoaded', function () {

  const containerMain = document.querySelector('.section-main__content-images');
  const containerFavorites = document.querySelector('.section-favorites__content-images');

  containerMain.addEventListener('wheel', function (event) {
    // Obtén el valor de desplazamiento horizontal del evento de la rueda del ratón
    const delta = event.deltaY || event.detail || event.wheelDelta;

    // Ajusta la posición horizontal del contenedor
    containerMain.scrollLeft += delta;

    // Evita que la página se desplace verticalmente
    event.preventDefault();
  });

  containerFavorites.addEventListener('wheel', function (event) {
    // Obtén el valor de desplazamiento horizontal del evento de la rueda del ratón
    const delta = event.deltaY || event.detail || event.wheelDelta;

    // Ajusta la posición horizontal del contenedor
    containerFavorites.scrollLeft += delta;

    // Evita que la página se desplace verticalmente
    event.preventDefault();
  });
});


/*
*********************************** FUNCION PARA CARGAR ELEMENTOS MOVIES CONTENT MAIN
*/

// Realizar la solicitud para obtener películas populares
fetch(popularMoviesUrl)
  .then(response => response.json())
  .then(data => {
    // Obtener la lista de películas
    const movies = data.results;

    // Obtener el contenedor HTML
    const moviesContainerMain = document.querySelector('.section-main__content-images');

    // Iterar sobre las películas y mostrar las imágenes
    movies.forEach(movie => {

      // Construir la URL de la imagen utilizando la base URL de imágenes de TMDb
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      const textImage = `https://image.tmdb.org/t/p/w500/${movie.title}`;

      // Crear elementos
      var containerMain = document.createElement('div');
      containerMain.className = 'section-main__item-images';

      var imgElement = document.createElement('img');
      imgElement.className = 'section-main__image';
      imgElement.src = imageUrl;
      imgElement.alt = '';

      var text = document.createElement('p');
      text.className = 'section-main__text';
      text.textContent = movie.title;

      // Agregar la imagen al contenedor
      containerMain.appendChild(imgElement);
      // Agregar la imagen al contenedor
      containerMain.appendChild(text);

      // Agregar la imagen al contenedor
      moviesContainerMain.appendChild(containerMain);
    });
  })
  .catch(error => console.error('Error fetching popular movies:', error));


/*
*********************************** FUNCION PARA CARGAR MOVIES FAVORITES
*/

// Obtener películas Top Rated
fetch(topRatedMoviesUrl)
  .then(response => response.json())
  .then(data => {
    // Obtener la lista de películas
    const movies = data.results;

    // Obtener el contenedor HTML
    const moviesContainerFavorites = document.querySelector('.section-favorites__content-images');

    // Iterar sobre las películas y mostrar las imágenes
    movies.forEach(movie => {

      // Construir la URL de la imagen utilizando la base URL de imágenes de TMDb
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      const textImage = `https://image.tmdb.org/t/p/w500/${movie.title}`;

      // Crear elementos
      var containerFavorites = document.createElement('div');
      containerFavorites.className = 'section-favorites__item-images';

      var imgElement = document.createElement('img');
      imgElement.className = 'section-favorites__image';
      imgElement.src = imageUrl;
      imgElement.alt = '';

      var text = document.createElement('p');
      text.className = 'section-favorites__text';
      text.textContent = movie.title;

      // Agregar la imagen al contenedor
      containerFavorites.appendChild(imgElement);
      // Agregar la imagen al contenedor
      containerFavorites.appendChild(text);

      // Agregar la imagen al contenedor
      moviesContainerFavorites.appendChild(containerFavorites);
    });
  })
  .catch(error => console.error('Error fetching popular movies:', error));