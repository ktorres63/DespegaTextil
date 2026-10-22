# AGENTS.md

## 1. Project Overview

Build a polished, responsive Spanish-language website for a company or initiative related to exports and international trade.

The website has three primary goals:
1. Present the company, its services, and its commercial information.
2. Provide a **referential export-cost calculator** prominently inside the Hero section.
3. Provide a **virtual assistant with predefined responses**, not an AI-powered chatbot.

The design should communicate trust, clarity, professionalism, and international business expertise. Use the approved design from Stitch as the visual reference when available.

Do not invent company facts, certifications, customers, partnerships, prices, contact details, or performance statistics. Use clearly identified placeholders until the client supplies verified information.

## 2. Technology Stack

- React
- TypeScript
- Vite, if this project is configured with Vite
- Tailwind CSS, following the version and configuration already installed
- Lucide React for icons, if installed
- React Router only if multiple routes are actually required

Before changing configuration or adding dependencies, inspect the existing project and its package files. Prefer the existing stack and conventions. Do not upgrade major versions or replace tooling without a clear reason.

Use the package manager indicated by the repository lockfile. Do not create a second lockfile.

## 3. Design System

Use these exact brand colors:

- Primary / Deep Forest Green: `#0B4A34`
- Secondary / Emerald Green: `#2D7A58`
- Background / Warm Ivory: `#F6F4EB`
- Surface / White: `#FFFFFF`
- Typography / Dark Green: `#08281D`
- Optional CTA accent / Warm Gold: `#D4A359`

Design direction:
- Premium, modern B2B export consultancy.
- Editorial typography, clear hierarchy, generous whitespace.
- Subtle borders and restrained shadows.
- High-quality trade, logistics, shipping, or export-related imagery only where it supports the content.
- Use gold sparingly for selected emphasis or CTA details.
- Avoid excessive gradients, unnecessary animation, generic dashboard styling, and decorative elements that compete with the calculator.
- Maintain accessible color contrast and visible focus states.

Centralize recurring colors and design tokens in the existing Tailwind theme or CSS variables when practical. Avoid scattering unexplained color values across components.

All user-facing website content must be in Spanish unless the client explicitly requests another language.

## 4. Main Page Structure

Build sections as reusable components where appropriate:

1. `Header` — logo placeholder, navigation, and CTA.
2. `HeroSection` — headline, supporting copy, CTAs, and export calculator.
3. `TrustStrip` — concise value propositions without invented claims.
4. `ServicesSection` — service cards based on client-approved or clearly provisional content.
5. `ExportProcess` — explanatory steps.
6. `AboutSection` — company introduction with editable placeholder content.
7. `FAQSection` — accessible accordion.
8. `FinalCTA` — CTA to use the calculator or contact an advisor.
9. `Footer` — navigation, contact placeholders, and legal links.
10. `VirtualAssistant` — floating assistant available throughout the page.

Adapt the structure to the existing design and Stitch reference. Do not force every section into the page if the approved design does not include it.

## 5. Export Calculator

The calculator is a core feature and must appear prominently in the Hero section.

Potential inputs, subject to client confirmation:
- Product value.
- Quantity.
- Origin and destination.
- Transportation method: maritime, air, or land.
- Incoterm: for example EXW, FOB, CIF, or DAP.

Potential results:
- Estimated total cost.
- Estimated cost per unit.
- Itemized cost breakdown.
- Clear notice that results are referential.

Implementation rules:
- Use controlled, typed form state.
- Validate required fields and numeric values.
- Prevent negative quantities, negative values, and invalid calculations.
- Display validation feedback in Spanish and associate it with the relevant fields.
- Format currency explicitly with `Intl.NumberFormat`; do not assume a currency until the client confirms it. If using PEN, display `S/` or the appropriate Peruvian sol format consistently.
- Keep calculation logic separate from presentation, preferably in a typed utility or domain module.
- Add unit tests for calculation rules when a test framework is available.
- Use only documented, client-approved rates and rules.
- Do not invent live freight prices, tax rates, customs charges, insurance costs, or exchange rates.
- If rates are not yet available, clearly label the calculator as a prototype and use explicitly identified illustrative values, or show a transparent breakdown of configurable inputs.
- Do not present illustrative numbers as real quotes.
- Explain that actual costs depend on route, product, shipment details, service providers, and applicable regulations.
- Do not imply that a simplified calculator replaces a customs broker, freight forwarder, or professional quote.
- Show a clear initial state, validation state, calculating state if needed, and results state.
- Avoid making a network request unless a real, configured service is required.

Incoterm options must not imply that selecting an Incoterm alone is enough to determine a complete export cost. The exact calculation model must be agreed with the client.

## 6. Virtual Assistant

Implement a scripted conversational interface using predefined responses.

Requirements:
- Floating launcher with accessible name.
- Open and close behavior.
- Welcome message.
- Suggested quick replies.
- Response mapping maintained separately from the visual component.
- Topics may include export basics, common export costs, Incoterms, calculator instructions, and contacting an advisor.
- Include a human-contact option only when the client provides a real contact method or destination.
- Provide a sensible fallback when a question does not match a predefined topic.
- Support keyboard navigation and visible focus states.
- Use semantic buttons for quick replies.
- Ensure the widget does not obscure important content or become unusable on small screens.
- Respect reduced-motion preferences if animations are used.

Do not claim that the assistant uses AI, understands arbitrary questions, or provides live professional advice. Do not send user messages to an external service unless explicitly requested and configured.

## 7. Responsive Design and Accessibility

Support mobile, tablet, and desktop layouts.

- Use mobile-first responsive styles.
- Prevent horizontal overflow.
- Ensure calculator fields and buttons fit narrow screens.
- Make interactive targets comfortable for touch.
- Use semantic HTML landmarks and a logical heading hierarchy.
- Label all inputs; do not rely on placeholders as labels.
- Provide keyboard-accessible navigation, accordions, forms, and chat controls.
- Maintain visible focus indicators.
- Add useful alt text to meaningful images; use empty alt text for purely decorative images.
- Respect `prefers-reduced-motion`.
- Avoid communicating status through color alone.

## 8. Code Quality and Architecture

- Use TypeScript with strict, useful types. Avoid `any`; if unavoidable, explain and limit its scope.
- Keep components focused and reasonably small.
- Separate reusable UI, page sections, data, calculation logic, and assistant response content.
- Avoid duplicating business rules or repeated UI.
- Use descriptive, consistent names.
- Prefer simple solutions over premature abstractions.
- Keep content and configurable business data out of large JSX blocks when practical.
- Do not add state-management libraries for state that React can handle simply.
- Clean up event listeners, subscriptions, and timers if any are introduced.
- Handle empty, invalid, and error states explicitly.
- Do not leave broken links, dead buttons, or controls that appear functional but do nothing. If a destination is not yet known, use a clear placeholder and document it.
- Do not use fabricated API responses or pretend an external integration exists.

Suggested structure (adapt to the repository rather than moving files unnecessarily):

```text
src/
  assets/
  components/
    layout/
      Header.tsx
      Footer.tsx
    calculator/
      ExportCalculator.tsx
      calculator.types.ts
      calculator.logic.ts
    assistant/
      VirtualAssistant.tsx
      assistant.responses.ts
    sections/
      HeroSection.tsx
      TrustStrip.tsx
      ServicesSection.tsx
      ExportProcess.tsx
      AboutSection.tsx
      FAQSection.tsx
      FinalCTA.tsx
  data/
    services.ts
    faq.ts
  pages/
    HomePage.tsx
  App.tsx
  main.tsx
```

This is a suggestion, not a requirement. Follow existing project conventions if they are already sound.

## 9. Content and Business Accuracy

- Keep company name, logo, address, email, phone, WhatsApp, social links, services, and legal details configurable.
- Never invent testimonials, certifications, client logos, guarantees, statistics, or partnerships.
- Make it clear that calculator outputs are estimates.
- Do not state that the site complies with a specific legal or regulatory standard unless this has been verified.
- If collecting personal data through a form, identify what data is collected and where it is sent. Do not create a fake submission flow.
- Keep privacy-policy and terms links as placeholders until actual documents or URLs are supplied.
- Ask for clarification when a missing business rule materially affects correctness. Otherwise, use a clearly marked placeholder and continue.

## 10. Performance and Security

- Optimize image sizes and use responsive images where appropriate.
- Lazy-load below-the-fold imagery when appropriate.
- Avoid adding large dependencies for small features.
- Never commit API keys, credentials, tokens, or `.env` files.
- Use `.env.example` only for documented variable names with placeholder values.
- Validate and sanitize data at appropriate boundaries if a backend is introduced.
- Do not store sensitive personal information in browser storage without a clear requirement and appropriate safeguards.
- Do not claim that frontend-only validation is sufficient for a future backend.

## 11. Git and Change Management

- **Never create commits automatically.** Only create a commit if the user explicitly asks.
- Never push, force-push, rebase shared history, or rewrite Git history unless explicitly requested.
- Do not discard or overwrite the user's existing changes.
- Inspect `git status` before potentially destructive operations.
- Do not add unrelated files or generated artifacts to Git.
- Keep changes focused on the requested task.
- If asked to commit, use a concise, professional commit message describing the actual change. Do not claim a commit was made if it was not.

## 12. Workflow for the Coding Agent

Before implementing:
1. Inspect the repository structure, package scripts, dependencies, and existing styles.
2. Read the available design/reference files and follow the Stitch design when provided.
3. Identify which requested features already exist.
4. State a brief implementation plan for substantial changes.
5. Preserve working code and avoid unrelated refactors.

While implementing:
1. Build the layout and responsive structure first.
2. Implement calculator and assistant behavior with separate, testable logic.
3. Add accessible loading, validation, empty, and result states.
4. Reuse existing dependencies and components where possible.
5. Do not silently invent business rules.

After implementing:
1. Run the available lint, type-check, test, and build scripts when practical.
2. Fix errors introduced by the changes.
3. Report commands run and their actual outcomes.
4. Summarize the files and functionality changed.
5. List missing client information, assumptions, and unfinished integrations.
6. Do not claim tests or builds passed unless they were actually run.

## 13. Definition of Done

A task is complete when:
- The implementation matches the approved design direction.
- The page is responsive and accessible to a reasonable standard.
- The calculator validates inputs and uses transparent, configured rules.
- The assistant uses predefined responses and has a fallback.
- No fake integrations, fabricated business claims, or nonfunctional controls are presented as real.
- Relevant checks have been run where available, and remaining issues are reported.
- No automatic Git commit or push has occurred.
