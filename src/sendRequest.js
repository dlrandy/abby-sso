function aFetch(url) {
  console.log(`fetching ${url}`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${url} done`);
    }, 1000 * Math.random());
  });
}

function sendRequest(urls, max, callback) {
  let guard = 0;
  function* itCall() {
    while (urls.length) {
      const uri = urls.shift();
      guard++;
      yield aFetch(uri);
    }
  }

  async function execute(resolve, reject) {
    const it = itCall();

    try {
      let next;
      do {
        if (guard <= max) {
          next = it.next();
          await next.value;
        }
        guard--;
      } while (next.done !== true);
      resolve();
    } catch (error) {
      reject(error);
    }
  }

  return new Promise((resolve, reject) => {
    execute(resolve, reject);
  }).then(callback, callback);
}
sendRequest([...Array.from({ length: 10 }, (k) => k).keys()], 3, () =>
  console.log('MB done'),
);
