# Custom Express TypeScript Generator
This is a custom express typescript generator template

## Directories
### ./src/views
This directory stores .ejs files.  It is also the output directory for the webpack bundler which compiles all of the frontend files found in ./src/public
### ./src/public
This directory contains all of the frontend .ts and .scss files which are compiled and outputted to ./src/views using webpack
### ./src/common
HttpStatusCodes.ts
### ./src/routes
Routing files
### ./src/models
Type Definitions for shapes pulled from db
### ./src/repos
- Where the database lives
- Contains logic to access and modify the database.  Each file returns a default export object containing the various methods
