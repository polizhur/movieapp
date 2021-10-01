import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./MoviePage.scss";

export default function MoviePage() {
  //   const route_parameters = useParams();
  //   const imdb_id = route_parameters.imdb_id

  const { imdb_id } = useParams();
  console.log(imdb_id);

  const [movieData, setMovieData] = useState();
  console.log("render...", movieData);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://omdbapi.com/?apikey=40c04f88&i=${imdb_id}`
      ).then((r) => r.json());

      setMovieData(data);
    }

    fetchData();
  }, [imdb_id]);

  return (
    <div className="MoviePage">
      {movieData ? (
        <>
          <h2>{movieData.Title}</h2>
          <div>
            {movieData.Genre.split(", ").map((genre, index) => (
              <span key={index} className="genre">
                {genre}
              </span>
            ))}
          </div>
          <div className="details">
            <img alt={movieData.Title} src={movieData.Poster} />
            <div>
              <h3>Director</h3>
              <p>{movieData.Director}</p>
              <h3>Language</h3>
              <p>{movieData.Language}</p>
              <h3>Plot</h3>
              <p>{movieData.Plot}</p>
              <h3>IMDB Rating</h3>
              <p>{movieData.imdbRating}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
