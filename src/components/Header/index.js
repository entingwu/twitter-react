import React from 'react';
import { CloseOutline } from 'antd-mobile-icons';
import { useAppContext } from '@utils/context';
import logo from '../../assets/twitter-logo.svg';
import style from './index.module.scss';

const Header = () => {
  const [store] = useAppContext();
  console.log('store', store);
  return (
    <div className={style.header}>
      {store.closeHeaderHandler && (
        <CloseOutline
          className={style.closeIcon}
          onClick={store.closeHeaderHandler}
        />
      )}
      <img src={logo} alt="twitter-logo" className={style.twitterLogo} />
    </div>
  );
};

export default Header;
