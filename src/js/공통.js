$('.ta_btn').click(function(){
    const id = $(this).attr('data-id');
    const content = $(`#${id}`).val();
    eval(content);
    console.log(content);
})