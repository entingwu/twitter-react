import React from 'react';
import { CloseOutline } from 'antd-mobile-icons';
import PropTypes from 'prop-types';
import { useCurMenu, useGoTo } from '@utils/hooks';
import { useAppContext } from '@utils/context';
import logo from '../../assets/twitter-logo.svg';
import style from './index.module.scss';

/**
 * Public Header
 */
const Header = ({
  children,
}) => {
  const [store] = useAppContext();
  const menu = useCurMenu();
  const go = useGoTo();
  const result = [];

  // Logged in
  if (store.user) {
    console.log('menu', menu, !menu.hideHeader);
    if (menu.hideHeader) {
      result.push(
        <div key="backHeader" className={style.headerWrapper}>
          <svg
            className={style.back}
            onClick={() => go()}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.5530 1-.447 1-1s-.447-1-1-1z" />
            </g>
          </svg>
          {children}
        </div>,
      );
    } else {
      result.push(
        <div key="avatarUrl" className={style.backHeader}>
          <img src={store.user?.avatar_url} alt="" className={style.avatar} />
        </div>,
      );

      result.push(
        <span key="title" className={style.title}>
          {store.title}
        </span>,
      );
    }
  }
  // Display content when not logged in
  if (store.closeHeaderHandler) {
    result.push(
      <CloseOutline
        className={style.closeIcon}
        onClick={store.closeHeaderHandler}
      />,
    );
    result.push(<img src={logo} alt="twitter-logo" className={style.twitterLogo} />);
  }

  return (
    <div className={style.header}>
      {result}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
