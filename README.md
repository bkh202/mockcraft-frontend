# MockCraft — Frontend

Client application for MockCraft, an AI-powered mock interview preparation platform. Built with React and Vite, this is the interface users interact with for taking quizzes, building portfolios, and running AI interview sessions. Talks to the [MockCraft backend](#) over REST.

---

## Overview

This is the frontend for a product currently serving 60+ paying users. It covers three main user-facing flows:

- **Quiz Practice** — Pick a topic, get an AI-generated mock quiz, review results.
- **Resume → Portfolio** — Upload a resume, get a live, shareable portfolio page at a unique URL.
- **AI Interviewer** — Voice-enabled mock interview sessions with real-time transcription.

Alongside these, there's a resume analyzer with ATS scoring, an account dashboard with usage analytics, and tiered access (FREE / PREMIUM) reflected in the UI based on the logged-in user's plan.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Auth | JWT (stored client-side, attached to API requests) |
| Hosting | Vercel |
| Backend | Spring Boot REST API (separate repo) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A running instance of the MockCraft backend (local or deployed), plus its base URL

### Installation

```bash
git clone <repo-url>
cd mockcraft-frontend
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
VITE_API_BASE_URL=http://localhost:8080
VITE_RAZORPAY_OR_CASHFREE_KEY=your_public_payment_key
```

Adjust the variable names to match whatever your `src/config` or API client expects — check `src/services/api.js` (or equivalent) if these don't line up exactly.

### Run Locally

```bash
npm run dev
```

App runs at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
npm run preview   # to sanity-check the production build locally
```

Deployed builds run on Vercel, pulling from the `main` branch.

---

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/             # Route-level views (Quiz, Portfolio, Interview, Dashboard, etc.)
├── services/           # API client and request handlers
├── hooks/               # Custom React hooks
├── context/              # Auth / global state providers
├── utils/                  # Helpers (formatting, validation, slug handling, etc.)
└── assets/                   # Static assets
```

---

## Key Implementation Notes

- **Auth state** is handled via context, with the JWT attached to outgoing requests through an API client wrapper rather than scattered manually across components.
- **Portfolio URLs** are slug-based and public — the frontend has a separate unauthenticated route for rendering a portfolio by slug, distinct from the authenticated builder flow.
- **Payment flow** integrates with Cashfree checkout on the frontend, then polls a backend status endpoint after redirect rather than relying on a webhook callback to confirm payment — the UI shows a pending state during this window.
- **Speech input** for the AI Interviewer uses the browser's audio capture, streamed to the backend for transcription via Google Speech-to-Text — no speech logic lives client-side beyond capture and playback.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run linter |

---

## Roadmap

- Improve loading/error states around AI generation latency
- Migrate payment confirmation UX if backend moves to webhook-based verification
- Component-level testing coverage
- Dark mode polish across dashboard views

---

## License

Proprietary — all rights reserved. Not licensed for redistribution or reuse without permission.

## Contact

For questions about this project, reach out via the contact details on the MockCraft portfolio page.
