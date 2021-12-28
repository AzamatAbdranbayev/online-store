import { useEffect, useState } from 'react';
import AdminNav from '../../AdminComponents/AdminNav/AdminNav';
import FileInput from '../../AdminComponents/FileInput/FileInput';
import { instance } from '../../assets/constants';
import withAuthAdmin from '../../AdminComponents/HOC/withAuthAdmin';

const AddTyres = () => {
  const [isErr, setIsErr] = useState({
    status: false,
    message: '',
  });

  const [catalogs, setCatalog] = useState({
    catalogs: [],
    catalogproducts: [],
  });

  const [product, setProduct] = useState({
    photo: '',
    name: '',
    description: '',
    idcatalog: '1',
    idcatalogproduct: '',
    price: '',
    width: '',
    height: '',
    radius: '',
    season: '',
    studded: '',
    count: '',
    type: '',
  });

  useEffect(async () => {
    try {
      const response = await instance.get('/catalogs');
      setCatalog(response.data);
    } catch (e) {
      setIsErr({ status: true, message: e?.message });
      setCatalog({
        catalogs: [],
        catalogproducts: [],
      });
    }
  }, []);

  const clearCheckbox = (e) => {
    setProduct((prevState) => {
      return { ...prevState, [e.target.name]: '' };
    });
  };

  const clearErr = () => {
    setIsErr({ status: false, message: '' });
  };

  const handleInputPhoto = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setProduct((prevState) => ({
      ...prevState,
      [name]: file,
    }));
  };

  const handleInputForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const IsEmptyProduct = () => {
    if (
      product.name === '' ||
      product.description === '' ||
      product.size === '' ||
      product.price === '' ||
      product.photo === '' ||
      product.idcatalogproduct === ''
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = async () => {
    try {
      if (IsEmptyProduct()) {
        setIsErr({
          status: true,
          message: 'Не все поля заполнены. Проверьте пожалуйста! ',
        });
      } else {
        const formData = new FormData();
        Object.keys(product).forEach((key) =>
          formData.append(key, product[key])
        );
        const response = await instance.post(
          '/projectSupport/addtyres',
          formData
        );
        console.log(response);
        if (response.status === 200) {
          setProduct({
            photo: '',
            name: '',
            description: '',
            idcatalog: '1',
            idcatalogproduct: '',
            price: '',
            width: '',
            height: '',
            radius: '',
            season: '',
            studded: '',
            count: '',
            type: '',
          });
        }
      }
    } catch (e) {
      if (e.response && e.response.data) {
        setIsErr({ status: true, message: e?.response?.data?.message });
      } else {
        setIsErr({ status: true, message: e.message.toString() });
      }
    }
  };
  return (
    <>
      <AdminNav />
      <div className="container w-75 mt-2 position-relative">
        {isErr.status && (
          <div className="position-absolute top-0 start-100 translate-middle">
            <div
              className="card text-white bg-danger mb-3"
              style={{ maxWidth: '18rem' }}
            >
              <div className="card-header d-flex flex-row">
                <div> Ошибка</div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={clearErr}
                ></button>
              </div>

              <div className="card-body">
                <p className="card-text">{isErr.message}</p>
              </div>
            </div>
          </div>
        )}
        <h1>Автошины</h1>
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              id="floatingInputName"
              onChange={handleInputForm}
              value={product.name}
              required
            />
            <label htmlFor="floatingInputName">Наименование</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              type="text"
              name="description"
              className="form-control"
              id="inputDescription"
              onChange={handleInputForm}
              value={product.description}
              required
            />
            <label htmlFor="inputDescription">Описание</label>
          </div>

          <div className="row">
            <div className="col">
              <select
                className="form-select mt-2"
                aria-label="Default select example"
                name="idcatalogproduct"
                onChange={handleInputForm}
                required
              >
                <option selected disabled hidden>
                  Выберите подтовар
                </option>
                {catalogs.catalogproducts
                  .filter((el) => el.idcatalog === product.idcatalog)
                  .map((el) => {
                    return (
                      <option value={el.id} key={el.id + el.name}>
                        {el.name}
                      </option>
                    );
                  })}
              </select>
              <div className="form-floating mt-3 mb-3">
                <input
                  min={0}
                  type="number"
                  name="price"
                  className="form-control"
                  id="floatingInputPrice"
                  onChange={handleInputForm}
                  required
                  value={product.price}
                />
                <label htmlFor="floatingInputPrice">Цена</label>
              </div>

              <div className="form-floating mt-3 mb-3">
                <input
                  min={0}
                  type="number"
                  name="radius"
                  className="form-control"
                  id="floatingInputRadius"
                  required
                  value={product.radius}
                  onChange={handleInputForm}
                />
                <label htmlFor="floatingInputRadius">Радиус</label>
              </div>
              <div className="form-floating mt-3 mb-3">
                <input
                  min={0}
                  type="number"
                  name="width"
                  className="form-control"
                  id="floatingInputwidth"
                  required
                  value={product.width}
                  onChange={handleInputForm}
                />
                <label htmlFor="floatingInputSize">Длина</label>
              </div>
              <div className="form-floating mt-3 mb-3">
                <input
                  min={0}
                  type="number"
                  name="height"
                  className="form-control"
                  id="floatingInputheight"
                  required
                  value={product.height}
                  onChange={handleInputForm}
                />
                <label htmlFor="floatingInputSize">Высота</label>
              </div>
              <div className="form-floating mt-3 mb-3">
                <input
                  min={0}
                  type="number"
                  name="count"
                  className="form-control"
                  id="floatingInputcount"
                  required
                  value={product.count}
                  onChange={handleInputForm}
                />
                <label htmlFor="floatingInputcount">Количество</label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="season"
                  value="winter"
                  id="flexCheckWinter"
                  onChange={(e) => {
                    if (product[e.target.name] === e.target.value) {
                      clearCheckbox(e);
                    } else {
                      handleInputForm(e);
                    }
                  }}
                  checked={product.season === 'winter' ? true : false}
                />
                <label className="form-check-label" htmlFor="flexCheckWinter">
                  Зимняя
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="season"
                  value="summer"
                  id="flexCheckSummer"
                  onChange={(e) => {
                    if (product[e.target.name] === e.target.value) {
                      clearCheckbox(e);
                    } else {
                      handleInputForm(e);
                    }
                  }}
                  checked={product.season === 'summer' ? true : false}
                />
                <label className="form-check-label" htmlFor="flexCheckSummer">
                  Летняя
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="season"
                  value="allseason"
                  id="flexCheckAllSeason"
                  onChange={(e) => {
                    if (product[e.target.name] === e.target.value) {
                      clearCheckbox(e);
                    } else {
                      handleInputForm(e);
                    }
                  }}
                  checked={product.season === 'allseason' ? true : false}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckAllSeason"
                >
                  Всесезонная
                </label>
              </div>
              <hr />
              {/* шипы */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="studded"
                  name="studded"
                  id="flexCheckStudded"
                  onChange={(e) => {
                    if (product[e.target.name] === e.target.value) {
                      clearCheckbox(e);
                    } else {
                      handleInputForm(e);
                    }
                  }}
                  checked={product.studded === 'studded' ? true : false}
                />
                <label className="form-check-label" htmlFor="flexCheckStudded">
                  Шипованные
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="nostudded"
                  id="flexCheckNoStudded"
                  name="studded"
                  onChange={(e) => {
                    if (product[e.target.name] === e.target.value) {
                      clearCheckbox(e);
                    } else {
                      handleInputForm(e);
                    }
                  }}
                  checked={product.studded === 'nostudded' ? true : false}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckNoStudded"
                >
                  Нешипованные
                </label>
              </div>
              <hr />
              {/* тип товара */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="novelty"
                  id="flexCheckNoTyreType"
                  name="type"
                  onChange={(e) => {
                    if (product[e.target.name] === e.target.value) {
                      clearCheckbox(e);
                    } else {
                      handleInputForm(e);
                    }
                  }}
                  checked={product.type === 'novelty' ? true : false}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckNoTyreType"
                >
                  Новинка
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="action"
                  id="flexCheckNoTyreTypeaction"
                  name="type"
                  onChange={(e) => {
                    if (product[e.target.name] === e.target.value) {
                      clearCheckbox(e);
                    } else {
                      handleInputForm(e);
                    }
                  }}
                  checked={product.type === 'action' ? true : false}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckNoTyreTypeaction"
                >
                  Акция
                </label>
              </div>
            </div>
          </div>

          <label className="form-label">Фотография</label>
          <FileInput name="photo" label="Фото" onChange={handleInputPhoto} />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Добавить Товар
          </button>
        </form>
      </div>
    </>
  );
};

export default withAuthAdmin(AddTyres);
