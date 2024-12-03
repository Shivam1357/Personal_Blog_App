# Step 1: Use a Node.js image as the base
FROM node:18

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the application code
COPY . .

# Step 5: Expose the application port
EXPOSE 8000

# Step 6: Start the backend server
CMD ["node", "index.js"]