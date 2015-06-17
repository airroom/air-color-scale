var oneColor = require('onecolor');

module.exports = ColorScale;

function ColorScale(color, scaleProperties) {
  var originalColor = oneColor(color);
  return colorScale;

  function colorScale(scaleNumber) {
    var scaledColor = originalColor;

    if (!!scaleNumber === false)
      return scaledColor.css();

    scaledColor = scaledColor.value(scaledColor.value() + (scaleProperties.value * scaleNumber));
    scaledColor = scaledColor.saturation(scaledColor.saturation() + (scaleProperties.saturation * scaleNumber));
    scaledColor = scaledColor.hue(scaledColor.hue() + (scaleProperties.hue * scaleNumber));

    return scaledColor.css();

  }
}