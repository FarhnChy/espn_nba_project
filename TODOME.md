# Courtside build plan

## Now — turn the prototype into a real app

- [ ] Choose a licensed NBA data provider and document its terms and rate limits
- [ ] Move the frontend to TypeScript + React/Next.js
- [ ] Add a backend API and normalize teams, players, games, plays, and shots
- [ ] Replace demo data with schedules, scores, box scores, rosters, standings, injuries, and officials
- [ ] Add loading, empty, offline, and provider-error states
- [ ] Add unit, API-contract, accessibility, and end-to-end tests
- [ ] Deploy preview and production environments with secrets stored outside Git

## Next — live game intelligence

- [ ] Stream play-by-play with WebSockets or Server-Sent Events
- [ ] Derive possession, bonus state, timeouts, team fouls, and technical fouls
- [ ] Store shot location, result, shooter, period, score margin, and shot clock
- [ ] Train and calibrate a live win-probability model on past seasons
- [ ] Explain probability changes after each play and monitor model calibration

## Then — prediction lab

- [ ] Calculate offensive rating, defensive rating, pace, strength of schedule, rest, and travel
- [ ] Simulate games, playoff series, brackets, seeding, and Finals odds
- [ ] Train shot-quality models when defender/tracking data is legally available
- [ ] Forecast MVP, Rookie of the Year, and other awards with transparent features
- [ ] Build trade scenarios before attempting speculative trade-likelihood predictions
- [ ] Add accounts, favorite teams, notifications, saved brackets, and admin monitoring

## Definition of done for every feature

- Uses licensed data, works on mobile, handles missing data, is accessible, has tests, explains predictions, and does not expose secrets or copy protected branding.
