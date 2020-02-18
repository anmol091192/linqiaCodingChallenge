# Twitter Content Lab

Twitter Content Lab is a simple webApp to display N sorted tweets with one or more hashtags. Tweets can be sorted based on favourites , retweets and followers count.

## Archtitecture and Design 

### The architecture for this app is as follows:

Client -> middleware -> Twitter Api

- Client     : It is only used to display , send and fetch the information needed.
- Middleware : It is used to setup the link with the twitter api using the keys needed. Middleware then sends the request obtained from the client and retrives the information from the twitter API and send it back again to the client for it to be displayed.

### Design design : 

Tech used:

- React
- Css for styling

Design :

- Create-react-app is used to setup the boilerplate for the app.
- I have declared the react components via a function.
- I have used hooks instead of component lifecycles to set the states as it popular among developers and also it reduces the bundle size.
- I have tried to use ES6 syntax as much as possible.
- I have used arrow function to bind this vairable with the function as I am using functions instead of class.
- I have used Css to style my components because not a lot of styling were changing dynamically for this app.
- Could have made Utils folder to reuse the logic if there were more components. As for now just kept them in the form.js file as they are not required elsewhere.
- I have placed each component in it own folder and if that components have sub-components they are placed within that folder itself.




## Getting Started


### Prerequisites

What things you need to install the software and how to install them

```
Node
express
```

### Installing


Clone repository

```
git clone https://github.com/anmol091192/linqiaCodingChallenge.git
```

Enter the Repository

```
cd linqiaCodingChallenge
```

Install modules and setup server

```
npm install
```

Enter front-end

```
cd client
```

Install modules and setup client

```
npm install
```

Start app

```
cd ..
npm run dev
```

App wilL be running on : http://localhost:3000/

## Deployment

app is deplpoyed on heroku : https://fathomless-river-42114.herokuapp.com/

## Built With

* [React] - The web framework used
* [NPM] - Dependency Management
* [Express]- Web Framework
* [twit]- Twitter npm package


## Versioning

1.0.0

## Authors

* **Anmol Khandekar**

