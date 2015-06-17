var expect = require('chai').expect;
var ColorScale = require('../');

describe('testing...', function () {
  it('should do stuff', function () {
    var color = new ColorScale('rgb(117, 201, 137)', {
      value: 0.07843137254901966,
      hue: -0.003415300546448119,
      saturation: -0.05859213250517592
    });
    expect(color(0)).to.be.a('string');
  });

});