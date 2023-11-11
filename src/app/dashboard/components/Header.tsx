export default function Header() {
  return (
    <div className="flex w-full justify-end items-center h-20 bg-white pr-6 md:pr-12">
      <div className="flex flex-row gap-x-4 items-center md:gap-x-8">
        <img src="/images/avatar.png" alt="avatar" className="w-12" />
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-bold">Owner</p>
          <p className="text-sm">aaa@gmail.com</p>
        </div>
        <button className="h-10 px-4 bg-[#D91010] rounded text-white font-semibold text-xs hover:bg-[#B70000]">
          Sign Out
        </button>
      </div>
    </div>
  );
}
