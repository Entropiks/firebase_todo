import background from './assets/bg_banner.png';
import Header from './Components/Header';
import './App.css';
import UserList from './Components/UserList';


function App() {

  return (
    <div className="app-wrapper">
      <img className="background-image" src={background}/>
      <div className="content-wrapper">
        <Header />
        <UserList />
      </div>
    </div>
  );
}

export default App;
