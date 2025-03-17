// Chinese language preference handler
try {
  localStorage.setItem("preferred-language", "zh");
  const savedPath = sessionStorage.getItem("spa-path");
  const timestamp = sessionStorage.getItem("spa-timestamp");
  if (savedPath && timestamp && (Date.now() - parseInt(timestamp, 10) < 5000) 
      && savedPath.startsWith("/zh/")) {
    sessionStorage.removeItem("spa-path");
    sessionStorage.removeItem("spa-timestamp");
    if (window.history) window.history.replaceState(null, "", savedPath);
  }
} catch(e) {}
