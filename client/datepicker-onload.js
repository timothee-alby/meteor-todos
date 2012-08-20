window.onload = function(){

        var opts_date = {                      
                // Attach input with an id of "dp-2" and give it a "d-sl-m-sl-y" date format (e.g. 13/03/90)         
                formElements:{"new-todo-date":"d-sl-m-sl-y"}
        };      
        datePickerController.createDatePicker(opts_date);

       /* var opts_date2 = {                      
                // Attach input with an id of "dp-2" and give it a "d-sl-m-sl-y" date format (e.g. 13/03/90)         
                formElements:{"new-todo-date2":"d-sl-m-sl-y"}
        };      
        datePickerController.createDatePicker(opts_date2);*/
};