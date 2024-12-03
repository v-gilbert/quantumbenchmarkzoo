---
description: >
  Using the ULX admin mod for Garry’s Mod for the first time? This tutorial will
  walk you through the basics: make yourself admin, bind XGUI to a key, ...
---
# Getting started

- [Make yourself superadmin](#make-yourself-superadmin)
- [Binding XGUI to a key](#binding-xgui-to-a-key)
- [Pitfalls](#pitfalls)

## Make yourself superadmin

> **Running a listen server?** Skip this part. You should already have superadmin access.

The superadmin usergroup is considered the highest usergroup by Garry's Mod. Users in the superadmin usergroup have full access to ULX.

1. Join your Garry's Mod dedicated server.
2. Open your dedicated server console and run `ulx adduser "<NICKNAME>" superadmin` where `<NICKNAME>` is the name of the user you want to promote (e.g.: `ulx adduser "Garry" superadmin`).

You should now be able to use all privileged features ULX has to offer. Typing `!rcon say test` should display a chat message from Console with the contents "test".

Didn't work? See "[How do I make myself admin?](https://forums.ulyssesmod.net/index.php?topic=5766.0)" on the Ulysses forums for more detailed instructions and alternative methods.

## Binding XGUI to a key

You can bind XGUI (ULX menu) to a key and make it available at the press off a button.

1. Start Garry's Mod.
2. Enable the *Developer Console* by going to Options > Keyboard > Advanced > Enable Developers Console.
3. Press *Apply*.
4. Press the <kbd>~</kbd> key on your keyboard.
5. Type `bind <KEY> xgui` where `<KEY>` is the key you want to bind (e.g.: `bind m xgui`).
6. Close out of the console by clicking the close button in the upper right corner.

You should now be able to open the ULX menu with the press of a key.

## Pitfalls

- [Why having an owner group is useless and stupid](https://forums.ulyssesmod.net/index.php?topic=6291.0)
- ["ulx banid" does not respect can_target](https://github.com/TeamUlysses/ulx/issues/103)
