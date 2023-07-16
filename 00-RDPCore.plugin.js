/**
 * @name RDP
 * @author IsCoffeeTho
 * @description ReliableDiscordPlugin is a library to enhance plugins to utilize discord.
 * @authorLink https://github.com/IsCoffeeTho
 * @source https://github.com/IsCoffeeTho/RDP
 * @version 0.0.1
*/

// RDP Core
if (!document.body.RDP) {
	var _RDP_CARD_CHANGED_ = false;
	setInterval(() => {
		var RDPActivateSwitch = document.querySelector("#RDP-card>.bd-addon-header>.bd-switch");
		if (RDPActivateSwitch) {
			if (!_RDP_CARD_CHANGED_) {
				RDPActivateSwitch.innerHTML = "Activated";
				_RDP_CARD_CHANGED_ = true;
			}
		} else
			_RDP_CARD_CHANGED_ = false;
	}, 1);
}
document.body.RDP = true;

// class RDP
module.exports = class ReliablePlugin {
	constructor(opts = {
		settings: {}
	}) {
		if (opts.settings) {
			this.getSettingsPanel = () => { return null };
		}
	}

	start() {
		BdApi.Plugins.disable("RDP");
	}
	stop() {

	}
}