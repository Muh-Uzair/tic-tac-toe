"use strict" ;

import * as view_1 from "./view_folder/view_1.js"




function control_box_clicking_function(clicked_box) {

    view_1.grid_box_clicked_working_function(clicked_box)

}


function control_reset_button_working_function() {

    view_1.reset_button_working_function()
}


function init() {

    

    view_1.event_listener_function_main_grid_box_function(control_box_clicking_function) ;   
    view_1.add_event_listener_reset_button_wokring_function(control_reset_button_working_function) ; 


}
init() ;

