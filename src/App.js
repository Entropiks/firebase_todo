import background from './assets/bg_banner.png';
import Header from './Components/Header';
import './App.css';
import UserInput from './Components/UserInput';
import UserItem from './Components/UserItem';

function App() {
  return (
    <div className="app-wrapper">
      <img className="background-image" src={background}/>
      <div className="content-wrapper">
        <Header />
        <UserInput />
        <UserItem />
      </div>
      
    </div>
  );
}

export default App;
