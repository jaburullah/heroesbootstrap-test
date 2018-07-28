export class Menu {
  id: number;
  icon: string;
  name: string;
  path: string;
}
export const MenuItems: Menu[] = [
  { id: 0, icon: 'fa-dashboard', name: 'Dashboard', path: '/dashboard' },
  { id: 1, icon: 'fa-user', name: 'User', path: 'user' },
  { id: 2, icon: 'fa-building', name: 'Appartement', path: 'appartement' },
  { id: 3, icon: 'fa-ticket', name: 'Ticket', path: '' }
];
