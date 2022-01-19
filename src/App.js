import './style/App.css';
import { Feed } from './pages/feed';

function App() {
  return (
    <div className="App">

      <div className='navigationContainer'>
        <nav className='navigation'>
          <div className='logo'>go-social</div>
          <div className='navBtns'>
            <div className="btn navBtn">feed</div>
            <div className="btn navBtn">profile</div>
            <div className="btn navBtn">logout</div>
          </div>
        </nav>
      </div>

      <Feed />
    </div>
  );
}

export default App;
