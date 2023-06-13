import { useState } from "react";
import Api from "../../services/Api";

const SearchInput = ({ setFiltered }) => {
  const [currentProduct, setCurrentProduct] = useState("");
  const userId = window.localStorage.getItem("@eCOMPANY:user_id");
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const newProducts = await Api.get(`/users/${userId}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  };

  getProducts();

  function getFilteredProducts(value) {
    setCurrentProduct(value);
    const filtered =
      value === "" || !value
        ? products
        : products?.filter((el) => {
            return (
              el.name
                .toLowerCase()
                .includes(currentProduct.trim().toLowerCase()) ||
              el.type
                .toLowerCase()
                .includes(currentProduct.trim().toLowerCase()) ||
              el.city
                .toLowerCase()
                .includes(currentProduct.trim().toLowerCase()) ||
              el.country
                .toLowerCase()
                .includes(currentProduct.trim().toLowerCase())
            );
          });


    setFiltered("");
    setFiltered(filtered);
  }

  return (
    <div>
      <input
        type="search"
        value={currentProduct}
        onChange={(event) => getFilteredProducts(event.target.value)}
      />
      {/* <button onClick={getFilteredProducts}>Pesquisar</button> */}
    </div>
  );
};

export default SearchInput;
