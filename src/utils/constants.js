import homeSvg from '@assets/home.svg';
import searchSvg from '@assets/search.svg';
import tipSvg from '@assets/tip.svg';
import messageSvg from '@assets/message.svg';

import style from '../common.module.scss';

export const menus = [
  {
    key: 'tweets',
    title: 'Home',
    link: '/tweets',
    isMenu: true,
    icon: <img className={style.icon} src={homeSvg} alt="" />,
  },
  {
    key: 'search',
    title: '/search',
    isMenu: true,
    icon: <img className={style.icon} src={searchSvg} alt="" />,
  },
  {
    key: 'tip',
    title: 'Notification',
    link: '/tip',
    isMenu: true,
    icon: <img className={style.icon} src={tipSvg} alt="" />,
  },
  {
    key: 'message',
    title: 'Message',
    link: '/message',
    isMenu: true,
    icon: <img className={style.icon} src={messageSvg} alt="" />,
  },
  {
    key: 'comment',
    title: 'Reply',
    link: '/comment',
    hideHeader: true,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

export const getMenuByLink = (link) => menus.find((item) => link.indexOf(item.link) > -1);

export const includeMenu = (link) => menus.some((item) => item.link === link);
