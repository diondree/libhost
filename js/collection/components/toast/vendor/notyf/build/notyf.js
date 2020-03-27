'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var NotyfNotification = /** @class */ (function () {
    function NotyfNotification(options) {
        this.options = options;
    }
    return NotyfNotification;
}());
(function (NotyfArrayEvent) {
    NotyfArrayEvent[NotyfArrayEvent["Add"] = 0] = "Add";
    NotyfArrayEvent[NotyfArrayEvent["Remove"] = 1] = "Remove";
})(exports.NotyfArrayEvent || (exports.NotyfArrayEvent = {}));
var NotyfArray = /** @class */ (function () {
    function NotyfArray() {
        this.notifications = [];
    }
    NotyfArray.prototype.push = function (elem) {
        this.notifications.push(elem);
        this.updateFn(elem, exports.NotyfArrayEvent.Add, this.notifications);
    };
    NotyfArray.prototype.splice = function (index, num) {
        var elem = this.notifications.splice(index, num)[0];
        this.updateFn(elem, exports.NotyfArrayEvent.Remove, this.notifications);
    };
    NotyfArray.prototype.indexOf = function (elem) {
        return this.notifications.indexOf(elem);
    };
    NotyfArray.prototype.onupdate = function (fn) {
        this.updateFn = fn;
    };
    return NotyfArray;
}());

var DEFAULT_OPTIONS = {
    types: [
        {
            type: 'success',
            className: 'notyf__toast--success',
            backgroundColor: 'var(--success-bg)',
            color: 'var(--success-color)',
        },
        {
            type: 'error',
            className: 'notyf__toast--error',
            backgroundColor: 'var(--error-bg)',
            color: 'var(--error-color)',
        },
        {
            type: 'info',
            className: 'notyf__toast--info',
            backgroundColor: 'var(--info-bg)',
            color: 'var(--info-color)',
        }, {
            type: 'warning',
            className: 'notyf__toast--warning',
            backgroundColor: 'var(--warning-bg)',
            color: 'var(--warning-color)',
        },
    ],
    duration: 2000,
    ripple: true,
};

var NotyfView = /** @class */ (function () {
    function NotyfView(hostEl) {
        this.notifications = [];
        // Creates the main notifications container
        var docFrag = document.createDocumentFragment();
        var notyfContainer = this._createHTLMElement({ tagName: 'div', className: 'notyf' });
        docFrag.appendChild(notyfContainer);
        if (hostEl && hostEl.shadowRoot) {
            hostEl.shadowRoot.appendChild(docFrag);
        }
        else {
            document.body.appendChild(docFrag);
        }
        this.container = notyfContainer;
        // Identifies the main animation end event
        this.animationEndEventName = this._getAnimationEndEventName();
        this._createA11yContainer();
    }
    NotyfView.prototype.update = function (notification, type) {
        if (type === exports.NotyfArrayEvent.Add) {
            this.addNotification(notification);
        }
        else if (type === exports.NotyfArrayEvent.Remove) {
            this.removeNotification(notification);
        }
    };
    NotyfView.prototype.removeNotification = function (notification) {
        var _this = this;
        var renderedNotification = this._popRenderedNotification(notification);
        var node;
        if (!renderedNotification) {
            return;
        }
        node = renderedNotification.node;
        node.classList.add('notyf__toast--disappear');
        var handleEvent;
        node.addEventListener(this.animationEndEventName, handleEvent = function (event) {
            if (event.target === node) {
                node.removeEventListener(_this.animationEndEventName, handleEvent);
                _this.container.removeChild(node);
            }
        });
    };
    NotyfView.prototype.addNotification = function (notification) {
        var node = this._renderNotification(notification);
        this.notifications.push({ notification: notification, node: node });
        // For a11y purposes, we still want to announce that there's a notification in the screen
        // even if it comes with no message.
        this._announce(notification.options.message || 'Notification');
    };
    NotyfView.prototype._renderNotification = function (notification) {
        var _a;
        var card = this._buildNotificationCard(notification);
        var className = notification.options.className;
        if (className) {
            (_a = card.classList).add.apply(_a, className.split(' '));
        }
        this.container.appendChild(card);
        return card;
    };
    NotyfView.prototype._popRenderedNotification = function (notification) {
        var idx = -1;
        for (var i = 0; i < this.notifications.length && idx < 0; i++) {
            if (this.notifications[i].notification === notification) {
                idx = i;
            }
        }
        if (idx !== -1) {
            return this.notifications.splice(idx, 1)[0];
        }
        return;
    };
    NotyfView.prototype._buildNotificationCard = function (notification) {
        var options = notification.options;
        var iconOpts = options.icon;
        // Create elements
        var notificationElem = this._createHTLMElement({ tagName: 'div', className: 'notyf__toast' });
        var ripple = this._createHTLMElement({ tagName: 'div', className: 'notyf__ripple' });
        var wrapper = this._createHTLMElement({ tagName: 'div', className: 'notyf__wrapper' });
        var message = this._createHTLMElement({ tagName: 'div', className: 'notyf__message' });
        var header = this._createHTLMElement({ tagName: 'header', className: 'notyf__header' });
        var content = this._createHTLMElement({ tagName: 'div', className: 'notyf__content' });
        console.log(options);
        message.innerHTML = options.message || '';
        if (options.header) {
            header.innerHTML = options.header || '';
            content.appendChild(header);
        }
        content.append(message);
        var bgColor = options.backgroundColor;
        var color = options.color;
        if (iconOpts) {
            // @ts-ignore
            var icon = this._createHTLMElement({ tagName: 'smtt-icon', className: 'notyf__icon' });
            icon.setAttribute("icon", iconOpts);
            icon.setAttribute("color", "var(--" + options.type + "-icon-color)");
            wrapper.appendChild(icon);
        }
        wrapper.appendChild(content);
        notificationElem.appendChild(wrapper);
        // add ripple if applicable, else just paint the full toast
        if (bgColor) {
            if (options.ripple) {
                ripple.style.backgroundColor = bgColor;
                notificationElem.appendChild(ripple);
            }
            else {
                notificationElem.style.backgroundColor = bgColor;
            }
        }
        if (color) {
            notificationElem.style.color = color;
        }
        return notificationElem;
    };
    NotyfView.prototype._createHTLMElement = function (_a) {
        var tagName = _a.tagName, className = _a.className, text = _a.text;
        var elem = document.createElement(tagName);
        if (className) {
            elem.className = className;
        }
        elem.textContent = text || null;
        return elem;
    };
    /**
     * Creates an invisible container which will announce the notyfs to
     * screen readers
     */
    NotyfView.prototype._createA11yContainer = function () {
        var a11yContainer = this._createHTLMElement({ tagName: 'div', className: 'notyf-announcer' });
        a11yContainer.setAttribute('aria-atomic', 'true');
        a11yContainer.setAttribute('aria-live', 'polite');
        // Set the a11y container to be visible hidden. Can't use display: none as
        // screen readers won't read it.
        a11yContainer.style.border = '0';
        a11yContainer.style.clip = 'rect(0 0 0 0)';
        a11yContainer.style.height = '1px';
        a11yContainer.style.margin = '-1px';
        a11yContainer.style.overflow = 'hidden';
        a11yContainer.style.padding = '0';
        a11yContainer.style.position = 'absolute';
        a11yContainer.style.width = '1px';
        a11yContainer.style.outline = '0';
        document.body.appendChild(a11yContainer);
        this.a11yContainer = a11yContainer;
    };
    /**
     * Announces a message to screenreaders.
     */
    NotyfView.prototype._announce = function (message) {
        var _this = this;
        this.a11yContainer.textContent = '';
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        // https://github.com/angular/material2/blob/master/src/cdk/a11y/live-announcer/live-announcer.ts
        setTimeout(function () {
            _this.a11yContainer.textContent = message;
        }, 100);
    };
    /**
     * Determine which animationend event is supported
     */
    NotyfView.prototype._getAnimationEndEventName = function () {
        var el = document.createElement('_fake');
        var transitions = {
            MozTransition: 'animationend',
            OTransition: 'oAnimationEnd',
            WebkitTransition: 'webkitAnimationEnd',
            transition: 'animationend',
        };
        var t;
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
        // No supported animation end event. Using "animationend" as a fallback
        return 'animationend';
    };
    return NotyfView;
}());

/**
 * Main controller class. Defines the main Notyf API.
 */
var Notyf = /** @class */ (function () {
    function Notyf(opts) {
        var _this = this;
        this.notifications = new NotyfArray();
        var types = this.registerTypes(opts);
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), opts);
        this.options.types = types;
        this.view = this.options.rootElement ? new NotyfView(this.options.rootElement) : new NotyfView();
        this.notifications.onupdate(function (elem, type) {
            _this.view.update(elem, type);
        });
    }
    Notyf.prototype.error = function (payload) {
        var options = this.normalizeOptions('error', payload);
        this.open(options);
    };
    Notyf.prototype.success = function (payload) {
        var options = this.normalizeOptions('success', payload);
        this.open(options);
    };
    Notyf.prototype.open = function (options) {
        var defaultOpts = this.options.types.find(function (_a) {
            var type = _a.type;
            return type === options.type;
        }) || {};
        var config = __assign(__assign({}, defaultOpts), options);
        config.ripple = config.ripple === undefined ? this.options.ripple : config.ripple;
        var notification = new NotyfNotification(config);
        this._pushNotification(notification);
    };
    Notyf.prototype._pushNotification = function (notification) {
        var _this = this;
        this.notifications.push(notification);
        var duration = notification.options.duration || this.options.duration;
        setTimeout(function () {
            var index = _this.notifications.indexOf(notification);
            _this.notifications.splice(index, 1);
        }, duration);
    };
    Notyf.prototype.normalizeOptions = function (type, payload) {
        var options = { type: type };
        if (typeof payload === 'string') {
            options.message = payload;
        }
        else if (typeof payload === 'object') {
            options = __assign(__assign({}, options), payload);
        }
        return options;
    };
    Notyf.prototype.registerTypes = function (opts) {
        var incomingTypes = (opts && opts.types || []).slice();
        var finalTypes = DEFAULT_OPTIONS.types.map(function (defaultType) {
            // find if there's a default type within the user input's types, if so, it means the user
            // wants to change some of the default settings
            var userTypeIdx = incomingTypes.findIndex(function (t) { return t.type === defaultType.type; });
            var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};
            return __assign(__assign({}, defaultType), userType);
        });
        return finalTypes.concat(incomingTypes);
    };
    return Notyf;
}());

exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
exports.Notyf = Notyf;
exports.NotyfArray = NotyfArray;
exports.NotyfNotification = NotyfNotification;
exports.NotyfView = NotyfView;
