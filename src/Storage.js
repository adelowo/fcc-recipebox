
const RECIPE_KEY_PREFIX = "__the_fiend__";

function ensureLocalStorageIsAvailable() {
	try {
		localStorage.setItem("lanre", "used to be human");
		localStorage.getItem("lanre");
		localStorage.removeItem("lanre");
	} catch (e) {
		alert("Localstorage is not supported in this browser");
		throw new Error("OOPS");
	}
}

function all () {
	let recipes = [];

	Object.keys(localStorage).forEach(index => {
		if (index.startsWith(RECIPE_KEY_PREFIX)) {
			recipes.push(JSON.parse(localStorage[index]));
		}
	});

	return recipes;
}

function add (key, value) {	
	if (exists(key)) {
		return false;
	}

	localStorage.setItem(getKeyName(key), stringify(value));

	return true;
}

function remove(key) {
	if (!exists(key)) {
		throw new Error("An errror occurred while we tried deleting this recipe");
	}

	localStorage.removeItem(getKeyName(key));

	return !exists(key);
}

function exists(key) {
	return localStorage.getItem(getKeyName(key)) !== null;
}

function getKeyName(key) {
	return RECIPE_KEY_PREFIX + key;
}

function stringify (value) {
	return JSON.stringify(value);
}

export {ensureLocalStorageIsAvailable, add, all, remove};
