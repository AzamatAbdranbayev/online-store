import withAuthAdmin from '../../AdminComponents/HOC/withAuthAdmin';
import AdminNav from '../../AdminComponents/AdminNav/AdminNav';
import { useEffect, useState } from 'react';
import { instance } from '../../assets/constants';
import TyreCard from '../../AdminComponents/TyreCard/TyreCard';
import ModalError from '../../AdminComponents/ModalError/ModalError';

const TyresList = () => {
  const [showModalError, setShowModalError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [tyres, setTyres] = useState([]);
  useEffect(async () => {
    const response = await instance.get('/products/tyres');
    console.log(response);
    setTyres(response.data);
  }, []);

  const saveTyre = async (id, dataTyre) => {
    try {
      const response = await instance.post(`/projectSupport/savetyres/${id}`, {
        ...dataTyre,
      });
      const newTyres = tyres.map((tyre) => {
        if (tyre.id === response.data[0].id) {
          return response.data[0];
        } else {
          return tyre;
        }
      });
      setTyres(newTyres);
    } catch (e) {
      console.log(e.response);
      setShowModalError(true);
      if (
        e.response &&
        e.response.data.message &&
        typeof e.response.data.message !== 'object'
      ) {
        setErrorText(e.response.data.message);
      } else {
        setErrorText(e.message);
      }
    }
  };

  const deleteTyre = async (id) => {
    try {
      const response = await instance.delete(
        `/projectSupport/deletetyres/${id}`
      );
      const newTyres = tyres.filter((tyre) => tyre.id !== response.data[0].id);
      setTyres(newTyres);
    } catch (e) {
      setShowModalError(true);
      if (
        e.response &&
        e.response.data.message &&
        typeof e.response.data.message !== 'object'
      ) {
        setErrorText(e.response.data.message);
      } else {
        setErrorText(e.message);
      }
    }
  };
  return (
    <>
      {showModalError && (
        <ModalError
          status={showModalError}
          close={() => setShowModalError(false)}
          text={errorText}
        />
      )}
      <AdminNav />
      <div>
        <table className="table table-striped table-hover table-bordered border-success">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Изображение</th>
              <th scope="col">Наименование</th>
              <th scope="col">Радиус</th>
              <th scope="col">Длина</th>
              <th scope="col">Высота</th>
              <th scope="col">Описание</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Количество</th>
              <th scope="col">Сезонность</th>
              <th scope="col">Шипованность</th>
              <th scope="col">Тип товара</th>
              <th scope="col">Методы</th>
            </tr>
          </thead>
          <tbody>
            {tyres.map((tyre) => {
              return (
                <TyreCard
                  key={tyre.id}
                  tyre={tyre}
                  saveTyre={saveTyre}
                  deleteTyre={deleteTyre}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default withAuthAdmin(TyresList);
