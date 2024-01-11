const userService = require('../service/user-service');
require ('../log')

class BotRouter{
    async hi(id ,userName, firstName, lastName) {
        try{
            log("Command /mast")
            await userService.addNewUser(id ,userName, firstName, lastName);
            const answer = await userService.getUserMast(id)
            return answer;
        }catch(err){
            log(err.message);
            return('@' + userName + ", 6лять еблан, ты всё сломал, ошибОчка!")
        }
    }

    async test(ctx){
        console.log(ctx.from)
        return ("Здарова, есть че?")
    }
}

module.exports = new BotRouter();