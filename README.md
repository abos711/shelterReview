# Full Stack Project Practice

Be prepared to discuss these items with a consultant during a 1 on 1.

You may use GitHub, PowerPoint, Keynote, or any other tools you desire to
complete any part of this.

## Link to Client side

https://abos711.github.io/shelterReview-client/ - deployed site

https://github.com/abos711/shelterReview-client - Repo

Client side is your user interface to interact with the messaging board.

## Things I feel a lot more comfortable about ( a haa moments)

HTML/APP/EVENTS/API/UI process
Connecting front/back ends
deploying in GitHub

## Things I feel the need to work on

Everything but specifically narrating/speaking the language (explaining my code)
Styling
Committing more frequently

## Project Idea

What is your project idea?  How did you come up with it? Why? Who would use it?

```md
An interactive messaging board for prospective tenants and tenants alike to provide a better understanding of living conditions before signing on the dotted line.

```

## Write between 3-5 user stories

We have gone over this before. Please refer to your notes, previous repos or the
google machine if you need further assistance.

```md
As a user, I want < sign up with email, pw, pwc > so that < view listings >.
As a user, I want < sign in with email and pw > so that < view listings >.
As a user, I want < be able to change my password > so that < if I forget my password>.
As a user, I want < sign out> so that < my score can't be altered>.
As a user, I want < the forms to clear > after < i sign up/sign in/change password/sign out>
As a user, I want < message feedback> after < i sign up/sign in/change password/sign out>
As a user, I want < sign up/sign in > only when < im not logged in>
As a user, I want < sign out/change passwords > only when < im signed in>
As a user, I want < to create a new resource> then be able < to update or delete the resource>
```
Unsolved Problems:

V2 - Add several more keys per listing resource (Pricing, management, cleanliness, security)
     add review as a resource with seperate owners that can uploaded to the listing
     Add Vibe living - mixture of reviews with recommendation with bad vibe, eh vibe, and good vibe images


V3 - Create landlord resource and have listings and reviews connected to landlord in tenant search
     Tenants will have to prove they live there before giving a review.
     Paywall for landlords to see how they stack up


## Wireframes

Please create a wireframe of your planned front end.

```md
https://docs.google.com/presentation/d/e/2PACX-1vSfqvosNEG7HFoModrJrA4JNP3x7D6y7zTzhYvZiCRw73JWG4YpIWazzLt2ItdamRHCJMinNjYJvXbb/pub?start=false&loop=false&delayms=3000```

## Plan your resources

What resources will you need? What will the attributes and relationships be?

```md
Model #1
User
email: {
type: String,
required: true,
unique: true
},
hashedPassword: {
type: String,
required: true
}

Model #2
Listing:
 {
 Address: 'String'
 required: true
 Review: 'string'
 required: true


```

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your resources are related to one another
(one to many, many to many, etc).

Include an image (or a link to image) below.

```md
https://drive.google.com/file/d/1SmyvpyX-PMLzM2Y9xw1IHWvoLgIVgl1K/view?usp=sharing
```

## Routing

What routes will you need to make the proper request to your API?

```md
Listing Route
User Route
```

## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

```md
Day 1 - Set Up/Documentation besides README + API Specifications
Day 2 - Clinet - HTML + Auth Specifications
Day 3 - Client Specifications
Day 4 - Client Specifications
Day 5 - work on presentation, styling, readme, deploy
```
## Planning and a story about your development process and problem-solving strategy

Planning started with a wireframe and ERD (see links above) and working loosely off those. I started
with the API and used curl scripts to make sure I had no errors there before moving to the client side. The reason was if I encountered an error when working on the client side, I was assured it could only be on the client side.
Problem-solving - lots of googling as well as trying to be as detailed as possible while creating an issue. Being as detailed as possible typically led to discovering the solution on my own.
A Story - The one that sticks out the most was discovering using jQuery to manipulate the DOM. I got the index button to successfully make a request to the api then nothing happened. At that moment I was like wait the api has to response some how. After a lot of google and review of class material I discovered how to to use jQuery properly and the differences between index and show when translating the response.

## Technologies Used

```
jQuery, AJAX, Express, Mongodb, Mongoose, CORS, JS, JSON, HEROKU, GitHub
```
