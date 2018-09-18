import configureStore from './Store'

it('create a store and have 3 default fields', () => {
    expect.assertions(3);

    let store = configureStore(),
        state = store.getState();

    expect(state.hasOwnProperty('customers')).toEqual(true);
    expect(state.hasOwnProperty('notes')).toEqual(true);
    expect(state.hasOwnProperty('errors')).toEqual(true);
});

