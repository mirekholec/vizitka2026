#!/bin/sh
set -eu

SCRIPT_DIR=$(CDPATH= cd "$(dirname "$0")" && pwd)
WEB_ROOT="$SCRIPT_DIR/src"
PORT=${PORT:-8000}

if [ ! -f "$WEB_ROOT/index.html" ]; then
  printf 'Cannot find %s/index.html\n' "$WEB_ROOT" >&2
  exit 1
fi


printf 'Serving %s at http://127.0.0.1:%s\n' "$WEB_ROOT" "$PORT"

if command -v php >/dev/null 2>&1; then
  exec php -S "127.0.0.1:$PORT" -t "$WEB_ROOT"
elif command -v uv >/dev/null 2>&1; then
  exec uv run --no-project python -m http.server "$PORT" --bind 127.0.0.1 --directory "$WEB_ROOT"
else
  printf 'Neither PHP nor uv is available to start the static server.\n' >&2
  exit 1
fi