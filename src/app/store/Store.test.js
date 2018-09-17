import configureStore from './Store'

test('Store initialization test', async () => {
    expect.assertions(2);

    let store = configureStore(),
        state = store.getState();

    expect(state.hasOwnProperty('customers')).toEqual(true);
    expect(state.hasOwnProperty('notes')).toEqual(true);
});

