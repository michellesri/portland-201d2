Today in lab you will create a new GitHub repo or folder and solve several small coding problems. You can code in pairs or solo (your choice), then do some non-coding pair work towards the end of morning lab time.

**Be sure to follow instructions carefully.**

Here are some things to keep in mind:

* Write tests **first** in test.js and verify that all tests **fail** because you haven't written app code for the tested features. Commit your modified test.js and app.js to **prove you wrote your tests first!**
* Write your code as functions in app.js. Export each of your functions, e.g., exports.myFunction = myFunction;
* In app.js, do not call any functions unless the call is from inside another function. This way no app code runs unless it is run manually in the node console or it is run by tests in test.js
* You will have a lot of information in your README.md file, so you may want to have a Markdown reference handy so you can make your README.md look nice.
* Create a **new branch** for each code problem (problems 1 thru 6 below). For each branch, write/test/debug the code problem on that branch, then merge that branch into *master* when it is completed. Don't forget to pull the new master branch from GitHub into your *local* master branch after each merge.
* Don't add, commit, or push "node_modules/" files. Make sure your .gitignore is set to avoid node_modules/ folders and their contents. If you need on this, just ask!

---
#### Create a new GitHub repo or folder in your repo named lab-mar-21
You should not need instructions for this by now. Be sure to create a README.md file.

---
#### Test environment and web app files setup
Copy all code-demo/gulp/ files to a folder in your own local workspace.

Modify gulp/index.html and put in the same \<body> [code](https://github.com/codefellows/seattle-201d6/blob/master/week-1/class-05/code-samples-for-lab.html) that we used on Friday.  Develop code in compute.js that solves the code problems below, then get HTML and JS files connected to one another using the *script* tag. Modify app.js to call functions you declaried in compute.js, then render the results. You can look at the existing index.html to see an example of how to show a function argument and the function's returned value.

From inside your gulp files folder, type this to install node modules required:

  $ npm install

Still inside the same folder, run this to automate your tests:

  $ gulp

---
#### Problem 1
*(Don't forget to create a new branch!)* Write a function called **sum()** that takes in two numbers as arguments and then returns the sum of those numbers. Have it console.log() the numbers and the sum with a message that exactly follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console, and when it is finished, add-commit-push (**a-c-p**) your work to your repo, merge it to master, and then pull the new master branch from GitHub into your local master branch.

---
#### Problem 2
Write a function called **multiply()** that takes in two numbers as arguments and then returns the product of those numbers. Have it console.log() the numbers and the product with a message that exactly follows this example and uses the values that were input into the function:

"The product of 4 and 7 is 28."

**a-c-p**, yadda yadda...

---
#### Problem 3
Write a function called **sumAndMultiply()** that takes in THREE numbers as arguments and then returns two values in an array: the sum of those numbers and the product of those numbers. Use your existing sum() and product() functions to do these calculations, and be sure to turn off their console.log()s by commenting them out. Have this function do a console.log() of the numbers, the sum, and the product with two separate messages that exactly follows the examples below and uses the values that were input into the function:

"4 and 7 and 5 sum to 16."

"The numbers 4 and 7 and 5 have a product of 140."

**a-c-p**, yadda yadda...

---
#### Problem 4
Write a function called **sumArray()** that takes in an array of numbers as a single argument and then returns the sum of those numbers. Have it console.table() the array and  console.log() the sum with a message that exactly follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

Test this function by hand in the console (remember, to do this you'll need to create an array first), and when it is finished, add-commit-push (**a-c-p**) your work to your repo, merge it to master, and then pull the new master branch on GitHub into your local master branch.

---
#### Problem 5
Write a function called **multiplyArray()** that takes in an array of numbers as a single argument and then returns the product of those numbers. Have it console.table() the array and  console.log() the product with a message that exactly follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 20."

**a-c-p**, yadda yadda...

---
#### Problem 6
We're now going to put all of this output into the browser window. First, do these things to get the page structure ready:

* In the JS file, delete everything but `var pTagOne = document.getElementById('ans-one');`
* Create four more of these JS statements that have unique variable names and correspond to the other remaining 'ans' tags.
* In the HTML file, inside of the five remaining \<p> tags with the "ques" IDs, write the first sentence of the five problems above, in this format: Problem 1: Write a function called sum() that takes in two numbers as arguments and then returns the sum of those numbers.
* As we did on Friday's lab, take your console.log() messages and put those into the \<p> tags in the browser window by using the textContent property.

---
# "Pair Programming"
**(No pair coding, no new code, just comment on forked code, and make pull requests)**

This is pretty basic, just some additional practice on GitHub flow with a partner. Fork and clone each other's repos from today and take a look each other's code. Create a branch called 'comments', and go in to the HTML and JS files and leave a few comments for your partner about their code, like "That's a good variable name" or "Your code here is similar to mine for this feature" or whatever. Also, put a sentence in the README file indicating that you've reviewed the code in this repo.

Next, **a-c-p** your branch and make a pull request (PR) to your partner. Have your partner review the PR, look at the individual comments in the 'Files Changed' tab, and then close your PR *without* accepting it. Be mindful of the notifications you receive from GitHub in this process.

# Submitting Your Work

Please submit two URLs:

1. GitHub URL of the *git commit hash* in your repo where you wrote mocha tests and coded functions for problems 1 thru 6 above.

2. GitHub URL of the *PR* you made in the "Pair Programming" exercise.

And submit these in the text box in Canvas:

3. Did you learn anything from reviewing your partner's code? If so, what?

4. What was the most difficult part of the assignment today?

5. What was the easiest part of the assignment today?
