#!/bin/bash

npm run build &
wait &
npm run frontendStart &
wait &
npm run serverStart &
wait