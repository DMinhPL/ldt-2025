import { atom } from "nanostores";

export type MenuState = {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
};

const openMenuAtom = atom(false);

export const menu: MenuState = {
  get openMenu() {
    return openMenuAtom.get();
  },
  setOpenMenu(open: boolean) {
    openMenuAtom.set(open);
  },
};

// Optional helpers
export const openMenuStore = openMenuAtom; // expose the atom if you want subscribe/useStore
export const toggleMenu = () => openMenuAtom.set(!openMenuAtom.get());
export const closeMenu = () => openMenuAtom.set(false);
export const openMenu = (open: boolean) => openMenuAtom.set(open);