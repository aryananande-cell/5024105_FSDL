function Display({ submissions }) {
  return (
    <div className="display">
      <h2>Submissions</h2>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <ul>
          {submissions.map((sub, index) => (
            <li key={index}>
              <strong>{sub.name}</strong> ({sub.email}): {sub.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Display;