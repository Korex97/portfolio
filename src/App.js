import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Main } from './Main';



function App() {
  return (
    <>
      <Router basename={window.location.pathname || ""}>
        <Routes>
          <Route path='/' exact element={<Main />} />
        </Routes>      
      </Router>
    </>
  );
}

export default App;
