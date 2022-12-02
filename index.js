const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const db = require('./db/controller')
const connect_DB = require('./db/connect')
const {getTask} = require('./tasks/level_1')

const bot = new TelegramBot(config.TG_TOKEN, {polling: true})
const currentTask = {}

connect_DB()

function sendTask(chatId) {
    const task = getTask()
    console.log(task)
    currentTask[chatId] = task.res
    return bot.sendMessage(chatId, task.exp)
}

async function upLevel(chatId, level) {
    await db.setLevel(chatId, level)
    await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/1a4/41f/1a441f85-c19e-4f87-b584-3293a3cbe78e/192/15.webp')
    return bot.sendMessage(chatId, `Поздравляю! Ты достиг уровня "${level}"`)
}

bot.setMyCommands([
    {command: '/go', description: "Получить задание"},
    {command: '/stats', description: "Посмотреть достижения"}
])

bot.on("message", async msg => {
    const text = msg.text
    const chatId = msg.chat.id
    const userName = msg.from.first_name || 'друг'

    if (text === '/start') {
        await db.createUser(chatId)
        await bot.sendSticker(chatId, 'https://cdn.tlgrm.app/stickers/c18/36e/c1836e2b-6e0a-4786-82df-7a36d924704a/192/8.webp')
        await bot.sendMessage(chatId, `Привет, ${userName}`)
        await bot.sendMessage(chatId, `Чтобы начать, используй команду /go`)
        return bot.sendMessage(chatId, `Чтобы узнать свои достижения, используй команду /stats`)
    }
    
    if (text === '/stats') {
        const user = await db.getUser(chatId)
        const message = `Выполнено заданий: ${user?.answers}\n`
            + `Получено наград: ${user?.rewards}\n`
            + `Твой уровень: ${user?.level}`
        return bot.sendMessage(chatId, message)
    }
    
    if (text === '/go') {
        return sendTask(chatId)
    }
    
    if (Number(text) || /^\d+\/\d+$/.test(text)) {
        if(!currentTask[chatId]) return bot.sendMessage(chatId, `Чтобы начать, используй команду /go`)
        
        if(text == currentTask[chatId]) {  
            await db.addAnswer(chatId)
            await bot.sendMessage(chatId, "Да! Правильно!")
            const answers = await db.getAnswers(chatId)
            if(answers % config.REWARD_RATE === 0) {
                await db.addReward(chatId)
                await bot.sendMessage(chatId, "Поздравляю! Ты получаешь награду!")
                return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/426/905/42690547-ce3e-40ee-be7b-ec9ad13d8405/4.webp') 
            }
            if(answers == config.SCHOOL_RATE) {
                return upLevel(chatId, "Школьник")  
            }
            if(answers == config.STUDENT_RATE) {
                return upLevel(chatId, "Студент")
            }
            if(answers == config.SPECIALIST_RATE) {
                return upLevel(chatId, "Специалист")
            }
            if(answers == config.MASTER_RATE) {
                return upLevel(chatId, "Магистр")
            }
            if(answers == config.PROFESSOR_RATE) {
                return upLevel(chatId, "Профессор")
            }
            return sendTask(chatId)
        }
        
        await db.addAttempt(chatId)
        return bot.sendMessage(chatId, 'Нет! Попробуй еще')    
    }
    
    return bot.sendMessage(chatId, 'Я тебя не понимаю!');
})