#  Toolbox challenge stack built with Docker Compose
 
A basic ERN stack environment built using Docker Compose. It consists of the following:

* Javascript (ES6)
* Express
* React
* Node

### Nodejs versions:

* 14.x for backend
* 16.x for frontend

## Images

![This is a alt text.](/react-app.png "This is a sample image.")

##  Installation
 
* for this project you need docker and docker-compose
* Clone this repository on your local computer
* configure .env as needed 
* Run the `docker-compose build`.
* Run the `docker-compose up -d`.

```shell
$ git clone https://github.com/sergioMendoza/toolbox-challenge-platform.git

$ cd toolbox-challenge-platform
// copy sample.env in /toolbox-challenge-platform
$ cp sample.env .env

$ cd toolbox-api
// copy sample.env in /toolbox-api
$ cp sample.env .env

// return to root folder
$ cd ../

//run docker-compose build and up
$ docker-compose build

$ docker-compose up -d
```

Your ERN stack is now ready!!

##  Configuration and Usage

### General Information 
This Docker Stack is build for local development and not for production usage.

the project has 2 main folders:

- ./toolbox-api --> Express API project
- ./toolbox-ui  --> React website project

### Configuration
This package comes with default configuration options. You can modify them by creating `.env` file in your root directory.
To make it easy, just copy the content from `sample.env` file and update the environment variable values as per your need.

### Configuration Variables
There are following configuration variables available for docker-compose:

_**NODE_DOCKER_PORT**_

    :8080  Port to map the docker container 

_**REACT_DOCKER_PORT**_

    :80 Port to map the docker container

_**NODE_LOCAL_PORT**_

    :6868 API port

_**REACT_LOCAL_PORT**_

    :8888 UI port 

_**CLIENT_ORIGIN**_

    http://127.0.0.1:8888  

_**CLIENT_API_BASE_URL**_

    http://127.0.0.1:6868


# Usage
 
* Run `npm install` to installl dependencies
* Run `npm run start` to start the local server
* Run `cd toolbox-api && npm run test` to test the API
* Run `cd toolbox-ui && npm run test` to test the UI
* Load `http://127.0.0.1:8888` to open the React APP.

# API Endpoints

## GET /v1/api/files/data

Get a list of files data

```json
[
  {
    "file": "test2.csv",
    "lines": [
      {
        "text": "cQMDZLadeTBnndTHEkrgBpwOjwt",
        "number": "431",
        "hex": "89d7ca08334fb08975f0c885b3fe106a",
      }
    ]
  },
  {
    "file": "test3.csv",
    "lines": [
      {
        "text": "mYzhNPkJAVnOWSukjr",
        "number": "647007",
        "hex": "ae918bb5cc989a7c9e9981638c8a887e",
      },
      {
        "text": "iaNjpBzNuaYpYQjm",
        "number": "44270010",
        "hex": "8debe3e18c0028d8a9abf639213524b3",
      }
    ]
  }  
]
```
### query params
- ?fileName=test3.csv

```json
{
    "file":"test3.csv",
    "lines":[
        {
            "text":"mYzhNPkJAVnOWSukjr",
            "number":"647007",
            "hex":"ae918bb5cc989a7c9e9981638c8a887e"
        }        
    ]        
}
```


## GET /v1/api/files/list

Get list of files names

```json
[
    "test1.csv",
    "test2.csv",
    "test3.csv",
    "test4.csv",
    "test5.csv",
    "test6.csv",
    "test9.csv"
]
```

