import { createContext, useContext, useState, } from "react";
import PropTypes from "prop-types";

const FavContext = createContext();

export function FavProvider({ children }) {
  const [fav, setFav] = useState([]);
  const deliveryValue = {
    fav,
    setFav,
  };
  return (
    <FavContext.Provider value={deliveryValue}>
      {children}
    </FavContext.Provider>
  )
}

export const useFav = () => useContext(FavContext);

FavProvider.propTypes = {
  children : PropTypes.string.isRequired,
}