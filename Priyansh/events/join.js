module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "uzairrajput",
  description: "Notify bots or people entering the group",
  dependencies: {
    "fs-extra": ""
  }
};
module.exports.run = async function({ api, event }) {
  const request = require("request");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const { threadID } = event;
  const { createReadStream, existsSync, mkdirSync, readdirSync, writeFileSync } = global.nodemodule["fs-extra"];
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`» ${global.config.PREFIX} « ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage(`TEST`, threadID);
  }
  else {
    try {
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);

       let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};

      var mentions = [], nameArray = [], memLength = [], i = 0;

     let pathAvata = __dirname + `/cache/avt.png`;
      let linkava = (await axios.get(`https://graph.facebook.com/${userID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
        fs.writeFileSync(pathAvata, Buffer.from(linkava, 'utf-8'));

api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);

    // var linkava = ["https://cdn.memes.com/profilepics/30298861578303839/imageThumb/1600711525_thumb.jpg"];
    //var josh = [`https://api.popcat.xyz/welcomecard?background=https://c4.wallpaperflare.com/wallpaper/324/225/187/deku-izuku-midoriya-boku-no-hero-academia-green-eyes-green-hair-hd-wallpaper-preview.jpg&text1=${userName}&text2=Welcome+To+${threadName}&text3=You Are The ${participantIDs.length}th Member&avatar=${linkava}`,`https://api-saikidesu-beta.herokuapp.com/api/canvas/welcome?pp=${userID}&nama=${userName}&bg=https%3A%2F%2Fi.ibb.co%2FpfvyGZd%2FDark-Red-Anime-Wallpapers-Top-Free-Dark-Red-Anime.jpg&namagc=${threadName}&member=${participantIDs.length}&apikey=test1234`];
    //var joshua = josh[Math.floor(Math.random() * josh.length)];
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  

  //		var nunu = event.logMessageData.addedParticipants[userID].fullName

        nameArray.push(userName);
        mentions.push({ tag: userName, id: userID, fromIndex: 0 });

        memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "Welcome ... TÉST" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{uName}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);			


let callback = function () {
   return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/cache/come.jpg`), mentions
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/come.jpg`));

                };
                request(encodeURI(`https://api.popcat.xyz/welcomecard?background=https://c4.wallpaperflare.com/wallpaper/324/225/187/deku-izuku-midoriya-boku-no-hero-academia-green-eyes-green-hair-hd-wallpaper-preview.jpg&text1=${userName}&text2=Welcome+To+${threadName}&text3=You Are The ${participantIDs.length}th Member&avatar=${pathAvata}`)).pipe(fs.createWriteStream(__dirname + `/cache/come.jpg`)).on("close", callback);

            }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
  }
     }
