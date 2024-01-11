const UserModel = require('../DB_Models/user-model')
const MastModel = require('../DB_Models/mast-model')
const data = require("../data.json")
require('../log.js')

class UserService{

    // Добавить нового пользователя
    // return true: добавлен успешно / либо существует
    //        false: ошибка добавления
    async addNewUser(id ,userName, firstName, lastName){
        const candidate = await UserModel.findOne({id: id, userName: userName});

        if(candidate){
            // console.log(candidate)
            return
        }

        const newUser = await UserModel.create({id: id, userName: userName})
        log('Регистрация нового пользователя: ' + newUser.userName)
        
        if (!newUser){
            throw Error ("ОшибОчка :(")
        }
    }

    async getUserMast(id){
        const candidate = await UserModel.findOne({id: id});
        const candidateMast = await MastModel.findOne({user: candidate._id})

        if(!candidateMast){
            const newMast = await this.randomMast();
            const genMast = await MastModel.create({user: candidate._id, name: newMast, 
                                                    userName: candidate.userName})
            await log(candidate.userName + " получает масть  - " + genMast.name);
            return "@" + candidate.userName + ", твоя масть - " + genMast.name + "!";
        }

        var currentdate = new Date();
        
        console.log('createAt: ', candidateMast.createAt)
        console.log('currentdate: ', currentdate)

        const diffTime =  currentdate - candidateMast.createAt

        console.log('diff: ', diffTime);

        if(43200000 > diffTime){
            await log(candidate.userName + " уже имеет масть - " + candidateMast.name);
            return "@" + candidate.userName + 
                    ", ты забыл, что ты - " + candidateMast.name + '?';
        }
        
        const newMast = await this.randomMast();
        const genMast = await MastModel.replaceOne({user: candidate._id}, 
            { user: candidate._id, name: newMast, userName: candidate.userName})
        const getMast = await MastModel.findOne({user: candidate._id});
        console.log("getMast ",getMast, '\n genMast', genMast)
        await log(candidate.userName + " получает масть  - " + getMast.name);
        return "@" + candidate.userName + ", твоя масть - " + getMast.name + "!";
    }

    async randomMast(){
        const randomNumb = Math.floor(Math.random() *  data.mast.length)
        console.log("randomNumb: ", randomNumb);
        return data.mast[randomNumb];
        
    }

}

module.exports = new UserService();