// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var n = 1;
var string = ".skin *{margin: 0; padding: 0; box-sizing: border-box;}\n.skin *::after{\n  box-sizing: border-box;\n}\n.skin *::before{\n  box-sizing: border-box;\n}\n.skin{\n    position: relative;\n     background-color: #ffe446;\n     min-height:50vh\n}\n.nose .san{\n    border: 12px solid;\n    border-color: black transparent transparent transparent;\n    position: absolute;\n    left: 50%;\n    margin-left: -12px;\n    margin-top: 175px;\n\n}\n.nose .yuan{\n    position: absolute;\n    border-radius: 8px 8px 0 0;\n    background-color: black;\n    width: 24px;\n    height: 6px;\n    left: 50%;\n    margin-left: -12px;\n    bottom: 12px;\n}\n.eye{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 72px;\n    height: 72px;\n    margin-left: -36px;\n    border-radius: 50%;\n    top: 130px;\n    background-color: #2e2e2e;\n}\n.eye .yanzhu{\n    position: absolute;\n    background-color: white;\n    border-radius: 50%;\n    border: 3px solid black;\n    left: 10px;\n    top: 1px;\n    width: 36px;\n    height: 36px;\n}\n.lefteye{\n    transform: translateX(-165px);\n}\n.righteye{\n    transform: translateX(165px);\n}\n.face{\n    position: absolute;\n    width: 110px;\n    height: 110px;\n    border: 3px solid black;\n    left: 50%;\n    margin-left: -65px;\n    top: 240px;\n    border-radius: 50%;\n    background-color:#fc0b1b;\n}\n.leftface{\ntransform: translateX(-210px);\n}\n.rightface{\n    transform: translateX(210px);\n    }\n.upperLip {\n    height: 25px;\n    width: 80px;\n    border: 3px solid black;\n    position: absolute;\n    top: 210px;\n    background: #FDE348;\n    z-index: 10;\n    }\n.upperLip.left {\n    right: 50%;\n    border-bottom-left-radius: 40px 25px;\n    border-top: none;\n    border-right: none;\n    transform: rotate(-20deg);\n}\n.upperLip.right {\n    left: 50%;\n    border-bottom-right-radius: 40px 25px;\n    border-top: none;\n    border-left: none;\n    transform: rotate(\n20deg);\n}\n.mouth .down{\n    width: 164px;\n    height: 240px;\n    position: absolute;\n    left: 50%;\n    margin-left: -82px;\n    top: 220px;\n    overflow: hidden;\n}\n.mouth .down .yuan1{\n    border: 3px solid black;\n    background-color:#990613;\n    width: 130px;\n    height: 1000px;\n    position: absolute;\n    bottom: 100px;\n    left: 50%;\n    margin-left: -65px;\n    border-radius: 90px/240px;\n    overflow: hidden;\n    \n}\n.mouth .yuan1 .yuan2{\n    width: 160px;\n    height: 200px;\n    position: absolute;\n    bottom: -90px;\n    left: 50%;\n    margin-left: -80px;\n    border-radius: 90px;\n    background-color: #f8485f;\n}\n";
var time = 100;

var run = function run() {
  //把定时器里面的内容定义为x
  n = n + 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = string.substring(0, n);
  demo2.innerHTML = string.substring(0, n);
  demo.scrollTop = demo.scrollHeight;
};

demo.innerText = string.substring(0, n); //就算外面有style，但是我只在页面上输出文字效果，不会有style的样式

demo2.innerHTML = string.substring(0, n); //代码写入style后不会在页面显示，但是会有样式效果

console.log(string.length);
var id = setInterval(run, time); //模块化慢中快速模块

var slow = function slow() {
  window.clearInterval(id);
  time = 300;
  id = setInterval(run, time);
};

var mid = function mid() {
  window.clearInterval(id);
  time = 100;
  id = setInterval(run, time);
};

var fast = function fast() {
  window.clearInterval(id);
  time = 0;
  id = setInterval(run, time);
};

btnPause.onclick = function () {
  window.clearInterval(id);
};

btnPlay.onclick = function () {
  id = setInterval(run, time);
};

btnSlow.onclick = slow;
btnFast.onclick = fast;
btnMid.onclick = mid;
},{}],"../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62214" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map