import Image from 'next/image';
import service from '../../public/main.page/icon.service.svg';
import delivery from '../../public/main.page/delivery.svg';
import expert from '../../public/main.page/expert.svg';
import hammer from '../../public/main.page/hammer.svg';
import Carousel from '../Carousel/Carousel';

const IndicatorsIndex = () => {
  return (
    <>
      <div className="p-5" style={{ background: '#f3f3f3' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex align-items-center ">
              <Carousel />
            </div>
            <div className="col-sm-6">
              <div className="row row-cols-2">
                <div className="col-lg-6   mb-5">
                  <div className="row">
                    <div className="col-md-2">
                      <Image
                        src={service}
                        width={30}
                        height={30}
                        alt="service"
                      />
                    </div>
                    <div className="col-6 col-md-10">
                      <h5>Современное состояние монтажа</h5>
                    </div>
                  </div>
                  <span>
                    Независимо от вашего бюджета и размера автомобиля, который
                    вы ищете, мы уверены, что поможем вам найти то, что вам
                    подходит. Чтобы в полной мере оценить ассортимент
                    предлагаемых нами автомобилей, посетите один из наших
                    выставочных залов.
                  </span>
                </div>
                <div className="col-lg-6  mb-5">
                  <div className="row">
                    <div className="col-md-2">
                      <Image
                        src={delivery}
                        width={50}
                        height={40}
                        alt="service"
                      />
                    </div>
                    <div className="col-6 col-md-10">
                      <h5>Быстрая и беспроблемная доставка</h5>
                    </div>
                  </div>
                  <span>
                    Независимо от вашего бюджета и размера автомобиля, который
                    вы ищете, мы уверены, что поможем вам найти то, что вам
                    подходит. Чтобы в полной мере оценить ассортимент
                    предлагаемых нами автомобилей, посетите один из наших
                    выставочных залов.
                  </span>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="row">
                    <div className="col-md-2">
                      <Image
                        src={hammer}
                        width={50}
                        height={40}
                        alt="service"
                      />
                    </div>
                    <div className="col-6 col-md-10">
                      <h5>100% гарантированная установка</h5>
                    </div>
                  </div>
                  <span>
                    Независимо от вашего бюджета и размера автомобиля, который
                    вы ищете, мы уверены, что поможем вам найти то, что вам
                    подходит. Чтобы в полной мере оценить ассортимент
                    предлагаемых нами автомобилей, посетите один из наших
                    выставочных залов.
                  </span>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="row">
                    <div className="col-md-2">
                      <Image
                        src={expert}
                        width={50}
                        height={40}
                        alt="service"
                      />
                    </div>
                    <div className="col-6 col-md-10">
                      <h5>Мы эксперты по шинам</h5>
                    </div>
                  </div>
                  <span>
                    Независимо от вашего бюджета и размера автомобиля, который
                    вы ищете, мы уверены, что поможем вам найти то, что вам
                    подходит. Чтобы в полной мере оценить ассортимент
                    предлагаемых нами автомобилей, посетите один из наших
                    выставочных залов.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndicatorsIndex;
