$(function(){
   'use strict' ;
   //Pagination active
   $('.pagination a').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    });
});