//region API Configuration

const NIMBO_API_URL =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
        ? 'http://localhost:8080'
        : 'https://nimbo-back.onrender.com';

//endregion


//region Supabase Configuration

const SUPABASE_URL =
    'https://socdvnavxyativyleswc.supabase.co';

const SUPABASE_ANON_KEY =
    'sb_publishable_MtCMPr-mtLzuVUPJmNBGYQ_i4--oypq';

//endregion

console.log(
    'NIMBO_API_URL:',
    NIMBO_API_URL
);
console.log(
    'hostname:',
    window.location.hostname
);