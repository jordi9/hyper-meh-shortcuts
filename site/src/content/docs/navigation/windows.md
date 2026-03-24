---
title: Windows
description: Tiling window management via AeroSpace.
---

Window management via [AeroSpace](https://github.com/nikitabobko/AeroSpace). Focus and workspaces in main mode, everything else in manage mode.

## Focus

| Shortcut | Action |
|----------|--------|
| `✧ H` | Focus left |
| `✧ J` | Focus down |
| `✧ K` | Focus up |
| `✧ L` | Focus right |

## Workspaces

| Shortcut | Action |
|----------|--------|
| `✧ 1-9` | Switch to workspace |
| `✧ Z` | Switch to workspace Z (secondary monitor) |
| `Alt + Tab` | Previous workspace |

## Manage mode

Press `✧ W` to enter manage mode. Single keystrokes, no modifiers needed.

### Move windows

| Key | Action |
|-----|--------|
| `H` | Move left |
| `J` | Move down |
| `K` | Move up |
| `L` | Move right |

### Send to workspace

| Key | Action |
|-----|--------|
| `1-9` | Send window to workspace (exits manage mode) |
| `Z` | Send window to workspace Z (exits manage mode) |

### Layout

| Key | Action |
|-----|--------|
| `T` | Toggle tiles (horizontal/vertical) |
| `A` | Toggle accordion (horizontal/vertical) |
| `Enter + F` | Fullscreen (exits manage mode) |
| `Shift + F` | Toggle floating/tiling (exits manage mode) |
| `E` | Balance sizes |

### Resize

| Key | Action |
|-----|--------|
| `o` | Shrink by 50px |
| `p` | Grow by 50px |

### Other

| Key | Action |
|-----|--------|
| `Shift + H/J/K/L` | Join with direction |
| `Tab` | Move workspace to next monitor |
| `R` | Reset (flatten) workspace layout |
| `Shift + R` | Reload config |
| `Backspace` | Close all windows but current |
| `Esc` | Exit manage mode |

Config file: `~/.aerospace.toml`
