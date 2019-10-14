export const getInitialTagCheckStates = (selectedKeywordsInfo) => {
  const { fullyIncludedTagNames, partiallyIncludedTagNames } = selectedKeywordsInfo;

  const tagCheckStates = {};
  for (const tagName of fullyIncludedTagNames) {
    tagCheckStates[tagName] = 'checked';
  }

  for (const tagName of partiallyIncludedTagNames) {
    tagCheckStates[tagName] = 'remove';
  }

  return tagCheckStates;
};

export default getInitialTagCheckStates;
