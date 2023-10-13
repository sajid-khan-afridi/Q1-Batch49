var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Operation = /** @class */ (function () {
    function Operation(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    return Operation;
}());
var Subtraction = /** @class */ (function (_super) {
    __extends(Subtraction, _super);
    function Subtraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subtraction.prototype.execute = function () {
        return this.num1 - this.num2;
    };
    return Subtraction;
}(Operation));
var Addition = /** @class */ (function (_super) {
    __extends(Addition, _super);
    function Addition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Addition.prototype.execute = function () {
        return this.num1 + this.num2;
    };
    return Addition;
}(Operation));
var obj1 = new Subtraction(23, 10);
var obj2 = new Addition(23, 10);
console.log(obj1.execute());
console.log(obj2.execute());
