import './App.css';
import React, { useState } from 'react';

// Importação dos componentes
import UseStateHook from './hooks/useState';
import UseEffectHook from './hooks/useEffect';
import UseRefHook from './hooks/useRef';
import UseReducerHook from './hooks/useReducer';
import UseContextHook from './hooks/useContext';
import UseMemoHook from './hooks/useMemo';
import UseCallbackHook from './hooks/useCallback';
import UseLayoutEffectHook from './hooks/useLayoutEffect';

function App() {
  const [componenteAtivo, setComponenteAtivo] = useState(1);

  // Função para avançar para o próximo componente
  const proximoComponente = () => {
    setComponenteAtivo((prevComponente) => 
      prevComponente === 8 ? 1 : prevComponente + 1
    );
  };

  // Função para voltar para o componente anterior
  const anteriorComponente = () => {
    setComponenteAtivo((prevComponente) => 
      prevComponente === 1 ? 8 : prevComponente - 1
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Renderização condicional dos 8 componentes */}
        {componenteAtivo === 1 && <UseStateHook />}
        {componenteAtivo === 2 && <UseEffectHook />}
        {componenteAtivo === 3 && <UseRefHook />}
        {componenteAtivo === 4 && <UseReducerHook/>}
        {componenteAtivo === 5 && <UseContextHook/>}
        {componenteAtivo === 6 && <UseMemoHook />}
        {componenteAtivo === 7 && <UseCallbackHook />}
        {componenteAtivo === 8 && <UseLayoutEffectHook />}

        {/* Botões para navegação */}
        <div>
          <button onClick={anteriorComponente}>Anterior</button>
          <button onClick={proximoComponente}>Próximo</button>
        </div>
      </header>
    </div>
  );
}

export default App;
