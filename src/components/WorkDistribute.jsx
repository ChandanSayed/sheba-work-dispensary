const WorkDistribute = ({ users }) => {
  return (
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <th>SL NO.</th>
          <th>Name</th>
          <th>Daily works</th>
          <th>Office Works</th>
          <th>Remarks</th>
        </tr>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <ul>
                  {user.dailyWork.map((list, i) => {
                    return <li key={i}>{list.workName}</li>;
                  })}
                </ul>
              </td>
              <td>
                <ul>
                  {user.officeWork.map((list, i) => {
                    return <li key={i}>{list.workName}</li>;
                  })}
                </ul>
              </td>
              <td>{user.status}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default WorkDistribute;
