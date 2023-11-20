export default function Button({ type, className, buttonText, ...rest }) {
  return (
    <button
      type={type}
      className={className}
      {...rest}
    >
      {buttonText}
    </button>
  );
}
