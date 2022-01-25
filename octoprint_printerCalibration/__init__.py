# coding=utf-8
#PrintercalibrationPlugin
from __future__ import absolute_import, unicode_literals

import octoprint.plugin


class PrintercalibrationPlugin(octoprint.plugin.StartupPlugin,
                       octoprint.plugin.TemplatePlugin,
                       octoprint.plugin.SettingsPlugin,
                       octoprint.plugin.AssetPlugin):
    
    def on_after_startup(self):
        self._logger.info("Congrats ! Plugin is now launching (more: %s)" % self._settings.get(["url"]))

    def get_settings_defaults(self):
        return dict(url="https://github.com/SarahBourgeois/Octoprint-3DPrinter-Calibration-Plugin")

    def get_template_configs(self):
        return [
            dict(type="navbar", custom_bindings=False),
            dict(type="settings", custom_bindings=False)
        ]   

    def get_assets(self):
        return dict(
            js=["js/printerCalibration.js"]
        )

# INFO
__plugin_name__ = "Printer Calibration Plugin"
__plugin_pythoncompat__ = ">=2.7,<4"
__plugin_implementation__ = PrintercalibrationPlugin()
