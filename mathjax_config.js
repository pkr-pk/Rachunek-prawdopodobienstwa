MathJax.Hub.Config({
    extensions: ['tex2jax.js'],
    jax: ['input/TeX', 'output/HTML-CSS'],
    showMathMenu: false,
    messageStyle: 'none',
    tex2jax: {
      inlineMath: inline,
      displayMath: block,
      processEscapes: true,
    },
    TeX: {
      extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js'],
      equationNumbers: { autoNumber: "AMS" }, // <== see this line 
    },
    'HTML-CSS': { availableFonts: ['TeX'] },
    skipStartupTypeset: true
  })