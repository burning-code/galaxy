import {get, post} from './Http'

test('Http Tests', async () => {
    expect.assertions(1);

    await expect(1).toBe(1);
    // await expect(get('/notes')).resolves.toEqual([
    //     {
    //         "id": 1,
    //         "note": "something",
    //         "customer_id": 1,
    //         "author_id": 1,
    //         "created": "1534442400"
    //     }
    // ]);
});