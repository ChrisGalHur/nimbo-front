//region API Configuration

const NIMBO_API_URL =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
        ? 'http://localhost:8080'
        : 'https://nimbo-back.onrender.com';

//endregion

console.log(
    'NIMBO_API_URL:',
    NIMBO_API_URL
);
console.log(
    'hostname:',
    window.location.hostname
);

//region Dev mode

const DEV_MODE =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';

//endregion