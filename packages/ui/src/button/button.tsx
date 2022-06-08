import { ReactNode } from 'react';
import { css } from '@emotion/react';

export interface ButtoonPorps {
  children: ReactNode;
  size: 30 | 40 | 50;
}

export function Button({
  children,
  size,
}: ButtoonPorps) {
  return (
    <button type="button" css={css`height: ${size}px;`}>
      {children}
    </button>
  );
}
