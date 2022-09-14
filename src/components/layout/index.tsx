import Header from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
