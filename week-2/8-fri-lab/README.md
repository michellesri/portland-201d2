# Interactive creation of new store tables, and styling!
**Lab due 11:59 pm, Sunday, 3/27**

**Pair coding -- Jake & Alex to assign pairs**

Extend your web app to include a form where the pizza chain owner can enter new store info. The new info should cause your web app to dynamically update the sales data page to show data for the new store in addition to the tables your current app already shows. The manager should be able to add as many stores as he/she would like.

Don't forget that your summary stats (total per hour, total per store) needs to be **dynamically updated** (refreshed) to take into account the new store.

Style your app and make it look more realistic - add store addresses and hours. Tweak colors, borders (thickness, style, color, rounded corners), layout (position, margins, padding), fonts, opacity, etc.

**+1 extra credit** if you embed google maps that show each store's location.

## Extra Credit for TDD

For **1 point extra credit**, write tests that use gulp and mocha to verify at least three functions in your web app, and write at least four tests for each function - *two* tests that pass when the function works as expected, and *two* tests that passes when your function avoids incorrect behavior.

For example, suppose you have a function that concatentates two strings and returns the result as a string. One test can send 'hello' and ' world' to it, and expects 'hello world' to be returned. Another test can verify that the return value is not a number.

To get extra credit, the code in your repo should satisfy these requirements:
- Do not commit or push your node_modules folder or files (too much clutter otherwise!).
- The grader should be able to do "npm install; gulp" to run your tests.
- All of your tests must pass.

## Requirements / Hints

- By default, use min/max values used for the first store (Beaverton). **Extra credit (+1 point)**: Provide a form that is pre-filled in with Beaverton store data, but let the owner edit the values before submitting.
- Generate random values for the new store using the appropriate min/max range for each hour.
- Hint: Refer to the parameters of your existing store object constructor function as a guide on what input fields your form needs.
- Add a button to your page (HTML) and write an event listener and an event handler (JS).
- Validate user input, e.g. Don't allow empty fields where info is required.
- Build incrementally. *Test* frequently.

# Submitting

- URL of git commit hash
- Answers to the following questions:
  - How much time did you spend on this assignment?
  - How did it go, overall?
  - What observations/questions do you have on what you've learned so far?
