angular
	.module("juicrApp")
	.controller("LocalStorageController", LocalStorageController);

	function LocalStorageController() {
		var self = this;

		self.juice = '';
		self.juicrApp = [];

		this.saveJuice = function() {

	
			console.log(self.juice)
			
			var object = { juice: self.juice };

			self.juicrApp = JSON.parse(localStorage.getItem('juicrApp'));

			if (!self.juicrApp) {self.juicrApp = []}

			self.juicrApp.push(object);

			localStorage.setItem('juicrApp', JSON.stringify(self.juicrApp));

		}

	}