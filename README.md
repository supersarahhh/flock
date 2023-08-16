Flock is a demo event discovery apps for users to find and connect with others in/ out of their community with similar interests.

Here's a snippet of what it looks like! 
<img width="1435" alt="Screenshot 2023-08-15 at 10 34 32 PM" src="https://github.com/supersarahhh/flock/assets/133293132/3814b8d4-13be-421e-b74c-b6cedcb02506">

<img width="756" alt="Screenshot 2023-08-15 at 11 19 44 PM" src="https://github.com/supersarahhh/flock/assets/133293132/17eeffbd-dbfb-477e-accb-c874867f6167">

<img width="1396" alt="Screenshot 2023-08-15 at 11 20 20 PM" src="https://github.com/supersarahhh/flock/assets/133293132/fcc92ee6-44f6-43da-87dc-a8c15c8ddf2e">

<img width="606" alt="Screenshot 2023-08-15 at 11 21 22 PM" src="https://github.com/supersarahhh/flock/assets/133293132/1d4e959e-2f47-4077-8e88-609105ee58d4">

 List of the Technologies used
 
  Auth0
  Monogo DB, Express, React, JS
  CSS, Spotify-Embed
 
   Logo created with: https://app.logo.com
 
 Installation instructions
   Required:
   - Mongo DB / equivalent
   - VITE + React + Spotify packages
   - Ticketmaster API Key

  Optional: 
  - Oauth

1) Once all the required packages are installed, dive into discovery key documentation and decide if you'd like to continue your app build with the event query or a different end point as the objects will need to be accessed differently otherswise.
2) Remove unneccessary svg files
3) mkdir frontend + backend folders
4) Move src, public and index.html into your front end folder
5) In your frontend folder under src -components -mkdir App, Comment, CommentSection, DetailsPage, Event, HomePage, SearchDetail, SearchPage + their respective index.jsx files
6) Before querying your API, move your API keys into .env and .env to your list of git ignore
7) In your code base whereever you are fetching/quering your API replace your apikey="" with apikey=${import.meta.env.VITE_TICKET_KEY}
8) Make sure this works correctly before moving on and pushing your code
9) Reference the codebase for example ways to design your page and fetch your API. Once your components are setup, create your backend 
10) For this demo app there is only one comment model with full CRUD but you can decide to add more or less. Make it your own.
11) Once backend is running correctly and CRUD is working, you can now connect the frontend to the back end. First mkdir a utils folder
12) In utils folder ->touch backend.js ; here you will export your CRUD functions in our comment model
13) Deploy and check for bugs.

*** NOTE  If you are using Heroku Deployment, images will diplay broken unless deployed to S3 because dynos are built to be ephemeral. A shorter workaround is to use to a url image.
    
User stories – who are your users, what do they want and why?

  I'm a music enthusiast and want to explore upcoming shows for my favorite artists.
  There's an upcoming show I want to checkout and I want to see if it's worth my time.
  I'm curious to see what shows other people are attending so I can take my loved ones.

Your Wireframes
<img width="800" alt="Screenshot 2023-08-15 at 11 46 24 PM" src="https://github.com/supersarahhh/flock/assets/133293132/47aee297-0716-4f21-9160-7518f8e2b26b">

Descriptions of any Unsolved problems or major hurdles you had to overcome

OAUTH.... it took me 3 days to get done and it's still very much flawed. With more time, I'd like to have done something more interesting with it. 

Descriptions of next steps you have planned for your application

I would like to tie OAuth with my app in a more seemless manner. Right now, it doesn't actually add a lot of value to my app, but it has potential to be further built out into something of value. 


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
