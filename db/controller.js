const UserModel = require('./model')

async function createUser(chatId) {
    try {
        const user = await UserModel.create({chatId, "answers": 0, "attempts": 0})
        console.log('New User added succesfully!')
        return user
    } 
    catch(err) {
        console.log('createUser went wrong')
        return null
    }
}

async function getUser(chatId) {
    try {
        const user = await UserModel.findOne({chatId})
        if(!user) return await createUser(chatId)
        return user
    } 
    catch(err) {
        console.log('getUser went wrong')
        return null
    }
}

async function getAnswers(chatId) {
    try {
        if(!getUser(chatId)) await createUser(chatId)
        const user = await UserModel.findOne({chatId})
        return user.answers
    } 
    catch(err) {
        console.log('getAnswers went wrong')
        return null
    }
}

async function setLevel(chatId, level) {
    try {
        if(!getUser(chatId)) await createUser(chatId)
        const user = await UserModel.findOne({chatId})
        user.level = level
        await user.save()
    } 
    catch(err) {
        console.log('setLevel went wrong')
    }
}

async function addAnswer(chatId) {
    try {
        if(!getUser(chatId)) await createUser(chatId)
        const user = await UserModel.findOne({chatId})
        user.attempts++
        user.answers++
        await user.save()
    } 
    catch(err) {
        console.log('addAnswers went wrong')
    }
}

async function addAttempt(chatId) {
    try {
        if(!getUser(chatId)) await createUser(chatId)
        const user = await UserModel.findOne({chatId})
        user.attempts++
        await user.save()
    } 
    catch(err) {
        console.log('addAttempts went wrong')
    }
}

async function addReward(chatId) {
    try {
        if(!getUser(chatId)) await createUser(chatId)
        const user = await UserModel.findOne({chatId})
        user.rewards++
        await user.save()
    } 
    catch(err) {
        console.log('addReward went wrong')
    }
}

module.exports = {createUser, getUser, setLevel, getAnswers, addAnswer, addAttempt, addReward}