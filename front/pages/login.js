import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import ALink from '../components/ALink/ALink';
import styles from '../styles/login.module.css';
import google from '../public/google.svg';
import facebook from '../public/facebook.svg';
import eye from '../public/eye.svg';
import { fetchLoginUser } from '../store/userStore/userActions';

export default function Login() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const handleInput = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(fetchLoginUser(userData));
  };
  return (
    <>
      <div className={styles.login__wrapper}>
        <div className={`${styles.login__content} ${styles.login__col}`}>
          <h1 className={styles.login__title}>Авторизация</h1>
          <button className={`${styles.login__button} ${styles.login__fc} `}>
            <Image src={facebook} alt="facebook" width={30} height={15} />
            Авторизация с Facebook
          </button>
          <button
            className={`${styles.login__button} ${styles.login__google} `}
          >
            <Image src={google} alt="google" width={30} height={15} />
            Авторизация с Google
          </button>
        </div>
        <div className={`${styles.login__content} ${styles.login__col}`}>
          <h2 className={styles.login__subtitle}>Авторизация через почту</h2>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.login__col}`}>
              <input
                name="email"
                className={styles.login__input}
                type="text"
                placeholder="Введите почту"
                onChange={handleInput}
              />
              <div className={styles.login__row}>
                <input
                  name="password"
                  className={styles.login__input}
                  type="password"
                  placeholder="Введите пароль"
                  onChange={handleInput}
                />
                <div className={styles.login__eye}>
                  <Image src={eye} alt="eye" width={30} height={15} />
                </div>
              </div>

              <button
                className={`${styles.login__button} ${styles.login__submit}`}
                type="submit"
              >
                Войти
              </button>
            </div>
          </form>
        </div>
        <div className={styles.login__col}>
          <div className={styles.login__signUp}>
            Еще нет учетной записи?
            <ALink text="Зарегистрируйтесь сейчас" href="/sign_up" />
          </div>
          <ALink text="Вернуться на главную" href="/" color="#1ca1f1" />
        </div>
      </div>
    </>
  );
}
