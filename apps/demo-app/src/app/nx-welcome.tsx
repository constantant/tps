import { Component } from 'react';
import SwaggerUi from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import { TopconSwaggerPlugin } from '@topcon/topcon-swagger-layout';

class SwaggerDemo extends Component {
  override componentDidMount() {
    SwaggerUi({
      dom_id: '#swaggerContainer',
      url: `./assets/api.yaml`,
      plugins: [ TopconSwaggerPlugin ],
      layout: "BaseLayout"
    });
  }

  override render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}

export default SwaggerDemo;
