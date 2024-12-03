---
description: >
  The ULX admin mod for Garry’s Mod stores its data in various locations. This
  tutorial will give you step-by-step instructions on how to make and restore
  backups.
---
# Backup and restore

- [Backup](#backup)
- [Restore](#restore)

## Backup

An unmodified version of ULX stores its data in `data/ulx`. ULX also relies on data from ULib, which is stored in `data/ulib` and the `ulib_bans` table in `sv.db`.

1. Shut down your server.
2. Make a copy of the following files and directories in a safe location:
  - `<garrysmod>/data/ulx`
  - `<garrysmod>/data/ulib`
  - `<garrysmod>/sv.db`

## Restore

1. Shut down your server
2. Put backed up files and directories back in their original location.
3. Restart your server.
