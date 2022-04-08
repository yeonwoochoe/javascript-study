import axios from "axios";

function fetchMovies() {
  axios.get("https://www.omdbapi.com/?apikey=7035c60c&s=frozen").then((res) => {
    console.log(res);
    //// console을 통해서 데이터 구조 확인 가능
    const h1El = document.querySelector("h1");
    const imgEl = document.querySelector("img");
    h1El.textContent = res.data.Search[0].Title;
    //// Dom을 이용해서 해당 태그에 title 데이터를 넣음
    imgEl.src = res.data.Search[0].Poster;
    // Dom을 이용해서 해당 태그에 img 데이터를 넣음
  });
}

fetchMovies();
