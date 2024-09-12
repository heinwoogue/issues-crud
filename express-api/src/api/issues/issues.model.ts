import * as z from 'zod';

import { db } from '../../db';
import { WithId } from 'mongodb';

export const Issue = z.object(
  {
    title: z.string().min(1),
    description: z.string().min(1),
  }
);

export type Issue = z.infer<typeof Issue>;
export type IssueWithId = WithId<Issue>;
export const Issues = db.collection<Issue>('issues')