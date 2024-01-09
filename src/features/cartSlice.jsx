import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
    cartTotal:0,
  },
  reducers: {
      addToCart(state, action) {
        const productId = action.payload;
        try {
          const exist = state.cart.find((product) => product.id === action.payload.id);
          if (!exist) {
           state.cart.push({
              id: action.payload.id,
              price: action.payload.price,
              title: action.payload.title,
              amount: 1,
              image: action.payload.image,
              description: action.payload.description,
              cartTotal: action.payload.total,
              totalPrice: action.payload.price,
            });
            //   total: state.total + 1,
            state.totalAmount++;
            state.cartTotal += action.payload.price;
            state.totalPrice += action.payload.price;
          } 
          else{
            alert("Item already in cart")
          }
        } catch (err) {
          console.error("Error adding to cart:", err);
          return state;
        }
      },
      
      removeFromCart(state, action) {
        try {
          const remove = state.cart.find((product) => product.id === action.payload.id);
      
          if (remove) {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
            state.cartTotal -= remove.totalPrice; 
            state.totalAmount -= remove.amount;
            state.totalPrice -= remove.totalPrice;
          }
        } catch (err) {
          return err;
        }
      },

      handlePlus(state, action) {
        try {
          const plus = state.cart.find((product) => {
            if (product.id === action.payload.id) {
              product.amount++;
              product.totalPrice = product.price * product.amount;
              state.cartTotal += product.price;  
              state.totalAmount++;
            }
          });
        }
        catch (err) {
          return err;
        }
      },
    

      handleMinus(state, action) {
        try {
          const minus = state.cart.find((product) => {
            if (product.id === action.payload.id && product.amount > 1) {
              product.amount--;
              product.totalPrice = product.price * product.amount;
              state.cartTotal -= product.price;  
              state.totalAmount--;
            }
          });
        }
        catch (err) {
          return err;
        }
      }

    },
  })

export const { addToCart, removeFromCart, handlePlus, handleMinus } = cartSlice.actions;
export default cartSlice.reducer;