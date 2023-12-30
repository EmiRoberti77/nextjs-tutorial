import { notFound } from 'next/navigation';

export default function ProductReviews({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const { reviewId } = params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      reviews for {params.productId}, review - {params.reviewId}
    </h1>
  );
}
