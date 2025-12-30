const PrimaryButton = ({
  text,
  onClick,
  type = "button",
  isLoading = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className="bg-primary hover:bg-primary-dark text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
    >
      {isLoading ? "Cargando..." : text}
    </button>
  );
};

export { PrimaryButton };
