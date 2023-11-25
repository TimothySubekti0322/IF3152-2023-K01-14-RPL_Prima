import { usePathname } from "next/navigation";

export default function Title() {
  const path = usePathname();
  const imgUrl = "/images/" + path.split("/")[2] + "-black.png";
  const title = capitalize(path.split("/")[2]);
  return (
    <div className="flex flex-row items-center">
      <img
        src={title == "Vehicle_status" ? "/images/vehicle-black.png" : imgUrl}
        alt=""
        className="w-12 h-12"
      />
      <p className="text-2xl font-bold ml-6">
        {title === "Vehicle_status" ? "Vehicle Status" : title}
      </p>
    </div>
  );
}

const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
