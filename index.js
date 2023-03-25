const request= require('request');
const TelegramBot = require('node-telegram-bot-api');

const token='6215984155:AAF6BAQra6PNHQAD5wSMRvd91yzOaWcBY-0';

const bot = new TelegramBot(token,{polling:true});

bot.on('connection',function(msgs){
    bot.sendMessage('Hi welcome to my bot Enter any City Name to get Weather details there !!  ');
})

bot.on('message',function(mg){
    console.log(mg);
    request("https://api.openweathermap.org/data/2.5/weather?q="+mg.text+"&appid=4e92f38e5da9aa934017303d908c0573",function(error,response,body){
console.log(JSON.parse(body));

        
      

if(JSON.parse(body).cod!='404'){
   
          
           }
            else{
              bot.sendMessage(mg.chat.id,"place not found");
            }
        })
 
      })