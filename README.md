# Meh & Hyper — ES-ISO Keyboard Layers

Custom keyboard layers for programming on the Spanish (ES-ISO) layout on macOS. Symbols, cursor movement, window management, and app launching — all from the home row.

## Why?

Switching to US-International or Programmer Dvorak is the usual advice. I disagree.

ES-ISO gives me direct access to accents and `ç` without dead keys or combos. Besides English, I write in Catalan and Spanish daily — losing that isn't worth it. The "US is better for programming" argument also ignores that even Helix/Vim (eg: vim-surround) users often remap `()[]{}` because they're far from home row regardless of layout.

The real problem with ES-ISO isn't the layout itself — it's the **Option gymnastics**. Symbols like `@`, `|`, `{`, `}`, `[`, `]`, `#` all require Option + key, which is awkward and breaks flow. Meanwhile, symbols like `?`, `-`, `_`, `<`, `>` are just Shift + key — totally fine.

This setup fixes the awkward symbols without abandoning the layout.

:star: [View the full docs](https://jordi9.github.io/hyper-meh-shortcuts/) :star:


## How it works

Caps Lock is remapped via [Karabiner-Elements](https://karabiner-elements.pqrs.org/) into two modifier layers:

| Layer | Activation | Modifier combo |
|-------|------------|----------------|
| **Meh** | Caps Lock held | Ctrl + Shift + Option |
| **Hyper** | Caps Lock + Cmd held | Ctrl + Shift + Option + Cmd |

Tap Caps Lock alone = **F13** (bindable in apps).

Both give you modifier combinations that virtually no app uses, so they won't conflict with existing shortcuts.

## Setup

- macOS
- Window management: Requires [AeroSpace](https://github.com/nikitabobko/AeroSpace).
- App launching: Configured in [Raycast](https://www.raycast.com/) preferences under Hotkeys.
- Spanish (ES-ISO) keyboard layout

Most of the files needed are in my [dotfiles repo](https://github.com/jordi9/dotfiles).

## Documentation

Built with Astro Starlight.
