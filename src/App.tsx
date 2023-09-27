import './styles/App.css';
import { HomePage } from './containers/HomePage.tsx';
import {Route, Routes} from "react-router-dom"
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>  
  )
}

export default App
