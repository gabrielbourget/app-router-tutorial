import Link from "next/link";

async function fetchRepoContents(name: String) {
  const response = await fetch(
    `https://api.github.com/repos/gabrielbourget/${name}/contents`,
    {
      next: {
        revalidate: 60
      }
    }
  );
  const repoContents = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 4000));

  return repoContents;
}

const RepoDirs = async ({ name }: { name: String}) => {

  const contents = await fetchRepoContents(name);
  const directories = contents.filter((content: any) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {
          directories.map((dir: any) => {
            <li key={dir.path}>
              <Link href={`/code/repos/${name}/${dir.path}`}>
                {dir.path}
              </Link>
            </li>
          })
        }
      </ul>
    </>
  );
}

export default RepoDirs;