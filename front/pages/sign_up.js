import Image from 'next/image';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import ALink from '../components/ALink/ALink';
import arrow from '../public/arrow.svg';
import styles from '../styles/sign_up.module.css';
import { instance } from '../assets/constants';
import { useDispatch } from 'react-redux';
import { fetchRegisterUser } from '../store/userStore/userActions';

export default function SignUp() {
  console.log(process.env.BACK_HOST);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    username: '',
    phone: '',
    confirmPassword: '',
  });
  const handlerInput = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const create = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(fetchRegisterUser(userData));
  };
  return (
    <>
      <div className={styles.signup__container}>
        <div
          className={`${styles.signup__items} ${styles.signup__image}`}
        ></div>
        <div className={styles.signup__items}>
          <h3>Регистрация</h3>
          <form onSubmit={create}>
            <div className={styles.signup__form}>
              <div className={styles.signup__space}>
                {' '}
                <label>Имя : </label>
                <input
                  name="username"
                  className={styles.signup__input}
                  placeholder="Введите ваше имя"
                  onChange={handlerInput}
                  required
                />
              </div>

              <div className={styles.signup__space}>
                {' '}
                <label>Почта : </label>
                <input
                  name="email"
                  className={styles.signup__input}
                  placeholder="Введите ваше почту"
                  onChange={handlerInput}
                  required
                />
              </div>

              <div className={styles.signup__space}>
                <label>Телефон : </label>
                <InputMask
                  className={styles.signup__input}
                  placeholder="Введите ваш телефон"
                  value={userData.phone}
                  name="phone"
                  onChange={handlerInput}
                  mask="+7(799) 999-99-99"
                  maskChar=""
                  required
                />
              </div>

              <div className={styles.signup__space}>
                {' '}
                <label>Пароль : </label>
                <input
                  name="password"
                  className={styles.signup__input}
                  placeholder="Введите ваш пароль"
                  onChange={handlerInput}
                  required
                />
              </div>

              <div className={styles.signup__space}>
                {' '}
                <label>Подтвердите пароль : </label>
                <input
                  name="confirmPassword"
                  className={styles.signup__input}
                  placeholder="Повторите пароль"
                  onChange={handlerInput}
                  required
                />
              </div>

              <button type="submit" className={styles.signup__submit}>
                Регистрация
              </button>
              <div className={styles.signup__space}>
                <div className={styles.signup__arrow}>
                  <Image src={arrow} alt="arrow" width={40} height={20} />
                </div>

                <ALink
                  text="Вернуться на страницу авторизации"
                  href="/login"
                  color="#1ca1f1"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
