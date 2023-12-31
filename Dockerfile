# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /user/projects

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install 

# Copy the application source code to the container
COPY . .


# Expose the port on which the application will run (change if necessary)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:dev"]
