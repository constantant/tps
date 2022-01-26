import { render } from '@testing-library/react';

import TopconSwaggerBaseLayout from './topcon-swagger-base-layout';

describe('TopconSwaggerLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopconSwaggerBaseLayout />);
    expect(baseElement).toBeTruthy();
  });
});
