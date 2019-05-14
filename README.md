# 401 Advanced Javascript

## Course Goals
### Students will be able to demonstrate ...
* Complete mastery of JS Fundamentals
  * Objects, Factories, Classes
  * Standard and Arrow Functions
  * Looping, Iteration, Traversal of Arrays and Objects
  * Recursion
  * Documentation best practices with JSDoc
* Understanding of core data structures
  * When each structure is most appropriate
  * Real world applicataions of each structure
  * Looping, Iteration, Traversal
    * Stacks & Queues
    * Linked Lists
    * Trees
    * Graphs
    * Hash Tables
* Creation and operation of an Express web server
  * Static Routes
  * Dynamic Routes
  * EJS
* Creation and operation of an Express API Server
  * RESTful, Dynamic Model Management
  * Authenticated Access with RBAC
  * Swagger Documentation
* Creation and operation of a Socket.io Message Queue Server and Client Library
* Creation of a single page web app in React
* Creation of a mobile app with React Native
* Deploy a website to AWS, Heroku, Zeit, Netlify, GoDaddy
* Deploy an API & Lambda functions at AWS

### Course Takeaways / Alumni Toolkit

* Reliable, Scalable API Server
* Reliable, Scalable WWW Server
* Message/Queue Service and Client Library
* React/Redux Starter App
* React Native (Mobile) Starter App
* Stable of React and React Native Components at NPM (Styled)
  - `<Header />`
  - `<Footer />`
  - `<Modal />`
  - `<Auth />`
  - `<Rotator />`
  - `<Autocomplete />`
  - `<Draggable />` and `<Droppable />`
* Scalable SASS Layout and Theme Engine

### Course Layout and Operations
#### Daily Lecture and Labs
The facilitators folder in each day contains information for the instructional staff. Your daily lecture schedule should follow a format similar to the following, adjusting for your class needs.

* :05 - Introduction, Welcome, Announcements
* :05 - Review and Warm-up (pop-quiz, Q & A, etc)
* :15 - Whiteboarding Practice (1 Student, Live)
* :15 - Lightning Talk (1 Student, optional)
* :20 - Code Review
* BREAK
* :30 - UI, Design, or CS Concepts 
    * i.e. SASS, Menu Styling, Design Pattern, DS&A Practice/Review
    * Use this time to fill in gaps or elevate skills
* :30 - Lecture on the new concept of the day
    * Slides, Drawings, Examples, Etc.
    * This should be mostly conceptual and high level
* BREAK
* :55 - Live Code Demo
    * Supportive of the day's principle concept
* :05 - Lab Preview
    * Go over the LAB, DESIGN, and WARM-UP assignments and set expectations

### Student Operation

#### Students will **fork** the class repository
On most days, the lab folder will have some starter-code for them to copy. They will generally be making a new repository each day and copying that code in as a starting point.

It's advisable that the students first make an new org (perhaps called '401-js') that these repositories can be created in, to help them organize things better.

##### DAILY ASSIGNMENTS (Days 1,2,3,4 each week)

  * **READING**
    * Source: `DISCUSSION.md`
    * Linked directly into Canvas from the Guide Repo
    * Reading assignments should be done as articles/notes in the **wiki** of their repo fork
    
  * **DAILY WARMUP (4 per block)**
    * 1 Points (complete/incomplete)
    * :15 minutes
      * Students must timebox this.
    * Source: `warm-ups/WARMUP-daily.md`
    * Linked directly into Canvas from the Guide Repo
    * Daily practice designed to be repetitive, build muscle memory and cement the basics. 
    
  * **FUNDAMENTALS/PRACTICE (2 per block)**
    * 5 Points (complete/incomplete)
    * :45 minutes
      * Students must timebox this.
      * This is like 'circuit training' ... how much can you do in :45? More each day, eventually < :45
    * Source: `warm-ups/WARMUP-[1,2,3,4].md`
    * Linked directly into Canvas from the Guide Repo
    * Daily practice designed to be repetitive, build muscle memory and cement the basics. 
    * These repeat every 4 days.
    
  * **DS&A CODE CHALLENGE (4 per block)**
    * 5 points (3 points for whiteboard, 1 point for testing, 1 point for working code)
    * ~ 1 Hour
    * Source: `common-curriculum/data_structures_and_algorithms/Code_401/class-[05/10/15/...]/LAB.md`
    * Linked directly into Canvas from the Guide Repo
    
  * **DESIGN (4 per block - 2nd half only)**
    * 5 Points (complete/incomplete)
    * :30
    * Source: `design-assignments/DESIGN-[01,02,03,...]
    * Linked directly into Canvas from the Guide Repo
    * From Class 06 to Class 39, the students will iteratively build out a scalable "design" or "theme" which should be easily transferable to any project they do. 
    * This will be both monolithic and componentized (depending on how they implement it: Static or React). 
    
  * **LAB Assignments (4 per block)**
    * 10 Points (graded on the rubric)
    * ~ 3 Hours
    * Source: `curriculum/class-[##]-[name]/lab/LAB.md`
    * Linked directly into Canvas from the Guide Repo
    * Should be completed in a new repository for each day
    * Generally, these are smaller implementations, refactors, and practice to support the lecture concept. Not necessarily a full-scale application.
    * Code must be tested through Travis and deployed through either Heroku or AWS
    * JS Code must be documented with JSDoc
    * APIs must also be documented with Swagger
    * Students must use the README.md template to complete their assignment
    * The README requires them to have links to deployed code, Travis, functional documentation, test documentation and a UML and/or data-flow diagram.