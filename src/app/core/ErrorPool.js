export const ERROR_JSON_PARSE = 'ERROR_JSON_PARSE';

export const STATUS = {
    SYSTEM_ERROR: 'SYSTEM_ERROR',
    ERROR: 'ERROR',
    REDIRECT: 'REDIRECT'
};

export const MESSAGE = {
    ERROR_HTTP: 'HTTP request error. Please try again later.',
    ERROR_SYSTEM: 'System error. Please try again later.'
};

export function httpError(httpStatus) {
    switch (httpStatus) {
        case 401:
        case 403:
            return {
                status: STATUS.REDIRECT
            };
        default:
            return {
                status: STATUS.SYSTEM_ERROR,
                message: MESSAGE.ERROR_HTTP
            }
    }
}

export function error(error) {
    switch (error) {
        default:
            return {
                status: STATUS.SYSTEM_ERROR,
                message: MESSAGE.ERROR_SYSTEM
            }
    }
}