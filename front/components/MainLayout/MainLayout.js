import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/MainLayout.module.css';
import ALink from '../ALink/ALink';
import logo from '../../public/logo.png';
import android from '../../public/android.svg';
import apple from '../../public/app-store.svg';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';

const MainLayout = ({ children, title }) => {
  const stateUser = useSelector((state) => state.user);
  console.log(stateUser);
  console.log(stateUser.user ? 'true' : 'false');
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width = device-width, initial-scale = 1"
        />
        <meta
          name="description"
          content="Интернет магазин шин города Алматы. Купить шины для легковых и грузовых автомобилей. Доставка "
        ></meta>
        <meta
          name="keywords"
          content="Шины, Автомобильные шины,Купить шины для легковых и грузовых автомобилей, грузовые шины"
        ></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"
        />
        {/* настроить мета теги для постов. делиться ссылкой */}
        <title>{title}</title>
      </Head>
      {/* <div className={styles.wrapper}> */}
      <nav
        className="navbar navbar-expand-lg navbar-light"
        aria-label="Ninth navbar example"
      >
        <div className="container-xl">
          <Link href="/">
            <a className="navbar-brand">
              <Image src={logo} alt="tire" width={100} height={100} />
            </a>
          </Link>

          <button
            className="navbar-toggler collapsed border border-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07XL"
            aria-controls="navbarsExample07XL"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarsExample07XL">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Главная
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/catalog">
                  <a className="nav-link">Каталог</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">О компании</a>
                </Link>
              </li>
              {stateUser.user ? (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="dropdown07XL"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Личный кабинет
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdown07XL"
                    >
                      <li>
                        <Link href="/about">
                          <a className="dropdown-item">История покупок</a>
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item">Выйти</a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <Link href="/login">
                      <a className="nav-link link-dark px-2 text-reset">
                        Войти
                      </a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className={styles.content}>{children}</div>

      <footer className={styles.footer}>
        <div className="container p-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4 col-sm-6 d-flex flex-column align-items-center bd-highlight mb-3">
              <h4>Ассортимент</h4>
              <span className={styles.footer__item}>Шины</span>
              <span className={styles.footer__item}>Грузовые шины</span>
              <span className={styles.footer__item}>Пакеты для шин</span>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex flex-column align-items-center bd-highlight mb-3">
              <h4>Часы работы</h4>
              <span className={styles.footer__item}>ПН-ПТ: 09:00 - 20:00</span>
              <span className={styles.footer__item}>СБ 11:00 - 20:00</span>
              <div>
                <Image src={android} alt="android" width={50} height={25} />
                <Image src={apple} alt="apple" width={50} height={25} />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-center bd-highlight mb-3">
              <h4>Мы на связи</h4>
              <span className={styles.footer__item}>
                {'   ул.Рыскулова 72A, г.Алматы'}
              </span>
              <a className={styles.footer__item} href="tel:+77077778043">
                {'  +7 (707) 777 - 80 - 43'}
              </a>
              <a className={styles.footer__item} href="mailto:abntyres@mail.ru">
                {'abntyres@mail.ru'}
              </a>
            </div>
          </div>
        </div>
        <hr />

        <p className="text-center text-muted">
          © 2021 ТОО "ABN Tyres Sauda". Все права защищены
        </p>
      </footer>
      {/* </div> */}

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js"
        integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default MainLayout;
