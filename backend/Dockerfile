# Specify Node Version and Image
# Name Image development (can be anything)
FROM node:14 AS development

# Specify Working directory inside container
WORKDIR /commit-history/src/app

# Copy package-lock.json & package.json from host to inside container working directory
COPY package*.json tsconfig.json ./

# Install deps inside container
RUN npm install

RUN npm run build

EXPOSE 4200

################
## PRODUCTION ##
################
# Build another image named production
FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${ENV}

# Set work dir
WORKDIR /commit-history/src/app

COPY --from=development /commit-history/src/app/ .

EXPOSE 4200

# run app
CMD [ "node", "dist/main"]