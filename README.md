# Full Stack Project Practice

Be prepared to discuss these items with a consultant during a 1 on 1.

You may use GitHub, PowerPoint, Keynote, or any other tools you desire to
complete any part of this.

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
https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1#G1SmyvpyX-PMLzM2Y9xw1IHWvoLgIVgl1K
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
## Technologies Used

```
jQuery, AJAX, Express, Mongodb, Mongoose, CORS, JS, JSON, HEROKU, GitHub
```
