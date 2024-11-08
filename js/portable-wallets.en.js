import.meta;
var Hn = Object.defineProperty,
  Gn = Object.defineProperties,
  Vn = Object.getOwnPropertyDescriptors,
  cr = Object.getOwnPropertySymbols,
  zn = Object.prototype.hasOwnProperty,
  qn = Object.prototype.propertyIsEnumerable,
  _e = (e, t) => ((t = Symbol[e]) ? t : Symbol.for('Symbol.' + e)),
  dr = (e) => {
    throw TypeError(e);
  },
  Ae = (e, t, n) =>
    t in e
      ? Hn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _ = (e, t) => {
    for (var n in t || (t = {})) zn.call(t, n) && Ae(e, n, t[n]);
    if (cr) for (var n of cr(t)) qn.call(t, n) && Ae(e, n, t[n]);
    return e;
  },
  P = (e, t) => Gn(e, Vn(t)),
  d = (e, t, n) => Ae(e, typeof t != 'symbol' ? t + '' : t, n),
  ur = (e, t, n) => t.has(e) || dr('Cannot ' + n),
  E = (e, t, n) => (
    ur(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
  ),
  V = (e, t, n) =>
    t.has(e)
      ? dr('Cannot add the same private member more than once')
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  Y = (e, t, n, r) => (
    ur(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
  ),
  z = function (e, t) {
    (this[0] = e), (this[1] = t);
  },
  _t = (e, t, n) => {
    var r = (o, s, l, c) => {
        try {
          var h = n[o](s),
            p = (s = h.value) instanceof z,
            m = h.done;
          Promise.resolve(p ? s[0] : s)
            .then((y) =>
              p
                ? r(
                    o === 'return' ? o : 'next',
                    s[1] ? { done: y.done, value: y.value } : y,
                    l,
                    c
                  )
                : l({ value: y, done: m })
            )
            .catch((y) => r('throw', y, l, c));
        } catch (y) {
          c(y);
        }
      },
      a = (o) => (i[o] = (s) => new Promise((l, c) => r(o, s, l, c))),
      i = {};
    return (
      (n = n.apply(e, t)),
      (i[_e('asyncIterator')] = () => i),
      a('next'),
      a('throw'),
      a('return'),
      i
    );
  },
  q = (e, t, n) =>
    (t = e[_e('asyncIterator')])
      ? t.call(e)
      : ((e = e[_e('iterator')]()),
        (t = {}),
        (n = (r, a) =>
          (a = e[r]) &&
          (t[r] = (i) =>
            new Promise(
              (o, s, l) => (
                (i = a.call(e, i)),
                (l = i.done),
                Promise.resolve(i.value).then(
                  (c) => o({ value: c, done: l }),
                  s
                )
              )
            ))),
        n('next'),
        n('return'),
        t);
const jn = ':host{display:flex;align-items:center;justify-content:center}';
class Wn extends HTMLElement {
  constructor() {
    var t, n;
    super(),
      d(this, 'size'),
      d(this, 'color'),
      (this.size = (t = this.getAttribute('size')) != null ? t : '18px'),
      (this.color = (n = this.getAttribute('color')) != null ? n : 'gray'),
      this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
    const t = document.createElement('style');
    (t.textContent = jn), this.shadowRoot.appendChild(t);
  }
  render() {
    const t = this.shadowRoot,
      n = '\n      width="'
        .concat(this.size, '"\n      height="')
        .concat(
          this.size,
          '"\n      xmlns="http://www.w3.org/2000/svg"\n      aria-hidden="true"\n    '
        );
    t.innerHTML = '\n      <svg '
      .concat(n, ' viewBox="0 0 20 20" fill="')
      .concat(
        this.color,
        '">\n        <path d="M17.1 4.3l-1.4-1.4-5.7 5.7-5.7-5.7-1.4 1.4 5.7 5.7-5.7 5.7 1.4 1.4 5.7-5.7 5.7 5.7 1.4-1.4-5.7-5.7z"/>\n      </svg>\n    '
      );
  }
}
const Yn =
  '#overlay{position:fixed;width:100%;height:100%;background:#0006;top:0;left:0;z-index:2147483647;animation:modalPop .3s ease-out}#modal{position:fixed;top:20%;left:50%;width:100%;max-width:383px;transform:translate(-50%,-100%);background:#fff;color:#000;border-radius:5px;animation:modalSlideInFromTop .3s forwards}@keyframes modalPop{0%{opacity:0}to{opacity:1}}@keyframes modalSlideInFromTop{0%{transform:translate(-50%,-100%)}to{transform:translate(-50%)}}@keyframes modalSlideInFromBottom{0%{transform:translate(-50%,100%)}to{transform:translate(-50%)}}@media only screen and (max-width: 640px){#modal{top:auto;bottom:0;animation:modalSlideInFromBottom .3s forwards}}#modal footer{padding:0 21px 21px}#modal header{display:flex;justify-content:space-between;padding:21px 21px 16px}#title{font-size:21px;font-weight:600;line-height:25.2px;margin:0}.capitalize:first-letter{display:inline-block;text-transform:capitalize}#content{text-align:left;padding:0 21px 16px;overflow:auto;max-height:50vh}#modal #content p{margin:0;font-size:14px;line-height:21px}#close-icon,#close-button{cursor:pointer}#close-icon{min-width:24px;background:transparent;padding:0;border:none}#close-button{width:100%;padding:16px 21px;color:#fff;background-color:#1773b0;border:none;border-radius:5px;font-size:14px;line-height:21px;font-family:inherit}#close-button:hover,#close-button:active{background:#136f99}#close-button:active,#close-button:focus{box-shadow:0 0 0 4px #1990c640}';
var Gr = /^\s*at .*(\S+:\d+|\(native\))/m,
  Kn = /^(eval@)?(\[native code])?$/;
function Qn(e) {
  return e.stack ? (e.stack.match(Gr) ? Jn(e) : Xn(e)) : [];
}
function Vr(e) {
  if (e.indexOf(':') === -1) return [e];
  let t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ''));
  return [t[1], t[2] ? Number(t[2]) : void 0, t[3] ? Number(t[3]) : void 0];
}
function Jn(e) {
  return e.stack
    .split('\n')
    .filter((t) => !!t.match(Gr))
    .map((t) => {
      let n = t.replace(/^\s+/, '').replace(/^.*?\s+/, ''),
        r = n.match(/ (\(.+\)$)/);
      n = r ? n.replace(r[0], '') : n;
      let a = Vr(r ? r[1] : n),
        i = (r && n) || void 0,
        o = ['eval', '<anonymous>'].indexOf(a[0]) > -1 ? void 0 : a[0];
      return { method: i, file: o, lineNumber: a[1], columnNumber: a[2] };
    });
}
function Xn(e) {
  return e.stack
    .split('\n')
    .filter((t) => !t.match(Kn))
    .map((t) => {
      if (t.indexOf('@') === -1 && t.indexOf(':') === -1) return { method: t };
      let n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
        r = t.match(n),
        a = r && r[1] ? r[1] : void 0,
        i = Vr(t.replace(n, ''));
      return { method: a, file: i[0], lineNumber: i[1], columnNumber: i[2] };
    });
}
var hr = '5',
  Zn = class {
    constructor(e) {
      d(this, 'breadcrumbs', []),
        d(this, 'apiKey'),
        d(this, 'plugins'),
        d(this, 'appId'),
        d(this, 'appType'),
        d(this, 'appVersion'),
        d(this, 'releaseStage'),
        d(this, 'locale'),
        d(this, 'userAgent'),
        d(this, 'metadata'),
        d(this, 'persistedMetadata'),
        d(this, 'onError'),
        d(this, 'onPostErrorListeners', []);
      var t;
      (this.apiKey = e.apiKey),
        (this.appType = e.appType),
        (this.appId = e.appId),
        (this.appVersion = e.appVersion),
        (this.releaseStage = e.releaseStage),
        (this.locale = e.locale),
        (this.userAgent = e.userAgent),
        (this.metadata = e.metadata),
        (this.onError = e.onError),
        (this.persistedMetadata = {}),
        (this.plugins = (t = e.plugins) != null ? t : []),
        this.plugins.forEach((n) => n.load(this)),
        this.leaveBreadcrumb('Bugsnag started', void 0, 'state');
    }
    addMetadata(e) {
      for (let t of Object.keys(e)) this.persistedMetadata[t] = e[t];
    }
    leaveBreadcrumb(e, t, n = 'manual') {
      this.breadcrumbs.push({
        name: e,
        metaData: t,
        type: n,
        timestamp: new Date().toISOString(),
      });
    }
    notify(
      e,
      {
        errorClass: t,
        severity: n,
        severityType: r,
        handled: a = !0,
        metadata: i,
        context: o,
      } = {}
    ) {
      var s, l;
      let c = _(_(_({}, this.metadata), this.persistedMetadata), i),
        h = this.buildBugsnagEvent({
          error: e,
          errorClass: t,
          severityType: r,
          handled: a,
          severity: n,
          metadata: c,
          context: o,
        });
      if (
        ((l = (s = this.onError) == null ? void 0 : s.call(this, h, e)) ==
          null ||
          l) &&
        this.releaseStage !== 'development'
      ) {
        let p = this.sendToBugsnag(h);
        return this.onPostErrorListeners.forEach((m) => m(h)), p;
      }
      return Promise.resolve();
    }
    addOnPostError(e) {
      this.onPostErrorListeners.push(e);
    }
    buildBugsnagEvent({
      error: e,
      errorClass: t,
      severity: n = 'error',
      severityType: r = 'handledException',
      handled: a,
      metadata: i = {},
      context: o,
    }) {
      let s = new Date().toISOString(),
        {
          breadcrumbs: l,
          appId: c,
          appType: h,
          appVersion: p,
          releaseStage: m,
          locale: y,
          userAgent: A,
        } = this;
      return {
        payloadVersion: hr,
        exceptions: [
          {
            errorClass: t != null ? t : e.name,
            stacktrace: zr(c, e),
            message: e.message,
          },
        ],
        severity: n,
        severityReason: { type: r },
        unhandled: !a,
        app: { id: c, type: h, version: p, releaseStage: m },
        device: { time: s, locale: y, userAgent: A },
        breadcrumbs: l,
        context: o,
        metaData: i,
      };
    }
    async sendToBugsnag(e) {
      let { apiKey: t } = this,
        n = {
          apiKey: t,
          notifier: {
            name: 'Bugsnag JavaScript',
            version: '7.22.2',
            url: 'https://github.com/bugsnag/bugsnag-js',
          },
          events: [e],
        };
      try {
        await fetch('https://notify.bugsnag.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Bugsnag-Api-Key': t,
            'Bugsnag-Payload-Version': hr,
            'Bugsnag-Sent-At': e.device.time,
          },
          body: JSON.stringify(n),
        });
      } catch (r) {
        console.warn('[bugsnag-light] failed to send an event'),
          console.warn(r);
      }
    }
  };
function zr(e, t) {
  return Qn(t).map((n) => {
    var r, a, i, o;
    let s = (r = n.file) == null ? void 0 : r.includes(e);
    return {
      method: (a = n.method) != null ? a : '',
      file: (i = n.file) != null ? i : '',
      lineNumber: (o = n.lineNumber) != null ? o : 0,
      columnNumber: n.columnNumber,
      inProject: s,
    };
  });
}
function ta(e) {
  let t = window.onerror;
  window.onerror = (n, r, a, i, o) => {
    o && e.notify(o, { severityType: 'unhandledException', handled: !1 }),
      typeof t == 'function' && t.apply(window.onerror, [n, r, a, i, o]);
  };
}
function ea(e) {
  window.addEventListener('unhandledrejection', ({ reason: t }) => {
    t &&
      e.notify(t, { severityType: 'unhandledPromiseRejection', handled: !1 });
  });
}
function Vt(e) {
  try {
    const t = new RegExp('(^| )'.concat(e, '=([^;]+)')).exec(document.cookie);
    if (t) {
      const n = t[2];
      try {
        return decodeURIComponent(n);
      } catch (r) {
        return n;
      }
    }
    return null;
  } catch (t) {
    return null;
  }
}
const Re = {
    BRANDED_BUTTON:
      'shopify-payment-button__button shopify-payment-button__button--branded',
    UNBRANDED_BUTTON:
      'shopify-payment-button__button shopify-payment-button__button--unbranded',
    MORE_PAYMENT_OPTION_BUTTON: 'shopify-payment-button__more-options',
    HIDDEN: 'shopify-payment-button__button--hidden',
  },
  ra = { DARK: 'apple-pay--dark', LIGHT: 'apple-pay--light' },
  na = 44,
  aa = '_shopify_y',
  qr = 6,
  ia = 'discount_code',
  We = 'https://static-na.payments-amazon.com/checkout.js',
  Se = {
    CURRENCY_CHANGE: 'wallet_currency_change',
    CAPTCHA_REQUIRED: 'wallet_captcha_required',
    NOT_ENOUGH_STOCK: 'wallet_not_enough_stock',
  },
  ee = 'VALIDATION_CUSTOM',
  jr = 'portable-wallets',
  yt = {
    BUTTON: 'accelerated-checkout-button',
    BUTTON_ON_CART: 'accelerated-checkout-button-cart',
    CONTAINER: 'accelerated-checkout-button-container',
  };
class Rt extends Error {
  constructor({ code: t, message: n }) {
    const r =
      'An unexpected error happened likely because of customizations made to HTML/JavaScript on this site '.concat(
        n
      );
    super('['.concat(t, ']: ').concat(r)),
      d(this, 'name', 'DeveloperError'),
      d(this, 'code', 'unknown'),
      (this.code = t);
  }
}
class Yt extends Error {
  constructor() {
    super(...arguments), d(this, 'name', 'SilencedError');
  }
}
class oa extends Error {
  constructor() {
    super(...arguments), d(this, 'name', 'MissingConfigError');
  }
}
const sa = [
    'Load failed',
    'Failed to fetch',
    'when attempting to fetch resource',
  ],
  la = ['Chrome-Lighthouse'],
  ke = {};
function ca(e, t) {
  if (!e.exceptions[0]) return !1;
  da(e);
  try {
    return ua(e, t);
  } catch (n) {
    const r = n;
    console.error(r);
    const a = {
      errorClass: 'UnfilterableError',
      message: 'Could not properly filter error with message: '.concat(
        r.message
      ),
      stacktrace: zr(jr, r),
    };
    return e.exceptions.unshift(a), !0;
  }
}
function da(e) {
  var t, n;
  (e.context = window.location.pathname),
    e.request || (e.request = {}),
    (e.request.url = window.location.href),
    (e.device.orientation =
      (n = (t = window.screen) == null ? void 0 : t.orientation) == null
        ? void 0
        : n.type),
    (e.metaData = _(_({}, ke), e.metaData));
  const r = e.exceptions[0].stacktrace[0];
  r && !r.inProject && e.unhandled && (e.severity = 'warning');
}
function ua(e, t) {
  var n, r, a, i;
  if (la.some((s) => navigator.userAgent.includes(s))) return !1;
  const o = e.exceptions[0];
  return sa.some((s) => {
    var l, c;
    return (c = (l = o.message) == null ? void 0 : l.includes(s)) != null
      ? c
      : !1;
  })
    ? !1
    : t instanceof Rt
    ? (console.error(t), !1)
    : o.errorClass === Yt.name ||
      ((n = o.message) != null && n.includes('Component closed')) ||
      o.stacktrace.some((s) => {
        var l;
        return (l = s.file) == null ? void 0 : l.includes('spin.dev');
      }) ||
      (o.errorClass === 'OpenTelemetryClientError' &&
        (((r = o.message) != null &&
          r.match(/Server responded with ([45]\d\d|undefined)/)) ||
          ((a = o.message) != null &&
            a.includes('error found in #10 byte')))) ||
      ((i = o.message) != null &&
        i.includes('GraphQL mutation failed with status 404'))
    ? !1
    : o.stacktrace.some((s) => !!(s != null && s.inProject));
}
var Hr;
const ha = {
    apiKey: 'cb577dc231be1c7494db8a63441ef66b',
    appId: jr,
    appVersion: '0.0.0-cc4f81c35048344ad110b803f8f317fa219b394a',
    releaseStage: 'production',
    locale: 'en',
    userAgent: navigator.userAgent,
    metadata: { user: { id: (Hr = Vt(aa)) != null ? Hr : 'unknown' } },
    onError: ca,
  },
  b = new Zn(ha);
function Ye(e) {
  for (const [t, n] of Object.entries(e)) ke[t] = _(_({}, ke[t]), n);
}
var pa = {
  en: {
    express_checkout: 'Express checkout',
    instruments_copy: { checkout: { buy_now: 'Buy it now' } },
    error_dialogs: {
      checkout: {
        title: 'Transaction failed',
        generic_error:
          'Checkout is currently unavailable due to technical problems. Please try again in a few minutes.',
        button_text: 'Close',
      },
      product: { out_of_stock: 'This item is no longer available.' },
      wallet: {
        title: '%{wallet} unavailable',
        generic_error:
          'There was an issue with %{wallet}. Try again or use a different payment method.',
        buy_with_prime: {
          empty_line_items: {
            title: 'Buy with Prime no longer available',
            content:
              'Items that were eligible for Buy with Prime are no longer in your cart.',
          },
        },
      },
    },
    more_payment_options: 'More payment options',
    action: { view: 'View %{content}' },
    subscriptions: {
      cancellation_policy: 'Cancellation policy',
      policy_not_found:
        'The subscription policy could not be found. Refresh the page or contact us for more information.',
    },
    shipping_methods: {
      connect_shipping_methods: '%{methodOne} and %{methodTwo}',
      choose_delivery_strategy: 'Choose a delivery method',
    },
    order_summary: {
      total: 'Total',
      subtotal: 'Subtotal',
      duties: 'Duties',
      taxes: 'Taxes',
      shipping: 'Shipping',
      shipping_one_time_purchase: 'Shipping (One-time purchase)',
      shipping_subscription: 'Shipping (Subscription)',
      discount: 'Discount',
      subscriptions: {
        recurring_total_tooltip_line:
          'Does not include shipping, tax, duties, or any applicable discounts',
        recurring_totals: '%{fixedPrice} every %{interval}',
        recurring_totals_with_policies: {
          one: 'First payment %{fixedPrice}, then %{recurringPrice} every %{interval}',
          other:
            'First %{count} payments %{fixedPrice} each, then %{recurringPrice} every %{interval}',
        },
        recurring_total_intervals: {
          day: { one: 'day', other: '%{count} days' },
          month: { one: 'month', other: '%{count} months' },
          week: { one: 'week', other: '%{count} weeks' },
          year: { one: 'year', other: '%{count} years' },
        },
      },
    },
    brand: {
      amazon_pay: 'Amazon Pay',
      apple_pay: 'Apple Pay',
      buy_with_prime: 'Buy with Prime',
      paypal: 'PayPal',
      google_pay: 'Google Pay',
      shop_pay: 'Shop Pay',
    },
    buy_with_button_content: 'Buy with %{wallet}',
    shop_promise_delivery: {
      same_day: 'Same-day delivery',
      next_day: 'Next-day delivery',
      two_day: '2-day delivery',
    },
    errors: {
      address_unserviceable:
        '%{shopName} does not currently deliver to this address. Use a different address to complete your purchase.',
      missing: {
        email: 'Enter an email address',
        first_name: 'Enter a first name',
        last_name: 'Enter a last name',
        address1: 'Enter an address',
        address2: 'Enter an apartment, suite, etc.',
        city: 'Enter a city',
        zone: 'Select a state / province',
        phone: 'Enter a phone number',
        postal_code: 'Enter a ZIP / postal code',
        shipping_option: 'Select a shipping method',
      },
      invalid: {
        email: 'Enter a valid email',
        first_name: 'Enter a valid first name',
        last_name: 'Enter a valid last name',
        address1: 'Enter a valid address',
        address2: 'Enter a valid apartment, suite, etc.',
        city: 'Enter a valid city',
        zone: 'Select a valid state / province',
        country: 'Select a country / region',
        phone: 'Enter a valid phone number',
        postal_code: 'Enter a valid zip / postal code',
        billing_address: 'Invalid billing address',
        shipping_address: 'Invalid shipping address',
        payment_method: 'Invalid payment method',
      },
      emojis: {
        first_name: 'First name cannot contain emojis',
        last_name: 'Last name cannot contain emojis',
        city: 'City cannot contain emojis',
        address1: 'Address line cannot contain emojis',
        address2: 'Second address line cannot contain emojis',
        postal_code: 'Postal code/zip cannot contain emojis',
      },
      too_long: {
        address1: 'Address line is too long',
        address2: 'Second address line is too long',
        first_name: 'First name is too long',
        last_name: 'Last name is too long',
        city: 'City is too long',
      },
      url: {
        first_name: 'First name cannot contain a URL',
        last_name: 'Last name cannot contain a URL',
      },
      html_tags: {
        first_name: 'First name cannot contain HTML tags',
        last_name: 'Last name cannot contain HTML tags',
        city: 'City cannot contain HTML tags',
        address1: 'Address line cannot contain HTML tags',
        address2: 'Second address line cannot contain HTML tags',
      },
      currency: {
        mismatch:
          'Your cart and currency has been updated based on your shipping country.',
      },
    },
  },
};
let Ce;
class pr extends Error {
  constructor(t, n) {
    const r = "i18n: Missing or invalid translation '"
      .concat(t, "' in '")
      .concat(n, "'");
    super(r);
  }
}
class ma extends Error {
  constructor(t, n, r) {
    const a = "i18n: Missing translation template key '"
      .concat(t, "' for '")
      .concat(n, "' in '")
      .concat(r, "'");
    super(a);
  }
}
class ya extends Error {
  constructor(t, n, r) {
    const a = "i18n: Invalid pluralization for '"
      .concat(t, "':'")
      .concat(n, "' in '")
      .concat(r, "'");
    super(a);
  }
}
function ce() {
  return Ce == null && (Ce = ga(pa)), Ce;
}
function ga(e) {
  const t = (i, o) => typeof i != 'string' && o.count !== 'undefined',
    n = (i, o) => {
      let s = o === 1 ? 'one' : 'other';
      return (
        o === 0 &&
          typeof i != 'string' &&
          i.zero !== 'undefined' &&
          (s = 'zero'),
        s
      );
    },
    r = (i, o = {}) => {
      const s = i.match(/%\{.+?\}/g);
      return s
        ? s.reduce((l, c) => {
            const h = c.replace(/%\{(.*)\}/, '$1');
            return o[h] ? l.replace(c, o[h]) : (b.notify(new ma(h, i, a)), l);
          }, i)
        : i;
    },
    a = fa();
  return {
    locale: a,
    translate(i, o = {}) {
      var s;
      const l = i.split('.');
      let c = e[a];
      try {
        for (const h of l)
          switch (typeof c) {
            case 'object':
              c = c[h];
              break;
            case 'string':
            case 'undefined':
              throw new pr(i, a);
          }
        if (t(c, o)) {
          if (typeof c == 'string') throw new ya(i, c, a);
          c = c[n(c, o.count)];
        }
        if (typeof c != 'string') throw new pr(i, a);
        return r(c, o);
      } catch (h) {
        return b.notify(h), (s = o.defaultValue) != null ? s : i;
      }
    },
  };
}
function fa() {
  return 'en';
}
var g = ((e) => (
    (e.BuyItNow = 'BuyItNow'),
    (e.MoreOptions = 'MoreOptions'),
    (e.ApplePay = 'ApplePay'),
    (e.PayPal = 'PayPal'),
    (e.Venmo = 'Venmo'),
    (e.GooglePay = 'GooglePay'),
    (e.ShopPay = 'ShopPay'),
    (e.MetaPay = 'FacebookPay'),
    (e.BuyWithPrime = 'BuyWithPrime'),
    (e.AmazonPay = 'AmazonPay'),
    (e.Unknown = 'Unknown'),
    e
  ))(g || {}),
  C = ((e) => (
    (e.CartPage = 'cart_page'),
    (e.CartAjax = 'cart_ajax'),
    (e.ProductPage = 'product'),
    (e.Checkout = 'checkout'),
    (e.Unknown = 'unknown'),
    e
  ))(C || {}),
  Ut = ((e) => (
    (e.CartChange = '/cart/change'),
    (e.CartUpdate = '/cart/update'),
    (e.CartAdd = '/cart/add'),
    (e.CartClear = '/cart/clear'),
    e
  ))(Ut || {}),
  zt = ((e) => (
    (e.OneTimePurchase = 'ONE_TIME_PURCHASE'),
    (e.Subscription = 'SUBSCRIPTION'),
    e
  ))(zt || {});
function ba(e) {
  const t = document.querySelectorAll(
      'shopify-accelerated-checkout .shopify-payment-button__skeleton, shopify-accelerated-checkout-cart .wallet-cart-button__skeleton'
    ),
    n = document.getElementById('shopify-buyer-consent');
  for (let r = 0; r < t.length; r++) t[r].remove();
  n && n.remove();
}
function Wr(e) {
  !(e instanceof ErrorEvent) ||
    !(typeof e.message == 'string' && e.message.includes('import.meta')) ||
    !(
      typeof e.filename == 'string' && e.filename.includes('portable-wallets')
    ) ||
    (window.removeEventListener('error', Wr),
    (window.Shopify.PaymentButton.failedToLoad = e),
    document.readyState === 'loading'
      ? document.addEventListener(
          'DOMContentLoaded',
          window.Shopify.PaymentButton.init
        )
      : window.Shopify.PaymentButton.init());
}
window.addEventListener('error', Wr);
function v(e, t) {
  if (!{}.hasOwnProperty.call(e, t))
    throw new TypeError('attempted to use private field on non-instance');
  return e;
}
var wa = 0;
function gt(e) {
  return '__private_' + wa++ + '_' + e;
}
function de(e) {
  return Object.entries(e).map(([t, n]) => ({
    key: t,
    value: { stringValue: String(n) },
  }));
}
function _a(e) {
  return Object.entries(e).map(([t, n]) => ({ key: t, value: Aa(n) }));
}
function Aa(e) {
  switch (typeof e) {
    case 'boolean':
      return { boolValue: !!e };
    case 'number':
      return Number.isInteger(e)
        ? { intValue: Number(e) }
        : { doubleValue: Number(e) };
    case 'string':
    default:
      return { stringValue: String(e) };
  }
}
const Ke = 1,
  Sa = Ca(5, 2, 12);
function Ca(e, t, n) {
  const r = [0];
  for (let a = 0; a < n; a++) {
    const i = Math.floor(e * t ** a);
    r.push(i);
  }
  return r;
}
var ot = gt('exporter'),
  H = gt('attributes'),
  F = gt('metrics'),
  st = gt('logs');
class Ea {
  constructor({ exporter: t, attributes: n }) {
    Object.defineProperty(this, ot, { writable: !0, value: void 0 }),
      Object.defineProperty(this, H, { writable: !0, value: void 0 }),
      Object.defineProperty(this, F, { writable: !0, value: [] }),
      Object.defineProperty(this, st, { writable: !0, value: [] }),
      (v(this, ot)[ot] = t),
      (v(this, H)[H] = n != null ? n : {});
  }
  addAttributes(t) {
    v(this, H)[H] = _(_({}, v(this, H)[H]), t);
  }
  histogram({
    name: t,
    value: n,
    unit: r,
    bounds: a,
    attributes: i,
    scale: o,
  }) {
    const s = Date.now() * 1e6;
    a
      ? v(this, F)[F].push({
          name: t,
          type: 'histogram',
          value: n,
          unit: r,
          timeUnixNano: s,
          attributes: i,
          bounds: a,
        })
      : v(this, F)[F].push({
          name: t,
          type: 'exponential_histogram',
          value: n,
          unit: r,
          timeUnixNano: s,
          attributes: i,
          scale: o,
        });
  }
  counter({ name: t, value: n, unit: r, attributes: a }) {
    const i = Date.now() * 1e6;
    v(this, F)[F].push({
      name: t,
      type: 'counter',
      value: n,
      unit: r,
      timeUnixNano: i,
      attributes: a,
    });
  }
  gauge({ name: t, value: n, unit: r, attributes: a }) {
    const i = Date.now() * 1e6;
    v(this, F)[F].push({
      name: t,
      type: 'gauge',
      value: n,
      unit: r,
      timeUnixNano: i,
      attributes: a,
    });
  }
  log({ body: t, attributes: n }) {
    const r = Date.now() * 1e6;
    v(this, st)[st].push({ timeUnixNano: r, body: t, attributes: n });
  }
  async exportMetrics() {
    const t = {};
    v(this, F)[F].forEach((r) => {
      switch (
        ((r.attributes = _(_({}, v(this, H)[H]), r.attributes)), r.type)
      ) {
        case 'histogram':
          va(t, r);
          break;
        case 'exponential_histogram':
          Ia(t, r);
          break;
        case 'counter':
          Pa(t, r);
          break;
        case 'gauge':
          Da(t, r);
          break;
      }
    });
    const n = Object.values(t);
    n.length !== 0 &&
      ((v(this, F)[F] = []), await v(this, ot)[ot].exportMetrics(n));
  }
  async exportLogs() {
    const t = v(this, st)[st].map((n) => {
      const r = {
        timeUnixNano: n.timeUnixNano,
        observedTimeUnixNano: n.timeUnixNano,
        attributes: _a(_(_({}, v(this, H)[H]), n.attributes)),
      };
      return n.body && (r.body = { stringValue: n.body }), r;
    });
    t.length !== 0 &&
      ((v(this, st)[st] = []), await v(this, ot)[ot].exportLogs(t));
  }
}
function va(e, t) {
  var n;
  const { name: r, value: a, unit: i, timeUnixNano: o, attributes: s } = t,
    l = (n = t.bounds) !== null && n !== void 0 ? n : Sa,
    c = new Array(l.length + 1).fill(0);
  e[r] ||
    (e[r] = {
      name: r,
      unit: i || '1',
      histogram: { aggregationTemporality: Ke, dataPoints: [] },
    });
  for (let h = 0; h < c.length; h++) {
    const p = l[h];
    if (p === void 0) c[h] = 1;
    else if (a <= p) {
      c[h] = 1;
      break;
    }
  }
  e[r].histogram.dataPoints.push({
    startTimeUnixNano: o,
    timeUnixNano: o,
    count: 1,
    sum: a,
    min: a,
    max: a,
    bucketCounts: c,
    explicitBounds: l,
    attributes: de(s != null ? s : {}),
  });
}
function Ia(e, t) {
  const {
    name: n,
    value: r,
    unit: a,
    timeUnixNano: i,
    attributes: o,
    scale: s,
  } = t;
  e[n] ||
    (e[n] = {
      name: n,
      unit: a || '1',
      exponentialHistogram: { aggregationTemporality: Ke, dataPoints: [] },
    });
  const l = r <= 0 ? 0 : r,
    c = s || 3,
    h = 2 ** c / Math.log(2),
    p = Math.ceil(Math.log(r) * h) - 1,
    m = r <= 0 ? 1 : 0,
    y = { offset: 0, bucketCounts: [] },
    A = { offset: r > 0 ? p : 0, bucketCounts: r > 0 ? [1] : [] };
  e[n].exponentialHistogram.dataPoints.push({
    attributes: de(o != null ? o : {}),
    startTimeUnixNano: i,
    timeUnixNano: i,
    count: 1,
    sum: l,
    scale: c,
    zeroCount: m,
    positive: A,
    negative: y,
    min: l,
    max: l,
    zeroThreshold: 0,
  });
}
function Pa(e, t) {
  const { name: n, value: r, unit: a, timeUnixNano: i, attributes: o } = t;
  e[n] ||
    (e[n] = {
      name: n,
      unit: a || '1',
      sum: { aggregationTemporality: Ke, isMonotonic: !0, dataPoints: [] },
    }),
    e[n].sum.dataPoints.push({
      startTimeUnixNano: i,
      timeUnixNano: i,
      asDouble: r,
      attributes: de(o != null ? o : {}),
    });
}
function Da(e, t) {
  const { name: n, value: r, unit: a, timeUnixNano: i, attributes: o } = t;
  e[n] || (e[n] = { name: n, unit: a || '1', gauge: { dataPoints: [] } }),
    e[n].gauge.dataPoints.push({
      startTimeUnixNano: i,
      timeUnixNano: i,
      asDouble: r,
      attributes: de(o != null ? o : {}),
    });
}
var xt = gt('url'),
  lt = gt('serviceName'),
  Mt = gt('logger');
class Na {
  constructor(t, n, r) {
    Object.defineProperty(this, xt, { writable: !0, value: void 0 }),
      Object.defineProperty(this, lt, { writable: !0, value: void 0 }),
      Object.defineProperty(this, Mt, { writable: !0, value: void 0 }),
      (v(this, xt)[xt] = t.replace(/\/v1\/(logs|metrics|traces)\/?$/, '')),
      (v(this, lt)[lt] = n),
      (v(this, Mt)[Mt] = r == null ? void 0 : r.logger);
  }
  async exportMetrics(t) {
    const n = {
      resourceMetrics: [
        {
          resource: {
            attributes: [
              { key: 'service.name', value: { stringValue: v(this, lt)[lt] } },
            ],
          },
          scopeMetrics: [
            {
              scope: {
                name: 'open-telemetry-mini-client',
                version: '1.1.0',
                attributes: [],
              },
              metrics: t,
            },
          ],
        },
      ],
    };
    await this.exportTo(n, '/v1/metrics');
  }
  async exportLogs(t) {
    const n = {
      resourceLogs: [
        {
          resource: {
            attributes: [
              { key: 'service.name', value: { stringValue: v(this, lt)[lt] } },
            ],
          },
          scopeLogs: [
            {
              scope: {
                name: 'open-telemetry-mini-client',
                version: '1.1.0',
                attributes: [],
              },
              logRecords: t,
            },
          ],
        },
      ],
    };
    await this.exportTo(n, '/v1/logs');
  }
  async exportTo(t, n) {
    var r;
    const a = await fetch(''.concat(v(this, xt)[xt]).concat(n), {
      method: 'POST',
      keepalive: !0,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(t),
    });
    if (
      ((r = v(this, Mt)[Mt]) === null ||
        r === void 0 ||
        r.log({ status: a.status }),
      !a.ok)
    ) {
      if (a.status === 400) {
        const i = await a.text();
        throw new Zt('Invalid OpenTelemetry Data: '.concat(i));
      }
      if (a.status === 429 || a.status === 503) {
        const i = await a.json(),
          o = a.headers.get('Retry-After'),
          s = o ? { seconds: Number(o) } : void 0;
        throw new Zt('Server did not accept data', {
          errorData: i,
          retryAfter: s,
          body: t,
        });
      }
      throw new Zt('Server responded with '.concat(a.status));
    }
  }
}
class Zt extends Error {
  constructor(t, n) {
    super(t),
      (this.metadata = void 0),
      (this.name = 'OpenTelemetryClientError'),
      (this.metadata = n);
  }
}
const Ta = 'https://otlp-http-production.shopifysvc.com/v1/metrics',
  Ra = 'portable_wallets';
class ka {
  constructor(t) {
    this.exporter = t;
  }
  async exportMetrics(t) {
    var n;
    try {
      await this.exporter.exportMetrics(t);
    } catch (r) {
      if (r instanceof Zt) {
        const a = (n = r.metadata) == null ? void 0 : n.retryAfter;
        if (a) {
          await new Promise((i) => {
            setTimeout(() => {
              this.exportMetrics(t), i();
            }, a.seconds * 1e3);
          });
          return;
        }
      }
      throw r;
    }
  }
  async exportLogs() {}
}
const La = new Na(Ta, Ra),
  Oa = new ka(La),
  I = new Ea({ exporter: Oa }),
  Bt = [];
function tt(e, t, n) {
  if (window.customElements != null)
    try {
      const r = t;
      window.customElements.get(e) ||
        (window.customElements.define(e, r),
        n != null && n.isChildCustomElement && Bt.push(e));
    } catch (r) {
      b.notify(r), ba();
    }
}
function re() {
  const e = new URLSearchParams(window.location.search);
  return function (t) {
    return !!e.get(t);
  };
}
function xa() {
  var e, t, n, r;
  const a = (e = window.Shopify) == null ? void 0 : e.CartType;
  if (a === C.CartAjax) return C.CartAjax;
  if (a === C.CartPage) return C.CartPage;
  const i =
    (r =
      (n = (t = window.ShopifyAnalytics) == null ? void 0 : t.meta) == null
        ? void 0
        : n.page) == null
      ? void 0
      : r.pageType;
  if (i)
    switch (i.toLowerCase()) {
      case 'product':
        return C.ProductPage;
      case 'cart':
        return C.CartPage;
    }
  const o = document.querySelector('#shop-js-analytics');
  if (o)
    try {
      const s = JSON.parse(o.textContent || '{}');
      if (s.pageType)
        switch (s.pageType.toLowerCase()) {
          case 'product':
            return C.ProductPage;
          case 'cart':
            return C.CartPage;
        }
    } catch (s) {
      console.error('Error parsing JSON script tag:', s);
    }
  return C.Unknown;
}
function pt(e) {
  return Number(e).toFixed(2);
}
function ue(e) {
  if (!(!e || !e.id || !e.id.includes('gid://shopify/Cart/')))
    return e.id.replace('gid://shopify/Cart/', '').split('?')[0];
}
function J() {
  let e;
  return [new Promise((t) => (e = t)), e];
}
const Ma = {
  force_shop_pay_product: 'direct_checkout_product',
  force_shop_pay_cart: 'direct_checkout_cart',
};
function ft(e, t = 'no_redirect_for_checkout') {
  I.exportMetrics();
  const n = new URL(e);
  switch (t) {
    case 'skip_shop_pay':
      n.searchParams.set('skip_shop_pay', 'true');
      break;
    case 'no_redirect_for_checkout':
      n.searchParams.set('storefront_wallet', 'true');
      break;
    case 'force_shop_pay_cart':
    case 'force_shop_pay_product':
    case 'force_shop_pay': {
      n.searchParams.set('payment', 'shop_pay');
      const r = Ma[t];
      r && n.searchParams.set('redirect_source', r);
      break;
    }
  }
  window.location.assign(n.toString());
}
function Yr() {
  return !!document.querySelector(
    '[data-source-attribution="shopify.shop-promise-pdp"]'
  );
}
function $t() {
  return new Date().getTime();
}
function Qe(e) {
  return e.find(
    (t) => typeof t == 'object' && (t == null ? void 0 : t.code) === ee
  );
}
class Fa extends HTMLElement {
  constructor() {
    super(),
      d(this, 'overflow'),
      d(this, 'formerFocus'),
      this.attachShadow({ mode: 'open' }),
      (this.overflow = ''),
      (this.formerFocus = document.activeElement);
  }
  connectedCallback() {
    const t = ce();
    this.render(t);
    const n = this.shadowRoot,
      r = n.getElementById('modal');
    n.querySelectorAll('button').forEach((o) =>
      o.addEventListener('click', this.closeModal.bind(this))
    );
    const a = n.getElementById('overlay');
    a == null ||
      a.addEventListener('click', (o) => this.handleOutsideClick(o, r)),
      document.addEventListener('keydown', this.handleEscapeKey.bind(this));
    const i = document.createElement('style');
    (i.textContent = Yn),
      n.appendChild(i),
      (this.overflow = document.body.style.overflow),
      (document.body.style.overflow = 'hidden'),
      this.trapFocus(r, n),
      tt('svg-icon', Wn);
  }
  trapFocus(t, n) {
    if (!t) return;
    const r = t.querySelectorAll('a[href], button'),
      a = Array.from(r),
      i = a[0],
      o = a[a.length - 1];
    t.addEventListener('keydown', (s) => {
      s.key === 'Tab' &&
        !s.shiftKey &&
        n.activeElement === o &&
        (s.preventDefault(), i.focus()),
        s.key === 'Tab' &&
          s.shiftKey &&
          n.activeElement === i &&
          (s.preventDefault(), o.focus());
    }),
      i.focus();
  }
  handleOutsideClick(t, n) {
    n && (n.contains(t.target) || this.closeModal());
  }
  handleEscapeKey(t) {
    t.key === 'Escape' && this.closeModal();
  }
  closeModal() {
    var t;
    (document.body.style.overflow = this.overflow),
      this.remove(),
      this.formerFocus &&
        'focus' in (this == null ? void 0 : this.formerFocus) &&
        typeof this.formerFocus.focus == 'function' &&
        ((t = this.formerFocus) == null || t.focus());
  }
  render(t) {
    const n = this.getAttribute('title'),
      r = this.getAttribute('has-close-button'),
      a = t.translate('error_dialogs.checkout.button_text'),
      i =
        '\n      <footer>\n        <button type="button" id="close-button" tabindex="0">'.concat(
          a,
          '</button>\n      </footer>\n    '
        );
    this.shadowRoot.innerHTML =
      '\n      <div id="overlay">\n        <div id="modal" role="dialog" aria-modal="true" aria-labelledby="title">\n          <header>\n            <h2 id="title">\n              <span class="capitalize">'
        .concat(
          n,
          '</span>\n            </h2>\n            <button type="button" id="close-icon" aria-label='
        )
        .concat(
          a,
          ' tabindex="0">\n              <svg-icon color="gray"></svg-icon>\n            </button>\n          </header>\n          <div id="content">\n            <p><slot></slot></p>\n          </div>\n          '
        )
        .concat(r ? i : '', '\n        </div>\n      </div>\n    ');
  }
}
const Ua =
  '@keyframes topLevelModalLoadingSkeleton{50%{opacity:1}75%{opacity:.5}to{opacity:1}}top-level-modal .text-skeleton{display:inline-block;width:100%;height:14px;margin-bottom:7px;animation:topLevelModalLoadingSkeleton 4s ease infinite;animation-delay:-.168s;text-decoration:none!important;background-color:#dedede}top-level-modal .text-skeleton:last-of-type{width:50%}';
function he({ type: e = 'button', label: t = void 0 } = {}) {
  const n = document.createElement('button');
  return (n.type = e), t && n.setAttribute('aria-label', t), n;
}
function pe(e, t) {
  for (const [n, r] of Object.entries(t)) e.setAttribute(n, r);
}
function mr(e, t) {
  for (const [n, r] of Object.entries(t)) e.style.setProperty(n, r);
}
function et(e, t) {
  const n = document.createElement('top-level-modal');
  (n.textContent = t),
    pe(n, {
      'data-testid': 'top-level-modal',
      'has-close-button': 'true',
      title: e,
    }),
    document.body.appendChild(n);
}
function Je(e, t, n) {
  const r = document.createElement('top-level-modal');
  pe(r, { 'data-testid': 'top-level-modal', title: e }),
    t instanceof Promise
      ? ((r.innerHTML = '\n      <style>'.concat(
          Ua,
          '</style>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n    '
        )),
        t
          .then((a) => {
            a && a !== ''
              ? (r.innerHTML = a)
              : (r.innerHTML = n != null ? n : '');
          })
          .catch(() => {
            r.innerHTML = n != null ? n : '';
          }))
      : (r.innerHTML = t),
    document.body.appendChild(r);
}
function rt(e) {
  et(
    e.translate('error_dialogs.checkout.title'),
    e.translate('error_dialogs.product.out_of_stock')
  );
}
function K(e, t) {
  et(
    t.translate('error_dialogs.wallet.title', { wallet: e }),
    t.translate('error_dialogs.wallet.generic_error', { wallet: e })
  );
}
function bt(e, t) {
  et(e.translate('error_dialogs.checkout.title'), t);
}
tt('top-level-modal', Fa);
class me extends HTMLElement {
  get buyerCountry() {
    return this.getAttribute('buyer-country');
  }
  get recommendedInstrument() {
    return this.getAttribute('recommended-instrument');
  }
  get buyerCurrency() {
    const t = this.getAttribute('buyer-currency');
    if (t == null) throw new Error('WalletElement buyer-currency is null');
    return t;
  }
  get accessToken() {
    return this.getAttribute('access-token');
  }
  get disabled() {
    return this.hasAttribute('disabled');
  }
  set disabled(t) {
    t ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
  }
  get hasSellingPlan() {
    const t = this.getAttribute('has-selling-plan');
    return t === 'true' || t === '';
  }
  set hasSellingPlan(t) {
    t
      ? this.setAttribute('has-selling-plan', '')
      : this.removeAttribute('has-selling-plan');
  }
  get isShippingRequired() {
    const t = this.getAttribute('requires-shipping');
    return t === 'true' || t === '';
  }
  set isShippingRequired(t) {
    t
      ? this.setAttribute('requires-shipping', '')
      : this.removeAttribute('requires-shipping');
  }
}
const Ba = '#more-payment-options-link{cursor:pointer}',
  $a = 'https://monorail-edge.shopifysvc.com',
  Ha = '/v1/produce';
function Ga() {
  if (typeof crypto < 'u' && crypto && typeof crypto.randomUUID == 'function')
    return crypto.randomUUID();
  const e = new Array(36);
  for (let t = 0; t < 36; t++) e[t] = Math.floor(Math.random() * 16);
  return (
    (e[14] = 4),
    (e[19] = e[19] &= -5),
    (e[19] = e[19] |= 8),
    (e[8] = e[13] = e[18] = e[23] = '-'),
    e.map((t) => t.toString(16)).join('')
  );
}
function Va(e) {
  const t = {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Monorail-Edge-Event-Created-At-Ms': (
      (e && e.eventCreatedAtMs) ||
      Date.now()
    ).toString(),
    'X-Monorail-Edge-Event-Sent-At-Ms': Date.now().toString(),
    'X-Monorail-Edge-Client-Message-Id': (
      (e && e.clientMessageId) ||
      Ga()
    ).toString(),
  };
  return (
    e && e.userAgent && (t['User-Agent'] = e.userAgent),
    e && e.remoteIp && (t['X-Forwarded-For'] = e.remoteIp),
    t
  );
}
async function za({ endpoint: e, event: t, keepalive: n }) {
  return fetch(e != null ? e : $a + Ha, {
    method: 'post',
    headers: Va(t.metadata),
    body: JSON.stringify({ schema_id: t.schemaId, payload: t.payload }),
    keepalive: n,
  });
}
var k = ((e) => (
    (e.Decelerated = 'portable_wallets_decelerated'),
    (e.InitCompleted = 'portable_wallets_init_completed'),
    (e.InstrumentLoadEligibility =
      'portable_wallets_instrument_load_eligibility'),
    (e.InstrumentLoadTime = 'portable_wallets_instrument_load_time'),
    (e.InstrumentLoadTimeFromPageLoad =
      'portable_wallets_instrument_load_time_from_page_load'),
    (e.MonorailProduceError = 'portable_wallets_monorail_produce_error'),
    (e.SheetClicked = 'portable_wallets_sheet_clicked'),
    (e.SheetCancelled = 'portable_wallets_sheet_cancelled'),
    (e.SheetFailed = 'portable_wallets_sheet_failed'),
    (e.AuthorizationAttempt = 'portable_wallets_authorization_attempt'),
    (e.AuthorizationComplete = 'portable_wallets_authorization_complete'),
    (e.CartTokenMissing = 'portable_wallets_cart_token_missing'),
    (e.GooglePayNotEligibleWebview =
      'portable_wallets_google_pay_not_eligible_webview'),
    (e.WalletConfigDeveloperError =
      'portable_wallets_wallet_config_developer_error'),
    (e.LegacyCartCookie = 'portable_wallets_legacy_cart_cookie'),
    e
  ))(k || {}),
  mt = ((e) => (
    (e.InstrumentSdkLoaded = 'portable_wallets_instrument_sdk_loaded'),
    (e.InstrumentSdkFailed = 'portable_wallets_instrument_sdk_failed'),
    (e.InstrumentSdkEligible = 'portable_wallets_instrument_sdk_eligible'),
    (e.InstrumentSdkNotEligible =
      'portable_wallets_instrument_sdk_not_eligible'),
    e
  ))(mt || {});
const qa = ['Chrome-Lighthouse'];
function ja() {
  const e = navigator.userAgent;
  return qa.some((t) => e.includes(t));
}
async function Wa(e) {
  if (ja()) return;
  b.leaveBreadcrumb('monorail event produced to '.concat(e.schemaId), e);
  let t;
  try {
    t = await za({ event: e });
  } catch (n) {}
  if (!(t != null && t.ok))
    try {
      I.counter({
        name: k.MonorailProduceError,
        value: 1,
        attributes: { schemaId: e.schemaId },
      });
    } catch (n) {}
}
const yr = 'shopify_wallet_checkout_track/6.2';
async function B(e) {
  var t, n, r, a, i, o, s;
  let l = null;
  try {
    const c = await Ya();
    if (
      ((l = {
        schemaId: yr,
        payload: {
          app_name: 'storefront',
          page_type: xa(),
          checkout_one: !0,
          event: e.event,
          event_subtype: e.eventSubtype,
          checkout_token: e.checkoutToken,
          instrument_id: e.instrumentId,
          ttl: e.ttl,
          error_reason: e.errorReason,
          uniq_token: (t = c == null ? void 0 : c.uniqToken) != null ? t : '',
          visit_token: (n = c == null ? void 0 : c.visitToken) != null ? n : '',
          micro_session_id:
            (r = c == null ? void 0 : c.microSessionId) != null ? r : '',
          micro_session_count:
            (a = c == null ? void 0 : c.microSessionCount) != null ? a : 0,
          shop_id: (i = c == null ? void 0 : c.shopId) != null ? i : 0,
          theme_id: c == null ? void 0 : c.themeId,
          theme_city_hash:
            (o = c == null ? void 0 : c.themeCityHash) != null ? o : '',
          content_language:
            (s = c == null ? void 0 : c.contentLanguage) != null ? s : '',
          referer: c == null ? void 0 : c.referer,
        },
      }),
      !(e != null && e.event))
    ) {
      b.notify(new Error('Event is required'), {
        metadata: {
          request: { monorail: { schemaId: yr, payload: JSON.stringify(l) } },
        },
      });
      return;
    }
    await Wa(l);
  } catch (c) {
    b.notify(new Error('Failed to send monorail event: '.concat(c)), {
      metadata: {
        request: { monorail: { payload: JSON.stringify(l != null ? l : e) } },
      },
    });
  }
}
async function Ya() {
  var e, t, n, r, a;
  return (
    ((t =
      (e = window == null ? void 0 : window.ShopifyAnalytics) == null
        ? void 0
        : e.lib) != null &&
      t.trekkie) ||
      (await new Promise((i) => {
        const o = setInterval(() => {
            var l, c;
            (c =
              (l = window == null ? void 0 : window.ShopifyAnalytics) == null
                ? void 0
                : l.lib) != null &&
              c.trekkie &&
              (clearInterval(o), i());
          }, 100),
          s = setTimeout(() => {
            clearInterval(o), clearTimeout(s), i();
          }, 7e3);
      })),
    (a =
      (r = (n = window.ShopifyAnalytics) == null ? void 0 : n.lib) == null
        ? void 0
        : r.trekkie) == null
      ? void 0
      : a.defaultAttributes
  );
}
var x = ((e) => (
  (e.CartInitCalled = 'portable_wallets_cart_init_called'),
  (e.ClickSheetCancelled = 'portable_wallets_instrument_click_sheet_cancelled'),
  (e.ClickSheetFailed = 'portable_wallets_instrument_click_sheet_failure'),
  (e.ClickSheetSuccess = 'portable_wallets_instrument_click_sheet_success'),
  (e.SheetFailed = 'portable_wallets_instrument_sheet_failed'),
  (e.AuthorizationAttempt = 'portable_wallets_authorization_attempt'),
  (e.AuthorizationComplete = 'portable_wallets_authorization_complete'),
  (e.InitCalled = 'portable_wallets_init_called'),
  (e.InitFailed = 'portable_wallets_init_failed'),
  (e.InitSuccess = 'portable_wallets_init_success'),
  (e.UpdateFailed = 'portable_wallets_instrument_update_failed'),
  (e.InstrumentLoaded = 'portable_wallets_instrument_loaded'),
  (e.InstrumentLoadFailed = 'portable_wallets_instrument_load_failed'),
  e
))(x || {});
const gr = {
  [C.Checkout]: 'bwp_checkout_widget_click',
  [C.CartAjax]: 'bwp_cart_widget_click',
  [C.CartPage]: 'bwp_cart_widget_click',
  [C.ProductPage]: 'bwp_widget_click',
  [C.Unknown]: 'bwp_widget_click',
};
function Ka({ apiClientId: e, skus: t, pageType: n }) {
  var r;
  if (!((r = window.Shopify) != null && r.analytics)) return;
  const a = (n && gr[n]) || 'bwp_widget_click';
  a === gr[C.Checkout] &&
    window.Shopify.analytics.publish(
      'shopify:app:pixels:load:'.concat(e),
      {},
      { sendTo: 'PIXEL-LOADER' }
    ),
    window.Shopify.analytics.publish(a, { skus: t }, { sendTo: e });
}
function Qa() {
  B({ event: x.InitCalled });
}
function Ja(e) {
  var t, n;
  const r = 'error' in e ? 'failed' : e.result,
    a =
      'error' in e && pi(e.error)
        ? '['.concat(e.error.name, ']: ').concat(e.error.code)
        : ('eventType' in e && e.eventType) || void 0;
  B({ event: r === 'success' ? x.InitSuccess : x.InitFailed, eventSubtype: a }),
    I.counter({
      name: k.InitCompleted,
      value: 1,
      attributes: {
        result: r,
        eventType: a,
        recoveredFailure: !!(
          (n = (t = window.Shopify) == null ? void 0 : t.PaymentButton) !=
            null && n.failedToLoad
        ),
      },
    });
}
function Xa({ instrumentOrComponentName: e, result: t, measurement: n }) {
  B({
    event: t === 'success' ? x.InstrumentLoaded : x.InstrumentLoadFailed,
    instrumentId: e,
    ttl: n,
  }),
    n != null &&
      (I.histogram({
        name: k.InstrumentLoadTime,
        value: n,
        attributes: { instrument: e },
        unit: 'ms',
      }),
      I.histogram({
        name: k.InstrumentLoadTimeFromPageLoad,
        value: window.performance.now(),
        attributes: { instrument: e },
        unit: 'ms',
      }));
}
function Za({ instrument: e, measurement: t, result: n }) {
  const r = n === 'success' ? mt.InstrumentSdkLoaded : mt.InstrumentSdkFailed;
  B({
    event: r,
    instrumentId: e,
    ttl: t,
    errorReason: n === 'success' ? void 0 : n,
  }),
    t != null &&
      I.histogram({
        name: mt.InstrumentSdkLoaded,
        value: t,
        attributes: { instrument: e, result: n },
        unit: 'ms',
      });
}
function ti({ instrument: e, result: t, reason: n }) {
  const r =
    t === 'success' ? mt.InstrumentSdkEligible : mt.InstrumentSdkNotEligible;
  B({ event: r, instrumentId: e }),
    I.counter({
      name: mt.InstrumentSdkEligible,
      value: 1,
      attributes: { instrument: e, reason: n, result: t },
    });
}
function ei({ instrument: e, result: t, reason: n }) {
  I.counter({
    name: k.InstrumentLoadEligibility,
    value: 1,
    attributes: { instrument: e, result: t, reason: n },
  });
}
function ri({
  instrument: e,
  result: t,
  checkoutToken: n,
  webPixelMetaData: r,
}) {
  B({
    event: t === 'success' ? x.ClickSheetSuccess : x.ClickSheetFailed,
    checkoutToken: n,
    instrumentId: e,
  }),
    I.counter({
      name: k.SheetClicked,
      value: 1,
      attributes: { instrument: e, result: t },
    }),
    e === g.BuyWithPrime && r && Ka(r);
}
function ni(e, t) {
  B({ event: ''.concat(x.UpdateFailed, '-').concat(t), instrumentId: e });
}
function ai(e) {
  B({ event: x.ClickSheetCancelled, instrumentId: e }),
    I.counter({
      name: k.SheetCancelled,
      value: 1,
      attributes: { instrument: e },
    });
}
function ii(e, t) {
  B({
    event: x.SheetFailed,
    instrumentId: e,
    errorReason: t == null ? void 0 : t.message,
  }),
    I.counter({ name: k.SheetFailed, value: 1, attributes: { instrument: e } });
}
function oi(e) {
  B({ event: x.AuthorizationAttempt, instrumentId: e }),
    I.counter({
      name: k.AuthorizationAttempt,
      value: 1,
      attributes: { instrument: e },
    });
}
function si({ instrument: e, measurement: t, result: n }) {
  B({
    event: x.AuthorizationComplete,
    eventSubtype: n,
    ttl: t,
    instrumentId: e,
  }),
    t != null &&
      I.histogram({
        name: k.AuthorizationComplete,
        value: t,
        attributes: { instrument: e, result: n },
        unit: 'ms',
      });
}
function li({ instrument: e, reason: t }) {
  I.counter({
    name: k.Decelerated,
    value: 1,
    attributes: { instrument: e, reason: t },
  }),
    I.exportMetrics();
}
function ci({ reason: e }) {
  I.counter({ name: k.CartTokenMissing, value: 1, attributes: { reason: e } });
}
function di() {
  I.counter({ name: k.WalletConfigDeveloperError, value: 1 });
}
function ui() {
  I.counter({ name: k.LegacyCartCookie, value: 1 });
}
function hi() {
  window.setInterval(() => {
    I.exportMetrics();
  }, 1e3);
}
function pi(e) {
  return (e == null ? void 0 : e.name) === Rt.name;
}
const f = {
  initStarted: D(Qa),
  initCompleted: D(Ja),
  instrumentLoaded: D(Xa),
  instrumentLoadEligibility: D(ei),
  instrumentSDKLoaded: D(Za),
  instrumentSDKEligible: D(ti),
  sheetClicked: D(ri),
  sheetCancelled: D(ai),
  sheetFailed: D(ii),
  updateFailed: D(ni),
  authorizationAttempt: D(oi),
  authorizationComplete: D(si),
  startExporter: D(hi),
  decelerated: D(li),
  cartTokenMissing: D(ci),
  walletConfigDeveloperError: D(di),
  legacyCartCookie: D(ui),
};
function D(e) {
  return (...t) => {
    try {
      e(...t);
    } catch (n) {
      b.notify(n);
    }
  };
}
function nt(e) {
  const t = e === g.MetaPay ? 'MetaPay' : e,
    n = new CustomEvent('acceleratedCheckoutStarted', {
      detail: { acceleratedCheckoutName: t },
    });
  document.dispatchEvent(n);
}
function mi(e) {
  const t = (n) => {
    n.persisted && (e(), window.removeEventListener('pageshow', t));
  };
  window.addEventListener('pageshow', t);
}
var u = ((e) => (
  (e.InvalidLanguage =
    'Variable $language of type LanguageCode was provided invalid value'),
  (e.InvalidCountry =
    'Variable $country of type CountryCode was provided invalid value'),
  (e.MissingCartId = 'Variable $cartId of type ID! was provided invalid value'),
  (e.BuyerIdentityInvalidCountry =
    'Variable $buyerIdentity of type CartBuyerIdentityInput! was provided invalid value for countryCode'),
  (e.BuyerIdentityInvalidPhone = 'INVALID: buyerIdentity.phone'),
  (e.BuyerIdentityEmailRequired = 'BUYER_IDENTITY_EMAIL_REQUIRED'),
  (e.BuyerIdentityEmailDomainInvalid =
    'BUYER_IDENTITY_EMAIL_DOMAIN_IS_INVALID'),
  (e.BuyerIdentityEmailNotExpectedPattern =
    'BUYER_IDENTITY_EMAIL_DOES_NOT_MATCH_EXPECTED_PATTERN'),
  (e.BuyerIdentityEmailInvalid = 'INVALID: buyerIdentity.email'),
  (e.CaptchaCompletionRequired = 'CAPTCHA_COMPLETION_REQUIRED'),
  (e.CustomValidation = ''.concat(ee)),
  (e.DeliveryFirstNameInvalid = 'DELIVERY_FIRST_NAME_INVALID'),
  (e.DeliveryFirstNameRequired = 'DELIVERY_FIRST_NAME_REQUIRED'),
  (e.DeliveryFirstNameContainsEmojis =
    'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName'),
  (e.DeliveryFirstNameTooLong =
    'ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName'),
  (e.DeliveryFirstNameContainsUrl =
    'ADDRESS_FIELD_CONTAINS_URL: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName'),
  (e.DeliveryFirstNameContainsHtmlTags =
    'ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName'),
  (e.DeliveryLastNameInvalid = 'DELIVERY_LAST_NAME_INVALID'),
  (e.DeliveryLastNameRequired = 'DELIVERY_LAST_NAME_REQUIRED'),
  (e.DeliveryLastNameContainsEmojis =
    'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName'),
  (e.DeliveryLastNameTooLong =
    'ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName'),
  (e.DeliveryLastNameContainsUrl =
    'ADDRESS_FIELD_CONTAINS_URL: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName'),
  (e.DeliveryLastNameContainsHtmlTags =
    'ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName'),
  (e.DeliveryAddress1Required = 'DELIVERY_ADDRESS1_REQUIRED'),
  (e.DeliveryAddress1Invalid = 'DELIVERY_ADDRESS1_INVALID'),
  (e.DeliveryAddress1TooLong =
    'ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1'),
  (e.DeliveryAddress1ContainsHtmlTags =
    'ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1'),
  (e.DeliveryAddress1ContainsEmojis =
    'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1'),
  (e.DeliveryAddress2Required = 'DELIVERY_ADDRESS2_REQUIRED'),
  (e.DeliveryAddress2Invalid = 'DELIVERY_ADDRESS2_INVALID'),
  (e.DeliveryAddress2TooLong =
    'ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2'),
  (e.DeliveryAddress2ContainsHtmlTags =
    'ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2'),
  (e.DeliveryAddress2ContainsEmojis =
    'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2'),
  (e.DeliveryAddress2AddressFieldRequired =
    'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2'),
  (e.DeliveryCityRequired = 'DELIVERY_CITY_REQUIRED'),
  (e.DeliveryCityInvalid = 'DELIVERY_CITY_INVALID'),
  (e.DeliveryCityTooLong =
    'ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city'),
  (e.DeliveryCityContainsHtmlTags =
    'ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city'),
  (e.DeliveryCityContainsEmojis =
    'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city'),
  (e.DeliveryCityAddressFieldRequired =
    'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city'),
  (e.DeliveryZoneNotFound = 'DELIVERY_ZONE_NOT_FOUND'),
  (e.DeliveryZoneRequiredForCountry = 'DELIVERY_ZONE_REQUIRED_FOR_COUNTRY'),
  (e.DeliveryPostalCodeInvalid = 'DELIVERY_POSTAL_CODE_INVALID'),
  (e.DeliveryInvalidPostalCodeForZone =
    'DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE'),
  (e.DeliveryInvalidPostalCodeForCountry =
    'DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY'),
  (e.DeliveryPostalCodeRequired = 'DELIVERY_POSTAL_CODE_REQUIRED'),
  (e.DeliveryZipInvalidForCountry =
    'INVALID_ZIP_CODE_FOR_COUNTRY: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip'),
  (e.DeliveryPostalCodeContainsEmojis =
    'ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip'),
  (e.DeliveryPostalCodeAddressFieldRequired =
    'ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip'),
  (e.DeliveryCountryInvalid =
    'INVALID: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.country'),
  (e.DeliveryPhoneNumberRequired = 'DELIVERY_PHONE_NUMBER_REQUIRED'),
  (e.DeliveryOptionsPhoneNumberRequired =
    'DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED'),
  (e.DeliveryPhoneNumberInvalid = 'DELIVERY_PHONE_NUMBER_INVALID'),
  (e.DeliveryPhoneDoesNotMatchExpectedPattern =
    'ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.phone'),
  (e.MerchandiseOutOfStock = 'MERCHANDISE_OUT_OF_STOCK'),
  (e.MerchandiseNotEnoughStock = 'MERCHANDISE_NOT_ENOUGH_STOCK'),
  (e.InvalidQuantity = 'INVALID: input.lines.0.quantity'),
  (e.DeliveryOutOfStockAtOrigin = 'DELIVERY_OUT_OF_STOCK_AT_ORIGIN_LOCATION'),
  (e.DeliveryExternalPromiseUnfulfillable =
    'DELIVERY_EXTERNAL_PROMISE_UNFULFILLABLE'),
  (e.MerchandiseNotApplicable = 'MERCHANDISE_NOT_APPLICABLE'),
  (e.MerchandiseVariantNotFound = 'MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND'),
  (e.MerchandiseNotFound = 'MERCHANDISE_NOT_FOUND'),
  (e.MerchandiseNotPublished = 'MERCHANDISE_PRODUCT_NOT_PUBLISHED'),
  (e.MerchandiseNotSupportedForB2B =
    'MERCHANDISE_SELLING_PLANS_NOT_SUPPORTED_FOR_B2B'),
  (e.MerchandiseBundleRequiresComponents =
    'MERCHANDISE_BUNDLE_REQUIRES_COMPONENTS'),
  (e.MerchandiseGiftCardsNotSupported =
    'MERCHANDISE_GIFT_CARDS_COMPONENTS_NOT_SUPPORTED'),
  (e.MerchandiseGiftCardGreaterThanZero =
    'MERCHANDISE_GIFT_CARD_PRICE_MUST_BE_GREATER_THAN_ZERO'),
  (e.MerchandiseGiftCardCannotExceedLimit =
    'MERCHANDISE_GIFT_CARD_PRICE_MUST_NOT_EXCEED_LIMIT'),
  (e.UnacceptablePaymentsAmount = 'PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT'),
  (e.DeliveryNotAvailable = 'DELIVERY_NO_DELIVERY_AVAILABLE'),
  (e.DeliveryNoStrategyAvailable = 'DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE'),
  (e.DeliveryNoLocalPickupStrategyAvailable =
    'DELIVERY_LOCAL_PICKUP_NO_DELIVERY_STRATEGY_AVAILABLE'),
  (e.DeliveryLineChanged = 'DELIVERY_DELIVERY_LINE_DETAIL_CHANGED'),
  (e.DeliveryLocalPickupLineChanged =
    'DELIVERY_LOCAL_PICKUP_DELIVERY_LINE_DETAIL_CHANGED'),
  (e.DeliveryNoDeliveryAvailableForMerchandise =
    'DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE'),
  (e.DeliveryFulfillmentConstraintNotSatisfied =
    'DELIVERY_MUST_FULFILL_FROM_CONSTRAINT_NOT_SATISFIED'),
  (e.DeliveryFulfillmentLocationConstraint =
    'DELIVERY_MUST_FULFILL_FROM_SAME_LOCATION_CONSTRAINT_NOT_SATISFIED'),
  (e.NoDeliveryGroupSelected = 'NO_DELIVERY_GROUP_SELECTED'),
  (e.PendingDeliveryGroups = 'PENDING_DELIVERY_GROUPS'),
  (e.InvalidPaymentAmount = 'INVALID_PAYMENT: amount'),
  (e.InvalidPaymentPaymentAmount = 'INVALID_PAYMENT: payment.amount'),
  (e.NewTaxMustBeAccepted = 'TAX_NEW_TAX_MUST_BE_ACCEPTED'),
  (e.MerchandiseExpectedPriceMismatch = 'MERCHANDISE_EXPECTED_PRICE_MISMATCH'),
  (e.InvalidPaymentApplePayBillingAddress =
    'INVALID_PAYMENT: payment.walletPaymentMethod.applePayWalletContent.billingAddress'),
  (e.InvalidPaymentGooglePayBillingAddress =
    'INVALID_PAYMENT: payment.walletPaymentMethod.googlePayWalletContent.billingAddress'),
  (e.UnsupportedGooglePayPaymentMethod =
    'PAYMENT_METHOD_NOT_SUPPORTED: payment.walletPaymentMethod.googlePayWalletContent'),
  e
))(u || {});
const Kr = ['INVALID_PAYMENT: amount', 'INVALID_PAYMENT: payment.amount'],
  Qr = [
    'DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE',
    'DELIVERY_OUT_OF_STOCK_AT_ORIGIN_LOCATION',
    'DELIVERY_MUST_FULFILL_FROM_CONSTRAINT_NOT_SATISFIED',
    'DELIVERY_MUST_FULFILL_FROM_SAME_LOCATION_CONSTRAINT_NOT_SATISFIED',
    'DELIVERY_EXTERNAL_PROMISE_UNFULFILLABLE',
    'MERCHANDISE_OUT_OF_STOCK',
    'MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND',
    'MERCHANDISE_NOT_FOUND',
    'MERCHANDISE_PRODUCT_NOT_PUBLISHED',
    'MERCHANDISE_SELLING_PLANS_NOT_SUPPORTED_FOR_B2B',
    'MERCHANDISE_BUNDLE_REQUIRES_COMPONENTS',
    'MERCHANDISE_GIFT_CARDS_COMPONENTS_NOT_SUPPORTED',
    'MERCHANDISE_GIFT_CARD_PRICE_MUST_BE_GREATER_THAN_ZERO',
    'MERCHANDISE_GIFT_CARD_PRICE_MUST_NOT_EXCEED_LIMIT',
    'INVALID: input.lines.0.quantity',
    'MERCHANDISE_NOT_APPLICABLE',
  ],
  yi = {
    currency_changed: Se.CURRENCY_CHANGE,
    captcha_required: Se.CAPTCHA_REQUIRED,
    not_enough_stock: Se.NOT_ENOUGH_STOCK,
    out_of_stock: null,
  };
function Le(e) {
  return e.every((t) => t.quantity === 0);
}
function Xe({ currentCartTotal: e, initialBuyerCurrency: t }) {
  const n = e.amount;
  return !(
    !n ||
    Number(n) === 0 ||
    t.toUpperCase() === e.currencyCode.toUpperCase()
  );
}
function vt({ checkoutUrl: e, instrumentName: t, reason: n }) {
  if (!e) throw new Error('Invalid Checkout URL');
  const r = new URL(e),
    a = yi[n];
  a && r.searchParams.set(a, 'true'),
    f.decelerated({ instrument: t, reason: n }),
    ft(r.toString());
}
class gi extends Error {
  constructor(t) {
    super('['.concat(t.name, '] ').concat(t.message)),
      (this.stack = t.stack),
      (this.name = 'HandleCreateCartError');
  }
}
async function at({ element: e, instrumentName: t, dataSource: n }) {
  try {
    const r = await n.getInitialCart(t),
      { cart: a, errors: i, warnings: o } = r;
    mi(() => {
      e && (e.disabled = !1);
    });
    const s = Qe(i);
    if (!a && !s) throw new Error('['.concat(t, '] Failed to create cart'));
    if (a && !a.id) throw new Error('['.concat(t, '] received invalid cart'));
    if (a && !a.checkoutUrl)
      throw new Error('['.concat(t, '] Created cart with no checkout URL'));
    const l = i.length === 1 && i[0] === u.InvalidQuantity;
    if (i.length > 0 && !(l || s))
      throw new Error('Failed to create cart: '.concat(JSON.stringify(i)));
    return {
      cart: a,
      warnings: o,
      customValidationError: s,
      isOutOfStock: !!(a && l && Le(a.lineItems)),
    };
  } catch (r) {
    throw new gi(r);
  } finally {
    e.disabled = !1;
  }
}
class fi extends me {
  constructor() {
    super(),
      d(this, 'name', g.MoreOptions),
      d(this, 'anchor'),
      d(this, 'i18n'),
      d(this, 'dataSource'),
      d(this, 'classNames'),
      d(this, 'setI18n'),
      d(this, 'setDataSource'),
      d(this, 'setClassNames'),
      ([this.i18n, this.setI18n] = J()),
      ([this.dataSource, this.setDataSource] = J()),
      ([this.classNames, this.setClassNames] = J());
  }
  static get observedAttributes() {
    return ['disabled'];
  }
  connectedCallback() {
    this.anchor || this.render();
  }
  attributeChangedCallback(t, n, r) {
    n !== r &&
      t === 'disabled' &&
      this.anchor &&
      (r === ''
        ? this.anchor.setAttribute('aria-disabled', 'true')
        : this.anchor.removeAttribute('aria-disabled'),
      this.setAccessibilityAttributes());
  }
  async handleClick(t) {
    var n;
    if ((t.preventDefault(), this.disabled || !this.anchor)) return;
    this.disabled = !0;
    const [r, a] = await Promise.all([this.i18n, this.dataSource]);
    try {
      const {
        isOutOfStock: i,
        cart: o,
        customValidationError: s,
      } = await at({
        element: this,
        instrumentName: g.MoreOptions,
        dataSource: a,
      });
      if (s) {
        bt(r, s.message);
        return;
      }
      if (i) {
        rt(r);
        return;
      }
      const l =
        this.recommendedInstrument === g.ShopPay
          ? 'skip_shop_pay'
          : 'allow_redirect';
      f.sheetClicked({ instrument: g.MoreOptions, result: 'success' }),
        nt(g.MoreOptions),
        ft((n = o == null ? void 0 : o.checkoutUrl) != null ? n : '', l);
    } catch (i) {
      f.sheetClicked({ instrument: g.MoreOptions, result: 'failed' }),
        b.notify(i),
        et(
          r.translate('error_dialogs.checkout.title'),
          r.translate('error_dialogs.checkout.generic_error')
        );
    }
  }
  async render() {
    const t = await this.i18n,
      n = await this.classNames;
    (this.anchor = document.createElement('a')),
      (this.anchor.textContent = t.translate('more_payment_options')),
      (this.anchor.className = n),
      this.anchor.setAttribute('id', 'more-payment-options-link'),
      (this.anchor.onclick = (a) => this.handleClick(a)),
      this.setAccessibilityAttributes(),
      this.appendChild(this.anchor);
    const r = document.createElement('style');
    (r.textContent = Ba), this.appendChild(r);
  }
  setAccessibilityAttributes() {
    this.anchor &&
      (this.disabled
        ? (this.anchor.removeAttribute('href'), (this.anchor.role = 'link'))
        : (this.anchor.removeAttribute('role'), (this.anchor.href = '#')));
  }
}
var R = ((e) => (
  (e.ButtonDisplay = 'buttonDisplay'),
  (e.LoadInstrument = 'loadInstrument'),
  (e.LoadSdk = 'loadSDK'),
  (e.AuthorizationLatency = 'authorizationLatency'),
  e
))(R || {});
function Jr() {
  var e, t;
  return (
    !!((e = window.performance) != null && e.mark) &&
    !!((t = window.performance) != null && t.measure)
  );
}
function ye(e, t) {
  return Kt(e, t), () => Z(e, t);
}
function Kt(e, t) {
  Jr() && window.performance.mark(''.concat(e, '-').concat(t, '-start'));
}
function Z(e, t) {
  var n, r;
  if (Jr())
    try {
      const a = ''.concat(e, '-').concat(t, '-start'),
        i = ''.concat(e, '-').concat(t, '-end'),
        o = ''.concat(e, '-').concat(t, '-duration');
      window.performance.mark(i);
      const s =
          (r = window.performance.measure(o, a, i)) != null
            ? r
            : (n = window.performance.getEntriesByName(o, 'measure')) == null
            ? void 0
            : n[0],
        l = s == null ? void 0 : s.duration;
      if (l == null) {
        b.notify(
          new fr('Could not measure performance of '.concat(e, ' ').concat(t)),
          { severity: 'warning' }
        );
        return;
      }
      return l;
    } catch (a) {
      a instanceof SyntaxError ||
        b.notify(
          new fr(
            'An error occurred when attempting to measure benchmark duration '
              .concat(e, ' with context ')
              .concat(t, ': ')
              .concat(a)
          )
        );
      return;
    }
}
class fr extends Error {
  constructor() {
    super(...arguments), d(this, 'name', 'BenchmarkError');
  }
}
function Ze(e, t, n) {
  if (Bt != null && Bt.length) {
    const r = Bt.join(',');
    e.querySelectorAll(r).forEach((a) => {
      n === null ? a.removeAttribute(t) : a.setAttribute(t, n);
    });
  }
}
function bi(e, t) {
  try {
    const n = JSON.parse(e != null ? e : '[]');
    if (!(n instanceof Array))
      throw new Error('['.concat(t, '] invalid walletConfigs found'));
    return n;
  } catch (n) {
    throw new Error(
      '['.concat(t, '] Error while parsing walletConfigs JSON: ').concat(n)
    );
  }
}
function wi(e, t) {
  try {
    return e ? JSON.parse(e) : null;
  } catch (n) {
    throw new Error(
      '['.concat(t, '] Error while parsing walletConfig JSON: ').concat(n)
    );
  }
}
function tr(e) {
  var t;
  const n = e == null ? void 0 : e.getLoadEligibility();
  return (
    f.instrumentLoadEligibility({
      instrument: e == null ? void 0 : e.getInstrumentName(),
      result: n != null && n.eligible ? 'success' : 'failed',
      reason: (n != null && n.eligible) || n == null ? void 0 : n.reason,
    }),
    (t = n == null ? void 0 : n.eligible) != null ? t : !1
  );
}
function _i(e) {
  return e.filter(tr);
}
async function Oe({ walletInstrument: e, instanceNumber: t }) {
  const n = e.getInstrumentName(),
    r = ye(R.LoadSdk, ''.concat(n, ':').concat(t));
  try {
    await e.loadWalletSDK(),
      f.instrumentSDKLoaded({
        instrument: n,
        measurement: r(),
        result: 'success',
      });
  } catch (i) {
    return (
      b.notify(i),
      f.instrumentSDKLoaded({
        instrument: n,
        measurement: r(),
        result: 'failed',
      }),
      null
    );
  }
  let a;
  try {
    a = e.getPartnerSDKEligibility();
  } catch (i) {
    b.notify(i), (a = { eligible: !1, reason: 'uncaught exception' });
  }
  return a.eligible
    ? (f.instrumentSDKEligible({ instrument: n, result: 'success' }), e)
    : (f.instrumentSDKEligible({
        instrument: n,
        reason: a.reason,
        result: 'failed',
      }),
      null);
}
class er extends me {
  constructor() {
    super(...arguments),
      d(this, 'name', null),
      d(this, 'apiClient'),
      d(this, 'i18n'),
      d(this, 'policy'),
      d(this, 'isFetchingPolicy', !1);
  }
  get shopId() {
    return this.getAttribute('shop-id');
  }
  get cartId() {
    return this.getAttribute('cart-id');
  }
  get walletConfigs() {
    return this.getAttribute('wallet-configs');
  }
  get recommendedWallet() {
    return this.getAttribute('recommended');
  }
  get fallbackWallet() {
    return this.getAttribute('fallback');
  }
  get variantParams() {
    var t;
    try {
      return JSON.parse(
        (t = this.getAttribute('variant-params')) != null ? t : '[]'
      );
    } catch (n) {
      throw new Rt({
        code: 'invalid-variant-params',
        message:
          'variant-params must be a valid JSON string. Received variant-params: '
            .concat(this.getAttribute('variant-params'), ', received error: ')
            .concat(n),
      });
    }
  }
  get styleExtractorDisabled() {
    return this.hasAttribute('disable-compat');
  }
  triggerLoadedEvent() {
    document.dispatchEvent(
      new Event('shopify:payment_button:loaded', {
        bubbles: !0,
        cancelable: !0,
      })
    );
  }
  async attributeChangedCallback(t, n, r) {
    n !== r && Ze(this, t, r);
  }
  showBuyerConsent(t, n) {
    var r, a, i;
    !t ||
      !n ||
      (i =
        (a = (r = window.Shopify) == null ? void 0 : r.PaymentButton) == null
          ? void 0
          : a.showBuyerConsent) == null ||
      i.call(a, (o) => this.onClickSubscriptionPolicy(o, t, n));
  }
  hideBuyerConsent() {
    var t, n, r;
    (r =
      (n = (t = window.Shopify) == null ? void 0 : t.PaymentButton) == null
        ? void 0
        : n.hideBuyerConsent) == null || r.call(n);
  }
  clearUI() {
    this.innerHTML = '';
  }
  async onClickSubscriptionPolicy(t, n, r) {
    if ((t.preventDefault(), this.isFetchingPolicy)) return;
    if (this.policy) {
      this.showPolicy(this.policy, r);
      return;
    }
    this.isFetchingPolicy = !0;
    const a = this.fetchSubscriptionPolicy(n)
      .then((i) => ((this.policy = i), i))
      .catch(
        (i) => (b.notify(i), r.translate('subscriptions.policy_not_found'))
      )
      .finally(() => {
        this.isFetchingPolicy = !1;
      });
    this.showPolicy(a, r);
  }
  async fetchSubscriptionPolicy(t) {
    const n = await t.fetchSubscriptionPolicy();
    return (this.policy = n), n;
  }
  showPolicy(t, n) {
    Je(
      n.translate('subscriptions.cancellation_policy'),
      t,
      n.translate('subscriptions.policy_not_found')
    );
  }
}
function Xr({ type: e, form: t }) {
  if (!t) return [];
  const n = document.querySelectorAll(
      '[name^="'
        .concat(e, '"][form^="')
        .concat(CSS.escape(t.getAttribute('id') || ''), '"]')
    ),
    r = t.querySelectorAll('[name^="'.concat(e, '"]')),
    a = [...n, ...r],
    i = {};
  return (
    a.forEach((o) => {
      const s = Ai(o),
        l = Si(o);
      s && typeof l < 'u' && (i[s] = l);
    }),
    Object.entries(i != null ? i : {}).map(([o, s]) => ({ key: o, value: s }))
  );
}
function ge({ page: e, element: t }) {
  const n =
      e === 'product'
        ? '[data-shopify="payment-button"]'
        : '[data-shopify="dynamic-checkout-cart"]',
    r = br(t, n) || document.querySelector(n);
  return br(r, 'form');
}
const Ft = Element.prototype;
function br(e, t) {
  if (
    ((Ft.matches =
      Ft.matches ||
      Ft.webkitMatchesSelector ||
      Ft.msMatchesSelector ||
      Ft.mozMatchesSelector),
    !e || e.matches(t))
  )
    return e;
  let n = e;
  for (; n && n !== document.body; )
    if (((n = n.parentElement), n && n.matches(t))) return n;
  return null;
}
function Ai(e) {
  const t = e.getAttribute('name');
  if (t === null) return null;
  const n = t.indexOf('['),
    r = t.lastIndexOf(']');
  return n === -1 || r === -1 ? null : t.substring(n + 1, r);
}
function Si(e) {
  if (
    !(['radio', 'checkbox'].includes(e.type) && !e.checked) &&
    !(e.value === '' || typeof e.value > 'u')
  )
    return e.value;
}
function rr(e) {
  const t = ge({ page: 'product', element: e });
  return Zr(t);
}
function Zr(e) {
  var t;
  const n = e == null ? void 0 : e.elements;
  if (!n) return null;
  const r = te(n, 'id');
  if (!r || isNaN(Number(r))) return null;
  const a = Number((t = te(n, 'quantity')) != null ? t : '1'),
    i = 'gid://shopify/ProductVariant/'.concat(r),
    o = te(n, 'selling_plan'),
    s = o ? 'gid://shopify/SellingPlan/'.concat(o) : void 0,
    l = Xr({ type: 'properties', form: e });
  return {
    variantId: r,
    quantity: a,
    merchandiseId: i,
    sellingPlanId: s,
    lineItemProperties: l,
  };
}
function Ci(e) {
  const t = e == null ? void 0 : e.elements;
  return t ? !!te(t, 'selling_plan') : !1;
}
function te(e, t) {
  var n;
  const r = e.namedItem(t);
  return r && 'value' in r && (n = r.value) != null ? n : null;
}
class tn {
  constructor(t, n) {
    d(this, 'addToCartMutationObserver'),
      d(this, 'addToCartForm'),
      d(this, 'addToCartButtons'),
      (this.element = t),
      (this.onFormChanged = n),
      (this.addToCartMutationObserver = null),
      (this.addToCartForm = null),
      (this.addToCartButtons = []);
  }
  setupMutationObservers() {
    if ((this.findAndSetAddToCartButtons(), !this.addToCartForm)) return;
    this.syncComponentStateWithForm();
    const t = new MutationObserver(() => this.reobserveOnFormChanges());
    (this.addToCartMutationObserver = new MutationObserver(() =>
      this.syncComponentStateWithForm()
    )),
      t.observe(this.addToCartForm, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ['value'],
      }),
      this.observeAddToCartButtons();
  }
  syncComponentStateWithForm() {
    if (!this.addToCartForm) {
      this.onFormChanged({ disabled: !0, hasSellingPlan: !1 });
      return;
    }
    const t = Zr(this.addToCartForm),
      n = !!(
        this.addToCartButtons.length > 0 &&
        this.addToCartButtons.every(
          (r) =>
            r.hasAttribute('disabled') ||
            r.getAttribute('aria-disabled') === 'true'
        )
      );
    this.onFormChanged({
      disabled: n || t === null,
      hasSellingPlan: Ci(this.addToCartForm),
      variantId: t == null ? void 0 : t.variantId,
      sellingPlanId: t == null ? void 0 : t.sellingPlanId,
    });
  }
  observeAddToCartButtons() {
    this.addToCartButtons.forEach((t) => {
      this.addToCartMutationObserver.observe(t, { attributes: !0 });
    });
  }
  reobserveOnFormChanges() {
    var t;
    (t = this.addToCartMutationObserver) == null || t.disconnect(),
      this.findAndSetAddToCartButtons(),
      this.observeAddToCartButtons(),
      this.syncComponentStateWithForm();
  }
  findAndSetAddToCartButtons() {
    (this.addToCartForm = ge({ page: 'product', element: this.element })),
      this.addToCartForm &&
        (this.addToCartButtons = [
          ...this.addToCartForm.querySelectorAll('[type=submit]'),
        ]);
  }
}
function Ei(e, t, n) {
  try {
    const r = JSON.parse(e != null ? e : '{}'),
      a = JSON.parse(
        t != null
          ? t
          : JSON.stringify({ name: 'buy_it_now', wallet_params: {} })
      );
    if (r === null || Object.keys(r).length === 0) {
      if (!(a instanceof Object))
        throw new Error(
          '['.concat(n, '] Invalid fallback wallet configs JSON')
        );
      return { recommendedWallet: null, fallbackWallet: a };
    }
    return { recommendedWallet: r, fallbackWallet: a };
  } catch (r) {
    throw r instanceof SyntaxError
      ? (f.walletConfigDeveloperError(),
        new Rt({
          code: 'invalid-recommended-fallback-json',
          message: 'recommended / fallback must be valid JSON',
        }))
      : new Error(
          '['
            .concat(n, '] Error while parsing recommended/fallback JSON: ')
            .concat(r)
        );
  }
}
const vi =
    '.shopify-payment-button__button--hidden{visibility:hidden}.shopify-payment-button__button{height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);min-height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 0px);width:100%;border:none;box-shadow:0 0 0 0 transparent;color:#fff;cursor:pointer;display:block;font-size:1em;font-weight:500;line-height:1;text-align:center;transition:background .2s ease-in-out}.shopify-payment-button__button[disabled]{opacity:.6;cursor:default}.shopify-payment-button__button--unbranded{background-color:#1990c6;padding:1em 2em}.shopify-payment-button__button--unbranded:hover:not([disabled]){background-color:#136f99}.shopify-payment-button__more-options{background:transparent;border:0 none;cursor:pointer;display:block;font-size:1em;margin-top:1em;text-align:center;text-decoration:underline;width:100%}.shopify-payment-button__more-options.shopify-payment-button__skeleton{height:auto!important;min-height:0!important;border-radius:4px!important;width:50%;margin-left:25%;margin-right:25%}.shopify-payment-button__more-options[disabled]{opacity:.6;cursor:default!important}.shopify-payment-button__button.shopify-payment-button__button--branded{display:flex;flex-direction:column;position:relative;z-index:1}.shopify-payment-button__button.shopify-payment-button__button--branded .shopify-cleanslate{flex:1!important;display:flex!important;flex-direction:column!important}.shopify-payment-button__button.button.loading{position:relative;color:transparent}.shopify-payment-button__button.button.loading>.loading-overlay__spinner{top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;height:100%;display:flex;align-items:center}.shopify-payment-button__button.button.loading>.loading-overlay__spinner .spinner{width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}.button.loading>.loading-overlay__spinner .path{stroke:#fff}.shopify-payment-button__button .loading-overlay__spinner{width:1.8rem;display:inline-block}.shopify-payment-button__button .spinner{animation:shopify-rotator 1.4s linear infinite}@keyframes shopify-rotator{0%{transform:rotate(0)}to{transform:rotate(270deg)}}.shopify-payment-button__button .path{stroke-dasharray:280;stroke-dashoffset:0;transform-origin:center;stroke:#121212;animation:shopify-dash 1.4s ease-in-out infinite}@media screen and (forced-colors: active){.shopify-payment-button__button .path{stroke:CanvasText}}@keyframes shopify-dash{0%{stroke-dashoffset:280}50%{stroke-dashoffset:75;transform:rotate(135deg)}to{stroke-dashoffset:280;transform:rotate(450deg)}}@keyframes acceleratedCheckoutLoadingSkeleton{50%{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-start, 1)}75%{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-end, .5)}to{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-start, 1)}}.shopify-payment-button__skeleton{animation:acceleratedCheckoutLoadingSkeleton var(--shopify-accelerated-checkout-skeleton-animation-duration, 4s) var(--shopify-accelerated-checkout-skeleton-animation-timing-function, ease) infinite;animation-delay:-.168s;background-color:var(--shopify-accelerated-checkout-skeleton-background-color, #dedede);box-sizing:border-box;text-decoration:none!important;height:var(--shopify-accelerated-checkout-button-block-size, inherit);min-height:25px;max-height:55px;border-radius:var(--shopify-accelerated-checkout-button-border-radius, inherit)}.shopify-payment-button__button{border-radius:0}#shopify-buyer-consent{margin-top:1em;display:inline-block;width:100%}#shopify-buyer-consent.hidden{display:none}#shopify-subscription-policy-button{background:none;border:none;padding:0;text-decoration:underline;font-size:inherit;cursor:pointer}#shopify-subscription-policy-button:before{box-shadow:none}',
  en =
    '.accelerated-checkout-button{height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);min-height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 0px);box-shadow:var(--shopify-accelerated-checkout-button-box-shadow);min-width:150px}:host([page-type="cart_page"]) .accelerated-checkout-button{height:100%;width:100%;border-radius:var(--shopify-accelerated-checkout-button-border-radius, 4px);box-shadow:var(--shopify-accelerated-checkout-button-box-shadow)}',
  Ii = 70;
class Gt {
  constructor(t, n, r, a) {
    d(this, 'red'),
      d(this, 'green'),
      d(this, 'blue'),
      d(this, 'opacity'),
      (this.red = t || 0),
      (this.green = n || 0),
      (this.blue = r || 0),
      (this.opacity = typeof a > 'u' ? 1 : a);
  }
  getLuminance() {
    const t = this.red & 255,
      n = this.green & 255,
      r = this.blue & 255;
    return t * 0.2126 + n * 0.7152 + r * 0.0722;
  }
  isDark() {
    return this.opacity === 0 ? !1 : this.getLuminance() / this.opacity < Ii;
  }
  blendWith(t, n) {
    (this.opacity = 1 - (1 - t.opacity) * (1 - n.opacity)),
      (this.red = this.blend(t.red, n.red, t, n)),
      (this.green = this.blend(t.green, n.green, t, n)),
      (this.blue = this.blend(t.blue, n.blue, t, n));
  }
  blend(t, n, r, a) {
    return Math.round(
      (t * r.opacity) / this.opacity +
        (n * a.opacity * (1 - r.opacity)) / this.opacity
    );
  }
}
function Pi(e) {
  const t = [...e];
  let n = new Gt(0, 0, 0, 0),
    r = new Gt(255, 255, 255, 1),
    a = t.shift();
  for (; a; )
    n.opacity > 0 && a.opacity > 0
      ? ((r = new Gt(0, 0, 0, 0)), r.blendWith(a, n))
      : a.opacity > 0
      ? (r = a)
      : (r = n),
      (n = r),
      (a = t.shift());
  return r;
}
const xe = new Gt(255, 255, 255, 1);
function Di(e) {
  const t = [];
  let n = e;
  for (; n.parentElement; ) {
    n = n.parentElement;
    const r = window.getComputedStyle(n).backgroundColor,
      a = Ni(r);
    if ((r && t.push(a), a.opacity === 1)) break;
  }
  try {
    return Pi(t.reverse());
  } catch (r) {
    return (
      b.notify(
        new Error(
          '[BackgroundDetection] Failed to blend colors for element '.concat(
            e.outerHTML
          )
        )
      ),
      xe
    );
  }
}
function Ni(e) {
  if (!e) return xe;
  try {
    const t = e.split('(')[1].split(')')[0].replace(' ', '').split(',');
    return new Gt(
      Number(t[0]),
      Number(t[1]),
      Number(t[2]),
      typeof t[3] > 'u' ? 1 : Number(t[3])
    );
  } catch (t) {
    b.notify(
      new Error(
        '[BackgroundDetection] Failed to convert rgbString to array '.concat(e)
      )
    );
  }
  return xe;
}
class wt extends me {
  constructor() {
    super(),
      d(this, 'name', null),
      d(this, 'i18n'),
      d(this, 'dataSource'),
      d(this, 'apiClient'),
      d(this, 'classNames'),
      d(this, 'containerInstanceNumber'),
      d(this, 'onRendered'),
      d(this, 'setI18n'),
      d(this, 'setDataSource'),
      d(this, 'setApiClient'),
      d(this, 'setClassNames'),
      d(this, 'setContainerInstanceNumber'),
      d(this, 'parsedWalletParams'),
      (this.onRendered = () => {}),
      ([this.i18n, this.setI18n] = J()),
      ([this.dataSource, this.setDataSource] = J()),
      ([this.apiClient, this.setApiClient] = J()),
      ([this.classNames, this.setClassNames] = J()),
      ([this.containerInstanceNumber, this.setContainerInstanceNumber] = J());
  }
  async cleanupOnFailure(t, n) {
    var r;
    try {
      await t();
    } catch (a) {
      b.notify(
        new Ti(
          'An error occurred requiring cleanup when attempting to a render the '
            .concat(n, ' instrument : ')
            .concat(a)
        )
      );
      const i = await this.containerInstanceNumber;
      f.instrumentLoaded({
        instrumentOrComponentName: n,
        result: 'failed',
        measurement: Z(R.ButtonDisplay, ''.concat(n, ':').concat(i)),
      }),
        (r = this.parentElement) == null || r.remove();
    }
  }
  attributeChangedCallback(t, n, r, a) {
    n !== r &&
      t === 'disabled' &&
      a &&
      (r === ''
        ? (a.setAttribute('aria-disabled', 'true'),
          a.setAttribute('disabled', ''))
        : (a.removeAttribute('aria-disabled'), a.removeAttribute('disabled')));
  }
  get pageType() {
    return this.getAttribute('page-type') || C.Unknown;
  }
  get buttonTheme() {
    return Di(this).isDark() ? 'LIGHT' : 'DARK';
  }
  get isCTA() {
    return this.hasAttribute('call-to-action');
  }
  get walletParams() {
    var t;
    if (this.parsedWalletParams === void 0)
      try {
        this.parsedWalletParams = JSON.parse(
          (t = this.getAttribute('wallet-params')) != null ? t : '{}'
        );
      } catch (n) {
        throw new Error('Error while parsing wallet-params JSON: '.concat(n));
      }
    return this.parsedWalletParams;
  }
  async initializeShadowStyles(t, n = '') {
    const r = document.createElement('style');
    (r.innerHTML = [en, n].join('\n')), t.appendChild(r);
  }
}
class Ti extends Error {
  constructor() {
    super(...arguments), d(this, 'name', 'CleanupOnFailureError');
  }
}
class Ri extends wt {
  constructor() {
    super(...arguments), d(this, 'name', g.BuyItNow), d(this, 'button', null);
  }
  static get observedAttributes() {
    return ['disabled'];
  }
  connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  attributeChangedCallback(t, n, r) {
    super.attributeChangedCallback(t, n, r, this.button);
  }
  async handleClick() {
    var t;
    if (
      this.disabled ||
      !this.button ||
      this.button.getAttribute('aria-disabled')
    )
      return;
    this.disabled = !0;
    const [n, r] = await Promise.all([this.i18n, this.dataSource]);
    try {
      const {
        isOutOfStock: a,
        cart: i,
        customValidationError: o,
      } = await at({ element: this, instrumentName: this.name, dataSource: r });
      if (
        (f.sheetClicked({
          instrument: this.name,
          checkoutToken: ue(i),
          result: 'success',
        }),
        o)
      ) {
        bt(n, o.message);
        return;
      }
      if (a) {
        rt(n);
        return;
      }
      nt(this.name),
        ft(
          (t = i == null ? void 0 : i.checkoutUrl) != null ? t : '',
          'allow_redirect'
        );
    } catch (a) {
      b.notify(a),
        f.sheetClicked({ instrument: this.name, result: 'failed' }),
        et(
          n.translate('error_dialogs.checkout.title'),
          n.translate('error_dialogs.checkout.generic_error')
        );
    }
  }
  async render() {
    var t;
    this.button || (this.button = he());
    const n = await this.classNames;
    (this.button.textContent = (await this.i18n).translate(
      'instruments_copy.checkout.buy_now'
    )),
      (this.button.className = n),
      this.disabled && this.button.setAttribute('aria-disabled', 'true'),
      (this.button.onclick = () => this.handleClick()),
      this.appendChild(this.button),
      (t = this.onRendered) == null || t.call(this);
  }
}
function ki() {
  const e = navigator.userAgent,
    t = e.indexOf('Android') > -1,
    n = e.indexOf('Chrome/') > -1,
    r = parseInt((/Chrome\/([0-9]+)/.exec(e) || ['0', '0'])[1], 10);
  return t && n && r === 114;
}
class it {
  constructor(t) {
    d(this, 'walletParams'), (this.walletParams = t.wallet_params);
  }
  static walletName() {
    throw new Error('Must define walletName for WalletInstrument subclass');
  }
  createWebComponent({
    walletContainer: t,
    dataSource: n,
    i18n: r,
    apiClient: a,
    containerInstanceNumber: i,
    classNames: o = '',
    callToAction: s,
    pageType: l = C.ProductPage,
    slot: c = 'button',
    onRendered: h = () => {},
  }) {
    var p, m, y;
    const A = this.getWebComponentName();
    tt(A, this.getWebComponentClass(), { isChildCustomElement: !0 });
    const w = document.createElement(A),
      N = {
        'access-token': (p = t.accessToken) != null ? p : '',
        'buyer-country': (m = t.buyerCountry) != null ? m : '',
        'buyer-currency': t.buyerCurrency,
        'wallet-params': JSON.stringify(
          (y = this.walletParams) != null ? y : {}
        ),
        'page-type': l,
        slot: c,
      };
    try {
      t.disabled && w.setAttribute('disabled', ''),
        pe(w, N),
        t.isShippingRequired && w.setAttribute('requires-shipping', ''),
        t.hasSellingPlan && w.setAttribute('has-selling-plan', '');
    } catch ($) {
      const M = $;
      throw M.message.includes('setAttribute is not a function') && ki()
        ? new Yt(M.message)
        : M;
    }
    return (
      s && w.setAttribute('call-to-action', ''),
      w.setDataSource(n),
      w.setApiClient(a),
      w.setI18n(r),
      w.setClassNames(o),
      w.setContainerInstanceNumber(i),
      (w.onRendered = h),
      w
    );
  }
  loadWalletSDK() {
    return Promise.resolve();
  }
  getLoadEligibility() {
    return { eligible: !0 };
  }
  getPartnerSDKEligibility() {
    return { eligible: !0 };
  }
}
class Li extends it {
  static walletName() {
    return 'buy_it_now';
  }
  getWebComponentName() {
    return 'shopify-buy-it-now-button';
  }
  getInstrumentName() {
    return g.BuyItNow;
  }
  getWebComponentClass() {
    return Ri;
  }
}
const Oi =
    'shopify-paypal-button[disabled]{opacity:.5;cursor:not-allowed}shopify-paypal-button div.paypal-buttons>iframe{z-index:auto!important;border-radius:0!important;box-shadow:none}',
  xi = '::slotted(div){height:100%}';
async function It(e) {
  const { cartClient: t, instrumentName: n } = e;
  try {
    if (!e.cartId)
      throw new Error(
        '['.concat(n, '] provided no cart ID when updating buyer identity')
      );
    if (!t)
      throw new Error(
        '['.concat(
          n,
          '] provided invalid cart client when updating buyer identity'
        )
      );
    return await t.updateCartBuyerIdentity(e);
  } catch (r) {
    throw (f.updateFailed(n, 'updateBuyerIdentity'), r);
  }
}
async function nr({
  cartId: e,
  totalAmount: t,
  paymentMethod: n,
  billingAddress: r,
  cartClient: a,
  instrumentName: i,
  abortSignal: o,
  hasSellingPlan: s,
  canUsePaymentMethodForFreeOrder: l,
}) {
  try {
    if (!e)
      throw new Error(
        '['.concat(i, '] provided no cart ID when updating payment')
      );
    if (!t)
      throw new Error(
        '['.concat(i, '] provided no total amount when updating payment')
      );
    if (!n)
      throw new Error(
        '['.concat(
          i,
          '] provided no apple pay wallet content when updating payment'
        )
      );
    if (!a)
      throw new Error(
        '['.concat(i, '] provided invalid cart client when updating payment')
      );
    const c = { freePaymentMethod: { billingAddress: r } };
    return await a.updateCartPayment(
      e,
      _(
        { amount: { amount: t.amount, currencyCode: t.currencyCode } },
        Number(t.amount) <= 0 && !l && !s ? c : n
      ),
      i,
      o
    );
  } catch (c) {
    throw (f.updateFailed(i, 'updatePayment'), c);
  }
}
function rn(e) {
  return window[nn(e)];
}
function nn(e) {
  return 'paypal-'.concat(e.replace(/[^a-zA-Z0-9]/g, ''));
}
function wr(e) {
  if (!e) return null;
  const t = getComputedStyle(e).borderRadius;
  return t.includes('px') ? parseInt(t, 10) : null;
}
function Me(e) {
  if (!e) return null;
  const t = getComputedStyle(e).height;
  return t.includes('px') ? parseInt(t, 10) : null;
}
function ar() {
  return (
    (typeof AbortController == 'function' && new AbortController()) || null
  );
}
const Ee = 25,
  _r = 55;
var dt;
class Mi extends wt {
  constructor() {
    super(),
      d(this, 'name', g.PayPal),
      d(this, 'abortController'),
      d(this, 'cartId'),
      d(this, 'sdkButtonsComponent'),
      d(this, 'container', null),
      d(this, 'resizeObserver', null),
      d(this, 'buttonHeight'),
      d(this, 'rendering', !1),
      d(this, 'prevBorderRadius', 0),
      d(this, 'prevHeight', 0),
      V(this, dt),
      Y(this, dt, this.attachShadow({ mode: 'closed' })),
      (this.abortController = ar()),
      (this.resizeObserver =
        (typeof ResizeObserver == 'function' &&
          new ResizeObserver(() => this.onResize())) ||
        null);
  }
  connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  async disconnectedCallback() {
    (this.innerHTML = ''),
      (E(this, dt).innerHTML = ''),
      await this.teardownPayPalButton(),
      this.resizeObserver && this.resizeObserver.disconnect();
  }
  async teardownPayPalButton() {
    var t;
    try {
      await ((t = this.sdkButtonsComponent) == null
        ? void 0
        : t.close().catch(() => {}));
    } catch (n) {
    } finally {
      this.sdkButtonsComponent = void 0;
    }
  }
  async onResize() {
    const t = wr(this.container),
      n = Me(this.container),
      r =
        (t !== null && this.prevBorderRadius !== t) ||
        (n !== null && this.prevHeight !== n);
    !this.rendering &&
      r &&
      (await this.teardownPayPalButton(),
      (this.container.innerHTML = ''),
      await this.cleanupOnFailure(() => this.renderFromPayPalSDK(), this.name));
  }
  async render() {
    var t;
    const n = document.createElement('div');
    n.className = yt.BUTTON;
    const r = document.createElement('style');
    (r.innerHTML = Oi),
      this.appendChild(r),
      await this.initializeShadowStyles(E(this, dt), xi),
      E(this, dt).appendChild(n),
      (this.container = n),
      this.renderFromPayPalSDK(),
      (t = this.resizeObserver) == null || t.observe(this.container);
  }
  getHeight() {
    const t = Me(this.container);
    return t
      ? t >= Ee && t <= _r
        ? t
        : t < Ee
        ? (console.debug(
            '[PayPalButton] Container height is less than the minimum height of the PayPal button. Using the minimum height of 25px.'
          ),
          Ee)
        : (console.debug(
            '[PayPalButton] Container height is greater than the maximum height of the PayPal button. Using the maximum height of 55px.'
          ),
          _r)
      : na;
  }
  async renderFromPayPalSDK() {
    var t, n, r;
    if (!this.container)
      throw new Error('button container not set when attempting to render');
    this.rendering = !0;
    const a = this.walletParams.paymentIntent === 'TOKENIZE',
      i = () => this.createToken(this.apiClient);
    let o, s;
    a ? (s = i) : (o = i);
    const l = wr(this.container),
      c = this.getHeight();
    this.prevHeight = c;
    const h = await this.i18n,
      p = {
        color: 'gold',
        label: this.isCTA ? 'pay' : 'paypal',
        disableMaxWidth: !0,
        height: c,
        shape: 'sharp',
      };
    l && l > 0 && ((p.borderRadius = l), (this.prevBorderRadius = l)),
      (this.sdkButtonsComponent =
        (n = (t = rn(this.walletParams.sdkUrl)) == null ? void 0 : t.Buttons) ==
        null
          ? void 0
          : n.call(t, {
              fundingSource: 'paypal',
              style: p,
              createOrder: o,
              createBillingAgreement: s,
              onApprove: async (m) => {
                await this.onApprove(m);
              },
              onCancel: () => {
                var m;
                f.sheetCancelled(this.name),
                  (m = this.abortController) == null || m.abort();
              },
              onClick: this.onClick.bind(this),
              onError: (m) => {
                var y;
                if (m.message === 'Window is closed, can not determine type') {
                  f.sheetCancelled(this.name),
                    (y = this.abortController) == null || y.abort();
                  return;
                }
                b.notify(m);
                const A = h.translate('brand.paypal');
                K(A, h);
              },
            })),
      await ((r = this.sdkButtonsComponent) == null
        ? void 0
        : r.render(this.container)),
      (this.rendering = !1),
      this.onRendered();
  }
  async onClick(t, n) {
    if (this.disabled) return n.reject();
    const r = this.getBoundingClientRect(),
      a = r.left + r.width / 2,
      i = r.top + r.height / 2,
      o = new MouseEvent('click', {
        view: window,
        bubbles: !0,
        cancelable: !1,
        clientX: a,
        clientY: i,
        screenX: window.screenX + a,
        screenY: window.screenY + i,
      });
    this.dispatchEvent(o);
    const [s, l] = await Promise.all([this.dataSource, this.i18n]);
    try {
      const {
        isOutOfStock: c,
        cart: h,
        customValidationError: p,
      } = await at({ element: this, instrumentName: this.name, dataSource: s });
      return p
        ? (bt(l, p.message), n.reject())
        : c
        ? (rt(l), n.reject())
        : (nt(this.name), (this.cartId = h.id), n.resolve());
    } catch (c) {
      return (
        c instanceof Error &&
          (f.sheetClicked({ instrument: this.name, result: 'failed' }),
          b.notify(c),
          et(
            l.translate('error_dialogs.checkout.title'),
            l.translate('error_dialogs.checkout.generic_error')
          )),
        n.reject()
      );
    }
  }
  async createToken(t) {
    const n = await t;
    try {
      if (!this.cartId) throw new Error('cartId not found when creating token');
      const r = await n.paypalTokenCreate(this.cartId);
      return f.sheetClicked({ instrument: this.name, result: 'success' }), r;
    } catch (r) {
      throw (f.sheetClicked({ instrument: this.name, result: 'failed' }), r);
    }
  }
  async onApprove({ orderID: t, payerID: n }) {
    var r, a, i;
    try {
      if (
        (f.authorizationAttempt(this.name),
        Kt(R.AuthorizationLatency, this.name),
        !this.cartId)
      )
        throw new Error('Cart not found');
      const o = await this.apiClient,
        s = await o.paypalBuyerDetailsFetch(t, this.cartId),
        { data: l } = await It({
          cartId: this.cartId,
          cartClient: o,
          instrumentName: this.name,
          emailAddress: s.email,
          streetAddress: s.destinationAddress,
        });
      if (!l) throw new Error('Cart not found');
      const { id: c, checkoutUrl: h, totalAmount: p } = l;
      if (
        (await nr({
          abortSignal: (r = this.abortController) == null ? void 0 : r.signal,
          cartClient: o,
          cartId: c,
          instrumentName: g.PayPal,
          billingAddress:
            (a = s.billingAddress) != null ? a : s.destinationAddress,
          paymentMethod: {
            walletPaymentMethod: {
              paypalWalletContent: {
                billingAddress:
                  (i = s.billingAddress) != null ? i : s.destinationAddress,
                email: s.email,
                expiresAt: s.expiresAt,
                payerId: n,
                token: t,
                acceptedSubscriptionTerms: !1,
                vaultingAgreement: !1,
                merchantId: this.walletParams.merchantId,
              },
            },
          },
          canUsePaymentMethodForFreeOrder: !0,
          totalAmount: p,
        }),
        Xe({ currentCartTotal: p, initialBuyerCurrency: this.buyerCurrency }))
      ) {
        vt({
          checkoutUrl: h,
          instrumentName: this.name,
          reason: 'currency_changed',
        });
        return;
      }
      f.authorizationComplete({
        instrument: this.name,
        result: 'success',
        measurement: Z(R.AuthorizationLatency, this.name),
      }),
        ft(h);
    } catch (o) {
      throw (
        (f.authorizationComplete({
          instrument: this.name,
          result: 'failure',
          measurement: Z(R.AuthorizationLatency, this.name),
        }),
        o)
      );
    }
  }
}
dt = new WeakMap();
const St = class Js extends it {
  static walletName() {
    return 'paypal';
  }
  constructor(t) {
    super(t);
  }
  getWebComponentName() {
    return 'shopify-paypal-button';
  }
  getInstrumentName() {
    return g.PayPal;
  }
  getWebComponentClass() {
    return Mi;
  }
  loadWalletSDK() {
    let t = Js.paypalSDKPromiseByUrl.get(this.walletParams.sdkUrl);
    if (t) return t;
    const n = document.createElement('script');
    return (
      n.setAttribute('src', this.walletParams.sdkUrl),
      (t = new Promise((r, a) => {
        n.setAttribute('data-namespace', nn(this.walletParams.sdkUrl)),
          (n.onload = () => r()),
          (n.onerror = (i) => {
            Js.paypalSDKPromiseByUrl.delete(this.walletParams.sdkUrl),
              n && document.body.contains(n) && document.body.removeChild(n),
              a(i);
          }),
          document.body.appendChild(n);
      })),
      Js.paypalSDKPromiseByUrl.set(this.walletParams.sdkUrl, t),
      t
    );
  }
  getLoadEligibility() {
    return { eligible: !0 };
  }
  getPartnerSDKEligibility() {
    var t, n;
    try {
      return (n =
        (t = rn(this.walletParams.sdkUrl)) == null ? void 0 : t.Buttons) !=
        null && n.call(t).isEligible()
        ? { eligible: !0 }
        : { eligible: !1, reason: 'PayPal SDK not eligible' };
    } catch (r) {
      throw new Rt({
        code: 'paypal-sdk-eligibility-check-failed',
        message: "PayPal SDK 'isEligible' method failed unexpectedly: ".concat(
          r
        ),
      });
    }
  }
};
d(St, 'paypalSDKPromiseByUrl', new Map());
let Fe = St;
const Fi =
    '.apple-pay-button{display:flex;align-items:center;justify-content:center;width:100%;padding:0!important;cursor:pointer;border:none}.apple-pay-button:hover:not(:disabled){filter:brightness(92%)}.apple-pay-button:disabled{opacity:.5;cursor:not-allowed}.apple-pay-button svg{height:100%;flex-shrink:0}.apple-pay--content{font-size:16px;font-family:San Francisco,sans-serif;width:100%;height:100%;flex-grow:1;display:flex;align-items:center;justify-content:center;white-space:pre}.apple-pay--light{background:#fff;color:#000}.apple-pay--light svg{fill:#000}.apple-pay--dark{background:#000;color:#fff}.apple-pay--dark svg{fill:#fff}',
  Ue = { UK: 'GB', JA: 'JP' },
  an = ['AS', 'GU', 'MP', 'PR', 'VI'];
an.forEach((e) => {
  Ue[e] = 'US';
});
function Jt(e) {
  var t, n;
  const r = e.countryCode,
    a = {
      firstName: e.givenName || void 0,
      lastName: e.familyName || void 0,
      address1:
        (t = e == null ? void 0 : e.addressLines) == null ? void 0 : t[0],
      address2:
        ((n = e == null ? void 0 : e.addressLines) == null ? void 0 : n[1]) ||
        void 0,
      city: e.locality || void 0,
      zip: e.postalCode || void 0,
      province: e.administrativeArea || e.subLocality || void 0,
      country: Ui(e.countryCode),
      phone: e.phoneNumber || void 0,
    };
  return (
    a.country === 'HK' && ((a.zip = void 0), (a.province = e.postalCode)),
    r && an.includes(r) && (a.province = r),
    a.lastName || (a.lastName = a.firstName),
    a
  );
}
function Ui(e) {
  if (!e) return 'ZZ';
  const t = e.toUpperCase();
  return Object.keys(Ue).includes(t) ? Ue[t] : t;
}
function on(e, t) {
  return e.map((n) => {
    var r;
    return {
      title: $i(n, t),
      estimatedCost: {
        amount: Bi(n),
        currencyCode: n[0].estimatedCost.currencyCode,
      },
      handle: Hi(n),
      description: (r = n[0].description) != null ? r : '',
    };
  });
}
function sn(e) {
  return e
    .map((t) =>
      t.deliveryOptions.map((n) => P(_({}, n), { groupType: t.groupType }))
    )
    .reduce((t, n) => t.flatMap((r) => n.map((a) => [...r, a])), [[]]);
}
function Bi(e) {
  return e.reduce((t, n) => t + Number(n.estimatedCost.amount), 0).toFixed(2);
}
function $i(e, t) {
  var n, r;
  const a =
      (n = e.find((s) => s.groupType === zt.OneTimePurchase)) == null
        ? void 0
        : n.title,
    i =
      (r = e.find((s) => s.groupType === zt.Subscription)) == null
        ? void 0
        : r.title,
    o = [...new Set([a, i])].filter(Boolean);
  return o.length === 2
    ? t.translate('shipping_methods.connect_shipping_methods', {
        methodOne: o[0],
        methodTwo: o[1],
      })
    : o[0];
}
function Hi(e) {
  return e.map((t) => t.handle).join(',');
}
function ln({ deliveryGroups: e, i18n: t }) {
  const n = e.some((r) => r.groupType === zt.Subscription);
  return e.map((r) => {
    var a;
    let i = t.translate('order_summary.shipping');
    return (
      n &&
        (i =
          r.groupType === zt.Subscription
            ? t.translate('order_summary.shipping_subscription')
            : t.translate('order_summary.shipping_one_time_purchase')),
      {
        label: i,
        amount: pt(
          ((a = r.selectedDeliveryOption) == null
            ? void 0
            : a.estimatedCost.amount) || 0
        ),
      }
    );
  });
}
function Gi(e, t) {
  return Ht({ label: e, possibleLines: [t] })[0];
}
function Vi({
  subtotal: e,
  deliveryGroups: t,
  duties: n,
  taxes: r,
  discountAllocations: a,
  i18n: i,
  formattedRecurringTotals: o,
}) {
  var s;
  const l = Ht({
      label: i.translate('order_summary.subtotal'),
      possibleLines: [e],
    }),
    c = ln({ deliveryGroups: t, i18n: i }),
    h = Ht({ label: i.translate('order_summary.duties'), possibleLines: [n] }),
    p = Ht({ label: i.translate('order_summary.taxes'), possibleLines: [r] }),
    m = o.map((w) => ({ label: w, amount: '0.00', type: 'pending' })),
    y = m.length
      ? [
          {
            label: i.translate(
              'order_summary.subscriptions.recurring_total_tooltip_line'
            ),
            amount: '0.00',
            type: 'pending',
          },
        ]
      : [],
    A =
      (s =
        a == null
          ? void 0
          : a.flatMap((w) => {
              var N;
              const $ = (N = w.title) != null ? N : w.code;
              return Ht({
                label: $ != null ? $ : i.translate('order_summary.discount'),
                possibleLines: [w.discountedAmount],
                isDiscount: !0,
              });
            })) != null
        ? s
        : [];
  return [...l, ...c, ...h, ...p, ...A, ...m, ...y];
}
function Ht({ label: e, possibleLines: t, isDiscount: n = !1 }) {
  return t
    .filter((r) => (r == null ? void 0 : r.amount) !== void 0)
    .map((r) => ({
      label: e,
      amount: n ? '-'.concat(pt(r.amount)) : pt(r.amount),
    }));
}
function zi(e, t) {
  if (!e.length) return [];
  const n = sn(e);
  return on(n, t).map((r) => {
    var a;
    return {
      label: r.title || '',
      amount: r.estimatedCost.amount,
      identifier: r.handle,
      detail: (a = r.description) != null ? a : '',
    };
  });
}
const ve = async ({
    paymentSheetAction: e,
    onProceed: t,
    terminateSession: n,
  }) => {
    switch (e.action) {
      case 'abort':
        n();
        break;
      case 'show_error':
        await t(e.errors);
        break;
      case 'update':
        await t(e.errors);
        break;
      default:
        throw new Error(
          'Missing handler for payment sheet action "'.concat(e.action, '"')
        );
    }
  },
  qi = ['decelerate', 'abort', 'show_error', 'complete', 'update'];
class cn extends Error {
  constructor() {
    super(...arguments), d(this, 'name', 'UnhandledActionError');
  }
}
class dn {
  constructor() {
    d(this, 'generatePrioritizedPaymentSheetAction', (t, n) => {
      let r;
      const a = [],
        i = [],
        o = [],
        s = n
          .filter((c) => c !== u.UnacceptablePaymentsAmount)
          .some((c) => t[c] !== void 0);
      for (const c of Object.keys(t))
        if (!(c === u.UnacceptablePaymentsAmount && s)) {
          const h = t[c]();
          h.effects && i.push(...h.effects),
            h.action !== 'complete' && h.errors && o.push(...h.errors),
            a.push(h);
        }
      const l = ((c) =>
        qi.map((h) => c.find((p) => p.action === h)).find((h) => !!h))(a);
      return (
        l &&
          ((r = l), (r.effects = i), r.action !== 'complete' && (r.errors = o)),
        r
      );
    });
  }
  getMergedPaymentSheetAction({ result: t, errorActions: n }) {
    const r = {};
    n.forEach((i) => {
      i.errors.forEach((o) => {
        t.errors.includes(o) && (r[o] = i.generateAction);
      });
    });
    let a;
    for (const i of t.errors) {
      const o = r[i];
      if (o) {
        a = o();
        break;
      }
    }
    return {
      firstPaymentSheetAction: a,
      prioritizedPaymentSheetAction: this.generatePrioritizedPaymentSheetAction(
        r,
        t.errors
      ),
    };
  }
  getUnhandledErrors(t, n) {
    const r = n.flatMap((a) => a.errors);
    return t.filter((a) => !r.includes(a));
  }
  decelerateOrAbort({
    reason: t,
    instrumentName: n,
    errorOrWarning: r,
    result: a,
  }) {
    var i, o;
    return a
      ? ((i = a.data) == null ? void 0 : i.__typename) === 'SubmitFailed'
        ? {
            action: 'decelerate',
            redirectUrl: (o = a.data) == null ? void 0 : o.checkoutUrl,
            reason: t,
          }
        : {
            action: 'abort',
            effects: [
              () => {
                var s;
                b.notify(
                  new Error(
                    '['
                      .concat(n, '] unexpected ')
                      .concat(r, ' received in ')
                      .concat(
                        (s = a.data) == null ? void 0 : s.__typename,
                        ' response, aborting'
                      )
                  )
                );
              },
            ],
          }
      : { action: 'abort' };
  }
}
class ji extends dn {
  constructor(t) {
    super(),
      d(this, 'completionResult'),
      (this.i18n = t),
      (this.completionResult = null);
  }
  mapMutationResultToPaymentSheetAction(t, n) {
    var r;
    const a = this.mapCustomValidationFunctionErrorToAction(t.errors);
    if (a) return a;
    const i = this.getErrorActions(),
      o = t.errors,
      s = this.getUnhandledErrors(o, i);
    if (
      (s.forEach((c) => {
        b.notify(
          new cn(
            '['
              .concat(g.ApplePay, '] mutation result error not handled: ')
              .concat(c)
          )
        );
      }),
      ((r = t.data) == null ? void 0 : r.deliveryGroups.length) === 0 &&
        n != null &&
        n.shippingRequired)
    )
      return {
        action: 'show_error',
        errors: [new ApplePayError('addressUnserviceable')],
      };
    const { firstPaymentSheetAction: l } = this.getMergedPaymentSheetAction({
      result: t,
      errorActions: i,
    });
    return (
      l ||
      (s.length > 0 ? { action: 'abort' } : { action: 'update', errors: [] })
    );
  }
  mapCompletionResultToPaymentSheetAction(t) {
    if (!t.data)
      throw new Error(
        '['.concat(g.ApplePay, '] completion returned null result')
      );
    switch (((this.completionResult = t), t.data.__typename)) {
      case 'SubmitSuccess':
        return { action: 'complete', redirectUrl: t.data.redirectUrl };
      case 'SubmitAlreadyAccepted':
      case 'SubmitThrottled':
      case 'SubmitFailed': {
        const n = this.mapCustomValidationFunctionErrorToAction(t.errors);
        if (n) return n;
        const r = this.getErrorActions(),
          a = t.errors;
        this.getUnhandledErrors(a, r).forEach((o) => {
          b.notify(
            new Error(
              '['
                .concat(g.ApplePay, '] completion result error not handled: ')
                .concat(o)
            )
          );
        });
        const { prioritizedPaymentSheetAction: i } =
          this.getMergedPaymentSheetAction({ result: t, errorActions: r });
        return i || { action: 'abort' };
      }
      default:
        throw new Error(
          '['
            .concat(g.ApplePay, '] unknown completion result type: ')
            .concat(t.data.__typename)
        );
    }
  }
  getErrorActions() {
    return [
      {
        errors: [u.CaptchaCompletionRequired],
        generateAction: () =>
          this.decelerateOrAbort({
            reason: 'captcha_required',
            instrumentName: g.ApplePay,
            errorOrWarning: u.CaptchaCompletionRequired,
            result: this.completionResult,
          }),
      },
      {
        errors: [u.InvalidLanguage],
        generateAction: () => ({
          action: 'abort',
          effects: [
            () => {
              b.notify(
                new Error(
                  '['.concat(
                    g.ApplePay,
                    '] mutation provided invalid language, aborting'
                  )
                )
              );
            },
          ],
        }),
      },
      {
        errors: [u.InvalidCountry],
        generateAction: () => ({
          action: 'abort',
          effects: [
            () => {
              b.notify(
                new Error(
                  '['.concat(
                    g.ApplePay,
                    '] mutation provided invalid country, aborting'
                  )
                )
              );
            },
          ],
        }),
      },
      {
        errors: [u.MissingCartId],
        generateAction: () => ({
          action: 'abort',
          effects: [
            () => {
              b.notify(
                new Error(
                  '['.concat(
                    g.ApplePay,
                    '] mutation provided invalid cart ID, aborting'
                  )
                )
              );
            },
          ],
        }),
      },
      {
        errors: [u.UnacceptablePaymentsAmount],
        generateAction: () => ({ action: 'abort' }),
      },
      { errors: Kr, generateAction: () => ({ action: 'abort' }) },
      {
        errors: [u.MerchandiseNotEnoughStock],
        generateAction: () =>
          this.decelerateOrAbort({
            reason: 'not_enough_stock',
            instrumentName: g.ApplePay,
            errorOrWarning: u.MerchandiseNotEnoughStock,
            result: this.completionResult,
          }),
      },
      {
        errors: Qr,
        generateAction: () =>
          this.decelerateOrAbort({
            reason: 'out_of_stock',
            instrumentName: g.ApplePay,
            errorOrWarning: u.MerchandiseOutOfStock,
            result: this.completionResult,
          }),
      },
      {
        errors: [u.DeliveryNotAvailable, u.NoDeliveryGroupSelected],
        generateAction: () => ({
          action: 'show_error',
          errors: [new ApplePayError('addressUnserviceable')],
        }),
      },
      {
        errors: [u.BuyerIdentityEmailRequired],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'emailAddress',
              this.i18n.translate('errors.missing.email')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameRequired],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.missing.first_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameInvalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.invalid.first_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameRequired],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.missing.last_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameInvalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.invalid.last_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress1Required],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'addressLines',
              this.i18n.translate('errors.missing.address1')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress1Invalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'addressLines',
              this.i18n.translate('errors.invalid.address1')
            ),
          ],
        }),
      },
      {
        errors: [
          u.DeliveryAddress2Required,
          u.DeliveryAddress2AddressFieldRequired,
        ],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'addressLines',
              this.i18n.translate('errors.missing.address2')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress2Invalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'addressLines',
              this.i18n.translate('errors.invalid.address2')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryCityRequired, u.DeliveryCityAddressFieldRequired],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'locality',
              this.i18n.translate('errors.missing.city')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryCityInvalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'locality',
              this.i18n.translate('errors.invalid.city')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryZoneRequiredForCountry],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'administrativeArea',
              this.i18n.translate('errors.missing.zone')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryZoneNotFound],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'administrativeArea',
              this.i18n.translate('errors.invalid.zone')
            ),
          ],
        }),
      },
      {
        errors: [
          u.DeliveryPostalCodeRequired,
          u.DeliveryPostalCodeAddressFieldRequired,
        ],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'postalCode',
              this.i18n.translate('errors.missing.postal_code')
            ),
          ],
        }),
      },
      {
        errors: [
          u.DeliveryPostalCodeInvalid,
          u.DeliveryInvalidPostalCodeForZone,
          u.DeliveryInvalidPostalCodeForCountry,
          u.DeliveryZipInvalidForCountry,
        ],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'postalCode',
              this.i18n.translate('errors.invalid.postal_code')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryPhoneNumberRequired],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'phoneNumber',
              this.i18n.translate('errors.missing.phone')
            ),
          ],
        }),
      },
      {
        errors: [
          u.DeliveryPhoneNumberInvalid,
          u.BuyerIdentityInvalidPhone,
          u.DeliveryPhoneDoesNotMatchExpectedPattern,
        ],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'phoneNumber',
              this.i18n.translate('errors.invalid.phone')
            ),
          ],
        }),
      },
      {
        errors: [u.BuyerIdentityInvalidCountry, u.DeliveryCountryInvalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'country',
              this.i18n.translate('errors.invalid.country')
            ),
          ],
        }),
      },
      {
        errors: [u.InvalidPaymentApplePayBillingAddress],
        generateAction: () => ({
          action: 'show_error',
          errors: [new ApplePayError('billingContactInvalid')],
        }),
      },
      {
        errors: [u.DeliveryLastNameContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.emojis.last_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.emojis.first_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress1TooLong],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'addressLines',
              this.i18n.translate('errors.too_long.address1')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress2TooLong],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'addressLines',
              this.i18n.translate('errors.too_long.address2')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameTooLong],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.too_long.first_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameTooLong],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.too_long.last_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryCityTooLong],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'locality',
              this.i18n.translate('errors.too_long.city')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameContainsUrl],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.url.first_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameContainsUrl],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.url.last_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress1ContainsHtmlTags],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'addressLines',
              this.i18n.translate('errors.html_tags.address1')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress2ContainsHtmlTags],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'addressLines',
              this.i18n.translate('errors.html_tags.address2')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryCityContainsHtmlTags],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'locality',
              this.i18n.translate('errors.html_tags.city')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameContainsHtmlTags],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.html_tags.first_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameContainsHtmlTags],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'name',
              this.i18n.translate('errors.html_tags.last_name')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryCityContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'locality',
              this.i18n.translate('errors.emojis.city')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress1ContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'addressLines',
              this.i18n.translate('errors.emojis.address1')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress2ContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'addressLines',
              this.i18n.translate('errors.emojis.address2')
            ),
          ],
        }),
      },
      {
        errors: [u.DeliveryPostalCodeContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'postalCode',
              this.i18n.translate('errors.emojis.postal_code')
            ),
          ],
        }),
      },
      {
        errors: [u.BuyerIdentityEmailInvalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            new ApplePayError(
              'shippingContactInvalid',
              'emailAddress',
              this.i18n.translate('errors.invalid.email')
            ),
          ],
        }),
      },
    ];
  }
  mapCustomValidationFunctionErrorToAction(t) {
    const n = Qe(t);
    return n
      ? {
          action: 'abort',
          effects: [
            () => {
              const r = this.i18n.translate('brand.apple_pay');
              Je(
                this.i18n.translate('error_dialogs.wallet.title', {
                  wallet: r,
                }),
                n.message
              );
            },
          ],
        }
      : null;
  }
}
const Ar = ['name', 'postalAddress'];
function Wi({ shippingRequired: e, walletParams: t, buyerCurrency: n }) {
  const { phoneRequired: r, emailRequired: a } = t,
    i = [...(a ? ['email'] : []), ...(r ? ['phone'] : [])],
    o = e ? [...Ar, ...i] : i;
  return {
    countryCode: t.countryCode,
    currencyCode: n,
    merchantCapabilities: t.merchantCapabilities,
    supportedNetworks: t.supportedNetworks,
    total: { type: 'pending', label: t.merchantName, amount: '1.00' },
    requiredBillingContactFields: Ar,
    requiredShippingContactFields: o,
    shippingType: t.shippingType,
  };
}
const Yi = (e) => {
    const t = e.lineItems.flatMap((n) => n.discountAllocations);
    return [
      ...e.discountCodes
        .filter(
          (n) =>
            n.applicable &&
            e.discountAllocations.findIndex((r) => r.code === n.code) === -1 &&
            t.findIndex((r) => r.code === n.code) === -1
        )
        .map((n) => ({
          code: n.code,
          discountedAmount: {
            amount: '0',
            currencyCode: e.totalAmount.currencyCode,
          },
        })),
      ...e.discountAllocations,
      ...t,
    ];
  },
  un = (e) => {
    const t = e.lineItems.reduce(
      (n, r) => n + Number(r.subtotalAmount.amount),
      0
    );
    return { amount: String(t), currencyCode: e.totalAmount.currencyCode };
  };
function Ki(e, t) {
  return e.reduce((n, r) => {
    if (!r.sellingPlanAllocation) return n;
    const {
      sellingPlanAllocation: { sellingPlan: a, priceAdjustments: i },
      quantity: o,
    } = r;
    if (!a.recurringDeliveries || !a.billingPolicy) return n;
    const s = Qi({ billingPolicy: a.billingPolicy, i18n: t });
    if (i.length === 0) {
      const l = Xt({
        price: Number(r.subtotalAmount.amount) * o,
        currencyCode: r.subtotalAmount.currencyCode,
        locale: t.locale,
      });
      return [
        ...n,
        t.translate('order_summary.subscriptions.recurring_totals', {
          fixedPrice: l,
          interval: s,
        }),
      ];
    } else if (i.length === 1) {
      const l = Xt({
        price: Number(i[0].price.amount) * o,
        currencyCode: i[0].price.currencyCode,
        locale: t.locale,
      });
      return [
        ...n,
        t.translate('order_summary.subscriptions.recurring_totals', {
          fixedPrice: l,
          interval: s,
        }),
      ];
    } else if (i.length === 2) {
      const l = Xt({
          price: Number(i[0].price.amount) * o,
          currencyCode: i[0].price.currencyCode,
          locale: t.locale,
        }),
        c = Xt({
          price: Number(i[1].price.amount) * o,
          currencyCode: i[1].price.currencyCode,
          locale: t.locale,
        }),
        h = a.priceAdjustments[0].orderCount;
      return [
        ...n,
        t.translate(
          'order_summary.subscriptions.recurring_totals_with_policies',
          { count: h, fixedPrice: l, recurringPrice: c, interval: s }
        ),
      ];
    }
    return n;
  }, []);
}
function Xt({ price: e, currencyCode: t, locale: n }) {
  return Intl.NumberFormat(n, {
    style: 'currency',
    currency: t,
    currencyDisplay: 'narrowSymbol',
  }).format(e);
}
function Qi({ billingPolicy: e, i18n: t }) {
  const { interval: n, intervalCount: r } = e,
    a = {
      YEAR: 'order_summary.subscriptions.recurring_total_intervals.year',
      MONTH: 'order_summary.subscriptions.recurring_total_intervals.month',
      WEEK: 'order_summary.subscriptions.recurring_total_intervals.week',
      DAY: 'order_summary.subscriptions.recurring_total_intervals.day',
    }[n];
  if (!a) throw new Error('Unknown selling plan interval provided: '.concat(n));
  return t.translate(a, { count: r });
}
const fe = 'GraphQL Client',
  Sr = 0,
  Cr = 3,
  hn =
    "An error occurred while fetching from the API. Review 'graphQLErrors' for details.",
  pn = 'Response returned unexpected Content-Type:',
  mn =
    'An unknown error has occurred. The API did not return a data object or any errors in its response.',
  Be = { json: 'application/json', multipart: 'multipart/mixed' },
  Er = 'X-SDK-Variant',
  vr = 'X-SDK-Version',
  Ji = 'shopify-graphql-client',
  Xi = '1.2.0',
  yn = 1e3,
  Zi = [429, 503],
  gn = /@(defer)\b/i,
  Ir = '\r\n',
  to = /boundary="?([^=";]+)"?/i,
  Pr = Ir + Ir;
function X(e, t = fe) {
  return e.startsWith(''.concat(t)) ? e : ''.concat(t, ': ').concat(e);
}
function kt(e) {
  return e instanceof Error ? e.message : JSON.stringify(e);
}
function fn(e) {
  return e instanceof Error && e.cause ? e.cause : void 0;
}
function bn(e) {
  return e.flatMap(({ errors: t }) => (t != null ? t : []));
}
function wn({ client: e, retries: t }) {
  if (t !== void 0 && (typeof t != 'number' || t < Sr || t > Cr))
    throw new Error(
      ''
        .concat(e, ': The provided "retries" value (')
        .concat(t, ') is invalid - it cannot be less than ')
        .concat(Sr, ' or greater than ')
        .concat(Cr)
    );
}
function O(e, t) {
  return t &&
    (typeof t != 'object' ||
      Array.isArray(t) ||
      (typeof t == 'object' && Object.keys(t).length > 0))
    ? { [e]: t }
    : {};
}
function _n(e, t) {
  if (e.length === 0) return t;
  const n = { [e.pop()]: t };
  return e.length === 0 ? n : _n(e, n);
}
function An(e, t) {
  return Object.keys(t || {}).reduce(
    (n, r) =>
      (typeof t[r] == 'object' || Array.isArray(t[r])) && e[r]
        ? ((n[r] = An(e[r], t[r])), n)
        : ((n[r] = t[r]), n),
    Array.isArray(e) ? [...e] : _({}, e)
  );
}
function Sn([e, ...t]) {
  return t.reduce(An, _({}, e));
}
function eo({
  clientLogger: e,
  customFetchApi: t = fetch,
  client: n = fe,
  defaultRetryWaitTime: r = yn,
  retriableCodes: a = Zi,
}) {
  const i = async (o, s, l) => {
    const c = s + 1,
      h = l + 1;
    let p;
    try {
      if (
        ((p = await t(...o)),
        e({
          type: 'HTTP-Response',
          content: { requestParams: o, response: p },
        }),
        !p.ok && a.includes(p.status) && c <= h)
      )
        throw new Error();
      return p;
    } catch (m) {
      if (c <= h) {
        const y = p == null ? void 0 : p.headers.get('Retry-After');
        return (
          await ro(y ? parseInt(y, 10) : r),
          e({
            type: 'HTTP-Retry',
            content: {
              requestParams: o,
              lastResponse: p,
              retryAttempt: s,
              maxRetries: l,
            },
          }),
          i(o, c, l)
        );
      }
      throw new Error(
        X(
          ''
            .concat(
              l > 0
                ? 'Attempted maximum number of '.concat(
                    l,
                    ' network retries. Last message - '
                  )
                : ''
            )
            .concat(kt(m)),
          n
        )
      );
    }
  };
  return i;
}
async function ro(e) {
  return new Promise((t) => setTimeout(t, e));
}
function no({
  headers: e,
  url: t,
  customFetchApi: n = fetch,
  retries: r = 0,
  logger: a,
}) {
  wn({ client: fe, retries: r });
  const i = { headers: e, url: t, retries: r },
    o = ao(a),
    s = eo({ customFetchApi: n, clientLogger: o, defaultRetryWaitTime: yn }),
    l = io(s, i),
    c = oo(l),
    h = mo(l);
  return { config: i, fetch: l, request: c, requestStream: h };
}
function ao(e) {
  return (t) => {
    e && e(t);
  };
}
async function Cn(e) {
  const { errors: t, data: n, extensions: r } = await e.json();
  return _(
    P(_(_({}, O('data', n)), O('extensions', r)), { headers: e.headers }),
    t || !n
      ? {
          errors: P(
            _(
              { networkStatusCode: e.status, message: X(t ? hn : mn) },
              O('graphQLErrors', t)
            ),
            { response: e }
          ),
        }
      : {}
  );
}
function io(e, { url: t, headers: n, retries: r }) {
  return async (a, i = {}) => {
    const { variables: o, headers: s, url: l, retries: c, signal: h } = i,
      p = JSON.stringify({ query: a, variables: o });
    wn({ client: fe, retries: c });
    const m = Object.entries(_(_({}, n), s)).reduce(
      (A, [w, N]) => (
        (A[w] = Array.isArray(N) ? N.join(', ') : N.toString()), A
      ),
      {}
    );
    !m[Er] && !m[vr] && ((m[Er] = Ji), (m[vr] = Xi));
    const y = [
      l != null ? l : t,
      { method: 'POST', headers: m, body: p, signal: h },
    ];
    return e(y, 1, c != null ? c : r);
  };
}
function oo(e) {
  return async (...t) => {
    if (gn.test(t[0]))
      throw new Error(
        X(
          'This operation will result in a streamable response - use requestStream() instead.'
        )
      );
    try {
      const n = await e(...t),
        { status: r, statusText: a } = n,
        i = n.headers.get('content-type') || '';
      return n.ok
        ? i.includes(Be.json)
          ? Cn(n)
          : {
              errors: {
                networkStatusCode: r,
                message: X(''.concat(pn, ' ').concat(i)),
                response: n,
              },
            }
        : { errors: { networkStatusCode: r, message: X(a), response: n } };
    } catch (n) {
      return { errors: { message: kt(n) } };
    }
  };
}
function so(e) {
  return _t(this, null, function* () {
    const t = new TextDecoder();
    if (e.body[Symbol.asyncIterator])
      try {
        for (
          var n = q(e.body), r, a, i;
          (r = !(a = yield new z(n.next())).done);
          r = !1
        ) {
          const o = a.value;
          yield t.decode(o);
        }
      } catch (o) {
        i = [o];
      } finally {
        try {
          r && (a = n.return) && (yield new z(a.call(n)));
        } finally {
          if (i) throw i[0];
        }
      }
    else {
      const o = e.body.getReader();
      let s;
      try {
        for (; !(s = yield new z(o.read())).done; ) yield t.decode(s.value);
      } finally {
        o.cancel();
      }
    }
  });
}
function lo(e, t) {
  return {
    [Symbol.asyncIterator]() {
      return _t(this, null, function* () {
        try {
          let o = '';
          try {
            for (
              var n = q(e), r, a, i;
              (r = !(a = yield new z(n.next())).done);
              r = !1
            ) {
              const s = a.value;
              if (((o += s), o.indexOf(t) > -1)) {
                const l = o.lastIndexOf(t),
                  c = o
                    .slice(0, l)
                    .split(t)
                    .filter((h) => h.trim().length > 0)
                    .map((h) => h.slice(h.indexOf(Pr) + Pr.length).trim());
                c.length > 0 && (yield c),
                  (o = o.slice(l + t.length)),
                  o.trim() === '--' && (o = '');
              }
            }
          } catch (s) {
            i = [s];
          } finally {
            try {
              r && (a = n.return) && (yield new z(a.call(n)));
            } finally {
              if (i) throw i[0];
            }
          }
        } catch (o) {
          throw new Error(
            'Error occured while processing stream payload - '.concat(kt(o))
          );
        }
      });
    },
  };
}
function co(e) {
  return {
    [Symbol.asyncIterator]() {
      return _t(this, null, function* () {
        const t = yield new z(Cn(e));
        yield P(_({}, t), { hasNext: !1 });
      });
    },
  };
}
function uo(e) {
  return e
    .map((t) => {
      try {
        return JSON.parse(t);
      } catch (n) {
        throw new Error('Error in parsing multipart response - '.concat(kt(n)));
      }
    })
    .map((t) => {
      const {
        data: n,
        incremental: r,
        hasNext: a,
        extensions: i,
        errors: o,
      } = t;
      if (!r)
        return P(_(_({ data: n || {} }, O('errors', o)), O('extensions', i)), {
          hasNext: a,
        });
      const s = r.map(({ data: l, path: c, errors: h }) =>
        _({ data: l && c ? _n(c, l) : {} }, O('errors', h))
      );
      return P(
        _(
          {
            data:
              s.length === 1 ? s[0].data : Sn([...s.map(({ data: l }) => l)]),
          },
          O('errors', bn(s))
        ),
        { hasNext: a }
      );
    });
}
function ho(e, t) {
  if (e.length > 0) throw new Error(hn, { cause: { graphQLErrors: e } });
  if (Object.keys(t).length === 0) throw new Error(mn);
}
function po(e, t) {
  var n;
  const r = (t != null ? t : '').match(to),
    a = '--'.concat(r ? r[1] : '-');
  if (!((n = e.body) != null && n.getReader) && !e.body[Symbol.asyncIterator])
    throw new Error('API multipart response did not return an iterable body', {
      cause: e,
    });
  const i = so(e);
  let o = {},
    s;
  return {
    [Symbol.asyncIterator]() {
      return _t(this, null, function* () {
        var l, c;
        try {
          let A = !0;
          try {
            for (
              var h = q(lo(i, a)), p, m, y;
              (p = !(m = yield new z(h.next())).done);
              p = !1
            ) {
              const w = m.value,
                N = uo(w);
              s =
                (c =
                  (l = N.find((M) => M.extensions)) == null
                    ? void 0
                    : l.extensions) != null
                  ? c
                  : s;
              const $ = bn(N);
              (o = Sn([o, ...N.map(({ data: M }) => M)])),
                (A = N.slice(-1)[0].hasNext),
                ho($, o),
                yield P(_(_({}, O('data', o)), O('extensions', s)), {
                  hasNext: A,
                });
            }
          } catch (w) {
            y = [w];
          } finally {
            try {
              p && (m = h.return) && (yield new z(m.call(h)));
            } finally {
              if (y) throw y[0];
            }
          }
          if (A) throw new Error('Response stream terminated unexpectedly');
        } catch (A) {
          const w = fn(A);
          yield P(_(_({}, O('data', o)), O('extensions', s)), {
            errors: P(
              _(
                { message: X(kt(A)), networkStatusCode: e.status },
                O('graphQLErrors', w == null ? void 0 : w.graphQLErrors)
              ),
              { response: e }
            ),
            hasNext: !1,
          });
        }
      });
    },
  };
}
function mo(e) {
  return async (...t) => {
    if (!gn.test(t[0]))
      throw new Error(
        X(
          'This operation does not result in a streamable response - use request() instead.'
        )
      );
    try {
      const n = await e(...t),
        { statusText: r } = n;
      if (!n.ok) throw new Error(r, { cause: n });
      const a = n.headers.get('content-type') || '';
      switch (!0) {
        case a.includes(Be.json):
          return co(n);
        case a.includes(Be.multipart):
          return po(n, a);
        default:
          throw new Error(''.concat(pn, ' ').concat(a), { cause: n });
      }
    } catch (n) {
      return {
        [Symbol.asyncIterator]() {
          return _t(this, null, function* () {
            const r = fn(n);
            yield {
              errors: _(
                _(
                  { message: X(kt(n)) },
                  O('networkStatusCode', r == null ? void 0 : r.status)
                ),
                O('response', r)
              ),
              hasNext: !1,
            };
          });
        },
      };
    }
  };
}
const yo =
    'mutation cartCreate($input:CartInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartCreate(input:$input){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}warnings:warnings{...on CartWarning{code}}}}}',
  go =
    'mutation cartAttributesUpdate($cartId:ID!$attributes:[AttributeInput!]!$country:CountryCode=CA$language:LanguageCode=EN$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartAttributesUpdate(cartId:$cartId attributes:$attributes){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}warnings:warnings{...on CartWarning{code}}}}}',
  fo =
    'mutation cartBillingAddressUpdate($cartId:ID!$billingAddress:MailingAddressInput$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartBillingAddressUpdate(cartId:$cartId billingAddress:$billingAddress){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}warnings:warnings{...on CartWarning{code}}}}}',
  bo =
    'mutation cartBuyerIdentityUpdate($cartId:ID!$buyerIdentity:CartBuyerIdentityInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartBuyerIdentityUpdate(cartId:$cartId buyerIdentity:$buyerIdentity){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}warnings:warnings{...on CartWarning{code}}}}}',
  wo =
    'mutation cartSelectedDeliveryOptionsUpdate($cartId:ID!$selectedDeliveryOptions:[CartSelectedDeliveryOptionInput!]!$country:CountryCode=CA$language:LanguageCode=EN$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartSelectedDeliveryOptionsUpdate(cartId:$cartId selectedDeliveryOptions:$selectedDeliveryOptions){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}warnings:warnings{...on CartWarning{code}}}}}',
  _o =
    'mutation applePaySessionCreate($validationUrl:URL!){applePaySessionCreate(validationUrl:$validationUrl){...@defer{applePaySession{body}}}}',
  Ao =
    'mutation PayPalBuyerDetailsFetch($token:String!$cartId:ID){paypalBuyerDetailsFetch(token:$token cartId:$cartId){...@defer{paypalDetails{email expiresAt destinationAddress{...on MailingAddress{address1 address2 city company country firstName lastName phone province zip}}billingAddress{...on MailingAddress{address1 address2 city company country firstName lastName phone province zip}}}}}}',
  So =
    'mutation PayPalTokenCreate($cartId:ID!){paypalTokenCreate(cartId:$cartId){...@defer{paypalToken{token}}}}',
  Co =
    'query cartQuery($id:ID!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){cart(id:$id){...@defer(if:$withCarrierRates){...CartParts}}}',
  Eo =
    'query subscriptionPolicyQuery($country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){shop{subscriptionPolicy(sanitized:true){body}}}',
  vo =
    'mutation cartPaymentUpdate($cartId:ID!$input:CartPaymentInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartPaymentUpdate(cartId:$cartId payment:$input){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}warnings:warnings{...on CartWarning{code}}}}}',
  Ie =
    'fragment CartParts on Cart{id checkoutUrl buyerIdentity{deliveryAddressPreferences{...on MailingAddress{address1 address2 city province phone country firstName lastName zip}}}deliveryGroups(first:10 withCarrierRates:$withCarrierRates){edges{node{id groupType selectedDeliveryOption{code title description handle estimatedCost{amount currencyCode}}deliveryOptions{code title description estimatedCost{amount currencyCode}handle}}}}cost{subtotalAmount{amount currencyCode}totalAmount{amount currencyCode}totalTaxAmount{amount currencyCode}totalDutyAmount{amount currencyCode}}discountAllocations{discountedAmount{amount currencyCode}...on CartCodeDiscountAllocation{code}...on CartAutomaticDiscountAllocation{title}...on CartCustomDiscountAllocation{title}}discountCodes{code applicable}lines(first:10){edges{node{quantity cost{subtotalAmount{amount currencyCode}totalAmount{amount currencyCode}}discountAllocations{discountedAmount{amount currencyCode}...on CartCodeDiscountAllocation{code}...on CartAutomaticDiscountAllocation{title}...on CartCustomDiscountAllocation{title}}merchandise{...on ProductVariant{requiresShipping}}sellingPlanAllocation{priceAdjustments{price{amount currencyCode}}sellingPlan{billingPolicy{...on SellingPlanRecurringBillingPolicy{interval intervalCount}}priceAdjustments{orderCount}recurringDeliveries}}}}}}',
  Io =
    'mutation cartSubmitForCompletion($cartId:ID!$attemptToken:String!$country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){cartSubmitForCompletion(cartId:$cartId attemptToken:$attemptToken){result{__typename ...on SubmitSuccess{redirectUrl}...on SubmitThrottled{pollAfterV2:pollAfter}...on SubmitFailed{errors{code message}checkoutUrl}}errors:userErrors{...on CartUserError{code field message}}}}',
  Po = 'unstable',
  Dr = 'RESTRICTED_WALLET_ACCOUNT';
class At extends Error {
  constructor(t = 'No response') {
    super(t), (this.name = 'NoResponseError');
  }
}
class be {
  constructor({
    accessToken: t,
    country: n,
    locale: r,
    apiVersion: a = Po,
    withCarrierRates: i = !1,
  }) {
    if (
      (d(this, 'OPERATION_NAME_REGEX', /[^ ]+ (\w+)/),
      d(this, 'client'),
      d(this, 'country'),
      d(this, 'url'),
      d(this, 'locale'),
      d(this, 'withCarrierRates'),
      d(this, 'lastValidCart'),
      !t)
    )
      throw new Error('StorefrontApiClient constructed with no access token');
    if (!n)
      throw new Error('StorefrontApiClient constructed with no buyer country');
    if (!r) throw new Error('StorefrontApiClient constructed with no locale');
    (this.country = n),
      (this.locale = r),
      (this.withCarrierRates = i),
      (this.url = '/api/'.concat(a, '/graphql.json')),
      (this.client = no({
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Shopify-Storefront-Access-Token': t,
          'X-SDK-Variant': 'portable-wallets',
        },
        url: this.url,
        retries: 0,
        logger: (o) => {
          if (o.type === 'HTTP-Response') {
            const [s, l] = o.content.requestParams;
            b.leaveBreadcrumb(
              'POST: '.concat(s),
              {
                statusCode: o.content.response.status,
                statusText: o.content.response.statusText,
                url: s,
                method: l == null ? void 0 : l.method,
                headers: l == null ? void 0 : l.headers,
                body: l == null ? void 0 : l.body,
              },
              'request'
            );
          }
        },
      }));
  }
  async createCart(t) {
    var n;
    const r = await this.requestStream(
      [yo, Ie],
      {
        input: {
          lines: [
            {
              merchandiseId: t.merchandiseId,
              quantity: t.quantity,
              sellingPlanId: t.sellingPlanId,
              attributes: t.lineItemProperties,
            },
          ],
          discountCodes: t.discountCodes,
          buyerIdentity: t.buyerIdentity,
        },
        country: this.country,
        language: this.formatLanguage(this.locale),
      },
      { instrumentName: t.instrumentName, startingCheckout: !0 }
    );
    try {
      for (var a = q(r), i, o, s; (i = !(o = await a.next()).done); i = !1) {
        const l = o.value;
        l.errors && this.onError(l.errors);
        const c = (n = l.data) == null ? void 0 : n.result;
        if (c && !l.hasNext)
          return (
            c.errors && this.onResultError(c.errors),
            {
              data: c.cart ? this.parseCartResponse(c.cart) : null,
              errors: this.parseMutationErrors(l, 'result'),
              warnings: this.parseMutationWarnings(c.warnings),
            }
          );
      }
    } catch (l) {
      s = [l];
    } finally {
      try {
        i && (o = a.return) && (await o.call(a));
      } finally {
        if (s) throw s[0];
      }
    }
    throw new At('Cart create operation returned no response');
  }
  async updateCartBillingAddress(t) {
    const { cartId: n, billingAddress: r, instrumentName: a } = t;
    return this.requestDeferredCart(
      fo,
      { cartId: n, billingAddress: r },
      { instrumentName: a }
    );
  }
  async updateCartBuyerIdentity(t, n) {
    const {
      cartId: r,
      emailAddress: a,
      streetAddress: i,
      countryCode: o,
      phone: s,
      preferences: l,
      instrumentName: c,
    } = t;
    return this.requestDeferredCart(
      bo,
      {
        cartId: r,
        buyerIdentity: {
          email: a,
          countryCode: o != null ? o : i == null ? void 0 : i.country,
          phone: s != null ? s : i == null ? void 0 : i.phone,
          deliveryAddressPreferences: i
            ? [
                {
                  deliveryAddressValidationStrategy: t.validateAddress
                    ? 'STRICT'
                    : 'COUNTRY_CODE_ONLY',
                  deliveryAddress: i,
                },
              ]
            : [],
          preferences: l,
        },
      },
      { instrumentName: c, abortSignal: n }
    );
  }
  async updateSelectedDeliveryOptions(t, n, r, a) {
    let i = n;
    const o = $t() + 2e4;
    for (; $t() < o; ) {
      const s = await this.requestDeferredCart(
        wo,
        { cartId: t, selectedDeliveryOptions: i },
        { instrumentName: r, abortSignal: a }
      );
      if (
        !s.errors.some(
          (c) => typeof c == 'string' && c.startsWith(u.PendingDeliveryGroups)
        )
      )
        return s;
      const l = s.data.deliveryGroups.flatMap((c) =>
        c.deliveryOptions.map((h) => ({
          deliveryOptionHandle: h.handle,
          deliveryGroupId: c.id,
        }))
      );
      i = i.map((c) => {
        var h;
        return (h = l.find(
          (p) => p.deliveryOptionHandle === c.deliveryOptionHandle
        )) != null
          ? h
          : c;
      });
    }
    throw new Error('Selected delivery options update operation timed out');
  }
  async applePaySessionCreate(t) {
    var n, r, a;
    const i = await this.requestStream(
      [_o],
      { validationUrl: t.toString() },
      { instrumentName: g.ApplePay }
    );
    try {
      for (var o = q(i), s, l, c; (s = !(l = await o.next()).done); s = !1) {
        const h = l.value;
        h.errors && this.onError(h.errors);
        const p =
          (a =
            (r = (n = h.data) == null ? void 0 : n.applePaySessionCreate) ==
            null
              ? void 0
              : r.applePaySession) == null
            ? void 0
            : a.body;
        if (p) return p;
      }
    } catch (h) {
      c = [h];
    } finally {
      try {
        s && (l = o.return) && (await l.call(o));
      } finally {
        if (c) throw c[0];
      }
    }
    throw new At('Apple Pay session create operation returned no response');
  }
  async paypalBuyerDetailsFetch(t, n) {
    var r, a;
    const i = await this.requestStream(
      [Ao],
      { token: t, cartId: n },
      { instrumentName: g.PayPal }
    );
    try {
      for (var o = q(i), s, l, c; (s = !(l = await o.next()).done); s = !1) {
        const h = l.value;
        if (h.hasNext) continue;
        h.errors && this.onError(h.errors);
        const p =
          (a = (r = h.data) == null ? void 0 : r.paypalBuyerDetailsFetch) ==
          null
            ? void 0
            : a.paypalDetails;
        if (p) return p;
      }
    } catch (h) {
      c = [h];
    } finally {
      try {
        s && (l = o.return) && (await l.call(o));
      } finally {
        if (c) throw c[0];
      }
    }
    throw new At('PayPal buyer details fetch operation returned no response');
  }
  async paypalTokenCreate(t) {
    var n, r, a, i;
    const o = await this.requestStream(
      [So],
      { cartId: t },
      { instrumentName: g.PayPal }
    );
    try {
      for (var s = q(o), l, c, h; (l = !(c = await s.next()).done); l = !1) {
        const p = c.value;
        if (p.errors) {
          if (
            (n = p.errors.graphQLErrors) != null &&
            n.find((y) => {
              var A;
              return ((A = y.extensions) == null ? void 0 : A.code) === Dr;
            })
          )
            throw new Yt(Dr);
          this.onError(p.errors);
        }
        const m =
          (i =
            (a = (r = p.data) == null ? void 0 : r.paypalTokenCreate) == null
              ? void 0
              : a.paypalToken) == null
            ? void 0
            : i.token;
        if (m) return m;
      }
    } catch (p) {
      h = [p];
    } finally {
      try {
        l && (c = s.return) && (await c.call(s));
      } finally {
        if (h) throw h[0];
      }
    }
    throw new At('PayPal token create operation returned no response');
  }
  async fetchCart({ id: t, startingCheckout: n, instrumentName: r }) {
    var a;
    const i = this.formatLanguage(this.locale),
      o = await this.requestStream(
        [Co, Ie],
        {
          id: t,
          country: this.country,
          language: i,
          withCarrierRates: this.withCarrierRates,
        },
        { instrumentName: r, startingCheckout: n }
      );
    try {
      for (var s = q(o), l, c, h; (l = !(c = await s.next()).done); l = !1) {
        const p = c.value;
        p.errors && this.onError(p.errors);
        const m = (a = p.data) == null ? void 0 : a.cart;
        if (
          (b.leaveBreadcrumb(
            'Fetch cart response',
            { body: m, hasNext: p.hasNext },
            'log'
          ),
          m && !p.hasNext)
        ) {
          const y = this.parseCartResponse(m);
          return (this.lastValidCart = y), y;
        }
      }
    } catch (p) {
      h = [p];
    } finally {
      try {
        l && (c = s.return) && (await c.call(s));
      } finally {
        if (h) throw h[0];
      }
    }
    throw new At('Cart fetch operation returned no response');
  }
  async updateCartPayment(t, n, r, a) {
    var i, o;
    const s = { cartId: t, input: n },
      { amount: l, currencyCode: c } = n.amount;
    let h;
    const p = $t() + 1e4;
    for (; $t() < p; ) {
      const m = await this.requestDeferredCart(vo, s, {
        instrumentName: r,
        abortSignal: a,
      });
      if ((h || (h = m), m.errors.includes(u.InvalidPaymentAmount))) {
        parseFloat(
          (o = (i = m.data.totalTaxAmount) == null ? void 0 : i.amount) != null
            ? o
            : '0'
        ) === 0 && (await new Promise((y) => setTimeout(y, 500))),
          (s.input.amount = {
            amount: m.data.totalAmount.amount,
            currencyCode: m.data.totalAmount.currencyCode,
          });
        continue;
      }
      return (m.data.totalAmount.amount === l ||
        parseFloat(m.data.totalAmount.amount) <= parseFloat(l)) &&
        m.data.totalAmount.currencyCode === c
        ? m
        : h;
    }
    throw new Error('Payment update operation timed out');
  }
  async updateCartAttributes({
    cartId: t,
    attributes: n,
    instrumentName: r,
    startingCheckout: a,
  }) {
    const i = { cartId: t, attributes: n };
    return await this.requestDeferredCart(go, i, {
      instrumentName: r,
      startingCheckout: a,
    });
  }
  async submitForCompletion(t, n, r) {
    var a, i;
    const o = this.formatLanguage(this.locale),
      s = await this.request(
        [Io],
        {
          cartId: t,
          attemptToken: n,
          country: this.country,
          language: o,
          withCarrierRates: this.withCarrierRates,
        },
        { instrumentName: r }
      );
    return {
      data:
        (i = (a = s.data) == null ? void 0 : a.cartSubmitForCompletion) == null
          ? void 0
          : i.result,
      errors: this.parseCompletionErrors(s),
    };
  }
  async fetchSubscriptionPolicy() {
    var t, n;
    const { data: r } = await this.request(
      [Eo],
      { country: this.country, language: this.formatLanguage(this.locale) },
      {}
    );
    return (n =
      (t = r == null ? void 0 : r.shop) == null
        ? void 0
        : t.subscriptionPolicy) == null
      ? void 0
      : n.body;
  }
  generateURLWithOperationName(t) {
    const n = t.match(this.OPERATION_NAME_REGEX);
    if (n) {
      const r = this.url.includes('?') ? '&' : '?',
        a = 'operation_name='.concat(n[1]);
      return ''.concat(this.url).concat(r).concat(a);
    }
    return this.url;
  }
  async request(t, n, r) {
    return this.client.request(t.join(''), {
      variables: n,
      headers: Nr(r),
      url: this.generateURLWithOperationName(t[0]),
    });
  }
  async requestStream(t, n, r) {
    return this.client.requestStream(t.join(''), {
      variables: n,
      headers: Nr(r),
      url: this.generateURLWithOperationName(t[0]),
      signal: r.abortSignal,
    });
  }
  async requestDeferredCart(t, n, r) {
    var a, i, o, s, l, c, h, p, m, y;
    const A = this.formatLanguage(this.locale),
      w = await this.requestStream(
        [t, Ie],
        P(_({}, n), {
          country: this.country,
          language: A,
          withCarrierRates: this.withCarrierRates,
        }),
        r
      );
    try {
      for (var N = q(w), $, M, Ot; ($ = !(M = await N.next()).done); $ = !1) {
        const Lt = M.value;
        Lt.errors && this.onError(Lt.errors);
        const S =
          (i = (a = Lt.data) == null ? void 0 : a.result) == null
            ? void 0
            : i.cart;
        if (S && !Lt.hasNext)
          return {
            data: await this.fetchCart({
              id: S.id,
              instrumentName: r.instrumentName,
              startingCheckout: !1,
            }),
            errors: this.parseMutationErrors(Lt, 'result'),
            warnings: this.parseMutationWarnings(
              (s = (o = Lt.data) == null ? void 0 : o.result) == null
                ? void 0
                : s.warnings
            ),
          };
        if (
          this.lastValidCart &&
          (c = (l = Lt.data) == null ? void 0 : l.result) != null &&
          c.errors
        )
          return (
            this.onResultError(
              (p = (h = Lt.data) == null ? void 0 : h.result) == null
                ? void 0
                : p.errors
            ),
            {
              data: this.lastValidCart,
              errors: this.parseMutationErrors(Lt, 'result'),
              warnings: this.parseMutationWarnings(
                (y = (m = Lt.data) == null ? void 0 : m.result) == null
                  ? void 0
                  : y.warnings
              ),
            }
          );
      }
    } catch (Lt) {
      Ot = [Lt];
    } finally {
      try {
        $ && (M = N.return) && (await M.call(N));
      } finally {
        if (Ot) throw Ot[0];
      }
    }
    throw new At('Deferred cart operation returned no response');
  }
  onError(t) {
    var n, r;
    if (!t) return;
    b.leaveBreadcrumb('GraphQL response error', t, 'error');
    const a =
        (r =
          (n = t.graphQLErrors) == null
            ? void 0
            : n.map((s) => s.message).join(', ')) != null
          ? r
          : '',
      i = ''.concat(t.message).concat(a.length > 0 ? ' - '.concat(a) : ''),
      o =
        t != null && t.networkStatusCode
          ? 'with status '.concat(t.networkStatusCode, ' => ').concat(i)
          : '=> '.concat(i);
    throw new Error('GraphQL mutation failed '.concat(o));
  }
  onResultError(t) {
    b.leaveBreadcrumb('GraphQL result error', t, 'error');
  }
  formatLanguage(t) {
    return t.includes('-') ? t.split('-')[0].toUpperCase() : t.toUpperCase();
  }
  parseCartResponse(t) {
    var n, r, a;
    const i = t.lines.edges.map((s) => {
        var l, c;
        const h = s.node;
        return {
          quantity: h.quantity,
          totalAmount: {
            amount: h.cost.totalAmount.amount,
            currencyCode: h.cost.totalAmount.currencyCode,
          },
          subtotalAmount: {
            amount: (l = h.cost.subtotalAmount) == null ? void 0 : l.amount,
            currencyCode:
              (c = h.cost.subtotalAmount) == null ? void 0 : c.currencyCode,
          },
          merchandise: { requiresShipping: h.merchandise.requiresShipping },
          discountAllocations: h.discountAllocations,
          sellingPlanAllocation: h.sellingPlanAllocation,
        };
      }),
      o = t.deliveryGroups.edges.map((s) => s.node);
    return {
      id: t.id,
      totalAmount: t.cost.totalAmount,
      subtotalAmount: (n = t.cost.subtotalAmount) != null ? n : void 0,
      totalTaxAmount: (r = t.cost.totalTaxAmount) != null ? r : void 0,
      totalDutyAmount: (a = t.cost.totalDutyAmount) != null ? a : void 0,
      discountAllocations: t.discountAllocations,
      discountCodes: t.discountCodes,
      lineItems: i,
      deliveryGroups: o,
      checkoutUrl: t.checkoutUrl,
    };
  }
  parseGraphQlErrors(t) {
    var n, r;
    return (r =
      (n = t == null ? void 0 : t.graphQLErrors) == null
        ? void 0
        : n.map((a) => a.message.replace(/\(Expected.*\)/, '').trim())) != null
      ? r
      : [];
  }
  parseMutationErrors(t, n) {
    var r, a, i;
    const o = this.parseGraphQlErrors(t.errors),
      s =
        ((i =
          (a = (r = t.data) == null ? void 0 : r[n]) == null
            ? void 0
            : a.errors) == null
          ? void 0
          : i
              .map((c) =>
                c.code === ee
                  ? { code: ee, message: c.message }
                  : c.field && c.field.length > 0
                  ? ''.concat(c.code, ': ').concat(c.field.join('.'))
                  : c.code
              )
              .filter((c) => c)) || [],
      l = [...o, ...s];
    return b.leaveBreadcrumb('GraphQL errors on mutation', l, 'error'), l;
  }
  parseMutationWarnings(t) {
    return !t || t.length === 0 ? [] : t.map((n) => n.code);
  }
  parseCompletionErrors(t) {
    var n, r, a, i;
    const o = this.parseGraphQlErrors(t.errors);
    let s = [];
    ((a =
      (r = (n = t.data) == null ? void 0 : n.cartSubmitForCompletion) == null
        ? void 0
        : r.result) == null
      ? void 0
      : a.__typename) === 'SubmitFailed' &&
      (s =
        (i = t.data.cartSubmitForCompletion.result.errors.map((c) => c.code)) !=
        null
          ? i
          : []);
    const l = [...o, ...s];
    return b.leaveBreadcrumb('GraphQL errors on completion', l, 'error'), l;
  }
}
function Nr({ instrumentName: e, startingCheckout: t }) {
  const n = {};
  return (
    e && (n['X-Wallet-Name'] = ''.concat(e)),
    t && (n['X-Start-Wallet-Checkout'] = ''.concat(t)),
    n
  );
}
async function En({
  cartId: e,
  cartClient: t,
  instrumentName: n,
  selectedDeliveryOptions: r,
  abortSignal: a,
}) {
  try {
    if (!e)
      throw new Error(
        '['.concat(n, '] provided no cart ID when updating shipping method')
      );
    if (!t)
      throw new Error(
        '['.concat(
          n,
          '] provided invalid cart client when updating shipping method'
        )
      );
    return await t.updateSelectedDeliveryOptions(e, r, n, a);
  } catch (i) {
    throw (f.updateFailed(n, 'updateSelectedDeliveryOptions'), i);
  }
}
async function vn({ cartId: e, token: t, cartClient: n, instrumentName: r }) {
  try {
    if (!e)
      throw new Error(
        '['.concat(r, '] provided no cart ID when submitting for completion')
      );
    if (!n)
      throw new Error(
        '['.concat(
          r,
          '] provided invalid cart client when submitting for completion'
        )
      );
    if (!t)
      throw new Error(
        '['.concat(r, '] provided no token when submitting for completion')
      );
    return await n.submitForCompletion(e, t, r);
  } catch (a) {
    throw (f.updateFailed(r, 'submitForCompletion'), a);
  }
}
function In({
  selectedDeliveryOptionHandles: e,
  deliveryGroups: t,
  instrumentName: n,
}) {
  return t.map((r) => {
    const a = r.deliveryOptions.filter((i) => e.includes(i.handle));
    if (!a.length)
      throw new Error(
        '['
          .concat(n, '] could not find delivery option for group: ')
          .concat(r.id)
      );
    if (a.length > 1)
      throw new Error(
        '['
          .concat(
            n,
            '] found multiple delivery options with selectedDeliverOptionHandle in group: '
          )
          .concat(r.id)
      );
    return { deliveryGroupId: r.id, deliveryOptionHandle: a[0].handle };
  });
}
async function Do(e) {
  const { cartClient: t, instrumentName: n } = e;
  try {
    if (!e.cartId)
      throw new Error(
        '['.concat(n, '] provided no cart ID when updating billing address')
      );
    if (!t)
      throw new Error(
        '['.concat(
          n,
          '] provided invalid cart client when updating billing address'
        )
      );
    return await t.updateCartBillingAddress(e);
  } catch (r) {
    throw (f.updateFailed(n, 'updateBillingAddress'), r);
  }
}
class No {
  constructor({
    accessToken: t,
    buyerCountry: n,
    buyerCurrency: r,
    button: a,
    i18n: i,
    merchantName: o,
    dataSource: s,
    apiClient: l,
    walletParams: c,
  }) {
    d(this, 'name', g.ApplePay),
      d(this, 'accessToken'),
      d(this, 'button'),
      d(this, 'buyerCountry'),
      d(this, 'cart'),
      d(this, 'apiClient'),
      d(this, 'dataSource'),
      d(this, 'i18n'),
      d(this, 'merchantName'),
      d(this, 'session'),
      d(this, 'paymentSheetActionGenerator'),
      d(this, 'cancelled'),
      d(this, 'buyerCurrency'),
      d(this, 'customerAccountEmail'),
      d(this, 'abortController', null),
      d(this, 'onvalidatemerchant', async (h) => {
        try {
          const p = new URL(h.validationURL),
            m = this.getMerchantSession(p),
            {
              cart: y,
              isOutOfStock: A,
              customValidationError: w,
            } = await at({
              element: this.button,
              instrumentName: this.name,
              dataSource: this.dataSource,
            });
          if (w) {
            this.abortAndShowValidationError(w.message);
            return;
          }
          this.cart = y;
          const N = await m;
          if (
            (b.leaveBreadcrumb(
              'ApplePay Session completeMerchantValidation',
              { session: N },
              'log'
            ),
            A)
          ) {
            this.abortAndShowOutOfStockError();
            return;
          }
          if (this.sessionIsCancelled()) return;
          this.session.completeMerchantValidation(N);
        } catch (p) {
          f.sheetClicked({ instrument: g.ApplePay, result: 'failed' }),
            this.terminateSession(p);
        }
      }),
      d(this, 'onshippingcontactselected', async (h) => {
        try {
          const p = Jt(h.shippingContact),
            m = await It({
              cartId: this.cart.id,
              streetAddress: p,
              cartClient: this.apiClient,
              instrumentName: this.name,
            });
          if (!m.data)
            throw new Error('Missing cart during Apple Pay Session creation');
          if (this.shouldDecelerate(m.data)) return;
          await this.applyPaymentSheetActions(
            m,
            (y) => this.completeShippingContactSelection(m.data, y),
            { shippingRequired: this.isShippingRequired }
          );
        } catch (p) {
          this.terminateSession(p);
        }
      }),
      d(this, 'onshippingmethodselected', async (h) => {
        var p;
        try {
          const m = h.shippingMethod.identifier.split(','),
            y = In({
              selectedDeliveryOptionHandles: m,
              deliveryGroups: this.cart.deliveryGroups,
              instrumentName: this.name,
            }),
            A = await En({
              cartId: this.cart.id,
              cartClient: this.apiClient,
              instrumentName: this.name,
              selectedDeliveryOptions: y,
              abortSignal:
                (p = this.abortController) == null ? void 0 : p.signal,
            });
          await this.applyPaymentSheetActions(A, () =>
            this.completeShippingMethodSelection(A.data)
          );
        } catch (m) {
          this.terminateSession(m);
        }
      }),
      d(this, 'onpaymentmethodselected', async (h) => {
        try {
          const { billingContact: p } = h.paymentMethod;
          if (!this.isShippingRequired && p) {
            const A = Jt(p),
              w = await It({
                cartId: this.cart.id,
                countryCode: A.country,
                cartClient: this.apiClient,
                instrumentName: this.name,
              });
            if (!w.data)
              throw new Error('Missing cart during Apple Pay Session creation');
            if (this.shouldDecelerate(w.data)) return;
            await this.applyPaymentSheetActions(w, () => (this.cart = w.data));
            const N = await Do({
              billingAddress: A,
              cartId: this.cart.id,
              cartClient: this.apiClient,
              instrumentName: this.name,
            });
            await this.applyPaymentSheetActions(N, () => (this.cart = N.data));
          }
          const { newTotal: m, newLineItems: y } = this.getNewTotalAndLineItems(
            this.cart
          );
          if (
            (b.leaveBreadcrumb(
              'ApplePay Session completePaymentMethodSelection',
              { newTotal: m, newLineItems: y },
              'log'
            ),
            this.sessionIsCancelled())
          )
            return;
          this.session.completePaymentMethodSelection({
            newTotal: m,
            newLineItems: y,
          });
        } catch (p) {
          this.terminateSession(p);
        }
      }),
      d(this, 'oncancel', () => {
        var h;
        (this.cancelled = !0),
          f.sheetCancelled(this.name),
          (this.button.disabled = !1),
          (h = this.abortController) == null || h.abort();
      }),
      d(this, 'onpaymentauthorized', async (h) => {
        f.authorizationAttempt(this.name),
          Kt(R.AuthorizationLatency, this.name);
        const p = (S) => {
            f.authorizationComplete({
              instrument: this.name,
              measurement: Z(R.AuthorizationLatency, this.name),
              result: 'failure',
            }),
              this.terminateSession(S);
          },
          m = async (S) => {
            var T, U;
            switch (
              ((T = S.effects) == null || T.forEach((L) => L()), S.action)
            ) {
              case 'complete': {
                const L = ApplePaySession.STATUS_SUCCESS;
                try {
                  await this.completePayment(L), ft(S.redirectUrl);
                } catch (Q) {
                  p(Q);
                }
                break;
              }
              case 'show_error': {
                const L = (U = S.errors) != null ? U : [];
                try {
                  await this.completePayment(ApplePaySession.STATUS_FAILURE, L);
                } catch (Q) {
                  p(Q);
                }
                break;
              }
              case 'abort': {
                try {
                  await this.completePayment(ApplePaySession.STATUS_FAILURE),
                    (this.button.disabled = !1);
                } catch (L) {
                  p(L);
                }
                break;
              }
              case 'decelerate': {
                try {
                  await this.completePayment(ApplePaySession.STATUS_FAILURE),
                    vt({
                      checkoutUrl: S.redirectUrl,
                      instrumentName: this.name,
                      reason: S.reason,
                    });
                } catch (L) {
                  p(L);
                }
                break;
              }
              default:
                p(
                  new Error(
                    '['
                      .concat(this.name, '] completion action not handled: ')
                      .concat(S.action)
                  )
                );
            }
          },
          { token: y, billingContact: A, shippingContact: w } = h.payment;
        let N = null,
          $ = null;
        try {
          if (!A) {
            await this.completePayment(ApplePaySession.STATUS_FAILURE);
            return;
          }
          if (
            ((N = Jt(
              P(_({}, A), { phoneNumber: w == null ? void 0 : w.phoneNumber })
            )),
            this.isShippingRequired)
          ) {
            if (!w) {
              await this.completePayment(ApplePaySession.STATUS_FAILURE);
              return;
            }
            $ = Jt(w);
          }
        } catch (S) {
          p(S);
          return;
        }
        const M = async () => {
            var S;
            try {
              const T = this.isShippingRequired
                  ? { validateAddress: !0, streetAddress: $ }
                  : {},
                U =
                  (S = this.customerAccountEmail) != null
                    ? S
                    : w == null
                    ? void 0
                    : w.emailAddress,
                L = await It(
                  _(
                    {
                      cartId: this.cart.id,
                      emailAddress: U,
                      cartClient: this.apiClient,
                      instrumentName: this.name,
                    },
                    T
                  )
                ),
                Q =
                  this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(
                    L
                  );
              await ve({
                paymentSheetAction: Q,
                onProceed: async (Qt) => {
                  Qt && Qt.length > 0
                    ? await this.completePayment(
                        ApplePaySession.STATUS_FAILURE,
                        Qt
                      )
                    : await Ot();
                },
                terminateSession: p,
              });
            } catch (T) {
              p(T);
            }
          },
          Ot = async () => {
            var S;
            try {
              const T = this.cart.lineItems.some(
                  (Q) => !!Q.sellingPlanAllocation
                ),
                U = await nr({
                  cartId: this.cart.id,
                  totalAmount: this.cart.totalAmount,
                  paymentMethod: {
                    walletPaymentMethod: {
                      applePayWalletContent: {
                        billingAddress: N,
                        data: y.paymentData.data,
                        header: y.paymentData.header,
                        lastDigits: y.paymentMethod.displayName.split(' ')[1],
                        signature: y.paymentData.signature,
                        version: y.paymentData.version,
                      },
                    },
                  },
                  canUsePaymentMethodForFreeOrder: !1,
                  billingAddress: N,
                  cartClient: this.apiClient,
                  instrumentName: this.name,
                  hasSellingPlan: T,
                  abortSignal:
                    (S = this.abortController) == null ? void 0 : S.signal,
                }),
                L =
                  this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(
                    U
                  );
              await ve({
                paymentSheetAction: L,
                onProceed: async (Q) => {
                  Q && Q.length > 0
                    ? await this.completePayment(
                        ApplePaySession.STATUS_FAILURE,
                        Q
                      )
                    : await Lt();
                },
                terminateSession: p,
              });
            } catch (T) {
              p(T);
            }
          },
          Lt = async () => {
            try {
              const S = await vn({
                  cartId: this.cart.id,
                  token: y.transactionIdentifier,
                  cartClient: this.apiClient,
                  instrumentName: this.name,
                }),
                T =
                  this.paymentSheetActionGenerator.mapCompletionResultToPaymentSheetAction(
                    S
                  );
              await m(T);
            } catch (S) {
              p(S);
            }
          };
        await M();
      }),
      d(this, 'terminateSession', (h) => {
        var p;
        (this.button.disabled = !1),
          h && b.notify(h),
          f.sheetFailed(this.name, h);
        try {
          b.leaveBreadcrumb('ApplePay Session abort', {}, 'log'),
            this.session.abort(),
            (p = this.abortController) == null || p.abort();
        } catch (m) {
          console.debug(
            '[DEBUG] InvalidAccessError occurred during Apple Pay terminateSession'
          );
        }
        if (h) {
          const m = this.i18n.translate('brand.apple_pay');
          K(m, this.i18n);
        }
      }),
      d(this, 'abortAndShowOutOfStockError', () => {
        var h;
        this.session.abort(),
          (h = this.abortController) == null || h.abort(),
          rt(this.i18n);
      }),
      d(this, 'abortAndShowValidationError', (h) => {
        var p;
        this.session.abort(),
          (p = this.abortController) == null || p.abort(),
          bt(this.i18n, h);
      }),
      d(this, 'getMostRecentNonNullCart', (h, p) =>
        h ? ((this.cart = h), h) : p
      ),
      d(this, 'handleNullCart', (h) => {
        if (!h)
          throw new Error(
            '['.concat(this.name, '] no cart returned on mutation, aborting')
          );
      }),
      d(this, 'completeShippingContactSelection', (h, p) => {
        try {
          const m = this.getMostRecentNonNullCart(h, this.cart),
            { newTotal: y, newLineItems: A } = this.getNewTotalAndLineItems(m),
            w = zi(m.deliveryGroups, this.i18n);
          b.leaveBreadcrumb(
            'ApplePay Session completeShippingContactSelection',
            { errors: p, newTotal: y, newLineItems: A, newShippingMethods: w },
            'log'
          ),
            this.session.completeShippingContactSelection({
              errors: p != null ? p : [],
              newTotal: y,
              newLineItems: A,
              newShippingMethods: w,
            });
        } catch (m) {
          this.terminateSession(m);
        }
      }),
      d(this, 'completeShippingMethodSelection', (h) => {
        try {
          this.handleNullCart(h), (this.cart = h);
          const { newTotal: p, newLineItems: m } =
            this.getNewTotalAndLineItems(h);
          b.leaveBreadcrumb(
            'ApplePay Session completeShippingContactSelection',
            { newTotal: p, newLineItems: m },
            'log'
          ),
            this.session.completeShippingMethodSelection({
              newTotal: p,
              newLineItems: m,
            });
        } catch (p) {
          this.terminateSession(p);
        }
      }),
      d(this, 'sessionIsCancelled', () => this.cancelled),
      (this.accessToken = t),
      (this.buyerCountry = n),
      (this.button = a),
      (this.cart = null),
      (this.apiClient = l),
      (this.dataSource = s),
      (this.i18n = i),
      (this.merchantName = o),
      (this.cancelled = !1),
      (this.buyerCurrency = r),
      (this.customerAccountEmail = c.customerAccountEmail),
      (this.session = new ApplePaySession(
        qr,
        Wi({
          shippingRequired: this.isShippingRequired,
          walletParams: c,
          buyerCurrency: r,
        })
      )),
      (this.session.onvalidatemerchant = this.onvalidatemerchant),
      (this.session.onshippingcontactselected = this.onshippingcontactselected),
      (this.session.onshippingmethodselected = this.onshippingmethodselected),
      (this.session.onpaymentmethodselected = this.onpaymentmethodselected),
      (this.session.oncancel = this.oncancel),
      (this.session.onpaymentauthorized = this.onpaymentauthorized),
      (this.paymentSheetActionGenerator = new ji(i));
  }
  begin() {
    b.leaveBreadcrumb('ApplePay Session begin', {}, 'log'),
      (this.abortController = ar()),
      this.session.begin();
  }
  async applyPaymentSheetActions(t, n, r) {
    var a;
    const i =
      this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(
        t,
        r
      );
    (a = i.effects) == null || a.forEach((o) => o()),
      !this.sessionIsCancelled() &&
        (await ve({
          paymentSheetAction: i,
          onProceed: n,
          terminateSession: this.terminateSession,
        }));
  }
  async getMerchantSession(t) {
    const n = await new be({
      accessToken: this.accessToken,
      country: this.buyerCountry,
      locale: this.i18n.locale,
      apiVersion: 'unstable',
    }).applePaySessionCreate(t);
    return JSON.parse(n);
  }
  async completePayment(t, n = void 0) {
    b.leaveBreadcrumb(
      'ApplePay Session completePayment',
      { status: t, errors: n },
      'log'
    ),
      this.session.completePayment({ status: t, errors: n }),
      f.authorizationComplete({
        instrument: this.name,
        measurement: Z(R.AuthorizationLatency, this.name),
        result: t === ApplePaySession.STATUS_SUCCESS ? 'success' : 'failure',
      });
  }
  getNewTotalAndLineItems(t) {
    return {
      newTotal: Gi(this.merchantName, t.totalAmount),
      newLineItems: Vi({
        subtotal: un(t),
        discountAllocations: Yi(t),
        deliveryGroups: t.deliveryGroups,
        duties: t.totalDutyAmount,
        taxes: t.totalTaxAmount,
        i18n: this.i18n,
        formattedRecurringTotals: Ki(this.cart.lineItems, this.i18n),
      }),
    };
  }
  shouldDecelerate(t) {
    const { checkoutUrl: n, totalAmount: r } = t;
    return Xe({ currentCartTotal: r, initialBuyerCurrency: this.buyerCurrency })
      ? (vt({
          checkoutUrl: n,
          instrumentName: this.name,
          reason: 'currency_changed',
        }),
        this.terminateSession(),
        !0)
      : !1;
  }
  get isShippingRequired() {
    return this.button.isShippingRequired;
  }
}
const To =
  '<svg viewBox="0 0 43 19" xmlns="http://www.w3.org/2000/svg" width="45px" style="width: 45px;">\n  <path d="M6.948 1.409C7.934.147 9.305.147 9.305.147s.193 1.18-.771 2.316c-1.05 1.2-2.228.993-2.228.993s-.236-.93.642-2.047zM3.82 3.663c-1.735 0-3.6 1.51-3.6 4.363 0 2.916 2.186 6.555 3.943 6.555.6 0 1.543-.6 2.485-.6.922 0 1.607.559 2.464.559 1.907 0 3.322-3.826 3.322-3.826s-2.015-.744-2.015-2.936c0-1.944 1.629-2.73 1.629-2.73s-.836-1.447-2.936-1.447c-1.22 0-2.164.661-2.656.661-.622.021-1.5-.6-2.636-.6zM19.64 1.426c2.453 0 4.188 1.788 4.188 4.396 0 2.608-1.755 4.417-4.248 4.417h-2.932v4.564h-1.974V1.426h4.966zm-2.992 7.067h2.473c1.695 0 2.693-.967 2.693-2.65 0-1.683-.978-2.671-2.693-2.671h-2.473v5.321zm7.559 3.429c0-1.767 1.296-2.777 3.65-2.945l2.572-.147v-.78c0-1.156-.738-1.787-1.994-1.787-1.037 0-1.795.568-1.955 1.43h-1.775c.06-1.788 1.656-3.092 3.79-3.092 2.333 0 3.829 1.304 3.829 3.281v6.9h-1.815v-1.684h-.04c-.519 1.094-1.715 1.788-3.012 1.788-1.934.021-3.25-1.178-3.25-2.965zm6.222-.905v-.778l-2.313.168c-1.297.084-1.975.59-1.975 1.494 0 .862.718 1.409 1.815 1.409 1.396-.021 2.473-.968 2.473-2.293zm3.969 7.383v-1.64c.14.041.438.041.598.041.897 0 1.416-.4 1.735-1.472l.14-.526L33.4 4.707h2.054l2.453 8.224h.04L40.4 4.707h1.994l-3.57 10.538c-.818 2.419-1.715 3.197-3.67 3.197-.14.02-.598-.021-.757-.042z"/>\n</svg>\n';
function ir({ translate: e, logoElement: t, setAriaHidden: n }) {
  const r = document.createElement('div');
  return (
    e('buy_with_button_content', { wallet: 'LOGO_PLACEHOLDER' })
      .split(new RegExp('(LOGO_PLACEHOLDER)'))
      .filter(Boolean)
      .forEach((a) => {
        let i;
        a === 'LOGO_PLACEHOLDER'
          ? (i = t)
          : ((i = document.createElement('span')),
            (i.innerText = a),
            n && i.setAttribute('aria-hidden', 'true')),
          r.appendChild(i);
      }),
    r
  );
}
var Pt;
class Ro extends wt {
  constructor() {
    super(),
      d(this, 'name', g.ApplePay),
      d(this, 'button', null),
      d(this, 'logoElement'),
      V(this, Pt),
      Y(this, Pt, this.attachShadow({ mode: 'closed' })),
      (this.logoElement = new DOMParser().parseFromString(
        To,
        'image/svg+xml'
      ).documentElement);
  }
  static get observedAttributes() {
    return ['disabled'];
  }
  get merchantName() {
    return this.walletParams.merchantName;
  }
  connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  attributeChangedCallback(t, n, r) {
    super.attributeChangedCallback(t, n, r, this.button);
  }
  async handleClick(t) {
    if (
      (t.preventDefault(),
      this.disabled ||
        !this.button ||
        this.button.hasAttribute('aria-disabled'))
    )
      return;
    this.disabled = !0;
    const [n, r, a] = await Promise.all([
      this.i18n,
      this.dataSource,
      this.apiClient,
    ]);
    let i;
    try {
      if (
        ((i = new No({
          accessToken: this.accessToken,
          buyerCountry: this.buyerCountry,
          buyerCurrency: this.buyerCurrency,
          button: this,
          i18n: n,
          merchantName: this.merchantName,
          dataSource: r,
          apiClient: a,
          walletParams: this.walletParams,
        })),
        !i)
      )
        throw new Error('missing ApplePaySession');
      i.begin(),
        f.sheetClicked({ instrument: this.name, result: 'success' }),
        nt(this.name);
    } catch (o) {
      b.notify(o),
        f.sheetClicked({ instrument: this.name, result: 'failed' }),
        i == null || i.terminateSession();
    }
  }
  async render() {
    var t;
    const { translate: n } = await this.i18n;
    if (!this.button) {
      if (
        ((this.button = he({
          label: n('buy_with_button_content', { wallet: n('brand.apple_pay') }),
        })),
        (this.button.onclick = (r) => this.handleClick(r)),
        this.button.classList.add(
          'apple-pay-button',
          ra[this.buttonTheme],
          yt.BUTTON
        ),
        this.isCTA)
      ) {
        const r = ir({
          translate: n,
          logoElement: this.logoElement,
          setAriaHidden: !0,
        });
        r.classList.add('apple-pay--content'), this.button.appendChild(r);
      } else this.button.appendChild(this.logoElement);
      this.initializeShadowStyles(E(this, Pt), Fi),
        E(this, Pt).appendChild(this.button),
        (t = this.onRendered) == null || t.call(this);
    }
    this.disabled &&
      (this.button.setAttribute('disabled', ''),
      this.button.setAttribute('aria-disabled', 'true'));
  }
}
Pt = new WeakMap();
function or(e) {
  return function (t, n, r) {
    const a = r.value;
    return (
      (r.value = function (...i) {
        const o = a.apply(this, i);
        return (
          o.eligible ||
            console.debug(
              '[DEBUG] '
                .concat(e, ' could not be rendered. Reason: ')
                .concat(o.reason)
            ),
          o
        );
      }),
      r
    );
  };
}
var ko = Object.defineProperty,
  Lo = Object.getOwnPropertyDescriptor,
  Pn = (e, t, n, r) => {
    for (var a = Lo(t, n), i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = o(t, n, a) || a);
    return a && ko(t, n, a), a;
  };
class sr extends it {
  constructor(t) {
    super(t),
      d(this, 'companyFieldRequired'),
      (this.companyFieldRequired = !!this.walletParams.companyRequired);
  }
  static walletName() {
    return 'apple_pay';
  }
  getWebComponentName() {
    return 'shopify-apple-pay-button';
  }
  getWebComponentClass() {
    return Ro;
  }
  getInstrumentName() {
    return g.ApplePay;
  }
  applePayInIframe() {
    return typeof window > 'u' || window.self !== window.top;
  }
  getLoadEligibility() {
    return this.applePayInIframe()
      ? { eligible: !1, reason: 'cannot be loaded in an iframe' }
      : { eligible: !0 };
  }
  getPartnerSDKEligibility() {
    var t, n, r, a;
    return typeof window > 'u' || window.ApplePaySession === void 0
      ? { eligible: !1, reason: 'window or ApplePaySession is undefined' }
      : (n = (t = window.ApplePaySession).supportsVersion) != null &&
        n.call(t, qr)
      ? (a = (r = window.ApplePaySession).canMakePayments) != null && a.call(r)
        ? { eligible: !0 }
        : { eligible: !1, reason: 'failed SDK eligibility check' }
      : {
          eligible: !1,
          reason: 'SDK does not meet minimum version requirement',
        };
  }
}
Pn([or('Apple Pay')], sr.prototype, 'getLoadEligibility'),
  Pn([or('Apple Pay')], sr.prototype, 'getPartnerSDKEligibility');
const Oo =
  '.buy-with-prime-button{width:100%;height:100%;padding:12px 10px 8px;display:flex;align-items:center;justify-content:center;gap:5px;opacity:1;border-width:0px}.buy-with-prime-button:hover:enabled{background-color:#0684eb!important}.buy-with-prime-button:focus{box-shadow:0 0 0 2px #1a98ff,inset 0 0 0 2px rgb(var(--color-background))!important;outline:none!important}.buy-with-prime-button:active,.buy-with-prime-button:hover:enabled:active{background-color:#0066cd!important;box-shadow:none!important}';
class ne extends Error {
  constructor() {
    super(...arguments), d(this, 'name', 'MissingAccessTokenError');
  }
}
class lr extends Error {
  constructor() {
    super(...arguments), d(this, 'name', 'FetchingWalletsPlatformConfigError');
  }
}
class Dn extends Error {
  constructor() {
    super(...arguments),
      d(this, 'name', 'EmptyLineItemsWalletsPlatformConfigError');
  }
}
async function Nn({
  configOptionsEndpoint: e,
  checkoutUrl: t,
  sourceId: n,
  accessToken: r,
  instrument: a,
}) {
  try {
    const i = JSON.stringify({
        checkout_url: t,
        checkout_cancel_url: window.location.href,
        cart_id: n,
      }),
      o = await fetch(e, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': r,
        },
        body: i,
      });
    if (o.ok) return o.json();
    const s = await o.json();
    throw s.error
      ? new Error(s.error)
      : new Error(
          'Could not fetch wallets platform configs: ['
            .concat(o.status, '] ')
            .concat(o.statusText)
        );
  } catch (i) {
    const { message: o } = i != null ? i : {};
    switch (o) {
      case 'empty_line_items':
        throw new Dn(
          '[Fetch Pay Config]['.concat(
            a,
            '] No eligible line items provided in the config request.'
          )
        );
      default:
        throw new lr('[Fetch Pay Config]['.concat(a, '] ').concat(o));
    }
  }
}
const xo = {
  [C.Checkout]: 'Checkout',
  [C.CartAjax]: 'Cart',
  [C.CartPage]: 'Cart',
  [C.ProductPage]: 'Product',
  [C.Unknown]: 'Product',
};
var jt;
const Ct = class Qs extends wt {
  constructor() {
    super(...arguments),
      d(this, 'name', g.BuyWithPrime),
      d(this, 'button', null),
      d(this, 'apiClientId', ''),
      V(this, jt, this.attachShadow({ mode: 'closed' }));
  }
  connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  async createButton() {
    const { translate: t } = await this.i18n,
      n = he({
        label: t('buy_with_button_content', {
          wallet: t('brand.buy_with_prime'),
        }),
      });
    return (
      (n.type = 'button'),
      (n.className = 'buy-with-prime-button'),
      this.applyEnabledStyles(n),
      n
    );
  }
  applyEnabledStyles(t) {
    (t.innerHTML = qt.primeLogo),
      (t.disabled = !1),
      mr(t, {
        'background-color': '#1A98FF',
        color: '#FFFFFF',
        cursor: 'pointer',
      });
  }
  applyDisabledStyles(t) {
    (t.innerHTML = qt.primeLogoDark),
      (t.disabled = !0),
      mr(t, {
        'background-color': '#C0E3FF',
        color: '#7292AC',
        cursor: 'not-allowed',
      });
  }
  async handleClick() {
    var t;
    if (!this.button) return;
    const [n, r] = await Promise.all([this.i18n, this.dataSource]);
    let a = [];
    try {
      this.applyDisabledStyles(this.button);
      let i = this.walletParams;
      if (
        ((this.apiClientId = this.apiClientId || i.appId || ''),
        !i.createCheckoutSessionConfig)
      ) {
        const {
          cart: o,
          isOutOfStock: s,
          customValidationError: l,
        } = await at({
          element: this,
          instrumentName: this.name,
          dataSource: r,
        });
        if (l) {
          bt(n, l.message);
          return;
        }
        if (s) {
          rt(n);
          return;
        }
        if (!this.accessToken)
          throw new ne(
            '[Fetch Pay Config] could not fetch pay configs since required accessToken is missing.'
          );
        i = _(
          {},
          await Nn({
            configOptionsEndpoint: Qs.OPTIMUS_CONFIG_REST_API_URL,
            checkoutUrl: o.checkoutUrl,
            sourceId: (t = ue(o)) != null ? t : '',
            accessToken: this.accessToken,
            instrument: this.name,
          })
        );
      }
      (i.placement = this.getPlacement()),
        (a = this.extractSKUs(i)),
        delete i.checkoutSupportsSplitCart,
        delete i.appId,
        window.amazon.buywithprime.initCheckout({ amazonPayOptions: i }),
        f.sheetClicked({
          instrument: this.name,
          result: 'success',
          webPixelMetaData: this.apiClientId
            ? {
                apiClientId: this.apiClientId,
                skus: a,
                pageType: this.pageType,
              }
            : void 0,
        }),
        nt(this.name);
    } catch (i) {
      const { name: o } = i != null ? i : {};
      Qs.EXPECTED_ERRORS.includes(o) || b.notify(i),
        f.sheetClicked({
          instrument: this.name,
          result: 'failed',
          webPixelMetaData: this.apiClientId
            ? {
                apiClientId: this.apiClientId,
                skus: a,
                pageType: this.pageType,
              }
            : void 0,
        });
      const { title: s, content: l } = this.getErrorCopies(o, n);
      et(s, l);
    } finally {
      this.applyEnabledStyles(this.button);
    }
  }
  getErrorCopies(t, n) {
    const r = n.translate('brand.buy_with_prime');
    switch (t) {
      case 'EmptyLineItemsWalletsPlatformConfigError':
        return {
          title: n.translate(
            'error_dialogs.wallet.buy_with_prime.empty_line_items.title'
          ),
          content: n.translate(
            'error_dialogs.wallet.buy_with_prime.empty_line_items.content'
          ),
        };
      default:
        return {
          title: n.translate('error_dialogs.wallet.title', { wallet: r }),
          content: n.translate('error_dialogs.wallet.generic_error', {
            wallet: r,
          }),
        };
    }
  }
  extractSKUs(t) {
    var n;
    return (n = t.createCheckoutSessionConfig) != null && n.payloadJSON
      ? JSON.parse(t.createCheckoutSessionConfig.payloadJSON)
          .cartDetails.lineItems.map((r) => r && r.sku)
          .filter((r) => r)
      : [];
  }
  getPlacement() {
    return (this.pageType && xo[this.pageType]) || 'Other';
  }
  async render() {
    var t;
    this.button ||
      ((this.button = await this.createButton()),
      (this.button.onclick = () => this.handleClick()),
      this.button.classList.add('buy-with-prime-button'),
      this.getPlacement().includes('Checkout') ||
        this.button.classList.add(yt.BUTTON),
      await this.initializeShadowStyles(E(this, jt), Oo),
      E(this, jt).appendChild(this.button),
      (t = this.onRendered) == null || t.call(this));
  }
};
(jt = new WeakMap()),
  d(
    Ct,
    'OPTIMUS_CONFIG_REST_API_URL',
    ''.concat(window.location.origin, '/wallets/config/optimus')
  ),
  d(Ct, 'EXPECTED_ERRORS', [lr.name, ne.name, Dn.name]);
let $e = Ct;
function Tn(e, t = 3, n = 1e3, r = () => !0) {
  const a = () =>
      new Promise((o) => {
        setTimeout(o, n);
      }),
    i = async (o) => {
      try {
        return await e();
      } catch (s) {
        if (o > 0 && r(s)) return await a(), i(o - 1);
        throw s;
      }
    };
  return i(t - 1);
}
async function Mo(e) {
  return new Promise((t, n) => {
    if (
      document.querySelector('script[src="'.concat(e, '"]')) &&
      window.amazon
    ) {
      t();
      return;
    }
    const r = document.createElement('script');
    (r.src = e),
      (r.onload = () => {
        window.amazon
          ? t()
          : n(new Error('Amazon SDK not present after loading'));
      }),
      (r.onerror = () => {
        n(new Yt('Error loading Amazon SDK'));
      }),
      document.head.append(r);
  });
}
async function Rn({ sdkUrl: e = We, maxRetries: t = 3 }) {
  return Tn(() => Mo(e), t, 200);
}
const j = class we extends it {
  static walletName() {
    return 'buy_with_prime';
  }
  constructor(t) {
    super(t);
  }
  getWebComponentName() {
    return 'shopify-buy-with-prime-button';
  }
  getInstrumentName() {
    return g.BuyWithPrime;
  }
  getWebComponentClass() {
    return $e;
  }
  async loadWalletSDK() {
    await Rn({ sdkUrl: we.SDK_URL, maxRetries: we.MAX_RETRIES }),
      await this.loadLogos();
  }
  async loadLogos() {
    await Promise.all([this.loadPrimeLogo(), this.loadPrimeLogoDark()]);
  }
  async loadPrimeLogo() {
    we.primeLogo = (await import('./prime-logo-DoVHKBSO.js')).default;
  }
  async loadPrimeLogoDark() {
    we.primeLogoDark = (await import('./prime-logo-dark-DJIA6J0w.js')).default;
  }
};
d(j, 'MAX_RETRIES', 3),
  d(j, 'SDK_URL', We),
  d(j, 'primeLogo'),
  d(j, 'primeLogoDark');
let qt = j;
const Fo =
    'shopify-amazon-pay-button div[role=button][slot=amazon-pay-slot][data-testid=amazon-pay-button]{border-radius:0!important}',
  Uo = [lr.name, ne.name],
  Tr = 'amazon-pay-slot';
var Dt;
const ie = class tl extends wt {
  constructor() {
    super(),
      d(this, 'name', g.AmazonPay),
      d(this, 'container', null),
      V(this, Dt),
      Y(this, Dt, this.attachShadow({ mode: 'closed' }));
  }
  connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  async handleClick(t) {
    var n;
    const [r, a] = await Promise.all([this.i18n, this.dataSource]);
    try {
      const {
        cart: i,
        isOutOfStock: o,
        customValidationError: s,
      } = await at({ element: this, instrumentName: this.name, dataSource: a });
      if (s) {
        bt(r, s.message);
        return;
      }
      if (o) {
        rt(r);
        return;
      }
      const {
        totalAmount: { amount: l },
        checkoutUrl: c,
      } = i;
      let h = this.walletParams;
      if (!h.createCheckoutSessionConfig) {
        if (!this.accessToken)
          throw new ne(
            '[Fetch Pay Config] could not fetch pay configs since required accessToken is missing.'
          );
        h = P(
          _(
            {},
            await Nn({
              configOptionsEndpoint: tl.CV2_CONFIG_REST_API_URL,
              checkoutUrl: c,
              sourceId: (n = ue(i)) != null ? n : '',
              accessToken: this.accessToken,
              instrument: this.name,
            })
          ),
          { placement: this.pageType === C.ProductPage ? 'Product' : 'Cart' }
        );
      }
      delete h.appId,
        t.initCheckout(
          _(
            _({}, h),
            Number(l) !== 0 && {
              estimatedOrderAmount: {
                amount: l,
                currencyCode: this.buyerCurrency,
              },
            }
          )
        ),
        f.sheetClicked({ instrument: this.name, result: 'success' }),
        nt(this.name);
    } catch (i) {
      const { name: o } = i != null ? i : {};
      Uo.includes(o) || b.notify(i),
        f.sheetClicked({ instrument: this.name, result: 'failed' });
      const s = r.translate('brand.amazon_pay');
      K(s, r);
    }
  }
  createContainer({ containerID: t, height: n }) {
    const r = document.createElement('div');
    return (
      (r.id = t),
      (r.style.display = 'flex'),
      n != null && (r.style.height = ''.concat(n, 'px')),
      (r.slot = Tr),
      r.setAttribute('data-testid', 'amazon-pay-button'),
      r
    );
  }
  async render() {
    var t;
    try {
      if (!this.container) {
        const n = document.createElement('slot');
        n.name = Tr;
        const r = document.createElement('style');
        (r.textContent = Fo),
          this.appendChild(r),
          await this.initializeShadowStyles(E(this, Dt));
        const a = await this.containerInstanceNumber,
          i = 'AcceleratedCheckoutAmazonPayButtonContainer'
            .concat(this.pageType)
            .concat(a),
          o = document.createElement('div');
        o.classList.add(yt.BUTTON),
          (o.style.overflow = 'hidden'),
          o.appendChild(n),
          E(this, Dt).appendChild(o);
        const s = Me(o);
        (this.container = this.createContainer({ containerID: i, height: s })),
          this.appendChild(this.container);
        const l = window.amazon.Pay.renderButton(
          '#'.concat(i),
          P(_({}, this.walletParams), {
            placement: this.pageType === C.ProductPage ? 'Product' : 'Cart',
          })
        );
        l == null || l.onClick(() => this.handleClick(l)),
          (t = this.onRendered) == null || t.call(this);
      }
    } catch (n) {
      b.notify(n);
    }
  }
};
(Dt = new WeakMap()),
  d(
    ie,
    'CV2_CONFIG_REST_API_URL',
    ''.concat(window.location.origin, '/wallets/config/amazon_pay')
  );
let He = ie;
const Et = class Xs extends it {
  static walletName() {
    return 'amazon_pay';
  }
  constructor(t) {
    super(t);
  }
  getWebComponentName() {
    return 'shopify-amazon-pay-button';
  }
  getInstrumentName() {
    return g.AmazonPay;
  }
  getWebComponentClass() {
    return He;
  }
  async loadWalletSDK() {
    await Rn({ sdkUrl: Xs.SDK_URL, maxRetries: Xs.MAX_RETRIES });
  }
};
d(Et, 'MAX_RETRIES', 3), d(Et, 'SDK_URL', We);
let Ge = Et;
var Pe = {
    Purple: {
      D0: '#4524DB',
      D1: '#30368D',
      D2: '#1C234C',
      L0: '#6445ED',
      L1: '#9C83F8',
      L2: '#EEEAFF',
      L3: '#F7F5FF',
      Primary: '#5433EB',
      PrimaryLight: '#DBD1FF',
    },
    Grayscale: {
      Black: '#000000',
      D0: '#666666',
      D1: '#404040',
      D2: '#121212',
      D3: '#0B0B0C',
      D2D: '#2A2A2A',
      PrimaryLight: '#707070',
      L1: '#A8A8A7',
      L2: '#CBCBCA',
      L2L: '#E3E3E3',
      L3: '#F0F0F0',
      L4: '#F2F4F5',
      White: '#FFFFFF',
    },
    Green: {
      D1: '#008552',
      D2: '#004839',
      L1: '#BAEBCB',
      L2: '#D2F2DE',
      L3: '#E4F6EB',
      Primary: '#92D08D',
    },
    Poppy: {
      D0: '#F05D38',
      D1: '#D92A0F',
      D2: '#832711',
      L1: '#FFD2C2',
      L2: '#FFECE9',
      Primary: '#FF967D',
    },
    Ochre: {
      D0: '#F8DB67',
      D1: '#E3BE2B',
      D2: '#C29D05',
      D4: '#443600',
      L1: '#FFF4CB',
      L2: '#FFF9E2',
      Primary: '#FFEC9F',
    },
    Brand: {
      Aqua: '#8DC0C6',
      Lime: '#C7DE00',
      Magenta: '#D354FF',
      Olive: '#8B8F01',
      Sage: '#D8E59D',
      Sand: '#F4F4ED',
      Violet: '#A327C2',
    },
  },
  Bo = {
    0: 0,
    none: 0,
    xxxs: 2,
    xxs: 4,
    xs: 8,
    'xs-s': 12,
    s: 16,
    gutter: 20,
    m: 24,
    l: 32,
    section: 36,
    xl: 40,
    xxl: 48,
    xxxl: 64,
    auto: 'auto',
  },
  $o = class extends HTMLElement {
    static get observedAttributes() {
      return ['disabled'];
    }
    constructor() {
      super(), this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
      this._updateButton();
    }
    attributeChangedCallback() {
      this._updateButton();
    }
    _updateButton() {
      var e;
      let t = this.shadowRoot;
      t &&
        ((t.innerHTML = Go),
        this.hasAttribute('disabled') &&
          ((e = this.shadowRoot.querySelector('button')) == null ||
            e.setAttribute('disabled', '')));
    }
  };
function Ho() {
  window.customElements &&
    (customElements.get('gravity-button') ||
      customElements.define('gravity-button', $o));
}
var Go =
  '\n<style>\n  * {\n    box-sizing: border-box;\n    border-width: 0;\n    border-style: solid;\n    border-color: currentColor;\n    --focused-box-shadow: 0 0 0 3px #DBD1FF, 0 0 #0000;\n  }\n\n  button {\n    text-transform: none;\n    -webkit-appearance: button;\n    background-color: transparent;\n    background-image: none;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    font-size: 100%;\n    font-weight: inherit;\n    line-height: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n  }\n\n  button:disabled {\n    cursor: default;\n    opacity: 0.5;\n  }\n\n  .gravity-button {\n    position: relative;\n    display: flex;\n    min-height: var(--gravity-button-min-height);\n    height: var(--gravity-button-height);\n    width: var(--gravity-button-width, 260px);\n    justify-content: center;\n    color: '
    .concat(
      Pe.Grayscale.White,
      ';\n    align-items: center;\n    overflow: visible;\n    padding: var(--gravity-button-padding, '
    )
    .concat(
      Bo.s,
      'px 10px);\n    border-radius: var(--gravity-button-border-radius);\n    border: none;\n    background-color: '
    )
    .concat(
      Pe.Purple.Primary,
      ';\n    transition: all;\n  }\n\n  .gravity-button:not([disabled]):focus-visible {\n    box-shadow: var(--focused-base-box-shadow, var(--focused-box-shadow));\n    outline: var(--focused-base-outline, 2px solid transparent);\n    outline-offset: var(--focused-base-outline-offset, 2px);\n  }\n\n  .gravity-button:not([disabled]):hover {\n    background-color: '
    )
    .concat(
      Pe.Purple.D0,
      ';\n  }\n</style>\n\n<button class="gravity-button">\n  <slot id="button-content"></slot>\n</button>\n'
    );
const Vo =
    '.button-content{display:flex;align-items:center;justify-content:center;width:100%;height:100%;gap:3px;white-space:nowrap;container-type:inline-size;container-name:bc}.ShopPromise>.separator{margin:0 8px}@container bc (width <= 338px){.ShopPromise{display:none!important}}gravity-button{display:block}',
  zo =
    '.accelerated-checkout-button{--gravity-button-height: clamp( 25px, var(--shopify-accelerated-checkout-button-block-size, 44px), 55px );--gravity-button-min-height: clamp( 25px, var(--shopify-accelerated-checkout-button-block-size, 44px), 55px );--gravity-button-border-radius: var( --shopify-accelerated-checkout-button-border-radius, 0px );--gravity-button-padding: 0px 10px;--gravity-button-width: 100%}:host([page-type="cart_page"]) .accelerated-checkout-button{--gravity-button-height: 100%;--gravity-button-min-height: 100%;--gravity-button-border-radius: var( --shopify-accelerated-checkout-button-border-radius, 4px );--gravity-button-width: 100%}';
class kn extends Error {
  constructor() {
    const t = 'DeliveryEstimatesResponseIsNullError';
    super('deliveryEstimates is null or undefined'), (this.name = t);
  }
}
class De extends Error {
  constructor() {
    const t = 'DeliveryPromiseAPIClientError';
    super('window.Shopify.ShopPromise.deliveryPromiseAPIClient is undefined'),
      (this.name = t);
  }
}
const qo = 15,
  jo = 200;
class Wo {
  constructor(t) {
    d(this, 'storefrontAPIToken'), (this.storefrontAPIToken = t);
  }
  async fetchDeliveryPromise({
    variant: t,
    postalCode: n,
    defaultPostalCode: r,
    sellingPlanId: a,
  }) {
    const i = await Tn(
      async () => this.fetchDeliveryOptions(t, n, r, a),
      qo,
      jo,
      (o) => o instanceof De
    ).catch((o) => {
      if (o instanceof De) throw o;
      return null;
    });
    if (!i) throw new kn();
    return i;
  }
  async fetchDeliveryOptions(t, n, r, a) {
    var i, o;
    const s = {
        variantId: t,
        sellingPlanId: a,
        postalCode: n || r,
        isPostalCodeOverride: !!n,
      },
      l =
        (o =
          (i = window == null ? void 0 : window.Shopify) == null
            ? void 0
            : i.ShopPromise) == null
          ? void 0
          : o.deliveryPromiseAPIClient;
    if (!l) throw new De();
    return l(s, this.storefrontAPIToken);
  }
}
function Yo(e, t) {
  switch (e) {
    case 0:
      return (
        (t == null ? void 0 : t.translate('shop_promise_delivery.same_day')) ||
        null
      );
    case 1:
      return (
        (t == null ? void 0 : t.translate('shop_promise_delivery.next_day')) ||
        null
      );
    case 2:
      return (
        (t == null ? void 0 : t.translate('shop_promise_delivery.two_day')) ||
        null
      );
    default:
      return null;
  }
}
const Ko = 'delivery_promise_default_address',
  Qo = 'delivery_promise_postal_code';
class Jo extends me {
  constructor() {
    super(...arguments),
      d(this, 'lastFetchedProductVariantId'),
      d(this, 'lastFetchSellingPlan'),
      d(this, 'fetching', !1),
      d(this, 'i18n', null),
      d(this, 'daysToDelivery'),
      d(this, 'formObserver', null);
  }
  async connectedCallback() {
    (this.formObserver = new tn(this, ({ variantId: t, sellingPlanId: n }) => {
      this.fetchDeliveryPromise(t, n);
    })),
      this.formObserver.setupMutationObservers();
  }
  setTranslations(t) {
    (this.i18n = t), this.render();
  }
  get postalCode() {
    try {
      return JSON.parse(Vt(Qo) || 'null') || null;
    } catch (t) {
      return null;
    }
  }
  get defaultDeliveryAddress() {
    try {
      return JSON.parse(Vt(Ko) || 'null');
    } catch (t) {
      return null;
    }
  }
  async fetchDeliveryPromise(t, n) {
    var r, a, i, o;
    if (
      !(!t || !this.accessToken) &&
      !(
        t === this.lastFetchedProductVariantId &&
        n === this.lastFetchSellingPlan
      )
    )
      try {
        (this.lastFetchedProductVariantId = t), (this.lastFetchSellingPlan = n);
        const s =
            ((r = this.defaultDeliveryAddress) == null ? void 0 : r.zip) || '',
          l = await new Wo(this.accessToken).fetchDeliveryPromise({
            variant: t,
            postalCode: this.postalCode || '',
            defaultPostalCode: s,
            sellingPlanId: n || '',
          }),
          c = rr(this),
          h =
            (i =
              (a = l == null ? void 0 : l.selectedShippingOption) == null
                ? void 0
                : a.brandedPromise) == null
              ? void 0
              : i.handle;
        if (
          (c == null ? void 0 : c.sellingPlanId) !== n ||
          (c == null ? void 0 : c.variantId) !== t ||
          h !== 'shop_promise'
        )
          return;
        (this.daysToDelivery =
          (o = l == null ? void 0 : l.selectedShippingOption) == null
            ? void 0
            : o.maxCalendarDaysToDelivery),
          this.render();
      } catch (s) {
        s instanceof kn && (this.daysToDelivery = null);
      }
  }
  render() {
    const t = Yo(this.daysToDelivery, this.i18n);
    this.classList.add('ShopPromise'),
      (this.innerHTML = t
        ? '<span class="separator">|</span><span>'.concat(t, '</span>')
        : '');
  }
}
var ut;
class Xo extends wt {
  constructor() {
    super(),
      d(this, 'name', g.ShopPay),
      d(this, 'button', null),
      d(this, 'shopPromiseProductPageContent', null),
      d(this, 'shopPromiseEligible', !1),
      V(this, ut),
      Y(this, ut, this.attachShadow({ mode: 'closed' }));
  }
  static get observedAttributes() {
    return ['disabled'];
  }
  connectedCallback() {
    (this.shopPromiseEligible = Yr()),
      this.cleanupOnFailure(async () => {
        Ho(), await this.render();
      }, this.name);
  }
  attributeChangedCallback(t, n, r) {
    super.attributeChangedCallback(t, n, r, this.button);
  }
  async addButtonContent() {
    if (!this.button) return;
    let t;
    const n = await this.i18n,
      r = new DOMParser().parseFromString(
        On.shopPayLogoElement,
        'image/svg+xml'
      ).documentElement;
    this.isCTA
      ? (t = ir({ translate: n.translate, logoElement: r, setAriaHidden: !1 }))
      : ((t = document.createElement('div')), t.appendChild(r)),
      t.classList.add('button-content'),
      this.shopPromiseEligible &&
        !this.shopPromiseProductPageContent &&
        ((this.shopPromiseProductPageContent = document.createElement(
          'shop-promise-product-page-content'
        )),
        this.shopPromiseProductPageContent.setTranslations(n),
        this.shopPromiseProductPageContent.setAttribute(
          'access-token',
          this.accessToken || ''
        ),
        t.appendChild(this.shopPromiseProductPageContent)),
      this.button.appendChild(t);
  }
  getShopPayBehavior() {
    return this.pageType === C.ProductPage
      ? 'force_shop_pay_product'
      : this.pageType === C.CartPage
      ? 'force_shop_pay_cart'
      : 'force_shop_pay';
  }
  async handleClick(t) {
    var n;
    if (
      (t.preventDefault(),
      this.disabled || !this.button || this.button.getAttribute('disabled'))
    )
      return;
    this.disabled = !0;
    const [r, a] = await Promise.all([this.i18n, this.dataSource]);
    try {
      const {
        isOutOfStock: i,
        cart: o,
        customValidationError: s,
      } = await at({ element: this, instrumentName: g.ShopPay, dataSource: a });
      if (
        (f.sheetClicked({
          instrument: this.name,
          checkoutToken: ue(o),
          result: 'success',
        }),
        s)
      ) {
        bt(r, s.message);
        return;
      }
      if (i) {
        rt(r);
        return;
      }
      nt(this.name),
        ft(
          (n = o == null ? void 0 : o.checkoutUrl) != null ? n : '',
          this.getShopPayBehavior()
        );
    } catch (i) {
      b.notify(
        new Zo(
          'An error occurred when attempting to create a cart using the Shop Pay Button. Details: '.concat(
            i
          )
        )
      ),
        f.sheetClicked({ instrument: this.name, result: 'failed' }),
        et(
          r.translate('error_dialogs.checkout.title'),
          r.translate('error_dialogs.checkout.generic_error')
        );
    }
  }
  async render() {
    if (E(this, ut).innerHTML) return;
    this.button || (this.button = document.createElement('gravity-button'));
    const t = document.createElement('style');
    (t.innerHTML = [en, zo, Vo].join('\n')),
      E(this, ut).appendChild(t),
      await this.addButtonContent(),
      this.disabled && this.button.setAttribute('disabled', ''),
      this.button.setAttribute('aria-hidden', 'true'),
      this.button.classList.add(yt.BUTTON),
      (this.button.onclick = (n) => this.handleClick(n)),
      E(this, ut).appendChild(this.button),
      this.onRendered();
  }
}
(ut = new WeakMap()), tt('shop-promise-product-page-content', Jo);
class Zo extends Error {
  constructor() {
    super(...arguments), d(this, 'name', 'ShopPayButtonError');
  }
}
var ts = Object.defineProperty,
  es = Object.getOwnPropertyDescriptor,
  rs = (e, t, n, r) => {
    for (var a = es(t, n), i = e.length - 1, o; i >= 0; i--)
      (o = e[i]) && (a = o(t, n, a) || a);
    return a && ts(t, n, a), a;
  },
  ht;
const Ln =
  ((ht = class extends it {
    static walletName() {
      return 'shop_pay';
    }
    constructor(e) {
      super(e);
    }
    getWebComponentName() {
      return 'shop-pay-wallet-button';
    }
    getWebComponentClass() {
      return Xo;
    }
    getInstrumentName() {
      return g.ShopPay;
    }
    async loadWalletSDK() {
      await this.loadLogo();
    }
    getLoadEligibility() {
      return { eligible: !0 };
    }
    async loadLogo() {
      ht.shopPayLogoElement = (
        await import('./shop-pay-logo-CYhOC7ye.js')
      ).default;
    }
  }),
  d(ht, 'shopPayLogoElement'),
  ht);
rs([or('Shop Pay')], Ln.prototype, 'getLoadEligibility');
let On = Ln;
const ns =
  '.button{display:flex;justify-content:center;align-items:center;width:100%;border:none}.button:hover:not(:disabled){filter:brightness(92%);cursor:pointer}.button:disabled{opacity:.5;cursor:not-allowed}.logo-only>svg{width:50px}.dark{background:#000;color:#fff}.dark svg{fill:#fff}.light{background:#fff;outline:1px solid #3c4043;color:#000}.light svg{fill:#0000008c}.content{display:flex;justify-content:center;align-items:center;white-space:pre}';
function Ne({ cart: e, i18n: t }) {
  const n = un(e),
    r = {
      label: t.translate('order_summary.subtotal'),
      type: 'SUBTOTAL',
      price: pt(n.amount),
    },
    a = ln({ deliveryGroups: e.deliveryGroups, i18n: t }).map((s) =>
      as({ lineItem: s, type: 'LINE_ITEM' })
    ),
    i = is(e, t),
    o = [r, ...a, ...i];
  if (e.totalDutyAmount) {
    const s = {
      label: t.translate('order_summary.duties'),
      type: 'LINE_ITEM',
      price: pt(e.totalDutyAmount.amount),
    };
    o.push(s);
  }
  if (e.totalTaxAmount) {
    const s = {
      label: t.translate('order_summary.taxes'),
      type: 'TAX',
      price: pt(e.totalTaxAmount.amount),
    };
    o.push(s);
  }
  return {
    totalPrice: e.totalAmount.amount,
    currencyCode: e.totalAmount.currencyCode,
    totalPriceStatus: 'ESTIMATED',
    totalPriceLabel: t.translate('order_summary.total'),
    displayItems: o,
  };
}
function as({ lineItem: e, type: t, status: n = 'FINAL' }) {
  return { label: e.label, type: t, price: e.amount, status: n };
}
function is(e, t) {
  return [
    ...e.lineItems.flatMap((n) => n.discountAllocations),
    ...e.discountAllocations,
  ].flatMap((n) => {
    var r;
    const a = (r = n.title) != null ? r : n.code;
    return {
      label: a != null ? a : t.translate('order_summary.discount'),
      type: 'LINE_ITEM',
      price: '-'.concat(pt(Number(n.discountedAmount.amount))),
    };
  });
}
const xn = ['PAYMENT_AUTHORIZATION'],
  os = xn.concat(['SHIPPING_ADDRESS', 'SHIPPING_OPTION']),
  ss = ['PAN_ONLY'];
function ls({
  walletParams: e,
  isShippingRequired: t,
  hasSellingPlan: n,
  i18n: r,
  buyerCurrency: a,
}) {
  const i = {
      totalPrice: '0.01',
      currencyCode: a,
      totalPriceStatus: 'ESTIMATED',
      totalPriceLabel: r.translate('order_summary.total'),
      displayItems: [
        {
          label: r.translate('order_summary.subtotal'),
          type: 'SUBTOTAL',
          price: '0.01',
        },
      ],
    },
    o = P(_({}, e.paymentData), {
      shippingAddressRequired: t,
      shippingOptionRequired: t,
      transactionInfo: i,
    });
  return (
    t || delete o.shippingAddressParameters,
    (o.callbackIntents = t ? os : xn),
    n && cs(o),
    o
  );
}
function cs(e) {
  e.allowedPaymentMethods.forEach((t) => {
    t.parameters.allowedAuthMethods = t.parameters.allowedAuthMethods.filter(
      (n) => ss.includes(n)
    );
  });
}
class ds extends dn {
  constructor(t) {
    super(),
      d(this, 'brandName'),
      d(this, 'completionResult'),
      (this.i18n = t),
      (this.brandName = this.i18n.translate('brand.google_pay')),
      (this.completionResult = void 0);
  }
  mapMutationResultToPaymentSheetAction(t) {
    const n = this.mapCustomValidationFunctionErrorToAction(t.errors);
    if (n) return n;
    const r = this.getErrorActions(),
      a = t.errors,
      i = this.getUnhandledErrors(a, r);
    i.forEach((s) => {
      b.notify(
        new cn(
          '['
            .concat(g.GooglePay, '] mutation result error not handled: ')
            .concat(s)
        )
      );
    });
    const { firstPaymentSheetAction: o } = this.getMergedPaymentSheetAction({
      result: t,
      errorActions: r,
    });
    return (
      o ||
      (i.length > 0 ? { action: 'abort' } : { action: 'update', errors: [] })
    );
  }
  mapCompletionResultToPaymentSheetAction(t) {
    if (!t.data)
      throw new Error(
        '['.concat(g.GooglePay, '] completion returned null result')
      );
    switch (((this.completionResult = t), t.data.__typename)) {
      case 'SubmitSuccess':
        return { action: 'complete', redirectUrl: t.data.redirectUrl };
      case 'SubmitAlreadyAccepted':
      case 'SubmitThrottled':
      case 'SubmitFailed': {
        const n = this.mapCustomValidationFunctionErrorToAction(t.errors);
        if (n) return n;
        const r = this.getErrorActions(),
          a = t.errors;
        this.getUnhandledErrors(a, r).forEach((o) => {
          b.notify(
            new Error(
              '['
                .concat(g.GooglePay, '] completion result error not handled: ')
                .concat(o)
            )
          );
        });
        const { prioritizedPaymentSheetAction: i } =
          this.getMergedPaymentSheetAction({ result: t, errorActions: r });
        return i || (K(this.brandName, this.i18n), { action: 'abort' });
      }
      default:
        throw new Error(
          '['
            .concat(g.GooglePay, '] unknown completion result type: ')
            .concat(t.data.__typename)
        );
    }
  }
  getErrorActions() {
    return [
      {
        errors: [u.CaptchaCompletionRequired],
        generateAction: () =>
          this.decelerateOrAbort({
            reason: 'captcha_required',
            instrumentName: g.GooglePay,
            errorOrWarning: u.CaptchaCompletionRequired,
            result: this.completionResult,
          }),
      },
      {
        errors: [u.InvalidLanguage],
        generateAction: () => ({
          action: 'abort',
          effects: [
            () => {
              b.notify(
                new Error(
                  '['.concat(
                    g.GooglePay,
                    '] mutation provided invalid language, aborting'
                  )
                )
              );
            },
            () => K(this.brandName, this.i18n),
          ],
        }),
      },
      {
        errors: [u.InvalidCountry],
        generateAction: () => ({
          action: 'abort',
          effects: [
            () => {
              b.notify(
                new Error(
                  '['.concat(
                    g.GooglePay,
                    '] mutation provided invalid country, aborting'
                  )
                )
              );
            },
            () => K(this.brandName, this.i18n),
          ],
        }),
      },
      {
        errors: [u.MissingCartId],
        generateAction: () => ({
          action: 'abort',
          effects: [
            () => {
              b.notify(
                new Error(
                  '['.concat(
                    g.GooglePay,
                    '] mutation provided invalid cart ID, aborting'
                  )
                )
              );
            },
            () => K(this.brandName, this.i18n),
          ],
        }),
      },
      {
        errors: [
          u.UnacceptablePaymentsAmount,
          u.NewTaxMustBeAccepted,
          u.MerchandiseExpectedPriceMismatch,
          u.DeliveryLineChanged,
          u.DeliveryLocalPickupLineChanged,
          ...Kr,
        ],
        generateAction: () => ({
          action: 'abort',
          effects: [() => K(this.brandName, this.i18n)],
        }),
      },
      {
        errors: [u.MerchandiseNotEnoughStock],
        generateAction: () =>
          this.decelerateOrAbort({
            reason: 'not_enough_stock',
            instrumentName: g.GooglePay,
            errorOrWarning: u.MerchandiseNotEnoughStock,
            result: this.completionResult,
          }),
      },
      {
        errors: Qr,
        generateAction: () =>
          this.decelerateOrAbort({
            reason: 'out_of_stock',
            instrumentName: g.GooglePay,
            errorOrWarning: u.MerchandiseOutOfStock,
            result: this.completionResult,
          }),
      },
      {
        errors: [
          u.DeliveryNoStrategyAvailable,
          u.DeliveryNoLocalPickupStrategyAvailable,
          u.DeliveryNotAvailable,
        ],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_UNSERVICEABLE',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.shipping_address'),
            },
          ],
        }),
      },
      {
        errors: [u.NoDeliveryGroupSelected],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_OPTION_INVALID',
              intent: 'SHIPPING_OPTION',
              message: this.i18n.translate('errors.missing.shipping_option'),
            },
          ],
        }),
      },
      {
        errors: [
          u.BuyerIdentityEmailDomainInvalid,
          u.BuyerIdentityEmailNotExpectedPattern,
          u.BuyerIdentityEmailInvalid,
        ],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'OTHER_ERROR',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.email'),
            },
          ],
        }),
      },
      {
        errors: [u.BuyerIdentityEmailRequired],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.missing.email'),
            },
          ],
        }),
      },
      {
        errors: [
          u.DeliveryAddress2Required,
          u.DeliveryAddress2AddressFieldRequired,
        ],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.missing.address2'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress2Invalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.address2'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryCityAddressFieldRequired, u.DeliveryCityRequired],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.missing.city'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryCityInvalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.city'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryZoneRequiredForCountry],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.missing.zone'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryZoneNotFound],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.zone'),
            },
          ],
        }),
      },
      {
        errors: [
          u.DeliveryPostalCodeRequired,
          u.DeliveryPostalCodeAddressFieldRequired,
        ],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.missing.postal_code'),
            },
          ],
        }),
      },
      {
        errors: [
          u.DeliveryPostalCodeInvalid,
          u.DeliveryInvalidPostalCodeForZone,
          u.DeliveryInvalidPostalCodeForCountry,
          u.DeliveryZipInvalidForCountry,
        ],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.postal_code'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryPhoneNumberRequired],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'OTHER_ERROR',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.missing.phone_number'),
            },
          ],
        }),
      },
      {
        errors: [
          u.DeliveryPhoneNumberInvalid,
          u.BuyerIdentityInvalidPhone,
          u.DeliveryPhoneDoesNotMatchExpectedPattern,
        ],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'OTHER_ERROR',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.phone_number'),
            },
          ],
        }),
      },
      {
        errors: [u.BuyerIdentityInvalidCountry, u.DeliveryCountryInvalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.country'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameRequired],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.missing.first_name'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameInvalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.first_name'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameRequired],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.missing.last_name'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameInvalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.last_name'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress1Required],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.missing.address1'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress1Invalid],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.invalid.address1'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.emojis.last_name'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryCityContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.emojis.city'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress1ContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.emojis.address1'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress2ContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.emojis.address2'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryPostalCodeContainsEmojis],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.emojis.postal_code'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress1TooLong],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.too_long.address1'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress2TooLong],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.too_long.address2'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameTooLong],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.too_long.first_name'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameTooLong],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.too_long.last_name'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryCityTooLong],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.too_long.city'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameContainsUrl],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.url.first_name'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameContainsUrl],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.url.last_name'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress1ContainsHtmlTags],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.html_tags.address1'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryAddress2ContainsHtmlTags],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.html_tags.address2'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryCityContainsHtmlTags],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.html_tags.city'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryFirstNameContainsHtmlTags],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.html_tags.first_name'),
            },
          ],
        }),
      },
      {
        errors: [u.DeliveryLastNameContainsHtmlTags],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'SHIPPING_ADDRESS_INVALID',
              intent: 'SHIPPING_ADDRESS',
              message: this.i18n.translate('errors.html_tags.last_name'),
            },
          ],
        }),
      },
      {
        errors: [u.InvalidPaymentGooglePayBillingAddress],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'PAYMENT_DATA_INVALID',
              intent: 'PAYMENT_METHOD',
              message: this.i18n.translate('errors.invalid.billing_address'),
            },
          ],
        }),
      },
      {
        errors: [u.UnsupportedGooglePayPaymentMethod],
        generateAction: () => ({
          action: 'show_error',
          errors: [
            {
              reason: 'PAYMENT_DATA_INVALID',
              intent: 'PAYMENT_METHOD',
              message: this.i18n.translate('errors.invalid.payment_method'),
            },
          ],
        }),
      },
    ];
  }
  mapCustomValidationFunctionErrorToAction(t) {
    const n = Qe(t);
    return n
      ? (b.notify(
          new Error(
            '['
              .concat(g.GooglePay, '] custom validation function error: ')
              .concat(t)
          )
        ),
        Je(
          this.i18n.translate('error_dialogs.wallet.title', {
            wallet: this.brandName,
          }),
          n.message
        ),
        {
          action: 'show_error',
          errors: [
            {
              reason: 'OTHER_ERROR',
              intent: 'PAYMENT_AUTHORIZATION',
              message: this.i18n.translate('paymentSheet.errors.unknown'),
            },
          ],
        })
      : null;
  }
}
function us({ deliveryGroups: e, i18n: t }) {
  var n;
  const r = on(sn(e), t),
    a = r.map((o) => ({
      id: o.handle,
      label: o.title || '',
      description: o.estimatedCost
        ? ''
            .concat(o.estimatedCost.amount.toString(), ' ')
            .concat(o.estimatedCost.currencyCode)
        : '',
    })),
    i =
      (n = r.find((o) => {
        var s;
        return o.handle.includes(
          ((s = e[0].selectedDeliveryOption) == null ? void 0 : s.handle) || ''
        );
      })) == null
        ? void 0
        : n.handle;
  return { shippingOptions: a, defaultSelectedOptionId: i };
}
function Te(e) {
  let t = e.administrativeArea,
    n = e.locality;
  e.countryCode === 'AE' &&
    ((n = e.administrativeArea),
    e.administrativeArea in Rr && (t = Rr[e.administrativeArea]));
  let r, a;
  if (e.name) {
    const [i, ...o] = (e.name || '').split(' ');
    o.length === 0 ? (a = i) : (a = o.join(' ')), (r = i);
  }
  return {
    firstName: r,
    lastName: a,
    address1: e.address1,
    address2: e.address2,
    city: n,
    province: t,
    country: e.countryCode,
    phone: e.phoneNumber,
    zip: e.postalCode,
  };
}
const Rr = {
    '\u0623\u0628\u0648 \u0638\u0628\u064A': 'AZ',
    '\u0625\u0645\u0627\u0631\u0629 \u0627\u0644\u0634\u0627\u0631\u0642\u0629\u0651':
      'SH',
    الفجيرة: 'FU',
    عجمان: 'AJ',
    '\u0631\u0623\u0633 \u0627\u0644\u062E\u064A\u0645\u0629': 'RK',
    '\u0623\u0645 \u0627\u0644\u0642\u064A\u0648\u064A\u0646': 'UQ',
    دبي: 'DU',
  },
  hs = 27e3;
class ps extends Error {
  constructor(t) {
    super(t), (this.name = 'GooglePayError');
  }
}
var Wt, W;
class ms {
  constructor({
    walletParams: t,
    isShippingRequired: n,
    hasSellingPlan: r,
    dataSource: a,
    button: i,
    i18n: o,
    cartClient: s,
    buyerCurrency: l,
    abortController: c,
  }) {
    d(this, 'name', g.GooglePay),
      d(this, 'walletParams'),
      d(this, 'cart', null),
      d(this, 'isShippingRequired'),
      d(this, 'hasSellingPlan'),
      d(this, 'dataSource'),
      d(this, 'button'),
      d(this, 'paymentsClient'),
      d(this, 'i18n'),
      d(this, 'actionGenerator'),
      d(this, 'cartClient'),
      d(this, 'initialBuyerCurrency'),
      d(this, 'customValidationError'),
      V(this, Wt),
      V(this, W),
      d(this, 'onPaymentDataChanged', async (p) => {
        var m;
        const {
            callbackTrigger: y,
            shippingAddress: A,
            shippingOptionData: w,
          } = p,
          { translate: N } = this.i18n;
        switch (y) {
          case 'INITIALIZE': {
            if (!this.cart)
              try {
                const { cart: $, customValidationError: M } = await at({
                  element: this.button,
                  instrumentName: g.GooglePay,
                  dataSource: this.dataSource,
                });
                if (M)
                  return (
                    (this.customValidationError = M),
                    this.showPaymentDataRequestError({
                      error: {
                        reason: 'OTHER_ERROR',
                        message: this.customValidationError.message,
                        intent: 'SHIPPING_ADDRESS',
                      },
                    })
                  );
                (this.cart = $),
                  f.sheetClicked({ instrument: this.name, result: 'success' });
              } catch ($) {
                return (
                  f.sheetClicked({ instrument: this.name, result: 'failed' }),
                  this.showPaymentDataRequestError({
                    intent: 'SHIPPING_ADDRESS',
                  })
                );
              }
            return A
              ? this.handleShippingAddressChange(this.cart.id, A)
              : {
                  newTransactionInfo: Ne({ cart: this.cart, i18n: this.i18n }),
                };
          }
          case 'SHIPPING_ADDRESS':
            return this.customValidationError
              ? this.showPaymentDataRequestError({
                  error: {
                    reason: 'OTHER_ERROR',
                    message: this.customValidationError.message,
                    intent: 'SHIPPING_ADDRESS',
                  },
                })
              : this.cart
              ? A
                ? this.handleShippingAddressChange(this.cart.id, A)
                : {
                    newTransactionInfo: Ne({
                      cart: this.cart,
                      i18n: this.i18n,
                    }),
                  }
              : this.showPaymentDataRequestError({ intent: y });
          case 'SHIPPING_OPTION': {
            if (!this.cart)
              return this.showPaymentDataRequestError({ intent: y });
            if (!w || !w.id)
              return {
                error: {
                  reason: 'SHIPPING_OPTION_INVALID',
                  message: N('shipping_methods.choose_delivery_strategy'),
                  intent: 'SHIPPING_OPTION',
                },
              };
            const $ = In({
                deliveryGroups: this.cart.deliveryGroups,
                instrumentName: g.GooglePay,
                selectedDeliveryOptionHandles: w.id.split(','),
              }),
              M = await En({
                cartClient: this.cartClient,
                cartId: this.cart.id,
                instrumentName: g.GooglePay,
                selectedDeliveryOptions: $,
                abortSignal: (m = E(this, W)) == null ? void 0 : m.signal,
              });
            return M.data
              ? ((this.cart = M.data),
                this.handlePaymentDataRequestUpdate({ result: M, intent: y }))
              : this.showPaymentDataRequestError({ intent: y });
          }
          default:
            return (
              this.logException(
                'Payment data changed callback returned unexpected intent: '.concat(
                  y
                ),
                { severity: 'warning' }
              ),
              this.showPaymentDataRequestError({ intent: 'SHIPPING_ADDRESS' })
            );
        }
      }),
      d(this, 'onPaymentAuthorized', async (p) => {
        var m, y, A;
        f.authorizationAttempt(this.name),
          Kt(R.AuthorizationLatency, this.name);
        const w =
            (m = p.paymentMethodData.info) == null ? void 0 : m.billingAddress,
          N = p.shippingAddress,
          {
            signature: $,
            signedMessage: M,
            protocolVersion: Ot,
          } = JSON.parse(p.paymentMethodData.tokenizationData.token);
        if (!w) return this.handlePaymentAuthorizationError();
        if (this.isShippingRequired && !N)
          return this.handlePaymentAuthorizationError();
        const Lt = async () => {
            var T, U;
            const L = (T = E(this, Wt)) != null ? T : p.email,
              Q = this.isShippingRequired
                ? { validateAddress: !0, streetAddress: Te(N) }
                : {};
            return await It(
              _(
                {
                  cartClient: this.cartClient,
                  cartId: this.cart.id,
                  instrumentName: this.name,
                  emailAddress: L,
                  abortSignal: (U = E(this, W)) == null ? void 0 : U.signal,
                },
                Q
              )
            );
          },
          S = async () => {
            var T;
            const U = Te(w);
            return await nr({
              cartId: this.cart.id,
              totalAmount: this.cart.totalAmount,
              paymentMethod: {
                walletPaymentMethod: {
                  googlePayWalletContent: {
                    billingAddress: U,
                    signature: $,
                    signedMessage: M,
                    protocolVersion: Ot,
                  },
                },
              },
              canUsePaymentMethodForFreeOrder: !1,
              billingAddress: U,
              cartClient: this.cartClient,
              instrumentName: this.name,
              hasSellingPlan: this.hasSellingPlan,
              abortSignal: (T = E(this, W)) == null ? void 0 : T.signal,
            });
          };
        try {
          const T = setTimeout(() => {
              var Zs;
              (Zs = E(this, W)) == null || Zs.abort('Google Pay Timeout');
            }, hs),
            U = await Lt(),
            L = this.handleIntermediatePaymentAuthorizationResult(U);
          if (L) return L;
          const Q = await S(),
            Qt = this.handleIntermediatePaymentAuthorizationResult(Q);
          if (Qt) return Qt;
          if (
            (clearTimeout(T),
            (A = (y = E(this, W)) == null ? void 0 : y.signal) != null &&
              A.aborted)
          )
            return this.handlePaymentAuthorizationError();
          const al = await vn({
              cartId: this.cart.id,
              token: $,
              cartClient: this.cartClient,
              instrumentName: this.name,
            }),
            il =
              this.actionGenerator.mapCompletionResultToPaymentSheetAction(al);
          return this.handlePaymentAuthorizationResult(il);
        } catch (T) {
          const { message: U } = T;
          return this.logException(U), this.handlePaymentAuthorizationError();
        }
      }),
      d(this, 'handlePaymentAuthorizationResult', async (p) => {
        var m, y;
        switch (((m = p.effects) == null || m.forEach((A) => A()), p.action)) {
          case 'complete':
            return (
              this.emitAuthorizationCompleteMetric('success'),
              ft(p.redirectUrl),
              { transactionState: 'SUCCESS' }
            );
          case 'show_error':
            return this.handlePaymentAuthorizationError({
              error: (y = p.errors) == null ? void 0 : y[0],
            });
          case 'decelerate':
            return (
              vt({
                checkoutUrl: p.redirectUrl,
                instrumentName: this.name,
                reason: p.reason,
              }),
              this.emitAuthorizationCompleteMetric('failure'),
              { transactionState: 'SUCCESS' }
            );
          case 'abort':
          default:
            return (
              this.emitAuthorizationCompleteMetric('failure'),
              { transactionState: 'SUCCESS' }
            );
        }
      }),
      (this.walletParams = t),
      (this.isShippingRequired = n),
      (this.hasSellingPlan = r),
      (this.dataSource = a),
      (this.button = i),
      (this.i18n = o),
      (this.cartClient = s),
      (this.initialBuyerCurrency = l),
      Y(this, Wt, t.customerAccountEmail),
      Y(this, W, c);
    const h = {
      environment: this.walletParams.environment,
      merchantInfo: this.walletParams.paymentData.merchantInfo,
      paymentDataCallbacks: {
        onPaymentDataChanged: this.isShippingRequired
          ? this.onPaymentDataChanged
          : void 0,
        onPaymentAuthorized: this.onPaymentAuthorized,
      },
    };
    (this.paymentsClient = new window.google.payments.api.PaymentsClient(h)),
      (this.actionGenerator = new ds(this.i18n));
  }
  async handleClick() {
    if (!this.isShippingRequired)
      throw new Yt('Google Pay checkout started for digital cart');
    const t = ls({
      walletParams: this.walletParams,
      isShippingRequired: this.isShippingRequired,
      hasSellingPlan: this.hasSellingPlan,
      i18n: this.i18n,
      buyerCurrency: this.initialBuyerCurrency,
    });
    await this.paymentsClient.loadPaymentData(t);
  }
  showPaymentDataRequestError({
    error: t,
    intent: n = 'SHIPPING_ADDRESS',
  } = {}) {
    return t
      ? { error: t }
      : {
          error: {
            intent: n,
            reason: 'OTHER_ERROR',
            message: this.i18n.translate('error_dialogs.wallet.generic_error', {
              wallet: this.i18n.translate('brand.google_pay'),
            }),
          },
        };
  }
  handlePaymentAuthorizationError({ error: t } = {}) {
    return (
      this.emitAuthorizationCompleteMetric('failure'),
      _(
        { transactionState: 'ERROR' },
        this.showPaymentDataRequestError({
          error: t,
          intent: 'PAYMENT_AUTHORIZATION',
        })
      )
    );
  }
  handlePaymentDataRequestUpdate({ result: t, intent: n }) {
    var r, a;
    const i = this.actionGenerator.mapMutationResultToPaymentSheetAction(t);
    switch (i.action) {
      case 'update': {
        const o = i,
          { data: s } = t;
        if (!s) return this.showPaymentDataRequestError({ intent: n });
        const { checkoutUrl: l, lineItems: c } = s;
        return Le(c)
          ? (vt({
              checkoutUrl: l,
              instrumentName: this.name,
              reason: 'out_of_stock',
            }),
            this.showPaymentDataRequestError({
              error: { reason: 'OTHER_ERROR', message: '', intent: 'OFFER' },
            }))
          : this.isShippingRequired && s.deliveryGroups.length === 0
          ? this.showPaymentDataRequestError({
              error: {
                reason: 'SHIPPING_ADDRESS_INVALID',
                message: this.i18n.translate('errors.address_unserviceable', {
                  shopName:
                    this.walletParams.paymentData.merchantInfo.merchantName,
                }),
                intent: 'SHIPPING_ADDRESS',
              },
            })
          : {
              newTransactionInfo: Ne({ cart: s, i18n: this.i18n }),
              newShippingOptionParameters: this.isShippingRequired
                ? us({ deliveryGroups: s.deliveryGroups, i18n: this.i18n })
                : void 0,
              error: (r = o.errors) == null ? void 0 : r[0],
            };
      }
      case 'show_error':
        return { error: (a = i.errors) == null ? void 0 : a[0] };
      case 'abort':
        return this.showPaymentDataRequestError({ intent: n });
      default:
        return (
          this.logException(
            'Payment sheet update returned unexpected action (see request tab for details)',
            { metadata: { request: { action: i.action, intent: n } } }
          ),
          this.showPaymentDataRequestError({ intent: n })
        );
    }
  }
  handleIntermediatePaymentAuthorizationResult(t) {
    var n, r, a, i;
    if (Le((r = (n = t.data) == null ? void 0 : n.lineItems) != null ? r : []))
      return rt(this.i18n), { transactionState: 'SUCCESS' };
    const o = this.actionGenerator.mapMutationResultToPaymentSheetAction(t);
    if (((a = t.errors) == null ? void 0 : a.length) > 0) {
      const s = o;
      if (s.action === 'show_error')
        return this.handlePaymentAuthorizationError({
          error: (i = s.errors) == null ? void 0 : i[0],
        });
    }
  }
  handleCurrencyChange(t, n) {
    Xe({
      currentCartTotal: n,
      initialBuyerCurrency: this.initialBuyerCurrency,
    }) &&
      vt({
        checkoutUrl: t,
        instrumentName: this.name,
        reason: 'currency_changed',
      });
  }
  async handleShippingAddressChange(t, n) {
    var r;
    const a = await It({
      cartClient: this.cartClient,
      cartId: t,
      streetAddress: n ? Te(n) : {},
      instrumentName: g.GooglePay,
      abortSignal: (r = E(this, W)) == null ? void 0 : r.signal,
    });
    return a.data
      ? ((this.cart = a.data),
        this.handleCurrencyChange(this.cart.checkoutUrl, this.cart.totalAmount),
        this.handlePaymentDataRequestUpdate({
          result: a,
          intent: 'SHIPPING_ADDRESS',
        }))
      : this.showPaymentDataRequestError({ intent: 'SHIPPING_ADDRESS' });
  }
  logException(t, { severity: n, metadata: r } = {}) {
    b.notify(new ps(t), { severity: n != null ? n : 'error', metadata: r });
  }
  emitAuthorizationCompleteMetric(t) {
    f.authorizationComplete({
      instrument: this.name,
      measurement: Z(R.AuthorizationLatency, this.name),
      result: t,
    });
  }
}
(Wt = new WeakMap()), (W = new WeakMap());
const ys =
    '<svg viewBox="0 0 41 17" xmlns="http://www.w3.org/2000/svg" width="45px">\n  <path\n    d="M19.526 2.635v4.083h2.518q.9 0 1.488-.605.605-.604.605-1.437 0-.816-.605-1.422-.588-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99q1.519 0 2.582 1.012 1.08 1.013 1.08 2.466 0 1.487-1.08 2.482-1.046.997-2.583.996zm7.668 2.287q0 .587.499.98.498.39 1.168.391.949 0 1.692-.701.745-.703.744-1.65-.704-.555-1.962-.555-.916 0-1.528.442-.613.44-.613 1.093m1.946-5.815q1.668 0 2.633.89.964.891.964 2.442v4.932h-1.439v-1.11h-.065q-.933 1.372-2.486 1.372-1.323 0-2.215-.784t-.891-1.96q0-1.242.94-1.976c.94-.734 1.463-.735 2.51-.735q1.34 0 2.206.49v-.344q0-.784-.621-1.33a2.13 2.13 0 0 0-1.455-.547q-1.26 0-1.995 1.062l-1.324-.834q1.095-1.568 3.238-1.568m11.853.262-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"\n  />\n  <path\n    d="M13.448 7.134q-.001-.71-.116-1.366H6.988v2.588h3.634a3.1 3.1 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"\n    style="fill: #4285f4"\n  />\n  <path\n    d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.73 6.73 0 0 0 6.01 3.703"\n    style="fill: #34a853"\n  />\n  <path\n    d="M3.212 8.267a4.03 4.03 0 0 1 0-2.572V3.964H.978A6.7 6.7 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017z"\n    style="fill: #fbbc05"\n  />\n  <path\n    d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.73 6.73 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"\n    style="fill: #ea4335"\n  />\n</svg>\n',
  gs = { LIGHT: 'light', DARK: 'dark' };
var Nt;
class fs extends wt {
  constructor() {
    super(),
      d(this, 'name', g.GooglePay),
      d(this, 'paymentsClient', null),
      d(this, 'button', null),
      V(this, Nt),
      d(this, 'handleClick', async () => {
        if (this.disabled) return;
        this.disabled = !0;
        const t = ar();
        try {
          await this.createPaymentsClient(t),
            await this.paymentsClient.handleClick(),
            nt(this.name);
        } catch (n) {
          if (((this.disabled = !1), n.statusCode === 'CANCELED')) {
            t == null || t.abort('Payment sheet cancelled'),
              f.sheetCancelled(g.GooglePay);
            return;
          }
          t == null || t.abort('Payment sheet failure'),
            b.notify(n),
            f.sheetClicked({ instrument: this.name, result: 'failed' });
          const r = await this.i18n,
            a = r.translate('brand.google_pay');
          K(a, r);
        }
      }),
      Y(this, Nt, this.attachShadow({ mode: 'closed' }));
  }
  static get observedAttributes() {
    return ['disabled'];
  }
  attributeChangedCallback(t, n, r) {
    super.attributeChangedCallback(t, n, r, this.button);
  }
  async connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  async createPaymentsClient(t) {
    this.paymentsClient = new ms({
      walletParams: this.walletParams,
      isShippingRequired: this.isShippingRequired,
      hasSellingPlan: this.hasSellingPlan,
      dataSource: await this.dataSource,
      button: this,
      cartClient: await this.apiClient,
      i18n: await this.i18n,
      buyerCurrency: this.buyerCurrency,
      abortController: t,
    });
  }
  async render() {
    if (this.button) return;
    await this.initializeShadowStyles(E(this, Nt), ns);
    const { translate: t } = await this.i18n,
      n = he({
        label: t('buy_with_button_content', { wallet: t('brand.google_pay') }),
      });
    this.disabled && n.setAttribute('disabled', ''),
      n.classList.add('button', yt.BUTTON, gs[this.buttonTheme]),
      (n.onclick = this.handleClick),
      await this.renderButtonContent(n, t),
      (this.button = n),
      E(this, Nt).appendChild(n),
      this.onRendered();
  }
  async renderButtonContent(t, n) {
    const r = new DOMParser().parseFromString(
      ys,
      'image/svg+xml'
    ).documentElement;
    if (((t.style.font = window.getComputedStyle(this).font), this.isCTA)) {
      const a = ir({ translate: n, logoElement: r, setAriaHidden: !0 });
      a.classList.add('content'), t.appendChild(a);
    } else t.classList.add('logo-only'), t.appendChild(r);
  }
}
Nt = new WeakMap();
const ct = class Ks extends it {
  static walletName() {
    return 'google_pay';
  }
  constructor(t) {
    super(t);
  }
  getWebComponentName() {
    return 'shopify-google-pay-button';
  }
  getInstrumentName() {
    return g.GooglePay;
  }
  getWebComponentClass() {
    return fs;
  }
  async loadWalletSDK() {
    if (Ks.googlePaySDKPromise) return Ks.googlePaySDKPromise;
    const t = document.createElement('script');
    return (
      t.setAttribute('src', this.walletParams.sdkUrl),
      (Ks.googlePaySDKPromise = new Promise((n, r) => {
        (t.onload = () => n()),
          (t.onerror = (a) => {
            document.body.removeChild(t), r(a);
          }),
          document.body.appendChild(t);
      })),
      Ks.googlePaySDKPromise
    );
  }
  getLoadEligibility() {
    const t = this.walletParams.expiresAt * 1e3;
    return $t() <= t
      ? { eligible: !0 }
      : { eligible: !1, reason: 'authJwtExpired' };
  }
  getPartnerSDKEligibility() {
    return { eligible: !0 };
  }
};
d(ct, 'googlePaySDKPromise');
let Ve = ct;
const bs = [Li, Fe, sr, Ve, qt, Ge, On],
  ws = new Map(bs.map((e) => [e.walletName(), (t) => new e(t)]));
function ae(e) {
  const t = ws.get(e.name);
  return t
    ? t(e)
    : (console.debug("Can't build wallet with name ".concat(e.name)), null);
}
function _s(e) {
  return e.map((t) => ae(t)).filter((t) => t != null);
}
const Mn =
  '*{box-sizing:border-box}.wallet-button-fade-in{animation:animation-fade-in .3s cubic-bezier(.1,.79,1,1)}@keyframes animation-fade-in{0%{opacity:0}to{opacity:1}}button[aria-disabled=true]{opacity:.5;cursor:not-allowed}';
class As {
  constructor(t, n, r) {
    (this.element = t), (this.apiClient = n), (this.instrumentName = r);
  }
  async getInitialCart(t) {
    const n = rr(this.element);
    if (!n)
      throw new Error(
        '['.concat(this.instrumentName, '] unable to find product form')
      );
    const r = Vt(ia),
      {
        data: a,
        errors: i,
        warnings: o,
      } = await this.apiClient.createCart(
        P(_({}, n), { discountCodes: r ? [r] : [], instrumentName: t })
      );
    return { cart: a, errors: i, warnings: o };
  }
}
function Ss({ instanceNumber: e, styleId: t, styles: n, cssFileName: r }) {
  var a, i;
  e === 1 &&
    (i = (a = window.Shopify) == null ? void 0 : a.PaymentButton) != null &&
    i.isStorefrontPortableWallets &&
    (Cs({ styleId: t, styles: n, cssFileName: r }) ||
      Es({ styleId: t, styles: n }));
}
function Cs({ styleId: e, styles: t, cssFileName: n }) {
  return !!document.querySelector('style#'.concat(e));
}
function Es({ styleId: e, styles: t }) {
  const n = document.createElement('style');
  (n.id = e), (n.innerHTML = t), document.head.appendChild(n);
}
const G = {
  buttonBlockSize: '--shopify-accelerated-checkout-button-block-size',
  buttonBorderRadius: '--shopify-accelerated-checkout-button-border-radius',
  buttonBoxShadow: '--shopify-accelerated-checkout-button-box-shadow',
  inlineAlignment: '--shopify-accelerated-checkout-inline-alignment',
};
function kr(e) {
  let t = 0,
    n = 0,
    r = 0;
  const a = e.split(/\s+/);
  for (let i = 0; i < a.length; i++) {
    const o = a[i];
    o !== '>' &&
      (o.includes('#') && (t += (o.match(/#/g) || []).length),
      o.includes('.') && (n += (o.match(/\./g) || []).length),
      o.includes('[') && (n += (o.match(/\[/g) || []).length),
      o.includes(':') && (n += (o.match(/:[^:]/g) || []).length),
      /^[A-Za-z]/.test(o) && (r += 1));
  }
  return [t, n, r];
}
function vs(e, t) {
  for (let n = 0; n < 3; n++) if (e[n] !== t[n]) return t[n] - e[n];
  return 0;
}
function Lr(e) {
  return [...e].sort((t, n) => {
    const r = kr(t.selector),
      a = kr(n.selector);
    return vs(r, a);
  });
}
const Is =
    /\.cart__dynamic-checkout-buttons|\.dynamic-checkout-buttons\s*(>\s*)?li(?![a-zA-Z0-9_.:#-])/,
  Ps =
    /\.cart__dynamic-checkout-buttons|\.dynamic-checkout-buttons\s*\[role="?button"?\](?![:\w-])/,
  Ds =
    /\.additional-checkout-buttons\s*(?:div\s*)?\[role="?button"?\](?![:\w-])/,
  Fn = /\[data-shopify-buttoncontainer\](?![:\w-])/,
  Un = /.dynamic-checkout-buttons .shopify-payment-button__button/,
  Ns =
    /(?!.*\.shopify-cleanslate)\.shopify-payment-button__button(?:--branded)?(?![\w-:.#>])/,
  Ts =
    /\.(shopify-payment-button|shopify-payment-button__button|shopify-payment-button__button--branded)\s*\[role="?button"?\](?![:\w-])/,
  Rs =
    /(?:only\s+)?(?:screen\s+and\s+)?\((?:min|max)-(?:width|height):\s*\d+px\)/,
  ks = [Ps, Fn, Is, Ds, Un],
  Ls = [Ns, Ts, Un];
function Bn(e) {
  const t = e.pageType,
    n = [...document.styleSheets].filter(Os),
    r = [],
    a = [];
  n.forEach((S) => {
    try {
      const T = [...S.cssRules].filter((L) => L instanceof CSSMediaRule),
        U = [...S.cssRules].filter((L) => L instanceof CSSStyleRule);
      a.push(
        ...T.filter((L) => Rs.test(L.conditionText)).flatMap((L) =>
          [...L.cssRules]
            .filter((Q) => Q instanceof CSSStyleRule)
            .flatMap((Q) =>
              Q.selectorText
                .split(',')
                .map((Qt) => Qt.trim())
                .map((Qt) =>
                  _({ selector: Qt, conditionText: L.conditionText }, Ur(Q))
                )
            )
        )
      ),
        r.push(
          ...U.flatMap((L) =>
            L.selectorText
              .split(',')
              .map((Q) => Q.trim())
              .map((Q) => _({ selector: Q }, Ur(L)))
          )
        );
    } catch (T) {
      re()('shopify-support-debug') &&
        (console.debug(
          '[shopify-support-debug] stylesheet origin: '.concat(S.href)
        ),
        console.debug(T));
    }
  });
  const i = t === C.ProductPage ? Ls : ks,
    o = new Set();
  function s(S, T) {
    const U = T.selector.match(S);
    return U ? (o.add(U[0]), !0) : !1;
  }
  const l = r.filter((S) => i.some((T) => s(T, S))).reverse(),
    c = a.filter((S) => i.some((T) => s(T, S))).reverse(),
    h = re()('shopify-support-debug');
  h && console.table(Array.from(o));
  const p = Lr(l),
    m = Lr(c),
    y = {},
    A = Or(t)
      ? document.querySelector('.cart__blocks .button')
      : document.querySelector('.product-form__buttons .button');
  A && (y.boxShadow = getComputedStyle(A, ':before').boxShadow);
  for (const S of p) {
    const T = ['height', 'minHeight', 'borderRadius', 'marginTop'];
    Or(t) && S.selector.match(Fn) && T.push('justifyContent');
    for (const U of T)
      y[U] = Fs({ rule: S, property: U, currentPropertyValue: y[U] });
  }
  const {
    height: w,
    borderRadius: N,
    minHeight: $,
    marginTop: M,
    justifyContent: Ot,
    boxShadow: Lt,
  } = y;
  return (
    h &&
      console.table([
        { property: 'height', value: w },
        { property: 'borderRadius', value: N },
        { property: 'minHeight', value: $ },
        { property: 'marginTop', value: M },
        { property: 'justifyContent', value: Ot },
        { property: 'boxShadow', value: Lt },
      ]),
    t === C.ProductPage
      ? Fr({
          styles: {
            height: w,
            minHeight: $,
            borderRadius: N,
            marginTop: M,
            boxShadow: Lt,
          },
          mediaRules: m,
          element: e,
        })
      : Fr({
          styles: { borderRadius: N, boxShadow: Lt, justifyContent: Ot },
          mediaRules: m,
          element: e,
        })
  );
}
function $n(e, t) {
  if (!t) return;
  const n = 'global-'.concat(e.tagName.toLowerCase(), '-styles');
  if (document.head.querySelector('style#'.concat(n)) == null) {
    const r = document.createElement('style');
    (r.id = n), (r.innerHTML = t), document.head.appendChild(r);
  }
}
function Os(e) {
  const t =
    e.ownerNode instanceof HTMLLinkElement &&
    (e.ownerNode.getAttribute('crossorigin') === 'anonymous' ||
      e.ownerNode.getAttribute('crossorigin') === '');
  return e.href == null || e.href.startsWith(window.location.origin) || t;
}
function Or(e) {
  return e === C.CartPage || e === C.CartAjax;
}
function xr({ height: e, minHeight: t }) {
  let n = e,
    r = t;
  return (
    ((n != null && n.includes('var('.concat(G.buttonBlockSize))) ||
      n === 'auto') &&
      (n = null),
    ((r != null && r.includes('var('.concat(G.buttonBlockSize))) ||
      r === 'auto') &&
      (r = null),
    n === r ? n : r && n ? 'max('.concat(n, ',').concat(r, ')') : n || r
  );
}
function Mr({
  existingProperties: e,
  mediaCondition: t,
  selector: n,
  styles: r,
}) {
  const a = _({}, r);
  for (const i of e) delete a[i];
  for (const [i, o] of Object.entries(a))
    o != null && o.startsWith('var('.concat(i)) && delete a[i];
  return Object.keys(a).length === 0
    ? ''
    : xs({ mediaCondition: t, selector: n, styles: a });
}
function xs({ mediaCondition: e, selector: t, styles: n }) {
  let r = ''.concat(e ? '@media '.concat(e, ' { ') : '').concat(t, ' {');
  for (const [a, i] of Object.entries(n))
    i && (r += '\n  '.concat(a, ': ').concat(i, ';'));
  return (r += '\n}'), e && (r += '}'), (r += '\n'), r;
}
function Fr({ styles: e, element: t, mediaRules: n }) {
  const {
      height: r,
      minHeight: a,
      borderRadius: i,
      marginTop: o,
      justifyContent: s,
      boxShadow: l,
    } = e,
    c = t.tagName.toLowerCase(),
    h = getComputedStyle(t),
    p = new Set();
  for (const y of Object.values(G)) h.getPropertyValue(y) && p.add(y);
  let m = Mr({
    existingProperties: p,
    selector: c,
    styles: {
      [G.buttonBlockSize]: xr({ height: r, minHeight: a }),
      [G.buttonBorderRadius]: i,
      [G.buttonBoxShadow]: l,
      [G.inlineAlignment]: s,
      'margin-top': o,
      display: o ? 'block' : void 0,
    },
  });
  return (
    n.forEach((y) => {
      (y.height ||
        y.minHeight ||
        y.borderRadius ||
        y.boxShadow ||
        y.justifyContent ||
        y.marginTop) &&
        (m += Mr({
          existingProperties: p,
          mediaCondition: y.conditionText,
          selector: c,
          styles: {
            [G.buttonBlockSize]: xr({
              height: y.height,
              minHeight: y.minHeight,
            }),
            [G.buttonBorderRadius]: y.borderRadius,
            [G.buttonBoxShadow]: y.boxShadow,
            [G.inlineAlignment]: y.justifyContent,
            'margin-top': y.marginTop,
            display: y.marginTop ? 'block' : void 0,
          },
        }));
    }),
    m.trim()
  );
}
function Ur(e) {
  return [
    ['height'],
    ['minHeight', 'min-height'],
    ['borderRadius', 'border-radius'],
    ['marginTop', 'margin-top'],
    ['justifyContent', 'justify-content'],
  ].reduce(
    (t, [n, r]) => ((t[n] = Ms({ rule: e, property: r != null ? r : n })), t),
    {}
  );
}
function Ms({ rule: e, property: t }) {
  const n = e.style.getPropertyValue(t);
  return e.style.getPropertyPriority(t)
    ? ''.concat(n, ' !important')
    : n || null;
}
function Fs({ rule: e, property: t, currentPropertyValue: n }) {
  const r = e[t];
  return !(n != null && n.includes('!important')) &&
    r != null &&
    r.includes('!important')
    ? r
    : n != null
    ? n
    : r;
}
const Br = 2e3;
class $r extends Error {
  constructor() {
    super(...arguments), d(this, 'name', 'AcceleratedCheckoutError');
  }
}
const oe = class el extends er {
  constructor() {
    super(),
      d(this, 'instanceNumber', ++el.instanceCount),
      d(this, 'pageType', C.ProductPage),
      d(this, 'formObserver'),
      d(this, 'dataSource'),
      d(this, 'wrapper'),
      d(this, 'shopPromiseEligible'),
      d(this, 'didInitiateRender', !1),
      (this.wrapper = document.createElement('div')),
      Ye({ shop: { shopId: this.shopId } }),
      Ss({
        instanceNumber: this.instanceNumber,
        styleId: 'shopify-accelerated-checkout',
        styles: vi,
        cssFileName: 'AcceleratedCheckout.css',
      }),
      (this.shopPromiseEligible = Yr());
  }
  static get observedAttributes() {
    return [
      'access-token',
      'disabled',
      'has-selling-plan',
      'requires-shipping',
    ];
  }
  async connectedCallback() {
    var t, n, r;
    try {
      if (
        ((n = (t = this.wrapper) == null ? void 0 : t.children) != null &&
          n.length) ||
        this.didInitiateRender
      )
        return;
      if (!this.validateRenderingSurface()) {
        this.clearUI();
        return;
      }
      this.instanceNumber === 1 && f.initStarted();
      const a = ye(R.ButtonDisplay, 'dc:'.concat(this.instanceNumber));
      (this.i18n = ce()),
        this.setupFormObserver(),
        (this.didInitiateRender = !0);
      const i = await this.loadWallet(),
        o =
          (r = i == null ? void 0 : i.getInstrumentName()) != null
            ? r
            : g.BuyItNow,
        s = o === g.ApplePay || o === g.GooglePay;
      (this.apiClient = new be({
        accessToken: this.accessToken,
        country: this.buyerCountry,
        locale: this.i18n.locale,
        withCarrierRates: s,
      })),
        (this.dataSource = new As(this, this.apiClient, o)),
        this.extractStyles();
      const l =
        i == null
          ? void 0
          : i.createWebComponent({
              walletContainer: this,
              dataSource: this.dataSource,
              i18n: this.i18n,
              apiClient: this.apiClient,
              classNames: Us(o),
              callToAction: 'true',
              pageType: this.pageType,
              containerInstanceNumber: this.instanceNumber,
              onRendered: () =>
                f.instrumentLoaded({
                  instrumentOrComponentName: o,
                  result: 'success',
                  measurement: a(),
                }),
            });
      if (!l) throw new $r('No web component found');
      this.render(l, o),
        f.initCompleted({ result: 'success' }),
        this.instanceNumber === 1 && this.triggerLoadedEvent();
    } catch (a) {
      if ((this.clearUI(), f.initCompleted({ error: a }), a.name === Rt.name))
        throw a;
      b.notify(
        new $r(
          'An error occurred while attempting to render the AcceleratedCheckout: '.concat(
            a
          )
        )
      );
    }
  }
  async attributeChangedCallback(t, n, r) {
    n !== r &&
      (Ze(this, t, r),
      t === 'has-selling-plan' && r === ''
        ? this.showBuyerConsent(this.apiClient, this.i18n)
        : t === 'has-selling-plan' && r === null && this.hideBuyerConsent());
  }
  async render(t, n) {
    this.clearUI();
    const r = this.attachShadow({ mode: 'closed' }),
      a = document.createElement('style');
    (a.innerHTML = Mn),
      r.appendChild(a),
      (this.wrapper.className = 'wallet-button-fade-in');
    const i = document.createElement('slot');
    (i.name = 'button'), this.wrapper.appendChild(i);
    const o = document.createElement('slot');
    (o.name = 'promise'), this.wrapper.appendChild(o);
    const s = document.createElement('slot');
    (s.name = 'more-options'),
      this.wrapper.appendChild(s),
      r == null || r.appendChild(this.wrapper),
      this.hasSellingPlan
        ? this.showBuyerConsent(this.apiClient, this.i18n)
        : this.hideBuyerConsent();
    const l = new DocumentFragment();
    l.appendChild(t);
    const c = this.getShopPromiseSlot();
    c && l.appendChild(c);
    const h = this.getMorePaymentOptionsLink(n);
    h && l.appendChild(h), this.appendChild(l);
  }
  getMorePaymentOptionsLink(t) {
    var n, r;
    if (t === g.BuyItNow) return null;
    const a = document.createElement('more-payment-options-link');
    return (
      pe(a, {
        'buyer-country': (n = this.buyerCountry) != null ? n : '',
        'access-token': (r = this.accessToken) != null ? r : '',
        'recommended-instrument': t,
        slot: 'more-options',
      }),
      (a.disabled = this.disabled),
      a.setDataSource(this.dataSource),
      a.setI18n(this.i18n),
      a.setClassNames(Re.MORE_PAYMENT_OPTION_BUTTON),
      a
    );
  }
  getShopPromiseSlot() {
    if (!this.shopPromiseEligible) return null;
    const t = document.createElement('div');
    return (
      t.setAttribute('data-shopify', 'shop-promise-payment-button-slot'),
      (t.style.height = '100%'),
      (t.slot = 'promise'),
      t
    );
  }
  validateRenderingSurface() {
    return ge({ page: 'product', element: this }) != null;
  }
  async loadWallet() {
    const t = Ei(
      this.recommendedWallet,
      this.fallbackWallet,
      'AcceleratedCheckout'
    );
    return await $s(P(_({}, t), { instanceNumber: this.instanceNumber }));
  }
  setupFormObserver() {
    this.formObserver ||
      ((this.formObserver = new tn(
        this,
        ({ disabled: t, hasSellingPlan: n }) => {
          (this.disabled = t),
            (this.hasSellingPlan = n),
            (this.isShippingRequired = Bs(this, this.variantParams));
        }
      )),
      this.formObserver.setupMutationObservers());
  }
  extractStyles() {
    if (this.styleExtractorDisabled) {
      re()('shopify-support-debug') &&
        console.debug(
          '[shopify-support-debug] styling backward compatibility disabled'
        );
      return;
    }
    const t = Bn(this);
    t && $n(this, t);
  }
};
d(oe, 'instanceCount', 0);
let ze = oe;
function Us(e) {
  return e === g.BuyItNow ? Re.UNBRANDED_BUTTON : Re.BRANDED_BUTTON;
}
function Bs(e, t) {
  var n;
  const r = rr(e);
  return !!(
    (n = t.find((a) => a.id === Number(r == null ? void 0 : r.variantId))) !=
      null && n.requiresShipping
  );
}
async function $s({
  recommendedWallet: e,
  fallbackWallet: t,
  instanceNumber: n,
}) {
  const r = e ? ae(e) : null,
    a = ae(t);
  if (tr(r)) {
    const i = Oe({ walletInstrument: r, instanceNumber: n }),
      o = 'timeout',
      s = await Promise.race([
        i,
        new Promise((l) => setTimeout(() => l(o), Br)),
      ]);
    if (s === o)
      f.instrumentSDKLoaded({
        instrument: r.getInstrumentName(),
        measurement: Br,
        result: 'timeout',
      });
    else if (s instanceof it) return s;
  }
  return a && Oe({ walletInstrument: a, instanceNumber: n });
}
tt('shopify-accelerated-checkout', ze),
  tt('more-payment-options-link', fi, { isChildCustomElement: !0 });
const Hs = (e) => {
    const t = new PerformanceObserver((n) => {
      n
        .getEntriesByType('resource')
        .some(
          (r) =>
            r.name.includes(Ut.CartUpdate) ||
            r.name.includes(Ut.CartChange) ||
            r.name.includes(Ut.CartAdd) ||
            r.name.includes(Ut.CartClear)
        ) && e();
    });
    return t.observe({ entryTypes: ['resource'] }), t;
  },
  Gs =
    '.wallet-cart-wrapper{--wallet-button-height-horizontal: clamp( 25px, var(--shopify-accelerated-checkout-button-inline-size, 42px), 55px );--wallet-button-height-vertical: clamp( 25px, var(--shopify-accelerated-checkout-button-block-size, 54px), 55px );--wallet-button-width-horizontal: 150px;--wallet-button-width-vertical: 100%;--wallet-button-border-radius: var( --shopify-accelerated-checkout-button-border-radius, 4px );--wallet-grid-margin-horizontal: 0 -5px -5px -5px;--wallet-button-container-margin-horizontal: 0 5px 5px;--wallet-button-container-margin-vertical: var( --shopify-accelerated-checkout-row-gap, 8px ) 0 0}.wallet-cart-wrapper{container-type:inline-size;container-name:wrapper}.wallet-cart-grid{margin:var(--wallet-grid-margin-horizontal);padding:0;display:flex;justify-content:var(--shopify-accelerated-checkout-inline-alignment, start);flex-direction:row}.wallet-cart-grid.wallet-cart-grid--vertical{justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}.wallet-cart-button-container{position:relative;margin:var(--wallet-button-container-margin-horizontal)}.wallet-cart-button-container,.wallet-cart-button{width:var(--wallet-button-width-horizontal);height:var(--wallet-button-height-horizontal);border-radius:var(--wallet-button-border-radius);list-style-type:none!important;text-align:center;flex-shrink:0;flex-grow:0}@container wrapper (width >= 150px) and (width <= 500px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 310px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 470px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 630px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 790px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}@media screen and (max-width: 750px){.wallet-cart-grid{justify-content:flex-start;flex-direction:column;max-width:none;margin:0}.wallet-cart-grid .wallet-cart-button-container{max-width:none;width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@supports (not (container-type: inline-size)) or (not (selector(:has(*)))){.wallet-cart-grid{justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}.screen-reader-text{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}',
  Vs =
    '.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container:first-child{margin-top:8px}@container wrapper (width >= 150px) and (width <= 500px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 310px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 470px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 630px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 790px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container:first-child{margin-top:8px}}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container:first-child{margin-top:8px}@media screen and (max-width: 750px){.wallet-cart-grid .wallet-cart-button-container:first-child{margin-top:8px}}@supports (not (container-type: inline-size)) or (not (selector(:has(*)))){.wallet-cart-button-container:first-child{margin-top:8px}}';
function zs(e) {
  const t = ge({ page: 'cart', element: e });
  return Xr({ type: 'attributes', form: t });
}
class qs {
  constructor(t, n, r) {
    (this.element = t), (this.cartToken = n), (this.apiClient = r);
  }
  async getInitialCart(t) {
    const n = 'gid://shopify/Cart/'.concat(this.cartToken),
      r = zs(this.element);
    let a,
      i = [];
    if (r.length) {
      const o = await this.apiClient.updateCartAttributes({
        cartId: n,
        attributes: r,
        instrumentName: t,
        startingCheckout: !0,
      });
      (a = o.data), (i = o.errors);
    } else
      a = await this.apiClient.fetchCart({
        id: n,
        instrumentName: t,
        startingCheckout: !0,
      });
    return { cart: a, errors: i };
  }
}
var Tt;
const se = class nl extends er {
  constructor() {
    super(),
      d(this, 'instanceNumber', ++nl.instanceCount),
      d(this, 'pageType', C.CartPage),
      d(this, 'cartObserver', null),
      d(this, 'dataSource', null),
      d(this, 'wrapper'),
      d(this, 'didInitiateRender', !1),
      V(this, Tt),
      Ye({ shop: { shopId: this.shopId, cartId: this.cartId } }),
      (this.wrapper = document.createElement('div'));
  }
  static get observedAttributes() {
    return ['access-token', 'has-selling-plan', 'requires-shipping'];
  }
  createDataSource(t) {
    if (!this.cartToken)
      throw new Error('[AcceleratedCheckoutCart] cart cookie does not exist');
    const n = ce(),
      r = new be({
        accessToken: this.accessToken,
        country: this.buyerCountry,
        locale: n.locale,
        withCarrierRates: t,
      }),
      a = new qs(this, this.cartToken, r);
    (this.dataSource = a), (this.apiClient = r), (this.i18n = n);
  }
  async createWebComponents({ shouldRefetchCartAttributes: t }) {
    if (!this.walletConfigs)
      throw new Error('[AcceleratedCheckoutCart] walletConfigs does not exist');
    const n = bi(this.walletConfigs, 'AcceleratedCheckoutCart');
    if (!(n instanceof Array))
      throw new Error('[AcceleratedCheckoutCart] invalid walletConfigs found');
    const r = R.ButtonDisplay,
      a = (l) => ''.concat(l, ':').concat(this.instanceNumber),
      i = await js({
        walletConfigs: n,
        instanceNumber: this.instanceNumber,
        startButtonDisplayBenchmark: (l) => Kt(r, a(l)),
      }),
      o = new Set([g.ApplePay, g.GooglePay]),
      s = i.some((l) => o.has(l.getInstrumentName()));
    return (
      this.createDataSource(s),
      t && (await this.updateAttributes()),
      i.map((l) => {
        const c = l.getInstrumentName();
        return l.createWebComponent({
          walletContainer: this,
          dataSource: this.dataSource,
          i18n: this.i18n,
          apiClient: this.apiClient,
          pageType: this.pageType,
          containerInstanceNumber: this.instanceNumber,
          slot: 'button-'.concat(l.getInstrumentName()),
          onRendered: () =>
            f.instrumentLoaded({
              instrumentOrComponentName: c,
              result: 'success',
              measurement: Z(r, a(c)),
            }),
        });
      })
    );
  }
  async cartChangedCallback() {
    try {
      if (!this.dataSource && this.cartToken) {
        await this.render({ shouldRefetchCartAttributes: !0 });
        return;
      } else if (!this.cartToken) {
        f.cartTokenMissing({ reason: 'cartChangedCallback' });
        return;
      }
      await this.updateAttributes();
    } catch (t) {
      this.clearUI(), b.notify(t);
    }
  }
  async updateAttributes() {
    var t;
    if (!this.cartToken) return;
    const n = await ((t = this.apiClient) == null
      ? void 0
      : t.fetchCart({
          id: 'gid://shopify/Cart/'.concat(this.cartToken),
          instrumentName: g.Unknown,
        }));
    if (!(n != null && n.id))
      throw new Error(
        '['.concat(this.updateAttributes, '] received invalid cart')
      );
    (this.hasSellingPlan = n.lineItems.some(
      (r) => r.sellingPlanAllocation != null
    )),
      (this.isShippingRequired = n.lineItems.some(
        (r) => r.merchandise.requiresShipping
      ));
  }
  async connectedCallback() {
    try {
      if (this.didInitiateRender) return;
      if (
        (B({ event: x.CartInitCalled }),
        (this.cartObserver = Hs(() => this.cartChangedCallback())),
        !this.cartToken)
      ) {
        f.cartTokenMissing({ reason: 'connectedCallback' });
        return;
      }
      await this.render({ shouldRefetchCartAttributes: !1 });
    } catch (t) {
      this.clearUI(), b.notify(t);
    }
  }
  disconnectedCallback() {
    var t;
    (t = this.cartObserver) == null || t.disconnect();
  }
  async attributeChangedCallback(t, n, r) {
    n !== r &&
      (Ze(this, t, r),
      t === 'has-selling-plan' && r === ''
        ? this.showBuyerConsent(this.apiClient, this.i18n)
        : t === 'has-selling-plan' && r === null && this.hideBuyerConsent());
  }
  get cartToken() {
    return Vt('cart');
  }
  async render({ shouldRefetchCartAttributes: t }) {
    var n;
    if (this.hasLegacyCartCookie()) {
      f.legacyCartCookie(), this.clearUI();
      return;
    }
    this.didInitiateRender = !0;
    const r = ye(R.ButtonDisplay, 'cart:'.concat(this.instanceNumber)),
      a = await this.createWebComponents({ shouldRefetchCartAttributes: t });
    if ((this.clearUI(), a.length === 0)) return;
    const i = new DocumentFragment(),
      o = this.getOrCreateShadowRoot(),
      s = document.createElement('style');
    (s.innerHTML = [Mn, Gs].join('\n')),
      o.appendChild(s),
      this.extractStyles(),
      (this.wrapper = document.createElement('div')),
      (this.wrapper.className = 'wallet-cart-wrapper wallet-button-fade-in');
    const l = document.createElement('h2');
    (l.className = 'screen-reader-text'),
      (l.textContent =
        ((n = this.i18n) == null ? void 0 : n.translate('express_checkout')) ||
        ''),
      this.wrapper.appendChild(l);
    const c = document.createElement('div');
    (c.className = 'wallet-cart-grid '.concat(yt.CONTAINER)),
      Ws() && c.classList.add('wallet-cart-grid--vertical'),
      a.forEach((h) => {
        const p = document.createElement('div'),
          m = document.createElement('div'),
          y = document.createElement('slot');
        (y.name = 'button-'.concat(h.name)),
          (p.className = 'wallet-cart-button-container'),
          (m.className = 'wallet-cart-button'),
          p.setAttribute('data-testid', 'grid-cell'),
          p.appendChild(m),
          m.appendChild(y),
          c.appendChild(p),
          i.appendChild(h);
      }),
      this.wrapper.appendChild(c),
      this.hasSellingPlan
        ? this.showBuyerConsent(this.apiClient, this.i18n)
        : this.hideBuyerConsent(),
      o.appendChild(this.wrapper),
      this.appendChild(i),
      f.instrumentLoaded({
        instrumentOrComponentName: 'AcceleratedCheckoutCart',
        result: 'success',
        measurement: r(),
      });
  }
  getOrCreateShadowRoot() {
    return (
      E(this, Tt) || Y(this, Tt, this.attachShadow({ mode: 'closed' })),
      E(this, Tt)
    );
  }
  hasLegacyCartCookie() {
    var t;
    return this.cartToken
      ? (t = this.cartToken) == null
        ? void 0
        : t.match(/^[a-z0-9]+$/)
      : !1;
  }
  extractStyles() {
    if (this.styleExtractorDisabled) {
      re()('shopify-support-debug') &&
        console.debug(
          '[shopify-support-debug] styling backward compatibility disabled'
        );
      return;
    }
    const t = Bn(this);
    if (t) {
      $n(this, t);
      const n = this.getOrCreateShadowRoot(),
        r = document.createElement('style');
      (r.innerHTML = Vs), n.appendChild(r);
    }
  }
};
(Tt = new WeakMap()), d(se, 'instanceCount', 0);
let qe = se;
async function js({
  walletConfigs: e,
  instanceNumber: t,
  startButtonDisplayBenchmark: n = () => {},
}) {
  const r = _i(_s(e));
  return (
    await Promise.all(
      r.map(
        (a) => (
          n(a.getInstrumentName()),
          Oe({ walletInstrument: a, instanceNumber: t })
        )
      )
    )
  ).filter((a) => a != null);
}
function Ws() {
  return !!document.querySelector(
    '.additional-checkout-buttons--vertical shopify-accelerated-checkout-cart'
  );
}
tt('shopify-accelerated-checkout-cart', qe);
class Ys {
  getInitialCart() {
    throw new Error('[NoOpDataSource] Unexpected call to "getCart"');
  }
}
const le = class rl extends er {
  constructor() {
    super(),
      d(this, 'instanceNumber', ++rl.instanceCount),
      Ye({ shop: { shopId: this.shopId } });
  }
  get walletConfig() {
    return this.getAttribute('wallet-config');
  }
  get pageType() {
    return this.getAttribute('page-type') || C.Unknown;
  }
  async connectedCallback() {
    try {
      if (this.children.length) return;
      this.instanceNumber === 1 && f.initStarted();
      const t = ye(R.ButtonDisplay, 'dc:'.concat(this.instanceNumber)),
        n = wi(this.walletConfig, 'WalletButton');
      if (!n) throw new oa('[WalletButton] No config provided.');
      const r = ae(n);
      if (!r || !(await this.eligibleToShow(r))) return;
      const a = r.getInstrumentName();
      (this.i18n = ce()),
        (this.apiClient = new be({
          accessToken: this.accessToken,
          country: this.buyerCountry,
          locale: this.i18n.locale,
        }));
      const i = this.createWebComponent(r, this.i18n, this.apiClient, a, t);
      (this.innerHTML = ''),
        this.appendChild(i),
        f.initCompleted({ result: 'success' }),
        this.instanceNumber === 1 && this.triggerLoadedEvent();
    } catch (t) {
      (this.innerHTML = ''), f.initCompleted({ error: t }), b.notify(t);
    }
  }
  createWebComponent(t, n, r, a, i) {
    const o = t.createWebComponent({
      walletContainer: this,
      dataSource: new Ys(),
      i18n: n,
      apiClient: r,
      containerInstanceNumber: this.instanceNumber,
      pageType: this.pageType,
    });
    return (
      (o.onRendered = () => {
        f.instrumentLoaded({
          instrumentOrComponentName: a,
          result: 'success',
          measurement: i(),
        });
      }),
      o
    );
  }
  async eligibleToShow(t) {
    return !(
      !tr(t) ||
      (await t.loadWalletSDK(), !t.getPartnerSDKEligibility().eligible)
    );
  }
};
d(le, 'instanceCount', 0);
let je = le;
tt('shopify-wallet-button', je), ta(b), ea(b), f.startExporter();
