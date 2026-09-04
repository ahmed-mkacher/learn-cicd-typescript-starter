FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/src/app

ADD . .

RUN npm ci --ignore-scripts --no-audit --no-fund

RUN npm run build

CMD ["node", "dist/main.js"]
