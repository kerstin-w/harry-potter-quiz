# Harry Potter Quiz

This quiz is built for all Harry Potter fans to answer questions about their favorite Hogwards house to find out how well they fit in. The user can pick between the four houses which each have 10 questions. For each question answered correctly the user will receive 10 Points. The Harry Potter quiz is fun and tests all Harry Potter fans.

![Mockup](assets/readme/mockup.jpg "Mockup")

# Live Project

[View live project here](https://kerstin-w.github.io/harry-potter-quiz/)

## Contents

---

- [User Experience](#ux)
  - [User Stories](#user-stories)
  - [Site Owner Goals](#goals)
- [Design](#design)
  - [Colour Palette](#colour-palette)
  - [Fonts](#fonts)
  - [Images](#images)
- [Wireframes](#wireframes)
- [Features](#features)
    - [Home Page](#homepage)
    - [Game Page](#game-page)
    - [Game End Page](#game-end)
    - [Game Score Page](#game-score)
    - [Instruction Page](#instruction)
- [Technologies](#technologies)
- [Testing](#testing)
- [Deployment](#deployment)
- [References & Credit](#references-credit)

## <a name="ux">User Experience</a>

---

### <a name="user-stories">User Stories</a>

- As a user, I want to understand what the game is about.
- As a user, I want to easily navigate through the game even on the first visit.
- As a user, I want to access the game easily.
- As a user, I want to be able to see my final result.

### <a name="goals">Site Owner Goals</a>

- As a site owner, I want to build an appealing online quiz.
- As a site owner, I want to build a quiz which is easy to navigate.
- As a site owner, I want to build a quiz which is fun for the user and keeps users attention.

## <a name="design">Design</a>

---

### <a name="colour-palette">Colour Palette</a>

**Main Colour Palette** (used for Background, Fonts, Buttons, etc.)

![Colour Palette](assets/readme/color1.jpg)
![Colour Palette](assets/readme/color2.jpg)

[_Sourced via ColorSpace._](https://mycolor.space/)

**Hogwards House Colours**

![Colour Palette](assets/readme/color3.jpg)

[_Sourced via ColorsWall._](https://colorswall.com/palette/167374)

A simple colour palette was chosen to reflect the dark and magical character of the Harry Potter world. The background has a dark gradient and the white and light turquoise fonts stand out well and is easy to read. For the game, the colours of the four Hogwards houses were adopted again to stay in the theme. However, the original yellow had to be changed to orange because of insufficient contrast.

### <a name="fonts">Fonts</a>

**Heading:** For Heading 1, "Harry Potter" font was selected, which is very unique and directly recognized by users. This stands out beautifully as the heading.

[_Sourced via CDN Fonts._](https://www.cdnfonts.com/harry-potter.font)

**Body:** “Nunito” This font is simple, modern open and easy to read. The round cap strokes matches well with the round box design on the page.

[_Sourced via Google Fonts._](https://fonts.google.com/)

### <a name="images">Images</a>

[_Sourced via KindPng._](https://www.kindpng.com/) & [_Sourced via Harry Potter Wiki._](https://harrypotter.fandom.com/)

- The symbols of the four Hogward houses were used as images.

- Images of Hogward's symbols, ghosts, and students in the game were used as choices for answers.

## <a name="wireframes">Wireframes</a>
---
Deviations from the original wireframe:
* On the advice of my mentor, I moved the content of the Game-End page to the Game-page.  This will be displayed after all 10 questions have been completed. The idea behind this was to prevent the game-end page from being called by typing in the url bar, even though the game was not completed. 

[Desktop](assets/readme/desktop.pdf)

[Tablet](assets/readme/tablet.pdf)

[Mobile](assets/readme/mobile.pdf)

## <a name="features">Features</a>

---

### <a name="homepage">Home Page</a>

- An appealing design and an intuitive navigation and orientation on the website.
- A website which is fully responsive on all screen sizes.
- Easy access to start the game.

![Homepage on Desktop](assets/readme/homepage.jpg "Homepage on Desktop")
![Homepage on Mobile](assets/readme/homepage-mobile.jpg "Homepage on Mobile")

* The user is greeted with the logo of the Harry Potter quiz, which immediately intrigues the user and also creates a very magical look due to the box shadow. By clicking on the logo or by scrolling down the user gets to the selection of the game.

### Game Choice 

![Game Choice on Desktop](assets/readme/game-choice-desktop.jpg "Game Choice on Desktop")
![Game Choice on Mobile](assets/readme/game-choice-mobile.jpg "Game Choice on Mobile")

* The user can choose between one of the four houses. The player's choice is passed on to the game function by an event listener. The Hamburger stays sticky on the homepage allowing the user to navigate easily to the instructions.

### Side Navigation

![Side Navigation on Desktop](assets/readme/sidenav-desktop.jpg "Side Navigation on Desktop")
![Side Navigation on Mobile](assets/readme/sidenav-mobile.jpg "Side Navigation on Mobile")

* The hambuger is sticky on the homepage allowing the user to reach the navigation at any time.
Once the user clicks on the hambuger icon, the navigation will slide out. On desktop it pushes the content to the right and on mobile it takes up 100% of the screen. If the side navigation was closed by clicking on the X the content will slide back to the left.

### Footer 

![Footer on Desktop](assets/readme/footer-desktop.jpg "Footer on Desktop")
![Footer on Mobile](assets/readme/footer-mobile.jpg "Footer on Mobile")

* The footer section includes links to the relevant sites which open in a new tab, when clicked.

### <a name="game-page">Game Page</a>

![Game Page on Desktop](assets/readme/game-page-desktop.jpg "Game Page on Desktop")
![Game Page on Mobile](assets/readme/game-page-mobile.jpg "Game Page on Mobile")

* On the Game Page, the corresponding questions and answers are loaded according to the user's previous selection. 
At the top right, the corresponding house logo is loaded.The user can play or pause the audio via the audio icon.

![Game Page on Desktop](assets/readme/game-page1-desktop.jpg "Game Page on Desktop")
![Game Page on Mobile](assets/readme/game-page1-mobile.jpg "Game Page on Mobile")

* The user receives feedback in text form once an answer has been selected, indicating whether the answer was correct or incorrect. Furthermore, the correct answer choice is also marked in colour. The scoreboard shows which question the user is currently on. The progress is also displayed graphically in the progress bar. For each correct answer the user receives 10 points which are added up in the score counter. 

### <a name="game-end">Game End Section</a>

![Page End Page on Desktop](assets/readme/game-end-desktop.jpg "Game End Page on Desktop")
![Page End Page on Mobile](assets/readme/game-end-mobile.jpg "Game End Page on Mobile")

* When the user has completed the 10 house questions, the user will see the final score and a message, depending on the score. The user can enter their username and save the points. The button is disabled and will be enabled as soon as the input field is filled in.

### <a name="game-score">Game Score Page</a>

![Page Score Page on Desktop](assets/readme/game-score-desktop.jpg "Game Score Page on Desktop")
![Page Score Page on Mobile](assets/readme/game-score-mobile.jpg "Game Score Page on Mobile")

* The user is presented with a table with the current score and the saved ones. The name of the score and the house that was played are displayed. The scores are sorted from highest to lowest.

### <a name="instruction">Instruction Page</a>

![Instruction Page on Desktop](assets/readme/instruction-desktop.jpg "Instruction Page on Desktop")
![Instruction Page on Mobile](assets/readme/instruction-mobile.jpg "Instruction Page on Mobile")

* The Instruction Page gives the user instructions on how the game is played and can be found via the navigation.

## <a name="technologies">Technologies</a>

---

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://www.javascript.com/)

### Other

- [Color Space](https://mycolor.space/) - Colour Pallete
- [Colors Wall](https://colorswall.com/) - Colour Pallete
- [Google Fonts](https://fonts.google.com/) - Fonts
- [CDN Fonts](https://www.cdnfonts.com/) - Fonts
- [Tiny PNG](https://tinypng.com/) - Compress Images
- [Color Space](https://mycolor.space/) - Gradient Background
- [HTML-CSS-JS](https://html-css-js.com/css/generator/text-shadow/) - Text Shadow Generator
- [CSS Matic](https://www.cssmatic.com/box-shadow) - Box Shadow Generator
- [Font Awesome](https://fontawesome.com/) - Icons
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Favicon Creater
- [Balsamiq](https://balsamiq.com/) - Wireframes
- [Github](https://github.com/) - Storing and hosting repository
- [Gitpod](https://www.gitpod.io/) - Code editor
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

## <a name="testing">Testing</a>

---

See [TESTING.md](TESTING.md) for an overview of website testing and debugging.

## <a name="#deployment">Deployment</a>

---

This project was created through [GitHub](https://github.com/):

1. Locating repository, clicking on the "New" button.
2. Selecting the relevant template: "Code-Institute-Org/gitpod-full-template"
3. Adding the repository name "innski".
4. Clicking the button "Create repository".

This project was developed using [GitPod](https://gitpod.io/) and committed and pushed to GitHub using the GitPod terminal. Following "git commands" were used:

1. **git add .** - This command for multiple files to the staging area before commiting.
2. **git commit -m "Message explaining upadate"** - This command explained changes that were done to the repository.
3. **git push** - This command was used to push all committed changes to the GitHub Repository.

This project was deployed from its Github repository to Github Pages:

1. Log in to Github account
2. From the projects repository selecting "Settings" tab.
3. Click on "Pages" from the left-hand menu
4. The "Source" box must state "Deplay from branch"
5. Under "Branch", click the dropdown named "None" and select "main".
6. Click save.
7. After a few seconds, refresh the page and retrieve the link.

## <a name="#references-credit">References & Credit</a>

---

### Media & Fonts

- [tiny.png](https://tinypng.com/): Used to compress media files
- [Kind Png](https://www.kindpng.com/) & [Harry Potter Fandom](https://harrypotter.fandom.com/): Resources for images
- [Archive](https://archive.org/details/HarryPotter-hedwigTheme): Resource for Harry Potter Theme Audio
- [Font Awesome](https://fontawesome.com/): Resource for icons
- [Google Fonts](https://fonts.google.com): Used as font library
- [CDN Fonts](https://www.cdnfonts.com/): Used as font library
- [Remove](https://www.remove.bg/de): Used to create a transparent PNG
- [RealFaviconGenerator](https://realfavicongenerator.net/): Used to create a Favicon

### Code

- [W3Schools](https://www.w3schools.com/) & [MDN](https://developer.mozilla.org/): General source of help and guidance throughout this project.
- [W3Schools](https://www.w3schools.com/howto/howto_js_sidenav.asp): Guidance on creating a side navigation.
- [Nguyễn Quyết](https://betterprogramming.pub/rewrite-your-own-array-methods-foreach-map-filter-find-reduce-1718e1138c3e): Guidance for Array Methods.
- [freeCodeCamp](https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/): Guidance on setting a Timeout with JavaScript.
- [Benjamin Knight](https://codepen.io/benknight/pen/BywEpw): Guidance on styling a Progressbar. 
- [CSS {In Real Life }](https://css-irl.info/drop-shadow-the-underrated-css-filter/): Guidance for drop shadow.

### Content

All the questions provided in the game were taken from [Beano](https://www.beano.com/posts/the-ultimate-hufflepuff-quiz)

