import InitPag from './ComponentsInicPag/PagIni';
import {Routes, Route} from 'react-router-dom';
import Navegacion from "./ComponentsInicPag/Header";
import Register from "./Pages/Register";

function App() {

    return (        
    <div>

        <Routes>
            <Route path="/" element={<Navegacion/>}>
                <Route path="/PagIni" element={<InitPag/>}/>
                <Route path="/" element={<InitPag/>}/>

                <Route path="/Register" element={<Register/>}/>

                
            </Route>
        </Routes>

        

        
    </div>
  );
}

export default App;