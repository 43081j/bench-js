#!/bin/bash
set -e

CORE_FILES=$(git diff --name-only origin/main...HEAD -- \
  'src/scripts/update-readme.ts' \
  'src/run-suite.ts' \
  'package.json' 2>/dev/null || true)

if [ -n "$CORE_FILES" ]; then
  echo "Core files changed - running all benchmarks" >&2
  echo "ALL"
  exit 0
fi

if [ "$GITHUB_EVENT_NAME" = "workflow_dispatch" ]; then
  echo "Manual trigger - running all benchmarks" >&2
  echo "ALL"
  exit 0
fi

CHANGED_FILES=$(git diff --name-only origin/main...HEAD -- \
  'src/benchmarks/*.ts' 2>/dev/null || true)

if [ -z "$CHANGED_FILES" ]; then
  echo "No benchmark files changed" >&2
  echo ""
  exit 0
fi

SUITES=$(echo "$CHANGED_FILES" | sed 's|src/benchmarks/||g' | sed 's|\.ts$||g' | tr '\n' ' ' | xargs)

echo "Changed suites: $SUITES" >&2
echo "$SUITES"
