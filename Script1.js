$(document).ready(function(){

    pages = ["#Introduction","#Foundation","#Famous-Members","#Exilation", 
    "#Goals", "#French-Revolution", "#Conspiracy", "#Conclusion"];

    $(".advance, .continue").on("click", buttonRender);
    $(".nav").on("click", showSideTarget);



    function hideAll(){
        for (var i = 0; i < pages.length; i++){
            $(pages[i]).hide();
        }
    };

    function showSideTarget(){

        hideAll();
        //this nicely gets the text from my li-classes
        var liClass = $(this).attr("class").split(/\s+/)[0]

        $(" ul li").removeClass("list-group-item-info");

        switch(liClass){
            case "li-one":
                $(pages[1]).show();
                $(".li-one").addClass("list-group-item-info");
                break;
            
            case "li-two":
                $(pages[2]).show();
                $(".li-two").addClass("list-group-item-info");
                break;
            
            case "li-three":
                $(pages[3]).show();
                $(".li-three").addClass("list-group-item-info");
                break;

            case "li-four":
                $(pages[4]).show();
                $(".li-four").addClass("list-group-item-info");
                break;

            case "li-five":
                $(pages[5]).show();
                $(".li-five").addClass("list-group-item-info");
                break;

            case "li-six":
                $(pages[6]).show();
                $(".li-six").addClass("list-group-item-info");
                break;

            case "li-seven":
                $(pages[7]).show();
                $(".li-seven").addClass("list-group-item-info");
                break;
            
        };
    
    };

    function buttonRender(){
        var currentPage = $(this).closest("section").attr("id");

        $("ul li").removeClass("list-group-item-info");

        switch(currentPage) {
            case "Introduction":
                $(pages[0]).hide();
                $(".li-one").removeClass("disabled");
                $(".li-one").addClass("list-group-item-info");
                $(".li-one").addClass("completed")
                $(pages[1]).show();
                break;

            case "Foundation":
                $(pages[1]).hide();
                $(".li-two").removeClass("disabled");
                $(".li-two").addClass("list-group-item-info");///fixed some stuff from here on
                $(".li-two").addClass("completed")
                $(pages[2]).show();
                break;

            case "Famous-Members":
                $(pages[2]).hide();
                $(".li-three").removeClass("disabled");
                $(".li-three").addClass("list-group-item-info");
                $(".li-three").addClass("completed")
                $(pages[3]).show();
                break;

            case "Exilation":
                $(pages[3]).hide();
                $(".li-four").removeClass("disabled");
                $(".li-four").addClass("list-group-item-info");
                $(".li-four").addClass("completed")
                $(pages[4]).show();
                break;

            case "Goals":
                $(pages[4]).hide();
                $(".li-five").removeClass("disabled");
                $(".li-five").addClass("list-group-item-info");
                $(".li-five").addClass("completed")
                $(pages[5]).show();
                break;

            case "French-Revolution":
                $(pages[5]).hide();
                $(".li-six").removeClass("disabled");
                $(".li-six").addClass("list-group-item-info");
                $(".li-six").addClass("completed")
                $(pages[6]).show();
                break;

            case "Conspiracy":
                $(pages[6]).hide();
                $(".li-seven").removeClass("disabled");
                $(".li-seven").addClass("list-group-item-info");
                $(".li-seven").addClass("completed")
                $(pages[7]).show();
                break;

            case "Conclusion":
                $(pages[7]).hide();
                hideAll()
                $(pages[0]).show();
                break;

        }

    };

});
/// Code Credit: Jeff Bell. Edited from his github page. 
/// I would develop my own code later on, if possible.
