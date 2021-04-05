var getTimestamp = (element) => {
  return element.children.content?.children.container.children.thumbnail.children.thumbnail.children.overlays
    .getElementsByTagName("ytd-thumbnail-overlay-time-status-renderer")[0]
    .getElementsByTagName("span")[0]
    .textContent.trim();
};

var getNumberFromTimestamp = (timestamp) => {
  return timestamp ? timestamp.replaceAll(":", "") : "";
};

var elementContainer = document.getElementsByTagName(
  "ytd-playlist-video-list-renderer"
)[0];
var originalElementContainer = elementContainer.children.contents;
var originalElements = elementContainer.children.contents.children;

Array.from(originalElements)
  .sort((a, b) => {
    const timestampA = getNumberFromTimestamp(getTimestamp(a));
    const timestampB = getNumberFromTimestamp(getTimestamp(b));
    return timestampA - timestampB;
  })
  .forEach((element) => {
    originalElementContainer.appendChild(element);
  });
