export default async function LineChart() {
  const content = await new Promise<string>((resolve) => {
    setTimeout(() => {
      console.log('pretend to fetch');
      resolve('line chart');
    }, 1000);
  });

  return <h1>{content}</h1>;
}
