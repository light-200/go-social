import './style/App.css';
import { Feed } from './pages/feed';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Feed />
    </div>
  );
}

export default App;
