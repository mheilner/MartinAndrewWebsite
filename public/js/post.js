
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

///
async function loadArticles() {
    let scores = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/articles');
      articles = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('articles', JSON.stringify(articles));
    } catch {
      // If there was an error then just use the last saved scores
      const articlesText = localStorage.getItem('articles');
      if (scoresText) {
        articles = JSON.parse(articlesText);
      }
    }
  
    displayArticles(articles);
  }
  
  function displayArticles(articles) {
    const tableBodyEl = document.querySelector('#articleList');
  
    if (articles.length) {
      // Update the DOM with the scores
      for (const [i, article] of articles.entries()) {
        // const positionTdEl = document.createElement('td');
        const titleTdEl = document.createElement('td');
        const bodyTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        // positionTdEl.textContent = i + 1; 
        titleTdEl.textContent = article.title;
        bodyTdEl.textContent = article.body;
        dateTdEl.textContent = article.date;
  
        const rowEl = document.createElement('tr');
        // rowEl.appendChild(positionTdEl);
        rowEl.appendChild(titleTdEl);
        rowEl.appendChild(bodyTdEl);
        rowEl.appendChild(dateTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to write an article</td></tr>';
    }
  }
  
  loadArticles();


  // class Game {
  //   socket;
  
  //   constructor() {
  
  //     const playerNameEl = document.querySelector('.player-name');
  //     playerNameEl.textContent = this.getPlayerName();
  
  //     this.configureWebSocket();
  //   }

  
  //   getPlayerName() {
  //     return localStorage.getItem('userName') ?? 'Mystery player';
  //   }
  //   // Functionality for peer communication using WebSocket
  //   configureWebSocket() {
  //     const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  //     this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  //     this.socket.onopen = (event) => {
  //       this.displayMsg('system', 'game', 'connected');
  //     };
  //     this.socket.onclose = (event) => {
  //       this.displayMsg('system', 'game', 'disconnected');
  //     };
  //     this.socket.onmessage = async (event) => {
  //       const msg = JSON.parse(await event.data.text());
  //       if (msg.type === GameEndEvent) {
  //         this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
  //       } else if (msg.type === GameStartEvent) {
  //         this.displayMsg('player', msg.from, `started a new game`);
  //       }
  //     };
  //   }
  
    // displayMsg(cls, from, msg) {
    //   const chatText = document.querySelector('#player-messages');
    //   chatText.innerHTML =
    //     `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
    // }
  
  //   broadcastEvent(from, type, value) {
  //     const event = {
  //       from: from,
  //       type: type,
  //       value: value,
  //     };
  //     this.socket.send(JSON.stringify(event));
  //   }
  // }
  
  // const game = new Game();
  
  
  // const socket = new WebSocket('ws://localhost:4000');

  // socket.addEventListener('open', (event) => {
  //   console.log('Connected to server');
  // });
  
  // socket.addEventListener('message', (event) => {
  //   console.log(`Received message: ${event.data}`);
  // });
  
  // socket.addEventListener('close', (event) => {
  //   console.log('Disconnected from server');
  // });
  
  // function sendMessage(message) {
  //   socket.send(message);
  // }
  