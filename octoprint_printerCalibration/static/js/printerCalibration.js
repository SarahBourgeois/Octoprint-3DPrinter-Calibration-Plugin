/*
 * View model for OctoPrint-Printercalibration
 *PrintercalibrationViewModel
 * Author: Sarah Bourgeois
 * License: AGPLv3
 */
$(function () {
    function PrintercalibrationViewModel(parameters) {
        var self = this;

        self.settings = parameters[0];

        // this will hold the URL currently displayed by the iframe
        self.currentUrl = ko.observable();

        // this will hold the URL entered in the text field
        self.newUrl = ko.observable();

        // this will be called when the user clicks the "Go" button and set the iframe's URL to
        // the entered URL
        self.goToUrl = function () {
            self.currentUrl(self.newUrl());
        };

        // This will get called before the HelloWorldViewModel gets bound to the DOM, but after its
        // dependencies have already been initialized. It is especially guaranteed that this method
        // gets called _after_ the settings have been retrieved from the OctoPrint backend and thus
        // the SettingsViewModel been properly populated.
        self.onBeforeBinding = function () {
            self.newUrl(self.settings.settings.plugins.printerCalibration.url());
            self.goToUrl();
        }

        // assign the injected parameters, e.g.:
        self.loginStateViewModel = parameters[0];
        self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push([
        PrintercalibrationViewModel,
        // This is a list of dependencies to inject into the plugin, the order which you request
        // here is the order in which the dependencies will be injected into your view model upon
        // instantiation via the parameters argument
        ["settingsViewModel"],

        // Finally, this is the list of selectors for all elements we want this view model to be bound to.
        ["#tab_plugin_printerCalibration"]
    ]);
});