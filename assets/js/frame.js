function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function frameLoaded() {
  var iframes = [].concat(_toConsumableArray(document.querySelectorAll('iframe')));
  iframes.map(function (iframe) {
    return iframe.classList.add('show');
  });
}
