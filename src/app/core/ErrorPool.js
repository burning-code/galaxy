export const ERROR_JSON_PARSE = 'ERROR_JSON_PARSE';

const _STATUS = {
    SYSTEM_ERROR: 'SYSTEM_ERROR',
    ERROR: 'ERROR',
    REDIRECT: 'REDIRECT'
};

const _MESSAGE = {
    ERROR_HTTP: 'HTTP request error. Please try again later.',
    ERROR_SYSTEM: 'System error. Please try again later.'
};

export function httpError(httpStatus) {
    switch (httpStatus) {
        case 401:
        case 403:
            return {
                status: _STATUS.REDIRECT
            };
        default:
            return {
                status: _STATUS.SYSTEM_ERROR,
                errorMessage: _MESSAGE.ERROR_HTTP
            }
    }
}

export function error(error) {
    switch (error) {
        default:
            return {
                status: _STATUS.SYSTEM_ERROR,
                errorMessage: _MESSAGE.ERROR_SYSTEM
            }
    }
}