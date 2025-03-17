(function() {
  let preferredLang = "en";
  try {
    const savedLang = localStorage.getItem("preferred-language");
    if (savedLang === "zh" || savedLang === "en") {
      preferredLang = savedLang;
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang && browserLang.startsWith("zh")) {
        preferredLang = "zh";
      }
    }
  } catch (e) {}
  window.location.href = "/" + preferredLang;
})();
