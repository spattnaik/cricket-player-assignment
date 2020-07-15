# Cricket-Team Assignment

### Before running the application, 
- run `yarn` or `npm install` to install dependencies.
- update the `.env` file with your database URL and Application Port. There is no requirement to create any database in mongo db manually.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn server`

Launches the node js server application. The application runs on port 8000 by default.
Consider updating the .env file for updating the port.

#### Following endpoints are available:
- GET /api/players - Get a list of all players.

- GET /api/players/:id - Get a single player.

- POST /api/players - Create a new player item
###### Parameters:
* playerNo (required)
* playerName (required)
* playerPosition (required)

- PUT /api/players/:id - Update an exsiting player. If the player does not exists, you will get a 404 result.
###### Parameters:
* playerNo (required)
* playerName (required)
* playerPosition (required)

- DELETE /api/players/:id - Delete an existing player. If the player does not exists, you will get a 404 result.


### `yarn build`

Builds the client app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

