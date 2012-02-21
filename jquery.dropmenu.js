(function($){
  var visible;

  $.fn.dropmenu = function(options){
    var settings = $.extend({
          defaultVisible: false,
          triggerElement: 'dt',
          childElement  : 'dd'
        }, options);

    var parentObj  = $(this),
        triggerObj = $(this).find(settings.triggerElement),
        childObj   = $(this).find(settings.childElement);

    visible = settings.defaultVisible;
    if (!visible) {
      childObj.hide();
    }

    triggerObj.click(function(){
      if (switchVisible()) {
        childObj.slideUp();
      } else {
        childObj.slideDown();
      }
    });

    $(document).click(function(ev){
      if (ev.target !== parentObj && !parentObj.has(ev.target).length) {
        if (visible) {
          childObj.slideUp();
          switchVisible();
        }
      }
    });

    //$(this).click(function(ev){
    //  ev.stopPropagation();
    //});
  };

  function switchVisible(){
    visible = (visible) ? false : true;
    return !visible;
  }

})(jQuery)
