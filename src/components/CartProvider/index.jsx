import { createContext, useState } from "react";

// const mockCart = [
//   {
//     data: {
//       id: "1",
//       title: "Padrões de projeto",
//       author: "Autor",
//       publishingCompany: "Editora Alfa",
//       description: "Descrição",
//       image:
//         "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
//       price: 56.78,
//     },
//     quantity: 2,
//   },
//   {
//     data: {
//       id: "2",
//       title: "Padrões de projeto",
//       author: "Autor",
//       publishingCompany: "Editora Alfa",
//       description: "Descrição",
//       image:
//         "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
//       price: 56.78,
//     },
//     quantity: 1,
//   },
//   {
//     data: {
//       id: "3",
//       title: "Padrões de projeto",
//       author: "Autor",
//       publishingCompany: "Editora Alfa",
//       description: "Descrição",
//       image:
//         "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
//       price: 56.78,
//     },
//     quantity: 3,
//   },
//   {
//     data: {
//       id: "4",
//       title: "Padrões de projeto",
//       author: "Autor",
//       publishingCompany: "Editora Alfa",
//       description: "Descrição",
//       image:
//         "https://dl4326nmjp5rc.cloudfront.net/Custom/Content/Products/98/97/989759_padroes-de-projeto_l9_637147798831529653.jpg",
//       price: 56.78,
//     },
//     quantity: 1,
//   }
// ];

export const CartContext = createContext({ cart: [], setCart: () => {}, addToCart: () => {}});

export function CartProvider({ children }) {
  const cartJSON = localStorage.getItem("@devbooks/cart");
  
  const cartArray = cartJSON ? JSON.parse(cartJSON) : [];

  const [cart, setCart] = useState(cartArray);

  const setCartValue = (cartList) => {
    localStorage.setItem("@devbooks/cart", JSON.stringify(cartList))
    setCart(cartList);
  }
  
  const addToCart = (product) => {
    if(cart.findIndex(item => item.data.id === product.id) === -1) {
      const newCart = [...cart, {data: product, quantity: 1}];
      
      localStorage.setItem("@devbooks/cart", JSON.stringify(newCart))
      setCart(newCart);
    }
  }
  
  const value = { cart, setCart: setCartValue, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
