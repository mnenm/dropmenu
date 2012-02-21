(function($){
  var visible;

  $.fn.dropmenu = function(config){
    var defaults = {
          defaultVisible: false,
          triggerElement: 'dt',
          childElement  : 'dd'
        };

    var settings   = $.extend(defaults, config),
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

    $(document).click(function(){
      if (!visible) {
        childObj.slideUp();
      }
    });

    $(this).click(function(ev){
      ev.stopPropagation();
    });
  };

  function switchVisible(){
    visible = (visible) ? false : true;
    return !visible;
  }

})(jQuery)
