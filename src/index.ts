import express from 'express';
import { middleware } from '@amplience/dc-demostore-integration'

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/api", middleware);

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${ port }`);
});