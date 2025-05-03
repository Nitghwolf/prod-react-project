import { render, screen } from '@testing-library/react';
import Button, {
  ThemeButton,
} from '../../../../shared/ui/AppLink/Button/Button';

describe('ButtonTest', () => {
  test('Test render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test clear render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
