// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct } from '@polkadot/types';
import type { Balance, Permill } from '@polkadot/types/interfaces/runtime';

/** @name AccountStatus */
export interface AccountStatus extends Struct {
  readonly validity: AccountValidity;
  readonly freeBalance: Balance;
  readonly lockedBalance: Balance;
  readonly signature: Bytes;
  readonly vat: Permill;
}

/** @name AccountValidity */
export interface AccountValidity extends Enum {
  readonly isInvalid: boolean;
  readonly isInitiated: boolean;
  readonly isPending: boolean;
  readonly isValidLow: boolean;
  readonly isValidHigh: boolean;
  readonly isCompleted: boolean;
  readonly type: 'Invalid' | 'Initiated' | 'Pending' | 'ValidLow' | 'ValidHigh' | 'Completed';
}

export type PHANTOM_PURCHASE = 'purchase';
