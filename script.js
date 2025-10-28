 const btn = document.getElementById('btn');
  let original = document.getElementsByClassName('circle')[0].outerHTML;
  let replaced  = '<section class="circle">Life! 🎉</section>';

  btn.onclick = () => { // If I click this element/object what will happen
     const el = document.getElementsByClassName('circle')[0];
    // If current is original div, swap to section, which is what the replaced is;
    if (el.tagName.toLowerCase() === 'div') {
      el.outerHTML = replaced;//outerHTML is like cutting out the entire element (its tag + everything inside) and pasting a new element in its place.
    } else {
      el.outerHTML = original;
      // if the current one that has id box is a section, which means it has been replaced already, replace it with the original
    }
  };