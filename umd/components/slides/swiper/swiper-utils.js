(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function round(a) {
        return Math.floor(a);
    }
    exports.round = round;
    function inlineStyle(ele, styles) {
        if (ele) {
            if (ele.length) {
                for (var i = 0; i < ele.length; i++) {
                    inlineStyle(ele[i], styles);
                }
            }
            else if (ele.nodeType) {
                var cssProps = Object.keys(styles);
                for (var i_1 = 0; i_1 < cssProps.length; i_1++) {
                    ele.style[cssProps[i_1]] = styles[cssProps[i_1]];
                }
            }
        }
    }
    exports.inlineStyle = inlineStyle;
    function addClass(ele, className) {
        if (ele) {
            if (ele.length) {
                for (var i = 0; i < ele.length; i++) {
                    addClass(ele[i], className);
                }
            }
            else if (ele.nodeType) {
                if (Array.isArray(className)) {
                    className.forEach(function (cls) {
                        ele.classList.add(cls);
                    });
                }
                else {
                    ele.classList.add(className);
                }
            }
        }
    }
    exports.addClass = addClass;
    function removeClass(ele, className) {
        if (ele) {
            if (ele.length) {
                for (var i = 0; i < ele.length; i++) {
                    removeClass(ele[i], className);
                }
            }
            else if (ele.nodeType) {
                if (Array.isArray(className)) {
                    className.forEach(function (cls) {
                        ele.classList.remove(cls);
                    });
                }
                else {
                    ele.classList.remove(className);
                }
            }
        }
    }
    exports.removeClass = removeClass;
    function getElementIndex(ele) {
        var i = 0;
        if (ele) {
            while ((ele = ele.previousSibling) !== null) {
                if (ele.nodeType === 1)
                    i++;
            }
        }
        return i;
    }
    exports.getElementIndex = getElementIndex;
    function queryChildren(parentEle, query) {
        if (parentEle) {
            return parentEle.querySelectorAll(query);
        }
        return [];
    }
    exports.queryChildren = queryChildren;
    function eachChild(parentEle, query, callback) {
        if (parentEle) {
            var nodes = parentEle.querySelectorAll(query);
            for (var i = 0; i < nodes.length; i++) {
                callback(nodes[i]);
            }
        }
    }
    exports.eachChild = eachChild;
    function transform(ele, val) {
        if (ele) {
            var elStyle = ele.style;
            elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.transform = val;
        }
    }
    exports.transform = transform;
    function transition(ele, duration) {
        if (ele) {
            if (typeof duration !== 'string') {
                duration = duration + 'ms';
            }
            var elStyle = ele.style;
            elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.transitionDuration = duration;
        }
    }
    exports.transition = transition;
    function triggerTransitionEnd(plt, ele) {
        try {
            var win = plt.win();
            var evt = new win.CustomEvent('transitionend', { bubbles: true, cancelable: true });
            ele.dispatchEvent(evt);
        }
        catch (e) { }
    }
    exports.triggerTransitionEnd = triggerTransitionEnd;
    function offset(ele, plt) {
        if (ele) {
            var box = plt.getElementBoundingClientRect(ele);
            var body = plt.doc().body;
            var win = plt.win();
            var clientTop = ele.clientTop || body.clientTop || 0;
            var clientLeft = ele.clientLeft || body.clientLeft || 0;
            var scrollTop = win.pageYOffset || ele.scrollTop;
            var scrollLeft = win.pageXOffset || ele.scrollLeft;
            return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        }
        return null;
    }
    exports.offset = offset;
    function updateSlidesOffset(s) {
        for (var i = 0; i < s._slides.length; i++) {
            s._slides[i].swiperSlideOffset = isHorizontal(s) ? s._slides[i].offsetLeft : s._slides[i].offsetTop;
        }
    }
    exports.updateSlidesOffset = updateSlidesOffset;
    function isHorizontal(s) {
        return s.direction === 'horizontal';
    }
    exports.isHorizontal = isHorizontal;
    var formElements = ['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON', 'VIDEO'];
    function isFormElement(el) {
        return !!el && formElements.indexOf(el.tagName) > -1;
    }
    exports.isFormElement = isFormElement;
    /*=========================
      Min/Max Translate
      ===========================*/
    function minTranslate(s) {
        return (-s._snapGrid[0]);
    }
    exports.minTranslate = minTranslate;
    function maxTranslate(s) {
        return (-s._snapGrid[s._snapGrid.length - 1]);
    }
    exports.maxTranslate = maxTranslate;
    exports.CLS = {
        // Classnames
        noSwiping: 'swiper-no-swiping',
        containerModifier: 'swiper-container-',
        slide: 'swiper-slide',
        slideActive: 'swiper-slide-active',
        slideDuplicateActive: 'swiper-slide-duplicate-active',
        slideVisible: 'swiper-slide-visible',
        slideDuplicate: 'swiper-slide-duplicate',
        slideNext: 'swiper-slide-next',
        slideDuplicateNext: 'swiper-slide-duplicate-next',
        slidePrev: 'swiper-slide-prev',
        slideDuplicatePrev: 'swiper-slide-duplicate-prev',
        wrapper: 'swiper-wrapper',
        bullet: 'swiper-pagination-bullet',
        bulletActive: 'swiper-pagination-bullet-active',
        buttonDisabled: 'swiper-button-disabled',
        paginationCurrent: 'swiper-pagination-current',
        paginationTotal: 'swiper-pagination-total',
        paginationHidden: 'swiper-pagination-hidden',
        paginationProgressbar: 'swiper-pagination-progressbar',
        paginationClickable: 'swiper-pagination-clickable',
        paginationModifier: 'swiper-pagination-',
        lazyLoading: 'swiper-lazy',
        lazyStatusLoading: 'swiper-lazy-loading',
        lazyStatusLoaded: 'swiper-lazy-loaded',
        lazyPreloader: 'swiper-lazy-preloader',
        notification: 'swiper-notification',
        preloader: 'preloader',
        zoomContainer: 'swiper-zoom-container',
    };
});
//# sourceMappingURL=swiper-utils.js.map