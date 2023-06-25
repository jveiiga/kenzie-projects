import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        isStore: boolean;
        isActive: boolean;
      };
    }
  }
}
export {};
