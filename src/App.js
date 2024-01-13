
import './App.css';
import { Searchbar } from './components/Searchbar';
import Meteodaily from './components/Meteodaily';
import { BrowserRouter,Route,Routes } from 'react-router-dom';





function App() {
  return (
    <div className='bg-black'>
      <BrowserRouter >
            
           <Searchbar/>
           
           <Routes>
          
          
          <Route path='/:city'element={
              <>
                <Meteodaily/>
              </>
          }>
            </Route>
            <Route path='/'element={
              <>
                <Meteodaily/>
              </>
          }>
            </Route>
            <Route path='/:city/15'element={
              <>
                <Meteodaily/>
              </>
          }>
            </Route>
            
         
         </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
