# Courtside

Courtside is an original NBA scores and analytics app inspired by modern sports apps. It combines game tracking with prediction tools in one responsive dashboard.

## What it includes

- Live-style scores, play-by-play, possessions, and win probability
- Rosters, standings, injuries, leaders, referees, and fouls
- Shot chart using **○ for made** and **× for missed** shots
- Playoff bracket and Monte Carlo game/series predictions
- Finals, conference, seed, and award forecasts
- Roadmap for shot-quality and trade-prediction models

The current prototype uses demo data. Real-time tracking, defender distance, shot-clock, injury, referee, and betting information must come from a licensed data provider.

## Run

Requires Node.js 18+.

```powershell
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000). Run checks with `npm.cmd test`.

## How it works

The browser renders the scoreboard and analytics from a provider-independent data model. A small Node server hosts the app. A production version should use React/Next.js, an API with live WebSocket updates, PostgreSQL/Redis, Python data pipelines, and calibrated prediction models.

See [TODOME.md](TODOME.md) for the build plan.

## Legal

This is an independent educational project, not affiliated with ESPN or the NBA. Do not reuse their branding, copyrighted visuals, or data without permission; confirm a data provider's license before publishing.
