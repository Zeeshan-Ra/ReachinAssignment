# ReachInbox Assignment - React.js Web Application

## Overview

This project is a React.js web application developed as part of an assignment. The goal is to use the provided designs and APIs to create a functional web app following the instructions outlined below.

## Features

1. **Login Page**
   - Implemented the login page using the design provided.
   - On successful login, the user is redirected to the Onebox screen.

2. **Onebox Screen**
   - Fetches and displays data from the Onebox API.
   - Implemented API integration for the following endpoints:
     - `GET /onebox/list` - Fetches the list of threads.
     - `GET /onebox/:thread_id` - Fetches a specific thread by ID.
     - `DELETE /onebox/:thread_id` - Deletes a specific thread by ID.

3. **Keyboard Shortcuts**
   - Implemented keyboard shortcuts within the Onebox screen:
     - Pressing **D** deletes the selected thread.
     - Pressing **R** opens the reply box.

4. **Custom Text Editor**
   - Developed a custom text editor with additional buttons:
     - **SAVE** button for saving the content.
     - **Variables** button for inserting predefined variables.

5. **Reply Functionality**
   - Implemented reply functionality:
     - Clicking the send button sends a reply via the following endpoint:
       - `POST /reply/:thread_id`
       - Request body:
         ```json
         {
           "from": "email",
           "to": "email",
           "subject": "",
           "body": "<html></html>"
         }
         ```

6. **Light and Dark Mode**
   - Implemented both light and dark modes as per the design specifications.

## Design and API Resources

- **Design File**: [Figma Design](https://www.figma.com/file/uECxqvFhEx9dn4ZuO7wqmu/Reachinbox-Assignment?type=design&node-id=0-1&mode=design)
- **API Documentation**: [Postman Collection](https://documenter.getpostman.com/view/30630244/2sA2rCTMKr#433eb613-e405-4239-9e2d-f20485b31b27)

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reachinbox-assignment.git
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.