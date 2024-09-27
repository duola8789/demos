const mock = param =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: param.data });
    }, 2000);
  });

const data = 400;
async function test() {
  const { data } = await mock({
    data,
  });
  console.log(data);
}
