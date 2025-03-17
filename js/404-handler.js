(function() {
  const path = window.location.pathname;
  
  // Just determine language and go to language home
  let lang = "en";
  if (path.startsWith("/zh/")) {
    lang = "zh";
  } else if (path.startsWith("/en/")) {
    lang = "en";
  } else {
    try {
      const savedLang = localStorage.getItem("preferred-language");
      if (savedLang === "zh" || savedLang === "en") {
        lang = savedLang;
      }
    } catch (e) {}
  }
  
  // Go to language home
  window.location.href = "/" + lang;
})();
