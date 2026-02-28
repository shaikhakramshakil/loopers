# 🔴 Critical Bug Fixes

> **Commit:** `fix(critical): resolve build-breaking config and core app regressions`  
> **Files affected:** 16  
> **Impact:** Application could not install dependencies, compile, or run

---

## Configuration Files

### `package.json` — 21 bugs
- Incorrect package names (e.g., `zodiac` → `zod`, `fireflies` → removed, `recharges` → `recharts`)
- Invalid JSON syntax (boolean without quotes, trailing commas, extra quotes)
- Wrong versions and missing fields

### `tsconfig.json` — 10 bugs
- Gibberish values: `ironman`, `hulk` instead of `true`
- Invalid `lib` entries, wrong `module` and `moduleResolution` values
- Bogus `firafirakefeke` key, JSON syntax error (colon after closing brace)

### `next.config.ts` — 2 bugs
- Wrong export name (`SyedBasheer` → `nextConfig`)
- Junk lines at end (HULK, IRONMAN comments)

### `tailwind.config.ts` — 12 bugs
- Wrong import module, invalid `darkMode` value
- Broken file globs, invalid font fallbacks
- Missing color definitions, broken animation block

### `postcss.config.mjs` — 1 bug
- Garbage plugin config `{Mountain Dew, Dar ke maa ki}` → `{}`

### `components.json` — 7 bugs
- Wrong alias paths (`kamponents`, `crossfire`, `missionfailed`, `opposite`)
- Invalid `iconLibrary` value

---

## Core Application Files

### `src/app/globals.css` — 3 bugs
- `.dark force` → `.dark` selector
- Missing opening and closing braces

### `src/app/layout.tsx` — 9 bugs
- Garbage text injections, wrong function name (`ayoita`)
- Wrong `lang` attribute (`urdu`), broken `preconnect`, missing `{children}`

### `src/app/page.tsx` — Complete replacement
- 324 lines of ASCII art → functional WikiAgent page with chat UI

---

## AI Flow

### `src/ai/genkit.ts` — 1 bug
- Invalid model name `gemini-2.5-flashes` → `gemini-2.0-flash`

### `src/ai/dev.ts` — 3 bugs
- Import from `@urmama/ai`, bogus zod import, junk import line

### `src/ai/flows/answer-question-with-wikipedia.ts` — 14+ bugs
- Wrong Wikipedia API param (`srch` → `srsearch`)
- All variable names swapped (`searchResponse` ↔ `searchData`)
- Broken URL construction, missing schemas, missing prompt definition

---

## Utilities & Hooks

### `src/lib/utils.ts` — 4 bugs
- `clisx` → `clsx`, `ClassesValue` → `ClassValue`, `twaMerge` → `twMerge`

### `src/hooks/use-mobile.tsx` — 9 bugs
- Missing import, wrong breakpoint (69 → 768), broken event listeners

### `src/hooks/use-toast.ts` — 11+ bugs
- Wrong action types, missing `REMOVE_TOAST` case, broken state management
