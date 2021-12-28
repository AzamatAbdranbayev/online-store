import style from '../../styles/MainLayout.module.scss';
const MainLoader = () => {
  return (
    <div className={style.loading__window}>
      <div className={style.car}>
        <div className={style.strike}></div>
        <div className={style.strike + ' ' + style.strike2}></div>
        <div className={style.strike + ' ' + style.strike}></div>
        <div className={style.strike + ' ' + style.strike4}></div>
        <div className={style.strike + ' ' + style.strike5}></div>
        <div className={style.car__detail + ' ' + style.spoiler}></div>
        <div className={style.car__detail + ' ' + style.back}></div>
        <div className={style.car__detail + ' ' + style.center}></div>
        <div className={style.car__detail + ' ' + style.center1}></div>
        <div className={style.car__detail + ' ' + style.front}></div>
        <div className={style.car__detail + ' ' + style.wheel}></div>
        <div
          className={style.car__detail + ' ' + style.wheel + ' ' + style.wheel2}
        ></div>
      </div>

      <div className={style.text}>
        <span>Загрузка</span>
        <span className={style.dots}>...</span>
      </div>
    </div>
  );
};

export default MainLoader;
