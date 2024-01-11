const mongoose = require('mongoose');
const router = require('./router/index')
const { Telegraf } = require('telegraf');
require('dotenv').config();

mongoose.connect(process.env.DB_URL);

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Здарова, есть че?'));
bot.launch();

bot.command('mast', async (ctx) => 
    ctx.reply(await router.hi(ctx.from.id, ctx.from.username,
        ctx.from.first_name, ctx.from.last_name)))

bot.command('hi', async (ctx) => ctx.reply(await router.test(ctx)))

// bot.on('message', (ctx) => {
//     console.log(ctx.message);
// })

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));