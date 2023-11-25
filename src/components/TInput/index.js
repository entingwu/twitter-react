import { Input } from 'antd-mobile';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import style from './index.module.scss';

/**
 * Interactive Input
 */
const TInput = ({
  label,
  value,
  length,
  onChange,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hide, setHide] = useState(false);

  // initialization
  useEffect(() => {
    if (value) {
      setIsFocused(true);
      setHide(true);
    }
  }, []); // initialize, only run once

  const onFocus = () => {
    setIsFocused(true);
    setHide(true);
  };

  const onBlur = () => {
    if (!value || value.length === 0) {
      setIsFocused(false);
      setHide(false);
      return;
    }
    setHide(false);
  };

  const onChangeHandler = (val) => {
    if (length && val.length > length) {
      return;
    }
    onChange(val);
  };

  return (
    <div className={hide ? style.tInputFocused : style.tInput}>
      <div className={isFocused ? style.labelFocused : style.label}>
        {label}
        {hide && (
        <span className={style.labelRight}>
          {value?.length}
          /
          {length}
        </span>
        )}
      </div>
      <Input
        className={isFocused ? style.inputItemFocused : style.inputItem}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChangeHandler}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    </div>
  );
};

TInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  length: PropTypes.number,
  onChange: PropTypes.func,
};

TInput.defaultProps = {
  label: '',
  value: undefined,
  length: undefined,
  onChange: () => {},
};

export default TInput;
