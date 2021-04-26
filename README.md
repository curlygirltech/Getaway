# ShareSpace

## Overview

Sharespace is an app where hosts give guests access to their homes for the best stays in their place of choice. Hosts are able to post their home(s) for stay and guests can plan and book their accommodations based on the dates and rates. Your home away from home, Sharespace aims to give you the perfect getaway. 

## MVP

* Responsive and fuctional Front-end with working links
* Full CRUD Backend using Ruby on Rails 
* 3 tables (one with association)

## Goals

Functional full-stack app with full CRUD capabilities using Ruby on Rails. This will also include a  postgresql database with 3 tables, showing at least one association  

## Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end                                 |
|     React Router      | Front-end                           
|     Rails     | Backend                                   |      
|     Bcrypt     | Backend                                 |
|     JWT       | Backend                                |
|     Axios     | Front-end                                 |


## Wireframes

https://www.figma.com/file/YX0eYDMWEc8M2GjOkMJKo9/Sharespace?node-id=7%3A2

## Component Tree

https://whimsical.com/sharespace-HMT29H9xQ3qJsKFEhMXcK7

## Component Architecture
```
src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      
|__ components/
      |__shared
            |__ Layout.jsx
            |__ Navbar.jsx
            |__ Footer.jsx
      |__ Screens/
            |__ Navbar.jsx
            |__ Footer.jsx
            |__ SignIn.jsx
            |__ SignUp.jsx
            |__ Home.jsx
            |__ HomeDetails.jsx
            |__ HomeCreate.jsx
            |__ Homeupdate.jsx
            |__ MyAccount.jsx
      |__ containers/
            |__ MainContainer.jsx
      |__ App.js
      
|__ services/
      |__ apiconfig.js
      |__ users.js
      |__ home.js
      |__ bookings.js

```

## Time Estimates


| Task                                    | Priority | Estimated Time | Time Invested | Actual Time  |
|-----------------------------------------|----------|----------------|---------------|--------------|
| **BACKEND**                                 |          |                |               |              |
| Create tables w/association             | high      | 2hrs           |               |              |
| Create models                           | high     | 2hrs           |               |              |
| Set up CRUD on controllers              | high     | 3hrs           |               |              |
| Seed the database                       | high      | 1.5hrs         |               |              |
| Test Backend w/ Postman                 |  low       | 1.5hrs         |               |              |
| Create routes                           | high      | 3hrs           |               |              |
| Deploy Backend with Heroku              | high     | 2hrs           |               |              |
| **FRONTEND**                            |          |                |               |              |
| Create services folder/and js files     | high      | 3hrs           |               |              |
| set up handler functions in App.js      | high     | 2.5hrs         |               |              |
| create routes for screens               | high     | 2.5hrs         |               |              |
| Set up main container (API calls)       | high     | 3hrs           |               |              |
| Set up Sign in/Sign Out Authentications | low     | 3hrs           |               |              |
| Nav bar and footer                      | medium         | 1.5hrs         |               |              |
| Deploy frontend with Netlify            | high      | 2hrs           |               |              |
| **CSS/STYLING**                             |          |                |               |              |
| Responsive design                       | high     | 3hrs           |               |              |
| Media queries                           | high      | 1.5hrs         |               |              |
| Color themes                            |  low    | 1.5hrs         |               |              |
| Research and Debugging                  |  medium  | 3hrs         |               |              |
| TOTAL                                   |          | 41.5           |               |              |


## ERD Model

https://app.diagrams.net/?libs=general;uml#G1w_jGhtQVk5Qq-CahupqMrrCED49IFd7N

## Post-MVP
* Guests will be able to leave ratings and reviews based on their exeriences
* "Featured Homes" section with the highest rated stays 
* Advanced CSS using libraries



## Code Showcase


## Code Issues & Resolutions

