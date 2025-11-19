 
  <img src="https://skillicons.dev/icons?i=discord">
  
   ## Discord Web presence RCP 

---

## Setup Instructions

1. Install Node.js + NVM
2. Install server dependencies, ```cd path/to/discord-rcp/fodler``` , ```npm install```.
3. Go to https://discord.com/developers/applications and make a Discord app and get it's App id, use the App id in ```server.js```.
4. Start a node js server with ```node server.js``` command in the discord-rcp folder .
5. Load the ```manifest.json``` as a temporary add-on in firefox with ```about:debugging#/runtime/this-firefox```. make sure you open discord.
6. Change tabs on FireFox and your discord activity will update automatically

## Discord Application Setup (Required)

1. go to https://discord.com/developers/applications
2. Select the app you made for the extension
3. Go to Rich presence section then Art Assest section
4. Upload icons and name them EXACTLY: 
```
spotify
youtube
chatgpt
monkeytype
github
reddit
x
google
soundcloud
discord
twitch
pinterest
gitlab
stackoverflow
devto
roblox
epicgames
canva
steam
```
5. You can add/remove the websites icons yourslef, make sure to upload the server.js accordingly,
6. Make sure to not use **capital letters, numbers, special character, extensions like .png/.jpg,** when naming icon in discord developer's portal
7. make sure the Icon names in Discord matches with ```largeImageKey``` in server.js.

##    
---
