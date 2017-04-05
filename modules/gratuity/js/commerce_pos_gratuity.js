(function ($) {
  Drupal.behaviors.commercePosGratuity = {
    attach: function (context, settings) {
      if (settings.commercePosGratuity && settings.commercePosGratuity.focusInput) {
        $('#commerce-pos-gratuity-wrapper-' + settings.commercePosGratuity.lineItemId + ' .form-wrapper .form-text').focus();
      }

      $('.commerce-pos-remove-order-gratuity', context).click(function(event){
        event.preventDefault();

        $('.commerce-pos-remove-order-gratuity').trigger('remove_order_gratuity');
      });
    }
  };

}(jQuery));
