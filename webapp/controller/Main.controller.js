sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.ten.smart.tablezten_smart_Table.controller.Main", {
				
				 onInit: function() {
            	 var oModel, oView;
                //  oModel = new sap.ui.model.odata.ODataModel("YOUR URL", true);
                 oModel = this.getOwnerComponent().getModel("Booking");
                 // oModel.setCountSupported(false);
                  oView = this.getView();
                  oView.setModel(oModel);

      }
	});
});