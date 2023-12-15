import { useLocation, useNavigate } from 'react-router-dom';
import { getMenuByKey, getMenuByLink, includeMenu } from './constants';

// Customized Hooks: How to get menu of current page
// 获取到当前的菜单
export const useCurMenu = () => {
  // Retrieve current router
  const lo = useLocation();
  const it = getMenuByLink(lo.pathname);
  return it;
};

// 收敛路由的跳转
export const useGoTo = () => {
  const navigate = useNavigate();
  return (key) => {
    if (!key) {
      return navigate(-1);
    }
    const it = getMenuByKey(key);
    if (!it) return navigate('/');
    return navigate(it.link);
  };
};

export const useIncludesMenu = () => {
  const lo = useLocation();
  const result = includeMenu(lo.pathname);
  return result;
};
