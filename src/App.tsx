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

  const parseInitData = (initData: string) => {
  const params = new URLSearchParams(initData);
  
  // Проверяем, что данные существуют перед тем, как парсить
  const user = params.get('user');
  return {
    user: user ? JSON.parse(user) : null, // если user есть, то парсим, иначе null
    hash: params.get('hash'),
    auth_date: params.get('auth_date'),
    start_param: params.get('start_param'),
    chat_type: params.get('chat_type'),
    chat_instance: params.get('chat_instance'),
  };
};

useEffect(() => {
  const initUser = async () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      
      const initData = window.Telegram.WebApp.initData;

      const user = parseInitData(initData);

      console.log(user);
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
