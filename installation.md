---
description: >
  Installing the ULX admin mod for Garry’s Mod for the first time? This tutorial
  will give you step-by-step instructions on how to set up ULX on your server.
---
# Installation

- [Listen server](#listen-server)
- [Dedicated server](#dedicated-server)
- [Classic method](#classic-method)

> **Note:** The installation instructions will also instruct you to download ULib because ULX depends on its functionality. It won't work without it.

## Listen server

Listen servers are local servers that you can create from within the Garry's Mod game client. They are ideal when you want to play with a small group of friends.

1. Subscribe to ["ULib" on the Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=557962238) by clicking the green "Subscribe" button.
2. Subscribe to ["ULX" on the Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=557962280) by clicking the green "Subscribe" button.
3. Restart your Garry's Mod game client and wait for the addons to download.

Test your fresh installation of ULX by creating a new listen server and typing `!xgui` in chat. This command should open a menu that allows you to access commands and settings.

## Dedicated server

Dedicated servers are intended for advanced users that want to open their server up to the public.

1. Create a Steam Workshop Collection and add it to your server. See ["Workshop for Dedicated Servers" on the Garry's Mod wiki](https://wiki.facepunch.com/gmod/Workshop_for_Dedicated_Servers) for details on how to do this.
2. Add ["ULib" on the Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=557962238) to your Steam Workshop Collection by clicking the "Add to Collection" button.
3. Add ["ULX" on the Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=557962280) to your Steam Workshop Collection by clicking the "Add to Collection" button.
4. Restart your Garry's Mod dedicated server.

Test your fresh installation of ULX by joining your server and typing `!thetime` in chat. This ULX command should display the current server time in your chat window.

## Classic method

It's possible to install ULX without the Steam Workshop. Keep in mind that installing ULX as a legacy addon means that you will have to perform all updates manually. ULX will automatically notify admins if a new version is available when they join the server.

1. Download the latest downloadable ULib and ULX release from the [Ulyssesmod Downloads page](https://ulyssesmod.net/downloads.php). Look for the two links that end in `.zip`.
2. Extract the archives in your `addons` folder. The folder structure should look like this:
  - `<garrysmod>/addons/ulib/ulib.build`
  - `<garrysmod>/addons/ulx/ulx.build`
3. Restart your Garry's Mod game client or dedicated server.

Test your fresh installation of ULX by joining your server and typing `!thetime` in chat. This ULX command should display the current server time in your chat window.
