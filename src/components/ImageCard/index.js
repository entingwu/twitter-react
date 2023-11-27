import { useState, useEffect } from 'react';
import { Image } from 'antd-mobile';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './index.module.scss';

/**
* Picture Display Component
* Display 4 pictures at most
* 1 picture can be filled directly.
* 2 pictures, one on each side.
* 3 pictures, one on the left and two on the right.
* 4 pictures, two on the left and two on the right.
*/
const ImageCard = ({
  imgs,
}) => {
  const [data, setData] = useState();
  useEffect(() => {
    console.log('data', data);
    setData([]);
  }, []);

  const getWrapper = () => {
    switch (imgs.length) {
      case 1:
        return style.wrapper1;
      case 2:
        return style.wrapper2;
      case 3:
        return style.wrapper3;
      case 4:
        return style.wrapper4;
      default:
        return style.wrapper;
    }
  };

  // <div className={classNames(style.wrapper, getWrapper())`${style.wrapper} ${getWrapper()}`}></div>
  return (
    <div className={style.container}>
      <div className={classNames(style.wrapper, getWrapper())}>
        {imgs.map((img, index) => (<Image fit="cover" className={classNames(style.img, `img${index}`)} key={img + index} src={img} alt="" />))}
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
};

ImageCard.defaultProps = {
  imgs: [],
};

export default ImageCard;
