// Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ variant = 'primary', size = 'md', children, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};
