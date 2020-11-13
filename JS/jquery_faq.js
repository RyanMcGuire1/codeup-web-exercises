"use strict";

$(document).ready(function(){

$('#info').click(function(e){
    $('.invisible').toggleClass('hide');
})

$('#color').click(function(e){
    $('#andromeda, #betelgeuse, #ceres').each(function(index, element){
        $(element).children().last().css('background', 'yellow');
    });
})

$('#andBold').click(function(e){
    $('#andromeda').each(function(index, element){
      $(element).children().css('font-weight', 'bold')
    })
})

$('#betBold').click(function(e){
    $('#betelgeuse').each(function(index, element){
        $(element).children().css('font-weight', 'bold')
    })
})

$('#cerBold').click(function(e){
    $('#ceres').each(function(index, element){
        $(element).children().css('font-weight', 'bold')
    })
})




























})