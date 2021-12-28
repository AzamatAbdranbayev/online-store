import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { Provider, useDispatch } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/configStore';
import { useEffect, useState } from 'react';
import { fetchRefreshUser } from '../store/userStore/userActions';
import MainLoader from '../components/MainLoader/MainLoader';
import { instance } from '../assets/constants';
function MyApp({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRefreshUser());
  }, []);

  instance.interceptors.request.use(
    (request) => {
      setShowModal(true);
      return request;
    },
    (error) => {
      setShowModal(false);
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      setShowModal(false);
      return response;
    },
    (error) => {
      setShowModal(false);
      return Promise.reject(error);
    }
  );

  return (
    <Provider store={store}>
      {showModal && <MainLoader />}

      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
