"use strict";
exports.__esModule = true;
//---------------------- Manera basica ---------------------
function printLabel(obj) {
    console.log(obj.label);
}
var testObj = { size: 20, label: 'test' };
printLabel(testObj); // No da error ya que existe label dentro del objeto
function printLabel2(obj) {
    console.log(obj.label);
}
var testObj2 = { size: 20, label: 'test' };
printLabel2(testObj2); // No da error ya que existe label dentro del objeto
function printLabel3(obj) {
    console.log(obj.label);
}
var testObj3 = { secret: 1, label: 'test' };
printLabel3(testObj3);
exports["default"] = {};
