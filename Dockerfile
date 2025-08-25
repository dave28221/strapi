# Use the official Strapi base image for Node.js v20
FROM strapi/base:20

# Set the working directory inside the container
WORKDIR /opt/app

# Copy package.json and lock files
COPY ./app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your Strapi app source code
COPY ./app .

# Build the Strapi application for production
RUN npm run build

# Expose the Strapi port
EXPOSE 1337

# Start the Strapi application
CMD ["npm", "run", "start"]
