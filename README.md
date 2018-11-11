description:
=======

A visualization of geographic points mapped onto the google maps API to help bikers keep a record of bike racks in their local area.

deployed link:
=======

https://tranquil-scrubland-53978.herokuapp.com/

Demo account:
Username: xxx
Password: xxxxxxxxxx

planned updates:
=======

1). Button to automatically enter current location

2). map interactivity to click the map to place location

3). marker interactivity to display information (avg rack occupancy, image)



screenshot links:
=======

https://i.imgur.com/hhjk1hd.png

https://i.imgur.com/zR0tG08.png

=======
![alt text](https://i.imgur.com/rR3rWjW.png)
![alt text](https://i.imgur.com/jUt0AjB.png)


Tech stack desc:
=======

React front end with a node.js backend. Deployed on Heroku with the database hosted by mlab mongo database

Repo for server:
https://github.com/rcureta/Bike-rack-server

Key parts: 
=======


src/components/app.js: Hub, responsible for route redirection

src/components/landing-page.js: first page visited

src/components/dashboard.js:post-login, displays google maps api with markers

src/components/map.js: responsible for rendering the map. children components are responsible for markers
