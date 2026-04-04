# Release runbook

This file is safe to keep in a public repo. It names the required GitHub secret,
but it does not include any secret values or private key material.

## Signed release tags

This repo creates release tags in GitHub Actions from `main`.
The workflow expects one repository secret:

- `RELEASE_SIGNING_SSH_PRIVATE_KEY`

That secret must contain the private key for the SSH signing key that GitHub
already knows about for this account.

The current expected signing key fingerprint is:

```text
SHA256:2kX0buOoOaq0Hkz859CsfPvbWmmdWQtWnKTM/xwA9M8
```

The workflow checks that the secret matches this fingerprint before it creates a
tag.

## One-time setup

Check the repo secret:

```bash
gh secret list --repo philsherry/govuk-design-system-skills
```

Find the 1Password item that matches the expected signing key fingerprint:

```bash
op item list --categories 'SSH Key'
op read 'op://<vault>/<item>/public key' | ssh-keygen -lf -
```

Set or replace the secret from 1Password:

```bash
op read 'op://<vault>/<item>/private key' \
  | gh secret set RELEASE_SIGNING_SSH_PRIVATE_KEY \
      --repo philsherry/govuk-design-system-skills
```

Check that GitHub has the matching SSH signing key:

```bash
gh api /user/ssh_signing_keys | jq -r '.[] | [.title, .key] | @tsv'
```

## Release steps

1. Update `CHANGELOG.md`, `package.json`, and `package-lock.json`.
2. Run `npm run release:check`.
3. Merge the release PR to `main`.
4. Wait for `tag-release.yml` to create the tag and the GitHub Release.

## Verification

After the workflow finishes:

1. Open the tag page in GitHub and check that the new tag shows as verified.
2. Check the release action log for the `Create and push tag` step.
3. Fetch tags locally and verify the tag:

```bash
git fetch --tags --force
git tag -v vX.Y.Z
```

## Failure checks

If the workflow fails before it pushes the tag:

1. Check that `RELEASE_SIGNING_SSH_PRIVATE_KEY` exists in repo secrets.
2. Check that the secret still matches the expected fingerprint in the workflow.
3. Check that the signing key still exists in the GitHub account signing keys.
4. Check that the release version in `CHANGELOG.md`, `package.json`, and `package-lock.json` matches.
