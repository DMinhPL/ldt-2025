# Stage 1: Build Stage
FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

# Install only required dependencies
RUN apk add --no-cache tzdata libc6-compat && \
    ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime && \
    echo "Asia/Bangkok" > /etc/timezone

# Copy the package files for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Runtime Stage
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Install runtime dependencies only
RUN apk add --no-cache tzdata libc6-compat && \
    ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime && \
    echo "Asia/Bangkok" > /etc/timezone

# Copy necessary files from the builder stage
COPY --from=builder /app/ .

# Expose the port the app runs on
EXPOSE 9028

# Start the application
CMD ["npm", "run", "start"]
