## Developer Guide

#### Getting Start
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

#### Store Payload
```json
{
	"customers": {
		"items": [{
			"id": 1,
			"name": "Mars",
			"phone": "",
			"address": "",
			"status": "PROSPECTIVE",
			"created": 1534442400
		}],
		"pagination": {
			"page": 1,
			"limit": 20
		},
		"isFetching": false,
		"selected": null
	},
	"notes": {
		"customerId": 1,
		"items": [{
			"id": 1,
			"text": "someting is happening",
			"author": {
				"id": 1,
				"name": "Jared Li"
			},
			"created": 1534442400
		}],
		"pagination": {
			"page": 1,
			"limit": 20
		},
		"isFetching": false
	},
	"user": {
		"id": 1,
		"name": "Jared Li"
	}
}
```