const assert = require('assert');
const Store = require('../lib/store');
const uniqid = require('uniqid');

describe('store', () => {
    let newStore;
    beforeEach(() => {
        newStore = new Store();
    }); 

    const objects = [
        {
            name: 'This American Life',
            host: 'Ira Glass'
        },
        {
            name: 'Welcome to Night Vale',
            host: 'Cecil Palmer'
        },
        {
            name: 'She Explores',
            host: 'Gale Straub'
        }
    ]; 

    it('returns new store with id', () => {
        const objects = 'An array of podcasts';
        const podcasts = newStore.save(objects);
        assert.equal(podcasts, [
            {
                _id: 'some id',
                name: 'This American Life',
                host: 'Ira Glass'
            },
            {
                _id: 'some id',
                name: 'Welcome to Night Vale',
                host: 'Cecil Palmer'
            },
            {
                _id: 'some id',
                name: 'She Explores',
                host: 'Gale Straub'
            }
        ]
        );
    });

    // it('', () => {
    //     assert.equal();
    // });

    // it('', () => {
    //     assert.equal();
    // });

    // it('', () => {
    //     assert.equal();
    // });
});