# ATD_API (Austin Transit Department Application Programming Interface)

This repository is an example an API service that returns .json transit data by consuming static [GTFS (General Transit Feed Specification)](https://developers.google.com/transit/gtfs/) data.

To run this service locally, clone the following repository and run the following commands.
- $`npm install`
- $`node index.js`

Then, open a browser to see API responses to the following urls:
- http://localhost:3000/: basic API information with examples.  
- http://localhost:3000/routes: A list of all transit routes.
- `http://localhost:3000/trips/<route>`: A list of trips for a specified route.
  - Example: http://localhost:3000/trips/3
- `http://localhost:3000/stops/<trip>/<direction>`: A list of stops for a specified trip and direction.
  - Example: http://localhost:3000/stops/2035691/S

🔴 LIVE example hosted with Google App Engine: https://atd-api.appspot.com/

----

# Developer Notes

Here is a rough outline of the development process I went about when building this application. I first outlined what I wanted to build and wrote out the rough ordered steps to completion.

### Outline

What is being built?
- A RESTful API service that handles a few simple requests and returns JSON formatted data related to Austin's transit routes.

Why build this?
- To be a backend service to be queried by a front-end service to display useful and accessible information to people needing to use Austin's Transit service.

### Ordered Development Steps:

Initial code-base Setup:
- [x] Create repository (ATD_API)
- [x] Clone local development version
- [x] Initialize npm package.json: $`npm init`
- [x] Add express: $`npm install express --save-dev`
- [x] Build and test express place-holder `/` root page.
- [x] Build and test API routes to `controller` folder.

Feature - routes: List the available routes.
- [x] Add `data` folder
- [x] Create data parser method to convert csv to javaScript Object

Feature - trips: List of trips for a specified route
- [x] Make Data Parser a shared method.
- [x] Add info and example to root API

Feature - stops: A list of stops for a specified trip and direction
- [x] Add info and example to root API

Feature - embed urls:
- [x] Add see all trips to all route objects in `/route`
- [x] Add see all stops for each direction in trips objects in `/route`


### Next Steps:

Refactor:
- [x] .txt files are queried to generate object by reading line-by-line instead of reading the entire file first. * See resources for much more efficient way of doing this.

Live deploy:
- [x] Use GCP to host a live testable API.

Tests:
- [ ] "Does each routes query return more than 1 route?"

Updates:
- [ ] Add updated GTFS data

Enhanced Features:
- [ ] List the routes that stop near a location. Specify the location using latitude and longitude. You can fetch this data by querying stops.txt, stop_times.txt, and trips.txt
- [ ] List the next five trips arriving at a particular stop. Specify the stop_id and time. You can fetch this data by querying stops.txt, stop_times.txt, and trips.txt.

### Resources

- For large files consider other reading methods (example): https://stackabuse.com/reading-a-file-line-by-line-in-node-js/
