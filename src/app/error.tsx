'use client';
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <div>
        <h1>{error.message}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            reset();
          }}
        >
          try again
        </button>
      </div>
    </div>
  );
}
