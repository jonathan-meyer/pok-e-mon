export const simpleMessages = (scope, messages) =>
  Object.entries(messages)
    .map(([k, v]) => ({
      [k]: {
        id: `${scope}.${k}`,
        defaultMessage: v,
      },
    }))
    .reduce((p, c) => ({ ...p, ...c }), {});
