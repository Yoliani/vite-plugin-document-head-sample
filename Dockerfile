# Use an official Node.js image as the build environment
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies based on lock file
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN npm run build

# Use a lightweight image to serve the built app
FROM node:20-alpine AS runner

# Install 'serve' to serve static files
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy build output and static files from builder
COPY --from=builder /app/dist ./dist

# Expose port 4173 (default for Vite preview) or 3000 for 'serve'
EXPOSE 3000

# Start the app with 'serve'
CMD ["serve", "-s", "dist", "-l", "3000"]
