Vue, Express, Node, Mysql with Docker-compose setup for local development.


Steps to Run
Clone this repository
git clone https://github.com/LawlesssHeaven/QuickInsert.git

Navigate into the directory QuickInsert
cd your-path-to/QuickInsert

Build Docker Images and Run the stack :)

docker-compose up --build

Your app should be running on (if using native docker).:

http://localhost:8080

Be patient and wait for all for all of the NPM warnings to finish - this will only happen once. Happy developing!

Configuration
There are 3 parts to this dockerized Vue app: Frontend (Vue), Backend (Node with Express), and Database (MYSQL).

The frontend is in the 'client' folder, backend in the 'server' folder, and the database is mounted to your current directory in the 'db' folder.

Database is pre-configured for you. More can be seen in DB folder

![alt text](https://github.com/LawlesssHeaven/QuickInsert/blob/master/Capture.PNG)

Application is inserting timestamps into database every 60 seconds using Node.js scheduler and MYSQL database. After you turn it on using START button it will run in backend without user interaction. You can stop it and re-run any time you want. Below START/STOP buttons you can see last 5 inserts. Pagination is used in VUE part to display data.

TESTED ON : W10,VM UBUNTU 18.04
