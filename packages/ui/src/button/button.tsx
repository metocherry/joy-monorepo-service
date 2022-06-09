import { ReactNode } from 'react';
import { css } from '@emotion/react';

export interface ButtoonPorps {
  children: ReactNode;
  size: 30 | 40 | 45 | 50 | 60;
  color?: string,
}

export function Button({
  children,
  size,
  color = '#000',
}: ButtoonPorps) {
  return (
    <button
      type="button"
      css={css`height: ${size}px; color: ${color};`}
    >
      {children}
    </button>
  );
}
