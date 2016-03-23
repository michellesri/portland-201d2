## Updated user stories for Wednesday morning's lab

Summary: You'll render the output in a browser using **tables** rather than lists, you'll use **constructor** functions to re-organize and reduce your code, and now you have **distinct sales data** (min and max values) that is different for each location, at the bottom of this document.

### User Stories (MVP)
- As a user, I want a webpage that displays individual store data for pizza3001, so that I can monitor each location.
- As a user, I want my data broken out in a logical fashion so that I can make more informed decision about my inventory supply and need for delivery drivers.
- As a user, I want my data summarized so I can monitor the health of my business -- total weekly sales per store (e.g., "The downtown store sold NNNN pizzas last week, the Clackamas store sold MMMM pizzas last week, etc.", and total weekly sales per hour across all stores (i.e., to find a total for the "5pm to 6pm" time slot, add together the number of pizzas sold between 5pm and 6pm for each store, and do this for each time slot).
- As a user, I want pizza sales data shown in tables rather than lists.
- As a user, I want a functional, well organized webpage that displays my data in a user friendly fashion.
- As a developer, I want to use object oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand.
- As a developer, I want to implement a *constructor* function, so that I can re-use code and eliminate much redundancy in my JavaScript.

### Technical Requirements
- New git branch(es) for this assignment with regular commit history.
- Main page meets requirements of the problem domain.
- Store data are correctly rendered in <table> elements in the data page.
- Good use of a constructor function; style and syntax are correctly implemented.
- Duplicate code has been removed and DRY principles are evident.

### User Stories (Stretch)
 - As a user, I want to be able to add a new store to my webpage, so that I have the ability to work independently of my developer. This is a LARGE HUGE BIG (did we say not small?) stretch goal. There will be Forms and Events involved, which you are welcome to read ahead on and try to implement. We won't cover these in lecture until Thursday.

# Submit

Submit the following items at https://canvas.instructure.com/courses/1012436/assignments/4488788

- GitHub URL for your git commit hash

- Answers to the following questions:

. How much time did you spend on this assignment?

. How did this go, overall?

. What observations or questions do you have about what you've learned so far?

## New Store Data!

### Beaverton

| Time  | Min Pizza/hr  | Max Pizza/hr | Min Delivery/hr | Max Delivery/hr  |
|---|---|---|---|---|
| 8am-11am  | 0  | 4  | 0 | 4 |
| 11am-2pm  | 0  | 7  | 0 | 4 |
| 2pm-5pm  | 2  | 15  | 1 | 4 |
| 5pm-8pm  | 15  | 35  | 3 | 8 |
| 8pm-11pm  | 12  | 31  | 5 | 12 |
| 11pm-2am  | 5  | 20  | 6 | 11 |   

###Hillsboro

| Time  | Min Pizza/hr  | Max Pizza/hr | Min Delivery/hr | Max Delivery/hr  |
|---|---|---|---|---|
| 8am-11am  | 1  | 3  | 1 | 7 |
| 11am-2pm  | 5  | 9  | 2 | 8 |
| 2pm-5pm  | 2  | 13  | 1 | 6 |
| 5pm-8pm  | 18  | 32  | 3 | 9 |
| 8pm-11pm  | 1  | 3  | 5 | 12 |
| 11pm-2am  | 8  | 20  | 6 | 16 |

###Downtown

| Time  | Min Pizza/hr  | Max Pizza/hr | Min Delivery/hr | Max Delivery/hr  |
|---|---|---|---|---|
| 8am-11am  | 0  | 4  | 0 | 4 |
| 11am-2pm  | 0  | 7  | 0 | 4 |
| 2pm-5pm  | 2  | 15  | 1 | 4 |
| 5pm-8pm  | 10  | 26  | 4 | 6 |
| 8pm-11pm  | 8  | 22  | 7 | 15 |
| 11pm-2am  | 0  | 2  | 2 | 8 |

###North East

| Time  | Min Pizza/hr  | Max Pizza/hr | Min Delivery/hr | Max Delivery/hr  |
|---|---|---|---|---|
| 8am-11am  | 0  | 4  | 0 | 4 |
| 11am-2pm  | 0  | 7  | 0 | 4 |
| 2pm-5pm  | 5  | 15  | 0 | 4 |
| 5pm-8pm  | 25  | 39  | 13 | 18 |
| 8pm-11pm  | 22  | 36  | 5 | 22 |
| 11pm-2am  | 5  | 21  | 16 | 31 |

###Clackamas

| Time  | Min Pizza/hr  | Max Pizza/hr | Min Delivery/hr | Max Delivery/hr  |
|---|---|---|---|---|
| 8am-11am  | 2  | 7  | 3 | 5 |
| 11am-2pm  | 3  | 8  | 3 | 9 |
| 2pm-5pm  | 1  | 5  | 1 | 4 |
| 5pm-8pm  | 5  | 13  | 2 | 4 |
| 8pm-11pm  | 22  | 41  | 15 | 42 |
| 11pm-2am  | 15  | 20  | 6 | 21 |

###PDX Airport

| Time  | Min Pizza/hr  | Max Pizza/hr | Min Delivery/hr | Max Delivery/hr  |
|---|---|---|---|---|
| 8am-11am  | 0  | 4  | 0 | 4 |
| 11am-2pm  | 0  | 7  | 0 | 4 |
| 2pm-5pm  | 2  | 15  | 1 | 4 |
| 5pm-8pm  | 6  | 9  | 5 | 18 |
| 8pm-11pm  | 4  | 8  | 2 | 5 |
| 11pm-2am  | 2  | 4  | 3 | 11 |
