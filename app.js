var g = G$('John', 'Doe');
g.greet().setLang('es').greet(true);

$('#login').click(function () {
    var loginGretr = G$('John', 'Doe');
    $('#logindiv').hide();
    loginGretr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});