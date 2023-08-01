const diaryList = document.getElementById('diary-list');

// Sample data for demonstration, replace it with your actual data
const dailyDiaryEntries = [
  { date: '2023-07-11', title: 'Day 1', content: 'Introduction to DevOps.' },
  { date: '2023-07-12', title: 'Day 2', content: 'Introduction to GitHub.' },
  // Add more daily diary entries here...
];

function createDiaryEntry(entry) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `./entries/${entry.date}.html`; // Assuming the daily diary entries are in the 'entries' directory
  link.textContent = entry.title;
  listItem.appendChild(link);
  diaryList.appendChild(listItem);
}

function populateDiaryList() {
  dailyDiaryEntries.forEach((entry, index) => {
    createDiaryEntry(entry);
    const prevIndex = index - 1;
    const nextIndex = index + 1;

    if (prevIndex >= 0) {
      const prevLink = document.createElement('a');
      prevLink.href = `./entries/${dailyDiaryEntries[prevIndex].date}.html`;
      prevLink.textContent = '← Previous Day';
      diaryList.appendChild(prevLink);
    }

    if (nextIndex < dailyDiaryEntries.length) {
      const nextLink = document.createElement('a');
      nextLink.href = `./entries/${dailyDiaryEntries[nextIndex].date}.html`;
      nextLink.textContent = 'Next Day →';
      diaryList.appendChild(nextLink);
    }
  });
}

populateDiaryList();
