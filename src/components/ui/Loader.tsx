// Loader component
interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Loader = ({ size = 'md' }: LoaderProps) => {
  return <div>Loading...</div>;
};
