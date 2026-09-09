# Abyan Patnam — Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Personal portfolio site. **Live at [abyanpatnam.vercel.app](https://abyanpatnam.vercel.app).**

## Running it

```bash
npm install
npm start          # http://localhost:3000
```

```bash
npm run build      # production bundle into build/
npx tsc --noEmit   # typecheck only
```

## Where things live

| Section | Component | Styles |
|---|---|---|
| Hero + typewriter | `src/components/Main.tsx` | `assets/styles/Main.scss` |
| About + photo carousel | `src/components/About.tsx` | `assets/styles/About.scss` |
| Education | `src/components/Education.tsx` | `assets/styles/Education.scss` |
| Career timeline | `src/components/Timeline.tsx` | `assets/styles/Timeline.scss` |
| Skills | `src/components/Expertise.tsx` | `assets/styles/Expertise.scss` |
| Projects | `src/components/Project.tsx` | `assets/styles/Project.scss` |
| Contact form | `src/components/Contact.tsx` | `assets/styles/Contact.scss` |

Most sections read from a single array at the top of their component, so adding
an entry is one object and nothing else. `Project.tsx` and `About.tsx` are the
clearest examples.

Shared bits:

- `assets/styles/_variables.scss` — the accent colours and section padding. One
  edit here changes the scheme everywhere.
- `components/Reveal.tsx` — scroll-triggered fade/slide wrapper used by most
  sections. Note it writes an **inline** `transform`, so hover transforms belong
  on a child element, never on the `Reveal` itself.
- `components/Typewriter.tsx` — the hero's typing animation.
- `components/LoadingScreen.tsx` — the splash on first paint.

Gallery photos are `assets/images/gallery/photoN.jpg`, resized to 1600px on the
long edge; captions and ordering are set in `About.tsx`.

## Deployment

Hosted on Vercel, connected to this repo. Production tracks the **`master`**
branch, so any push to `master` deploys automatically — there is no promote
step. Anything pushed to another branch builds as a Preview instead.

## Credits

Originally built from a React portfolio template released under MIT with no
attribution required. See `LICENSE`.
