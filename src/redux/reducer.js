import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("add to cart function is called");
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART condition ", action);
      // data.length= data.length? data.length-1:[]
      const remainingItems= data.filter((item)=>item.id!==action.data)
      return [...remainingItems] 

    case EMPTY_CART:
      console.warn("EMPTY_CART function is called");
      data = [];
      return [];
    default:
      return data;
  }
};
