# Interactive creation of new store tables, and styling!
**Lab due 11:59 pm, Sunday, 3/27**

**Pair coding lab**

Extend your web app to include a form (on the sales data page) where the pizza chain's owner can enter new store info. The new info should cause your web app to dynamically update the sales data page to show data for the new store in addition to the tables your current app already shows. The manager should be able to add as many stores as he/she would like.

Don't forget that your summary stats (total per hour, total per store) needs to be **dynamically updated** (refreshed) to take into account the new store.

Style your app and make it look more realistic - add store addresses and hours. Tweak colors, borders (thickness, style, color, rounded corners), layout (position, margins, padding), fonts, opacity, etc.

Minimum requirements for styling:
- Create and use a CSS file. Do not use style tags or inline styling.
- Use at least one font from a CDN (such as a Google font).
- Change the default position, margin, padding, color, background-color, and opacity of at least one element.
- Draw at least one visible border and set its color, thickness, and border-radius.
- Change at least one element whose default display type is "block", and make its display type "inline" and put it next to at least one other element.
- Change at least one element whose default display type is "inline", and make its display type "block".
- If you don't have enough "spare elements" in your page to make all of these styling changes, feel free to add elements to your page (in HTML or dynamically in JS) so that you can apply these style changes to them.

**+1 extra credit** if you embed google maps that show each store's location.

**+1 extra credit** for using CSS3 flexbox features.

**+1 extra credit** for using a 3rd party layout system such as unsemantic or bootstrap.

## Extra Credit for TDD

For **1 point extra credit**, write tests that use gulp and mocha to verify at least three functions in your web app, and write at least four tests for each function - *two* tests that pass when the function works as expected, and *two* tests that passes when your function avoids incorrect behavior.

For example, suppose you have a function that concatentates two strings and returns the result as a string. One test can send 'I like the number ' and '2' to it, and expects 'I like the number 2' returned, and another test can send empty strings to it and expects an empty string back. Another test can verify that the return value is a string, and that sending two numbers to the function doesn't result in a number returned.

To get extra credit, the code in your repo should satisfy these requirements:
- Do not commit or push your node_modules folder or files (too much clutter otherwise!).
- The grader should be able to do "npm install; gulp" to run your tests.
- All of your tests must pass.

## Requirements / Hints

- As usual, create a new git branch and develop your code on that branch. You should branch from your work that you did for the previous assignment.
- By default, use min/max values used for the first store (Beaverton). **Extra credit (+1 point)**: Provide a form that is pre-filled in with Beaverton store data, but let the owner edit the values before submitting.
- Generate random values for the new store using the appropriate min/max range for each hour.
- Hint: Refer to the parameters of your existing store object constructor function as a guide on what input fields your form needs.
- Add a button to your page (HTML) and write an event listener and an event handler (JS).
- Validate user input, e.g. Don't allow empty fields where info is required.
- Build incrementally. *Test* frequently.

# Submitting
You can submit your assignment here: https://canvas.instructure.com/courses/1012436/assignments/4488802

Please submit these items:
- URL of git commit hash
- Deploy your finished app to gh_pages so you can show off your app to family and friends; you may want to list the deployment URL in your portfolio. Get help on deployment if you need it. Submit the URL of your deployed app.
- Answers to the following questions:
  - How much time did you spend on this assignment?
  - How did it go, overall?
  - What observations/questions do you have on what you've learned so far?
