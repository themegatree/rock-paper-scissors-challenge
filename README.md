# Rock Paper Scissors Challenge

This is my submission for the Rock Paper Scissors challenge. Full instructions for the challenge can be found [here](./instructions.md).

---
## Installation
This project can be installed through Git:

```bash
$ git clone https://github.com/themegatree/rock-papers-scissors-challenge
```

Then to install dependencies:

```bash
$ npm install
```

To view the application use:
```bash
$ node app.js
```

Then navigate to the address displayed in the command terminal (by default set to `http://localhost:3000`).

---
## Running the Tests

Tests are broken into two catagories. The logic based tests are covered with Jasmine and can be checked with:

```bash
$ npm test
```
Tests for the server are written with Cypress. To use Cypress first open the application with:

```bash
$ node app.js
```

then run the tests with:

```bash
$ npx cypress open
```
or if you dislike the visual user interface:
```
$ npx cypress start
```

---
## Acceptance Criteria

```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```
---
## Appoach

I wrote domain and process models for the code (see below). 

Then I wrote test code with Jasmine and Cypress using mocks to ensure each component is working correctly. I started with feature tests based on the User stories found in the Accepance Critria. I then converted some features I wanted the program to have into user stories (found [here](./user-stories.md)) before converting these stories to component tests.

I then made the logic work. I created two classes for this project:

`Player`: This handles the users and thier inputs.

`Game`: This handles game logic.

I then wrote the server side logic to handle user inputs. There are three pages in the website: 

`/`: Home page, allowing user to input the name.

`/rps`: Allows user to input the RPS choice.

`/result`: Displays the result of the game.

---
## Domain Model
Object | Message | Input | Output | Notes
---|---|---|--- | ----
Player | constructor( ) | name[@string] | --- | ---
Player | userRPS( ) |  RPS[@integer] | --- | Used to input User RPS choice 
Game | constructor( ) | player[@Player] | --- | ---
Game | compRPS( ) | RPS[@integer] | --- | Computer's RPS choice
Game | compare( ) | --- | result[@string] | Compares results

---
## Process Model
Client | | Browser | | Server
---| --- |--- |--- | ---
===> | `node app.js` | ===> | LISTEN request | ===>
<===| Console log port number | <=== | Port number found | <===
| | | | 
===> | Home Page URL | ===> | GET request | ===>
<===| Render HTML | <=== | Response HTML `index.ejs` | <===
| | | | 
===> |Input[@name] | ===> | POST request | ===>
 <=== | Render HTML | <=== | Response HTML `rps.ejs` |<===
| | | | 
===> | Start Game Page URL | ===> | GET request | ===>
<===| Render HTML | <=== | Response HTML `rps.ejs` | <===
| | | | 
===> | Input[@RPS] |===> | POST request | ===>
<=== | Render HTML | <=== | Response HTML `result.ejs` | <===
| | | | 
===> | Results Page URL | ===> | GET request | ===>
<===| Render HTML | <=== | Response HTML `result.ejs` | <===
| | | | 
===> | Input[@Restart] |===> | POST request | ===>
<=== | Render HTML | <=== | Response HTML `index.ejs` | <===