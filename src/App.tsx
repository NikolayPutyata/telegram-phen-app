import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './Pages/Home/Home.js';
import Tasks from './Pages/Tasks/Tasks.js';
import Leaderbords from './Pages/Leaderbords/Leaderbords.js';
import Profile from './Pages/Profile/Profile.js';
import Friends from './components/Friends/Friends.js';
import TasksDetails from './components/TasksDetails/TasksDetails.js';
import { useEffect, useState } from 'react';
import { getAllBoostsThunk, initUserFromServer } from './redux/operations.js';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store.ts';
import Boosts from './components/Boosts/Boosts.tsx';
import Skins from './components/Skins/Skins.tsx';
import Special from './components/Special/Special.tsx';
import { setBalance } from './redux/walletSlice/walletSlice.ts';
import { getUserTonBalance } from './utils/getUserTonBalance.ts';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useIsConnectionRestored } from '@tonconnect/ui-react';
import CommonCol from './components/SkinsChange/CommonCol.tsx';
import BronseCol from './components/SkinsChange/BronseCol.tsx';
import SilverCol from './components/SkinsChange/SilverCol.tsx';
import GoldCol from './components/SkinsChange/GoldCol.tsx';
import PlatinumCol from './components/SkinsChange/PlatinumCol.tsx';
import DiamondCol from './components/SkinsChange/DiamondCol.tsx';
import LoadingScreen from './Pages/LoadingScreen/LoadingScreen.tsx';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [{ connected, account }] = useTonConnectUI();
  const connectionRestored = useIsConnectionRestored();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initUser = async () => {
      try {
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
          await dispatch(initUserFromServer(user)).unwrap();
        }
        await dispatch(getAllBoostsThunk()).unwrap();
      } catch (error) {
        console.error('Initialization failed:', error);
      }
    };

    const loadWithMinimumDelay = async () => {
      const minimumLoadingTime = new Promise((resolve) => {
        setTimeout(resolve, 5000); 
      });

      await Promise.all([initUser(), minimumLoadingTime]);
      setIsLoading(false); 
    };

    loadWithMinimumDelay();
  }, [dispatch]);

  useEffect(() => {
    if (!connectionRestored || !connected || !account?.address) return;

    const fetchBalance = async () => {
      try {
        const balance = await getUserTonBalance(account.address);
        dispatch(setBalance(balance));
      } catch (error) {
        console.error('Failed to fetch balance:', error);
      }
    };

    fetchBalance();
  }, [connectionRestored, connected, account, dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<CommonCol />} />
          <Route path="bronse-col" element={<BronseCol />} />
          <Route path="silver-col" element={<SilverCol />} />
          <Route path="gold-col" element={<GoldCol />} />
          <Route path="platinum-col" element={<PlatinumCol />} />
          <Route path="diamond-col" element={<DiamondCol />} />
        </Route>
        <Route path="/boosts" element={<Leaderbords />}>
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