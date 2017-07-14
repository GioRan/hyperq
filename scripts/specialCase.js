window.specialCase = function(){
	var inst = this;
	
	//card function
	this.addItemCount = function(item, price, event){
		var element = event.currentTarget.previousSibling.value;
		var int = parseInt(element);
		int++;
		event.currentTarget.previousSibling.value = int;
	}
	
	this.minusItemCount = function(item, price, event){
		var element = event.currentTarget.nextElementSibling.value;
		var int = parseInt(element);
		int--;
		if(int >= 0){
			event.currentTarget.nextElementSibling.value = int;
		} else if(int < 0){
			event.currentTarget.nextElementSibling.value = 0;
		}
	}
}