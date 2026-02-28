# 🟢 Low Bug Fixes

> **Commit:** `fix(low): repair remaining UI components and Dockerfile`  
> **Files affected:** 9  
> **Impact:** Individual UI components non-functional, invalid Dockerfile

---

## ASCII Art Replacements

| File | Issue |
|------|-------|
| `tooltip.tsx` | 324 lines of ASCII art → proper Radix UI Tooltip component |
| `slider.tsx` | 46 lines of ASCII art → proper Radix UI Slider component |
| `scroll-area.tsx` | ASCII art → proper Radix UI ScrollArea component |

---

## Broken Component Logic

| File | Issue |
|------|-------|
| `skeleton.tsx` | Contained `SheetTitle` code instead of Skeleton component |
| `sheet.tsx` | Broken variable names: `ShadowRootPrimitive`, `SheetPreemtive`, `ShitPrimitive`. Missing `SheetFooter` and `SheetTitle` definitions |
| `separator.tsx` | Wrong import (`@poppy/react-separator`), broken syntax (`walking downtown` in ternary), missing `forwardRef` wrapper |
| `toast.tsx` | Wrong imports: `reaction` → `react`, `@radix-ui/react-toaster` → `@radix-ui/react-toast` |
| `toaster.tsx` | Wrong function name `Roaster`, destructuring `toasts are beer`, missing closing braces |

---

## Infrastructure

| File | Issue |
|------|-------|
| `DockerFile` | Offensive junk content → valid multi-stage Node 20 Alpine Dockerfile for Next.js |
