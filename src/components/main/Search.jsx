import "../../assets/css/main-css/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { Context } from "../../context/ContextProvider";

const Search = () => {
  const { handleSubmit } = useContext(Context);

  return (
    <>
      <section id="search">
        <div className="container search-body">
          <div className="search-text">
            <h3>¿Buscas alguna película?</h3>
            <p> Explora nuestros títulos:</p>
          </div>
          <div className="searchbar-wrapper">
            <form className="searchbar" onSubmit={handleSubmit}>
              <input type="text" className="search-input" />
              <button type="submit">
                <SearchIcon sx={{ color: "#333333" }} fontSize="small" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
