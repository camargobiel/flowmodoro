interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  borderColor: string
}

export const CardBase = ({ children, borderColor, className, ...rest }: CardBaseProps) => {
  return (
    <div
      {...rest}
      className={`text-white flex flex-col relative mt-44 p-10 bg-gray-900 w-96 border rounded-xl ${borderColor} h-72 transition-all ${className}`}>
      {children}
    </div>
  )
}
