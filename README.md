# React view of Behance User API
## setup

```sh
npm install
mv config.json-example config.json
node server.js &
npm run start
```

This application requires a proxy server to work around Behance's CORS policy.  This can be found in server.js.

Additionally, you'll need an API key for use with the Behance API.  A throwaway key has been included as part of this repo but it should be replaced if you intend to use this application for more than a proof of concept.

## testing

```sh
npm run test
```

This will launch a test watcher process and will show all tests that run.  Snapshots have been included in relevant component folders and will automatically be compared against.