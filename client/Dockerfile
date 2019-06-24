FROM mhart/alpine-node:11 AS builder
WORKDIR /app/web
COPY package.json .
RUN npm install
COPY . .

FROM mhart/alpine-node:11
WORKDIR /app/web
COPY --from=builder /app/web .
EXPOSE 3000
