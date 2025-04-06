
export function Button({ children, ...props }) {
  return <button className="bg-blue-600 text-white rounded-xl p-3" {...props}>{children}</button>;
}
