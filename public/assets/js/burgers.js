$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");

        var newState = {
            devoured: true
        };

        // Send PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            // Reload page to get updated list
            location.reload();
        });
    });  

    $(".create-form").on("submit", function(event) {

        event.preventDefault();

        var name = $("[name=burger-name]").val().trim();

        if(name !== "") {
            var newBurger = {
                name: name
            };

            // Send POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                // Reload the page to get the updated list
                location.reload();
            });
        }
        else {
            $("[name=burger-name]").val("");
        }
    });

    $(".delete-sleep").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });  
});

