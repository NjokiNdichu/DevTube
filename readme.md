# DevTube

DevTube is a web application that utilizes the YouTube API to offer users a curated selection of programming language tutorials and projects. Users can search for tutorials by language, filter results, and watch videos directly within the application.

## Features

- **Search and Filter**: Search for programming language tutorials and filter results based on different criteria.
- **Watch Videos**: Play videos directly within the app without needing to navigate to YouTube.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Requirements

- A modern web browser
- A web server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for Visual Studio Code)
- YouTube Data API v3 key

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/devtube.git
   cd devtube
 
2. **Set up a web server**

If you're using Visual Studio Code, you can install the Live Server extension and open the project with it.  
Alternatively, you can use any other web server to serve the files in the project directory.

3. **API Key Setup**

To use the YouTube API, you need to obtain an API key:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Enable the YouTube Data API v3 for your project.
4. Navigate to "Credentials" and create an API key.
5. Copy the API key.

Once you have your API key:

1. Open the `index.js` file in your text editor.
2. Replace the placeholder API key with your actual key:

   ```javascript
   const API_KEY = 'your_api_key_here';
   
   Replace `your_api_key_here` with the API key you copied.

## Running the Server

To run the web application:

1. **Start your web server**:

   - If using Live Server, simply click "Go Live" in Visual Studio Code.
   - If using another web server, navigate to the project directory and start the server.

2. **Open your browser and navigate to**:

   ```bash
   http://localhost:5500

3. **Replace `5500` with your server's port number if different.**

The application should now be running, and you can begin searching for tutorials.

## Usage

- **Search**: Enter a programming language or topic in the search bar to find relevant tutorials.
- **Filter**: Use the filter options to narrow down results based on criteria such as language or difficulty level.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
