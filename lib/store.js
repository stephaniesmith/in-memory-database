'use strict';
// const uniqid = require('uniqid');

module.exports = class Store {
    constructor() {
        this.array = [];
    }

    save(obj) {
        return 'save';
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

