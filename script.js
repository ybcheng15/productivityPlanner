const check = `checked="checked"`;
const cross = `cross`;
const done = `done`;

const reset_full = document.querySelector("#weekReset");

const reset_1 = document.querySelector("#reset_1");
const reset_2 = document.querySelector("#reset_2");
const reset_3 = document.querySelector("#reset_3");
const reset_4 = document.querySelector("#reset_4");
const reset_5 = document.querySelector("#reset_5");
const reset_6 = document.querySelector("#reset_6");
const reset_7 = document.querySelector("#reset_7");

const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");
const list4 = document.getElementById("list4");
const list5 = document.getElementById("list5");
const list6 = document.getElementById("list6");
const list7 = document.getElementById("list7");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const input6 = document.getElementById("input6");
const input7 = document.getElementById("input7");


// dates:
const displayWEEK = document.getElementById("displayWEEK");

const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const display3 = document.getElementById("display3");
const display4 = document.getElementById("display4");
const display5 = document.getElementById("display5");
const display6 = document.getElementById("display6");
const display7 = document.getElementById("display7");

const optionsWEEK = {month:"short", day:"numeric"};
const optionsDAY = {weekday: "long", month:"short", day:"numeric"};


const day1 = new Date();
const day2 = new Date(Date.now() + 1000 * 3600 * 24);
const day3 = new Date(Date.now() + 1000 * 3600 * 48);
const day4 = new Date(Date.now() + 1000 * 3600 * 72);
const day5 = new Date(Date.now() + 1000 * 3600 * 96);
const day6 = new Date(Date.now() + 1000 * 3600 * 120);
const day7 = new Date(Date.now() + 1000 * 3600 * 144);

let ARR_1, ARR_2, ARR_3, ARR_4, ARR_5, ARR_6, ARR_7;
let id_1, id_2, id_3, id_4, id_5, id_6, id_7;


// local data section:

// getting local dates
let date1 = localStorage.getItem("DATE_1");
let date2 = localStorage.getItem("DATE_2");
let date3 = localStorage.getItem("DATE_3");
let date4 = localStorage.getItem("DATE_4");
let date5 = localStorage.getItem("DATE_5");
let date6 = localStorage.getItem("DATE_6");
let date7 = localStorage.getItem("DATE_7");

// setting the week
setWeek(date1, date7, day1, day7, displayWEEK);

// setting each date
setDate(date1, day1, display1, "DATE_1");
setDate(date2, day2, display2, "DATE_2");
setDate(date3, day3, display3, "DATE_3");
setDate(date4, day4, display4, "DATE_4");
setDate(date5, day5, display5, "DATE_5");
setDate(date6, day6, display6, "DATE_6");
setDate(date7, day7, display7, "DATE_7");

// getting local data
let data1 = localStorage.getItem("TODO_1");
let data2 = localStorage.getItem("TODO_2");
let data3 = localStorage.getItem("TODO_3");
let data4 = localStorage.getItem("TODO_4");
let data5 = localStorage.getItem("TODO_5");
let data6 = localStorage.getItem("TODO_6");
let data7 = localStorage.getItem("TODO_7");


// get or create local data for each day
ARR_1 = getLocalARR(data1, ARR_1, list1);
id_1 = getLocalId(data1, ARR_1, id_1);

ARR_2 = getLocalARR(data2, ARR_2, list2);
id_2 = getLocalId(data2, ARR_2, id_2);

ARR_3 = getLocalARR(data3, ARR_3, list3);
id_3 = getLocalId(data3, ARR_3, id_3);

ARR_4 = getLocalARR(data4, ARR_4, list4);
id_4 = getLocalId(data4, ARR_4, id_4);

ARR_5 = getLocalARR(data5, ARR_5, list5);
id_5 = getLocalId(data5, ARR_5, id_5);

ARR_6 = getLocalARR(data6, ARR_6, list6);
id_6 = getLocalId(data6, ARR_6, id_6);

ARR_7 = getLocalARR(data7, ARR_7, list7);
id_7 = getLocalId(data7, ARR_7, id_7);



// week reset
reset_full.addEventListener("click", function() {
	// clear local
	localStorage.clear();
	location.reload();
});


// day resets
reset_1.addEventListener("click", function() {
	localStorage.removeItem("TODO_1");
	location.reload();
});

reset_2.addEventListener("click", function() {
	localStorage.removeItem("TODO_2");
	location.reload();
});

reset_3.addEventListener("click", function() {
	localStorage.removeItem("TODO_3");
	location.reload();
});

reset_4.addEventListener("click", function() {
	localStorage.removeItem("TODO_4");
	location.reload();
});

reset_5.addEventListener("click", function() {
	localStorage.removeItem("TODO_5");
	location.reload();
});

reset_6.addEventListener("click", function() {
	localStorage.removeItem("TODO_6");
	location.reload();
});

reset_7.addEventListener("click", function() {
	localStorage.removeItem("TODO_7");
	location.reload();
});





// input box
document.addEventListener("keyup", function(event){

	if (event.keyCode == 13) {	
		// pressed enter

		const txt_toDo1 = input1.value;
		const txt_toDo2 = input2.value;
		const txt_toDo3 = input3.value;
		const txt_toDo4 = input4.value;
		const txt_toDo5 = input5.value;
		const txt_toDo6 = input6.value;
		const txt_toDo7 = input7.value;

		id_1 = checkAndAddInput(input1, txt_toDo1, id_1, list1, ARR_1, "TODO_1");
		id_2 = checkAndAddInput(input2, txt_toDo2, id_2, list2, ARR_2, "TODO_2");
		id_3 = checkAndAddInput(input3, txt_toDo3, id_3, list3, ARR_3, "TODO_3");
		id_4 = checkAndAddInput(input4, txt_toDo4, id_4, list4, ARR_4, "TODO_4");
		id_5 = checkAndAddInput(input5, txt_toDo5, id_5, list5, ARR_5, "TODO_5");
		id_6 = checkAndAddInput(input6, txt_toDo6, id_6, list6, ARR_6, "TODO_6");
		id_7 = checkAndAddInput(input7, txt_toDo7, id_7, list7, ARR_7, "TODO_7");
	}

});





list1.addEventListener("click", function(event) {
	eventInteract(ARR_1, "TODO_1");
});

list2.addEventListener("click", function(event) {
	eventInteract(ARR_2, "TODO_2");
});

list3.addEventListener("click", function(event) {
	eventInteract(ARR_3, "TODO_3");
});

list4.addEventListener("click", function(event) {
	eventInteract(ARR_4, "TODO_4");
});

list5.addEventListener("click", function(event) {
	eventInteract(ARR_5, "TODO_5");
});

list6.addEventListener("click", function(event) {
	eventInteract(ARR_6, "TODO_6");
});

list7.addEventListener("click", function(event) {
	eventInteract(ARR_7, "TODO_7");
});




// functions:

// set or load week
function setWeek(date_first, date_last, day1, day7, display) {
	if (date_first && date_last) {
		date_first = new Date(date_first);
		date_last = new Date(date_last);
		display.innerHTML = date_first.toLocaleDateString("en-US", optionsDAY) + " - " + date_last.toLocaleDateString("en-US", optionsDAY);
	} else {
		display.innerHTML = day1.toLocaleDateString("en-US", optionsDAY) + " - " + day7.toLocaleDateString("en-US", optionsDAY);
	}
}


// set or load dates
function setDate(date, day, display, localName) {
	if (date) {
		date = new Date(date);
		display.innerHTML = date.toLocaleDateString("en-US", optionsDAY);
	} else {
		display.innerHTML = day.toLocaleDateString("en-US", optionsDAY);
		localStorage.setItem(localName, day);
	}
}


// get local array
function getLocalARR(data, ARRAY, list){
	if (data) {
		// non empty data (already used)
		ARRAY = JSON.parse(data);
		id = ARRAY.length;
		loadList(ARRAY, list);
	} else {
		// new data
		ARRAY = [];
	}
	return ARRAY;
}

// get local id
function getLocalId(data, ARRAY, id){
	if (data) {
		id = ARRAY.length;
	} else {
		id = 0;
	}
	return id;
}


// adds input to list if there input is not null
function checkAndAddInput(input, txt, id, list, ARRAY, todo) {
	if (txt) {
		// non-empty input
		const text = addToList(txt, id, false, false, list);

		ARRAY.push({
			name : txt,
			id : id,
			complete : false,
			trash : false
		});

		localStorage.setItem(todo, JSON.stringify(ARRAY));
		id++;
	}
	input.value = "";
	return id;
}


// interacting with complete and delete
function eventInteract(ARRAY, todo) {
	const element = event.target;
	const elementJob = element.attributes.job.value;

	if (elementJob == "delete") {
		removeFromList(element, ARRAY);
	} else if (elementJob == "complete") {
		completeTask(element, ARRAY);	
	}
	localStorage.setItem(todo, JSON.stringify(ARRAY));
}


// loading local
function loadList(arr, list) {
	arr.forEach(function(item) {
		addToList(item.name, item.id, item.complete, item.trash, list);
	});
}


// to add new task/item
function addToList(txt_toDo, id, complete, trash, list) {
	if (trash) {
		return;
	}

	const COMP = complete ? check : "";
	const CROSS = complete ? cross : "";

	const text = `<li class="items" job="NONE">
						<input type="checkbox" ${COMP} job="complete" id="${id}">
              			<p class="text ${CROSS}" job="NONE">${txt_toDo}</p>
              			<img src="images/trash.png" class="img_trash" job="delete" id="${id}">
          		</li>`;

	list.insertAdjacentHTML("beforeend", text);
}


// to remove task/item
function removeFromList(element, ARRAY) {

	element.parentNode.parentNode.removeChild(element.parentNode);
	ARRAY[element.id].trash = true;
}

// complete function
function completeTask(element, ARRAY) {
	element.parentNode.querySelector(".text").classList.toggle(cross);

	ARRAY[element.id].complete = ARRAY[element.id].complete ? false : true;
}
