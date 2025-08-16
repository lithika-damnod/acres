function BottomSheet({ children, onClose }) {
  return (
    <>
      <div
        className="w-full h-[100dvh] bg-black fixed bottom-0 left-0 opacity-35"
        onClick={onClose}
      />
      <div className="w-full bg-white fixed bottom-0 left-0 rounded-t-2xl p-5">
        {children}
      </div>
    </>
  );
}

export default BottomSheet;
