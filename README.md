### Rack Mapper


description:
=======

A visualization of geographic points mapped onto the google maps API to help bikers keep a record of bike racks in their local area.

With this app, users will be able to, from the comfort of home or out on the roads, co-ordinate their biking trips better. Without knowledge of where to legally park your bike, a biker can suffer heavy delays from having to scour city blocks for a bike rack. Likewise, planning a long-distance biking trip is difficult without the knowledge of where you can park. This was the primary inspiration for the application, as most of it's kind are restricted to mobile-only apps.

deployed link:
=======

https://rackmapper.herokuapp.com/

Demo account:
Username: demo-user 

Password: demo-password

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
