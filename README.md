# Interior Design Service Provider Website

This project is a comprehensive web application for an interior design service provider, built using modern web development technologies. The website showcases the services offered, provides a platform for potential clients to get in touch, displays completed projects, and offers detailed information about the company.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Pages](#pages)
5. [Installation](#installation)
6. [Usage](#usage)
7. [License](#license)

## Project Overview
The Interior Design Service Provider website is designed to give users a seamless experience in exploring interior design services. It features a responsive design, a user-friendly interface, and a robust backend to handle form submissions and project data.

## Technologies Used
- **Frontend:**
  - React.js
  - HTML5
  - CSS3
  - JavaScript

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB

## Features
- **Home Page:** Welcomes visitors with an overview of services and a call-to-action.
- **Services Page:** Detailed descriptions of the various services offered.
- **Get in Touch Page:** A form for potential clients to reach out with inquiries.
- **About Us Page:** Information about the company, its mission, and the team.
- **Completed Projects Page:** Gallery and descriptions of completed interior design projects.
- **FAQs Page:** Frequently asked questions with their answers.

## Pages

### Home Page
The home page provides an overview of the interior design services, highlights key features, and includes a call-to-action button to encourage visitors to explore further or get in touch.

### Services Page
The services page outlines all the interior design services offered by the provider. Each service is described in detail to inform potential clients about what to expect.

### Get in Touch Page
The get in touch page features a contact form where visitors can submit their inquiries. The form includes fields for name, email, phone number, and a message. The backend handles form submissions and stores the data in a MongoDB database.

### About Us Page
The about us page provides detailed information about the company, its mission, vision, and team members. It helps build trust and rapport with potential clients by showcasing the company’s background and expertise.

### Completed Projects Page
This page showcases a gallery of completed interior design projects. Each project includes images and a brief description, demonstrating the quality and scope of work done by the provider.

### FAQs Page
The FAQs page addresses common questions and concerns that potential clients might have. It provides clear and concise answers to help visitors make informed decisions.

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/interior-design-service-provider.git
   cd interior-design-service-provider
   ```

2. **Install frontend dependencies:**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add your MongoDB connection string and any other necessary environment variables.

5. **Run the application:**
   ```bash
   # Run backend server
   cd server
   npm start

   # Run frontend development server
   cd ../client
   npm start
   ```

## Usage
- Visit `http://localhost:3000` to view the website in your browser.
- Use the navigation bar to explore different pages and features.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
