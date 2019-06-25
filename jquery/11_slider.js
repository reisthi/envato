(function($) {
  var sliderUL = $("div.slider")
      .css("overflow", "hidden")
      .children("ul"),
    imgs = sliderUL.find("img"),
    imgWidth = imgs[0].width, // 1000
    imgsLen = imgs.length, // 4
    current = 1,
    totalImgsWidth = imgsLen * imgWidth; // 3000

  $("#slider-nav")
    .show()
    .find("button")
    .on("click", function() {
      var direction = $(this).data("dir"),
        loc = imgWidth; // 1000px

      // update current (verbose way)
      direction == "next" ? ++current : --current;
      //   if (direction === "next") {
      //     current += 1; // 2
      //   } else {
      //     current -= 1; // 0
      //   }
      //  if first image
      if (current === 0) {
        current = imgsLen;
        loc = totalImgsWidth - imgWidth;
        direction = "next";
      } else if (current - 1 === imgsLen) {
        current = 1;
        loc = 0;
      }

      transition(sliderUL, loc, direction);
      // update current (simpler way)
      // direction == "next" ? current += 1 : current -= 1;
      // direction == "next" ? ++current : --current ;
    });
  function transition(container, loc, direction) {
    var unit;
    if (direction && loc !== 0) {
      unit = direction == "next" ? "-=" : "+=";
    }
    container.animate({ "margin-left": unit ? unit + loc : loc });
  }
})(jQuery);
