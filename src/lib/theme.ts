export const THEME_STORAGE_KEY = "hunaid-theme";

export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t}catch(e){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark"}})();`;
