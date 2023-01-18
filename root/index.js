const mock = (param) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: param.data });
    }, 2000);
  });

async function test() {
  const data = 400;
  if (true) {
    const { data } = await mock({
      data
    });
    console.log(data);
  }
}
test();
