interface props {
  count: number;
  onClick: () => void;
}

export function MyButton({ count, onClick }: props) {
  return (
    <div>
      <button onClick={onClick}>Current count: {count}</button>
    </div>
  );
}
