import { createContext, useState } from "react";
import axios from "axios";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  //States
  const [movies, setMovies] = useState([]);
  const initStarState = {
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  };
  const [stars, setStars] = useState(initStarState);
  const [starCount, setStarCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [initMoviesState, setInitMovieState] = useState([]);
  const [detail, setDetail] = useState();

  if (localStorage.length === 0) {
    localStorage.setItem("detalle", "[]");
  }
  const storageDetail = JSON.parse(localStorage.getItem("detail"));

  //API call
  const getMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=31d23b625808ce1ca14fb9af5bedeeb7&sort_by=popularity.desc&language=es-AR"
    );
    setStars(initStarState);
    setInitMovieState(response.data.results);
    setMovies(response.data.results);
    setLoading(false);
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    data.preventDefault();
    const query = data.target[0].value;
    if (query === "") {
      getMovies();
      setLoading(false);
    } else {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=31d23b625808ce1ca14fb9af5bedeeb7&sort_by=popularity.desc &language=es-AR&query=${query}`
      );
      setMovies(response.data.results);
      setLoading(false);
    }
  };

  //Functions

  const handleStars = (rating) => {
    let starsRef = stars;
    if (starsRef !== initStarState && starCount !== rating) {
      starsRef = initStarState;
    }
    const updateStars = Object.entries(starsRef).map((item, index) => {
      if (index < rating) {
        const value = item[1];
        item.pop();
        item.push(!value);
      }
      return item;
    });
    setStars(Object.fromEntries(updateStars));
    if (starCount === rating) {
      setStarCount(0);
      handleFilter(0);
    } else if (starCount < rating || starCount > rating) {
      setStarCount(rating);
      handleFilter(rating);
    }
  };

  const handleFilter = (rating) => {
    if (rating === 0) {
      getMovies();
    } else {
      let moviesRef = initMoviesState;
      const filteredMovies = moviesRef.filter((item) => {
        if (
          (item.vote_average >= rating * 2 ||
            item.vote_average >= rating * 2 - 1) &&
          item.vote_average < rating * 2 + 1
        ) {
          return item;
        }
      });
      setMovies(filteredMovies);
    }
  };

  const handleDetail = (id) => {
    const getDetail = movies.find((item) => {
      return item.id === id;
    });
    localStorage.setItem("detail", JSON.stringify(getDetail));
    setDetail(getDetail);
  };

  return (
    <Context.Provider
      value={{
        getMovies,
        handleStars,
        handleSubmit,
        handleDetail,
        stars: stars,
        starCount: starCount,
        movies: movies,
        loading: loading,
        detail: storageDetail,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
