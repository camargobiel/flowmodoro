interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick, disabled, icon, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      disabled={disabled}
      className={`
        py-2 px-4 rounded-md text-white font-semibold
        ${disabled ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'}
        transition-colors duration-200
      `}
    >
      <div
        className={`flex gap-2 items-center ${icon ? 'justify-between' : 'justify-center'}`}
      >
        {icon}
        {children}
      </div>
    </button>
  )
}
