# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

RUN npx playwright install --with-deps

# Copy the rest of the application files
COPY . .

# Set the entrypoint command to run the Playwright script
CMD ["npx", "playwright", "test"]
