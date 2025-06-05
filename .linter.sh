#!/bin/bash
cd /home/kavia/workspace/code-generation/tictactoe-challenge-45753-a2b97ece/tic_tac_toe_game
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

