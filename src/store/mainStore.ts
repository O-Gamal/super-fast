import { create } from 'zustand';
import createSelectors from './createSelectors';

type State = {
  userName: string;
};

type Action = {
  updateUserName: (newUserName: State['userName']) => void;
};

const useBaseStore = create<State & Action>()((set) => ({
  userName: localStorage.getItem('APP_USERNAME') || 'buddy',
  updateUserName: (newUserName) => {
    set(() => ({ userName: newUserName }));
    // update localstorage
    localStorage.setItem('APP_USERNAME', newUserName);
  },
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}));

export const useStore = createSelectors(useBaseStore);
