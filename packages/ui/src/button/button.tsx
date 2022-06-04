import { ReactNode } from 'react';

export interface ButtoonPorps {
  children: ReactNode;
}

export function Button({ children }: ButtoonPorps) {
  return <button type="button">{children}</button>;
}
