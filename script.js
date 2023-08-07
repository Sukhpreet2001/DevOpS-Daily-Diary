const diaryList = document.getElementById('diary-list');

const dailyDiaryEntries = [
  { date: '2023-07-11', title: 'Day 1', content: `Introduction to DevOps` },
  { date: '2023-07-12', title: 'Day 2', content: `Introduction to GitHub` },
  { date: '2023-07-13', title: 'Day 3', content: `Making GitHub Pages` },
  { date: '2023-07-14', title: 'Day 4', content: `Introduction to Docker` },
  { date: '2023-07-17', title: 'Day 5', content: `Learning about Dockerfile` },
  { date: '2023-07-18', title: 'Day 6', content: `Project Assignment` },
  { date: '2023-07-19', title: 'Day 7', content: `Linux with Docker` },
  { date: '2023-07-20', title: 'Day 8', content: `Dockerise Project:Base Project` },
  { date: '2023-07-21', title: 'Day 9', content: `Finalising Project` },
  { date: '2023-07-24', title: 'Day 10', content: `Presentation Day` },
  { date: '2023-07-25', title: 'Day 11', content: `Introsduction to Google Webmaster` },
  { date: '2023-07-26', title: 'Day 12', content: `Introduction to Jenkins` },
  { date: '2023-07-27', title: 'Day 13', content: `Jenkins Setup` },
  { date: '2023-07-28', title: 'Day 14', content: `CI/CD Pipeline using Jenkins` },
  // Add more daily diary entries here...
];

function createDiaryEntryLink(entry) {
  const listItem = document.createElement('li');

  // Create a link for the diary entry title
  const link = document.createElement('a');
  link.href = `./entries/${entry.date}.html`; // Update link extension to .html
  link.textContent = entry.title;
  listItem.appendChild(link);

  // Use the content property as the summary
  const summary = document.createElement('p');
  summary.innerHTML = entry.content; // Use innerHTML to render the HTML content
  listItem.appendChild(summary);

  // Display the date on the rightmost corner
  const datePara = document.createElement('p');
  datePara.classList.add('date');
  datePara.textContent = entry.date;
  listItem.appendChild(datePara);

  diaryList.appendChild(listItem);
}

function populateDiaryList() {
  dailyDiaryEntries.forEach((entry) => {
    createDiaryEntryLink(entry);
  });
}

populateDiaryList();
