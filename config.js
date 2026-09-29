const NIMBO_API_URL =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
        ? 'http://localhost:8080'
        : 'https://nimbo-back.onrender.com';