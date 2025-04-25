import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({children}) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">
        {children}
      </div>
      {/* yaha pai jo hai children ke andae jab jo bhi
      page pai jayenge uska content waha aa jayega */}
    </div>
  );
}