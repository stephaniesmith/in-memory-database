In Memory Database
===

## API

### `new Store()`

Creates a new in memory database.

### `Store.save(arrayOfObjects)`

This function takes and array of object(s) as an argument. It gives each object a unquie id, save the objects into Store.array and returns you an array of object you just saved into Store.array.

### `Store.get(id)`

This function takes an id as an argument. If the id exists it will return to you the object with the given id. If the id does not exist it will return null. 

### `Store.getAll()`

This function will return to you an array of all the objects in the Store.

### `Store.remove(id)`

This function takes an id as an argument. If the id exist it will remove the object with that id from the array and returnt to you `{ removed: true }` and if the id does not exist it will return `{ removed: false }`;