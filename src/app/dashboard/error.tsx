'use client';
export default function ErrorDashboard({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <h1>
      {error.message}
      <button
        onClick={() => {
          reset();
        }}
      >
        try again
      </button>
    </h1>
  );
}
