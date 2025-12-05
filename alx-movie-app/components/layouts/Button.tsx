const Button: React.FC<{ title: string; action?: () => void }> = ({ title, action }) => {
  return (
    <button onClick={action}>
      {title}
    </button>
  );
};

export default Button;
