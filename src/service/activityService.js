const spawn = require('child_process').spawn;
const { Configuration, OpenAIApi } = require('openai');

const activityService = async (req, res) => {
  const { topic, startdate, enddate, content, place, participants } = req.body;

  const configuration = new Configuration({
    organization: 'org-iQYwy9ItnLXsdbMy9MRABlCU',
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `활동명: ${topic},활동내용: ${content},활동기간:${startdate}~${enddate},참여인원수: ${participants}명, 활동장소:${place}로 활동 보고서 100자 이내로 작성해줘`,
      },
    ],
    temperature: 0,
  });

  return res
    .status(200)
    .json({ message: response.data.choices[0].message.content });
};

module.exports = activityService;

// const activity = await spawn('python3', [
//   process.cwd() + '/src/service/sendEmail.py',
// ]);

// activity.stdin.setEncoding('utf-8');
// activity.stdin.write('TEST' + '\r\n');
// activity.stdin.end();
