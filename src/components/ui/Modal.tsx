// Modal component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div>
      <div>
        {title && <h2>{title}</h2>}
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};
