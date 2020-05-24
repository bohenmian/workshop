## Vue Events Bulletin Board

This is the code for the Vue.js [tutorial on Scotch.io](https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-introduction). In the tutorial we build a events bulletin board application and cover the basics of [Vue](http://vuejs.org/).

## Installation

1. Run `npm install`.
2. Run `node server.js`.
3. Visit [http://localhost:8080](http://localhost:8080).

## Write Dockerfile by hand

Using a node image, create a Dockerfile containing the following instructions:

1. Add metadata `author` with value `<yourname>` to the image.
1. Create a directory `/app` and make it the working directory.
1. Add all files into to the `/app` directory.
1. Install all npm packages.
1. Expose port 8000.
1. Execute the command `node index.js`.
