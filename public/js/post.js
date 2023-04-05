
async function submitArticle() {
  const artTitle = document.querySelector('#title')?.value;
  const artBody = document.querySelector('#article')?.value;
  const date = new Date().toLocaleString();
  const response = await fetch('/api/article', {
    method: 'post',
    body: JSON.stringify({ title: artTitle, body: artBody, date: date }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    console.log("It worked")
    localStorage.setItem('title', artTitle);
    window.location.href = '../posts.html';
    
  } else {
    console.log(body.msg)
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

// ///
// async function loadScores() {
//     let scores = [];
//     try {
//       // Get the latest high scores from the service
//       const response = await fetch('/api/scores');
//       scores = await response.json();
  
//       // Save the scores in case we go offline in the future
//       localStorage.setItem('scores', JSON.stringify(scores));
//     } catch {
//       // If there was an error then just use the last saved scores
//       const scoresText = localStorage.getItem('scores');
//       if (scoresText) {
//         scores = JSON.parse(scoresText);
//       }
//     }
  
//     displayScores(scores);
//   }
  
//   function displayScores(scores) {
//     const tableBodyEl = document.querySelector('#scores');
  
//     if (scores.length) {
//       // Update the DOM with the scores
//       for (const [i, score] of scores.entries()) {
//         const positionTdEl = document.createElement('td');
//         const nameTdEl = document.createElement('td');
//         const scoreTdEl = document.createElement('td');
//         const dateTdEl = document.createElement('td');
  
//         positionTdEl.textContent = i + 1;
//         nameTdEl.textContent = score.name;
//         scoreTdEl.textContent = score.score;
//         dateTdEl.textContent = score.date;
  
//         const rowEl = document.createElement('tr');
//         rowEl.appendChild(positionTdEl);
//         rowEl.appendChild(nameTdEl);
//         rowEl.appendChild(scoreTdEl);
//         rowEl.appendChild(dateTdEl);
  
//         tableBodyEl.appendChild(rowEl);
//       }
//     } else {
//       tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
//     }
//   }
  
//   loadScores();
  