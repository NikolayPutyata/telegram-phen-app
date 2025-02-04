import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './Pages/Home/Home.js';
import Tasks from './Pages/Tasks/Tasks.js';
import Leaderbords from './Pages/Leaderbords/Leaderbords.js';
import Profile from './Pages/Profile/Profile.js';
import Friends from './components/Friends/Friends.js';
import TasksDetails from './components/TasksDetails/TasksDetails.js';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const initUser = async () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      
      console.log(window.Telegram.WebApp.initDataUnsafe.user.id);

  } 
    };
    
    initUser();
    
  }, []);
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boosts" element={<Leaderbords />} />
        <Route path="/tasks" element={<Tasks />}>
          <Route path="/tasks" element={<TasksDetails />} />
          <Route path='friends' element={<Friends />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
