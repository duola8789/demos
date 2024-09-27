window.onload = function () {
  canYouClimbWallTask();
};

function canYouClimbWall() {
  return new Promise(resolve => {
    const img = new Image();
    let timer = setTimeout(() => {
      resolve(false);
    }, 60000);
    img.onload = () => {
      resolve(true);
      clearTimeout(timer);
      timer = null;
    };
    img.onerror = () => {
      resolve(false);
      clearTimeout(timer);
      timer = null;
    };
    img.src = 'https://google.com/favicon.ico?' + Date.now();
  });
}

function canYouClimbWallTask() {
  const TIMER_INTERVAL = 1000;
  const EXECUTE_INTERVAL = 5000;
  const LOCAL_KEY = 'WallTest';
  let isExecuting = false;
  setInterval(() => {
    const lastExeCute = +localStorage.getItem(LOCAL_KEY);
    if (lastExeCute) {
      if (!isExecuting && Date.now() - lastExeCute >= EXECUTE_INTERVAL) {
        isExecuting = true;
        canYouClimbWall().then(val => {
          isExecuting = false;
          if (val) {
            alert('Yes');
          } else {
            alert('No');
          }
          localStorage.setItem(LOCAL_KEY, Date.now() + '');
        });
      }
    } else {
      localStorage.setItem(LOCAL_KEY, Date.now() + '');
    }
  }, TIMER_INTERVAL);
}
