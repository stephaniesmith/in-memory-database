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

    get() {
        return 'get';
    }

    getAll() {
        return 'getAll';
    }

    remove() {
        return 'remove';
    }
};

