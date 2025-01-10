import {useState} from "react";

const useStateHook = () => {
    const [count, setCount] = useState(0); //define count como 0 inicialmente
      
        const incrementar = () => {
         
            setCount(count + 1); // Atualiza o valor apenas se for par
          
        };
      
        return (
          <div>
            <h1>UseState</h1>
            <p>Valor atual: {count}</p>
            <button onClick={incrementar}>Incremente</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
          </div>
        );
    
      
};

export default useStateHook;