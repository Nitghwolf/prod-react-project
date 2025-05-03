import { render, screen } from '@testing-library/react';
import Button, {
  ThemeButton,
} from '../../../../shared/ui/AppLink/Button/Button';

describe('ButtonTest', () => {
  test('Test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test clear render', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
