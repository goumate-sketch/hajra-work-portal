async function loadRSS() {
  const container = document.getElementById("news-grid");

  const rssUrl = "https://rss.cnn.com/rss/edition_world.rss";

  const proxy = "https://api.allorigins.win/raw?url=";

  const res = await fetch(proxy + encodeURIComponent(rssUrl));
  const text = await res.text();

  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "text/xml");

  const items = xml.querySelectorAll("item");

  container.innerHTML = "";

  items.forEach((item, i) => {
    if (i > 10) return;

    const title = item.querySelector("title").textContent;
    const link = item.querySelector("link").textContent;
    const desc = item.querySelector("description")?.textContent || "";

    container.innerHTML += `
      <article class="card">
        <h3>${title}</h3>
        <p>${desc.substring(0, 120)}...</p>
        <a href="${link}" target="_blank">اقرأ المزيد</a>
      </article>
    `;
  });
}

loadRSS();
