

interface AuthButtonProps {
  label: string;
  onClick: () => void;
}

const AuthButton = ({ label, onClick }: AuthButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
    >
      {label}
    </button>
  );
};

export default AuthButton;
