## Pre-requisites
- If running locally, make sure you have node, angular is installed on your machine.
- If running in container, make sure you have docker and docker-compose installed on your machine.

## Installing dependencies for Backend
- In the root of the project run `npm install` to install all the required packages to run the server.

## Installing dependencies for Frontend
- In terminal run `cd client`
- Run `npm install` to install all the required packages so as to run the angular app

## To run the project
- At the root of the directory run `npm run dev`. Then head over to browser, enter url `http://localhost:4200` and you will see the angular app running.

## Running the project through Docker
- At the root of the directory run `docker-compose up --build -d`. Open the browser `http://localhost:4200`
- Now the changes you made on the local filesystem will be reflected on the project running on the container.

## Running test for Frontend
- cd to client and run `npm run test`

## Running test for Backend
- Run `npm run test` at the root of the project.

## To test the API on swagger UI
- Run `npm start` at the root of the project and open the browser on `http://localhost:3001/api-docs`

## Live Demo
- Open [Live](https://pactch-infotech.herokuapp.com/)

## Github Link
- [Open](https://github.com/goldy-suryan/mean-app-task)