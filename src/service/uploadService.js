const spawn = require('child_process').spawn;
const uploadFile = async (req, res) => {
  console.log(req.file);
  const net = await spawn('python3', [
    process.cwd() + '/src/service/app.py',
    req.file.path,
  ]);

  const email = await spawn('python3', [
    process.cwd() + '/src/service/sendEmail.py',
  ]);

  //파이썬 파일 수행 결과를 받아온다
  net.stdout.on(
    'data',
    await function (data) {
      console.log(data.toString());
    }
  );
  net.stderr.on(
    'data',
    await function (data) {
      console.log(data.toString());
    }
  );
  email.stdin.setEncoding('utf-8');
  email.stdin.write('TEST hello!!' + '\r\n');
  email.stdin.end();

  return res.status(200).json({ message: '200' });
};

module.exports = { uploadFile };
