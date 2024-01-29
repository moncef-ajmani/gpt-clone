# ChatGPT Clone - Spring Boot Backend and React.js Frontend

## Description

This project is a ChatGPT clone that features a Spring Boot backend and a React.js frontend. The application provides secured authentication using JWT (JSON Web Token) and includes a chat conversation powered by ChatGPT. The conversation history is stored in MongoDB, ensuring a seamless and interactive chatting experience.

### Key Functionalities

1. **Secured Authentication (JWT):** The application ensures secure user authentication using JSON Web Tokens (JWT). Users can create accounts, log in securely, and access personalized chat features.

2. **ChatGPT Conversation:**

   - **Interactive Responses:** ChatGPT provides interactive and context-aware responses, making the chat experience more natural.
   - **Conversation History:** The application stores and displays the conversation history, allowing users to review past interactions.

## How to Run

Follow these simple steps to set up and run the ChatGPT clone on your local machine.

### 1. Clone the Project

```
git clone https://github.com/your-username/chatgpt-clone.git
```

### 2. Change Application Properties

Navigate to the backend directory and open the application.properties file. Replace YOUR_API_TOKEN with your actual API token.

```
# backend/src/main/resources/application.properties

TOKEN_OPENAI=YOUR_API_TOKEN
```

### 3. Build Docker Compose

Navigate back to the project root and run the following command to build the Docker images.

```
docker-compose build
```

### 4. Run Docker Compose

Start the containers using Docker Compose.

```
docker-compose up
```

### 5. Access the Application

The backend will be accessible at http://localhost:8080, and the frontend at http://localhost:4173.

### 6. Enjoy Chatting

Open the frontend in your web browser, create an account or log in, and start enjoying the ChatGPT clone with secured authentication and interactive chat history.



