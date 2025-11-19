// server.js
const RPC = require("discord-rpc");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

// allow cross-origin requests from extension
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// health check endpoint
app.get('/', (req, res) => {
  res.send('discord-presence server running');
});

/* ------- Domain → Image mapping ------- */
function getImageKey(url) {
  if (!url) return "default";

  if (url.includes("open.spotify.com")) return "spotify";
  if (url.includes("youtube.com")) return "youtube";
  if (url.includes("chatgpt.com")) return "chatgpt";
  if (url.includes("monkeytype.com")) return "monkeytype";
  if (url.includes("github.com")) return "github";
  if (url.includes("reddit.com")) return "reddit";
  if (url.includes("twitter.com") || url.includes("x.com")) return "x";
  if (url.includes("google.com")) return "google";
  if (url.includes("soundcloud.com")) return "soundcloud";
  if (url.includes("discord.com")) return "discord";	
  if (url.includes("twitch.tv")) return "twitch";
  if (url.includes("pinterest.com")) return "pinterest";
  if (url.includes("gitlab.com")) return "gitlab";
  if (url.includes("stackoverflow.com")) return "stackoverflow";
  if (url.includes("dev.to")) return "devto";
  if (url.includes("roblox.com")) return "roblox";
  if (url.includes("epicgames.com")) return "epicgames";
  if (url.includes("canva.com")) return "canva";
  if (url.includes("store.steampowered.com")) return "steam";




  return "default";
}

function getSiteName(url) {
  if (url.includes("spotify.com")) return "On Spotify";
  if (url.includes("youtube.com")) return "On YouTube.com";
  if (url.includes("chatgpt.com")) return "On chatgpt.com";
  if (url.includes("monkeytype.com")) return "On monkeytype.com";
  if (url.includes("github.com")) return "On GitHub.com";
  if (url.includes("reddit.com")) return "On Reddit.com";
  if (url.includes("google.com")) return "On Google.com";
  if (url.includes("soundcloud.com")) return "On Soundcloud.com";
  if (url.includes("discord.com")) return "On Discord.com";	
  if (url.includes("twitch.tv")) return "On twitch.tv";
  if (url.includes("pinterest.com")) return "On Pinterest.com";
  if (url.includes("gitlab.com")) return "On gitlab.com";
  if (url.includes("stackoverflow.com")) return "On stackoverflow.com";
  if (url.includes("dev.to")) return "On dev.to";
  if (url.includes("roblox.com")) return "On roblox.com";
  if (url.includes("epicgames.com")) return " On epicgames.com";
  if (url.includes("canva.com")) return "On canva.com";
  if (url.includes("store.steampowered.com")) return "On Steam Store";
  return "On FireFox";
}


/* ------- POST /activity endpoint ------- */
app.post('/activity', (req, res) => {
  const { url, title } = req.body || {};
  console.log(`Received /activity: ${title} | ${url}`);

  const imageKey = getImageKey(url);
 const site = getSiteName(url);

  try {
    if (rpc && rpcReady) {
      rpc.setActivity({
        details: `Browsing: ${title}`,
        state: site,
        largeImageKey: imageKey,
        instance: false,
      });
    }
  } catch (err) {
    console.error('Error setting RPC activity:', err);
  }

  res.sendStatus(200);
});


const clientId = "YPUR_DISCORD_APP_ID"; //you can get the discord app id afrer creating a app in discord developer's portal at https://discord.com/developer/applications
const rpc = new RPC.Client({ transport: "ipc" });

let rpcReady = false;

rpc.on("ready", () => {
  rpcReady = true;
  console.log("Connected to Discord RPC!");
});

rpc.login({ clientId }).catch(err => {
  console.error("RPC login error:", err?.message || err);
});

/* ------- Start server ------- */
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
