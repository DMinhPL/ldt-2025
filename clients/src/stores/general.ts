import { atom } from 'nanostores';

export interface GeneralState {
  general: GeneralResponseType | null;
  setGeneral: (data: GeneralResponseType) => void;
}

const generalAtom = atom<GeneralResponseType | null>(null);

export const general: GeneralState = {
  get general() {
    return generalAtom.get();
  },
  setGeneral(data: GeneralResponseType) {
    generalAtom.set(data);
  },
};

// Optional helpers
export const generalStore = generalAtom; // expose the atom if you want subscribe/useStore
export const updateGeneral = (data: GeneralResponseType) => generalAtom.set(data);