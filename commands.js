const args = message.content.slice(prefix.length).trim().split(/ +/g); const command = args.shift().toLowerCase(); 

if(command === 'cookie') {

    let user = message.mentions.users.first();
    let reason = args.slice(1).join(" ") ||  "Nothing";

    if(!user) {
        return message.channel.send('Select a user.');
    }
    
    console.log(reason)

    message.channel.send('**'+ user.username +',** you got a 🍪 from **'+message.author.username+'**\n\n**Because:** '+reason+'\n(づ｡◕‿‿◕｡)づ:･ﾟ✧ 🍪'); 
 }
