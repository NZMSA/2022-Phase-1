# MSA 2022 RESTful API Workshop

Welcome to the RESTful API Workshop. The goal for this workshop is for you to get familar with RESTful API concepts and have some hands on experience with interactive with an API. You will perform CRUD operations, that is, Create, Read, Update and Delete operations on an API that we have created. You may use any tools to interact with the API, such as JavaScript, Python and Postman.

- Pre-requisite: https://docs.microsoft.com/en-us/learn/modules/build-web-api-minimal-api/

If you are not sure what tool to use to interact with the API, we recommend you to use [Postman](https://www.postman.com/), it is a GUI API platform for building and using APIs.

## Assignment

### Exercise 1: READ

Get a list of messages that other people have created in the API. The link to the API endpoint is: https://www.2022-nsmsa-phase-1-api.azurewebsites.net/api/message

> Hint: For this exercise, you will need to use the HTTP GET Request.

### Exercise 2: CREATE

Now that you have retrieved information from the API, let's try to do add something to the database via the API. Again, use the same endpoint, but a different HTTP method, post a message to the API: https://www.2022-nsmsa-phase-1-api.azurewebsites.net/api/message
The API takes in form-data with three key-value pair: Nickname, Message and Password. The nickname and message will be publicly displayed, whereas password will be used to authenticate you when you want to update or delete your message. Please do not put in the password that you have used somewhere else for this exercise.

> Hint: You will need to use an HTTP POST request.

After you have received the success message, you may retrieve your information using a GET request, just like you did in exercise 1.

### Exercise 3: UPDATE

After you confirm that your entry is indeed living in the database. You next task is to update the message to say something else. In order to prevent unauthorized update by other people, you will need to input your password in the HTTP header. The API endpoint takes in form-data with two key-value pair: ID (Which you can find by finding your message with the GET request) and message (Which is the new message you want to update to).

> Hint: You will want to use PATCH request for this exercise.

### Exercise 4: DELETE

Your last task is to delete an entry from the database. Again, you will need to authenticate by providing your password in the HTTP header. This API endpoint takes in form-data with simply one key-value pair: ID.

> Hint: You will want to use DELETE request for this exercise.

Note that your message won't get deleted from the database, as we want other students to see your message! But if you have received a 200 status code as a response, considered the task completed!
