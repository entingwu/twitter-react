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
    icon: <img className={style.icon} src={homeSvg} alt="" />,
  },
  {
    key: 'search',
    title: '/search',
    icon: <img className={style.icon} src={searchSvg} alt="" />,
  },
  {
    key: 'tip',
    title: 'Notification',
    link: '/tip',
    icon: <img className={style.icon} src={tipSvg} alt="" />,
  },
  {
    key: 'message',
    title: 'Message',
    link: '/message',
    icon: <img className={style.icon} src={messageSvg} alt="" />,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

export const getMenuByLink = (link) => menus.find((item) => item.link === link);
