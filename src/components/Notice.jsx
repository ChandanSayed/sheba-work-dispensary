const Notice = () => {
  return (
    <div className="notice-section">
      <h3 className="secondary-color text-center">Notice Board</h3>
      <div className="own-work-section">
        <div className="own-work">
          <p>Today, Into office own work:</p>
          <table className="text-left">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Farhanna Falguni</li>
                    <li>Rubel Hossain</li>
                  </ul>
                </td>
                <td className="text-center">Office cleaning</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        <div className="own-work next">
          <p>Today, Into office own work:</p>
          <table className="text-left">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Farhanna Falguni</li>
                    <li>Rubel Hossain</li>
                  </ul>
                </td>
                <td className="text-center">Office cleaning</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
      <div className="n-b">
        <p>
          {' '}
          <span className="secondary-color">N.B:</span> We Will Celebrate Our 5k Follower Into Our Page Tomorrow, We Wish Attent To Office All Member. Time 1:30 PM , Order By ShebaPoint Authority.
        </p>
      </div>
    </div>
  );
};

export default Notice;
