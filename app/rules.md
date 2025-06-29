# 🧩 Project Rules for User Management App (React + TypeScript)

## 📁 Architecture & Structure

- Use **TypeScript** with `strict: true` enabled in `tsconfig.json`.
- Each UI component must be defined in its own `.tsx` file.
- Types and interfaces (e.g., `User`, `Address`, `Company`, `Geo`) must be defined in a dedicated `types/` folder or `types.ts` file if shared.
- Keep API logic separate in a `services/` or `api/` folder.
- Centralize constants (like API endpoints) in a `constants.ts` file.

---

## 💄 UI & Styling

- Use **semantic HTML** elements for structure (e.g., `<table>`, `<thead>`, `<tr>`, `<td>`).
- All styling must be done via `App.css` or `*.module.css` with **scoped class names**.
- Class naming should follow **BEM** or descriptive kebab-case (e.g., `.modal-overlay`, `.delete-button`).
- Animations should use CSS keyframes for fade/slide effects (see: `.modalOverlay`, `.modal`).

---

## ⚙️ State & Behavior

- State must be managed with `useState` and `useEffect`. No mutable variables outside React state.
- UI interaction like modal toggling or deletion must be done via event-safe handlers.
- Modal components must close on:
    - Overlay click
    - `Esc` key (optional improvement)
- All click handlers must use stable inline or memoized functions.

---

## 🧪 Testing (Required if scaling)

- Every component must have an associated test in a `__tests__/` folder or `*.test.tsx`.
- Use **React Testing Library** and **Jest**.
- API calls must be mocked using `msw` or `jest.fn()` for predictable unit testing.

---

## 🔗 API & Data

- API responses must be typed using interfaces (`User`, etc.).
- Fetch calls must include error handling.
- No hardcoded strings or URLs in components — move to `constants.ts`.
- Consider abstracting API fetch into `getUsers(): Promise<User[]>`.

---

## 🔄 Reusability

- Reuse visual patterns such as modals, tables, and buttons.
- Componentize repeated logic like user row or modal content.

---

## 📚 Documentation

- All exported functions and components must include JSDoc-style comments.
- `README.md` must include:
    - Setup & installation
    - Dev server command
    - Build/test commands
    - Stack summary (React, TypeScript, CSS Modules)
    - Description of major components (App, UserTable, UserModal)

---

## 🧼 Clean Code Practices

- Avoid `any` — use real types everywhere.
- No magic strings — use enums or constants for status types or field names.
- Keep components under 100 lines — extract logic/UI when necessary.
- Use `React.memo` for non-reactive components.

---

## 📱 Responsiveness

- The table must be responsive using `overflow-x: auto`.
- Modal must scale on small screens.
- Use media queries in CSS for font sizing and layout adjustments.

---

## ✨ Bonus Codegen Tips (Cursor/AI-specific)

- Use consistent naming (e.g., `selectedUser`, `handleDelete`, `setUsers`) to make AI-assisted refactors predictable.
- Keep one concept per file to improve prompt relevance for codegen tools.
- Define all interfaces/types explicitly in every file or import them from shared modules.


## 🧪 Testing Rules

- All React components must have a corresponding test file (`ComponentName.test.tsx`) inside `__tests__` or adjacent to the component.
- Use **Jest** and **React Testing Library** for both unit and integration tests.
- Mock external APIs with `jest-fetch-mock` or `msw` to prevent flaky tests.
- Cover at least:
    - Component renders
    - Table displays data
    - User selection opens the modal
    - User deletion updates UI
    - Modal closes on click or button
- Aim for >90% test coverage. Required branches: `render`, `interactions`, `error states`.
- Prefer `screen.getByRole`, `getByText`, and `userEvent` over `querySelector` for queries.


# Documentation Rules

## General Principles
- Documentation must be clear, concise, and structured.
- Use Markdown (`.md`) files stored in a `/docs` folder or root.
- Keep README.md updated with project overview, setup, usage, and testing instructions.
- Link to relevant design specs or screenshots for UI styling reference.

## Auto-Generation & Maintenance
- Use AI-assisted generation for docs from code comments and architecture.
- Update docs when major features or API changes occur.
- Document all components, utilities, and key workflows.
- Include screenshots or images where helpful (hosted in `/docs/assets`).

## Style & Formatting
- Use headings and subheadings for hierarchy.
- Use bullet points or tables for lists.
- Add code blocks with syntax highlighting for commands and snippets.
- Document interfaces, props, and expected data shape.

## Testing Docs
- Document test strategies, frameworks, and how to run tests.
- Keep examples of test cases and explain coverage goals.

## Image Recognition Context
- When using screenshots to illustrate UI, describe key styles (spacing, colors, fonts).
- Reference screenshots in docs with alt text and captions.
- Images must be optimized for fast loading.

---

## Example doc sections:

- **Introduction**
- **Getting Started**
- **Architecture Overview**
- **Component Documentation**
- **API & Data Models**
- **Styling & Theming**
- **Testing & Quality Assurance**
- **FAQ and Troubleshooting**

---

*Following these rules will ensure your documentation remains useful, maintainable, and codegen-friendly.*

