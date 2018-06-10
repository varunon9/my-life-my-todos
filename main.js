const globals = {
	constants: {
		DB_PATH: './data', // all data will be stored here
		collections: { // different collections stored inside data
			TASKS: 'tasks'
		}
	},

	dbMethods: {
		addData: (collectionName, dataArrayOrObject) => {
			return globals.db[collectionName].save(dataArrayOrObject);
		},

		fetchData: (collectionName, queryObject) => {
			return globals.db[collectionName].find(queryObject);
		},

		updateData: (collectionName, queryObject, dataToBeUpdatedObject, options) => {
			if (options) {
			} else {
				options = {
					multi: false, // update multiple - default false
					upsert: false // if object is not found, add it (update-insert) - default false
				}
			}
			return globals.db[collectionName]
			        .update(queryObject, dataToBeUpdatedObject, options);
		},

		removeData: (collectionName, queryObject, multi) => {
			if (multi) {
			} else {
				multi = true; // delete all the matched objects
			}
			return globals.db[collectionName].remove(queryObject, multi);
		}
	}
};

// self executing init function
(function() {
    globals.db = require('diskdb');
    globals.db.connect(globals.constants.DB_PATH, [
    	globals.constants.collections.TASKS
    ]);
}(globals));