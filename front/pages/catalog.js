import MainLayout from '../components/MainLayout/MainLayout';
import DeliveryTitle from '../components/DeliveryTitle/DeliveryTitle';
import { instance } from '../assets/constants';
import TyreCol from '../components/TyreCol/TyreCol';
import FilterSort from '../components/FilterSort/FilterSort';

function Catalog({ tyres }) {
  return (
    <>
      <MainLayout title="Каталог">
        <figure className="text-center mt-5 mb-5">
          <blockquote className="blockquote">
            <p>Нет повести печальнее на свете, чем повесть о плохой резине</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Печальная повесть.
            <cite title="Source Title"> Неизвестный автор</cite>
          </figcaption>
        </figure>

        <div className="container ">
          <FilterSort />
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {tyres.map((tyre) => {
              return <TyreCol key={tyre.id} tyre={tyre} />;
            })}
          </div>
        </div>
        <DeliveryTitle />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await instance.get('/products/tyres');
    return { props: { tyres: response.data } };
  } catch (e) {
    return { props: { tyres: [] } };
  }
}
export default Catalog;
