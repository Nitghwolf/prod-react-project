import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('SidebarTest', () => {
  test('Sidebar render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const SidebarBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(SidebarBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
