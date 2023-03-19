const spawn = require('child_process').spawn;
const uploadFile = async (req, res) => {
  const { id, passwd } = req.body;
  console.log(req.file);
  const net = await spawn('python3', [
    process.cwd() + '/src/service/upload.py',
    'upload/file_1679172660275.csv',
  ]);

  //파이썬 파일 수행 결과를 받아온다
  net.stdout.on(
    'data',
    await function (data) {
      console.log(data.toString());
      return res.status(200).json({ message: '200' });
    }
  );
  net.stderr.on(
    'close',
    await function (data) {
      console.log(data.toString());
      return res.status(200).json({ message: data.toString() });
    }
  );
};

module.exports = { uploadFile };
