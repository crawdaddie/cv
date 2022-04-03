const hoverSources = [...document.getElementsByClassName("keyword-hover-source")];
const hoverTargets = [...document.getElementsByClassName("keyword-hover-target")];

const getKeywords = (target) => {
  return target.dataset.keywords.split(' ')
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
};

const unHighlightKeywords = (e) => {
  const hoverSource = e.target;
  const { keyword } = hoverSource.dataset;
  const targets = getTargetsForKeyword(hoverTargets, keyword);
  targets.forEach(target => target.classList.remove("highlight-keyword"))
};

hoverSources.forEach(span => {
  span.onmouseover = highlightKeywords
  span.onmouseleave = unHighlightKeywords
});

