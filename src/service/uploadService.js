const spawn = require('child_process').spawn;
const uploadFile = async (req, res) => {
  console.log(req.file);
  const net = await spawn('python3', [
    process.cwd() + '/src/service/app.py',
    req.file.path,
  ]);

  //파이썬 파일 수행 결과를 받아온다
  await net.stdout.on(
    'data',
    await function (data) {
      console.log(data.toString());
      return res.status(200).json({ message: '200' });
    }
  );
};

module.exports = { uploadFile };
