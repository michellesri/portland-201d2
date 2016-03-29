## New week, new project!
# BusMall

You're hired by a startup named BusMall, whose product is similar to the SkyMall catalog found in airplane seatback pockets, a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel and nausea induced by jet fuel fumes. But in this case, BusMall catalogs are placed on Portland transit system buses (whose overall travel times are now comparable to cross-country flights, after all...).

Catalogs are expensive to print and distribute, products cost resources to make and store, and BusMall is a lean startup that carefully watches expenses, so it will feature only products in its catalog that are likely to sell well. Thus BusMall will do market analysis on proposed products to gauge consumer interest before actually listing them in its catalog.

BusMall wants a web app that shows potential products to individuals in focus groups, three products at a time (three images side by side in a row), so you'll need to manage the size and aspect ratio of the images, and may need to edit them a bit by cropping them (alternatively, you can set images' CSS background-size to "cover" or "contain").

Your web page should show three randomly selected product images and let users select the product they'd be most likely to purchase out of the three images, then repeat for a total of 16 selections ("votes").

To keep the marketing analysis unbiased, do not show voting results before all 16 votes have been cast; even after 16 votes, do not automatically show the results; instead, BusMall wants you to show two buttons on the page: one to show voting results, the other to let the user vote 8 more times then show results automatically after the 8th additional vote.<br>
[**Today**: hide/show the two buttons, but implement the callback only for the "show results" button]<br>
[**Tomorrow**: Implement the "8 more votes" button's callback.]

To show results, your app should show product votes as a histogram.<br>
[**Today**: Draw the histogram using text characters, DOM elements (e.g., empty rectangles with a solid background color, whose size is proportional to the number of votes for its associated product), or a dynamically generated HTML table.]
[**Tomorrow**: Draw the histogram using a &lt;canvas&gt; element and a graphics library.]

BusMall is interested not only in the total number of votes, but also the percentage of times that an item was clicked when it was shown. Thus your app must also track of how many times each image has been displayed regardless of whether it was ever selected.

[**Tomorrow**: BusMall also requires a professional-looking app, so use a custom font, color palette, layout with semantic HTML (and maybe flexbox, unsemantic, bootstrap, Skeleton, or other layout library). Choose aesthetically appealing style settings such as font size and weight, padding, borders, margins, etc.]

# User Stories

**DO THIS STEP FIRST**  Part of your assignment is to write your own user stories. Consider the multiple roles involved: marketing research team, developer, focus group user. The commit logs in your repo will have a few initial commits for the scaffolding process (LICENSE, README.md) but next, you should have a 'user stories' commit in place *before* you write any web app code.

## Steps/features due end of Tuesday

- Create a new repo or folder for this weekly project called *bus-mall*.
- Scaffold your repo with the usual README.md and LICENSE. Clone your repo and add an *img/* folder to your local workspace to hold product images.
- Write the purpose of your app in README.md, then add your user stories, then git **a-c-p**. Use good Markdown style to make README.md look nice. Use the Markdown Preview feature (a live preview) in Atom to help you in this task.
- Populate your img/ folder with at least seven (7) images.
- Write code that randomly selects three images from img/, then display them "side by side by side" in the browser window. [**+1 Extra Credit** if you make your site responsive, such that the images are shown in a column when the browser viewport is narrow.]
- Handle mouse clicks on displayed images, and track clicks and the "times displayed" count for each image.
- When an image is clicked, show three new random images. Images can repeat -- the random selection process should pick randomly from the full set of images each time.
- Write a constructor that creates an object associated with each image, and has these properties:
 - Filename
 - Product Name
 - Number of times shown
 - Number of times clicked
- Include two hidden buttons, one to display votes, one to allow 8 more votes, and make the buttons visible after the 16th vote.
- Implement the callback for the "display votes" button, which is a function that plots vote results.

# Submitting

- Submit the GitHub URL for your commit hash.
- Add a comment to this Canvas submission with answers to the following questions.
 - How did this go, overall?
 - What observations or questions do you have about what you've learned so far?
