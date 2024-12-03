---
description: >
  Sometimes an issue may arise that warrants a factory reset of the ULX admin
  mod for Garry’s Mod. This step-by-step guide will walk you through the
  process.
---
# Reset to defaults

- [ULX reset command](#ulx-reset-command)
- [Manual reset](#manual-reset)

## ULX reset command

ULX comes with a command that lets you reset all ULX and ULib configuration, including bans, groups, and accesses.

> **Note:** This command omits some configs. See [issue #132](https://github.com/TeamUlysses/ulx/issues/132) on the issue tracker for details.

1. Run `ulx resettodefaults` from the server console.
1. Confirm your intent by running `ulx resettodefaults FORCE` from the server console.
1. [Change levels](https://developer.valvesoftware.com/wiki/Changelevel) or restart the server to complete the process.

## Manual reset

Alternatively, you can manually erase all relevant data from the server.

1. DarkRP FAdmin users: remove all FAdmin groups and privileges by running `lua_run sql.Query "DROP TABLE FADMIN_GROUPS; DROP TABLE FADMIN_PRIVILEGES"` from the server console.
1. Remove all ban data by running `lua_run sql.Query "DROP TABLE ulib_bans"` from the server console.
1. Shut down your server.
1. Delete file: `<garrysmod>/cfg/banned_user.cfg` (if it exists*)
1. Delete folders: `<garrysmod>/data/ulib` and `<garrysmod>/data/ulx`
1. Restart your server.

\*`banned_user.cfg` was used to store permanent bans by ULib v2.63 and older.
