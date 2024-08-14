sap.ui.define([
	"sap/ui/core/library",
	"./models"
], function (coreLibrary, models) {
	"use strict";
	
	/**
	 * Returns the URL for the file attachment
	 *
	 * @param {Object} oAttachmentFile The file attachment object
	 * @returns {string} The URL of the file attachment
	 */
	const getMediaUrl = (odocguid) => {
		const oModel = models.getODataModel(),
			sPath = oModel.createKey("/DokumentSet", {
				docguid: odocguid

			});

		return oModel.sServiceUrl + sPath + "/$value";
	};

	/**

	 * @property {function} getAttachmentUrl
	 * @public
	 */
	return {
	  getMediaUrl:  getMediaUrl
	};

});