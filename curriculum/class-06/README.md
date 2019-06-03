# HTTP and REST

## Learning Objectives

* Describe the full WRRC
* Identify Clients and Servers
* Describe the operations of HTTP
  * Verbs
  * Status Codes
  * Headers
  * Requests and Responses
* Describe REST
  * Supported Verbs
  * Usage of HTTP
  * What is a resource?
  * What is an API?


## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review** 
* :15 **Lightning Talk** 
* Break 
* :30 **CS/UI Concepts** -
* :20 **Code Review** 
* Break
* :60 **Main Topic**

## Computer Science Concept:
## UI Concept:
* Navigation

## Resources
* [json server](https://github.com/typicode/json-server)

## HTTP
### [HTTP](https://tools.ietf.org/html/rfc7231)
The Hyper Text Transfer Protocol (HTTP) is a stateless request-response application layer protocol. HTTP is used to build distributed, collaborative, hypermedia information systems. HTTP is the foundation for the world wide web. Applications built using HTTP subscribe to the client-server computing model. In the client-server computing model a host designed to provide a service is called a server. Clients are hosts that make requests to that service. The HTTP specification defines how requests and responses should be formatted, but not what a service should represent. HTTP is often associated with serving `.html` files but is also used to transfer images, videos, `.json`, `.xml`, binary executables, and much more.

### HTTP Requests
A HTTP/1.1 request is formatted in text and transferred using TCP. The first line of the request contains the `METHOD`, `URL`, and `HTTP VERSION`. The following lines are the request `HEADERS`. Each header is separated by a newline character. A header is a key value pair separated using a colon. Headers containing more than one value separate each value using a semicolon. The header section of the request is terminated with an empty line. An optional body follows the header section.


|HTTP Method	| Request Has Body	| Response Has Body |	Safe	| Idempotent	| Cacheable | Function |
| --- | --- | --- | --- | --- | --- | --- |
| GET	    | No	      | Yes	| Yes | Yes	| Yes | Retrieve a resource |
| HEAD	  | No	      | No	| Yes | Yes	| Yes | Like GET but headers only |
| POST	  | Yes	      | Yes	| No	| No	| Yes | Create a resource |
| PUT	    | Yes	      | Yes	| No	| Yes	| No | Update a resource |
| DELETE	| No	      | Yes	| No	| Yes	| No | Delete a resource |
| CONNECT	| Yes	      | Yes	| No	| No	| No | Create TCP/IP tunnel |
| OPTIONS	| Optional	| Yes	| Yes | Yes	| No | Returns supported methods for a URL |
| TRACE 	| No	      | Yes	| Yes | Yes	| No | Echos retrieved request |
| PATCH  	| Yes	      | Yes	| No	| No	| No | Partial modification of resource |

`Safe` methods should only be used for information retrieval and should not change the server state.
`Idempotent` methods means if two identical requests are made they should get an identical response.
`Cacheable` means the client should be able to cache the response.

##### Example HTTP Request
```
POST /api/note HTTP/1.1
Host: api.example.com
Origin: www.example.com
Authorization: Bearer bHVsIHRoaXMgaXMgYSBmYWtlIHNlY3JldCB0b2tlbg==
Accept: application/json
Content-Type: application/json; charset=UTF-8
Content-Length: 58

{"title":"kata","content":"get 100 points on hacker rank"}
```

### HTTP Response
A HTTP/1.1 response is also formatted in text and transferred using TCP. The first line of the response contains the `HTTP VERSION`, `STATUS CODE`, and `STATUS MESSAGE`. The following lines are the request headers and are formatted exactly the same way as the request headers. The header section of the request is terminated with an empty line. An optional body follows the header section.

##### Example HTTP Response
```
HTTP/1.1 200 OK
Date: Tue, 22 Aug 2017 06:34:16 GMT
Content-Type: application/json; charset=UTF-8
Content-Encoding: UTF-8
Content-Length: 82
Last-Modified: Mon, 21 Aug 2017 12:10:38 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag: "3f80f-1b6-3e1cb03b"
Connection: close

{"id":"1234123412341324","title":"kata","content":"get 100 points on hacker rank"}
```

### REST Documentation (Swagger)

The standard for documenting REST APIs is with a "live" documentation system: Open API (formerly "Swagger")

Once generated, Swagger Docs present developers a way not only see how to use an API, but to actually use it.  Yes, this is documentation that allows for live requests from with it.

Here's an example: [Star Wars API Docs](https://app.swaggerhub.com/apis/ahardia/swapi/1.0.0#/)

* On the left, you'll see the source code for the documentation.
* On the right  is the generated "Swagger" or "Open API" documentation for the [Star Wars API](https://swapi.co/api/people)

#### Generating your own Swagger Documentation

The swagger documentation service allows you to generate the swagger documentation simply by visiting your API and analyzing the output.

* Visit and review the docs and overview at [Swagger.io](https://swagger.io)
* Sign in to the [Swagger Inspector](https://inspector.swagger.io/builder)
* Visit your API, using all applicable REST endpoints and data.
* Note that on the right side, it'll keep your history.
* Once you've gone through all of your routes, use the radio buttons select the routes you want to document.
 * Click the "Create API Definition" button 
 * Follow the instructions to import your new API documentation to Swagger Hub
 * You can leave it running there, or download the definition as .yml or .json and use it in your own project.
