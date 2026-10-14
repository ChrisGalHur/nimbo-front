// auth.js
(function () {
    const SESSION_KEY = 'nimboSession';
    const LOGIN_PAGE  = 'login.html';
  
    function getToken() {
      try {
        return JSON.parse(localStorage.getItem(SESSION_KEY))?.access_token || null;
      } catch (_) {
        return null;
      }
    }
  
    function toLogin() {
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem('nimboUser');
      location.replace(LOGIN_PAGE);
    }
  
    // Lo llama el botón "Cerrar sesión" del sidebar
    window.logout = function () { toLogin(); };
  
    // Al volver con "atrás": si no hay sesión, fuera (también en local)
    window.addEventListener('pageshow', e => {
      if (e.persisted && !getToken()) toLogin();
    });
  
    if (DEV_MODE) return;   // en localhost no se comprueba nada más
  
    document.documentElement.style.visibility = 'hidden';
  
    async function checkSession() {
      const token = getToken();
      if (!token) return toLogin();
  
      try {
        const res = await fetch(NIMBO_API_URL + '/api/auth/me', {
          headers: { Authorization: 'Bearer ' + token }
        });
        if (res.status === 401 || res.status === 403) return toLogin();
      } catch (_) {
        // Backend dormido o sin red: no expulsamos
      }
      document.documentElement.style.visibility = 'visible';
    }
  
    checkSession();
  
    // Página restaurada desde caché: se vuelve a validar con el servidor
    window.addEventListener('pageshow', e => { if (e.persisted) checkSession(); });
  
    // Sesión cerrada en otra pestaña
    window.addEventListener('storage', e => {
      if (e.key === SESSION_KEY && !e.newValue) toLogin();
    });
  })();