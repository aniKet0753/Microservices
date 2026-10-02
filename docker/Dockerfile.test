FROM node:24-alpine

WORKDIR /app

#install pnpm
RUN npm install -g pnpm@11.25.0

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

COPY apps ./apps
COPY packages ./packages

# Install dependencies
RUN pnpm install

WORKDIR /app/apps/backend

# Can you filter the build down to just one app?
RUN pnpm run build

CMD ["pnpm","run","start"]