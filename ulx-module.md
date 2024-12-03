---
description: >
  The ULX admin mod for Garry’s Mod can be extended by developers to provide
  users with more convenient ways to operate ULX.
---
# ULX module

- [Getting started](#getting-started)
- [Creating a command](#creating-a-command)
- [Fancy logging](#fancy-logging)

## Getting started

To get started, create a new addon for your custom ULX module. Avoid <span class="uppercase">uppercase</span> letters in folder names, or your addon may fail to load on [Unix systems](https://en.wikipedia.org/wiki/Unix).

### Loading custom scripts

ULX can be extended by placing scripts inside `lua/ulx/modules/`. This folder is similar to `lua/autorun/`, except that all scripts in this folder load after ULX is initialized.

#### Example addon folder structure

```sh
your-addon
└── lua
    └── ulx
        └── modules # server
            ├── cl  # client
            └── sh  # shared
```

## Creating a command

Lua scripts that contain new ULX commands should be placed in the `<your-addon>/lua/ulx/modules/sh/` directory.

New commands are created with a call to `ulx.command()`. This function takes up to eight arguments:

1. **required** *string* category  
   The category that the command belongs to (e.g., `"Fun"`).
2. **required** *string* command  
   The console command (e.g., `"ulx kick"`).
3. **required** *function* fn  
   The server-side callback function to execute when running the command. The callback receives the `calling_ply` plus any additional params specified with `:addParam()`.
3. *string*|*table* say_cmd  
   Specify a say command or commands (as a table) to be tied in (e.g., `"!kick"`).
4. *boolean* hide_say - (Defaults to `false`)  
   Hide the chat when the say command is used?
5. *boolean* nospace - (Defaults to `false`)  
   Is a space between the chat command and arguments required?
6. *boolean* unsafe - (Defaults to `false`)  
   Flag for ULib.execString, which disallows execution from untrusted config.

Returned by `ulx.command()` is an object derived from the <code><a href="https://ulyssesmod.net/docs/files/lua/ulib/shared/commands-lua.html">ULib.cmds.TranslateCommand</a></code> class. Additionally, ULX adds the `:help()` method which takes a help text as an argument.

In order to see how this all fits together, take a look at this "heal" command:

```lua
-- lua/ulx/modules/sh/heal.lua
function ulx.heal( calling_ply, target_plys )
    for i=1, #target_plys do
        local v = target_plys[ i ]
        v:SetHealth( v:GetMaxHealth() )
    end
    ulx.fancyLogAdmin( calling_ply, "#A healed #T", target_plys )
end
local heal = ulx.command( "Fun", "ulx heal", ulx.heal, "!heal" )
heal:addParam{ type=ULib.cmds.PlayersArg }
heal:defaultAccess( ULib.ACCESS_ADMIN )
heal:help( "Heals target(s)." )
```

**Line 2:**
- Creates a new callback function that executes when the command is run.
- Callbacks for ULX commands are generally stored in the `ulx` table.
- The first parameter - the Player running the command - is automatically added by ULX.
- The second parameter - a table of Players to target - was added with a call to `:addParam()` (line 10).

**Line 7:**
- Logs and prints the action.
- Appearance and behavior may be influenced by [ULX log settings](https://github.com/TeamUlysses/ulx/blob/afca346273a12c8267227b843bee646e5ec947ed/lua/ulx/data.lua#L103-L123).
- For an in-depth description of this function, see "[Fancy logging](#fancy-logging)".

**Line 9:**
- Instantiates the ULX command.

**Line 10:**
- Adds a parameter of type <code><a href="https://ulyssesmod.net/docs/files/lua/ulib/shared/commands-lua.html#cmds.PlayersArg">ULib.cmds.PlayersArg</a></code> to the command.
- No parenthesis required when a function only takes a table [literal](https://en.wikipedia.org/wiki/Literal_(computer_programming)).
- [List of all argument types](https://ulyssesmod.net/docs/files/lua/ulib/shared/commands-lua.html).

**Line 11:**
- Default access is set the first time a command is seen on a server.
- [List of all default groups](https://github.com/TeamUlysses/ulib/blob/c44d23fd82e394982eb361516140757f2fabcc54/lua/ulib/shared/defines.lua#L13-L18).

**Line 12:**
- Sets the help text for this command as it will appear in `ulx help`.

Need more examples? Take a look at the source code of the [ULX command modules](https://github.com/TeamUlysses/ulx/tree/master/lua/ulx/modules/sh).

## Fancy logging

The `ulx.fancyLogAdmin()` function logs and prints user actions. Appearance and behavior may be influenced by [ULX log settings](https://github.com/TeamUlysses/ulx/blob/afca346273a12c8267227b843bee646e5ec947ed/lua/ulx/data.lua#L103-L123).

### Custom options

| Option | Meaning           |
|--------|-------------------|
| `#A`   | Admin Player      |
| `#T`   | Target Player(s)  |

### Default mode

Default mode shows the action to everyone on the server.

```lua
ulx.fancyLogAdmin( Player calling_ply, string format, vararg format_params )
```

### Hidden mode

Hidden mode shows the action to `calling_ply` and users with access to `ulx hiddenecho`.

```lua
ulx.fancyLogAdmin( Player calling_ply, bool hide_echo, string format, vararg format_params )
```

### Player-specific mode

Player-specific mode shows the action to all specified players (bypasses `ulx logEcho` setting).

```lua
ulx.fancyLogAdmin( Player calling_ply, table receiving_plys, string format, vararg format_params )
```
