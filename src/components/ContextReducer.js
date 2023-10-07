import React, { createContext, useContext, useReducer } from "react";


const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action) => {
    switch(action.type) {
        case "ADD":
            return [...state, {id: action.id, name: action.name, img: action.img, qty: action.qty, size: action.size, price: action.price}]

        case "REMOVE" :
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;

        case "UPDATE" :
            let arr = [...state]
            arr.find((food, index) => {
              if(food.id === action.id) {
                // console.log(food.qty);
                // console.log(action.qty);
                // console.log((parseInt(action.qty) + parseInt(food.qty)));
                arr[index] = {...food, qty: (parseInt(action.qty) + parseInt(food.qty)), price: action.price + food.price}
                // console.log(arr);
              }
                
              return arr;
            })
            return arr;

            


        case "DROP":
            let empArray = []
            return empArray
        default:
            console.log("Error in Reducer");
    }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext); 