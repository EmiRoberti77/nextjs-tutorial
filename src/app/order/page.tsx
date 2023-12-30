'use client';
import { useRouter } from 'next/navigation';

export default function Order() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };
  return (
    <div>
      <h1>Order</h1>
      <button onClick={handleClick}>order</button>
    </div>
  );
}
