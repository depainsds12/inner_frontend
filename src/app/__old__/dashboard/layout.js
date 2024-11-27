import Footer from "@/src/components/__old__/dashboard_footer/footer";
import Header from "@/src/components/__old__/dashboard_header/header";

export default function PageRootLayout({ children }) {
  return (
    <>
      {/* <DashboardHeader /> */}
      <Header />
      <main className="h-[100vh] w-full pb-20 xl:h-[135vh]">{children}</main>
      {/* <Footer /> */}
      <Footer />
    </>
  );
}
