console.log('Y ARE U GEH')
console.log($)

$('#teleport-button').click(() => {
    const tempLeft = $(".input-left").val(); 

    $(".input-left").val($(".input-right").val());
    $(".input-right").val(tempLeft);
    console.log(tempLeft);

    //Clears the textfield after buttonn click
    $(".input-left").val("");


});

