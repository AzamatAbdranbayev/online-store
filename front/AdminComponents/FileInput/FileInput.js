import { useRef, useState } from 'react';

const FileInput = ({ name, label, onChange }) => {
  const inputRef = useRef();
  const [fileName, setFileName] = useState('');

  console.log('fileName : ', fileName);
  const handleFileChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files[0]) setFileName(e.target.files[0].name);
    else setFileName('');
    onChange(e);
  };

  const activeInput = () => {
    inputRef.current.click();
  };
  return (
    <>
      <div className="w-50 mb-5">
        <div className="row">
          <div className="col">
            <input
              type="file"
              name={name}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              ref={inputRef}
            />
            <textarea
              readOnly
              label={label}
              value={fileName}
              onClick={activeInput}
            />
          </div>
          <div className="col">
            <button
              type="button"
              onClick={activeInput}
              className="btn btn-outline-primary"
            >
              Загрузить Фото
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileInput;
