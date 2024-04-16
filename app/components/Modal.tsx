

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (event) => {
        if (event.target.id === "modal-overlay") {
            onClose();
        }
    };
    return (
        <div
            id="modal-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-50 transition-opacity duration-1000"
            onClick={handleOverlayClick}
            style={{ opacity: isOpen ? 1 : 0 }}
        >
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-1000"
                style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-20px)' }}
            >
                <button onClick={onClose} className="float-right font-bold">X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
