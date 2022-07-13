    jQuery('document').ready(function($){
        //autoplay video
        playVimeo_init($);
    });

    function playVimeo_init($){
        var player = $('iframe[src*="player.vimeo.com"]');
        console.log(player);
        if(player.length <= 0){
            setTimeout(function(){
                playVimeo_init($);
            },500);
        }else
            playVimeo($, player);
    }

    function playVimeo($, player){
        var url = new URL($(player).attr('src'));
        url.searchParams.set('autoplay', '1');
        url.searchParams.set('loop', 1);
        $(player).attr('src',url);
        //remove cover
        $('.n2_ss_video_player__cover img').remove();
    }
