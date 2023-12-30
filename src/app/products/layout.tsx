export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = (count: number): number => {
    return Math.floor(Math.random() * count);
  };
  const generated = random(2);
  console.log('product layout', 'random number', generated);

  if (generated === 1)
    throw new Error(`Error generate in layout random number:${generated}`);

  return (
    <>
      <h2>Emi product layout</h2>
      {children}
    </>
  );
}