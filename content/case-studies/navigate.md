---
slug: navigate
title: Navigate
kicker: Insurance quoting
outcome: "Quote and submission for insurance entities: extract the packet, map it to each carrier’s contract, and push it through REST integrations."
stack:
  - Ruby on Rails
  - Next.js
  - Solid Queue
  - AWS Lambda
  - Amazon Bedrock
  - Claude Opus
featured: true
anonymized: false
sort: 10
---

Navigate is a quote and submission product for the insurance industry. Insurance entities need a path from messy intake to a submission their downstream systems will accept. The packet is documents and forms. The destination is a carrier or client API with a schema that does not forgive a missing field.

I built the flow in Rails and Next.js. Extraction runs on Amazon Bedrock with Claude Opus, behind Lambda, so a document becomes structured data instead of a pile of PDFs. Solid Queue jobs process that payload to each party’s rules, then send it over REST. Linqura, AmTrust, HomeComp, and Liberty supply insurance data. Each client’s own APIs sit on the other side of the same pipeline.

What had to be true: a quote could leave Navigate in the shape the next system expected, including retries when a carrier was slow or a field failed validation. The model is a step in the job, not the product.
