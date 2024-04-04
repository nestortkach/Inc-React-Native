import { HOME, MENU, PROFILE, SETTINGS } from '../constants';

const switchBottomIcon = (rn: string, focused: boolean) => {
  switch (rn) {
    case HOME:
      return focused ? 'map' : 'map-outline';
    case MENU:
      return focused ? 'grid' : 'grid-outline';
    case SETTINGS:
      return focused ? 'settings' : 'settings-outline';
    case PROFILE:
      return focused ? 'person-circle' : 'person-circle-outline';
    default:
      return focused ? 'home' : 'home-outline';
  }
};

export default switchBottomIcon;
