---
slug: amazon-commerce
title: Amazon-connected commerce
kicker: Marketplace
outcome: Catalog, inventory, and orders kept in step with Amazon through background jobs — not request-cycle hope.
stack:
  - Ruby on Rails
  - Amazon APIs
  - Sidekiq
featured: true
anonymized: false
sort: 30
---

An eCommerce operation that had to agree with Amazon on listings, stock, and orders. The request cycle is the wrong place to wait on a marketplace. The work was the API surface and the Sidekiq jobs that pulled Amazon into our database.

I owned that sync logic after moving from associate work into the harder integrations. When Amazon moved, the catalog had to move with it — including the failure cases, not just the happy path.

Production debugging and deploy hygiene were part of the job. A stalled job is a lying inventory number.
