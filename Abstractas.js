var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre() {
    }
    Padre.prototype.saludar = function (saludo) {
        return saludo;
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.caminar = function () {
        console.log("Camino");
    };
    Hijo.prototype.gatear = function () {
        console.log("Gateo");
    };
    return Hijo;
}(Padre));
var Primo = /** @class */ (function (_super) {
    __extends(Primo, _super);
    function Primo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Primo.prototype.caminar = function () {
        console.log("Camino Primo");
    };
    Primo.prototype.gatear = function () {
        console.log("Gateo Primo");
    };
    return Primo;
}(Padre));
