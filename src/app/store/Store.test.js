import configureStore from './Store'

test('Store initialization test', async () => {
    expect.assertions(1);

    let store = configureStore(),
        state = store.getState();

    expect(state).toEqual({
        customers: {
            items: [],
            selected: null,
            isFetching: false,
            pagination: {
                page: 1,
                limit: 20
            }
        },
        notes: {
            items: [],
            isFetching: false,
            pagination: {
                page: 1,
                limit: 20
            },
        }
    });
});

