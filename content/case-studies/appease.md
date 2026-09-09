---
slug: appease
title: AppEase
kicker: Insurance brokerage
outcome: "OCR into structured collections, then submissions brokers can actually send, owned in Rails."
stack:
  - Ruby on Rails
  - Sensible
  - AWS
  - PostgreSQL
featured: true
anonymized: false
sort: 30
---

AppEase is an insurance flow for brokers, not a quote skin. Intake arrives as scans and PDFs. The job is to turn that packet into data a submission can use: extract the fields, collect what is still missing, and assemble a submission that matches how the desk actually works.

OCR and extraction go through Sensible. Rails is the full stack around it: data collections, submission state, and the Control Hub operators use to review low-confidence fields, fix a document type, and send the packet on. PostgreSQL holds the collections. AWS is where the app stays up while a deal is in motion.

Sensible is a vendor. The product is what happens after the JSON comes back. A field that looks extracted is not done until it sits in a collection, survives a review, and leaves as a submission someone can defend.

What had to be true: a broker could get from a messy document to a submission without re-keying the packet into a spreadsheet, and the next form type did not require a rewrite of the workflow.
