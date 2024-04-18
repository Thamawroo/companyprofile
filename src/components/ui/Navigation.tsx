import Link from "next/dist/client/link";
import { Avatar, AvatarImage } from "./avatar";
import { AvatarFallback } from "./avatar";

const navList = [
  {
    title: "News",
    href: "/News",
  },
  {
    title: "Contact Us",
    href: "/Contact Us",
  },
];

export function Navigation() {
  return (
    <nav className="fixed w-screen px-2 py-1 top-2 z-50">
      <div className="bg-sky-800 py-3 container flex items-center justify-between bg-background rounded-md z-50">
        <Avatar>
          <AvatarImage src="https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Luxury-Real-Estate-Logo-Design-Png.png" />
          <AvatarFallback className="w-50 h-50">CN</AvatarFallback>
        </Avatar>

        <p className="font-semibold italic py-3 container flex items-center bg-sky-800 rounded-md z-50 text-amber-400">
          InferiorLand
        </p>

        <ul className="flex items-center-baseline justify-center gap-5">
          {navList.map((nav) => {
            return (
              <li key={nav.title}>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href={nav.href}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
