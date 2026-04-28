# Setting up with Codex Cloud

This repository is configured as a minimal starter for running tasks with **Codex Cloud**.

## What Codex Cloud is

Codex Cloud lets you delegate coding tasks to Codex in a cloud sandbox that can read your repository, run commands, and prepare changes for review.

## Prerequisites

- A ChatGPT plan that includes Codex (for example: Plus, Pro, Business, Edu, or Enterprise).
- Access to the GitHub repository you want Codex to use.
- Multi-factor authentication enabled when required by your login method.

## Quick start

1. Open Codex in ChatGPT (`chatgpt.com/codex`).
2. Connect your GitHub account.
3. Select the repository and branch you want to work on.
4. (Optional) Configure your cloud environment:
   - setup/install script
   - env vars/secrets
   - network policy
5. Submit a task prompt, for example:
   - "Fix failing tests in CI and open a PR."
   - "Add input validation for the signup endpoint."

## Suggested first task for this repo

Use a task like:

```text
Review this repository, improve the README with setup instructions, and prepare a PR.
```

## Enterprise notes

For Enterprise workspaces, an admin may need to:

- Enable Codex in workspace settings
- Configure role-based access controls
- Set up repository connector access

## References

- OpenAI Docs: Codex overview and cloud workflow
- OpenAI Help Center: Using Codex with your ChatGPT plan
- OpenAI Help Center: Enterprise admin getting started guide
