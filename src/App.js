import background from './assets/bg_banner.png';
import Header from './Components/Header';
import './App.css';
import UserList from './Components/UserList';
import NoticeBar from './Components/NoticeBar';


function App() {

  return (
    <div className="app-wrapper">
      <img className="background-image" src={background}/>
      <div className="content-wrapper">
        <Header />
        <UserList />
      </div>
      {/* <NoticeBar /> */}
    </div>
  );
}

export default App;
