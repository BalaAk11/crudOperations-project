import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Create from './create';
import Read from './read';
import Update from './update';
function App() {

  return (
    <BrowserRouter>
     <div className="Main">
      <h1>React Crud Operations</h1>

     <Routes>
      
      <Route path='/' element={<Create/>}/>
      <Route path='/read' element={<Read/>}/>
      <Route path='/update' element={<Update/>}/>
      

     </Routes>
     </div>

    </BrowserRouter>
    
    
  );
}
export default App;