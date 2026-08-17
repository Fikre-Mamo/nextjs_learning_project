import "../globals.css";
import Navbar from '../components/Navbar'

function Layout({ children }: LayoutProps<"/">) {
  return <>
  <Navbar />
  {children}
  </>;
}

export default Layout;
