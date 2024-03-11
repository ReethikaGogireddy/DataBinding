sap.ui.require(
  [
    "sap/ui/core/Core",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Core, JSONModel, XMLView, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    Core.ready().then(function () {
      // create a JSON model that contains the name
      var oModel = new JSONModel({
        firstName: "Reethika",
        lastName: "Gogireddy",
        enabled: true,
        address: {
          street: "Dietmar-Hopp-Allee 16",
          city: "Walldorf",
          zip: "69190",
          country: "Germany",
        },
      });

      sap.ui.getCore().setModel(oModel);

      var oResourceModel = new ResourceModel({
        bundleName: "ui5.databinding.i18n.i18n",
        supportedLocales: ["", "de"],
        fallbackLocale: "",
      });

      sap.ui.getCore().setModel(oResourceModel, "i18n");

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
