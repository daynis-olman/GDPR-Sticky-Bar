    $(document).ready(function() {
        $('#gdpr-alert-container').stickyalert({
            barColor: '#0082c8', // alert background color
            barFontColor: '#FFF', // text font color
            barFontSize: '1.1rem', // text font size
            barText: 'Our website uses cookies. <u>Learn more</u>', // the text to display, linked with barTextLink
            barTextLink: '/privacy#cookies', // url for anchor
            cookieRememberDays: '365', // in days
            displayDelay: '3000' // in milliseconds, 3 second default
        });
    });



(function($){

  $.fn.extend({

    stickyalert: function(options) {

      var defaults = {
        barColor: '#222', // alert background color
        barFontColor: '#FFF', // text font color
        barFontSize: '1.1rem', // text font size
        barText: 'We use cookies to enhance your web experience', // the text to display, linked with barTextLink
        barTextLink: '/privacy#cookies', // url for anchor
        cookieRememberDays: '2' // in days
      };

      var options = $.extend(defaults, options);

      return this.each(function() {

        if (document.cookie.indexOf("jqsa") >= 0) {

          $('.alert-box').remove();

        }

        else {
          // show the alert
          $('<div class="alert-box" style="background-color:' + options.barColor + '"><a href="' + options.barTextLink + '" style="color:' + options.barFontColor + '; font-size:' + options.barFontSize + '">' + options.barText + '</a><a href="" class="close">&#10006;</a></div>').appendTo(this);

          $(".alert-box").delegate("a.close", "click", function(event) {

            event.preventDefault();

            $(this).closest(".alert-box").fadeOut(function(event){

              $(this).remove();

              // set a new cookie
              if (options.cookieRememberDays === 0) {

                // do nothing

              }

              else {

                var hidefor =  60 * 60 * 24 * options.cookieRememberDays;

                document.cookie = "jqsa=closed;max-age=" + hidefor;

              }

            });

          });
        }
      });
    }
  });
})(jQuery);
