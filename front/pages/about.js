import MainLayout from '../components/MainLayout/MainLayout';
import style from '../styles/about.module.css';

export default function About() {
  return (
    <>
      <MainLayout title="О Компании">
        <div className={style.about__main + ' d-flex align-self-center'}>
          <div className="container  d-flex  flex-column align-self-center">
            <h1 className={style.about__title + ' align-middle'}>О Компании</h1>
            <span className="text-info">
              В нашем интернет-магазине шин вы не встретите подделок. Мы торгуем
              только фирменным товаром, закупая его только у официальных
              дилеров.
            </span>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-lg-4 col-sm-6">
              <h3>Наше видение</h3>
              <span>
                Быть в десятке лучших мировых компаний. . Lorem ipsum dolor sit
                amet, conctetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </span>
            </div>
            <div className="col-lg-4 col-sm-6">
              <h3>Наша миссия</h3>
              <span>
                Помочь покупателю быстро и удобно найти самое выгодное
                предложение. . Lorem ipsum dolor sit amet, conctetur adipiscing
                elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                dapibus leo.
              </span>
            </div>
            <div className="col-lg-4 col-sm-12">
              <h3>Наши цели</h3>
              <span>
                Все, что мы делаем, вдохновлено нашей миссией, ценностями и
                видением. так разрабатывают стратегические цели. Постоянно
                повышать качество обслуживания. Реализовать самую быструю
                доставку шин и максимально дешевой
              </span>
            </div>
          </div>

          <div className={style.about__hidden}>
            <div className={style.about__slogan}>
              <figure className="text-end">
                <blockquote className="blockquote">
                  <p>Правильная шина меняет все</p>
                </blockquote>
                <figcaption className="blockquote-footer">Michelin</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
