const presence = new Presence({
    clientId: "643762072626266125"
  }),
  pages = {
    "/": "Ana Sayfa",
    "/giris": "Giriş",
    "/kayit": "Kayıt Ol",
    "/mesaj": "Mesajlar",
    "/mesaj/arsiv": "Mesajlar",
    "/kanallar": "Kanallar",
    "/takip-engellenmis": "Takip Edilenler ve Engellenenler",
    "/iletisim": "İletişim",
    "/reklam": "Reklam",
    "/sub-etha": "sub-etha",
    "/modlog": "Modlog"
  };

presence.on("UpdateData", async () => {
  const page = document.location.pathname,
    entry = document.querySelector("#title > a > span");

  if (page.includes("/biri/")) {
    const who = document.querySelector("#user-profile-title > a");

    presence.setActivity({
      largeImageKey: "es-logo",
      details: "Biri'ne göz atıyor:",
      state: who && who.textContent ? who.textContent : "Belirsiz",
      startTimestamp: Math.floor(Date.now() / 1000)
    });
  } else if (page.includes("/ayarlar/")) {
    presence.setActivity({
      largeImageKey: "es-logo",
      details: "Bir sayfaya göz atıyor:",
      state: "Ayarlar",
      startTimestamp: Math.floor(Date.now() / 1000)
    });
  } else if (document.location.search.includes("?q=")) {
    presence.setActivity({
      largeImageKey: "es-logo",
      details: "Bir şey arıyor:",
      state: entry && entry.textContent ? entry.textContent : "Belirsiz",
      smallImageKey: "search",
      startTimestamp: Math.floor(Date.now() / 1000)
    });
  } else if (pages[page] || pages[page.slice(0, -1)]) {
    presence.setActivity({
      largeImageKey: "es-logo",
      details: "Bir sayfaya göz atıyor:",
      state: pages[page] || pages[page.slice(0, -1)],
      startTimestamp: Math.floor(Date.now() / 1000)
    });
  } else if (entry && entry.textContent !== "") {
    presence.setActivity({
      largeImageKey: "es-logo",
      details: "Bir entry'e göz atıyor:",
      state: entry.textContent,
      startTimestamp: Math.floor(Date.now() / 1000)
    });
  }
});
