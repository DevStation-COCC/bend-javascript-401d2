# DEMOS - Component Based UI

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).  

At Code Sandbox, simply create a new app using "Git Hub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## Demo Notes
These are FUN. It's great to have the students revisit what they did in 201 and 301 with Vanilla JS and jQuery.

In fact, you might want to pair program with a student or a TA for the first 2 demos. At the least, have the class navigate while you drive. The demo here is all about a simple counter and a form field that puts its content into another tag. Pretty simple stuff, but surprizingly disconnected and tactial with both Vanilla and jQuery. Definitely shows the power of React

Highlight the fact that in react you never deal with the DOM directly or call any render methods. Your markup simply "reacts" to changes in state. This is a pretty magical revelation for the students.

## Live Coding Demo(s)

We'll be creating the same application using 3 technologies

* Render the current state of a "counter" and some "words"
* When a user changes an input field, update words and re-render
* On a button click, update the counter and re-render

### Vanilla JS -- `/demo/vanilla`
* Do the above in vanilla JS with event listeners

### jQuery and Handlebars -- `/demo/jquery`
* Swap out the vanilla event listeners for jQuery equivalents
* Bring in handlebars to do a better job of rendering

### React -- `/demo/react`
* Write it in react, with a combination of functional and class components
* Talk through (briefly) setState and magical re-rendering





