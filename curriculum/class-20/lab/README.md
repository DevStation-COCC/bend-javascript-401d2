# LAB: Cloud Server Deployment

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

**Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or **Data/Process Flow diagram**.  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

**Break Down the Assignment**

Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask your self the following questions:

* Where should this new code live in the codebase?
* What existing code needs to be modified?
* What dependencies will I need to install?

**Map your priorities and dependencies before jumping into the code.**

---

## Getting Started

* Create an AWS Developer Account
* Create an Azure Developer Account

## Assignment
  * Multi-Server Deployment
    * API Server deployed and running at Heroku
    * Queue Server deployed and running at AWS
    * Logger Server deployed and running at Azure
  * Testing / Verification
    * Use Postman to POST, PUT, DELETE records in the API
    * View logs on Azure Server
      * The Q Server at AWS should broadcast the events
      * The Logger server at Azure should respond to them


## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
