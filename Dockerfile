# Use an official Node.js Alpine image for a small and secure base
FROM node:20-alpine

# Set the working directory inside the container (using /opt/app is a common convention)
WORKDIR /opt/app

# Copy package.json and lock files from the repository root
COPY ./package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the Strapi app source code from the repository root
COPY . .

# Build the Strapi application for production
RUN npm run build

# Expose the Strapi port
EXPOSE 1337

# Command to start the Strapi application in production mode
CMD ["npm", "run", "start"]
