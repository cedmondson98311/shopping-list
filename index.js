//Single Global State Object
var state = {
	items: []
};

//State Modification Functions
var addItem = function(state, item) {
	state.items.push({name:item,checked:false}); 
};


var removeItem = function(state, item) {
	var index;
	for(var i = 0; i < state.items.length; i++) {
		if(state.items[i].name === item) {
			index = i;
		} else{};
	}
		state.items.splice(index, 1);
	
};

var checkItem = function(state, item) {
	var index;
	for(var i = 0; i < state.items.length; i ++) {
		if(state.items[i].name === item) {
			index = i;
		} else{};
	}
	if(state.items[index].checked === true) {
		state.items[index].checked = false;
	} else {
		state.items[index].checked = true;
	}
}

//Render Functions
var renderList = function(state, element) {
	var listhtml = '';
	for(var i = 0; i < state.items.length; i ++) {
		if(state.items[i].checked === false) {
		listhtml += '<li><span class="shopping-item" id="'+state.items[i].name+'">' + state.items[i].name + '</span>' +
        '<div class="shopping-item-controls">' +
		'<button class="shopping-item-toggle">' +
		'<span class="button-label">check</span></button>' +
        '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span></li>';}
        else if(state.items[i].checked === true) {
        	listhtml += '<li><span class="shopping-item shopping-item__checked" id="'+state.items[i].name+'">' + state.items[i].name + '</span>' +
        '<div class="shopping-item-controls">' +
		'<button class="shopping-item-toggle">' +
		'<span class="button-label">check</span></button>' +
        '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span></li>';
        }
	};
	if(state.items.length === 0) {
		listhtml = '';
	}
element.html(listhtml);
}

//Event Listeners
$('.add-item').submit(function(event){
	event.preventDefault();
	addItem(state, $('.add-item-input').val());
	renderList(state, $('.shopping-list'));
});

$('ul').on('click', '.shopping-item-delete', function(event){
	event.preventDefault();
	removeItem(state, $(this).closest('div').siblings('span').text());
	renderList(state, $('.shopping-list'));
});

$('ul').on('click', '.shopping-item-toggle', function(event){
	event.preventDefault();
	checkItem(state, $(this).closest('div').siblings('span').text());
	renderList(state, $('.shopping-list'));
})

