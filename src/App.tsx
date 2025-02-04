import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './Pages/Home/Home.js';
import Tasks from './Pages/Tasks/Tasks.js';
import Leaderbords from './Pages/Leaderbords/Leaderbords.js';
import Profile from './Pages/Profile/Profile.js';
import Friends from './components/Friends/Friends.js';
import TasksDetails from './components/TasksDetails/TasksDetails.js';

const App = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Инициализация WebApp
      window.Telegram.WebApp.init();
      
      // Логирование данных, которые могут быть полезны
      console.log(window.Telegram.WebApp.initDataUnsafe);

      // Дополнительная логика, например, для обработки данных
    } else {
      console.error('WebApp не доступен. Убедитесь, что это работает в Telegram.');
    }
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
