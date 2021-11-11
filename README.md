# Documentation

Backend for Anywhere Fitness <br/>

### Instructor Schema

(/api/instructors/)<br/>

When you send .post or .put to create or edit a recipe, please make sure you are sending data to the database as structure below:

```js
{
"instructor_id": 1,
"name": "Super man",
"type": "HIIT",
"start_time": "9"
"duration": "1 h",
"intensity level": "high",
"location":"New York",
"current_number_of_registered_attendees":"",
"max_class_size":"15"
}

```

|  CRUD  | METHOD | ROUTE                           | Description             |
| :----: | :----: | ------------------------------- | ----------------------- |
|  Read  |  GET   | /api/instructors                | get all classes         |
|  Read  |  GET   | /api/instructors/:instructor_id | get one class by its id |
| Create |  POST  | /api/instructors                | create new class        |
| Update |  PUT   | /api/instructors/:instructor_id | edit class information  |

### Client Schema

(/api/clients/)<br/>

When you send .post or .put to create or edit a recipe, please make sure you are sending data to the database as structure below:

```js
{
"client_id": 1,
"class_time": 9,
"class_date": 12252021,
"class_duration": "1h"
"class_type": "HIIT",
"intensity_level": "high",
"class_location":"New York",
}
```

|  CRUD  | METHOD | ROUTE                    | Description               |
| :----: | :----: | ------------------------ | ------------------------- |
|  Read  |  GET   | /api/clients             | get all available classes |
|  Read  |  GET   | /api/clients/:clients_id | get one class by its id   |
| Create |  POST  | /api/clients             | create new class          |
| Update |  PUT   | /api/clients/:clients_id | edit class information    |
