var activeImg = 0;
$('document').ready(function(){
    $('.work_preview_btn').click(function() {
        var data = $(this).data('control');
        console.log(data);
        if(activeImg == data) {
            return;
        } else{
            $(".work_image img[data-img='" + activeImg +"']").hide();
            $(".work_image img[data-img='" + data +"']").show();
            $(".work_preview_btn[data-control='" + activeImg +"']").removeClass("active");
            $(".work_preview_btn[data-control='" + data +"']").addClass("active");
            activeImg = data;
        }
    });
});
