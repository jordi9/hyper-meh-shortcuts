# ES-ISO Dev Symbols for Karabiner-Elements

Meh key layer for programming symbols on Spanish (ES-ISO) keyboard layout.

## What are Meh and Hyper?

- **Meh**: Hold Caps Lock to activate Ctrl+Shift+Option. A dedicated layer for symbols.
- **Hyper**: Hold Caps Lock + Cmd to activate Ctrl+Shift+Option+Cmd. A second layer for app launching, macros, etc.

Both give you modifier combinations that virtually no app uses, so they won't conflict with existing shortcuts.

## Layout

```
Meh + Y  ->    Meh + U  (     Meh + I  )     Meh + O  =>
Meh + H  `     Meh + J  [     Meh + K  ]     Meh + L  |     Meh + ñ  ~
Meh + N  @     Meh + M  {     Meh + ,  }     Meh + .  #
```

Tap Caps Lock alone = F13 (bindable in apps)

## Key Mappings

| Key | Symbol | ES-ISO Combo |
|-----|--------|--------------|
| H | \` | dead key + space |
| J | [ | Option + [ |
| K | ] | Option + ] |
| M | { | Option + ' |
| , | } | Option + \ |
| U | ( | Shift + 8 |
| I | ) | Shift + 9 |
| L | \| | Option + 1 |
| N | @ | Option + 2 |
| . | # | Option + 3 |
| ñ | ~ | dead key + space |
| Y | -> | - then > |
| O | => | = then > |

## Installation

1. Install [Karabiner-Elements](https://karabiner-elements.pqrs.org/)
2. Open Karabiner-Elements Preferences
3. Go to Complex Modifications -> Add rule -> Import more rules from the Internet (or paste directly)
4. Copy contents of `es-dev-symbols.json` and add as a custom rule

## Cheatsheet

Open `cheatsheet.html` in a browser for a visual reference. Print-friendly.

## Requirements

- macOS
- Karabiner-Elements
- Spanish (ES-ISO) keyboard layout
