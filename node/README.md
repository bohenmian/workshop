# Exercise III

Goals: Familiarize team with writing Dockerfile by hand

## Write Dockerfile by hand

Using a base image(debian), create a Dockerfile containing the following instructions:

1. Add metadata `author` with value `<yourname>` to the image.
2. Install the git, vim, node, npm
3. Create a directory `/usr/src/app` and make it the working directory.
4. Add all files into to the `/usr/src/app` directory.
5. Install all npm packages.
6. Expose port 8000.
7. Execute the command `node index.js`.
