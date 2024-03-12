"use strict" ;


import {winning_combo_array} from "../config.js"


const grid_main_box = document.querySelector(".grid_main_box") ;

const box_1 = document.querySelector(".box_1") ;
const box_2 = document.querySelector(".box_2") ;
const box_3 = document.querySelector(".box_3") ;

const box_4 = document.querySelector(".box_4") ;
const box_5 = document.querySelector(".box_5") ;
const box_6 = document.querySelector(".box_6") ;

const box_7 = document.querySelector(".box_7") ;
const box_8 = document.querySelector(".box_8") ;
const box_9 = document.querySelector(".box_9") ;

const button_reset = document.querySelector(".button_reset") ;






let player_1 = true ;
let player_2 = false ;
let winning_status_object = { winning_status : false , winner_player : "none" } ;
let final_winning_status = false ;




export function event_listener_function_main_grid_box_function( recieved_control_box_clicking_function ) {

    grid_main_box.addEventListener("click" , 
    function(event_info_object) 
    {
        const clicked_box = event_info_object.target.closest(".grid_item") ;
        if(!clicked_box) return ;


        recieved_control_box_clicking_function(clicked_box)
        
    })
}
export function add_event_listener_reset_button_wokring_function(recieved_control_reset_button_working_function) {

    button_reset.addEventListener("click" ,
    function(event_info_object)
    {

        recieved_control_reset_button_working_function() ;
    })


}








document.querySelector(".player_1_sign_box").style.backgroundColor = "green" ;





// all cross circle functionality
function manage_player_sign_color() {

    // console.log(player_1 , player_2)

    if(player_1) {

        document.querySelector(".player_1_sign_box").style.backgroundColor = "green" ;
        document.querySelector(".player_2_sign_box").style.backgroundColor = "rgb(255, 204, 0)" ;
    
    }
    else if(player_2) {
        
        document.querySelector(".player_2_sign_box").style.backgroundColor = "green" ;
        document.querySelector(".player_1_sign_box").style.backgroundColor = "rgb(255, 204, 0)" ;
    }


}
function change_win_boxes_color(winning_boxes_array) {

    // console.log(winning_boxes_array)

    winning_boxes_array.forEach( (val, i) =>
        {
            document.querySelector(`.${val}`).style.backgroundColor = "rgb(255, 204, 0)" ;
        })
    final_winning_status = true ;


}
function deal_correct_combination_function(start , end , winning_combination , add_nummber)
{


    
    let player_1_count = 0 ;
    let player_2_count = 0 ;



    winning_combo_array[winning_combination].forEach( (val) => 
    {
        // console.log(val) 

        if( document.querySelector(`.${val}`).innerHTML === `<img class="img_box" src="https://raw.githubusercontent.com/Muh-Uzair/tic-tac-toe/master/public/cross_picture.png" alt="error">` ) player_1_count++ ;
        else if( document.querySelector(`.${val}`).innerHTML === `<img class="img_box" src="https://github.com/Muh-Uzair/tic-tac-toe/blob/master/public/circle_picture.png?raw=true" alt="error">` ) player_2_count++ ;


        // 5 : agar player 1 jeet gay hai tou us winner anao
        if(player_1_count === 3 ) {   
            // console.log(`player_1_won`)
            winning_status_object.winning_status = true ; 
            winning_status_object.winner_player = `player1` ;
        }


        // 6 : lakin agar player 2 jeet gya hai tou player 2 ko winner banao
        if(player_2_count === 3 ) {

            winning_status_object.winning_status = true ;
            winning_status_object.winner_player = `player2` ;
        } 


        // 7 : aur aakhir me sahi combination ka background color change karo
        if(winning_status_object.winning_status) change_win_boxes_color(winning_combo_array[winning_combination]) ;

        winning_status_object.winning_status = false ;
        winning_status_object.winner_player = `none` ;
    })

    player_1_count = 0;
    player_2_count = 0;

    // console.log(" ")



}
function winning_combination_logic_function() {

    // for combination 1
    if(  (document.querySelector(".box_1").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_2").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_3").innerHTML.trim().length !== 0  ) )
    {  deal_correct_combination_function(1 , 3 , 1-1 , 1)  }
 
    


    // for combination 2 
    if(  (document.querySelector(".box_4").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_5").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_6").innerHTML.trim().length !== 0  ) )
   { deal_correct_combination_function(4 , 6 , 2-1 , 1) ;  }


    // for combination 3
    if(  (document.querySelector(".box_7").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_8").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_9").innerHTML.trim().length !== 0  ) )
    { deal_correct_combination_function(7, 9 , 3-1 , 1) ; }






    // for combination 4
    if(  (document.querySelector(".box_1").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_4").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_7").innerHTML.trim().length !== 0  ) )
    { deal_correct_combination_function(1, 7 , 4-1 , 3) ;  }


    // for combination 5
    if(  (document.querySelector(".box_2").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_5").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_8").innerHTML.trim().length !== 0  ) )
    { deal_correct_combination_function(2, 8 , 5-1 , 3) ;  }

    // for combination 6
    if(  (document.querySelector(".box_3").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_6").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_9").innerHTML.trim().length !== 0  ) )
    { deal_correct_combination_function(3, 9 , 6-1 , 3) ;  }






     // for combination 7
     if(  (document.querySelector(".box_1").innerHTML.trim().length !== 0  ) && 
          (document.querySelector(".box_5").innerHTML.trim().length !== 0  ) && 
          (document.querySelector(".box_9").innerHTML.trim().length !== 0  ) )
    { deal_correct_combination_function(1, 9 , 7-1 , 4) ;  }

    // for combination 8
    if(  (document.querySelector(".box_3").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_5").innerHTML.trim().length !== 0  ) && 
         (document.querySelector(".box_7").innerHTML.trim().length !== 0  ) )
    { deal_correct_combination_function(3, 7 , 8-1 , 2) ;  }

    
}
export function grid_box_clicked_working_function(clicked_box) {

    // console.log(clicked_box) ; 
    // console.log(player_1 , player_2 )

    // 
    if(final_winning_status === true ) return ;

    //  : if a box is filled allready then player can not fill it again
    if(clicked_box.innerHTML === `<img class="img_box" src="https://raw.githubusercontent.com/Muh-Uzair/tic-tac-toe/master/public/cross_picture.png" alt="error">` ||
        clicked_box.innerHTML === `<img class="img_box" src="https://github.com/Muh-Uzair/tic-tac-toe/blob/master/public/circle_picture.png?raw=true" alt="error">` )
        return ;

    

    //  : if player_1 is active
    if(player_1 === true ) { 

        clicked_box.innerHTML = `<img class="img_box" src="https://raw.githubusercontent.com/Muh-Uzair/tic-tac-toe/master/public/cross_picture.png" alt="error">` ;
        player_1 = false ;
        player_2 = true ;

    }
    //  : if player_2 is active
    else if(player_2 === true ) { 

        clicked_box.innerHTML = `<img class="img_box" src="https://github.com/Muh-Uzair/tic-tac-toe/blob/master/public/circle_picture.png?raw=true" alt="error">` ;
        player_2 = false ;
        player_1 = true ;

    }

    // console.log(clicked_box.innerHTML)
    winning_combination_logic_function() ;

    manage_player_sign_color() ;
    
}








export function reset_button_working_function() {

    
    // console.log(`reset clicked`)


    // 1 : make the grid look empty 1. empty the inner element 2. prepare the markup 3. insert the markup 
    grid_main_box.innerHTML = " " ;
    const markup = `

            <div class="grid_item box_1">  </div>
            <div class="grid_item box_2">  </div>
            <div class="grid_item box_3"> </div>

            <div class="grid_item box_4"> </div>
            <div class="grid_item box_5"> </div>
            <div class="grid_item box_6"> </div>

            <div class="grid_item box_7"> </div>
            <div class="grid_item box_8"> </div>
            <div class="grid_item box_9"> </div>    
    `
    grid_main_box.insertAdjacentHTML(  "afterbegin" , markup) ;


    // 2 : reset things
    player_1 = !player_1 ;
    player_2 = !player_2 ; 

    manage_player_sign_color() ;

    winning_status_object = { winning_status : false , winner_player : "none" } ;

    final_winning_status = false ;

    

}


































