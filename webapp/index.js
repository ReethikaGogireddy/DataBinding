sap.ui.require(["sap/m/Text"], function (Text) {
  "use strict";

  // Attach an anonymous function to the SAPUI5 'init' event
  sap.ui.getCore().attachInit(function () {
    // Create a text UI element that displays a hardcoded text string
    new Text({ text: "Hi, my name is Reethika Gogireddy" }).placeAt("content");
  });
});

/*sap.ui.getCore().attachInit(function () { ... }) ensures that your code
(anything inside the function) doesn't run until the essential parts
 of SAP UI5 are fully loaded */
