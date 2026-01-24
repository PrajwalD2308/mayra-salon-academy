"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isMenuPage = pathname.startsWith("/menu");

  return (
    <>
      {!isMenuPage && <Header />}
      <main>{children}</main>
      {!isMenuPage && <Footer />}
      {!isMenuPage && <FloatingActions />}
    </>
  );
}
