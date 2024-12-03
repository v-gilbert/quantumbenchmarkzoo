---
description: >
  The ULX admin mod for Garry’s Mod allows for a high level of customization.
  This page covers prominent settings that are not customizable through XGUI.
---
# Configuration

- [Introduction](#introduction)
- [Downloads](#downloads)
- [Per-gamemode or per-map configuration](#per-gamemode-or-per-map-configuration)

## Introduction

ULX allows for a high level of customization. Most settings can be changed from XGUI by typing `!xgui settings` in chat.

Settings that are not customizable in XGUI are covered on this page.

## Downloads

| File    | `<garrysmod>/data/ulx/downloads.txt`                |
| Format  | Flat-file database                                  |
| Purpose | Files and directories that clients should download. |

Forced downloads allow you to specify paths to files and directories that should be downloaded by the client.

Example contents:
```
; Lines that start with ; are considered comments
; Add file cheeseman.mp3 under the sound folder:
sound/cheeseman.mp3
; Add all files within the my_music folder inside the sound folder:
sound/my_music
```

## Per-gamemode or per-map configuration

ULX can load different configurations depending on the current gamemode or map.

Create files using the following folder structure:
- `<garrysmod>/data/ulx/maps/<mapname>/config.txt`
- `<garrysmod>/data/ulx/gamemodes/<gamemodename>/config.txt`

This feature is compatible with all ULX configuration files (`config.txt`, `downloads.txt`, `gimps.txt`, `adverts.txt`, `votemaps.txt`, `banreasons.txt`, `motd.txt` and `banmessage.txt`).

All configurations add to each other except gimps and votemaps, which takes the most specific configuration only.
