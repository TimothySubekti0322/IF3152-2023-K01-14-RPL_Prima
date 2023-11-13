export default function Loader() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <span className="loading loading-spinner loading-lg text-[#1c2434]"></span>
      <p className="text-lg font-semibold text-neutral mt-4">Loading...</p>
    </div>
  );
}
