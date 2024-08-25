# Use Node.js v18.17.1 as the base image
FROM node:alpine3.19

# Set the working directory in the container
WORKDIR /app

# Copy application code
COPY . ./

# Install dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
