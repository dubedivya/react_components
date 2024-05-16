import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`,
      );
      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
        navigate("/");
      }

      console.log(recipeList);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      setSearchParams("");
    }
  };

  //handle favorites
  const handleAddToFavorites = (getCurrentRecipeItem) => {
    let copyFavorites = [...favoritesList];
    let index = copyFavorites.findIndex(
      (item) => item.id === getCurrentRecipeItem.id,
    );
    if (index === -1) {
      copyFavorites.push(getCurrentRecipeItem);
    } else {
      copyFavorites.splice(index);
    }

    setFavoritesList(copyFavorites);
  };

  console.log(favoritesList, "favorites");

  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        loading,
        recipeList,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        favoritesList,
        setFavoritesList,
        handleAddToFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
