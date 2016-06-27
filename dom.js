function factorial(x){
	if(x === 1){
		return 1
	} else {
		return x * factorial(x-1);
	}
}

function walkTheDOM(parent, cb){
	cb(parent);
	for(var i = 0; i < parent.children.length; i++) {
		walkTheDOM(parent.children[i], cb);
	}
}

function findElementById(parent, id) {
	var result;
	walkTheDOM(parent, function(child){
		if (child.id === id && !result) {
			result = child;
		}
	})
	if(result){
		return result;
	}
}

function findElementsByTagName(parent, tag){
	var result = [];
	walkTheDOM(parent, function(x){
		if(x.tagName === tag.toUpperCase()){
			result[result.length] = x;
		}
	})
	return result;
}

function findElementsByClassName(parent){
	var result = [];
	var args = Array.from(arguments);
	args = args.slice(1);
	walkTheDOM(parent, function(x){
		var classes = x.classList;
		var match = true;
		for(var i = 0; i < args.length; i++){
			if(!classes.contains(args[i])){
				match = false;
			}
		}
		if(match){
			result[result.length] = x;
		}
	})
	return result;
}

