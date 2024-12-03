---
---
# ULX commands

A list of all the default ULX commands.

Not all usergroups have access to the same commands. Run `ulx help` to see the commands that are available to you.

## Fun

- ulx armor \<players> \<armor: 0\<=x\<=255> - Sets the armor for target(s). (say: !armor)
- ulx blind \<players> [\<amount: 0\<=x\<=255, default 255>] - Blinds target(s). (say: !blind) (opposite: ulx unblind)
- ulx cloak [\<players, defaults to self>] [\<amount: 0\<=x\<=255, default 255>] - Cloaks target(s). (say: !cloak) (opposite: ulx uncloak)
- ulx freeze \<players> - Freezes target(s). (say: !freeze) (opposite: ulx unfreeze)
- ulx god [\<players, defaults to self>] - Grants god mode to target(s). (say: !god) (opposite: ulx ungod)
- ulx hp \<players> \<hp: 1\<=x\<=2147483647> - Sets the hp for target(s). (say: !hp)
- ulx ignite \<players> [\<seconds: 1\<=x\<=300, default 300>] - Ignites target(s). (say: !ignite) (opposite: ulx unignite)
- ulx jail \<players> [\<seconds, 0 is forever: 0\<=x, default 0>] - Jails target(s). (say: !jail) (opposite: ulx unjail)
- ulx jailtp \<player> [\<seconds, 0 is forever: 0\<=x, default 0>] - Teleports, then jails target(s). (say: !jailtp)
- ulx maul \<players> - Maul target(s). (say: !maul)
- ulx playsound \<sound> - Plays a sound (relative to sound dir).
- ulx ragdoll \<players> - Ragdolls target(s). (say: !ragdoll) (opposite: ulx unragdoll)
- ulx slap \<players> [\<damage: 0\<=x, default 0>] - Slaps target(s) with given damage. (say: !slap)
- ulx slay \<players> - Slays target(s). (say: !slay)
- ulx sslay \<players> - Silently slays target(s). (say: !sslay)
- ulx strip \<players> - Strip weapons from target(s). (say: !strip)
- ulx unigniteall - Extinguishes all players and all entities. (say: !unigniteall)
- ulx whip \<players> [\<times: 2\<=x\<=100, default 10>] [\<damage: 0\<=x, default 0>] - Slaps target(s) x times with given damage each time. (say: !whip)

## Rcon

- ulx cexec \<players> {command} - Run a command on console of target(s). (say: !cexec)
- ulx ent \<classname> [{\<flag> : \<value> |}] - Spawn an ent, separate flag and value with ':', flag:value pairs with '|'.
- ulx exec \<file> - Execute a file from the cfg directory on the server.
- ulx luarun {command} - Executes lua in server console. (Use '=' for output)
- ulx rcon {command} - Execute command on server console. (say: !rcon)

## User Management
- ulx addgroup \<group> [\<inherits from>] - Create a new group with optional inheritance.
- ulx adduser \<player> \<group> - Add a user to specified group.
- ulx adduserid \<SteamID, IP, or UniqueID> \<group> - Add a user by ID to specified group.
- ulx groupallow \<group> \<command> [\<access tag>] - Add to a group's access.
- ulx groupdeny \<group> \<command> - Remove from a group's access.
- ulx removegroup \<group> - Removes a group. USE WITH CAUTION.
- ulx removeuser \<player> - Permanently removes a user's access.
- ulx removeuserid \<SteamID, IP, or UniqueID> - Permanently removes a user's access by ID.
- ulx renamegroup \<current group> \<new group> - Renames a group.
- ulx setgroupcantarget \<group> [\<target string>] - Sets what a group is allowed to target
- ulx userallow \<player> \<command> [\<access tag>] - Add to a user's access.
- ulx userallowid \<SteamID, IP, or UniqueID> \<command> [\<access tag>] - Add to a user's access.
- ulx userdeny \<player> \<command> [\<remove explicit allow or deny instead of outright denying: 0/1>] - Remove from a user's access.
- ulx userdenyid \<SteamID, IP, or UniqueID> \<command> [\<remove explicit allow or deny instead of outright denying: 0/1>] - Remove from a user's access.
- ulx usermanagementhelp - See the user management help.

## Utility

- ulx ban \<player> [\<minutes, 0 for perma: 0\<=x, default 0>] [{reason}] - Bans target. (say: !ban)
- ulx banid \<steamid> [\<minutes, 0 for perma: 0\<=x, default 0>] [{reason}] - Bans steamid.
- ulx debuginfo - Dump some debug information.
- ulx help - Shows this help.
- ulx kick \<player> [{reason}] - Kicks target. (say: !kick)
- ulx map \<map> [\<gamemode>] - Changes map and gamemode. (say: !map)
- ulx noclip [\<players, defaults to self>] - Toggles noclip on target(s). (say: !noclip)
- ulx resettodefaults [\<string>] - Resets ALL ULX and ULib configuration!
- ulx spectate \<player> - Spectate target. (say: !spectate)
- ulx unban \<steamid> - Unbans steamid.
- ulx version - See version information. (say: !version)
- ulx who [\<steamid>] - See information about currently online users.

## Chat

- ulx asay {message} - Send a message to currently connected admins. (say: @)
- ulx csay {message} - Send a message to everyone in the middle of their screen. (say: @@@)
- ulx gag \<players> - Gag target(s), disables microphone. (say: !gag) (opposite: ulx ungag)
- ulx gimp \<players> - Gimps target(s) so they are unable to chat normally. (say: !gimp) (opposite: ulx ungimp)
- ulx mute \<players> - Mutes target(s) so they are unable to chat. (say: !mute) (opposite: ulx unmute)
- ulx psay \<player> {message} - Send a private message to target. (say: !p)
- ulx thetime - Shows you the server time. (say: !thetime)
- ulx tsay {message} - Send a message to everyone in the chat box. (say: @@)

## Voting
- ulx stopvote - Stops a vote in progress. (say: !stopvote)
- ulx veto - Veto a successful votemap. (say: !veto)
- ulx vote \<title> {options} - Starts a public vote. (say: !vote)
- ulx voteban \<player> [\<minutes: 0\<=x, default 1440>] [{reason}] - Starts a public ban vote against target. (say: !voteban)
- ulx votekick \<player> [{reason}] - Starts a public kick vote against target. (say: !votekick)
- ulx votemap [{map}] - Vote for a map, no args lists available maps. (say: !votemap)
- ulx votemap2 {map} - Starts a public map vote. (say: !votemap2)

## Teleport
- ulx bring \<players> - Brings target(s) to you. (say: !bring)
- ulx goto \<player> - Goto target. (say: !goto)
- ulx return [\<player, defaults to self>] - Returns target to last position before a teleport. (say: !return)
- ulx send \<player> \<player> - Goto target. (say: !send)
- ulx teleport [\<player, defaults to self>] - Teleports target. (say: !tp)

## Menus
- ulx motd - Show the message of the day. (say: !motd)
- xgui \<show, hide, toggle> - Opens and/or closes XGUI. (say: !xgui, !menu) (alias: ulx menu)
- xgui fban \<player> - Opens the add ban window, freezes the specified player, and fills out the Name/SteamID automatically. (say: !fban)
- xgui xban \<player> - Opens the add ban window and fills out Name/SteamID automatically if a player was specified. (say: !xban)
