//IIFE -- Immediately Invoked Function Expression
"use strict";

(function(){

    function confirmDelete()
    {
      // confirm deletion
      $("a.delete").on("click", function(event){   //this is jquery code
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          location.href = '/clothing-list';   //If confirmation of delete = cancel, send user back to clothing-list
        }       
      });
    }

    function Start():void
    {
        console.log("App Started");
        
        confirmDelete();  
    }

    window.addEventListener("load", Start);

})();