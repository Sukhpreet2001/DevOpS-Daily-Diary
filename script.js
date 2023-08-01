const diaryList = document.getElementById('diary-list');

const dailyDiaryEntries = [
  { date: '2023-07-11', title: 'Day 1', content: 'Introduction to DevOps.' },
  { date: '2023-07-12', title: 'Day 2', content: 'Introduction to GitHub.' },
  // Add more daily diary entries here...
];

function createDiaryEntryLink(entry) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `./entries/${entry.date}.md`; // Assuming the daily diary entries are in the 'entries' directory
  link.textContent = entry.title;
  listItem.appendChild(link);
  diaryList.appendChild(listItem);
}

function populateDiaryList() {
  dailyDiaryEntries.forEach((entry) => {
    createDiaryEntryLink(entry);
  });
}

populateDiaryList();
