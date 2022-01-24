import React from 'react';

import './topcon-swagger-layout.module.scss';

const operationsView = (taggedOps: any) => {
  const operations = taggedOps.get('operations');
  return operations.map((op: any) => {
    const path = op.get('path');
    const method = op.get('method');

    return <div> { method } - { path } </div>;
  });
}

export default class TopconSwaggerLayout extends React.Component {
  override render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { getComponent, specSelectors } = this.props

    const taggedOps = specSelectors.taggedOperations();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // console.log('props', this.props, taggedOps.map(operationsView));
    return (
      <div>
        { taggedOps.map(operationsView) }
      </div>
    )
  }
}

export const OperationsLayoutPlugin = () => {
  return {
    components: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      BaseLayout: ({ getComponent }) => {
        const Operations = getComponent('OperationsLayout', true);
        return <div>
          Ololololo
          <Operations/>
        </div>
      },
      OperationsLayout: TopconSwaggerLayout
    }
  }
}



