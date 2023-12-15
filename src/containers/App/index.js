import Bottom from '@components/Bottom';
import Header from '@components/Header';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppContext } from '@utils/context';
import { getUser } from '@services/login';
import Cookies from 'js-cookie';
import { Toast } from 'antd-mobile';
import { useCurMenu } from '@utils/hooks';
import style from './index.module.scss';

const App = () => {
  const [, setStore] = useAppContext();
  const nav = useNavigate();
  const location = useLocation();
  const menu = useCurMenu();

  useEffect(() => {
    const init = async () => {
      const userId = Cookies.get('userId');
      console.log('userId', userId);
      if (!userId) {
        Toast.show('Please login again...');
        nav('/login');
      }

      const res = await getUser(userId);
      if (res.data) {
        setStore({
          user: res.data,
        });
        if (location.pathname === '/login') {
          nav('/tweets');
        }
        return;
      }
      nav('/login');
    };
    init();
  }, []);
  return (
    <div className={style.container}>
      {!menu.hideHeader && <Header />}
      <Outlet />
      <Bottom />
    </div>
  );
};

export default App;
