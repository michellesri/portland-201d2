# Week 2 Project: pizza3001
### A Cheese Odyssey... from the Future!

In lecture, we learned how to model an entity in JavaScript using objects. Now it's your turn to build an application that models the problem domain below. You will also work simultaneously with more specific style and design concepts over the course of this week.

* Before writing any code, create a new repository or folder (with a README.md) called "pizza" and do your labs in that repo/folder. Each day this week, you'll work in separate branches. Once you initialize and set up your repo today, switch to a new branch for your work. Branch names can be whatever you want, but we suggest that you use a consistent naming scheme such as 'dayX-[feature]' for the branch name, e.g., Day6-dataModel, Day7-Objects, and so on.

[Submit Your Work](https://canvas.instructure.com/courses/996678/assignments/4420835)

## Problem Domain
Jenny owns a chain of pizza stores. Her pizza company, pizza3001, is expanding. With increased business, Jenny knows she needs a better system to help manage expenses and supplies.

One of her problems is to keep track of which times delivery drivers are needed at each location. To stay competitive, pizza3001 needs to keep all deliveries under 30 minutes. To satisfy that goal in a cost-effective way, each driver is expected to make 3 deliveries per hour. Driver schedules are determined by expected demand for pizza delivery. At the same time, Jenny needs to know how many total pizzas she's selling so that she can order the right amount of supplies and ingredients.

Jenny knows you've been studying web development and asked you to improve her business' website.  She wants two pages: a public-facing page (at index.html) that visitors will see, and an internal page (at sales-data.html) to manage the business. The internal page is higher priority, so build that first.

The public-facing page has a few requirements:
- Specfic image of a pizza (to be provided later)
- List of store locations and hours (e.g., "8:00am to 2:00am, Tuesday - Sunday, closed on Mondays")
- Eye-catching line of text that says "NNNN happy Pizza Odysseys this week!", where NNN is the total number of pizzas sold that week, where the total is from the data page.
- Color palette that provides a futuristic theme/visual web page appearance
- Custom font via Google Fonts

The data page has these requirements:
- Display delivery info at various store locations. Jenny's market analysis has established the expected minimum and maximum number of pizzas and deliveries per hour.  Based on that market analysis data, here are the projected numbers for each location that your app will use to calculate results and present them on the data page:

| Time  | Min Pizza/hr  | Max Pizza/hr | Min Delivery/hr | Max Delivery/hr  |
|---|---|---|---|---|
| 8am-11am  | 0  | 4  | 0 | 4 |
| 11am-2pm  | 0  | 7  | 0 | 4 |
| 2pm-5pm  | 2  | 15  | 1 | 4 |
| 5pm-8pm  | 15  | 35  | 3 | 8 |
| 8pm-11pm  | 12  | 31  | 5 | 12 |
| 11pm-2am  | 5  | 20  | 6 | 11 |   

Create a prototype of the webpage with randomly generated data, constrainied within the boundary values in the table above.

- Jenny plans to have stores in Beaverton, Hillsboro, Downtown, NorthEast, Clackamas, and PDX-airport. Obviously the number of delivery runs must be less than or equal to the number of pizzas sold (e.g., it would not make sense for drivers to deliver 3 pizzas to 10 locations).  For each location, show a list that looks like the following example output in terms of format and the types of data to show:

Beaverton
- 8:00am 0 pizzas, 0 deliveries -- [ driver not recommended ]
- 9:00am 4 pizzas, 2 deliveries -- [ drivers recommended: 1 ]
- 10:00am 15 pizzas, 8 deliveries -- [ drivers recommended: 2 ]
- 11:00am etc., same kind of thing calculated for each hour
- 12 noon
- 1:00pm
- 2:00pm
- 3:00pm
- 4:00pm
- ...
- 1:00am

## User Stories (MVP)
- As a user, I want a webpage that displays individual store data for pizza3001, so that I can be informed about how to run my business
- As a developer, I want to use object oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand.
- As a user, I want a functional, well organized webpage that displays my data in a user-friendly fashion;
- As a user, I want my data broken out in a logical fashion so that I can make more informed decision about my inventory supply;
- As a user, I want my data compiled so that I can see my product needs as business as a whole.

## Technical Requirements
- New repository or folder set up with scaffolding and README, and cloned to local machine
- Work on non-master branch, with regular commit history and meaningful commit messages
- Good use of *object literals*; one per store model, properties/values and methods correctly constructed
- Main page meets requirements of problem domain
- Stores correctly rendering as lists to the data page

## User Stories (stretch)
 - As a developer, I want to present the store data in a table format on the webpage, so each store's data is easier to represent and understand.

# Submitting Your Assignment

In Canvas, submit:

1. GitHub URL for your git commit hash

2. Answers to the following questions.

  . How much time did you spend on this assignment?

  . How did this go, overall?

  . What observations or questions do you have about what you've learned so far?