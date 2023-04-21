export default function SlideContent({children}) {
  return (
    <div className={`h-screen w-screen bg-inherit p-4 text-white`}>
      {children}
    </div>
  );
}
