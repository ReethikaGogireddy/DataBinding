sap.ui.require(
  ["sap/m/Text", "sap/ui/model/json/JSONModel"],
  function (Text, JSONModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
      // create a JSON model that contains the name
      var oModel = new JSONModel({
        greetingText: "Hi,my name is Reethika",
      });

      sap.ui.getCore().setModel(oModel); // this is not a good practise
      // in the above line we are simply saying that we are adding a model/table(of data) to application
      new Text({ text: "Hi, my name is Reethika Gogireddy" }).placeAt(
        "content"
      );
    });
  }
);

/*sap.ui.getCore().attachInit(function () { ... }) ensures that your code
(anything inside the function) doesn't run until the essential parts
 of SAP UI5 are fully loaded */
