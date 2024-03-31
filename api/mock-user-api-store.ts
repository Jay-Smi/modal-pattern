import { create } from 'zustand';

const RESPONSE_DELAY = 750;

export interface IUser {
  id: string;
  name: string;
}

const defaultValues: IUser[] = [
  { id: '1', name: 'Jeff' },
  { id: '2', name: 'John' },
  { id: '3', name: 'Jill' },
  { id: '4', name: 'Jane' },
];

interface IUserStore {
  users: IUser[];
  updateUser: (id: string, name: string) => void;
  addUser: (name: string) => void;
  removeUser: (id: string) => void;
  getUser: (id: string) => Promise<IUser | undefined>;
  getUsers: () => Promise<IUser[]>;
  userSearch: (query: string) => Promise<IUser[]>;
}

export const userStore = create<IUserStore>((set, get) => ({
  users: defaultValues,

  getUser: async (id) =>
    new Promise<IUser | undefined>((resolve) => {
      setTimeout(() => {
        resolve(get().users.find((user) => user.id === id));
      }, RESPONSE_DELAY);
    }),

  getUsers: () =>
    new Promise<IUser[]>((resolve) => {
      setTimeout(() => {
        resolve(get().users);
      }, RESPONSE_DELAY);
    }),

  addUser: async (name) => {
    const delayedName = await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(name);
      }, RESPONSE_DELAY);
    });

    set((state) => ({
      users: [...state.users, { id: (state.users.length + 1).toString(), name: delayedName }],
    }));
  },

  updateUser: async (id, name) => {
    const delayedName = await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(name);
      }, RESPONSE_DELAY);
    });
    set((state) => ({
      users: state.users.map((user) => (user.id === id ? { ...user, delayedName } : user)),
    }));
  },

  removeUser: async (id) => {
    const delayedId = await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, RESPONSE_DELAY);
    });
    set((state) => ({ users: state.users.filter((user) => user.id !== delayedId) }));
  },

  userSearch: async (query) => {
    const delayedQuery = await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(query);
      }, RESPONSE_DELAY);
    });
    return get().users.filter((user) => user.name.includes(delayedQuery));
  },
}));
