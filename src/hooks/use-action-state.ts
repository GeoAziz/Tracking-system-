'use client';

import { useCallback, useState, useTransition } from 'react';

type ServerAction<TState> = (state: TState, formData: FormData) => Promise<TState>;

export function useActionState<TState>(
  action: ServerAction<TState>,
  initialState: TState
): [TState, (formData: FormData) => void] {
  const [state, setState] = useState<TState>(initialState);
  const [isPending, startTransition] = useTransition();

  const dispatchAction = useCallback(
    (formData: FormData) => {
      startTransition(async () => {
        const result = await action(state, formData);
        setState(result);
      });
    },
    [action, state]
  );

  return [state, dispatchAction];
}
