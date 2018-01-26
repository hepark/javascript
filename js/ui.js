    (function($) {
        $(document).ready(function() {
            // faq accordion
            $("dl.faq dd").css("display", "none");
            $("dl.faq dt").click(function(e) {
                if ($("+dd", this).css("display") == "none") {
                    $("dl.faq dd").slideUp(300, "swing");
                    $("+dd", this).slideDown(300, "swing");
                    $("dl.faq dt").removeClass("on");
                    $(this).addClass("on");
                } else {
                    $("+dd", this).slideUp(300, "swing");
                    $(this).removeClass("on");
                }
                e.preventDefault();
            });

             // tab
            function tab_contents() {
                var $tbtn = $('.tab_btn li');
                var $tab_contentsOb = $('.tab_contents');

                $tab_contentsOb.hide();
                $tab_contentsOb.eq(0).show();
                $tbtn.eq(0).addClass('on');

                $tbtn.click(function(e) {

                    e.preventDefault();

                    idx = $(this).index();

                    $tbtn.removeClass();
                    $tbtn.eq(idx).addClass('on');
                    $tab_contentsOb.hide();
                    $tab_contentsOb.eq(idx).show();
                });
            }
            // tab function
            tab_contents();

            // layer_popup
            /*$('.dmenu_bt').click(function(e){
                $('.dmenu').toggleClass('on');
                $('.dmenu.on').click(function(e){
                    $('.dmenu').removeClass('on');
                });
                e.preventDefault();
            });*/


            $('a.dmenu_bt').click(function(e){
                var id = $(this).attr('href');
                $(id).fadeIn("fast");
                $(id).find('li > a').click(function(e){
                    var txt = $(this).text();
                    $('#result-txt').text(txt);
                    $(id).fadeOut("fast");
                    e.preventDefault();
                });
                e.preventDefault();
            });


            // 
            var $notice_bar = $('.notice_bar'),
                $tab_menu = $('.tab_menu'),
                $quick = $('.quick'),
                $box_line = $('.box_line'),
                margin = $notice_bar.outerHeight(true) + $quick.outerHeight(true) + $tab_menu.outerHeight(true),
                window_size = $(window).outerHeight() - margin,
                body_size = $('body').outerHeight() - margin + $quick.outerHeight(true);

            function size() {
                // if (window_size < body_size) {
                //     $box_line.css('min-height', window_size);
                // }         else {
                //     $box_line.css('min-height', 'auto');
                // }
                $box_line.css('min-height', window_size-12);
            }
            size();
            $(window).on('resize', function() {
                size();
            });

            // var $wrap_in = $('.wrap_in'),
            //     $quick = $('.quick'),
            //     margin = $quick.outerHeight(true),
            //     window_size = $(window).outerHeight() - margin,
            //     body_size = $('body').outerHeight() - margin + $quick.outerHeight(true);

            // function size() {
            //     if (window_size < body_size) {
            //         $wrap_in.css('height', window_size-11);
            //     } else {
            //         $wrap_in.css('height', 'auto');
            //     }
            // }
            // size();
            // $(window).on('resize', function() {
            //     size();
            // });
            // 
        });
    })(jQuery);