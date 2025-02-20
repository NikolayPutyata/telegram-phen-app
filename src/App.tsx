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
import Boosts from './components/Boosts/Boosts.tsx';
import Skins from './components/Skins/Skins.tsx';
import Special from './components/Special/Special.tsx';
import { setBalance } from './redux/walletSlice/walletSlice.ts';
import { getUserTonBalance } from './utils/getUserTonBalance.ts';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useIsConnectionRestored } from '@tonconnect/ui-react';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [{ connected, account }] = useTonConnectUI();
const connectionRestored = useIsConnectionRestored();
    

  useEffect(() => {
    const initUser = async () => {
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();

        const telegramUser = window.Telegram.WebApp.initDataUnsafe.user;
      
        const user = {
          id: telegramUser.id,
          username: telegramUser.username,
          first_name: telegramUser.first_name,
          last_name: telegramUser.last_name,
          photo_url: telegramUser.photo_url,
          language_code: telegramUser.language_code,
        };
        dispatch(initUserFromServer(user));
        
      }
      
    };

    initUser();
  }, [dispatch]);



useEffect(() => {
    if (!connectionRestored || !connected || !account?.address) return;

    const fetchBalance = async () => {
        
            const balance = await getUserTonBalance(account.address);
            dispatch(setBalance(balance));
        
    };

    fetchBalance();
}, [connectionRestored, connected, account, dispatch]);





  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boosts" element={<Leaderbords />} >
          <Route path="/boosts" element={<Boosts />} />
          <Route path="skins" element={<Skins />} />
          <Route path="special" element={<Special />} />
        </Route>
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
