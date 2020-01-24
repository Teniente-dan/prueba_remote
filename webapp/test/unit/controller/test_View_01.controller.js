/*global QUnit*/

sap.ui.define([
	"test_avs_01/Zproyecto1/controller/test_View_01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("test_View_01 Controller");

	QUnit.test("I should test the test_View_01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});