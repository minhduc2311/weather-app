import { createContext, useContext } from "react";

const Context = createContext()

export const useWeatherContext = () => {
    const [state, dispatch] = useContext(Context);
    
    return [state, dispatch];
}

export default Context;

