// code by xtsea 

const { Telegraf } = require('telegraf');
const openai = require('openai');

openai.api_key = "your_api_key";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome to my bot! Send me a message and I will use the OpenAI API to generate a response.'));

bot.on('message', (ctx) => {
  openai.Completion.create({
    model: "text-davinci-003",
    prompt: ctx.message.text,
    temperature: 0,
    max_tokens: 1000
  }, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      ctx.reply(response.choices[0].text);
    }
  });
});

bot.launch();
