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
ubuntu@ec2-34-227-17-197.compute-1.amazonaws.com
cd /opt/back-end && sudo sudo git reset --hard @{u}
cd /opt/back-end && sudo git pull https://github.com/credevexp/api-aws-test.git
cd /opt/back-end && sudo npm install
cd /opt/back-end && sudo npm i
cd /opt/back-end && sudo npm start
cd /opt/front-end && sudo sudo git reset --hard @{u}
cd /opt/front-end && sudo git pull https://github.com/credevexp/ui-aws-test.git
cd /opt/front-end && sudo npm install
cd /opt/front-end && sudo npm run build
sudo systemctl restart nginx

REFLECTION