import { moment } from '../core'

const DATE = 'MM/DD/YYYY';

export function formatNoteCreatedTime(created) {
    if (moment(created).isSame(new Date(), 'day')) {
        return moment(created).startOf('minute').fromNow();
    }

    return moment(created).format(DATE);
}