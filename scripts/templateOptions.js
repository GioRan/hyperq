window.templateOptions = {
	userInforModalOption: function(){
		$(".modal").modal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: .5, // Opacity of modal background
			inDuration: 300, // Transition in duration
			outDuration: 200, // Transition out duration
			startingTop: '4%', // Starting top style attribute
			endingTop: '10%' // Ending top style attribute
		}).modal("open");
	},
	userInfoNoUpdateModalOption: function(){
		$(".modal").modal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: .5, // Opacity of modal background
			inDuration: 300, // Transition in duration
			outDuration: 200, // Transition out duration
			startingTop: '4%', // Starting top style attribute
			endingTop: '30%' // Ending top style attribute
		}).modal("open");
	},
	userInfoSavedModalOption: function(){
		$(".modal").modal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: .5, // Opacity of modal background
			inDuration: 300, // Transition in duration
			outDuration: 200, // Transition out duration
			startingTop: '4%', // Starting top style attribute
			endingTop: '30%' // Ending top style attribute
		}).modal("open");
	},
	loginModalOption: function(){
		$(".modal").modal({
				dismissible: true, // Modal can be dismissed by clicking outside of the modal
				opacity: .5, // Opacity of modal background
				inDuration: 300, // Transition in duration
				outDuration: 200, // Transition out duration
				startingTop: '4%', // Starting top style attribute
				endingTop: '10%' // Ending top style attribute
		}).modal("open");
	},
	alreadyOrderedModalOption: function(){
		$(".modal").modal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: .5, // Opacity of modal background
			inDuration: 300, // Transition in duration
			outDuration: 200, // Transition out duration
			startingTop: '4%', // Starting top style attribute
			endingTop: '10%' // Ending top style attribute
		}).modal("open");
	},
	smallModalOption: function(){
		$(".modal").modal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: .5, // Opacity of modal background
			inDuration: 300, // Transition in duration
			outDuration: 200, // Transition out duration
			startingTop: '4%', // Starting top style attribute
			endingTop: '10%' // Ending top style attribute
		}).modal("open");
	}
}