const ModalError = ({ text, close, status }) => {
  return (
    <>
      <div className="modalError__container">
        <div className="modalError__window">
          <button
            type="button"
            className="btn-close modalError__button"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={close}
          ></button>

          <div className="modalError__text">
            <h4>{text}</h4>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .modalError__container {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: black;
            background: rgba(0, 0, 0, 0.5);
          }
          .modalError__window {
            border-radius: 10px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 50%;
            right: 50%;
            height: 300px;
            transform: translate(50%, -50%);
            background: #fff;
            color: #000;
            opacity: 1;
          }
          .modalError__button {
            align-self: flex-end;
          }
          .modalError__text {
            margin-top: auto;
            margin-bottom: auto;
            align-self: center;
          }
        `}
      </style>
    </>
  );
};

export default ModalError;
