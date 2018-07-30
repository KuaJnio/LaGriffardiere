$(document).ready(function(){
    $(".table_1").show();
    $(".table_2").hide();
    $(".table_3").hide();
    $(".item_1_1").addClass( "is-active" );
    $(".item_1_1").click(function(){
        $(".table_1").show();
        $(".item_1_1").addClass( "is-active" );
        $(".table_2").hide();
        $(".item_1_2").removeClass( "is-active" );
        $(".table_3").hide();
        $(".item_1_3").removeClass( "is-active" );
    });
    $(".item_1_2").click(function(){
        $(".table_1").hide();
        $(".item_1_1").removeClass( "is-active" );
        $(".table_2").show();
        $(".item_1_2").addClass( "is-active" );
        $(".table_3").hide();
        $(".item_1_3").removeClass( "is-active" );
    });
    $(".item_1_3").click(function(){
        $(".table_1").hide();
        $(".item_1_1").removeClass( "is-active" );
        $(".table_2").hide();
        $(".item_1_2").removeClass( "is-active" );
        $(".table_3").show();
        $(".item_1_3").addClass( "is-active" );
    });
});


