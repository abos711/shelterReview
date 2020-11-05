# Full Stack Project Practice

Be prepared to discuss these items with a consultant during a 1 on 1.

You may use GitHub, PowerPoint, Keynote, or any other tools you desire to
complete any part of this.

## Project Idea

What is your project idea?  How did you come up with it? Why? Who would use it?

```md
The idea is a review board to give tenants or prospective tenants (both considered a user) a better understanding of living conditions for a building/apt. It will be tenant (user) focused with tenants leaving  reviews (posted anonymously - v2) and tie the review to a complex without an apt attached. This will protect tenants if they are currently a tenant.

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

V2 - Paywall for landlords to see how they stack up
     Reverse landlord reviews tenants w/proof
     Tenants will have to prove they live there before giving a review.

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
 Landlord: 'string'
 required: true
 Review:

 Model #3
 Comments/Recommendations

Tenants will be the author of the review which will be posted anonymously
and connected to both user and listing.

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
Comment Route
GET, POST, PUT/PATCH, DELETE
```

## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

```md
Day 1 - Set Up/Documentation besides README => HTML + Auth Specifications
Day 2 - Client Specifications
Day 3 - over the weekend and day 3 - API Specifications
Day 4 - work on presentation, styling, most likely play catchup
```
