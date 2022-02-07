import {BrowserRouter} from 'react-router-dom'

const { AppRouter } = require("./components/AppRouter");

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
