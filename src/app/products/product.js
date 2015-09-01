var app;
(function (app) {
    var domain;
    (function (domain) {
        var Product = (function () {
            function Product(id, name, code, releaseDate, price, description, imageUrl) {
                this.id = id;
                this.name = name;
                this.code = code;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            Product.prototype.calculateDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return Product;
        })();
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
