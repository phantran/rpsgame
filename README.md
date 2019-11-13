## Setup

Open Terminal (MacOS) or CMD on (Windows)
Change directory to the main folder of this project

### `npm install`

Install the dependencies of this project by running the command above. If permission is needed, MacOS users need to put "sudo" before the command and Window Users need to run cmd as administrator to excecute it.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Run this command in another terminal if you want to run the tests of this project

## Online version

An online version of this project is available at:
https://phantran.github.io/rpsgame

## Note

Please ensure the availability of the Internet connection because some libraries are used in this project by CDN such as Icons in Font Awesome.

## Design Process

### `From visual perspective`

There are 3 main components in the UI of this game.

1. The main play area

- There are 2 sections in this component. Each of them is used to display the move from each player.
- In the Player vs Computer mode, the user chooses one move and the computer will randomly pick one move. These moves will be displayed simultaneously
- In the Computer vs Computer mode, the user need to click the play button to start the game and the computer 1 and computer 2 will randomly pick their moves and the result will be displayed simultaneously.

2. The options area

- This component consists of 2 buttons which are used to change play mode between Player vs Computer and Computer vs Computer.
- This fulfills the 1st and 2nd acceptance criteria which are "I should be able to play Player vs Computer." and "​- I should be able to play Computer vs Computer."

3. The result area

- This component is used to display the result of a game
- The "play again" button is also appeared the same time as the result and it is used to start a completely new game.
- This fulfills the 3rd acceptance criteria which is "Each new game should be a different game."

### `From functional perspective`

1. When either the Player Vs Computer or Computer Vs Computer button is clicked, the game change is changed to the corresponding mode.
2. In the Player and Computer mode, the game starts when the player choose a move from rock, paper, or scissors icon. In the Computer vs Computer mode, the game starts when the user clicks on the Play button on the top of the play area component.
3. The result of a game (win, lose, or draw) is displayed in the result area. By clicking on the Play Again button, the game will be restarted to a completely new game.

## Technical constraints

- This project is built by ReactJS, React-Redux for state management and Styled Components for styling and CSS management. 

- With these libraries and frameworks, the goal is to ensure the extensibility and reusability of this project.

## Implementation details

- The elements folder contains reusable elements such as button, text, and line. They are styled by using styled components.

- The component folder contains the main components of the UI of the game

- Because this project uses Redux for state management, I decided to put the main logic of the game (decision of the winner) in actions folder (right before dispatch a state update to the redux store). You can find it in src/actions/result.js
