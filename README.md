# Project Name: News & Blogs

**Description:** A web application that provides news and blog features, allowing users to view and interact with news articles, create, & edit blog posts.

## Tech Stack:
- **Frontend:** React, JavaScript, SCSS
- **APIS:** OpenWeatherMap, GNews
- **State Management:** Context API
- **Dependencies:** date-fns, boxIcons, FontAwesome
- **Build Tool:** Vite
- **Backend:** Browser's local storage

## Main Features:
- **News Section:** Displays a list of news articles fetched from the GNews API in 9 different categories & the ability to bookmark articles for later.
- **Search Functionality:** Allows users to search for news articles and blog posts.
- **Blog Section:** Allows users to view, create, delete and edit blog posts.
- **Weather Section:** Displays the current weather for a given location, fetched from the OpenWeatherMap API.
- **Calender:** Displays an up-to-date responsive calender.
- **Responsive Design:** The application is designed to be responsive and work on various devices.

## Getting Started:

To get started with the project, follow these steps:
1. Clone the repository using `git clone`.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Open the application in your web browser using the URL provided by the development server.

### API Keys:

To use the application, you'll need to provide your own API keys for the OpenWeatherMap and GNews APIs. You can do this by creating a `.env` file in the root of the project and adding the following variables:
- `VITE_OPENWEATHER_API_KEY`
- `VITE_GNEWS_API_KEY`

### Project Demo:
https://news-blogs-red.vercel.app/
