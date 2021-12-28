import { useState } from 'react';
import { BASE_URL } from '../../assets/constants';
const TyreCard = ({ tyre, saveTyre, deleteTyre }) => {
  const [tyreData, setTyreData] = useState({
    name: tyre.name,
    description: tyre.description,
    price: tyre.price,
    width: tyre.width,
    height: tyre.height,
    season: tyre.season,
    studded: tyre.studded,
    count: tyre.count,
    radius: tyre.radius,
    type: tyre.type,
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTyreData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearCheckbox = (e) => {
    setTyreData((prevState) => {
      return { ...prevState, [e.target.name]: '' };
    });
    но;
  };
  const handleSave = () => {
    saveTyre(tyre.id, tyreData);
  };
  const handleDelete = () => {
    deleteTyre(tyre.id);
  };
  console.log(tyreData);
  return (
    <>
      <tr>
        <th scope="row">{tyre.id}</th>
        <td>
          <img
            src={`${BASE_URL}/uploads/tyres/${tyre.photo}`}
            className="card__images"
            alt="..."
            onError={(e) => {
              e.target.onError = null;
              e.target.src = `${BASE_URL}/wrapper.png`;
            }}
          />
        </td>
        <td>
          <div className="form mt-3 mb-3">
            <textarea
              name="name"
              rows="5"
              type="text"
              className="form-control"
              id="floatingInputPrice"
              required
              value={tyreData.name}
              onChange={handleInput}
            />
          </div>
        </td>
        <td>
          <div className="form mt-3 mb-3">
            <input
              name="radius"
              min={0}
              type="number"
              className="form-control"
              id="floatingInputPrice"
              required
              value={tyreData.radius}
              onChange={handleInput}
            />
          </div>
        </td>
        <td>
          <div className="form mt-3 mb-3">
            <input
              name="width"
              type="number"
              className="form-control"
              id="floatingInputwidth"
              required
              value={tyreData.width}
              onChange={handleInput}
            />
          </div>
        </td>
        <td>
          <div className="form mt-3 mb-3">
            <input
              name="height"
              type="number"
              className="form-control"
              id="floatingInputheight"
              required
              value={tyreData.height}
              onChange={handleInput}
            />
          </div>
        </td>
        <td>
          <div className="form mt-3 mb-3">
            <textarea
              name="description"
              rows="5"
              type="text"
              className="form-control"
              id="floatingInputdescription"
              required
              value={tyreData.description}
              onChange={handleInput}
            />
          </div>
        </td>
        <td>
          <div className="form mt-3 mb-3">
            <input
              name="price"
              min={0}
              type="number"
              className="form-control"
              id="floatingInputPrice"
              required
              value={tyreData.price}
              onChange={handleInput}
            />
          </div>
        </td>
        <td>
          <div className="form mt-3 mb-3">
            <input
              name="count"
              min={0}
              type="number"
              className="form-control"
              id="floatingInputcount"
              required
              value={tyreData.count}
              onChange={handleInput}
            />
          </div>
        </td>
        <td>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="season"
              value="winter"
              id={`flexCheckWinter ${tyre.id}`}
              onChange={(e) => {
                if (tyreData[e.target.name] === e.target.value) {
                  clearCheckbox(e);
                } else {
                  handleInput(e);
                }
              }}
              checked={tyreData.season === 'winter' ? true : false}
            />
            <label
              className="form-check-label"
              htmlFor={`flexCheckWinter ${tyre.id}`}
            >
              Зимняя
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="season"
              value="summer"
              id={`flexCheckSummer ${tyre.id}`}
              onChange={(e) => {
                if (tyreData[e.target.name] === e.target.value) {
                  clearCheckbox(e);
                } else {
                  handleInput(e);
                }
              }}
              checked={tyreData.season === 'summer' ? true : false}
            />
            <label
              className="form-check-label"
              htmlFor={`flexCheckSummer ${tyre.id}`}
            >
              Летняя
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="season"
              value="allseason"
              id={`flexCheckAllSeason ${tyre.id}`}
              onChange={(e) => {
                if (tyreData[e.target.name] === e.target.value) {
                  clearCheckbox(e);
                } else {
                  handleInput(e);
                }
              }}
              checked={tyreData.season === 'allseason' ? true : false}
            />
            <label
              className="form-check-label"
              htmlFor={`flexCheckAllSeason ${tyre.id}`}
            >
              Всесезонная
            </label>
          </div>
        </td>
        <td>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="studded"
              name="studded"
              id="flexCheckStudded"
              onChange={(e) => {
                if (tyreData[e.target.name] === e.target.value) {
                  clearCheckbox(e);
                } else {
                  handleInput(e);
                }
              }}
              checked={tyreData.studded === 'studded' ? true : false}
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
                if (tyreData[e.target.name] === e.target.value) {
                  clearCheckbox(e);
                } else {
                  handleInput(e);
                }
              }}
              checked={tyreData.studded === 'nostudded' ? true : false}
            />
            <label className="form-check-label" htmlFor="flexCheckNoStudded">
              Нешипованные
            </label>
          </div>
        </td>
        <td>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="novelty"
              id="flexCheckNonovelty"
              name="type"
              onChange={(e) => {
                if (tyreData[e.target.name] === e.target.value) {
                  clearCheckbox(e);
                } else {
                  handleInput(e);
                }
              }}
              checked={tyreData.type === 'novelty' ? true : false}
            />
            <label className="form-check-label" htmlFor="flexCheckNonovelty">
              Новинка
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="action"
              id="flexCheckNoaction"
              name="type"
              onChange={(e) => {
                if (tyreData[e.target.name] === e.target.value) {
                  clearCheckbox(e);
                } else {
                  handleInput(e);
                }
              }}
              checked={tyreData.type === 'action' ? true : false}
            />
            <label className="form-check-label" htmlFor="flexCheckNoaction">
              Акция
            </label>
          </div>
        </td>
        <td>
          <div className="d-flex justify-content-between mt-auto">
            <button
              type="button"
              className="btn btn-danger m-1"
              onClick={handleDelete}
            >
              Удалить
            </button>
            <button
              type="button"
              className="btn btn-success m-1"
              onClick={handleSave}
            >
              Сохранить
            </button>
          </div>
        </td>
      </tr>
      <style jsx>{`
        .card__items {
          flex-basis: 23%;
          display: flex;
          flex-direction: column;
          height: 400px;
          box-sizing: border-box;
          border: 1px solid #f0f0f0;
          padding: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          margin: 0 0 15px 0;
        }
        .card__images {
          align-self: center;
          display: inline-block;
          width: 100px;
          height: 110px;
          margin: 0 0 10px 0;
        }
      `}</style>
    </>
  );
};

export default TyreCard;
