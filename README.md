# ⌨️ ES-ISO Dev Symbols for Karabiner-Elements

Meh key layer for programming symbols on Spanish (ES-ISO) keyboard layout.

## 🤔 Why?

Switching to US-International or Programmer Dvorak is the usual advice. I disagree.

ES-ISO gives me direct access to accents and `ç` without dead keys or combos. Besides English, I write in Catalan and Spanish daily - losing that isn't worth it. The "US is better for programming" argument also ignores that even Helix/Vim (eg: vim-surround) users often remap `()[]{}` because they're far from home row regardless of layout.

The real problem with ES-ISO isn't the layout itself - it's the **Option gymnastics**. Symbols like `@`, `|`, `{`, `}`, `[`, `]`, `#` all require Option + key, which is awkward and breaks flow. Meanwhile, symbols like `?`, `-`, `_`, `<`, `>` are just Shift + key - totally fine.

This meh setup fixes the awkward symbols without abandoning the layout.

## 🦸 What are Meh and Hyper?

- **Meh**: Hold Caps Lock to activate Ctrl+Shift+Option. A dedicated layer for symbols.
- **Hyper**: Hold Caps Lock + Cmd to activate Ctrl+Shift+Option+Cmd. A second layer for app launching, macros, etc.

Both give you modifier combinations that virtually no app uses, so they won't conflict with existing shortcuts.

## 🗺️ Layout

```
Meh + Y  ->    Meh + U  (     Meh + I  )     Meh + O  =>
Meh + H  `     Meh + J  [     Meh + K  ]     Meh + L  |     Meh + ñ  ~
Meh + N  @     Meh + M  {     Meh + ,  }     Meh + .  #
```

Tap Caps Lock alone = F13 (bindable in apps)

## 🔑 Key Mappings

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

## 📦 Installation

1. Install [Karabiner-Elements](https://karabiner-elements.pqrs.org/)
2. Open Karabiner-Elements Preferences
3. Go to Complex Modifications -> Add rule -> Import more rules from the Internet (or paste directly)
4. Copy contents of `es-dev-symbols.json` and add as a custom rule

## 📄 Cheatsheet

[View online](https://jordi9.github.io/hyper-meh-shortcuts/) or open `docs/index.html` locally. Print-friendly.

## ✅ Requirements

- macOS
- Karabiner-Elements
- Spanish (ES-ISO) keyboard layout
