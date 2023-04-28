import { useState } from 'react';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import PropTypes from 'prop-types';
import datepicker from '../../assets/datepicker-icon.svg';
import style from './index.module.scss';

/**
 * Birthday DatePicker: use propTypes to define properties
 */
const DatePickerInput = ({
  value,
  onChange,
}) => {
  const [visible, setVisible] = useState(false);
  const onClickDatePicker = () => {
    setVisible(true);
  };
  return (
    <>
      <DatePicker
        title="Pick a Date"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={(val) => {
          onChange(moment(val).format('YYYYMMDD'));
        }}
      />
      <div className={style.birthdayInput} onClick={onClickDatePicker}>
        <div className={style.birthdayTitleItem}>Birthday</div>
        <div>
          <span className={style.birthdayPlaceholder}>
            {value ? moment(value).format('MM/DD/YYYY') : 'Month/Day/Year'}
            <img className={style.datepickerIcon} src={datepicker} alt="datepickerIcon" />
          </span>
        </div>
      </div>
    </>
  );
};

DatePickerInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DatePickerInput;
