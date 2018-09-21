description: A visualization of geographic points mapped onto the google maps API to help bikers keep a record of bike racks in their local area.

deployed link: https://tranquil-scrubland-53978.herokuapp.com/

screenshot links:
![alt text](https://i.imgur.com/hhjk1hd.png)
![alt text](https://i.imgur.com/zR0tg08.png)



Tech stack desc: React front end with a node.js backend. Deployed on Heroku with the database hosted by mlab

Key parts: 
src/components/app.js: Hub, responsible for route redirection
-src/components/landing-page.js: first page visited
-src/components/dashboard.js:post-login, displays google maps api with markers
--src/components/map.js: responsible for rendering the map. children components are responsible for markers
