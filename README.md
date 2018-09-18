## Developer Guide

#### Quick Start
To run the application, the first step would be install all npm packages:

```sh
npm install
```

Next, you should start API server, to start the API server, run:

```sh
npm run start-server
```

The application is bootstrapped with [create-react-app](https://github.com/facebook/create-react-app), to start the application, open another terminal session, run:

```sh
npm start
```
Then open [http://localhost:3000/](http://localhost:3000/) to see the application.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

To run tests, run:

```sh
npm test
```

To build for production, run:

```sh
npm build
```

<b>The API server are ONLY used for development.</b>

#### API Server Configuration

For developing, [json-server](https://github.com/typicode/json-server) is used as the API server.

It uses a `.json` file as database, in this project, it's under `/server` directory.

Server configuration is in `/scripts/start-json-server.js`.

You can easily edit data in `/server/db.js` to update the data for testing. <b>Remember to restart server after change data manually!</b>

For more information about [json-server](https://github.com/typicode/json-server), please visit it's website.

#### Project Structure

```
galaxy
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── config # polyfill, env, webpack, jest configs
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── server
│   └── db.json
└── src
    ├── index.js
    ├── registerServiceWorker.js
    ├── app
    │   ├── components
    │   ├── common
    │   ├── core
    │   ├── helpers
    │   ├── store
    │   └── Main.js
    └── skin
        ├── fa
        ├── image
        ├── style
        └── webfonts
```
Since the application is bootstrapped with [create-react-app](https://github.com/facebook/create-react-app), you could go to it's website to find introduction of each directories used for. Below are some differences: 
- `/src/skin` We used SCSS instead of CSS, and use a separate directory to keep all style related files.
- `/src/app/components` Used for keeping components
- `/src/app/core` Centralized dependencies import and Http request, error handling functions
- `/src/app/helpers` UI related business logic functions
- `/src/app/store` Redux store, reducers and actions

#### Redux Store Payload

```json
{
	"customers": {
		"items": [],
        "selected": null,
        "showCustomerDetail": false,
        "isFetching": false,
        "pagination": {
		    "_page": 1,
		    "_limit": 10
		},
        "sorts": {
		    "_sort": "created,id",
		    "_order": "desc,desc"
		},
        "filters": {},
        "columns": [
		    "name",
		    "status",
		    "created"
		]
	},
	"notes": {
	    "customerId": null,
	    "items": [],
	    "isFetching": false,
	    "pagination": {
		    "_page": 1,
		    "_limit": 5
		}
	},
	"errors": {
	    "SYSTEM_ERROR": [],
	    "ERROR": []
	}
}
```

#### Database Structure
```json
{
  "customers": [
    {
      "id": 1,
      "name": "Mercury",
      "address": "335 Milky Way",
      "phone": "02102110211",
      "email": "mercury@milkyway.com",
      "status": "NON_ACTIVE",
      "created": 1534442400
    }
  ],
  "notes": [
    {
      "text": "This book is required reading for anyone looking to get using D3. A mandatory introduction to a very complex and powerful library.",
      "customerId": 1,
      "authorId": 1,
      "created": 1537061697543,
      "id": 1
    }
  ],
  "users": [
    {
      "id": 1,
      "username": "jared.li",
      "displayName": "Jared Li",
      "password": "test123!",
      "avatar": "jared.li.png"
    }
  ]
}
```

##### A little tip to show the system error messages
To test the system error message UI, you can shutdown API server, refresh the page.