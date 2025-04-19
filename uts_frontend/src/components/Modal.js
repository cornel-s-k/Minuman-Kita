function Modal({ isOpen, onClose, onConfirm, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Ya</button>
          <button onClick={onClose}>Batal</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
