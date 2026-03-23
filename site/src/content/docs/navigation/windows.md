---
title: Windows
description: Tiling window management via AeroSpace.
---

Tiling windows via [AeroSpace](https://github.com/nikitabobko/AeroSpace). All bindings use the `Alt` modifier.

## Focus

| Shortcut | Action |
|----------|--------|
| `Alt + H` | Focus left |
| `Alt + J` | Focus down |
| `Alt + K` | Focus up |
| `Alt + L` | Focus right |

## Move windows

| Shortcut | Action |
|----------|--------|
| `Alt + Shift + H` | Move window left |
| `Alt + Shift + J` | Move window down |
| `Alt + Shift + K` | Move window up |
| `Alt + Shift + L` | Move window right |

## Layout

| Shortcut | Action |
|----------|--------|
| `Alt + T` | Toggle tiles (horizontal/vertical) |
| `Alt + ,` | Toggle accordion (horizontal/vertical) |
| `Alt + F` | Fullscreen |
| `Meh + Enter` | Fullscreen (alternate) |
| `Hyper + T` | Toggle floating/tiling |

## Workspaces

| Shortcut | Action |
|----------|--------|
| `Meh + 1-9` | Switch to workspace |
| `Meh + Z` | Switch to workspace Z (secondary monitor) |
| `Hyper + 1-9` | Move window to workspace |
| `Hyper + Z` | Move window to workspace Z |
| `Alt + Tab` | Previous workspace |
| `Alt + Shift + Tab` | Move workspace to next monitor |

## Resize

| Shortcut | Action |
|----------|--------|
| `Meh + 0` | Shrink by 50px |
| `Meh + P` | Grow by 50px |

## Service mode

Press `Hyper + S` to enter service mode, then:

| Key | Action |
|-----|--------|
| `Esc` | Reload config and exit |
| `R` | Reset (flatten) workspace layout |
| `F` | Toggle floating/tiling |
| `Backspace` | Close all windows but current |
| `Alt + Shift + H` | Join with left |
| `Alt + Shift + J` | Join with down |
| `Alt + Shift + K` | Join with up |
| `Alt + Shift + L` | Join with right |

Config file: `~/.aerospace.toml`
