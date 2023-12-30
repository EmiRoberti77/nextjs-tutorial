import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

interface PageMetadata {
  title: string;
  description: string;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<PageMetadata> => {
  const response: PageMetadata = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: `productId ${params.productId}`,
        description: `${params.productId} is new and for sale`,
      });
    }, 100);
  });

  return response;
};

export default function ProductDetails({ params }: Props) {
  return <h1>Product detail for {params.productId}</h1>;
}
