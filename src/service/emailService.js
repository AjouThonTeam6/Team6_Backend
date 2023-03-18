const spawn = require('child_process').spawn;
const emailFile = async (req, res) => {
  console.log(req.file);

  const email = await spawn('python3', [
    process.cwd() + '/src/service/sendEmail.py',
  ]);

  email.stdin.setEncoding('utf-8');
  email.stdin.write('TEST hello!!' + '\r\n');
  email.stdin.end();

  return res.status(200).json({ message: '200' });
};

module.exports = { emailFile };
