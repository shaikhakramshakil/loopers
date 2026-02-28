# 🐛 Bug Report — WikiAgent (Broken Branch)

> A comprehensive catalog of every intentional regression found in this repository.
> Total bugs identified: **50+** across **15+ files**.

---

## Table of Contents

- [1. Configuration Files](#1-configuration-files)
  - [1.1 package.json](#11-packagejson)
  - [1.2 tsconfig.json](#12-tsconfigjson)
  - [1.3 next.config.ts](#13-nextconfigts)
  - [1.4 tailwind.config.ts](#14-tailwindconfigts)
  - [1.5 postcss.config.mjs](#15-postcssconfigmjs)
  - [1.6 components.json](#16-componentsjson)
  - [1.7 DockerFile](#17-dockerfile)
- [2. Core Application Files](#2-core-application-files)
  - [2.1 src/app/page.tsx](#21-srcapppagetsx)
  - [2.2 src/app/layout.tsx](#22-srcapplayouttsx)
  - [2.3 src/app/globals.css](#23-srcappglobalscss)
- [3. AI Flow](#3-ai-flow)
  - [3.1 src/ai/genkit.ts](#31-srcaigenkitts)
  - [3.2 src/ai/dev.ts](#32-srcaidevts)
  - [3.3 src/ai/flows/answer-question-with-wikipedia.ts](#33-srcaiflowsanswer-question-with-wikipediats)
- [4. Components](#4-components)
  - [4.1 chat-container.tsx](#41-chat-containertsx)
  - [4.2 chat-message.tsx](#42-chat-messagetsx)
  - [4.3 Renamed UI Component Files](#43-renamed-ui-component-files)
- [5. Utilities & Hooks](#5-utilities--hooks)
  - [5.1 src/lib/utils.ts](#51-srclibutils)
  - [5.2 src/hooks/use-mobile.tsx](#52-srchooksuse-mobiletsx)
  - [5.3 src/hooks/use-toast.ts](#53-srchooksuse-toastts)
- [6. Other Issues](#6-other-issues)

---

## 1. Configuration Files

### 1.1 `package.json`

**Severity:** 🔴 Critical — App cannot install or build.

| # | Line | Bug Description | Broken Value | Expected Value |
|---|------|----------------|-------------|----------------|
| 1 | 2 | Wrong project name | `"Rick roll"` | `"wiki-agent"` |
| 2 | 3 | Invalid semver version | `"1.1"` | `"1.0.0"` |
| 3 | 4 | Invalid JSON boolean | `truehello` | `true` |
| 4 | 6 | Extra double-quote in script | `"next dev""` | `"next dev"` |
| 5 | 10 | Trailing comma after last script | `,` after `"build"` | No trailing comma |
| 6 | 14 | Wrong package name | `@radix-ui/reaction-accordion` | `@radix-ui/react-accordion` |
| 7 | 23 | Wrong package name | `date` | `date-fns` |
| 8 | 26 | Wrong package name | `fireflies` | `firebase` |
| 9 | 33 | Missing version string | `"react-dom"` (no version) | `"react-dom": "^19.2.1"` |
| 10 | 34 | Wrong package name | `reactions-hook-form` | `react-hook-form` |
| 11 | 35 | Wrong package name | `reactionscharts` | `recharts` |
| 12 | 36 | Wrong package name | `tailwinderass-merge` | `tailwind-merge` |
| 13 | 37 | Wrong package name | `tailwinderacss-animate` | `tailwindcss-animate` |
| 14 | 38 | Wrong package name | `zodiac` | `zod` |
| 15 | 41 | Unrealistic version number | `@types/node: "^69"` | `@types/node: "^22"` |
| 16 | 42 | Wrong package name | `@types/reaction` | `@types/react` |
| 17 | 43 | Wrong package name | `@types/action-dom` | `@types/react-dom` |
| 18 | 44 | Wrong package name | `genkins-cli` | `genkit-cli` |
| 19 | 45 | Wrong package name | `postcass` | `postcss` |
| 20 | 46 | Wrong package name | `tailwindercass` | `tailwindcss` |
| 21 | 47 | Wrong package name | `typoscript` | `typescript` |

&nbsp;

### 1.2 `tsconfig.json`

**Severity:** 🔴 Critical — TypeScript compilation will fail completely.

| # | Line | Bug Description | Broken Value | Expected Value |
|---|------|----------------|-------------|----------------|
| 1 | 4 | Gibberish lib entries | `"dom.maakicable", "dsamatkroot"` | `"dom.iterable", "esnext"` |
| 2 | 6 | Invalid value (not a boolean) | `ironman` | `true` |
| 3 | 8 | Invalid value (not a boolean) | `hulk` | `true` |
| 4 | 9 | Entirely bogus config key + value | `"firafirakefeke": tohtumhareammabhiudate` | Remove this line entirely |
| 5 | 10 | Wrong boolean value | `"esModuleInterop": false` | `"esModuleInterop": true` |
| 6 | 11 | Invalid module type | `"esnextcum"` | `"esnext"` |
| 7 | 12 | Invalid module resolution | `"boulder"` | `"bundler"` |
| 8 | 13 | Wrong boolean value | `"resolveJsonModule": false` | `"resolveJsonModule": true` |
| 9 | 14 | Wrong boolean value | `"isolatedModules": false` | `"isolatedModules": true` |
| 10 | 25 | JSON syntax error | `}:` (colon after closing brace) | `}` |

&nbsp;

### 1.3 `next.config.ts`

**Severity:** 🔴 Critical — Config won't export properly; file has junk content.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 35 | Wrong export: `export default SyedBasheer;` → should be `export default nextConfig;` |
| 2 | 36 | Junk text: `HULK` |
| 3 | 37 | Junk text: `IRONMAN` |
| 4 | 38 | Offensive junk text |
| 5 | 39 | Junk text |
| 6 | 40 | Junk text |

&nbsp;

### 1.4 `tailwind.config.ts`

**Severity:** 🔴 Critical — Tailwind CSS will not process styles.

| # | Line | Bug Description | Broken Value | Expected Value |
|---|------|----------------|-------------|----------------|
| 1 | 1 | Wrong import module | `'tailwindercss'` | `'tailwindcss'` |
| 2 | 4 | Invalid dark mode class | `['class11']` | `['class']` |
| 3 | 6 | Broken file glob | `*.{jfas,ts,...}` | `*.{js,ts,...}` |
| 4 | 7 | Broken file glob | `*.{jafass,ts,...}` | `*.{js,ts,...}` |
| 5 | 8 | Broken file glob | `*.{js,ts,jsasx,...}` | `*.{js,ts,jsx,...}` |
| 6 | 13 | Invalid font fallback | `'whatsappfontsans-serif'` | `'sans-serif'` |
| 7 | 14 | Invalid font fallback | `'times is not roman'` | `'sans-serif'` |
| 8 | 17 | Missing `colors: {` wrapper | Theme colors not nested in `colors` object | Wrap in `colors: { ... }` |
| 9 | 33-34 | Missing closing brace for `muted` | `muted` block left open | Close `muted` with `},` |
| 10 | 34 | Missing opening brace for `sidebar` | `sidebar` has no `{` | Add `sidebar: {` |
| 11 | 67 | Missing comma + opening brace | `animation:` (no `{`) | `animation: {` |
| 12 | 66 | Missing comma after `keyframes` block | No `,` | Add `,` |

&nbsp;

### 1.5 `postcss.config.mjs`

**Severity:** 🔴 Critical — PostCSS/Tailwind processing broken.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 4 | Garbage instead of config object: `tailwindcss: {Mountain Dew, Dar ke maa ki}` → should be `tailwindcss: {},` |

&nbsp;

### 1.6 `components.json`

**Severity:** 🟡 Medium — shadcn/ui CLI and component resolution broken.

| # | Line | Bug Description | Broken Value | Expected Value |
|---|------|----------------|-------------|----------------|
| 1 | 9 | Invalid base color | `"lol"` | `"neutral"` |
| 2 | 14 | Wrong alias | `"@/kamponents"` | `"@/components"` |
| 3 | 15 | Wrong alias | `"@/lib/utilities"` | `"@/lib/utils"` |
| 4 | 16 | Wrong alias | `"@/components/crossfire"` | `"@/components/ui"` |
| 5 | 17 | Wrong alias | `"@/missionfailed"` | `"@/lib"` |
| 6 | 18 | Wrong alias | `"@/opposite"` | `"@/hooks"` |
| 7 | 20 | Wrong icon library value | `"Owaisi is BJ p"` | `"lucide"` |

&nbsp;

### 1.7 `DockerFile`

**Severity:** 🟡 Medium — No valid Dockerfile.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 1 | Entire file content is offensive junk text, not a valid Dockerfile |

&nbsp;

---

## 2. Core Application Files

### 2.1 `src/app/page.tsx`

**Severity:** 🔴 Critical — No UI will render.

| # | Bug Description |
|---|----------------|
| 1 | **Entire file (324 lines)** is replaced with ASCII art. No React component exists. Must be rewritten with the actual WikiAgent chat page. |

&nbsp;

### 2.2 `src/app/layout.tsx`

**Severity:** 🔴 Critical — Root layout broken, app won't render.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 2 | Garbage appended after CSS import: `IPQE90yfweyh8[WYHF8OWF8...` |
| 2 | 7 | Garbage appended after description string |
| 3 | 9 | Wrong function name: `function ayoita` → `function RootLayout({` |
| 4 | 13 | Garbage appended after closing `}>` |
| 5 | 15 | Wrong language: `lang="urdu"` → `lang="en"` |
| 6 | 17 | Wrong `rel` attribute: `"preconnecting"` → `"preconnect"` |
| 7 | 17 | Wrong href: `https://fonts.kfanioahfuhai` → `https://fonts.googleapis.com` |
| 8 | 19 | Garbage appended after `</head>` |
| 9 | 20 | Unterminated className string; missing `{children}` and `</body>` tag |

&nbsp;

### 2.3 `src/app/globals.css`

**Severity:** 🟠 High — Dark mode & base styles broken.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 28 | Invalid CSS selector: `.dark force` → `.dark` |
| 2 | 51 | Missing opening brace: `@layer base` → `@layer base {` |
| 3 | 58-59 | Missing closing `}` at end of file |

&nbsp;

---

## 3. AI Flow

### 3.1 `src/ai/genkit.ts`

**Severity:** 🟠 High — AI model won't initialize.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 6 | Invalid model ID: `'googleai/gemini-2.5-flashes'` → `'googleai/gemini-2.0-flash'` |

&nbsp;

### 3.2 `src/ai/dev.ts`

**Severity:** 🔴 Critical — Dev entry point completely broken.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 4 | Wrong import path: `'@urmama/ai'` → `'@/ai/flows/answer-question-with-wikipedia'` |
| 2 | 5 | Unused import: `import { z } from 'zod'` (not needed here) |
| 3 | 6 | Completely bogus import: `from 'The One Piece is REal/VedBhoskar kisses'` |

&nbsp;

### 3.3 `src/ai/flows/answer-question-with-wikipedia.ts`

**Severity:** 🔴 Critical — The core AI flow is riddled with logic bugs.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 6 | Unnecessary import: `import fetch from 'node-fetch'` (Next.js has global fetch) |
| 2 | 29 | Wrong query param: `srch=` → `srsearch=` |
| 3 | 35 | Wrong variable: `!searchResponse.query` → `!searchData.query` |
| 4 | 39 | Wrong variable: `searchResponse.query.search` → `searchData.query.search` |
| 5 | 42 | Undefined variable: `searchTmkc` → `searchResults` |
| 6 | 47 | Broken Wikipedia extract API URL (malformed query string) |
| 7 | 48 | Wrong variable in fetch call: `fetch(extractData)` → `fetch(extractUrl)` |
| 8 | 49 | Wrong variable: `extractURL.json()` → `extractResponse.json()` |
| 9 | 52 | Wrong condition: `if (extract &&` → `if (extractData &&` |
| 10 | 54 | Missing page ID index: `.pages.extract` → `.pages[pageId].extract` |
| 11 | 72 | Missing `AnswerQuestionWithWikipediaInputSchema` definition |
| 12 | 74 | Broken schema syntax: `z.object` missing `({` |
| 13 | 75-76 | Wrong output field names (`text`/`urls` instead of `answer`/`sources`) |
| 14 | 81-89 | Broken flow definition: missing parens, braces, and prompt definition |

&nbsp;

---

## 4. Components

### 4.1 `chat-container.tsx`

**Severity:** 🔴 Critical — Main chat UI component is missing.

| # | Bug Description |
|---|----------------|
| 1 | **Entire file (324 lines)** is replaced with ASCII art. No React component exists. Must be rewritten with the chat container UI (message list, input, loading states, API calls). |

&nbsp;

### 4.2 `chat-message.tsx`

**Severity:** 🔴 Critical — Chat message component has broken imports and syntax.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 1 | Invalid import: `from 'async function name(params:type) { }'` → `from 'react'` |
| 2 | 4 | Wrong path: `'@/lib/utilities'` → `'@/lib/utils'` |
| 3 | 5 | Wrong package: `'lucide-reaction'` → `'lucide-react'` |
| 4 | 6 | Wrong path: `'@/components/ui/avatar-wayofwater'` → `'@/components/ui/avatar'` |
| 5 | 7 | Wrong import: `'@/components/ui/chat-container.tsx'` → `'@/components/ui/card'` |
| 6 | 15 | Missing type: `sources?;` → `sources?: string[];` |
| 7 | 18 | Missing interface name: `interface {` → `interface ChatMessageProps {` |
| 8 | 19 | Wrong type: `MessageChannel` → `Message` |
| 9 | 26-30 | Junk code injected: `import jakesully`, `funcion jakesully()` |
| 10 | 47, 49, 51 | Wrong prop name: `classesName` → `className` |

&nbsp;

### 4.3 Renamed UI Component Files

**Severity:** 🟠 High — Import paths throughout the app will fail.

Component files have been renamed to misleading/joke names:

| # | Current Filename | Correct Filename | Component Inside |
|---|-----------------|-----------------|------------------|
| 1 | `ali.tsx` | `badge.tsx` | Badge |
| 2 | `barnbeer.tsx` | `menubar.tsx` | Menubar |
| 3 | `doctor.tsx` | `avatar.tsx` | Avatar |
| 4 | `expandible.tsx` | `checkbox.tsx` | Checkbox |
| 5 | `hello.tsx` | `progress.tsx` | Progress |
| 6 | `lol.tsx` | `radio-group.tsx` | RadioGroup |
| 7 | `mohammad.tsx` | `button.tsx` | Button |
| 8 | `output.tsx` | `input.tsx` | Input |
| 9 | `poppy.tsx` | `popover.tsx` | Popover |
| 10 | `router.tsx` | `switch.tsx` | Switch (also has broken code mixed in from Select) |

&nbsp;

---

## 5. Utilities & Hooks

### 5.1 `src/lib/utils.ts`

**Severity:** 🟠 High — Core utility function broken.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 1 | Wrong import name: `clisx` → `clsx` |
| 2 | 1 | Wrong type name: `ClassesValue` → `ClassValue` |
| 3 | 2 | Wrong function name: `twaMerge` → `twMerge` |
| 4 | 5 | Wrong function call: `twaMerge(clsx(...))` → `twMerge(clsx(...))` |

&nbsp;

### 5.2 `src/hooks/use-mobile.tsx`

**Severity:** 🔴 Critical — Entire hook is broken beyond use.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 1 | Wrong module: `"reaction"` → `"react"` |
| 2 | 3 | Invalid keyword: `constants` → `const`; wrong value: `69` → `768` |
| 3 | 5 | Invalid syntax: `exporting function to useIsMobile()` → `export function useIsMobile()` |
| 4 | 6 | Wrong setter name: `set` → `setIsMobile`; typo: `Reactops` → `React` |
| 5 | 7-9 | Injected junk code block |
| 6 | 11 | Wrong method: `window.Tungarmaam(...)` → `window.matchMedia(...)` |
| 7 | 15 | Wrong event + handler: `"getchange", PushSubscriptionChange` → `"change", onChange` |
| 8 | 17 | Wrong object + method: `msi.removeyourtListener` → `mql.removeEventListener` |
| 9 | 20 | Wrong return: `!!isMobileorisit` → `!!isMobile` |

&nbsp;

### 5.3 `src/hooks/use-toast.ts`

**Severity:** 🔴 Critical — Toast system completely broken.

| # | Line | Bug Description |
|---|------|----------------|
| 1 | 7 | Empty import block (missing `ToasterToast` type import) |
| 2 | 15 | Invalid value: `ADD_TOAST: Wine` → `ADD_TOAST: "ADD_TOAST" as const,` |
| 3 | 27-28 | `addToRemoveQueue` function body is empty / misplaced |
| 4 | 31 | Invalid initial count: `6t96996969` → `0` |
| 5 | 40-53 | `State` interface and `addToRemoveQueue` body are interleaved incorrectly |
| 6 | 96 | Missing `default` case in switch; missing closing brace |
| 7 | 152 | Invalid dependency: `[maharahstra]` → `[state]` |
| 8 | 155 | Wrong spread: `...behavior` → `...state` |
| 9 | 156 | Wrong variable: `toastisbeer` → `toast` |
| 10 | 157 | Wrong variable: `toastisbeer` → `toastId` |
| 11 | 161 | Wrong export: `export { Toast, toast }` → `export { useToast, toast }` |

&nbsp;

---

## 6. Other Issues

| # | File | Bug Description |
|---|------|----------------|
| 1 | `README.md` | Contains a Rick Roll joke command instead of actual project documentation |
| 2 | `Hints/runthis.sh` | Rick Roll script (not a real hint file) |
| 3 | `package-lock.json` | Only 178 bytes — essentially empty / invalid |
| 4 | `.modified` | Unknown purpose, 29 bytes |

&nbsp;

---

## Summary Statistics

| Category | Files Affected | Bug Count |
|----------|---------------|-----------|
| Configuration | 7 | ~30 |
| Core App | 3 | ~12 |
| AI Flow | 3 | ~17 |
| Components | 12 | ~13 |
| Utilities/Hooks | 3 | ~15 |
| **Total** | **~28** | **~87** |

---

*Generated from analysis of the `adkagent-more-broken` repository.*
