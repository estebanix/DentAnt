import '../styles/App.css';
import { HomePage } from '../containers/HomePage.tsx/index.ts';
import { AppPage } from '../containers/AppPage/AppPage.tsx';
import {Route, Routes} from "react-router-dom"
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={<AppPage />} />
      <Route path="/data_processing" element={<HomePage />} />
      <Route path="/visualization" element={<HomePage />} />
    </Routes>  
  )
}

export default App
