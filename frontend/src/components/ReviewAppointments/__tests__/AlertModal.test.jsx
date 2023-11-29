import { render } from '@testing-library/react';
import AlertModal from './AlertModal.test';

test('renders AlertModal without crashing', () => {
  render(<AlertModal />);
});
