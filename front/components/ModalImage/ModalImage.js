import Image from 'next/image';
import { BASE_URL } from '../../assets/constants';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ModalImage = ({ imgSrc, close }) => {
  return (
    <>
      <div className="modal__container" onClick={close}>
        <div className="modal__content">
          <Image
            src={`${BASE_URL}/uploads/tyres/${imgSrc}`}
            loader={myLoader}
            alt="tytree"
            width="350px"
            height="450px"
          />
        </div>
      </div>
      <style jsx>
        {`
          .modal__container {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: black;
            background: rgba(0, 0, 0, 0.5);
          }
          .modal__content {
            border-radius: 10px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 50%;
            right: 50%;
            // width: 50vw;
            // height: 50vh;
            transform: translate(50%, -50%);
            background: #fff;
            color: #000;
            opacity: 1;
            z-index: 100;
          }
        `}
      </style>
    </>
  );
};

export default ModalImage;
