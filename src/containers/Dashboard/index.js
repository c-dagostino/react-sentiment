import React from 'react';
import TweetsPage from '../Tweets/index';
import WordCloudComponent from '../WordCloud/index';
import PieChart from '../PieChart/index';

export class Dashboard extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td style={{ verticalAlign: 'top' }} colSpan={2}>
              <TweetsPage />
            </td>
          </tr>

          <tr>
            <td className={'tableTop'}>
              <PieChart />
            </td>

            <td>
              <WordCloudComponent />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Dashboard;
