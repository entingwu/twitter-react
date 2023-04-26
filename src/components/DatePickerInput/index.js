import React from 'react';
import datepicker from '../../assets/datepicker-icon.svg';
import style from './index.module.css'

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayTitleItem}>Birthday</div>
    <div>
      <span className={style.birthdayPlaceholder}>Month/Day/Year
        <img className={style.datepickerIcon} src={datepicker} alt="datepickerIcon" /></span>
    </div>
  </div>
);
