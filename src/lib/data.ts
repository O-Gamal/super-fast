import { Task } from '@/types/task';

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Work on my UI project',
    expectedTimeToFinish: 120,
    isCompleted: true,
    priority: 'HIGH',
    date: '22/7/2023',
  },
  {
    id: 2,
    title: 'Watch css animation course',
    expectedTimeToFinish: 60,
    isCompleted: false,
    priority: 'HIGH',
    date: '22/7/2023',
  },
  {
    id: 3,
    title: 'Read atomic habits book',
    expectedTimeToFinish: 30,
    isCompleted: false,
    priority: 'MEDIUM',
    date: '22/7/2023',
  },
  {
    id: 4,
    title: 'Redesign my logo',
    expectedTimeToFinish: 45,
    isCompleted: false,
    priority: 'MEDIUM',
    date: '23/7/2023',
  },
  {
    id: 5,
    title: 'Clean home',
    expectedTimeToFinish: 30,
    isCompleted: false,
    priority: 'MEDIUM',
    date: '22/7/2023',
  },
  {
    id: 6,
    title: 'Go to the gym',
    expectedTimeToFinish: 60,
    isCompleted: false,
    priority: 'LOW',
    date: '22/7/2023',
  },
];
