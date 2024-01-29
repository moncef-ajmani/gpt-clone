# ChatGPT Clone - Spring Boot Backend and React.js Frontend

## Description

This project is a ChatGPT clone that features a Spring Boot backend and a React.js frontend. The application provides secured authentication using JWT (JSON Web Token) and includes a chat conversation powered by ChatGPT. The conversation history is stored in MongoDB, ensuring a seamless and interactive chatting experience.

## Architecture

![Architecture](https://cdn.discordapp.com/attachments/881903437246246986/1201593506901270539/arch.drawio_3.png?ex=65ca6228&is=65b7ed28&hm=b93974eabc3b1fc78913ddbe08ca6505ec6e7167dfa859921cb88d87527b4aa1&)

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

## Screenshots

### Register Page
![Register Page](https://cdn.discordapp.com/attachments/881903437246246986/1201579625076228096/image.png?ex=65ca553a&is=65b7e03a&hm=5752e2d7c7646b488452d3363b2c2b65c814c84e41a69fb95ef7bf20816aa840&)

### Login Page
![Login Page](https://cdn.discordapp.com/attachments/881903437246246986/1201580844683378758/image.png?ex=65ca565d&is=65b7e15d&hm=32e40dd503b403d960e827eff5fe5980ab250cbc41ecab32f4fc234bd8d1ab2d&)

### Home Page
![Home Page](https://cdn.discordapp.com/attachments/881903437246246986/1201579878257012746/image.png?ex=65ca5577&is=65b7e077&hm=b89e77c7a67fdf55038cedf29b5302c747658d4c28e1757af525b2792fc38836&)

### Single Conversation Page
![Single Conversation](https://cdn.discordapp.com/attachments/881903437246246986/1201579796925259949/image.png?ex=65ca5563&is=65b7e063&hm=daee60a8ca9ec50b3e6f5233367c061245be16cdb19388a1a48fe477bbf7a1bf&)




