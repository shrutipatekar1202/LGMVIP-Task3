function fun() {
    var l = [];
    var n = $("#name").val();
    var e = $("#email").val();
    var pn = $("#pname").val();
    var p = $("#website").val(); //github link
    var ph =$("#photo").val();
    var g = $('input[name="type"]:checked').val();;
    var selected = new Array();
    $("input[type=checkbox]:checked").each(function () {
        selected.push(this.value);
    });
    var k = '<div class=s1>'+
    '<table><tr><td><p class="p"><strong>Name </strong>:'+
    `${n}`+'</p><p class="p"><strong>Email </strong>: '+
    `${e}`+'</p><p class="p"><strong>Project Name </strong>:'+
    `${pn}`+'</p><p class="p"><strong>Github Link </strong>:'+
    `${p}`+'</p><p class="p"><strong>Project Type</strong> : '+
    `${g}`+'</p><p class="p"><strong>Skills</strong> : '+
    `${selected}`+'<td><img src="'+`${ph}`+'"></td></tr></table></div>';
    $('#ss').append(k);
    $("#fo").trigger("reset");
}
