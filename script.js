"use strict"

$(document).ready(() => {
    let table = null;
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
    $(document).on("click", ".available", (event) => {
        $(".input-field").fadeIn(300);
        $(".input-field").css("display", "flex");

        table = $(event.target);
        if (event.target.tagName === "P") {
            $(".form-table-num").text(`Table Number: ${table.text()}`)
        } else {
            $(".form-table-num").text(`Table Number: ${table.children().text()}`);
        }
    });

    $(document).on("click", ".save", (event) => {
        $("form").fadeOut(350);

        table
            .attr("firstname", $("input").eq(0).val())
            .attr("partySize", $("input").eq(2).val());
        $("input").each(function () {
            $(this).val("");
        });
   


    if ($(event.target).hasClass("save")) {
        if ($(table).is("p")) {

            table.parent().removeClass("available").addClass("reserved");
            console.log(table.parent());

        } else {
            table.removeClass("available").addClass("reserved");
        }
    }
});

    $(document).on("mouseenter", ".reserved", (event) => {
        if ($(event.target).attr("firstname") && $(event.target).attr("partySize")) {
            $(event.target).append(`
            <section class="tooltip">
              Name: ${$(event.target).attr("firstname")}<br/>
              Size of Party: ${$(event.target).attr("partySize")} 
            </section>
            `);
        }
    
    }); 
    
    $(document).on("mouseleave", ".reserved", (event) => {
        $(".tooltip").remove();
    });

    $(document).on("click", ".form-x", (event) => {
        $("form").fadeOut(350);
    });

});



