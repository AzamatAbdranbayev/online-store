import style from '../../styles/blackHawkInfo.module.css';
const BlackHawkInfo = () => {
  return (
    <>
      <div className={style.blackhawkInfo__wrapper}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4 p-5">
            <div className=" col ">
              <div>
                <h1 className=" fw-bold">Получите техническую информацию</h1>
                <p>
                  Blackhawk BFR65 - это коммерческая шина, предназначенная для
                  использования на управляемой оси туристических автобусов, а
                  также региональных, самосвальных, мусоровозов, пикапов и
                  грузовиков для доставки в регионах. Рисунок протектора с пятью
                  ребрами, улучшающий управляемость и устойчивость, широкие
                  канавки BFR65 отводят воду из шины для лучшего сцепления и
                  производительности на мокрой дороге.
                </p>

                <p>
                  <a
                    className="btn btn-light"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Показать больше
                  </a>
                </p>
                <div
                  className={style.blackhawkInfo__collapse + ' collapse'}
                  id="collapseExample"
                >
                  Особенности и преимущества
                  <div
                    className={
                      style.blackhawkInfo__collapse + ' card card-body border-0'
                    }
                  >
                    <ul
                      className={
                        style.blackhawkInfo__collapse +
                        ' list-group list-group-flush '
                      }
                    >
                      <li
                        className={
                          style.blackhawkInfo__collapse + ' list-group-item'
                        }
                      >
                        Разработан для использования на управляемой оси
                        туристических автобусов и региональных грузовиков,
                        самосвалов, мусоровозов и пикапов.
                      </li>
                      <li
                        className={
                          style.blackhawkInfo__collapse + ' list-group-item'
                        }
                      >
                        Рисунок протектора с пятью ребрами обеспечивает надежную
                        управляемость и стабильность
                      </li>
                      <li
                        className={
                          style.blackhawkInfo__collapse + ' list-group-item'
                        }
                      >
                        Широкие кольцевые канавки быстро удаляют воду из шины
                        для лучшего сцепления на мокрой дороге.
                      </li>
                      <li
                        className={
                          style.blackhawkInfo__collapse + ' list-group-item'
                        }
                      >
                        Прочная резиновая смесь снижает неравномерный износ,
                        продлевая срок службы протектора.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <form autoComplete="off">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Почта
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Телефон
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Текст
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackHawkInfo;
