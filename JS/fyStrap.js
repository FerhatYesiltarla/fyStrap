$('.fyStrap-menu ul li').unbind('mouseover', mouseOver).unbind('mouseout', mouseOut);
$('.fyStrap-menu ul li').bind('click', click);

$('#myonoffswitch').change(function () {
    if (this.checked) {
        console.log("checked");
        $('.fyStrap-menu ul li').unbind('mouseover', mouseOver).unbind('mouseout', mouseOut);
        $('.fyStrap-menu ul li').bind('click', click);
    }
    else {
        console.log("unchecked");
        $('.fyStrap-menu ul li').unbind('click', click);
        $('.fyStrap-menu ul li').bind('mouseover', mouseOver).bind('mouseout', mouseOut);
    }
});

function mouseOver() {
    var url = $('a', this).attr('data-url');
    load(url);

}
function mouseOut() {
    //$('.fyStrap-menu-content').hide();
    $('.content').html("");
    $('.loader').hide();
}

function click() {
    var url = $('a', this).attr('data-url');
    load(url);
}

function load(action) {
    $.ajax({
        type: "POST",
        url: action,
        dataType: "html",
        beforeSend: function () {
            $('.content').html("");
            $('.loader').show();
        },
        success: function (result) {
            $('.content').html(result);
            $('.loader').hide();
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log(xhr + '-' + textStatus + '-' + errorThrown);
            alert(xhr + '-' + textStatus + '-' + errorThrown);
            $('.loader').hide();
        }
    });
}