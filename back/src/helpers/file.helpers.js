const fs = require('fs');

const fileHelpers = {
  saveFile(file, type, name) {
    const fileName = `public/uploads/${type}/${name}`;
    file.mv(fileName, (err) => {
      if (err) throw err;
      console.log('File uploaded');
    });
  },
  deletefile(path) {
    fs.unlink(path, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('removed');
    });
  },
};

module.exports = fileHelpers;
