FROM mhart/alpine-node:11 AS builder
WORKDIR /app/server
COPY package.json ./
RUN npm install
COPY . .

FROM mhart/alpine-node:11
WORKDIR /app/server
COPY --from=builder /app/server .
EXPOSE 4000
