
# Chatbot Management System

This is a Node.js application that provides API endpoints for managing chatbots, users, conversations, and end users.

## Features

- User registration and authentication
- CRUD operations for users, chatbots, conversations, and end users
- Pagination for listing entities
- Search functionality for chatbots and end users

## Getting Started

### Prerequisites

- Node.js 
- npm 
- SQLite database
- sequelize 

## Routes

### Users

- `POST /users`: Create a new user
- `GET /users`: List all users
- `GET /users/:id`: Retrieve a single user
- `PUT /users/:id`: Update a user
- `DELETE /users/:id`: Delete a user

### Chatbots

- `POST /users/:userId/chatbots`: Create a new chatbot for a user
- `GET /users/:userId/chatbots`: List all chatbots for a user
- `GET /chatbots/:chatbotId`: Retrieve a single chatbot
- `PUT /chatbots/:chatbotId`: Update a chatbot
- `DELETE /chatbots/:chatbotId`: Delete a chatbot

### Conversations

- `POST /chatbots/:chatbotId/conversations`: Start a new conversation for a chatbot
- `GET /chatbots/:chatbotId/conversations`: List all conversations for a chatbot
- `GET /conversations/:conversationId`: Retrieve a single conversation
- `PUT /conversations/:conversationId`: Update a conversation (e.g., mark as completed)
- `DELETE /conversations/:conversationId`: End/delete a conversation

### EndUsers

- `POST /endusers`: Register a new end user
- `GET /endusers`: List all end users
- `GET /endusers/:endUserId`: Retrieve details of a single end user
- `PUT /endusers/:endUserId`: Update end user details
- `DELETE /endusers/:endUserId`: Delete an end user



## Controllers

### UserController

- `createUser`: Create a new user
- `listUsers`: List all users
- `getUser`: Retrieve a single user
- `updateUser`: Update a user
- `deleteUser`: Delete a user
- `createChatbot`: Create a new chatbot for a user
- `listChatbotsForUser`: List all chatbots for a user

### ChatbotController

- `getChatbot`: Retrieve a single chatbot
- `updateChatbot`: Update a chatbot
- `deleteChatbot`: Delete a chatbot
- `startConversation`: Start a new conversation for a chatbot
- `listConversationsForChatbot`: List all conversations for a chatbot

### ConversationController

- `getConversation`: Retrieve a single conversation
- `updateConversation`: Update a conversation (e.g., mark as completed)
- `deleteConversation`: End/delete a conversation
- `listConversationsForChatbot`: List all conversations for a chatbot

### EndUserController

- `registerUser`: Register a new end user
- `loginUser`: Log in an existing end user
- `listEndUsers`: List all end users
- `getEndUser`: Retrieve details of a single end user
- `updateEndUser`: Update end user details
- `deleteEndUser`: Delete an end user

### Search Functionality

You can search for specific end users or chatbots using their names. To search for end users, use the following route:

- `GET /endusers/:name`: Search for end users by name

To search for chatbots, use the following route:

- `GET /chatbots/:name`: Search for chatbots by name

### Pagination

Pagination is implemented in endpoints that return lists of entities. The default number of items per page is set to 10, but you can specify a different page and limit in the query parameters.

For example:

- `GET /users?page=1&limit=10`: Retrieve the first page of users, each page containing 10 users
- `GET /chatbots/1/conversations?page=2`: Retrieve the second page of conversations for a chatbot

### Authentication with Passport

Authentication is implemented using Passport.js. End users can register and log in to the system. Passwords are securely hashed using bcrypt before being stored in the database.

## Postman Testing

To test the API endpoints, you can use Postman:
1. Install Postman from [here](https://www.postman.com/downloads/).
2. Import the provided Postman collection to test the endpoints.
3. Set up by choosing `no environment` and set the `Content-type` as `application/json` in `Headers`.
1. **Create New User:**

   - Endpoint: `POST /users`
   - Body: Provide the following JSON data:
     ```json
     {
       "username": "your_username"
     }
     ```
   - Response: New user details will be returned.

2. **Create New Chatbot:**

   - Endpoint: `POST /users/:userId/chatbots`
   - Body: Provide the following JSON data:
     ```json
     {
       "name": "your_chatbot_name"
     }
     ```
   - Response: New chatbot details will be returned.

3. **Register New End User:**

   - Endpoint: `POST /endusers/register`
   - Body: Provide the following JSON data:
     ```json
     {
       "name": "your_enduser_name",
       "email": "your_enduser_email",
       "password": "your_password"
     }
     ```
   - Response: New end user details will be returned.

4. **Start New Conversation:**

    ```json
     {
       "text": "your text",
       "endUserId": "your_enduserid"
     }
     ```
   - Response: New conversation details will be returned.


## How to Run

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up your database configurations in `.env` file
4. Run the application: `npm start`


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Appendix

## Made with ❤️ by Manoj

This API project was created with a lot of dedication and effort by Manoj. If you find this project helpful or have any feedback, feel free to reach out. Your suggestions and contributions are always welcome!



Thank you for using and exploring this project! 😊

