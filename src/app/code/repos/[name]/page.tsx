import { Suspense } from "react";
import Link from "next/link";
import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDirs";

const RepoPage = ({ params }: { params: any }) => {
  const { name } = params;

  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}> 
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading repo directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;