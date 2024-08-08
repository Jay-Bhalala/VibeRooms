# VibeRooms

VibeRooms is a virtual study room web application designed to enhance productivity and focus. Users can join customizable virtual rooms with various themes and ambient sound options. The app features real-time chat functionality. Integrated tools like a Pomodoro timer and task tracker further aid productivity.

## Features

- **Customizable Themes**: Choose from 5 different themes to customize the look and feel of your virtual study room.
- **Ambient Sounds**: Select from a variety of ambient sounds to create the perfect study environment.
- **Real-time Chat**: Communicate with other users in real-time with low latency.
- **Pomodoro Timer**: Utilize the built-in Pomodoro timer to manage work sessions effectively.
- **Task Tracker**: Keep track of your tasks and productivity with an integrated task tracker.

## Technology Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Real-time Communication**: WebSockets with socket.io
- **Database**: Firebase
- **Deployment**: Can be deployed on platforms like Heroku, AWS, or Firebase Hosting

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn
- Git

### Installing

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/viberooms.git
   cd viberooms

2. **Set up the Backend**

   Navigate to the server directory and install dependencies & Start the backend server:

   ```bash
   cd server
   npm install
   Copy code
   npm start

3. **Set up the Frontend**

   Open another terminal, navigate to the client directory, and install dependencies & start the React development server (the application should now be running on http://localhost:3000):

   ```bash
   cd ../client
   npm install
   npm start

## Usage

After setting up the project, you can access the various features through the web interface:

- **Customize your room**: Go to the settings page to choose a theme and ambient sound.
- **Chat**: Use the chat interface on the main page to communicate with others.
- **Manage Tasks**: Add and track tasks using the task tracker interface.
- **Pomodoro Timer**: Start the Pomodoro timer from the dashboard to focus on your tasks.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
