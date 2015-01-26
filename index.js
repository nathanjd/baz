var Bar = require('@nathanjd/bar');

function Baz() {

}

Baz.prototype.toHTML = function () {
    var bar = new Bar();

    return '<div class="baz">' +
        '<h2>Baz v1.0.0<h2>' +
        bar.toHTML() +
    '</div>';
};

module.exports = Baz;
