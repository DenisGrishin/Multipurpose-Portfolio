(() => {
  var t = {
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (t[o] = n[o]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = e && "IntersectionObserver" in window,
            i = e && "classList" in document.createElement("p"),
            a = e && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            c = function (e) {
              return t({}, r, e);
            },
            l = function (t, e) {
              var n,
                o = "LazyLoad::Initialized",
                i = new t(e);
              try {
                n = new CustomEvent(o, { detail: { instance: i } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: i }
                );
              }
              window.dispatchEvent(n);
            },
            s = "src",
            u = "srcset",
            d = "sizes",
            f = "poster",
            p = "llOriginalAttrs",
            m = "data",
            g = "loading",
            h = "loaded",
            v = "applied",
            _ = "error",
            b = "native",
            y = "data-",
            A = "ll-status",
            E = function (t, e) {
              return t.getAttribute(y + e);
            },
            w = function (t) {
              return E(t, A);
            },
            k = function (t, e) {
              return (function (t, e, n) {
                var o = "data-ll-status";
                null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
              })(t, 0, e);
            },
            I = function (t) {
              return k(t, null);
            },
            L = function (t) {
              return null === w(t);
            },
            x = function (t) {
              return w(t) === b;
            },
            S = [g, h, v, _],
            C = function (t, e, n, o) {
              t &&
                (void 0 === o ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, o));
            },
            O = function (t, e) {
              i
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            B = function (t, e) {
              i
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            M = function (t) {
              return t.llTempImage;
            },
            N = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            T = function (t, e) {
              t && (t.loadingCount += e);
            },
            R = function (t, e) {
              t && (t.toLoadCount = e);
            },
            j = function (t) {
              for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            P = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && j(n).forEach(e);
            },
            z = function (t, e) {
              j(t).forEach(e);
            },
            q = [s],
            D = [s, f],
            G = [s, u, d],
            Q = [m],
            F = function (t) {
              return !!t[p];
            },
            H = function (t) {
              return t[p];
            },
            V = function (t) {
              return delete t[p];
            },
            $ = function (t, e) {
              if (!F(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[p] = n);
              }
            },
            J = function (t, e) {
              if (F(t)) {
                var n = H(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            U = function (t, e, n) {
              O(t, e.class_loading),
                k(t, g),
                n && (T(n, 1), C(e.callback_loading, t, n));
            },
            W = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            Y = function (t, e) {
              W(t, d, E(t, e.data_sizes)),
                W(t, u, E(t, e.data_srcset)),
                W(t, s, E(t, e.data_src));
            },
            X = {
              IMG: function (t, e) {
                P(t, function (t) {
                  $(t, G), Y(t, e);
                }),
                  $(t, G),
                  Y(t, e);
              },
              IFRAME: function (t, e) {
                $(t, q), W(t, s, E(t, e.data_src));
              },
              VIDEO: function (t, e) {
                z(t, function (t) {
                  $(t, q), W(t, s, E(t, e.data_src));
                }),
                  $(t, D),
                  W(t, f, E(t, e.data_poster)),
                  W(t, s, E(t, e.data_src)),
                  t.load();
              },
              OBJECT: function (t, e) {
                $(t, Q), W(t, m, E(t, e.data_src));
              },
            },
            K = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            Z = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                C(t.callback_finish, e);
            },
            tt = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            et = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            nt = function (t) {
              return !!t.llEvLisnrs;
            },
            ot = function (t) {
              if (nt(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var o = e[n];
                  et(t, n, o);
                }
                delete t.llEvLisnrs;
              }
            },
            it = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                T(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                B(t, e.class_loading),
                e.unobserve_completed && N(t, n);
            },
            at = function (t, e, n) {
              var o = M(t) || t;
              nt(o) ||
                (function (t, e, n) {
                  nt(t) || (t.llEvLisnrs = {});
                  var o = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  tt(t, o, e), tt(t, "error", n);
                })(
                  o,
                  function (i) {
                    !(function (t, e, n, o) {
                      var i = x(e);
                      it(e, n, o),
                        O(e, n.class_loaded),
                        k(e, h),
                        C(n.callback_loaded, e, o),
                        i || Z(n, o);
                    })(0, t, e, n),
                      ot(o);
                  },
                  function (i) {
                    !(function (t, e, n, o) {
                      var i = x(e);
                      it(e, n, o),
                        O(e, n.class_error),
                        k(e, _),
                        C(n.callback_error, e, o),
                        n.restore_on_error && J(e, G),
                        i || Z(n, o);
                    })(0, t, e, n),
                      ot(o);
                  }
                );
            },
            rt = function (t, e, n) {
              !(function (t) {
                t.llTempImage = document.createElement("IMG");
              })(t),
                at(t, e, n),
                (function (t) {
                  F(t) || (t[p] = { backgroundImage: t.style.backgroundImage });
                })(t),
                (function (t, e, n) {
                  var o = E(t, e.data_bg),
                    i = E(t, e.data_bg_hidpi),
                    r = a && i ? i : o;
                  r &&
                    ((t.style.backgroundImage = 'url("'.concat(r, '")')),
                    M(t).setAttribute(s, r),
                    U(t, e, n));
                })(t, e, n),
                (function (t, e, n) {
                  var o = E(t, e.data_bg_multi),
                    i = E(t, e.data_bg_multi_hidpi),
                    r = a && i ? i : o;
                  r &&
                    ((t.style.backgroundImage = r),
                    (function (t, e, n) {
                      O(t, e.class_applied),
                        k(t, v),
                        n &&
                          (e.unobserve_completed && N(t, e),
                          C(e.callback_applied, t, n));
                    })(t, e, n));
                })(t, e, n);
            },
            ct = function (t, e, n) {
              !(function (t) {
                return K.indexOf(t.tagName) > -1;
              })(t)
                ? rt(t, e, n)
                : (function (t, e, n) {
                    at(t, e, n),
                      (function (t, e, n) {
                        var o = X[t.tagName];
                        o && (o(t, e), U(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            lt = function (t) {
              t.removeAttribute(s), t.removeAttribute(u), t.removeAttribute(d);
            },
            st = function (t) {
              P(t, function (t) {
                J(t, G);
              }),
                J(t, G);
            },
            ut = {
              IMG: st,
              IFRAME: function (t) {
                J(t, q);
              },
              VIDEO: function (t) {
                z(t, function (t) {
                  J(t, q);
                }),
                  J(t, D),
                  t.load();
              },
              OBJECT: function (t) {
                J(t, Q);
              },
            },
            dt = function (t, e) {
              (function (t) {
                var e = ut[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (F(t)) {
                        var e = H(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  L(t) ||
                    x(t) ||
                    (B(t, e.class_entered),
                    B(t, e.class_exited),
                    B(t, e.class_applied),
                    B(t, e.class_loading),
                    B(t, e.class_loaded),
                    B(t, e.class_error));
                })(t, e),
                I(t),
                V(t);
            },
            ft = ["IMG", "IFRAME", "VIDEO"],
            pt = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            mt = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, o) {
                      var i = (function (t) {
                        return S.indexOf(w(t)) >= 0;
                      })(t);
                      k(t, "entered"),
                        O(t, n.class_entered),
                        B(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && N(t, n);
                        })(t, n, o),
                        C(n.callback_enter, t, e, o),
                        i || ct(t, n, o);
                    })(t.target, t, e, n)
                  : (function (t, e, n, o) {
                      L(t) ||
                        (O(t, n.class_exited),
                        (function (t, e, n, o) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return w(t) === g;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (ot(t),
                            (function (t) {
                              P(t, function (t) {
                                lt(t);
                              }),
                                lt(t);
                            })(t),
                            st(t),
                            B(t, n.class_loading),
                            T(o, -1),
                            I(t),
                            C(n.callback_cancel, t, e, o));
                        })(t, e, n, o),
                        C(n.callback_exit, t, e, o));
                    })(t.target, t, e, n);
              });
            },
            gt = function (t) {
              return Array.prototype.slice.call(t);
            },
            ht = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            vt = function (t) {
              return (function (t) {
                return w(t) === _;
              })(t);
            },
            _t = function (t, e) {
              return (function (t) {
                return gt(t).filter(L);
              })(t || ht(e));
            },
            bt = function (t, n) {
              var i = c(t);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (t, e) {
                  o &&
                    !pt(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        mt(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t)
                    ));
                })(i, this),
                (function (t, n) {
                  e &&
                    window.addEventListener("online", function () {
                      !(function (t, e) {
                        var n;
                        ((n = ht(t)), gt(n).filter(vt)).forEach(function (e) {
                          B(e, t.class_error), I(e);
                        }),
                          e.update();
                      })(t, n);
                    });
                })(i, this),
                this.update(n);
            };
          return (
            (bt.prototype = {
              update: function (t) {
                var e,
                  i,
                  a = this._settings,
                  r = _t(t, a);
                R(this, r.length),
                  !n && o
                    ? pt(a)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== ft.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  at(t, e, n),
                                  (function (t, e) {
                                    var n = X[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  k(t, b);
                              })(t, e, n);
                          }),
                            R(n, 0);
                        })(r, a, this)
                      : ((i = r),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, i))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  ht(this._settings).forEach(function (t) {
                    V(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                _t(t, n).forEach(function (t) {
                  N(t, e), ct(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                ht(t).forEach(function (e) {
                  dt(e, t);
                });
              },
            }),
            (bt.load = function (t, e) {
              var n = c(e);
              ct(t, n);
            }),
            (bt.resetStatus = function (t) {
              I(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, o = 0; (n = e[o]); o += 1) l(t, n);
                  else l(t, e);
              })(bt, window.lazyLoadOptions),
            bt
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var i = e[o];
    if (void 0 !== i) return i.exports;
    var a = (e[o] = { exports: {} });
    return t[o].call(a.exports, a, a.exports, n), a.exports;
  }
  (() => {
    "use strict";
    function t(t) {
      this.type = t;
    }
    (t.prototype.init = function () {
      const t = this;
      (this.??bjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let t = 0; t < this.nodes.length; t++) {
        const e = this.nodes[t],
          n = e.dataset.da.trim().split(","),
          o = {};
        (o.element = e),
          (o.parent = e.parentNode),
          (o.destination = document.querySelector(n[0].trim())),
          (o.breakpoint = n[1] ? n[1].trim() : "767"),
          (o.place = n[2] ? n[2].trim() : "last"),
          (o.index = this.indexInParent(o.parent, o.element)),
          this.??bjects.push(o);
      }
      this.arraySort(this.??bjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.??bjects,
          function (t) {
            return (
              "(" +
              this.type +
              "-width: " +
              t.breakpoint +
              "px)," +
              t.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (t, e, n) {
            return Array.prototype.indexOf.call(n, t) === e;
          }
        ));
      for (let e = 0; e < this.mediaQueries.length; e++) {
        const n = this.mediaQueries[e],
          o = String.prototype.split.call(n, ","),
          i = window.matchMedia(o[0]),
          a = o[1],
          r = Array.prototype.filter.call(this.??bjects, function (t) {
            return t.breakpoint === a;
          });
        i.addListener(function () {
          t.mediaHandler(i, r);
        }),
          this.mediaHandler(i, r);
      }
    }),
      (t.prototype.mediaHandler = function (t, e) {
        if (t.matches)
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let t = e.length - 1; t >= 0; t--) {
            const n = e[t];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (t.prototype.moveTo = function (t, e, n) {
        e.classList.add(this.daClassname),
          "last" === t || t >= n.children.length
            ? n.insertAdjacentElement("beforeend", e)
            : "first" !== t
            ? n.children[t].insertAdjacentElement("beforebegin", e)
            : n.insertAdjacentElement("afterbegin", e);
      }),
      (t.prototype.moveBack = function (t, e, n) {
        e.classList.remove(this.daClassname),
          void 0 !== t.children[n]
            ? t.children[n].insertAdjacentElement("beforebegin", e)
            : t.insertAdjacentElement("beforeend", e);
      }),
      (t.prototype.indexInParent = function (t, e) {
        const n = Array.prototype.slice.call(t.children);
        return Array.prototype.indexOf.call(n, e);
      }),
      (t.prototype.arraySort = function (t) {
        "min" === this.type
          ? Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                  ? -1
                  : "last" === t.place || "first" === e.place
                  ? 1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            })
          : Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                  ? 1
                  : "last" === t.place || "first" === e.place
                  ? -1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            });
      });
    new t("max").init();
    let e = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        );
      },
    };
    let o = !0,
      i = (t = 500) => {
        let e = document.querySelector("body");
        if (o) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < n.length; t++) {
              n[t].style.paddingRight = "0px";
            }
            (e.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, t);
        }
      };
    function a(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    let r = (t, e = !1, n = 500, o = 0) => {
      const r = document.querySelector(t);
      if (r) {
        let c = "",
          l = 0;
        e &&
          ((c = "header.header"), (l = document.querySelector(c).offsetHeight));
        let s = {
          speedAsDuration: !0,
          speed: n,
          header: c,
          offset: o,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (i(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(r, "", s);
        else {
          let t = r.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? t - l : t, behavior: "smooth" });
        }
        a(`[gotoBlock]: ????????...???????? ?? ${t}`);
      } else a(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${t}`);
    };
    new (n(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let c = !1;
    setTimeout(() => {
      if (c) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0),
      (window.FLS = !0),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
          function t() {
            let t = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${t}px`);
          }
          window.addEventListener("resize", t), t();
        }
      })(),
      (function () {
        function t(t) {
          if ("click" === t.type) {
            const e = t.target;
            if (e.closest("[data-goto]")) {
              const n = e.closest("[data-goto]"),
                o = n.dataset.goto ? n.dataset.goto : "",
                i = !!n.hasAttribute("data-goto-header"),
                a = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              r(o, i, a), t.preventDefault();
            }
          } else if ("watcherCallback" === t.type && t.detail) {
            const e = t.detail.entry,
              n = e.target;
            if ("navigator" === n.dataset.watch) {
              const t = n.id,
                o =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${t}"]`));
              e.isIntersecting
                ? o && o.classList.add("_navigator-active")
                : o && o.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", t),
          document.addEventListener("watcherCallback", t);
      })();
  })();
})();
