const hoverSources = [...document.getElementsByClassName("keyword-hover-source")];
const hoverTargets = [...document.getElementsByClassName("keyword-hover-target")];
console.log(hoverSources, hoverTargets)

const getKeywords = (target) => {
  return target.dataset.keywords?.split(' ')
}
const getTargetsForKeyword = (targets, keyword) => {
  return targets.filter(
    target => getKeywords(target).includes(keyword)
  )
};

const highlightKeywords = (e) => {
  const hoverSource = e.target;
  const { keyword } = hoverSource.dataset;
  const targets = getTargetsForKeyword(hoverTargets, keyword);
  targets.forEach(target => target.classList.add("highlight-keyword"))
  // e.target.classlist.add("highlight-keyword")
};

const unHighlightKeywords = (e) => {
  const hoverSource = e.target;
  const { keyword } = hoverSource.dataset;
  const targets = getTargetsForKeyword(hoverTargets, keyword);
  targets.forEach(target => target.classList.remove("highlight-keyword"))
  // e.target.classlist.remove("highlight-keyword")
};

const getSourcesForKeywords = (keywords) => {
  return hoverSources.filter(source => {
    const { keyword } = source?.dataset;
    return keywords?.includes(keyword);
  });
};

const getSourcesForEvent = (e) => {
  const hoverSource = e.target;
  const keywords = getKeywords(hoverSource);
  const sources = getSourcesForKeywords(keywords)
  return sources
}

const highlightKeywordSources = (e) => {
  const sources = getSourcesForEvent(e);
  sources.forEach(target => target.classList.add("highlight-keyword"))
  // e.target.classlist.add("highlight-keyword")
}

const unHighlightKeywordSources = (e) => {
  const sources = getSourcesForEvent(e);
  sources.forEach(target => target.classList.remove("highlight-keyword"))
  // e.target.classlist.remove("highlight-keyword")
}

hoverSources.forEach(span => {
  span.onmouseover = highlightKeywords
  span.onmouseleave = unHighlightKeywords
});

hoverTargets.forEach(span => {
  span.onmouseover = highlightKeywordSources
  span.onmouseleave = unHighlightKeywordSources
});


