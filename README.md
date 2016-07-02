# Authentication with React & Flux
> An authentication application utilizing React + Flux + React Router

![](demo.png)

## Introduction:

* React: is a JavaSciprt library for creating user interfaces.
* Flux: is application architecture that Facebook uses for building client-side web applications.
* Webpack: is a tool for bundling all dependencies (node modules) into javascript file.
* Babel: is a tool using for trasforming in your code, such as transform JSX to JS, ES6 to ES5.

## Installation:

### Development Environment: Run in webpack-dev-server

1.Install all node modules (build into *node_modules* folder) 

```
npm install
```

2.Start webpack-dev-server. You can change config of server (IP, port) in *package.json*. 

```
npm start  
```

3.Go to url

```
http://localhost:8080
```

### Production Environment: Run in nginx

1.Bundle all node modules into a javascript file and include it into html by script tag. Using *path* and *filename* in *webpack.config.js* to specify the information of bundle file.

Run

```
npm run build 
``` 

2.Config apache or nginx to run in browser.  

## Login

```
Email: user1@gmail.com
Password: 123456
```