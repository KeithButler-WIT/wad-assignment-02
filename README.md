# Assignment 2 - Web API.

​
Name: Keith Butler
Student Number: 20089137
​

## Features.

- Feature 1 - Popular Actors endpoint
  ​
- Feature 2 - Tv shows endpoint and parameterised URL

- Feature 3 - Private Routes

- Feature 4 - User authentication

- Feature 5 - User creation

- Feature 6 - mongoDB implementation
  ​
- Get Similar Movies:

  - Get a list of similar movies using a movie ID.
  - Get a list of similar movies using a movie genre.
  - Get a list of similar movies using a movie language.

- Get Similar Shows:

  - Get a list of similar shows using a show ID.
  - Get a list of similar shows using a show genre.
  - Get a list of similar shows using a show language.

- Get Similar actors:

  - Get a list of similar actors using an actor ID.
  - Get a list of similar actors using an actor name.
  - Get a list of similar actors using an actor popularity.
    ​

## Installation Requirements

​
Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json).
​
Describe getting/installing the software, perhaps:
​
node v19.3.0

```bat
git clone http:\myrepo.git
```

​
followed by installation
​

```bat
git install
```

​

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:
​

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```

​
​

## API Design

Give an overview of your web API design, perhaps similar to the following:
​
| | GET | POST | PUT | DELETE
| -- | -- | -- | -- | --
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A
| /api/shows |Gets a list of shows | N/A | N/A |
| /api/shows/{showid} | Get a show | N/A | N/A | N/A
| /api/actors |Gets a list of actor| N/A | N/A |
| /api/actors/{actorid} | Get a actor| N/A | N/A | N/A
| ... | ... | ... | ... | ...
​

## Security and Authentication

Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. **REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB**

Movies/Actors/Shows routes are protected and require the user to be signed in to view them.
​

## Integrating with React App

​
Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example:
​

```Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};
​
```

​

## Extra features

​
. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  
​

## Independent learning.

​
. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .
