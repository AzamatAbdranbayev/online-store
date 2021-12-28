import { BASE_URL } from '../../assets/constants';
import Link from 'next/link';
import style from '../../styles/tyrecol.module.css';
import Image from 'next/image';
import novelty from '../../public/novelty.png';
import action from '../../public/action.png';
import wrapper from '../../public/wrapper.png';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const TyreCol = ({ tyre }) => {
  console.log(tyre);
  let season = '';
  let studded = '';
  switch (tyre.season) {
    case 'allseason':
      season = 'Всесезонная';
      break;
    case 'summer':
      season = 'Летняя';
      break;
    case 'winter':
      season = 'Зимняя';
      break;
    default:
      break;
  }

  switch (tyre.studded) {
    case 'studded':
      studded = ' Шипованные';
      break;
    case 'nostudded':
      studded = ' Нешипованные';
      break;
    default:
      break;
  }
  return (
    <div className={style.tyre__col + ' col'}>
      {tyre.type === 'novelty' && (
        <div className={style.tyre__type}>
          <Image src={novelty} />
        </div>
      )}
      {tyre.type === 'action' && (
        <div className={style.tyre__type}>
          <Image src={action} />
        </div>
      )}
      <div className=" card pt-2 h-100 border-0">
        <Image
          src={`${BASE_URL}/uploads/tyres/${tyre.photo}`}
          loader={myLoader}
          alt="tytree"
          width="150px"
          height="230px"
        />

        {/* <img
          src={`${BASE_URL}/uploads/tyres/${tyre.photo}`}
          className={style.tyre__image + ' card__images'}
          alt="tyre"
          onError={(e) => {
            console.log('eeee');
            e.target.onerror = null;
            e.target.src = action;
          }}
        /> */}
        <div className="card-body mt-auto">
          <h5 className="card-title">{tyre.name}</h5>
          <p className="card-text">{`R-${tyre.radius} ${tyre.width}/${tyre.height} ${season} ${studded}`}</p>
        </div>
      </div>
      <div
        className={
          style.card__buttons +
          ' d-flex flex-column justify-content-between mt-auto'
        }
      >
        <strong>{`от ${tyre.price} тг`}</strong>
        <div className="d-flex justify-content-between">
          <Link href={`/tyres`}>
            <a className="btn btn-light btn-outline-secondary">Добавить</a>
          </Link>
          <Link href={`/tyres/${tyre.id}`}>
            <a className="btn btn-dark">Подробнее</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TyreCol;
