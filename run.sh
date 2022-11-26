#!/bin/bash
set -e

# Validate if we pass the github personal access token
if [ -z "${1}" ]; then
    echo ''
    echo ''
    echo 'MISSING REQUIRED GITHUB PERSONAL TOKEN. '
    echo '   Usage ./run.sh [github_personal_token]'
    echo ''
    exit 1
fi

# Run docker compose
GITHUB_TOKEN=${1} docker-compose up
