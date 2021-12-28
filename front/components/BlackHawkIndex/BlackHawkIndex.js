import Image from 'next/image';
import style from '../../styles/blackHawkIndex.module.css';
import blackhawk from '../../public/blackhawk/prey.jpg';
const BlackHawkIndex = () => {
  return (
    <>
      <div className={style.blackwak__box + ' p-2'}>
        <div className="container mb-5 mt-5">
          <figure>
            <blockquote className="blockquote">
              <p> ТОО "ABN Tyres Sauda" </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Официальный дистрибьютор бренда{' '}
              <cite title="Source Title"> BLACKHAWK </cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="container mb-5 mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className={style.blackwak__wrapper + ' col '}>
            <div className={style.blackwak__opacity}>
              <h1 className={style.blackwak__text + ' fw-bold'}>Blackhawk</h1>
              <p className={style.blackwak__text}>
                Шины Blackhawk обеспечивают силу, контроль, скорость и острый,
                как бритва, захват, как сама могущественная хищная птица.
                Blackhawk позволяет водителям чувствовать себя уверенно и
                уверенно управлять любой дорогой. С шинами Blackhawk «дорога -
                твоя добыча».
              </p>
            </div>
          </div>
          <div className="col">
            <Image src={blackhawk} className="dcard-img-top" alt="service" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackHawkIndex;
