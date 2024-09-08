steps to create frontend app:

1. Create a new project
2. Install required packages like `npm install express ejs mongoose body-parser `
3. Set up environment variables for hidden secrets that only our application can talk like `MONGODB_URI , PORT`

 --- always strings
 --- We can use `dotenv` package to set up environment variables
 --- Setup the `.env` file with the secrets in the root directory
 --- no need to export the variables in the code, `dotenv` will take care of it
 ---differnet ways for different bundlers
  for react : `REACT_APP_` prefix , for example `REACT_APP_API_KEY`
  for vite : `VITE_` prefix , for example `VITE_API_KEY` else it will be undefined.
   to access the environment variables in vite we can use `import.meta.env.VITE_API_KEY`

4. Create a config file to store and map all the environment variables.
 --- makes better maintainability
 --- ensures to returns string only

5. Vendor lockin
 --- use the services that are portable and can be moved to another cloud provider
 --- use the services that are open source and can be self hosted
 --- Services : classes, functions, or APIs that are provided by a cloud provider