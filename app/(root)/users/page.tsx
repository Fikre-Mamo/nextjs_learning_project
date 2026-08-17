import Link from "next/link";

function Page() {
  return (
    <>
      <h1>This is users page</h1>
      <ul>
        <li>
          <Link href="/users/1">User: 1</Link>
        </li>
        <li>
          <Link href="/users/2">User: 2</Link>
        </li>
        <li>
          <Link href="/users/3">User: 3</Link>
        </li>
      </ul>
    </>
  );
}

export default Page;
