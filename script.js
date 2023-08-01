const diaryList = document.getElementById('diary-list');

const dailyDiaryEntries = [
  { date: '2023-07-11', title: 'Day 1', content: `<h2>Day 1 - 11/07/2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tuesday</h2>
  <!-- ... The rest of the HTML content for Day 1 ... -->` },
  { date: '2023-07-12', title: 'Day 2', content: `<h2>Day 2 - 12/07/2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wednesday</h2>
  <!-- ... The rest of the HTML content for Day 2 ... -->` },
  // Add more daily diary entries here...
];

function createDiaryEntryLink(entry) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `./entries/${entry.date}.html`; // Update link extension to .html
  link.textContent = entry.title;
  listItem.appendChild(link);

  // Use the content property as the summary
  const summary = document.createElement('p');
  summary.innerHTML = entry.content; // Use innerHTML to render the HTML content
  listItem.appendChild(summary);

  diaryList.appendChild(listItem);
}

function populateDiaryList() {
  dailyDiaryEntries.forEach((entry) => {
    createDiaryEntryLink(entry);
  });
}

populateDiaryList();
