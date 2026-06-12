import { ProductDTO } from "@/core/dto/product.dto";
import { productService } from "@/core/services/product.service";
import { CrudService } from "@/core/types/crud-service.type";
import { useEffect, useReducer, useState, useTransition } from "react";


export const useProductApi = (autoload = false) => {

    const [data, setData] = useState<ProductDTO[]>([]);

    const read = async () => {
        const response = await productService.read()
        if (response.status === 'success') setData(response.data);
        return response;
    }

    useEffect(() => {
        if (autoload) read()
    }, [autoload]);

    return {
        products: data,
        read
    }
}


/**
 * useProductApiTransition is a custom hook that manages the state of product data and its loading status using React's useTransition hook. 
 * It provides a way to read product data from an API and update the state in a non-blocking manner, 
 * allowing for smoother UI updates when fetching data. The hook also supports an autoload feature that automatically
 *  fetches data when the component mounts if the autoload parameter is set to true.
 */
export const useProductApiTransition = (autoload = false) => {
    const [data, setData] = useState<ProductDTO[]>([]);

    const [isPending, startTransition] = useTransition();

    const read = async () => {

        const response = await productService.read();
        if (response.status === "success") {
            startTransition(() => { setData(response.data); });
        }
    };

    useEffect(() => {
        if (autoload) read();
    }, [autoload]);

    return {
        products: data,
        isPending,
        read,
    };
};


/**
 * Reducer-based State Management:
 * A reducer is a pure function that takes the current state and an action, and returns a new state.
 * It is commonly used in React applications to manage complex state logic, especially when the state updates depend on previous state values.
 * The useReducer hook is a React hook that allows you to manage state using a reducer function. 
 * It provides an alternative to useState for managing more complex state logic.
 */

type ProductApiState = {
    products: ProductDTO[];
};

type ProductApiAction = {
    type: "SET_PRODUCTS";
    payload: ProductDTO[];
} | {
    type: "CLEAR_PRODUCTS";
};

const initialState: ProductApiState = {
    products: [],
};

const productApiReducer = ( state: ProductApiState, action: ProductApiAction ): ProductApiState => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

/**
 * useProductApiReducer is a custom hook that manages the state of product data using React's useReducer hook.
 * It provides a way to read product data from an API and update the state based on dispatched actions. 
 * The hook also supports an autoload feature that automatically fetches data when the component mounts if the autoload parameter is set to true.
 * 
 * @example
 * const { products, dispatch } = useProductApiReducer(true);
 * 
 * // To read products manually
 * dispatch("read");
 * 
 * // To clear products manually
 * dispatch("delete", product);
 */
export const useProductApiReducer = (autoload = false) => {
    const [state, reducerDispatch] = useReducer(productApiReducer, initialState );

    const dispatch = async (action: keyof Omit<CrudService<ProductDTO>,'API'>, payload?: any) => {
        switch (action) {
            case "read": {
                const response = await productService.read();
                if (response.status === "success") reducerDispatch({ type: "SET_PRODUCTS", payload: response.data });
                break;
            }
            case "delete": {
                const response = await productService.delete(payload);
                if (response.status === "success") reducerDispatch({ type: "CLEAR_PRODUCTS" });
                break;
            }
            default:
                break;
        }
    };

    useEffect(() => {
        if (autoload) dispatch("read");
    }, [autoload]);

    return {
        products: state.products,
        dispatch,
    };
};
