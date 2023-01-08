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
