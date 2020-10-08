console.log("OwlBot is ready to destroy pussies!");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login("[REMOVED]");

// Last updated
bot.on("message", message => {
  if (message.author == bot.user) {
    return;
  }
  if (message.content == "€update") {
    message.channel.send(
      "> **The bot's source code was last updated on** `2020-10-04` **by** `Owly` making this **version 1.0.0**"
    );
    // message.channel.send("The bot's source code was last updated on YYYY-MM-DD by XXX");
  }
});

// Bot Activity Status
bot.on("ready", () => {
  bot.user.setStatus("available");
  bot.user.setPresence({
    game: {
      name: "My wife left me in 1995 | €help",
      type: "STREAMING",
      url: "https://www.twitch.tv/monstercat"
    }
  });

// Messages
bot.on("message", message => {
  // Prevent bot from responding to its own messages
  if (message.author == bot.user) {
    return;
  }

  // Commands

  // Check if content of message is "€ping"
  if (message.content == "€ping") {
    // Call .send() on the channel object the message was sent in
    message.channel.send("h");
  }
  if (message.content == "€help") {
    message.channel.send(
      "To find more commands/credits for the bot, check out this URL: <https://github.com/NeoZones/OwlBot_Legacy>"
    );
  }
  if (message.content == "€time") {
    message.channel.send(
      "It is time https://owlman.neocities.org/odds/its_time.png"
    );
  }
  if (message.content == "€weather") {
    message.channel.send("I hope it's raining :) I love rain");
  }
  if (message.content == "€heather") {
    message.channel.send("<:owosneaky:523048376179359744>");
  }
  	if (message.content == "€yiff") {
       bot.channels.get("518634475496931329").send("$sr yiff");
   }
   if (message.content == "€yaoi") {
       bot.channels.get("518634475496931329").send("$sr yaoi");
   }
  	if (message.content == "€pr0n") {
       bot.channels.get("518634475496931329").send("https://owlman.neocities.org/odds/awi4r4.png");
   }
  	if (message.content == "€furry") {
       bot.channels.get("518634475496931329").send("https://owlman.neocities.org/odds/party/received_381842359299468.png");
   }
  if (message.content == "€piss") {
    message.channel.send(
      "I’ve come to make an announcement, " +
        message.author.username +
        "’s a bitch ass mother fucker. They pissed on my fucking wife. That’s right, they took it little quilly dick out and they pissed on my fucking wife, and they said it dick was **THIS BIG**. And I said *“that’s disgusting!”* So I’m making a callout post on my __twitter.com__. " +
        message.author.username +
        ", you got a small dick, it’s the size of this walnut except **WAY** smaller. And guess what, here’s what my dong looks like: **PFFFFFFFFGJT**. That’s right baby. All point, no quills, no pillows, look at that it looks like two balls and a bong. They fucked my wife so guess what, I’m gonna **FUCK THE EARTH. THATS RIGHT THIS IS WHAT YOU GET,** ***__MY SUPER LAZER PISS!!__*** Except I’m not gonna piss on the earth, I’m gonna go higher. I’m pissing on the ***__MOOOOOON!!!!!!__*** How do you like that Obama? **I PISSED ON THE MOON YOU IDIOT!** You have twenty three hours before the piss droplets hit the fucking Earth! Now get out of my fucking sight before I piss on you too!"
    );
  }
  // Show all server emojis
  if (message.content === "€emojis") {
    const emojiList = message.guild.emojis.map(e => e.toString()).join(" ");
    message.channel.send(emojiList);
  }
  // Repeat what the user says
  if (message.content.startsWith("€say")) {
    message.channel.send(
      message.author.username + " says: " + message.content.replace("€say ", "")
    );
  }
  // Send a message through the bot
  if (message.content.startsWith("€send")) {
    message.delete(1);
    message.channel.send(message.content.replace("€send ", ""));
  }
  // Sin after sin
  if (message.content == "€music") {
    message.channel.send(
      "!p https://www.youtube.com/playlist?list=PLA68NtSTRIbpJkwBUpgN4aKSagBqQ7Sd8"
    );
  }
  // FFS bot
  if (message.content == "€fuck") {
    message.channel.send("Yeah, I'm working, twat");
  }
  // FFS bot
  if (
    message.content ==
    "https://tenor.com/view/milk-and-mocha-dance-dancing-music-gif-12302383"
  ) {
    message.channel.send("**YES, DANCE, DANCE!**");
  }
  // Check if the bots user was tagged in the message
  if (message.content.includes(bot.user.toString())) {
    // Send acknowledgement message
    message.channel.send(
      "Well you know what " + message.author.toString() + ", guess what?"
    );
  }
  if (
    ["what?", "piss?", "chicken butt?"].includes(message.content.toLowerCase())
  ) {
    message.channel.send("Chicken Butt");
  }

  // Colors roles Commands
  // Removed section as CyberBus now deals with this operation

  // GROUPS ROLES
  // Removed section as CyberBus now deals with this operation
  
  // SHIT OWLY WOULD SAY

  // Reply to single words
  if (message.content.toLowerCase() == "copyright") {
    message.channel.send("You mean that thing that holds back people?");
  }
  if (message.content.toLowerCase() == "h") {
    message.channel.send("I love my wife");
  }
  if (message.content.toLowerCase() == "+help") {
    message.channel.send("Shut the fuck up, RoboRandy, you wanna be OwlBot");
  }
  if (message.content.toLowerCase() == "a") {
    message.channel.send("quirky !!");
  }
  if (message.content.toLowerCase() == "i love your wife too") {
    message.channel.send("I'm so glad you're my wife's boyfriend");
  }
  if (message.content.toLowerCase() == "piss") {
    message.channel.send("Will you fuck off?");
  }
  if (message.content.toLowerCase() == "owo") {
    message.channel.send("https://owlman.neocities.org/odds/owo_fire.gif");
  }
  if (message.content.toLowerCase() == "metal") {
    message.channel.send("<:metal:605328047616294912>");
  }
  if (message.content.toLowerCase() == "<:catto:617090169400721470>") {
    message.channel.send("Stop posting that bloody cat emote");
  }
  if (message.content.toLowerCase() == ":catto:") {
    message.channel.send("Stop posting that bloody cat emote");
  }
  if (message.content.toLowerCase() == "brexit") {
    message.channel.send("Oh God...");
  }
  if (message.content.toLowerCase() == "are you a robot?") {
    message.channel.send("yeah?");
  }
  if (
    ["drunk", "beer", "alcohol", "whisky", "drinking", "wine"].includes(
      message.content.toLowerCase()
    )
  ) {
    message.channel.send("Fill her up!");
  }
  if (["minion", "minions"].includes(message.content.toLowerCase())) {
    message.channel.send("Oh dude, that is **SO EPIC**!");
  }
  if (["foot", "feet"].includes(message.content.toLowerCase())) {
    message.channel.send(
      "...If you are into that, I guess https://owlman.neocities.org/odds/myfoot.png"
    );
  }
  if (["libtard", "liberal"].includes(message.content.toLowerCase())) {
    message.channel.send(
      "https://owlman.neocities.org/odds/how_to_own_a_libtard_lol_follow_bigblonddaddy69_on_ig_for_more_epic_memes.gif"
    );
  }
  if (["owly", "cass"].includes(message.content.toLowerCase())) {
    message.channel.send(
      "https://owlman.neocities.org/odds/how_to_own_a_libtard_lol_follow_bigblonddaddy69_on_ig_for_more_epic_memes.gif"
    );
  }
  // If a user types "des" then CyberBus#9575 (bot) will respond with "pa", if you look at the code, you can work out the rest
  if (message.content.toLowerCase() == "pa") {
    message.channel.send("cito");
  }
  // Being nice and proper
  // Removed section as CyberBus now deals with this operation

  Reply to included words on messages
  if (message.content.toLowerCase().includes("tea")) {
      message.channel.send("O_O SOMEONE SAY TEA?");
  }
  if (message.content.toLowerCase().includes("doom")) {
      message.channel.send("**SOMEONE SAY DOOM???**");
  }
  if (message.content.toLowerCase().includes("rain")) {
      message.channel.send("**SOMEONE SAY RAIN????**");
  }

  // Check if the bots user was tagged in the message
  if (message.content.includes(bot.user.toString())) {
    // Send acknowledgement message
    message.channel.send(
      "Well you know what " + message.author.toString() + ", guess what?"
    );
  }
  if (
    ["what?", "piss?", "chicken butt?"].includes(message.content.toLowerCase())
  ) {
    message.channel.send("Chicken Butt");
  }
});

// Random answers from a single word
function randomMessage() {
  var randomNumber = Math.round(Math.random() * 2); // 0, 1 or 2
  switch (randomNumber) {
    case 0:
      return "I shitted";
    case 1:
      return "I cummed";
    case 2:
      return "I pissed";
  }
}
bot.on("message", message => {
  if (message.content.toLowerCase() == "oof") {
    message.channel.send(randomMessage());
  }
});