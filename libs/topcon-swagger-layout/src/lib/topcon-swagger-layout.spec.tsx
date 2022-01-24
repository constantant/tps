import { render } from '@testing-library/react';

import TopconSwaggerLayout from './topcon-swagger-layout';

describe('TopconSwaggerLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopconSwaggerLayout />);
    expect(baseElement).toBeTruthy();
  });
});
