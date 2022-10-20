CSDS 221 Project 1

use#50	boostrap layout	        includes bootstrap booking form section with sections, panels, and wells that look like the provided preview	10	
use#51	boostrap well	        includes bootstrap well with a description inside(if newer version of bootstrap does not support the well class, use the card class instead <div class="card card-body bg-light">well</div>)	10	
use#52	user panel	            includes user panel with a username, first name, and last name textbox	10	
use#53	contact panel	        includes contact panel (might need to use class="card" for panel) with phone, fax, and email textboxes with prepended icons (can use input-group-addon or input-group-text)	10	
use#54	schedule panel	        includes schedule panel with a dropdown for number of adults, a date picker for check-in, a date picker for check-out, a readonly days textbox, and a readonly cost textbox	5	
use#55	cost calculation	    when adults, check-in, or check-out inputs are changed, the days textbox will update with the number of days between check-out and check-in and the cost textbox will update with the cost of the booking which will be $150 * # of adults * # of days	10	
use#56	other panel	            includes another panel with a textarea, a horizontal stepped range bar(~5 - 10 steps), and a priority radio button with low, med, and high	10	
use#57	reset button	        includes a reset button that clears all fields on the form and displays a blue info toaster notifying the user that the fields were successfully cleared	5	
use#58	submit button	        includes a submit button that will validate the username, first, last, phone, fax, and email fields for empty entries and if they don't exist, to highlight red the empty textbox (using the bootstrap .removeClass('has-error') and .addClass('has-error') as needed) and notify the user with a red error toaster displaying the field that it is missing	10	
use#59	cost validation	        submit button must also check to see if the cost was calculated and if it is not, notify user with a red error toaster that no cost was calculated	5	
use#60	value validation	    submit button must also check to see if the cost was positive and if it is not, notify user with a red error toaster that cost is negative	5	
use#61	success notification    if submit button passes all validation errors, it will display a green success toaster saying the form was successfully submitted	5	
use#123	libraries	            must use bootstrap (form-control and grid system with rows/cols), toastr, jquery, and moment libraries at least once in the app	5	
