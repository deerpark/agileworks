import { Search } from "./search";

export default async function IndexPage({
  searchParams,
}: {
  searchParams: { q: string; offset: string };
}) {
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
    </main>
  );
}
