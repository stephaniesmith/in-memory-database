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
        return objects.slice();
    }

    get(id) {
        const index = this.array.findIndex(data => id === data._id);
        const object = this.array[index];
        return object ? object : null;
    }

    getAll() {
        return this.array.slice();
    }

    remove(id) {
        const index = this.array.findIndex(data => id === data._id);
        if(index === -1){
            return { removed : false };
        } else {
            this.array.splice(index, 1);
        }
        return { removed : true };
    }
};

