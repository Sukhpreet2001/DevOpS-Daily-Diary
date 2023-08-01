const diaryList = document.getElementById('diary-list');

const dailyDiaryEntries = [
  { date: '2023-07-11', title: 'Day 1' },
  { date: '2023-07-12', title: 'Day 2' },
  // Add more daily diary entries here...
];

function createDiaryEntryLink(entry) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `./entries/${entry.date}.md`;
  link.textContent = entry.title;
  listItem.appendChild(link);
  diaryList.appendChild(listItem);

  // Fetch the content of the Markdown file and render it as HTML
  fetch(`./entries/${entry.date}.md`)
    .then((response) => response.text())
    .then((markdownContent) => {
      const entryContent = document.createElement('div');
      entryContent.innerHTML = marked(markdownContent);
      listItem.appendChild(entryContent);
    })
    .catch((error) => {
      console.error(`Error fetching or rendering ${entry.date}.md`, error);
    });
}

function populateDiaryList() {
  dailyDiaryEntries.forEach((entry) => {
    createDiaryEntryLink(entry);
  });
}

populateDiaryList();
