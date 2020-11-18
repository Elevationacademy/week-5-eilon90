//Exercise 2
function displayPrice() {
    $.ajax({
        method: 'GET',
        url: `/priceCheck/${$('#furniture').val()}`,
        success: function(data) {
            const source = $('#fur-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template({price: data});
            $('body').append(newHTML);
        },
        error: function(xhr, text, error) {
            console.log(text);
        }
    })
}

//Exercise 5
function buy() {
    $.ajax({
        method: 'GET',
        url: `/buy/${$('#buy').val()}`,
        success: function(data) {
            const source = $('#buy-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template({text: data});
            $('body').append(newHTML);
        },
        error: function(xhr, text, error) {
            console.log(text);
        }
    })
}
