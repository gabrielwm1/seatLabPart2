"use strict"

$(document).ready(()=>{
    let table= null;
    $("form").hide();
    $(document).on("mouseenter", ".available", (event) => {
        $(event.target).fadeTo(500, 0.5);
      });
    $(document).on("mouseleave", ".available", (event) => {
        $(event.target).fadeTo(500, 1);
      });
    
    $(document).on("mouseenter", ".reserved", (event) => {
        $(event.target).css("cursor", "not-allowed");
    });
    $(document).on("click", ".available", (event)=>{
        $(".input-field").fadeIn(300);
        $(".input-field").css("display", "flex");
        
         table = $(event.target);
          if (event.target.tagName === "P") {
              $(".form-table-num").text(`Table Number: ${table.text()}`)
              } else {
               $(".form-table-num").text(`Table Number: ${table.children().text()}`);
              }
    });

    $(document).on("click", ".input-field",".save", (event)=>{
        $("form").fadeOut(350);
          if ($(event.target).hasClass("save")){
            if ($(table).is("p")) {
                    
                table.parent().removeClass("available").addClass("reserved");
                    console.log(table.parent());
                } else {
                table.removeClass("available").addClass("reserved");
                }
            }
        });
    });
