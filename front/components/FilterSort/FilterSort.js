import style from '../../styles/FilterSort.module.css';

const FilterSort = () => {
  return (
    <div className={style.filter__wrapper + ' border mb-5'}>
      <p className="lead">По параметрам</p>
      <form>
        <div className="d-flex justify-content-between mb-2 w-50 flex-wrap">
          <div className="col-sm-3">
            <label htmlFor="inputWidth" className="form-label">
              Ширина
            </label>
            <input
              min={0}
              type="number"
              className="form-control"
              id="inputWidth"
              aria-describedby="WidthHelp"
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="inputHeight" className="form-label">
              Высота
            </label>
            <input
              min={0}
              type="number"
              className="form-control"
              id="inputHeight"
              aria-describedby="HeightHelp"
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="inputRadius" className="form-label">
              Радиус
            </label>
            <input
              min={0}
              type="number"
              className="form-control"
              id="inputRadius"
              aria-describedby="RadiusHelp"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between mb-2 flex-wrap w-25">
          <div className="form-check">
            <input
              className={style.custom + ' form-check-input'}
              type="checkbox"
              name="season"
              value="winter"
              id={`flexCheckWinter`}
            />
            <label className="form-check-label" htmlFor={`flexCheckWinter`}>
              Зимняя
            </label>
          </div>
          <div className="form-check">
            <input
              className={style.custom + ' form-check-input'}
              type="checkbox"
              name="season"
              value="winter"
              id={`flexCheckSummer`}
            />
            <label className="form-check-label" htmlFor={`flexCheckSummer`}>
              Летняя
            </label>
          </div>
          <div className="form-check">
            <input
              className={style.custom + ' form-check-input'}
              type="checkbox"
              name="season"
              value="winter"
              id={`flexCheckAllSeason`}
            />
            <label className="form-check-label" htmlFor={`flexCheckAllSeason`}>
              Всесезонная
            </label>
          </div>

          <div className="form-check">
            <input
              className={style.custom + ' form-check-input'}
              type="checkbox"
              name="season"
              value="winter"
              id={`flexCheckStudded`}
            />
            <label className="form-check-label" htmlFor={`flexCheckStudded`}>
              Шипованные
            </label>
          </div>
          <div className="form-check">
            <input
              className={style.custom + ' form-check-input'}
              type="checkbox"
              name="season"
              value="winter"
              id={`flexCheckNostudded`}
            />
            <label className="form-check-label" htmlFor={`flexCheckNostudded`}>
              Нешипованные
            </label>
          </div>
        </div>
        <button type="button" className={style.filter__button + ' btn'}>
          Подобрать
        </button>
      </form>
    </div>
  );
};

export default FilterSort;
