# Twilio Functions

An app to demonstrate on how to call Twilio functions from another Twilio function and also connect to a local database through ngrok tunneling features.

## Getting Started

git clone the existing project and paste this code into your Twilio functions. 

### Prerequisites

* Install MySQL
* Install ngrok

### Installing

Once the local instance of MySQL up and running, make sure it is accessible via the internet. Run the following queries to check if its running on the appropriate port and networking is turned on. 

```
SHOW VARIABLES LIKE 'skip_networking';
```
This query should result in skip_networking value as off by default. 

```
SHOW VARIABLES LIKE 'port';
```
This query should result in a port value set to 3306 by default.

Let’s create and use a database by executing the following script. 

```
create database User;
Use User;
```
Once the database is selected, create a table by running the following script.

```
CREATE TABLE Users (
phone_number VARCHAR(15) NOT NULL, 
first_name VARCHAR(30) NOT NULL, 
last_name VARCHAR(30) NOT NULL, 
PRIMARY KEY (phone_number)
 );
```

## Exposing network services

TCP tunnels allow you to expose any networked service that runs over TCP and Ngrok offers a secure tunneling capabilities to expose your local development environment. Here is the script to do so.

```
$ ngrok tcp 3306
```


### Debugging the Functions
 
The best recommended approach to validate the functions is by pasting the function URl in the browser. This can be also validated using postman or Advanced rest client as shown below.


## Authors

* Pooja Srinath

## Acknowledgments

* Thanks to Anthony Wong and Alan Klein, both Senior SE's at Twilio for providing the inspiration and required help to build this project. 

## References

* https://www.twilio.com/docs/runtime/functions#getting-started-with-serverless-and-twilio-functions
* https://www.twilio.com/docs/runtime/functions/debugging
* https://www.twilio.com/docs/runtime/functions/invocation

