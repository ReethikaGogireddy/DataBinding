sap.ui.require(
  [
    "sap/ui/core/Core",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
	  "sap/ui/model/BindingMode"
  ],
  function (Core, JSONModel, XMLView,BindingMode) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    Core.ready().then(function () {
      // create a JSON model that contains the name
      var oModel = new JSONModel({
        firstName: "Reethika",
        lastName: "Gogireddy",
        enabled: true,
        panelHeaderText: "Data Binding Basics"
      });

      oModel.setDefaultBindingMode(BindingMode.OneWay);
      
      sap.ui.getCore().setModel(oModel); // this is not a good practise
      // in the above line we are simply saying that we are adding a model/table(of data) to application
      // Display a text element whose text is derived
      // from the model object

      //new Text({ text: "{/greetingText}" }).placeAt("content");

      // Display the XML view called "App"
      new XMLView({
        viewName: "ui5.databinding.view.App",
      }).placeAt("content");
    });
  }
);

/*sap.ui.getCore().attachInit(function () { ... }) ensures that your code
(anything inside the function) doesn't run until the essential parts
 of SAP UI5 are fully loaded */
