import * as React from 'react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import { listBlogs } from '../../graphql/queries.ts';

export class Blogs extends React.PureComponent {
  render() {
    return (
      <Connect query={graphqlOperation(listBlogs)}>
        {({ data: { listBlogs: blogs } }) => {
          if (!blogs) {
            return null;
          }
          return (
            <div>
              {blogs.items.map(b => (
                <div key={b.name}>{b.name}</div>
              ))}
            </div>
          );
        }}
      </Connect>
    );
  }
}
