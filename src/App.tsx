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

type TelegramUser = {
  id: number;
  username?: string;
  first_name: string;
  last_name?: string;
  photo_url?: string;
  language_code?: string;
};

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const initUser = async () => {
      // if (window.Telegram && window.Telegram.WebApp) {
      //   window.Telegram.WebApp.ready();

      //   const telegramUser = window.Telegram.WebApp.initDataUnsafe.user;

      //   const user: TelegramUser = {
      //     id: telegramUser.id,
      //     username: telegramUser.username,
      //     first_name: telegramUser.first_name,
      //     last_name: telegramUser.last_name,
      //     photo_url: telegramUser.photo_url,
      //     language_code: telegramUser.language_code,
      //   };

      // }
      dispatch(
        initUserFromServer({
          id: 234209834,
          username: 'anton',
          language_code: 'ua',
          photo_url: 'Http:sgdf',
        }),
      );
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
          <Route path="friends" element={<Friends />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
