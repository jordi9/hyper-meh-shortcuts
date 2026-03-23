---
title: Setup
description: How to add new shortcuts and ES-ISO layout quirks.
---

## Adding a new Meh shortcut

1. Open **Karabiner EventViewer** (menu bar → Karabiner icon → Launch EventViewer)
2. Press the key combo that produces your target symbol — note the `key_code` and `modifiers`
3. Add a manipulator to `es-dev-symbols.json`:

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

4. Load it: Karabiner UI → Complex Modifications → Add rule

For **Hyper** shortcuts, add `"command"` to the mandatory modifiers.

## Dead keys (backtick, tilde)

On ES-ISO, `` ` `` and `~` are dead keys — they wait for a second keypress. Add a spacebar after to output the literal character:

```json
"to": [
    { "key_code": "open_bracket", "modifiers": [] },
    { "key_code": "spacebar", "modifiers": [] }
]
```

## Multi-character output

Chain multiple key events in the `"to"` array (e.g., `->` is two key presses).

## ES-ISO quirks

- The `ñ` key maps to `"semicolon"` in Karabiner (US-ANSI position)
- Many symbols that use `Shift` on US-ANSI need `Option` on ES-ISO
- Always verify with EventViewer — never assume key codes
