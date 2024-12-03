---
description: >
  The ULX admin mod for Garry’s Mod makes it easy to run commands on a specific
  (group of) players. This tutorial will teach you various ways to target users.
---
# Targeting players

- [Nickname matching](#nickname-matching)
- [Keywords](#keywords)

## Nickname matching

The most common way to target players is by their name. Nickname matching is case-insensitive. If there is no exact match, ULX will match all users with names that contain the given text.

Note that a nickname with one or more spaces must be surrounded by double quotes.

**Examples**

- Slap "sand", or all users with "sand" in their name: `ulx slap sand`
- Slap "Garry Newman": `ulx slap "garry newman"`

## Keywords

| Keyword    | Meaning                                   |
|------------|-------------------------------------------|
| `^`        | yourself                                  |
| `*`        | everyone                                  |
| `@`        | player in front of you                    |
| `$<id>`    | target by SteamID, UniqueID, UserID or IP |
| `#<group>` | target by group                           |
| `%<group>` | target by group (inheritance counts)      |

Precede a keyword with `!` to negate it.

Multiple keywords can be combined with the `,` operator, which works as a [set union](https://en.wikipedia.org/wiki/Union_set_theory).

**Examples**

- Slap yourself: `ulx slap ^`
- Slap everyone: `ulx slap *`
- Slap everyone except yourself: `ulx slap !^`
- Slap person in front of you: `ulx slap @`
- Slap players in the admin usergroup: `ulx slap #admin`
