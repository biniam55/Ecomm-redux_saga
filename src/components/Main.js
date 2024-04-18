import { action, addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.warn("Data from the main component", data);
  // const product = {
  //   name: "samsung galaxy j4",
  //   category: "mobile phone",
  //   price: "2500",
  //   color: "silver",
  // };
  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart </button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>Product List </button>
      </div>
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item">
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
