# Testing

## Contents

- [Functional Testing](#functional-testing)
- [Validator Testing](#validator-testing)
  - [HTML](#html)
  - [CSS](#css)
  - [JS](#js)
- [WAVE](#wave)
- [LightHouse](#lighthouse)
  - [Destop Results](#desktop-results)
  - [Mobile Results](#mobile-results)
- [Browser Compatibility](#browser-compatibility)
- [Responsivity](#responsivity)
- [User Stories](#user-stories)
- [Site Owner Goals](#goals)
- [Issues/ Bugs Found & Resolved](#issues-bugs)
- [Unresolved](#unresolved)

## <a name="functional-testing">Functional Testing</a>

---

| Page       | Test                                                                                   | Completed successfully |
| :--------- | :------------------------------------------------------------------------------------- | :--------------------: |
| All        | Navigation links to relevant pages                                                     |          Yes           |
| All        | Navigation hover effect                                                                |          Yes           |
| All        | Navigation pushes content to the right when toggled                                    |          Yes           |
| All        | Navigation takes over 100% of the scrennt when toggled on mobile                       |          Yes           |
| All        | Logo links back to homepage                                                            |          Yes           |
| All        | Social media icons in the footer link to the correct external link and open in new tab |          Yes           |
| Homepage   | Harry Potter Logo links to main section to start the game                              |          Yes           |
| Homepage   | Images and text flex responsively                                                      |          Yes           |
| Homepage   | New game open with the house selected by user                                          |          Yes           |
| Homepage   | Hamburger menu stays sticky to top                                                     |          Yes           |
| Game       | Images and text flex responsively                                                      |          Yes           |
| Game       | New game loads a random question of the selected house                                 |          Yes           |
| Game       | Scorebaord increments number of questions, score and progress bar                      |          Yes           |
| Game       | Green border is applied to correct answer an red border is applied to incorrect answer |          Yes           |
| Game       | Random Answer is displayed with appropiate class (correct/incorrect) is applied        |          Yes           |
| Game       | Push current question out of question array                                            |          Yes           |
| Game       | Audio plays when clicked                                                               |          Yes           |
| Game End   | Final Score is displayed                                                               |          Yes           |
| Game End   | Appropiate text depending on score is displayed                                        |          Yes           |
| Game End   | User can only submit when all required fields are filled in                            |          Yes           |
| Game Score | Username, score and selected house logo are displayed                                  |          Yes           |
| Game Score | Previous scores are displayed                                                          |          Yes           |
| Game Score | Clear button deletes local storage of scores                                           |          Yes           |

## <a name="validator-testing">Validator Testing</a>

---

### <a name="html">HTML</a>

[W3C Markup Validator](https://validator.w3.org/)

The initial test returned an error for the audio type on the Game page and a warning on the game score page.

<details>
<summary>Initial test</summary>

![HTML Validator first results](assets/testing/w3c-game1.jpg)

![HTML Validator first results](assets/testing/w3c-score1.jpg)

</details>
<details>
<summary>Homepage</summary>

![Screenshot of WC3 testing for Homepage](assets/testing/w3c-index.jpg)

</details>
<details>
<summary>Game Page</summary>

![Screenshot of WC3 testing for Location page](assets/testing/w3c-game2.jpg)

</details>
<details>
<summary>Game End</summary>

![Screenshot of WC3 testing for Schedulen page](assets/testing/w3c-end.jpg)

</details>
<details>
<summary>Score Page</summary>

![Screenshot of WC3 testing for Signup page](assets/testing/w3c-score2.jpg)

</details>
<details>
<summary>Instruction</summary>

![Screenshot of WC3 testing for Schedulen page](assets/testing/w3c-instruction.jpg)

</details>

### <a name="css">CSS</a>

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

This test returned no errors.
Results of the CSS test of style.css:

<details>
<summary>Result</summary>

![Screenshot of WC3 testing](assets/testing/w3c-css.jpg)

</details>

### <a name="js">JS</a>

[JSHint JS Validator](https://jshint.com/)

All JavaScript files were validated through JSHint.

<details>
<summary>Result</summary>

![Screenshot of JSHint testing](assets/testing/jshint.jpg)

</details>

## <a name="wave">WAVE</a>

---

[WAVE](https://wave.webaim.org/)

The WAVE WebAIM web accessibility evaluation tool was used to check for accessibility standards.

The first result gave an contrast error for the yellow house box with white text. Therefore the original Huffelpuff yellow needed to be changed to an orange color.

Afterwards, all pages passed with zero error.

<details>
<summary>Result</summary>

![Screenshot of WAVE Validator Results](assets/testing/wave.jpg)

</details>

## <a name="lighthouse">LightHouse</a>

---

Lighthouse was used (accessed through Developer Tools in Chrome) to analyse for the following:

- Performance
- Accessibility
- Best practice
- SEO

### Desktop Results

<details>
<summary>Homepage</summary>

![Screenshot of Lighthouse Desktop Validator Results for InnSki homepage](assets/testing/lh-desktop-index.jpg)

</details>
<details>
<summary>Game Page</summary>

![Screenshot of Lighthouse Desktop Validator Results for Location page](assets/testing/lh-desktop-game.jpg)

</details>
<details>
<summary>Game End Page</summary>

![Screenshot of Lighthouse Desktop Validator Results for Location page](assets/testing/lh-desktop-end.jpg)

</details>
<details>
<summary>Score Page</summary>

![Screenshot of Lighthouse Desktop Validator Results for Location page](assets/testing/lh-desktop-score.jpg)

</details>
<details>
<summary>Instruction Page</summary>

![Screenshot of Lighthouse Desktop Validator Results for Location page](assets/testing/lh-desktop-instruction.jpg)

</details>

### Mobile Results

<details>
<summary>Homepage</summary>

![Screenshot of Lighthouse Desktop Validator Results for InnSki homepage](assets/testing/lh-mobile-index.jpg)

</details>
<details>
<summary>Game Page</summary>

![Screenshot of Lighthouse Desktop Validator Results for Location page](assets/testing/lh-mobile-game.jpg)

</details>
<details>
<summary>Game End Page</summary>

![Screenshot of Lighthouse Desktop Validator Results for Location page](assets/testing/lh-mobile-end.jpg)

</details>
<details>
<summary>Score Page</summary>

![Screenshot of Lighthouse Desktop Validator Results for Location page](assets/testing/lh-mobile-score.jpg)

</details>
<details>
<summary>Instruction Page</summary>

![Screenshot of Lighthouse Desktop Validator Results for Location page](assets/testing/lh-mobile-instruction.jpg)

</details>

## <a name="browser-compatibility">Browser Compatibility</a>

---

This website was tested on Chrome, Microsoft Edge, and Firefox for desktop.

The website was tested on Safari for mobile and tablet.

- The outline hover effect for the house boxes appeared to be a problem in Safari. See [Unresolved](#unresolved).

## <a name="responsivity">Responsivity</a>

---

Responsiveness was tested through Chrome Developer tools. The devices tested include:

- iPhone SE
- iPhone XR
- iPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- iPad Air
- iPad Mini
- Surface Pro 7
- Surface Duo
- Galaxy Fold
- Samsung Galaxy A51

I was able to directly test the website on an iPhone 13 mini and an iPad.

## <a name="user-stories">User Stories</a>

---

*As a user, I want to understand what the game is about.*

This was achieved by the Harry Potter banner on the start page, the direct and intuitive selection of the houses on the start page and a supporting instruction page.

*As a user, I want to easily navigate through the game even on the first visit.*

This was achieved by the direct and intuitive selection of the houses on the start page. After that, the game takes over the control and the user only has to concentrate on answering the questions. If the user wants to exit, this can be done at any time via the navigation. 

*As a user, I want to access the game easily.*

This was achieved through the direct access on the homepage.

*As a user, I want to be able to see my final result.*

This is achieved by the Game End page, which shows the user the score immediately after finishing the game. The score is then saved and can also be viewed by the user afterwards via the High Score table.

## <a name="goals">Site Owner Goals</a>

---

*As a site owner, I want to build an appealing online quiz.*

This was achieved through a modern and dark design, which is suited to the Harry Potter topic. The game questions offer a good mix of challenging and easier questions, so that users with a high and lower level of knowledge can enjoy playing.

*As a site owner, I want to build a quiz which is easy to navigate.*

This was achieved by a simple and direct entry on the start page. After that, new questions are loaded immediately, without any action on the part of the user. Once the user has answered all 10 questions, the game forwards the user automatically to view and save the score.

*As a site owner, I want to build a quiz which is fun for the user and keeps users attention.*

This was achieved through an interesting topic, text questions of various difficulty levels and the inclusion of some picture questions. 

## <a name="issues-bugs">Issues/ Bugs Found & Resolved</a>

---

### Validation Issue

The initial test returned an error for the audio type on the Game page and a warning on the game score page. The aduio type was removed as well as the section on the game score page.

### Wave Issue

The first result gave an contrast error for the yellow house box with white text. Therefore the original Huffelpuff yellow needed to be changed to an orange color.

### Hover on touch

The hover effect on the house boxes created an issue on touch devices. After the first house/answer was selected, the hover effect remained on the next question. The solution was to set a media querie for this effect. Help was found [here](https://erikmartinjordan.com/remove-hover-effects-css-mobile).

### Streched Header Logo on mobile

During testing it was found out that the header logo was streched. This was fixed by setting a height.

## <a name="unresolved">Unresolved</a>

### Outline-Offset

During testing it was found that set outline-offest on safari does not work as intended. The border is displayed square instead of round. I tried to solve this with the help of the CI Tutors. We tried and created pseudo-elements (::before and ::after) without desired result. After consultation with the tutor, I decided to keep it that way for now. Also considering the time resources and the fact that most of the users do not use Safari browser. In the future, however, the goal is to make the game display the same across all browsers.