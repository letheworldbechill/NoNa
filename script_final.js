const homeBtn = document.getElementById("home-btn");
const articlesBtn = document.getElementById("articles-btn");
const journalBtn = document.getElementById("journal-btn");
const resourcesBtn = document.getElementById("resources-btn");
const appContent = document.getElementById("app-content");

const articles = [
  { title: "Was ist Gaslighting?", content: "Gaslighting ist eine Form der Manipulation, bei der Täter die Wahrnehmung der Realität des Opfers in Frage stellen." },
  { title: "Warum isolieren Narzissten?", content: "Isolation ist eine Strategie, um das Opfer von seinem sozialen Umfeld abzuschneiden." }
];

const resources = [
  { country: "Deutschland", contact: "08000 116 016", description: "Gewalt gegen Frauen" },
  { country: "Österreich", contact: "0800 222 555", description: "Frauenhelpline" },
  { country: "Schweiz", contact: "0800 33 66 55", description: "Opferhilfe" }
];

homeBtn.addEventListener("click", () => {
  appContent.innerHTML = `
    <h2>Willkommen zur Gaslighting Support App</h2>
    <p>Diese App begleitet dich auf deinem Weg zur Heilung und Selbststärkung.</p>
  `;
});

articlesBtn.addEventListener("click", () => {
  appContent.innerHTML = "<h2>Wissen & Artikel</h2>";
  articles.forEach(article => {
    appContent.innerHTML += `
      <div>
        <h3>${article.title}</h3>
        <p>${article.content}</p>
      </div>
    `;
  });
});

journalBtn.addEventListener("click", () => {
  appContent.innerHTML = `
    <h2>Tagebuch</h2>
    <textarea id="journal-entry" placeholder="Schreibe deine Gedanken hier..." rows="5"></textarea>
    <button id="save-journal-btn">Speichern</button>
  `;

  const saveJournalBtn = document.getElementById("save-journal-btn");
  saveJournalBtn.addEventListener("click", () => {
    const entry = document.getElementById("journal-entry").value;
    if (entry.trim() === "") {
      alert("Das Tagebuchfeld darf nicht leer sein.");
      return;
    }
    alert("Dein Tagebucheintrag wurde gespeichert.");
    document.getElementById("journal-entry").value = "";
  });
});

resourcesBtn.addEventListener("click", () => {
  appContent.innerHTML = "<h2>Hilfe & Ressourcen</h2>";
  resources.forEach(resource => {
    appContent.innerHTML += `
      <ul>
        <li>${resource.country}: ${resource.contact} - ${resource.description}</li>
      </ul>
    `;
  });
});

homeBtn.click();
