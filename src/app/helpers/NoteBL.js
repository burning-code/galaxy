import { moment } from '../core'

const DATE = 'MM/DD/YYYY';

const ONE_SECOND = 1000;
const ONE_MINUTE =  ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY =  ONE_HOUR * 24;

export function formatNoteCreatedTime(created) {
    if (moment(created).isSame(new Date(), 'day')) {
        return moment(created).startOf('minute').fromNow();
    }

    return moment(created).format(DATE);
}