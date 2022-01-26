import React from 'react';

import './topcon-swagger-layout.module.scss';

export default class TopconSwaggerBaseLayout extends React.Component {
  override render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { layoutSelectors, layoutActions, getConfigs, specSelectors } = this.props

    const { docExpansion } = getConfigs;

    const taggedOps = specSelectors.taggedOperations();
    return (
      <main>
        {
          taggedOps.map((taggedOps: any, tag: string) => {
            const isShownKey = ['operations-tag', tag]
            const showTag = layoutSelectors.isShown(isShownKey, docExpansion === 'full' || docExpansion === 'list');

            const tagName = taggedOps.getIn(['tagDetails', 'name']);
            const tagDescription = taggedOps.getIn(['tagDetails', 'description']);
            const operations = taggedOps.get('operations');
            return (
              <section key={ tagName }>
                <button onClick={ () => layoutActions.show(isShownKey, !showTag) }>
                  <h2>{ tagName }</h2>
                  <span>{ tagDescription }</span>
                </button>
                {
                  showTag ? <div>
                    {
                      operations.map((op: any) => {
                        const id = op.get('id');
                        const path = op.get('path');
                        const method = op.get('method');
                        return (
                          <div key={ id }> { method } - { path } </div>
                        )
                      })
                    }
                  </div> : null
                }
              </section>
            );
          }).toArray()
        }
      </main>
    )
  }
}

export const TopconSwaggerPlugin = () => ({
  components: {
    BaseLayout: TopconSwaggerBaseLayout
  }
});
