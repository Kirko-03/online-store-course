import {BrowserRouter} from 'react-router-dom'
import {NavBar} from './components/NavBar'
const { AppRouter } = require("./components/AppRouter");

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
