# Tic Tac Toe


This project is a simple tic tac toe game made for 2 players.
The above 2 icons show whihc player is active. Player 1 : X & Player 2 : O, below that comes the main grid, and below that is reset button that reset button will not only reset the game but it has 2 functionalties 
1. Reset the game 
2. Switch the active player as well 

The logic of the game revolves around the winning combinations


export const winning_combo_array = [

    [`box_1` , `box_2` , `box_3`] ,
    [`box_4` , `box_5` , `box_6`] ,
    [`box_7` , `box_8` , `box_9`] ,

    [`box_1` , `box_4` , `box_7`] ,
    [`box_2` , `box_5` , `box_8`] ,
    [`box_3` , `box_6` , `box_9`] ,

    [`box_1` , `box_5` , `box_9`] ,
    [`box_3` , `box_5` , `box_7`] ,
]

The above array represent the all winning combination. The program check wether a combination has been completed or not if yes then it checks wether the combination is made by a single player or not. If yes then that player wins if not the combination is ignored.

The code can be otimized by making a check that wether a combination has beeen checked before.

Project Link : https://tic-tac-toe-uzair.netlify.app/