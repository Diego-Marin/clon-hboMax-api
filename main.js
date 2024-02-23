//Nueva API
// API KEY a030899d3821596bf58a076d2e4d9cbf

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer a030899d3821596bf58a076d2e4d9cbf'
//   }
// };

// fetch('https://api.themoviedb.org/3/authentication', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


//https://developer.themoviedb.org/reference/intro/authentication#api-key-quick-start
const apiKey = 'a030899d3821596bf58a076d2e4d9cbf';

// Obtener películas populares
const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`;

// Realizar la solicitud para obtener películas populares
fetch(popularMoviesUrl)
  .then(response => response.json())
  .then(data => {
    // Obtener la lista de películas
    const movies = data.results;

    // Obtener el contenedor HTML
    const moviesContainer = document.getElementById('movies-container');

    // Iterar sobre las películas y mostrar las imágenes
    movies.forEach(movie => {
      // Crear un elemento de imagen
      const imgElement = document.createElement('img');

      // Construir la URL de la imagen utilizando la base URL de imágenes de TMDb
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      // Establecer la fuente de la imagen
      imgElement.src = imageUrl;

      // Agregar la imagen al contenedor
      moviesContainer.appendChild(imgElement);
    });
  })
  .catch(error => console.error('Error fetching popular movies:', error));







// Ejemplo de estructura de contenido API:  https://www.omdbapi.com/?i=tt0944947&apikey=611124c
// https://www.omdbapi.com/?apikey=611124c&t=Titanic

// // script.js
// const apiKey = '611124c'; // Reemplaza 'tu_clave_api' con tu clave real
// const moviesContainer = document.getElementById('movies-container'); // Reemplaza 'movies-container' con el ID de tu contenedor
// const maxMoviesToFetch = 20; // Puedes ajustar la cantidad máxima de películas que deseas obtener

// // Función para obtener y mostrar películas aleatorias con póster
// const getRandomMoviesWithPoster = async () => {
//   let moviesAdded = 0;

//   while (moviesAdded < maxMoviesToFetch) {
//     const success = await getRandomMovieWithPoster();

//     if (success) {
//       moviesAdded++;
//     }
//   }
// };

// // Función para obtener y mostrar una película aleatoria con póster
// const getRandomMovieWithPoster = async () => {
//   try {
//     let randomImdbId;

//     // Realizar un bucle hasta que se encuentre una película con póster
//     while (true) {
//       // Generar un ID de IMDb aleatorio (formato ttXXXXXXX)
//       randomImdbId = `tt${Math.floor(Math.random() * 10000000)}`;

//       console.log('Intentando con IMDb ID:', randomImdbId);

//       const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${randomImdbId}`;

//       // Realizar la solicitud a la API utilizando fetch
//       const response = await fetch(apiUrl);

//       // Verificar si la solicitud fue exitosa (código de estado 200)
//       if (response.ok) {
//         // Convertir la respuesta a formato JSON
//         const data = await response.json();

//         // Verificar si la película tiene un póster, título y al menos una calificación
//         if (data.Poster !== "N/A" && data.Title && data.Ratings && data.Ratings.length > 0) {
//           // Crear un elemento de imagen y agregarlo al contenedor
//           const imgElement = document.createElement('img');
//           imgElement.src = data.Poster;
//           imgElement.alt = data.Title;

//           moviesContainer.appendChild(imgElement);

//           // Mostrar la información de la película
//           console.log('Película encontrada:', data);
//           return true; // Retorna true para indicar que se agregó una película con éxito
//         } else {
//           console.log('La película no cumple con los requisitos:', data);
//         }
//       } else {
//         // En caso de error, imprimir el mensaje de error
//         console.error(`Error en la solicitud a la API: ${response.status} - ${response.statusText}`);
//       }
//     }
//   } catch (error) {
//     // Capturar errores de red u otros errores
//     console.error('Error al realizar la solicitud:', error);
//     return false; // Retorna false en caso de error
//   }
// };

// // Llamar a la función para obtener y mostrar películas aleatorias con póster
// getRandomMoviesWithPoster();
