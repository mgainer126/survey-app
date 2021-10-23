function Stats({ results }) {
  return results.map((result) => {
    return (
      <tr>
        <td>{result.employee}</td>
        <td>{result.initiativeId}</td>
        <td>{result.prepared}</td>
        <td>{result.priority}</td>
        <td>{result.knowledge}</td>
        <td>{result.ownership}</td>
        <td>{result.comment}</td>
      </tr>
    );
  });
}

export default Stats;
