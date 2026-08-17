function Layout({ children }: LayoutProps<"/dashboard">) {
    return ( 
        <>
        <h1 className="text-3xl text-red-500 font-black">Dashboard Layout</h1>
        { children }
        </>
     );
}

export default Layout;