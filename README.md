# Book Search — Code Exercise

`BookSearchApiClient` calls an HTTP API to fetch a list of books and returns
them. It works, but it's a single function mixing several concerns, and it
won't scale to where we need it to go. Assume it runs inside one of our
backend services on a modern Node runtime.

## Context

Two things are true about the world this code operates in:

- **We source books from several seller APIs.** Each seller has its own
  endpoint, its own response shape, and its own format — some return JSON,
  some return XML. A given seller always returns the same format; that's the
  seller's choice, not ours. We expect to add more sellers over time.
- **Consumers call our service for books.** By default we return JSON, but a
  consumer may request XML instead.

## Your task

Refactor `BookSearchApiClient` into what you'd consider production-ready code,
and show how it's used (e.g. in an `example-client.ts`). Please use TypeScript.
You can change anything you like — structure, dependencies, the public API.

## What we're looking at

- Your testing approach.
- How you reason about trade-offs — we care more about clear thinking than
  about ticking off patterns.

Not assessed: infrastructure, CI/CD, or a real running API — stub/fake the
network as needed. You're welcome to add infra if you think it adds value,
but it won't earn or lose points.

## Please include a short DESIGN.md

Half a page is plenty: the key decisions you made, the main alternatives you
considered, and the trade-offs (e.g. simplicity vs flexibility, where you
chose to add — or not add — abstractions). We'll use it to kick off a
discussion.

## Using AI

We use AI tools day to day, so you're welcome to here. If you do, please note
in your DESIGN.md how you used them effectively — what they were good for, and
where your own judgement mattered.

## Submitting

Please don't open a pull request. Either send a zip of your solution
(preferred) or push to a GitHub repo and share the link.
