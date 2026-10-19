# RaceAtlas

RaceAtlas is a frontend-only Angular race discovery prototype. It lets a visitor search and filter fictional sample races by name, city, and distance.

> All race names, cities, locations, and dates in this project are demo data only. They are not verified real-world event information.

## Getting started

```bash
npm install
npm start
```

Open `http://localhost:4200` after Angular starts the development server.

## Commands

```bash
npm test        # Run unit tests
npm run build   # Create a production build
```

## Project structure

```text
src/
├── app/
│   ├── app.ts                         # Page-level state and feature composition
│   ├── app.html                       # Page shell
│   ├── app.css                        # Page-specific styles
│   └── features/
│       └── race-discovery/
│           ├── components/            # Reusable visual pieces for this feature
│           │   ├── race-filters/
│           │   └── race-list/
│           ├── data/                  # Local demo data
│           ├── models/                # TypeScript types shared by the feature
│           └── utils/                 # Pure, testable filtering logic and tests
├── styles.css                          # Global styles
└── main.ts                             # Angular bootstrap entry point

public/                                 # Static assets served as-is
```

## Structure guidelines

- Keep page-level coordination in `app/`.
- Add product capabilities under `app/features/<feature-name>/`.
- Keep a feature's components, models, data, and utilities together.
- Place a unit test beside the source it tests (for example, `filter-races.spec.ts`).
- Reserve `public/` for images and other static files; do not put application TypeScript there.

## Technology

- Angular 22
- TypeScript
- Angular's built-in Vitest test setup
