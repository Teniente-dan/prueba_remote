/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test_avs_01/Zproyecto1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});