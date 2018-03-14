# img-filter-service
A simple restful service for processing request data (filtering, validation and transforming).

## Requirement

We'll post some JSON data to the URL you provide. You'll need to filter that JSON data and return a few fields. Here's an example request and an example response.

#### Details

From the list of shows in the request payload, return the ones with DRM enabled (drm: true) and at least one episode (episodeCount > 0).
The returned JSON should have a response key with an array of shows. Each element should have the following fields from the request:
image - corresponding to image/showImage from the request payload

slug

title

#### Error Handling

If we send invalid JSON, You'll need to return a JSON response with HTTP status 400 Bad Request, and with a `error` key containing the string Could not decode request. For example:

{
    "error": "Could not decode request: JSON parsing failed"
}

## Teach Stack Choice
1. Express.js is used as a http server framework for building the restful API.

2. The filtering and validation processing is performed by:
[express-request-parameters](https://github.com/Jokero/express-request-parameters) module.

3. The transforming  processing is performed by:
[json-transforms](https://github.com/ColinEberhardt/json-transforms) module.

4. Heroku is used for cloud hosting

## Key Decisions
1. why choose express.js.

***Express.js is the most popular http server framework,  nearly a standard for Node.js web applications.

2. why choose express-request-parameters?

***[express-request-parameters](https://github.com/Jokero/express-request-parameters) is a express.js middleware for processing request data.

...[express-request-parameters](https://github.com/Jokero/express-request-parameters) process flat and nested json objects using filters, default values and validators.

...The filter and validation rules can be defined declaratively on a single javascript file which is easy to use.

2. why choose json-transforms?

...[json-transforms](https://github.com/ColinEberhardt/json-transforms) provides a recursive, pattern-matching approach to transforming JSON data.

...Transformations are defined as a set of rules which match the structure of a JSON object.

...The rule is based on jspath which is easy to define.

4. why choose Heroku?

...Really easy to deploy and free hours.

## Test
Try [test case](https://www.getpostman.com/collections/2591454a5eb9f0758f1d) on Postman.

#### The endpoint on Heroku

https://gavinfilterservice.herokuapp.com


