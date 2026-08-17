
interface PageProps {
  params: Promise<{ id: string }>;
}

async function Page({params}: PageProps) {
    const { id } = await params
    return ( 
        <h1 className="text-3xl text-green-500 font-black">User {id} details</h1>
     );
}

export default Page;
