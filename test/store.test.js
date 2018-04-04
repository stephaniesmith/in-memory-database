const assert = require('assert');
const Store = require('../lib/store');
// const uniqid = require('uniqid');

describe('store', () => {
    let newStore;
    beforeEach(() => {
        newStore = new Store();
    }); 

    const podcasts = [
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

    it('returns newStore with podcasts and adds _id to each podcast', () => {
        const savedpodcasts = newStore.save(podcasts);
        assert.deepEqual(savedpodcasts, [
            {
                _id: podcasts[0]._id,
                name: 'This American Life',
                host: 'Ira Glass'
            },
            {
                _id: podcasts[1]._id,
                name: 'Welcome to Night Vale',
                host: 'Cecil Palmer'
            },
            {
                _id: podcasts[2]._id,
                name: 'She Explores',
                host: 'Gale Straub'
            }
        ]
        );
    });

    it('get a single object from newStore by _id and return it ', () => {
        const savedpodcasts = newStore.save(podcasts);
        const podcastId = savedpodcasts[1]._id;
        const getPodcast = newStore.get(podcastId);
        assert.deepEqual(getPodcast, 
            {
                _id: podcasts[1]._id,
                name: 'Welcome to Night Vale',
                host: 'Cecil Palmer'
            }
        );
    });

    it('return null if the id does not exist ', () => {
        newStore.save(podcasts);
        const podcastId = 'fake id';
        const getPodcast = newStore.get(podcastId);
        assert.deepEqual(getPodcast, null);
    });

    it('returns all the objects from the newStore', () => {
        const savedpodcasts = newStore.save(podcasts);
        const getAllPodcasts = newStore.getAll(savedpodcasts);
        assert.deepEqual(getAllPodcasts, newStore.array);
    });

    // it('', () => {
    //     assert.equal();
    // });
});