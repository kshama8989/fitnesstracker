import logo from './assets/fitness.png';
import './App.css';

import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <header >
        <img src={logo} className="App-logo" alt="logo" style={{width:'100px' , height: 'auto' }}/>
      </header>
      <AppRoutes/>
    </div>
  );
}

export default App;
