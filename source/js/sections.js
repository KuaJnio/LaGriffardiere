$(document).ready(function(){
    $(".sec_index").show();
    $(".sec_photos").hide();
    $(".sec_produits").hide();
    $(".sec_contact").hide();

    $(".tab_index").addClass( "is-active" );
    $(".tab_photos").removeClass( "is-active" );
    $(".tab_produits").removeClass( "is-active" );
    $(".tab_contact").removeClass( "is-active" );
    $(".tab_index").click(function(){
        $(".sec_index").fadeIn();
        $(".sec_photos").hide();
        $(".sec_produits").hide();
        $(".sec_contact").hide();

        $(".tab_index").addClass( "is-active" );
        $(".tab_photos").removeClass( "is-active" );
        $(".tab_produits").removeClass( "is-active" );
        $(".tab_contact").removeClass( "is-active" );
    });
    $(".tab_photos").click(function(){
        $(".sec_index").hide();
        $(".sec_photos").fadeIn();
        $(".sec_produits").hide();
        $(".sec_contact").hide();

        $(".tab_index").removeClass( "is-active" );
        $(".tab_photos").addClass( "is-active" );
        $(".tab_produits").removeClass( "is-active" );
        $(".tab_contact").removeClass( "is-active" );
    });
    $(".tab_produits").click(function(){
        $(".sec_index").hide();
        $(".sec_photos").hide();
        $(".sec_produits").fadeIn();
        $(".sec_contact").hide();

        $(".tab_index").removeClass( "is-active" );
        $(".tab_photos").removeClass( "is-active" );
        $(".tab_produits").addClass( "is-active" );
        $(".tab_contact").removeClass( "is-active" );
    });
    $(".tab_contact").click(function(){
        $(".sec_index").hide();
        $(".sec_photos").hide();
        $(".sec_produits").hide();
        $(".sec_contact").fadeIn();

        $(".tab_index").removeClass( "is-active" );
        $(".tab_photos").removeClass( "is-active" );
        $(".tab_produits").removeClass( "is-active" );
        $(".tab_contact").addClass( "is-active" );
    });
});


