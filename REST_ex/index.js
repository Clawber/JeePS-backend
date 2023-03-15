// uses express
// joi input validation
const express = require('express');
const Joi = require('joi');       //capital because class
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: 'course1'}, 
  { id: 2, name: 'course2'}, 
  { id: 3, name: 'course3'}, 

]

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  // req.params to get req fields  
  const course = courses.find(c => c.id === parseInt(req.params.id));

  // if no course (error), send 404
  if (!course) {
    res.status(404).send('The course with the given ID was not found')
  }
  res.send(course);
});

// need to parse json
// post input validation
app.post('/api/courses', (req, res) => {
  // declaring schema, for input validation
  const schema = {
    name: Joi.string().min(3).required()
  };

  const result = Joi.validate(req.body, schema);
  // js truthy falsy bullshit, true when not null
  if (result.error) {
    // super dirty joi traversal
    res.status(400).send(result.error.details[0].message);
    return;
  }

  /*-----------------without joi----------------
  if (!req.body.name || req.body.name.length < 3) {
    // 400 Bad Request
    res.status(400).send('Name is required and should be minimum 3 chars')
    return;
  }
  */

  /*Joi notes
  error value   joi.validate
  */


  const course = {
    id: courses.length + 1,   //no database version
    name: req.body.name     // need to parse json first
  };
  courses.push(course);
  res.send(course);
});



app.listen(3000, () => console.log('listin'));