interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CardBase = ({ children, className, ...rest }: CardBaseProps) => {
  return (
    <div
      {...rest}
      className={`text-white flex flex-col relative mt-5 p-10 bg-gray-900 w-96 rounded-xl h-72 transition-all ${className}`}>
      {children}
    </div>
  )
}
