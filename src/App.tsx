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
import { initUserFromServer } from './redux/operations.js';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store.ts';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const initUser = async () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      
      const user = {
        id: window.Telegram.WebApp.initDataUnsafe.user.id,
        username: window.Telegram.WebApp.initDataUnsafe.user.username,
        first_name: window.Telegram.WebApp.initDataUnsafe.user.first_name,
        last_name: window.Telegram.WebApp.initDataUnsafe.user.last_name,
        photo_url: window.Telegram.WebApp.initDataUnsafe.user.photo_url,
        language_code: window.Telegram.WebApp.initDataUnsafe.user.language_code,
      };

      
      dispatch(initUserFromServer(user))
      } 
      
    };
    
    initUser();
    
  }, [dispatch]);
  
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


