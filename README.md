PROJECT NAME 
Basiq - Explore APIs

A Simple UI application used to explore couple of Basiq APIs mainly focussed on Connect & Affordability, built with React, Redux, JavaScript, and CSS.

PROJECT SCREENSHOT(s)

INSTALL & SETUP INSTRUCTIONS

Installation:

npm install
npm run build

To Run Test Suite:

npm test

To Start Server:

npm start

To Visit App:

localhost:3000/ideas

AWS DEPLOY 
https://aws.amazon.com/console/
ubuntu@ec2-3-87-68-249.compute-1.amazonaws.com
sudo git clone https://github.com/credevexp/api-basiq.git /opt/back-end
cd /opt/back-end && sudo npm install
sudo pm2 start server.js
sudo git clone https://github.com/credevexp/ui-basiq.git /opt/front-end
cd /opt/front-end && sudo git reset --hard @{u}
cd /opt/front-end && sudo git pull
cd /opt/front-end && sudo npm install
sudo npm run build
sudo rm /etc/nginx/sites-available/default
sudo vi /etc/nginx/sites-available/default
sudo systemctl restart nginx
systemctl status nginx.service

REFLECTION