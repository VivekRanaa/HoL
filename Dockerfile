# Use an official Node.js LTS version as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install Git (if not already installed)
RUN apt-get update && apt-get install -y git

# Clone the GitHub repository
RUN git clone https://github.com/VivekRanaa/HigherOrLower-Docker-and-AWS-

# Change to the cloned directory
WORKDIR /usr/src/app/HigherOrLower-Docker-and-AWS-

# Install project dependencies
RUN yarn install

# Build the Vite.js project
RUN yarn build

# Expose the port that your Vite.js app is running on
EXPOSE 5174

# Command to run your application in production mode
CMD ["yarn", "dev"]