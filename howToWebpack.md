
## Webpack Tips

#### Frontend

> Commands:
```
npm run build:dev  # creates build in dist folder.
npm run server:dev  # starts Webpack dev server. Dev server is listening for changes.
```

#### Frontend + Backend

> Commands:
```
npm run build:dev  # creates build in dist folder.
npm run watch # starts Express server and is listening for changes on backend.
--webpack watch # Listens for changes on frontend.
```

#### Clean up

Don't forget to remove webpack dist folder once you're done.

> Command:
```
npm run clean
```

