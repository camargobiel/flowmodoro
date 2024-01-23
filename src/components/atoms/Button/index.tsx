interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  variant?: string;
  onClick: () => void;
}

export const Button = ({ children, onClick, disabled, icon, variant, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded-md text-white font-semibold transition-colors duration-200 ${variant}`}
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
