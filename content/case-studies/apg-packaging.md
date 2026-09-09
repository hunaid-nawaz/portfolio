---
slug: apg-packaging
title: APG Packaging
kicker: Operations portal
outcome: "A Next.js portal on Smartsheet: admin and customer dashboards, Excel in and out, sync jobs, and a chat that can ask the sheet."
stack:
  - Next.js
  - Docker
  - Smartsheet APIs
  - Dynamic View
featured: true
anonymized: false
sort: 50
---

APG Packaging needed a portal, not another spreadsheet login. Admins and customers had to see the same operation through different doors. Smartsheet was already the system of record. The app had to pull that data, apply the formulas the desk already trusted, and give people a dashboard they could use without living in the sheet.

I built the portal in Next.js and shipped it in Docker. Smartsheet APIs and Dynamic View split admin and customer access. Background sync jobs write changes back to the sheet so the portal is not a one-way export. The app generates Excel from the computed data, and it accepts an upload: each row is matched on an identifier, new rows are created, existing rows are updated. An LLM chat sits on the same dataset so someone can ask about the numbers without exporting first.

What had to be true: a file that left the portal still agreed with Smartsheet after the next sync, and an upload could not silently duplicate a row the identifier already knew.
