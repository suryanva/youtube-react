## Project Name

- Youtube Clone

## Description

This project is a React application that fetches and displays popular YouTube videos using the YouTube Data API v3.

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later) or yarn

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/suryanva/youtube-react.git
cd youtube-react
```

### 2. Install Dependencies

Use npm to install the project dependencies.

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of your project. Add your YouTube API key to the file:

```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
```

Replace `your_youtube_api_key_here` with your actual API key from the [Google Developers Console](https://console.developers.google.com/).

### 4. Run the Development Server

Start the development server with the following command:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173` by default.

## Project Structure

- `src/`: Contains the main source code for the project.
  - `components/`: Contains React components.
  - `utils/`: Contains utility functions and constants.
  - `App.jsx`: The main application component.
  - `main.jsx`: The entry point of the React application.

## Using YouTube API v3

The application uses the YouTube Data API v3 to fetch and display popular videos.

### API Key

The API key is stored in the `.env` file and accessed using `import.meta.env.VITE_YOUTUBE_API_KEY`.

### Constants

In `src/utils/constants.js`, the API URL is constructed as follows:

```javascript
export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${
  import.meta.env.VITE_YOUTUBE_API_KEY
}`;
```
