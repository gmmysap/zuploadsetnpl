sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

    /**
	 * The app's OData model
	 * 
	 * @type {sap.ui.model.odata.v2.ODataModel}
	 * @private
	 */
	let oODataModel;
    /**
	 * @function
	 * @param {sap.ui.model.odata.v2.ODataModel} oNewODataModel The component's OData model
	 * @public
	 */
	const setODataModel = (oNewODataModel) => oODataModel = oNewODataModel;

	/**
	 * @function
	 * @returns {sap.ui.model.odata.v2.ODataModel} The component's OData model
	 * @public
	 */
	const getODataModel = () => oODataModel;	




        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },
		getODataModel: getODataModel,
		setODataModel: setODataModel

    };
});