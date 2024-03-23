# Use Ubuntu base image
FROM ubuntu:latest

# Set working directory inside the container
WORKDIR /app

COPY package*.json /app
COPY app.js /app

# Install Node.js
RUN apt-get update && \
    apt-get install -y nodejs npm 

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
