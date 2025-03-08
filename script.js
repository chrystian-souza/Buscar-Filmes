let container = document.querySelector('.info');
let formulario = document.querySelector('.formulario');
let filme = document.querySelector('.form-control');

async function getTodos(filme) {
  let request = await fetch(`https://www.omdbapi.com/?s=${filme}&apikey=e6c43dc6`);
  let data = await request.json();


    container.innerHTML = ''
    data.Search.forEach((result) => {
      console.log(result.Title);
      console.log(result.Poster);

      container.innerHTML += `
        <div class='cards'>
          <img src="${result.Poster}" alt="${result.Title} Poster"" style="width: 200px; height: 300px;">
          <p>${result.Title}</p>
        </div>
      `;
    });
  
}

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  getTodos(filme.value);
});
