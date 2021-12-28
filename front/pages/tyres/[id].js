import { useState } from 'react';
import { BASE_URL, instance } from '../../assets/constants';
import MainLayout from '../../components/MainLayout/MainLayout';
import style from '../../styles/tyre.module.css';
import ModalImage from '../../components/ModalImage/ModalImage';
import search from '../../public/search.png';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function Tyre({ tyre }) {
  const [showModal, setShowModal] = useState(false);
  let season = '';
  let studded = '';
  switch (tyre.season) {
    case 'summer':
      season = 'Летняя';
      break;
    case 'winter':
      season = 'Зимняя';
      break;
    case 'allseason':
      season = 'Всесезонная';
      break;
    default:
      break;
  }
  switch (tyre.studded) {
    case 'studded':
      studded = 'Шипованная';
      break;
    case 'nostudded':
      studded = 'Нешипованная';
      break;
    default:
      break;
  }
  const handleCloseModal = () => {
    setShowModal(!showModal);
  };
  return (
    <MainLayout title="">
      {showModal && (
        <ModalImage imgSrc={tyre.photo} close={handleCloseModal}></ModalImage>
      )}
      <div className="container">
        <div className="card mb-3 p-5">
          <div className="row g-0">
            <div
              className={
                style.hoverIcon +
                ' col-md-4 d-flex justify-content-center position-relative'
              }
              onClick={handleCloseModal}
            >
              <div
                className={
                  style.icon +
                  ' position-absolute top-50 start-50 translate-middle'
                }
              >
                <Image
                  src={search}
                  loader={myLoader}
                  alt="tytree"
                  width="64px"
                  height="64px"
                />
              </div>

              <img
                src={`${BASE_URL}/uploads/tyres/${tyre.photo}`}
                className={style.tyre__image + ' img-fluid rounded-start'}
                alt="tyre"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = `${BASE_URL}/wrapper.png`;
                }}
              />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{tyre.name}</h5>
                <p className="card-text">{tyre.description}</p>
                <strong>{`от ${tyre.price} тг`}</strong>
                <p className="card-text"></p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h6 className="card-title">Характеристики</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Радиус</span>
                    <span>{tyre.radius}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span className={style.span}>Ширина</span>
                    <span>{tyre.width}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Высота</span>
                    <span>{tyre.height}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Радиус</span>
                    <span>{tyre.radius}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Сезонность</span>
                    <span>{season}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Шипы</span>
                    <span>{studded}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Тип автошины</span>
                    <span>{tyre?.productType}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const response = await instance.get(`/products/tyres/${params.id}`);
    console.log(response);
    return { props: { tyre: response.data[0] } };
  } catch (e) {
    console.log(e.message);
    return { props: { tyre: '' } };
  }
}

export default Tyre;
