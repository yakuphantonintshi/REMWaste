import React, { useState } from "react";

function Modal({ isOpen, onClose, title, children, isSelected, onSelect }) {
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSelect = () => {
    if (!isSelected) {
      setShowSuccess(true);
      onSelect();
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {showSuccess && (
          <div className="popup-success">✅ Skip Selected</div>
        )}
        <h2 className="yards">{title}</h2>
        {children}
        <div>
        <button className="select" onClick={handleSelect} disabled={isSelected}>
          {isSelected ? "Already Selected" : "Select Skip"}
        </button>

        <button className="close" onClick={onClose}>Close</button>

        </div>
      </div>
    </div>
  );
}

export default Modal;
