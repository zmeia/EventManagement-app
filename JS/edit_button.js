$('.edit#name').click(() => { 
    $value = $('.fieldValue#name').html();
    $arrValue = $value.split(' ');
    $('.fieldValue#name').remove();
    $form = ' <form action=" " method="post" class="form__edit"> <input type="text"name="name" required placeholder="First Name" value="'+$arrValue[0]+'"> <input type="text"name="surname" required placeholder="Last Name" value="'+$arrValue[1]+'"> <input type="submit" name="submit" value = "Save" class = "button" id="name">'
    $('.actual#name').append($form);
    $('.edit#name').remove();
})

$('.edit#email').click(() => { 
    $value = $('.fieldValue#email').html();
    $('.fieldValue#email').remove();
    $form = ' <form action=" " method="post" class="form__edit"> <input type="email" name="email" required placeholder="Email" value="'+$value+'"> <input type="submit" name="submit" value = "Save" class = "button" id="email">'
    $('.actual#email').append($form);
    $('.edit#email').remove();
})

$('.edit#phone').click(() => { 
    $value = $('.fieldValue#phone').html();
    $('.fieldValue#phone').remove();
    $form = ' <form action=" " method="post" class="form__edit"> <input type="text" name="phone" required placeholder="Phone number" value="'+$value+'"> <input type="submit" name="submit" value = "Save" class = "button" id="phone">'
    $('.actual#phone').append($form);
    $('.edit#phone').remove();
})