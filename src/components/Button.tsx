const Button: React.FC<IButton> = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
      className={`capitalize py-2 px-3 w-full text-base font-medium bg-blue-600 text-white rounded-lg ${props.className}`}
    >
      {props.title}
    </button>
  );
};

export default Button;
