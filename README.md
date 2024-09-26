# Markdown Editor Project

This project is a markdown editor built using React, Vite, and Bun. Both the frontend and backend are contained in a single folder to keep things simple and avoid additional boilerplate, as the backend is only a single file.

## Features
- **React & Vite**: The frontend uses React for building the UI and Vite for a fast development experience.
- **Bun**: Bun is used for both the backend server and as a package manager to streamline the development process.

## Project Structure
```bash
.
├── server.js  # Backend logic (single file)
├── src/        # Frontend React app
├── index.html  # HTML entry point
└── ...
```

## Commands
- **Start Backend**:  
  Runs the backend server with Bun.  
  ```bash
  bun run start
  ```

- **Start Frontend**:  
  Runs the React development server using Vite.  
  ```bash
  bun run dev
  ```

## Setup
1. Install Bun:  
   Follow the instructions on the [Bun website](https://bun.sh).
   
2. Install dependencies:  
   ```bash
   bun install
   ```

3. Run the frontend and backend using the respective commands mentioned above.

## Why Bun?
Bun is chosen for its minimalistic approach, fast runtime, and the ability to manage both frontend and backend dependencies seamlessly in a single environment.
