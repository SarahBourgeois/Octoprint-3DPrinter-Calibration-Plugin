# coding=utf-8
#PrintercalibrationPlugin
from __future__ import absolute_import, unicode_literals

import octoprint.plugin


class PrintercalibrationPlugin(octoprint.plugin.StartupPlugin):
    def on_after_startup(self):
        self._logger.info("Hello World!")

# INFO
__plugin_name__ = "Printer Calibration Plugin"
__plugin_pythoncompat__ = ">=2.7,<4"
__plugin_implementation__ = PrintercalibrationPlugin()
