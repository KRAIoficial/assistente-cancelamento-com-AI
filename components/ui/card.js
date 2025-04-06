
export function Card({ children }) {
  return <div className="border shadow-md rounded-2xl">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
