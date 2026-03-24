# Project Context

Karabiner-Elements configuration for ES-ISO keyboard layout on macOS.

- **Meh**: Caps Lock held = Ctrl+Shift+Option (symbols, window focus, workspaces, apps)
- **Hyper**: Caps Lock + Cmd = Ctrl+Shift+Option+Cmd (cursor HJKL)

## Key Files

- `es-dev-symbols.json` - Main Karabiner complex modifications config
- `~/.aerospace.toml` - AeroSpace tiling window manager config
- Astro Starlight documentation site at repo root (deployed to GitHub Pages)

## ES-ISO Layout Quirks

- Dead keys (` and ~) need spacebar after to output literal character
- ñ key = "semicolon" in Karabiner
- Many symbols need "option" modifier, not "shift"
- Always use EventViewer to get exact keycodes

## Current Meh Layer — Symbols

```
Y  @     U  {     I  }     O  [     P  ]
                                     ñ  ~
N  ->    M  =>    ,  `     .  #     -  |
```

## Current Meh Layer — Window Management (AeroSpace)

- `Meh + HJKL` = focus direction
- `Meh + 1-9, Z` = switch workspace
- `Meh + W` = enter manage mode (single keys for move, layout, resize)

## Current Meh Layer — Apps (Raycast)

- `Meh + A/S/F/G/X/V/R/T` = app hotkeys

## Current Hyper Layer — Cursor

```
H ←       J ↓       K ↑       L →
```

Tap Caps Lock = F13

## Adding a New Karabiner Shortcut

1. Open Karabiner EventViewer (menu bar -> Karabiner icon -> Launch EventViewer)

2. Press the key combo that produces your target symbol and note:
   - key_code (e.g., "semicolon", "open_bracket", "2")
   - modifiers (e.g., "option", "shift", or none)

3. Add manipulator to es-dev-symbols.json:
```json
{
    "type": "basic",
    "description": "Meh + X -> symbol",
    "from": {
        "key_code": "x",
        "modifiers": { "mandatory": ["control", "shift", "option"] }
    },
    "to": [{ "key_code": "FROM_EVENTVIEWER", "modifiers": ["FROM_EVENTVIEWER"] }]
}
```

4. If no modifiers needed, use empty array: `"modifiers": []`

5. If it's a dead key (like ` or ~), add spacebar after:
```json
"to": [
    { "key_code": "open_bracket", "modifiers": [] },
    { "key_code": "spacebar", "modifiers": [] }
]
```

6. For multi-char output (like ->), chain multiple keys in "to" array

7. For Hyper shortcuts, add "command" to mandatory modifiers:
```json
{
    "type": "basic",
    "description": "Hyper + X -> action",
    "from": {
        "key_code": "x",
        "modifiers": { "mandatory": ["control", "shift", "option", "command"] }
    },
    "to": [{ "key_code": "left_arrow" }]
}
```

8. Paste updated JSON into Karabiner UI -> Complex Modifications -> Add rule
