import Bottom from '@components/Bottom';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

import style from './index.module.scss';

const App = () => (
  <div className={style.container}>
    <Header />
    <Outlet />
    <Bottom />
  </div>
);

export default App;
