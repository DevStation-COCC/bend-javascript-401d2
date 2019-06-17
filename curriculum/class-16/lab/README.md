# LAB: Event Driven Applications

Create an event driven "smart app"

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

## Requirements

Refactor the provided application using best practices for modularization, asynchronous file access, and test-ability.

The application currently uses a nested callback to accept a file from the user, open it, uppercase its contents, and then save it back. It throws errors on failure and logs out success messages.

The task for today is to refactor the application to use events to surface errors and completion status, while also moving away from the big un-testable callback.

### Assignment
* The application must accept a filename as a command line parameter
  * Read the file from the file system
  * Convert it's contents to upper case
  * Write it back to the file system
* Following the write operation, report back to the user (console.log) the status
* Any and all errors must be thrown

### Implementation Details
* Ensure that every function has JSDoc Notation
* Refactor the use of callbacks for fs operations into promises
  * You can use util.promisify() to do this.
* Separate the functionality of that big callback into it's parts, so that you can run them independently as well as test.
  * Read in a file
  * Uppercase it's contents (stringify the buffer, upper case it, re-buffer-ize it)
  * Save back to the file.
* Rather than throwing errors and console.log() inline, fire events
* Implement a separate event listener to "hear" and "deal" with those events
* Modularize the system
  * Create an `event` module that has a single event emitter instance
  * Create a `logger` module that listens for and responds to events by doing a `console.log()` with something useful about the event.



### Testing
* Write tests around all of your units
  * File Read, File Save, Uppercase
  * Mock the fs module methods so that your tests don't use actual files
* Test event handlers (not events themselves)
* Use spies to help testing your logger methods (assert that console.log was called right)


## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
