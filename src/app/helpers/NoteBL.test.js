import * as NoteBL from './NoteBL'
import { moment } from '../core'

describe('Test - CustomerBL', () => {

    test('testing getCustomerStatusText(status), expect to return \'2 hours ago\'', async () => {
        expect.assertions(1);

        let twoHoursAgo = new Date();
        twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);
        expect(NoteBL.formatNoteCreatedTime(twoHoursAgo)).toEqual('2 hours ago');
    });

    test('testing getCustomerStatusText(status), expect to return date', async () => {
        expect.assertions(1);

        let oneDayAgo = new Date();
        oneDayAgo.setDate(oneDayAgo.getDate() - 1);
        expect(NoteBL.formatNoteCreatedTime(oneDayAgo)).toEqual(moment(oneDayAgo).format('MM/DD/YYYY'));
    });
});

