import { create } from 'zustand';

export const useProjectStore = create((set) => ({
  projects: [
    { id: 1, name: 'Project A', description: 'Description of Project A' },
    { id: 2, name: 'Project B', description: 'Description of Project B' },
  ],
  addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
}));
