# Documentation

Backend for Anywhere Fitness <br/>

### Users Schema

(/api/users/)<br/>

When you send .post or .put to create or edit a recipe, please make sure you are sending data to the database as structure below:

```js
{
"username":"super man",
"password":"1234hired",
"role": 1 // 1 is the instructor , 2 is the client
}
```

|  CRUD  | METHOD | ROUTE               | Description            |
| :----: | :----: | ------------------- | ---------------------- |
|  Read  |  GET   | /api/users          | get all users          |
|  Read  |  GET   | /api/users/:user_id | get one user by its id |
| Create |  POST  | /api/users          | create new class       |

### Class Schema

(/api/classes/)<br/>

When you send .post or .put to create or edit a recipe, please make sure you are sending data to the database as structure below:

```js
{
"instructor_id": 1,
"name": "Super man",
"type": "HIIT",
"start_time": "9am",
"date":"12/23",
"duration": "1 h",
"intensity level": "high",
"location":"New York",
"max_class_size":"15"
}
```

|  CRUD  | METHOD | ROUTE                  | Description             |
| :----: | :----: | ---------------------- | ----------------------- |
|  Read  |  GET   | /api/classes           | get all classes         |
|  Read  |  GET   | /api/classes/:class_id | get one class by its id |
| Create |  POST  | /api/classes           | create new class        |
| Update |  PUT   | /api/classes/:class_id | edit user information   |
