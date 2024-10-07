### Short Description of the Project

This project is a **Resource Library Web App** Second Teacher that allows users to search for educational resources like PDFs, YouTube videos, and websites on various topics. The app features a clean and minimalistic user interface and is powered by React for the frontend and Axios for API requests. Users can input a topic, select the preferred format, and receive a curated list of resources with descriptions.

---

# Second Teacher

## Description

This **Resource Library Web App** is a simple and intuitive platform where users can search for learning resources across different formats like PDFs, YouTube videos, and websites. The application provides a clean, minimalistic user interface designed to enhance user experience while delivering high-quality resources based on the user's input.

## Features

- Search for resources by topic
- Filter results by format: PDF, YouTube video, or website
- Clean and responsive UI using React and CSS
- Backend API integration using Axios to fetch resource data
- Supports dynamic result rendering with clickable links and resource snippets

## Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Axios for HTTP requests
- **Languages**: JavaScript, HTML, CSS
- **API**: Axios is used to interact with a local or external API to fetch resources.

## Color Palette

- Liver: `#6b4b3e`
- Lion: `#c49e85`
- Light Orange: `#ffd6af`
- Ghost White: `#f8f4f9`
- Wisteria: `#bea7e5`

## Installation

### Prerequisites

- Node.js installed on your machine.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/resource-library.git
   ```

2. Navigate into the project directory:

   ```bash
   cd resource-library
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the backend server:

   ```bash
   cd backend
   npm install
   npm start
   ```
5. Open your browser and go to `http://localhost:5000`

6. Start the development server:

   ```bash
   cd frontend
   npm install
   npm start
   ```

7. Open your browser and go to `http://localhost:3000`. - main webpage

## Usage

1. Enter a topic in the search bar.
2. Select the desired format: PDF, YouTube video, or website.
3. Click the **Search** button.
4. Browse the results displayed on the page, and click on any resource to view it in a new tab.

## Project Structure

```
├── public
├── src
│   ├── App.js           # Main app component
│   ├── index.js         # Entry point for React app
│   ├── styles.css       # Styling for the app
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## API Integration

This project relies on a backend API to fetch resource data. You can connect it to a local server or an external API. Ensure the API endpoint is properly configured in `App.js`.

```js
const response = await axios.get('http://localhost:5000/search', {
    params: { topic, format }
});
```
## API
Sign Up for SERP API:  Sign up on a platform SerpApi and get your API key.
https://serpapi.com/

Find the API Key: Once registered, the API key will be available in your account dashboard. 
Paste that in your config.js file in the backend directory.
```
module.exports = {
    SERPAPI_KEY: 'YOUR_API_KEY'
};

```

## Note
This project was done for Summer Hacks Hackathon

```
