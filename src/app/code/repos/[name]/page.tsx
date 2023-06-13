const RepoPage = ({ params }: { params: any }) => {
  const { name } = params;

  return (
    <div className="card">
      <h2>{ name }</h2>
    </div>
  );
}

export default RepoPage;