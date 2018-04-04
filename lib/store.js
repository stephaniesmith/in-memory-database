'use strict';
const uniqid = require('uniqid');

module.exports = class Store {
    constructor() {
        this.array = [];
    }

    save(objects) {
        objects.forEach(data => {
            this.array.push(data);
            data._id = uniqid();

        });
        return this.array;
    }

    get(id) {
        const index = this.array.findIndex(data => id === data._id);
        const object = this.array[index];
        return object;
    }

    getAll() {
        return 'getAll';
    }

    remove() {
        return 'remove';
    }
};

