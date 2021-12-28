import { useEffect, useState } from 'react';
import { instance } from '../../assets/constants';
import Router from 'next/router';

const ProjectSupport = () => {
  // для формы авторизации по почте
  const [email, setEmail] = useState();
  const [textLogin, setTextLogin] = useState('');
  // для проверки авторизации по почте
  const [isAdmin, setIsAdmin] = useState(false);
  //   value input type password
  const [nanoid, setNanoid] = useState('');
  //   для отображения ошибки в случае если не правильно ввели пароль
  const [checkNanoid, setCheckNanoid] = useState('');
  //   после введенного пароля проверяем
  const [isAuth, setIsAuth] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post('/projectSupport', { email: email });
      if (response.status === 200) {
        setIsAdmin(true);
      }

      //   sessionStorage.setItem('nanoid', response.data);
    } catch (e) {
      setIsAdmin(false);
      setTextLogin('Ошибка сервера 404');
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      try {
        const response = await instance.post('/projectSupport/auth', {
          password: nanoid,
        });
        if (response.status === 200) {
          setCheckNanoid('');
          setIsAuth(true);
          sessionStorage.setItem('nanoid', response.data.message);
          Router.push('/projectSupport/tyresList', null, { shallow: true });
          return;
        }
      } catch (e) {
        console.log(e.response);
        setIsAuth(false);
        try {
          setCheckNanoid(e.response.data.message);
        } catch (e) {
          setCheckNanoid('Неизвестная ошибка');
        }
      }
    } else {
      return;
    }
  };

  //   useEffect(() => {
  //     const tokenAdmin = sessionStorage.getItem('nanoid');
  //     // if (tokenAdmin) {
  //     //   setSession();
  //     // }
  //     console.log(tokenAdmin);
  //   }, []);

  return (
    <>
      {isAuth && isAdmin ? (
        <div>Загрузка данных ...</div>
      ) : isAuth || isAdmin ? (
        <div className="container mt-5  d-flex justify-content-center align-items-center">
          <form autoComplete="off">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                На вашу почту придет сообщение с кодом, пожалуйста введите код.
                И нажмите Enter
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                autoComplete="off"
                onKeyDown={handleKeyDown}
                value={nanoid}
                onChange={(e) => setNanoid(e.target.value)}
              />

              <div id="passwordHelpBlock" className="form-text">
                {checkNanoid}
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="container mt-5  d-flex justify-content-center align-items-center">
          <form autoComplete="off">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Введите почту
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text text-danger">
                {textLogin}
              </div>
            </div>

            <button className="btn btn-primary" onClick={(e) => handleLogin(e)}>
              Продолжить
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ProjectSupport;
