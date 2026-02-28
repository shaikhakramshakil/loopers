# 🟡 Medium Bug Fixes

> **Commit:** `fix(medium): restore swapped, renamed, and injected UI components`  
> **Files affected:** 30+ (19 modified/new, 11 deleted)  
> **Impact:** UI components broken, misnamed, or containing wrong code

---

## Swapped Component Contents
These file pairs had their contents switched with each other:

| File A | File B |
|--------|--------|
| `alert.tsx` (had AlertDialog code) | `alert-dialog.tsx` (had Alert code) |
| `card.tsx` (had Chart code) | `chart.tsx` (had Card code) |
| `form.tsx` (had Collapsible code) | `collapsible.tsx` (had Form code) |
| `badge.tsx` (had Calendar code) | — |
| `carousel.tsx` (had Chart code) | — |

---

## Injected / Corrupted Components

| File | Issue |
|------|-------|
| `dropdown-menu.tsx` | 2× injected `SelectLabel` blocks, missing `DropdownMenuContent` and `DropdownMenuItem` |
| `select.tsx` | Injected `TableCell` components, gibberish export name |
| `sidebar.tsx` | Injected duplicate `Skeleton` function |
| `table.tsx` | Missing `TableBody` and `TableCell` (moved to other files) |
| `tabs.tsx` | Injected `useSidebar` function with wrong casing |
| `textarea.tsx` | `TableCell` component replaced the textarea element |

---

## Wiki Agent Components

| File | Issue |
|------|-------|
| `chat-container.tsx` | 324 lines ASCII art → full chat UI component |
| `chat-message.tsx` | 10 bugs: wrong imports, injected junk, broken props |

---

## Renamed Files (joke names → correct names)

| Original Name | Correct Name | Component |
|---------------|-------------|-----------|
| `ali.tsx` | `badge.tsx` | Badge |
| `doctor.tsx` | `avatar.tsx` | Avatar |
| `mohammad.tsx` | `button.tsx` | Button |
| `expandible.tsx` | `checkbox.tsx` | Checkbox |
| `hello.tsx` | `progress.tsx` | Progress |
| `lol.tsx` | `radio-group.tsx` | RadioGroup |
| `poppy.tsx` | `popover.tsx` | Popover |
| `barnbeer.tsx` | `menubar.tsx` | Menubar |
| `badge2.tsx` | `calendar.tsx` | Calendar |
| `output.tsx` | `input.tsx` | Input |
| `router.tsx` | `switch.tsx` | Switch |

All 11 misnamed files have been **deleted** (correct versions already exist).
