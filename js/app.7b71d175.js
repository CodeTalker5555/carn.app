(function (t) {
    function e(e) {
        for (var n, o, r = e[0], l = e[1], d = e[2], u = 0, p = []; u < r.length; u++) o = r[u], Object.prototype.hasOwnProperty.call(s, o) && s[o] && p.push(s[o][0]), s[o] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
        c && c(e);
        while (p.length) p.shift()();
        return i.push.apply(i, d || []), a()
    }

    function a() {
        for (var t, e = 0; e < i.length; e++) {
            for (var a = i[e], n = !0, r = 1; r < a.length; r++) {
                var l = a[r];
                0 !== s[l] && (n = !1)
            }
            n && (i.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }
    var n = {},
        s = {
            app: 0
        },
        i = [];

    function o(e) {
        if (n[e]) return n[e].exports;
        var a = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = t, o.c = n, o.d = function (t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, o.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(a, n, function (e) {
                return t[e]
            }.bind(null, n));
        return a
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var d = 0; d < r.length; d++) e(r[d]);
    var c = l;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("56d7")
    },
    "014d": function (t, e) {
        t.exports = "data:image/webp;base64,UklGRhwMAABXRUJQVlA4WAoAAAAgAAAAXQAAXgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLgoAAHAoAJ0BKl4AXwA+ZSqPRaQioRqrrqhABkSyAGGWBQMn5/zgbS/pOPyNnCq25nmA84TTio/4/HeD/hd915c2RfoB1Muv+//vR2ne9x3SdgO+P3ceqzeX+KH4XlA38W+XN/8f7r0E/Sfq0fyz9wPZR////1+DvpPfpa6XAFouBJh0cG2S9Jj/OCdMOclug10/LtfkKhBB7k5ojW+keBzZDmxt2xy/kEaVm37T70sp4Gy3rRteiZ8ymZPTK3aNHBTogHMYuO7s78ki0ZqVx2Ben9znvSlK8a7Dw90WaSnmbM1HeQNkihC1VsG9xfClBSEtKqbXlrqt0Kf/NSE+nHqiLZD853spqjc1hIgI4t75f+01hf1UD9sMYxvgagRSb9LJLo5zmjixZxvAj9sKFn9IwwiRIMmKZkMgMdB3+qkL/vpia1FfSsuVNB2SReAAAP7/2+DRbyW9X3V35m3f2ik2BNiQPkSDfgX/UcHivMwLDubkQu1Sk6Kk1aDmfI9/hFK5/2tzrNNngfSr94TG2IaVjTBIPk4XVyC7hiG3ypqNCuDYWNMtaPg32KgUH5EZOCZqo/8bDPETqFXrAvshmTB83Wa39d/LXF5xeSvz7H+fJc5jN2+u1wR9jsJOb6rAarnzsHKEgbzn7eDHCva08jgCvTlJJkajPxyV9y8cilRdYv/KuTnpV/M5Iupy0pcrOubr9BYeCj0qd/zlSCUa3NYFkhZ+D0pBAE5BvbpYJX0LBYJyEyQHbv97W0XOrJnSQqAnGni/unIoVhfL+Ewt9iNgM2n5C2bQ1B40uYzHrzhWdHKz0QH2w3dV4G9Q/OCljJok7qTkU7rgm5+0jPiaqF60Mg5Ilf3DtzOC5BK3HMtBKbyiAyTTu5afrjq2ow9s0lix0qaCD3/xHE97CgiBa6E79ogmvvWRUk4HB2SYhyDx6A3iwU0Y32+qXi/gv/1yxrfuaEnplmnnvOv4yqGWz5icG+Fa8V4a7g6czQIm4d1L7fwiuXgAeF2g7Pwb1TUMjOXxYzIytqHMf5ySjcwsRGisRPlCBBWx5h+RtP6PSaZf7xwlTjKmq6LeYFvIT8CbLy4JzgFLGEx8OYscrZ2zI7RwOn8U3CyoDAgq62lZN0KJI0rql8+wvA5ETGNsrrq1TzjAuRXPhNz5nJw72Y8s8/nrz5AUsJ9/q6uVeRTpXgFpUXsv+8DQa0vejVanp8Hztf91gmzGk9VqxJ0xK1GDwydXYfrd+0K0AdbYEhEDAl7uIuQvTMDXYd9JIyudifyoOR03r4cMgSZTYv1j2Zw3Y1vYowJ+zlZDBmH9G8FWnlVwv2TrYMG5EmU94j/b1b9rt0Xv8vtT5bhgvkgE8WUhSrqN0/fdoMVxbpE/sRQvTRmSrHOkqTJcF6XZCODI3t7udSA+tZ/qY7HUo/UPqcpQKmpFZMf/ZUoO3hru9sWSskAYdWP/9TvkfVxLo8uE1Vuh6i2EqZ+0NbP+hWiiw9sitey9do5bKb5cHO9K5Os11S0YegW9YhAkH5YMTg4J88zk2Y6HtgKNdR7a/j3AEKWLYa/X0fPlbB3I+oFhxhUvZkehY2P64NTwiskPLA76aslPsE1ZCwFHNEHSQ87rEpQPUt+O9MDLD1MKoalU6GpSEPu8BlHC50oSHxW/u4AuPIWeiWtoeDkGybG0lkRDYiIhWHTfQM9RWd8F0d2aIlTva26AoVKjwnbvrtp6VFGLKPZ96BD/Ecr/1gn50V4TuJhIWQjvY+NnI2a4+URLVseJQE0YSAhkdv7BjAbyBMYtcACZEOTMTi6ok6TegJV3i24JZs0ItMfW4Ofc88FLQ78eyeWJ4phYZJXbSrKwFwl8554wrFobBAJttEfZFQ0K5rYRL47mLH83J7P+NgufkvADuxQec3ti6rDbcJzB7fE+zZWgOmX3KrkRMR3iOnunVI/Lay1ljRQ/JnCfAIQJpHDVNUh8Wyinm70VvSbJSEBqZV9UWFRojncr5GYU3C2tUT61xJz+pW2x8WrFLKZlrVvzFn0dA6tUpRSy+hokw9dH+TCUCQg+57r0qOs+FnzeRWzVD/NND0EDWBbKKm/eJ6nt2+T/XhZ7kJB3H8gsM9pHzZfhjkS64Yl/IjzFAZP+P9qEkmXbf+++xwQt/TtOB1OukvqpURT5VADVlPOpUoSG2xjsmHdEGADHjFu9MvQV2A8St/4T8m44dO7DavI9O+o+Tjd9oIGeUXyxoAHGuhnlP2rO7HjVDvb/UylhRYHEVKzZ/I/aYn1cyWO/E0RGQbj9OvlXBbMd7lbT6T9D1xEXD0eikUaThm1kyK/SC9DCcGAhcZBGcUBeyxWshZJGsL7Ni7fp7QaB44k7hkMmBr7Ca2ImGA+e/7Wnw7v9zJPFnGUo0WxuzblCFnebv4SS0kHBozrO90ROgQnPgSzNxlTWnKyihf/7gE0Mj4CBwjvFB4lwqIai8JG5G+XicRhDjy2NcuhnELJERvGDJbcX9KQlXgBURYSeGDhBMQ0J5PKoGcrFcPWUA9e7WYg9hJBQC5+fSezZPQmvGzUJu8LDKYmZmeVViqxQuJvTziFqXYlvH7P8LUaeryyQ0vAXUJH4l7zY09zZ9DOghj2Tuc/zIXpTh/PfdOQRbaO9vll6yFxtrTTPsX0xw0azTX2NmyOwOOY8NtlaCtKMmqo9l+z+6ZJm+xI9nhb4JL8BGgH/xIbkWU+zw4pTAdEuExUWP+FHbw111y+tShlZ4dlqIo8uByeu6ga+WRA29X0ZbvueN57Qb929+5R/KWn4NftyFkNYvmGvnASSFt+ioObvaOe1PZ9KjlP4y0YsAcBOBiYVl0dLnNbvj7+9D/ci3H/xy01Vxd4EvN42Y0PTN2funPZyFEMF2xOUIbvKzodpxjzkQGMlSxzaBU+GNnzdclddL12W+37ed98Ym46HpxuwLUVuGBlHiqp3mKDlcVnUSTqKPe2lNVMjyOp/J99wQWQHj21cMKxbeDjshq+vRSzzjFh/Ml44xo8LDPri0xkj7WxUx/NOdbkqdbAIKJgkYzkZ5kWsmk9z4uo+Fw0DaNj3+ie8oVlzsSxQOzP4xGwdzd2nW1UI/KRZ+a9K9C0oSTPq4TSA93Wkyms4zAUCn6wIic7FhnV8dtBx0CKI8Y/lJoKY18DtSuxwZotXIUy/Lp/hO7cBioh4VHKaBMSQRRJsbwTDBvKDN5UOpohvO1QzaD6ag5rejqU4bBZHzrH5GS7sJa3dsL7/uAdY2ZSu1QTJ68odk2lG/8EowvB/5L9GX76CijYIBY22q0wgW9l/gCs1dm+FOOkFy5/R8aXKQv5rnYD8pAa3CGHKvNX6piYPMb0jsGb6tRWs2r7GxK13tDRmkm/mEvMyQhA5fY+SgFLiYANegjNyglbfeYJTrGQ4xnxI+JGQnrqEu+djxQMY9PE/w2iAdKWUJPl05B4ABs7tKXji3/MgMIwy/YESi8Hi4PsGQqWFdBXhIAAA"
    },
    "06a6": function (t, e, a) {
        t.exports = a.p + "img/lit_booth.f353d29b.png"
    },
    "095f": function (t, e, a) {
        t.exports = a.p + "img/4.82b819fd.png"
    },
    "0a73": function (t, e, a) {
        t.exports = a.p + "img/9.92cc6b00.png"
    },
    "0ca1": function (t, e, a) {
        t.exports = a.p + "img/1.f8179190.png"
    },
    "103d": function (t, e, a) {
        t.exports = a.p + "img/lit_twitter.55b5daf8.png"
    },
    1105: function (t, e, a) {
        t.exports = a.p + "img/4.981d28cb.png"
    },
    "125d": function (t, e, a) {
        t.exports = a.p + "img/6.5e580922.png"
    },
    1363: function (t, e, a) {
        t.exports = a.p + "img/5.cf2132dd.png"
    },
    "15b3": function (t, e, a) {
        t.exports = a.p + "img/9.618b0375.png"
    },
    "15d8": function (t, e, a) {
        t.exports = a.p + "img/10.c5b32cb1.png"
    },
    "16c6": function (t, e, a) {
        t.exports = a.p + "img/lit_monthly.e3a09e95.png"
    },
    "18ba": function (t, e, a) {
        t.exports = a.p + "img/lit_hex_rewards.ad50a6f8.png"
    },
    "196a": function (t, e, a) {},
    "19a1": function (t, e, a) {
        "use strict";
        a("5219")
    },
    "1da1": function (t, e, a) {
        t.exports = a.p + "img/lit_wp.2c5039b8.png"
    },
    "1ddd": function (t, e, a) {
        t.exports = a.p + "img/14.327c6ee3.png"
    },
    "1ffa": function (t, e, a) {
        t.exports = a.p + "img/8.59db6df3.png"
    },
    2175: function (t, e, a) {
        t.exports = a.p + "img/6.9f77cb86.png"
    },
    2499: function (t, e, a) {
        t.exports = a.p + "img/lit_lottery_general.2d589892.png"
    },
    "24b4": function (t, e, a) {
        t.exports = a.p + "img/default.5a9402a8.jpg"
    },
    "2acd": function (t, e, a) {
        t.exports = a.p + "img/21.61d0a21f.png"
    },
    "2b96": function (t, e, a) {},
    "2be1": function (t, e, a) {
        t.exports = a.p + "img/logo_gold_lock.cdf0dea4.jpeg"
    },
    "2cc6": function (t, e, a) {
        t.exports = a.p + "img/calendar.4ba7dae2.png"
    },
    "2de0": function (t, e, a) {
        t.exports = a.p + "img/lit_buy_and_burn.85086070.png"
    },
    "2e9e": function (t, e, a) {
        t.exports = a.p + "img/19.b9bef8bb.png"
    },
    "34a2": function (t, e, a) {
        t.exports = a.p + "img/waatca_nft_logo.87954996.png"
    },
    "34ab": function (t, e, a) {
        t.exports = a.p + "img/2.aab10e84.png"
    },
    "34bf": function (t, e, a) {
        t.exports = a.p + "img/7.cb7142e2.png"
    },
    3783: function (t) {
        t.exports = JSON.parse('{"PLSD_ABI":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"PLSB_ABI":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"CARN_ABI":[{"inputs":[{"internalType":"address","name":"_pulseBitcoinLockNFTRewardPoolAddress","type":"address"},{"internalType":"address","name":"_carnivalBenevolentAddress","type":"address"},{"internalType":"address","name":"_waatcaAddress","type":"address"},{"internalType":"address","name":"_USDC","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_usdcValue","type":"uint256"}],"name":"buyCARN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"carnivalBenevolentAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextHike","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pulseBitcoinLockNFTRewardPoolAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"waatcaAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"ASIC_ABI":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"USDC_ABI":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"HEX_ABI":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"data1","type":"uint256"},{"indexed":true,"internalType":"bytes20","name":"btcAddr","type":"bytes20"},{"indexed":true,"internalType":"address","name":"claimToAddr","type":"address"},{"indexed":true,"internalType":"address","name":"referrerAddr","type":"address"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"data1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"data2","type":"uint256"},{"indexed":true,"internalType":"address","name":"senderAddr","type":"address"}],"name":"ClaimAssist","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data0","type":"uint256"},{"indexed":true,"internalType":"address","name":"updaterAddr","type":"address"}],"name":"DailyDataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data0","type":"uint256"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"}],"name":"ShareRateChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"data1","type":"uint256"},{"indexed":true,"internalType":"address","name":"stakerAddr","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"}],"name":"StakeEnd","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"data1","type":"uint256"},{"indexed":true,"internalType":"address","name":"stakerAddr","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"},{"indexed":true,"internalType":"address","name":"senderAddr","type":"address"}],"name":"StakeGoodAccounting","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data0","type":"uint256"},{"indexed":true,"internalType":"address","name":"stakerAddr","type":"address"},{"indexed":true,"internalType":"uint40","name":"stakeId","type":"uint40"}],"name":"StakeStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data0","type":"uint256"},{"indexed":true,"internalType":"address","name":"memberAddr","type":"address"},{"indexed":true,"internalType":"uint256","name":"entryId","type":"uint256"},{"indexed":true,"internalType":"address","name":"referrerAddr","type":"address"}],"name":"XfLobbyEnter","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data0","type":"uint256"},{"indexed":true,"internalType":"address","name":"memberAddr","type":"address"},{"indexed":true,"internalType":"uint256","name":"entryId","type":"uint256"},{"indexed":true,"internalType":"address","name":"referrerAddr","type":"address"}],"name":"XfLobbyExit","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"allocatedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"rawSatoshis","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"},{"internalType":"address","name":"claimToAddr","type":"address"},{"internalType":"bytes32","name":"pubKeyX","type":"bytes32"},{"internalType":"bytes32","name":"pubKeyY","type":"bytes32"},{"internalType":"uint8","name":"claimFlags","type":"uint8"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint256","name":"autoStakeDays","type":"uint256"},{"internalType":"address","name":"referrerAddr","type":"address"}],"name":"btcAddressClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes20","name":"","type":"bytes20"}],"name":"btcAddressClaims","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes20","name":"btcAddr","type":"bytes20"},{"internalType":"uint256","name":"rawSatoshis","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"btcAddressIsClaimable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes20","name":"btcAddr","type":"bytes20"},{"internalType":"uint256","name":"rawSatoshis","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"btcAddressIsValid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"claimToAddr","type":"address"},{"internalType":"bytes32","name":"claimParamHash","type":"bytes32"},{"internalType":"bytes32","name":"pubKeyX","type":"bytes32"},{"internalType":"bytes32","name":"pubKeyY","type":"bytes32"},{"internalType":"uint8","name":"claimFlags","type":"uint8"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"claimMessageMatchesSignature","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"currentDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dailyData","outputs":[{"internalType":"uint72","name":"dayPayoutTotal","type":"uint72"},{"internalType":"uint72","name":"dayStakeSharesTotal","type":"uint72"},{"internalType":"uint56","name":"dayUnclaimedSatoshisTotal","type":"uint56"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"beginDay","type":"uint256"},{"internalType":"uint256","name":"endDay","type":"uint256"}],"name":"dailyDataRange","outputs":[{"internalType":"uint256[]","name":"list","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"beforeDay","type":"uint256"}],"name":"dailyDataUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"globalInfo","outputs":[{"internalType":"uint256[13]","name":"","type":"uint256[13]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"globals","outputs":[{"internalType":"uint72","name":"lockedHeartsTotal","type":"uint72"},{"internalType":"uint72","name":"nextStakeSharesTotal","type":"uint72"},{"internalType":"uint40","name":"shareRate","type":"uint40"},{"internalType":"uint72","name":"stakePenaltyTotal","type":"uint72"},{"internalType":"uint16","name":"dailyDataCount","type":"uint16"},{"internalType":"uint72","name":"stakeSharesTotal","type":"uint72"},{"internalType":"uint40","name":"latestStakeId","type":"uint40"},{"internalType":"uint128","name":"claimStats","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"merkleLeaf","type":"bytes32"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"merkleProofIsValid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"pubKeyX","type":"bytes32"},{"internalType":"bytes32","name":"pubKeyY","type":"bytes32"},{"internalType":"uint8","name":"claimFlags","type":"uint8"}],"name":"pubKeyToBtcAddress","outputs":[{"internalType":"bytes20","name":"","type":"bytes20"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"pubKeyX","type":"bytes32"},{"internalType":"bytes32","name":"pubKeyY","type":"bytes32"}],"name":"pubKeyToEthAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"stakerAddr","type":"address"}],"name":"stakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"stakeIndex","type":"uint256"},{"internalType":"uint40","name":"stakeIdParam","type":"uint40"}],"name":"stakeEnd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"stakerAddr","type":"address"},{"internalType":"uint256","name":"stakeIndex","type":"uint256"},{"internalType":"uint40","name":"stakeIdParam","type":"uint40"}],"name":"stakeGoodAccounting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakeLists","outputs":[{"internalType":"uint40","name":"stakeId","type":"uint40"},{"internalType":"uint72","name":"stakedHearts","type":"uint72"},{"internalType":"uint72","name":"stakeShares","type":"uint72"},{"internalType":"uint16","name":"lockedDay","type":"uint16"},{"internalType":"uint16","name":"stakedDays","type":"uint16"},{"internalType":"uint16","name":"unlockedDay","type":"uint16"},{"internalType":"bool","name":"isAutoStake","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newStakedHearts","type":"uint256"},{"internalType":"uint256","name":"newStakedDays","type":"uint256"}],"name":"stakeStart","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"xfLobby","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"referrerAddr","type":"address"}],"name":"xfLobbyEnter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"memberAddr","type":"address"},{"internalType":"uint256","name":"entryId","type":"uint256"}],"name":"xfLobbyEntry","outputs":[{"internalType":"uint256","name":"rawAmount","type":"uint256"},{"internalType":"address","name":"referrerAddr","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"enterDay","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"xfLobbyExit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"xfLobbyFlush","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"xfLobbyMembers","outputs":[{"internalType":"uint40","name":"headIndex","type":"uint40"},{"internalType":"uint40","name":"tailIndex","type":"uint40"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"memberAddr","type":"address"}],"name":"xfLobbyPendingDays","outputs":[{"internalType":"uint256[2]","name":"words","type":"uint256[2]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"beginDay","type":"uint256"},{"internalType":"uint256","name":"endDay","type":"uint256"}],"name":"xfLobbyRange","outputs":[{"internalType":"uint256[]","name":"list","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"}],"CHAINLINK_ABI":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}],"STAKING_ABI":[{"inputs":[{"internalType":"uint256","name":"_firstReloadPeriod","type":"uint256"},{"internalType":"uint256","name":"_reloadPeriod","type":"uint256"},{"internalType":"uint256","name":"_lockedPeriod","type":"uint256"},{"internalType":"uint256","name":"_emergencyUnlockFeeBps","type":"uint256"},{"internalType":"uint256","name":"_lockingCost","type":"uint256"},{"internalType":"address","name":"_CARN","type":"address"},{"internalType":"address","name":"_PLSD","type":"address"},{"internalType":"address","name":"_PLSB","type":"address"},{"internalType":"address","name":"_ASIC","type":"address"},{"internalType":"address","name":"_HEX","type":"address"},{"internalType":"address","name":"_BuyAndBurn","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositAmount","type":"uint256"}],"name":"ASICDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakeId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ASICRewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CarnSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakeId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penaltyAmount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositAmount","type":"uint256"}],"name":"HEXDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakeId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"HEXRewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LockedPeriodStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakeId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositAmount","type":"uint256"}],"name":"PLSBDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakeId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PLSBRewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositAmount","type":"uint256"}],"name":"PLSDDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakeId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PLSDRewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ReloadPeriodStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakeId","type":"uint256"}],"name":"RewardReset","type":"event"},{"inputs":[],"name":"ASIC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BuyAndBurn","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CARN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HEX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLSB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLSD","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"asicPendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"asicRewardPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"asicRewardPoolTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentStakeId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositASIC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositHEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositPLSB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositPLSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyUnlockFeeBps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hexPendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hexRewardPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hexRewardPoolTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockedPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockingCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsbPendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsbRewardPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsbRewardPoolTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsdPendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsdRewardPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsdRewardPoolTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reloadEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reloadPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reloadStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakePool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"stakeId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startLockedPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startReloadPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"enum PLSDStaker.State","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"WAATCA_ABI":[{"inputs":[{"internalType":"address","name":"_purchaseTokenUSDC","type":"address"},{"internalType":"address","name":"_rewardTokenPLSD","type":"address"},{"internalType":"address","name":"_rewardTokenPLSB","type":"address"},{"internalType":"address","name":"_rewardTokenASIC","type":"address"},{"internalType":"address","name":"_rewardTokenHEX","type":"address"},{"internalType":"address","name":"_rewardTokenUSDC","type":"address"},{"internalType":"address","name":"_carnivalBenevolentAddress","type":"address"},{"internalType":"uint256","name":"_mintExpirationDelta","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"burner","type":"address"},{"indexed":true,"internalType":"uint256","name":"currentTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"purchaseAmount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"uint256","name":"purchaseAmount","type":"uint256"},{"indexed":false,"internalType":"string","name":"uri","type":"string"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"currentTime","type":"uint256"}],"name":"MintWaatcaNFT","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"carnivalBenevolentAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deploymentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintDeadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintExpirationDelta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"purchaseAmount","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"mintWaatcaNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purchaseTokenUSDC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardTokenASIC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardTokenCARN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardTokenHEX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardTokenPLSB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardTokenPLSD","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardTokenUSDC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardTokenCARN","type":"address"}],"name":"setCarnAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToPurchaseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWaatcaNfts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"NFT_REWARDS_ABI":[{"inputs":[{"internalType":"address","name":"_waatcaAddress","type":"address"},{"internalType":"address","name":"_pulseBitcoinLockNftContractAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"CARN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pulseBitcoinLockNftContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"registerNftForRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardTokenCARN","type":"address"}],"name":"setCarnAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToDailyRewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToEndRewardsDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToLastWithdrawalDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFreeCarnWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"waatcaAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"withdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}],"NFT_HEX_REWARDS_ABI":[{"inputs":[{"internalType":"address","name":"_waatcaAddress","type":"address"},{"internalType":"address","name":"_pulseBitcoinLockNftContractAddress","type":"address"},{"internalType":"address","name":"_hexAddress","type":"address"},{"internalType":"address","name":"_CARN","type":"address"},{"internalType":"address","name":"_txnFeeSendTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NotOwnerError","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"TxnError","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"reason","type":"bytes"}],"name":"TxnErrorBytes","type":"event"},{"inputs":[],"name":"CARN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CARN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HEX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTxnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"bulkRegister","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"bulkWithdraw","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currentDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pulseBitcoinLockNftContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"registerNftForRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToDailyRewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToEndRewardsDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToLastWithdrawalDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFreeHexWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"txnFeeSendTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waatcaAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"withdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],"BURN_ABI":[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_carnAddress","type":"address"},{"internalType":"address","name":"_plsbAddress","type":"address"},{"internalType":"address","name":"_plsdAddress","type":"address"},{"internalType":"address","name":"_asicAddress","type":"address"},{"internalType":"address","name":"_hexAddress","type":"address"},{"internalType":"address","name":"_plsbNftRewardsAddress","type":"address"},{"internalType":"address","name":"_waatcaAddress","type":"address"},{"internalType":"uint24","name":"_poolFee","type":"uint24"},{"internalType":"uint256[]","name":"shares_","type":"uint256[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"enum BuyAndBurn.Ops","name":"op","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CARNProcessed","type":"event"},{"inputs":[],"name":"ASIC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CARN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HEX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PROCESSABLE_CARN","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLSB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLSD","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SWAPROUTER_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"asicPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"asicSentToWaatca","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"carnSentToPulseBitcoinLockNftRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hexPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hexSentToWaatca","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsbNftRewards","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsbPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsbSentToWaatca","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsdPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsdSentToWaatca","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum BuyAndBurn.Ops","name":"op","type":"uint8"},{"internalType":"uint128","name":"amountToProcess","type":"uint128"}],"name":"processCarn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum BuyAndBurn.Ops","name":"op","type":"uint8"}],"name":"processable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum BuyAndBurn.Ops","name":"op","type":"uint8"}],"name":"processed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapRouter","outputs":[{"internalType":"contract ISwapRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalProcessed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waatca","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"ASIC_MINER_ABI":[{"inputs":[{"internalType":"address","name":"_waatcaPoolAddress","type":"address"},{"internalType":"address","name":"_buyAndBurnContractAddress","type":"address"},{"internalType":"address","name":"_plsdStakingContractAddress","type":"address"},{"internalType":"address","name":"_CARN","type":"address"},{"internalType":"address","name":"_PLSB","type":"address"},{"internalType":"address","name":"_ASIC","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"ASICReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"CARNDepositToTrappedPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"CARNReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":true,"internalType":"uint256","name":"sessionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"asicAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"carnAmount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"}],"name":"MiningSessionStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reloadTime","type":"uint256"}],"name":"ReloadPeriodStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"withdrawer","type":"address"},{"indexed":true,"internalType":"uint256","name":"sessionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"plsbAmount","type":"uint256"}],"name":"RewardClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"miner","type":"address"},{"indexed":true,"internalType":"uint256","name":"sessionId","type":"uint256"}],"name":"RewardReset","type":"event"},{"inputs":[],"name":"ASIC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CARN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CARN_COST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_ASIC_DEPOSIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLSB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RELOAD_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRAPPED_POOL_TARGET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"asicDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"sessionId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"asicUsedToMine","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyAndBurnContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentSessionId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_asicAmount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_carnAmount","type":"uint256"}],"name":"depositCARNToTrappedPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nextMiningStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextReloadTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numParticipantsForThisSession","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numTotalDepositsForAllSessions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsdStakingContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startMiningSession","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startReloadPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"enum CarnivalCommunityASICMiner.State","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAsicDepositForTheCurrentSession","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAsicDepositForThePreviousSession","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPLSBRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trappedAsicReleasePool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waatcaPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"HEX_STAKER_ABI":[{"inputs":[{"internalType":"address","name":"_waatcaPoolAddress","type":"address"},{"internalType":"address","name":"_buyAndBurnContractAddress","type":"address"},{"internalType":"address","name":"_plsdStakingContractAddress","type":"address"},{"internalType":"address","name":"_thirdPoolAddress","type":"address"},{"internalType":"address","name":"_CARN","type":"address"},{"internalType":"address","name":"_HEX","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"CARNDepositToTrappedPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"CARNReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"depositor","type":"address"},{"indexed":true,"internalType":"uint256","name":"sessionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"hexAmount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"HEXReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reloadTime","type":"uint256"}],"name":"ReloadPeriodStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"withdrawer","type":"address"},{"indexed":true,"internalType":"uint256","name":"sessionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"hexAmount","type":"uint256"}],"name":"RewardClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"uint256","name":"sessionId","type":"uint256"}],"name":"RewardReset","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"}],"name":"StakingSessionStart","type":"event"},{"inputs":[],"name":"CARN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CARN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ETH_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HEX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HEXTOPLSDSTAKER_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HEXTOTHIRDPOOL_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HEXTOWAATCA_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_HEX_DEPOSIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RELOAD_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STARTOFF_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRAPPED_HEXTOPLSDSTAKER_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRAPPED_HEXTOTHIRDPOOL_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRAPPED_HEXTOWAATCA_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRAPPED_POOL_TARGET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceBefore","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyAndBurnContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentSessionId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_hexAmount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_carnAmount","type":"uint256"}],"name":"depositCARNToTrappedPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getStakeStore","outputs":[{"internalType":"uint40","name":"","type":"uint40"},{"internalType":"uint72","name":"","type":"uint72"},{"internalType":"uint72","name":"","type":"uint72"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hexDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"sessionId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextStakingStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numParticipantsForThisSession","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numTotalDepositsForAllSessions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"plsdStakingContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startReloadPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startStakingSession","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"enum HEXCommunityStaker.State","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"thirdPoolAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalHexDepositForTheCurrentSession","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalHexDepositForThePreviousSession","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trappedHexReleasePool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waatcaPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"PLSD_FAUCET_ABI":[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_carnTokenAddress","type":"address"},{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"},{"internalType":"uint256","name":"_delay","type":"uint256"},{"internalType":"uint256","name":"_carnBalanceRequired","type":"uint256"},{"internalType":"address","name":"_lockNFTAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"carnBalanceRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockNFTAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nextRequestAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"PLSB_FAUCET_ABI":[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_carnTokenAddress","type":"address"},{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"},{"internalType":"uint256","name":"_delay","type":"uint256"},{"internalType":"uint256","name":"_carnBalanceRequired","type":"uint256"},{"internalType":"address","name":"_lockNFTAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"carnBalanceRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockNFTAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nextRequestAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"CARN_FAUCET_ABI":[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_carnTokenAddress","type":"address"},{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"},{"internalType":"uint256","name":"_delay","type":"uint256"},{"internalType":"uint256","name":"_carnBalanceRequired","type":"uint256"},{"internalType":"address","name":"_lockNFTAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"carnBalanceRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockNFTAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nextRequestAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"ASIC_FAUCET_ABI":[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_carnTokenAddress","type":"address"},{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"},{"internalType":"uint256","name":"_delay","type":"uint256"},{"internalType":"uint256","name":"_carnBalanceRequired","type":"uint256"},{"internalType":"address","name":"_lockNFTAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"carnBalanceRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockNFTAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nextRequestAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"USDC_FAUCET_ABI":[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_carnTokenAddress","type":"address"},{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"},{"internalType":"uint256","name":"_delay","type":"uint256"},{"internalType":"uint256","name":"_carnBalanceRequired","type":"uint256"},{"internalType":"address","name":"_lockNFTAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"carnBalanceRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockNFTAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nextRequestAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"HEX_FAUCET_ABI":[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_carnTokenAddress","type":"address"},{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"},{"internalType":"uint256","name":"_delay","type":"uint256"},{"internalType":"uint256","name":"_carnBalanceRequired","type":"uint256"},{"internalType":"address","name":"_lockNFTAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"carnBalanceRequired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockNFTAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nextRequestAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"LOTTERY_ABI":[{"inputs":[{"internalType":"address","name":"_waatcaPoolAddress","type":"address"},{"internalType":"address","name":"_buyAndBurnContractAddress","type":"address"},{"internalType":"uint256","name":"_ticketPrice","type":"uint256"},{"internalType":"uint256","name":"_timeLength","type":"uint256"},{"internalType":"address","name":"_paymentToken","type":"address"},{"internalType":"address","name":"_carn","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"drawId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newLotteryDeadline","type":"uint256"}],"name":"DrawSkipped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"drawId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"drawId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TicketsBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"drawId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"WinnerSelected","type":"event"},{"inputs":[],"name":"CARN","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CARN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WAATCA_TRANSFER_BPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyAndBurnContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyTickets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"drawHistory","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"totalDeposits","type":"uint256"},{"internalType":"bool","name":"isRewardClaimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentDrawId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"}],"name":"getPlayerEntries","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTicketsSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_drawId","type":"uint256"}],"name":"getWinnerByDrawId","outputs":[{"internalType":"address","name":"winner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryDeadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"players","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randomResult","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_requestId","type":"uint256"},{"internalType":"uint256[]","name":"_randomWords","type":"uint256[]"}],"name":"rawFulfillRandomWords","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"requestId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_drawId","type":"uint256"}],"name":"sendRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ticketPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waatcaPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"TOKEN_ABI":[{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"minter_","type":"address"},{"internalType":"uint256","name":"mintingAllowedAfter_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"address","name":"newMinter","type":"address"}],"name":"MinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint96","name":"votes","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumTimeBetweenMints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mintCap","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mintingAllowedAfter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"minter_","type":"address"}],"name":"setMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"CONTRACT_ABI":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_lockedToken","type":"address"},{"internalType":"address","name":"_tipReceiver","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"burner","type":"address"},{"indexed":true,"internalType":"uint256","name":"currentTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"uint256","name":"_lockupAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_tipAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_lockTimeInterval","type":"uint256"},{"indexed":false,"internalType":"string","name":"uri","type":"string"},{"indexed":false,"internalType":"uint256","name":"unlockPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"currentTime","type":"uint256"}],"name":"LockUpAndMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockupAmount","type":"uint256"},{"internalType":"uint256","name":"tipAmount","type":"uint256"},{"internalType":"uint256","name":"_lockTimeInterval","type":"uint256"},{"internalType":"bool","name":"transferable","type":"bool"},{"internalType":"address","name":"mintTo","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"lockUpAndMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tipReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdsToTransferable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')
    },
    "395a": function (t, e, a) {
        "use strict";
        a("9de2")
    },
    "3ac5": function (t, e, a) {},
    "3d11": function (t, e, a) {
        t.exports = a.p + "img/lit_carn.35b93fcd.png"
    },
    "3eda": function (t, e, a) {
        t.exports = a.p + "img/18.b695c4dd.png"
    },
    "3f13": function (t, e, a) {
        t.exports = a.p + "img/24.cf64d361.png"
    },
    "433f": function (t, e, a) {
        t.exports = a.p + "img/diamond.ed724c0f.png"
    },
    4445: function (t, e, a) {
        t.exports = a.p + "img/1.d5884cc7.png"
    },
    4507: function (t, e, a) {
        t.exports = a.p + "img/15.a2744534.png"
    },
    "451a": function (t) {
        t.exports = JSON.parse('{"CHAIN_ID":[1,369],"NETWORK":"Mainnet","INFURA_ID":"2J6LT9OJUuoE2jThQiwsRVhBdn5","ALCHEMY_API_KEY":"ptELahnflpkGLVmVn7_tPKT1xjGchhCN","INFURA_SECRET_KEY":"374e3af37e03c5a9f65dad72c54fa5fa","OPENSEA_URL_BASE":"https://looksrare.org/collections/","ETHERSCAN_URL_BASE":"https://etherscan.io/","ALCHEMY_URL_BASE_NFT":"https://eth-mainnet.g.alchemy.com/nft/v2/","ALCHEMY_URL_BASE":"https://eth-mainnet.g.alchemy.com/v2/","CHAINLINK_ADDRESS":"0x514910771AF9Ca656af840dff83E8264EcF986CA","CARN_ADDRESS":"0x488Db574C77dd27A07f9C97BAc673BC8E9fC6Bf3","PLSD_ADDRESS":"0x34F0915a5f15a66Eba86F6a58bE1A471FB7836A7","PLSB_ADDRESS":"0x5EE84583f67D5EcEa5420dBb42b462896E7f8D06","ASIC_ADDRESS":"0x347a96a5BD06D2E15199b032F46fB724d6c73047","USDC_ADDRESS":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","HEX_ADDRESS":"0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39","WAATCA_ADDRESS":"0xd55fe0a9b00Bb8C2691FC5B30a99496B7A7c3665","NFT_REWARDS_ADDRESS":"0xfFB45A15C59260e57250442E6Db8BED1dca84B70","NFT_HEX_REWARDS_ADDRESS":"0xeb9014610d4daC128f9DA00C397Ce9119Ee777F5","PULSE_BITCOIN_LOCK_ADDRESS":"0x1f06E2bb54D4d08b0EbD01Be66DB2F7cCB9C814B","PLSB_FAUCET_ADDRESS":"0x2bb3DD0d15234f58C038B25b50f780A41aE6AD56","ASIC_FAUCET_ADDRESS":"0x43CC22bC54e5DADBc91Bd42e135eD726d807ece6","PLSD_FAUCET_ADDRESS":"0x313fCEe7582e260AfA45c392957457Fb166CD1Ff","CARN_FAUCET_ADDRESS":"0xE072bCd2818b424C4518958D266F6Cce81aB7782","HEX_FAUCET_ADDRESS":"0xA4ddAd14C0544A250841FD932f80E440c51e2e7E","USDC_FAUCET_ADDRESS":"0xa02b80B5844DE05D7f8c3b4b03eF0144e808EdAD","BURN_ADDRESS":"0x04E3FAa5758A2768DDAfd34D91E7D04eEf8FEae2","STAKING_ADDRESS":"0x02Eb294AF5e1fe16eB701f164Bf8CF396E0cD8Aa","ASIC_MINER_ADDRESS":"0x76Fe3456E212749Fa39bb81205473C53ff35F201","HEX_STAKER_ADDRESS":"0xeb2bF89F55E97B330291b9dd54798b82eDA7A4b3","PLSB_HOUR_LOTTERY_ADDRESS":"0x0932042e3Cce0C1ddD213013b07011494155EEFA","PLSD_HOUR_LOTTERY_ADDRESS":"0x8a6E4d9bfd0F82c6Aa58df274150d00124B58Ffb","ASIC_HOUR_LOTTERY_ADDRESS":"0xdB627E3E19DC0025Cf57Ed51356F38359DEAC0a1","CARN_HOUR_LOTTERY_ADDRESS":"0x0a008bEb50372C3B7Acc3A00441b12dEEdfEACd0","HEX_HOUR_LOTTERY_ADDRESS":"0x9fa81dfC4b0f18aB47f598225D6E16ff4B8f71eD","USDC_HOUR_LOTTERY_ADDRESS":"0xeF95634Fc4B3cD1AAC419C64D94F92fD52849C09","PLSB_WEEK_LOTTERY_ADDRESS":"0x5D2BF92155af202D3D2957e240cDc5Fe52F8Ff20","PLSD_WEEK_LOTTERY_ADDRESS":"0x3BFD350a58CB9a23665B24C754b29814b3f505B1","ASIC_WEEK_LOTTERY_ADDRESS":"0xe94314e6006b778Fcd61C7ca698a118B65f239d4","CARN_WEEK_LOTTERY_ADDRESS":"0x77c3cD8cbC6596b691A310c7C52b76FbfFe986A5","HEX_WEEK_LOTTERY_ADDRESS":"0xba4a8453892c3128CA73f030442a3a5C6c54a5f6","USDC_WEEK_LOTTERY_ADDRESS":"0x4Ace9De8e9b16e8f04bC2EeDfC888D7B7d7Ae4b7","PLSB_MONTH_LOTTERY_ADDRESS":"0x0457b889d620D6BcB5c7970468378B7ED20a92bD","PLSD_MONTH_LOTTERY_ADDRESS":"0xc67BD3378dC01bE46AC8F9da2f795c469D60ae1F","ASIC_MONTH_LOTTERY_ADDRESS":"0x30b3EaB9450036C432C1D2529E031D0F340E154e","CARN_MONTH_LOTTERY_ADDRESS":"0x03A577856aE51389545Aa9Cd7c9A2dC151731a70","HEX_MONTH_LOTTERY_ADDRESS":"0xB33910515c35fDD2E73e881D3a1FB8ddB37248D9","USDC_MONTH_LOTTERY_ADDRESS":"0x1dFd59D829F775BF4f93108Ba7608503b0BD729D","TOKEN_SYMBOL":"PLSB","TOKEN_ADDRESS":"0x5EE84583f67D5EcEa5420dBb42b462896E7f8D06","CONTRACT_ADDRESS":"0x1f06E2bb54D4d08b0EbD01Be66DB2F7cCB9C814B","UNIT_CONVERSION":"szabo","TOKEN_DECIMAL_CONVERSION":1000000000000,"TIP_ADDRESS":"0x3b3863Dd4dAA29244779987F5B744EB4B8a98ef8"}')
    },
    "47e1": function (t, e, a) {
        t.exports = a.p + "img/12.52c94186.png"
    },
    "47e5": function (t, e, a) {
        "use strict";
        a("defa")
    },
    "4ba4": function (t, e, a) {
        t.exports = a.p + "img/23.05b61f90.png"
    },
    "4d25": function (t, e, a) {},
    "4f75": function (t, e, a) {
        t.exports = a.p + "img/lit_stake_plsd.b24a7207.png"
    },
    5219: function (t, e, a) {},
    "553a": function (t, e, a) {},
    5562: function (t, e, a) {
        t.exports = a.p + "img/17.02a7f497.png"
    },
    "56d7": function (t, e, a) {
        "use strict";
        a.r(e);
        var n = a("2b0e"),
            s = a("2f62"),
            i = a("7496"),
            o = a("40dc"),
            r = a("5bc1"),
            l = a("8336"),
            d = a("8860"),
            c = a("da13"),
            u = a("5d23"),
            p = a("1baa"),
            y = a("f6c4"),
            m = a("f774"),
            h = a("2fa4"),
            A = function () {
                var t = this,
                    e = t._self._c;
                return e(i["a"], {
                    class: t.isLoading ? "loading" : "",
                    attrs: {
                        id: "inspire"
                    }
                }, [t.isLoading ? e("div", {
                    staticClass: "main-loader"
                }, [e("img", {
                    attrs: {
                        src: a("014d")
                    }
                })]) : t._e(), e(m["a"], {
                    attrs: {
                        width: 300,
                        app: ""
                    },
                    model: {
                        value: t.drawer,
                        callback: function (e) {
                            t.drawer = e
                        },
                        expression: "drawer"
                    }
                }, [e(d["a"], {
                    attrs: {
                        nav: ""
                    }
                }, [e(c["a"], [e("img", {
                    staticStyle: {
                        width: "100%",
                        height: "100%",
                        margin: "auto"
                    },
                    attrs: {
                        src: a("f65b")
                    }
                })]), e(p["a"], {
                    attrs: {
                        color: "primary"
                    },
                    model: {
                        value: t.selectedItem,
                        callback: function (e) {
                            t.selectedItem = e
                        },
                        expression: "selectedItem"
                    }
                }, [t._l(t.items, (function (a, n) {
                    return [e(c["a"], {
                        key: n + "link",
                        attrs: {
                            to: {
                                name: a.link
                            },
                            exact: "",
                            disabled: "Carnival Lotteries" === a.text && 369 == t.walletChainID || "Carnival Lotteries" === a.text && 943 == t.walletChainID || a.disable
                        },
                        on: {
                            click: function (e) {
                                "Carnival Lotteries" === a.text ? t.showSubLinks = !t.showSubLinks : t.showSubLinks = !1
                            }
                        }
                    }, [e(u["a"], [e("img", {
                        attrs: {
                            width: "45px",
                            src: t.getImgUrl(a.icon)
                        }
                    })])], 1), t._l(a.subLinks, (function (a, n) {
                        return [t.showSubLinks ? [e(c["a"], {
                            key: n + "sublink",
                            attrs: {
                                exact: "",
                                to: {
                                    name: a.link
                                },
                                disabled: a.disable
                            }
                        }, [e(u["a"], [e("img", {
                            attrs: {
                                width: "25px",
                                src: t.getImgUrl(a.icon)
                            }
                        })])], 1)] : t._e()]
                    }))]
                })), e("a", {
                    staticStyle: {
                        "text-decoration": "none"
                    },
                    attrs: {
                        href: 1 == t.walletChainID || 5 == t.walletChainID ? "https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x488Db574C77dd27A07f9C97BAc673BC8E9fC6Bf3&chain=mainnet" : "https://uniswap.hedron.pro/#/swap?outputCurrency=0x488Db574C77dd27A07f9C97BAc673BC8E9fC6Bf3",
                        target: "_blank"
                    }
                }, [e(c["a"], [e(u["a"], [e("img", {
                    attrs: {
                        width: "45px",
                        src: t.getImgUrl("lit_carnuniswap.png")
                    }
                })])], 1)], 1), e("a", {
                    staticStyle: {
                        "text-decoration": "none"
                    },
                    attrs: {
                        href: "https://twitter.com/KB_Dev_Official",
                        target: "_blank"
                    }
                }, [e(c["a"], [e(u["a"], [e("img", {
                    attrs: {
                        width: "45px",
                        src: t.getImgUrl("lit_twitter.png")
                    }
                })])], 1)], 1), e("a", {
                    staticStyle: {
                        "text-decoration": "none"
                    },
                    attrs: {
                        href: "https://t.me/waatca",
                        target: "_blank"
                    }
                }, [e(c["a"], [e(u["a"], [e("img", {
                    attrs: {
                        width: "45px",
                        src: t.getImgUrl("lit_telegram.png")
                    }
                })])], 1)], 1)], 2)], 1)], 1), e(o["a"], {
                    attrs: {
                        app: ""
                    }
                }, [e(r["a"], {
                    staticStyle: {
                        "background-color": "#faf9f6"
                    },
                    on: {
                        click: function (e) {
                            t.drawer = !t.drawer
                        }
                    }
                }), e(h["a"]), "WhitePaper" !== t.$route.name && "Faq" !== t.$route.name && "PulseBitcoinFaucet" !== t.$route.name && "LotteriesHour" !== t.$route.name && "LotteriesWeek" !== t.$route.name ? e(l["a"], {
                    staticClass: "mr-4",
                    attrs: {
                        color: "primary"
                    }
                }, [e("a", {
                    staticClass: "white--text",
                    attrs: {
                        href: t.dynamicLink,
                        target: "_blank"
                    }
                }, [t._v(" Contract ")])]) : t._e(), t.getUserAddress ? e(l["a"], {
                    staticClass: "mr-4",
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: t.switchChain
                    }
                }, [t._v(" " + t._s(1 == t.walletChainID ? "Switch to PulseChain" : 369 == t.walletChainID ? "Switch to Ethereum" : 5 == t.walletChainID ? "Switch to Testnet v4" : "Switch to Goerli Chain") + " ")]) : t._e(), e(l["a"], {
                    attrs: {
                        color: "primary",
                        readonly: !!t.getUserAddress
                    },
                    on: {
                        click: t.onConnect
                    }
                }, [t._v(" " + t._s(t.getUserAddress ? t.addrTruncation(t.getUserAddress) : "Connect Wallet") + " ")])], 1), e(y["a"], {
                    class: t.$route.name
                }, [e("div", {
                    staticClass: "pa-5 pa-sm-8",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e("router-view")], 1)])], 1)
            },
            T = [],
            g = a("c0d8"),
            S = a.n(g),
            C = a("5aac"),
            b = a.n(C),
            _ = a("3783"),
            f = {
                name: "App",
                data() {
                    return {
                        drawer: null,
                        showSubLinks: !1,
                        selectedItem: 0,
                        items: [{
                            text: "HEX Community Staker",
                            icon: "lit_hex_staker.png",
                            link: "Hex",
                            disable: !1
                        }, {
                            text: "HEX Rewards",
                            icon: "lit_hex_rewards.png",
                            link: "FreeHex",
                            disable: !1
                        }, {
                            text: "CARN Rewards",
                            icon: "lit_carn.png",
                            link: "FreeCarn",
                            disable: !1
                        }, {
                            text: "CARN Token Booth",
                            icon: "lit_booth.png",
                            link: "CarnTicketBooth",
                            disable: !1
                        }, {
                            text: "BUY & BURN",
                            icon: "lit_buy_and_burn.png",
                            link: "BuyAndBurn",
                            disable: !1
                        }, {
                            text: "Carnival Lotteries",
                            icon: "lit_lottery_general.png",
                            link: "Lotteries",
                            subLinks: [{
                                text: "Daily Lotteries",
                                icon: "lit_daily.png",
                                active: !1,
                                link: "LotteriesHour",
                                disable: !0
                            }, {
                                text: "Weekly Lotteries",
                                icon: "lit_weekly.png",
                                active: !1,
                                link: "LotteriesWeek",
                                disable: !0
                            }, {
                                text: "Monthly Lotteries",
                                icon: "lit_monthly.png",
                                active: !1,
                                link: "LotteriesMonth",
                                disable: !1
                            }]
                        }, {
                            text: "Stake PulseDogecoin",
                            icon: "lit_stake_plsd.png",
                            link: "StakePulseDogecoin",
                            disable: !1
                        }, {
                            text: "Community ASIC Miner",
                            icon: "lit_asic_miner.png",
                            link: "CommunityCarnivalAsicMiner",
                            disable: !1
                        }, {
                            text: "Pulse Bitcoin Lock",
                            icon: "lit_pulsebitcoinlock.png",
                            link: "PulseBitcoinLockApp",
                            disable: !0
                        }, {
                            text: "WAATCA",
                            icon: "lit_waatca.png",
                            link: "WAATCA",
                            disable: !1
                        }, {
                            text: "White Paper",
                            icon: "lit_wp.png",
                            link: "WhitePaper",
                            disable: !1
                        }, {
                            text: "F.A.Q.",
                            icon: "lit_faq.png",
                            link: "Faq",
                            disable: !1
                        }, {
                            text: "Disclaimer",
                            icon: "lit_disclaimer.png",
                            link: "Disclaimer",
                            disable: !1
                        }],
                        provider: null,
                        web3Modal: null,
                        tokenBalance: 0,
                        isAlreadyConnected: !1,
                        isCaptchaVerifed: !1,
                        sitekey: "6Ldv4KAjAAAAAJczfC6DGtN4s9qfgncrjCU2TUx0"
                    }
                },
                beforeMount() {
                    const t = {
                        walletconnect: {
                            options: {
                                rpc: {
                                    1: "https://mainnet.infura.io/v3/"
                                },
                                chainId: 1,
                                network: "binance",
                                infuraId: "2af64799935b4be086c072d13f0dad73"
                            }
                        }
                    };
                    this.web3Modal = new b.a({
                        providerOptions: t,
                        cacheProvider: !1,
                        disableInjectedProvider: !1
                    })
                },
                mounted() {
                    window.ethereum && window.ethereum.request({
                        method: "eth_accounts"
                    }).then(t => {
                        t.length && (this.provider = window.ethereum, this.onProvider())
                    }).catch(t => {
                        console.error(t)
                    })
                },
                methods: {
                    downloadPDF() {
                        var t = document.createElement("a");
                        t.href = "./PulseDogecoin_Staking_Carnival_White_PaperV3.pdf", t.download = "PulseDogecoin_Staking_Carnival_White_PaperV3.pdf"
                    },
                    getImgUrl(t) {
                        var e = a("9142");
                        return e("./" + t)
                    },
                    async onConnect() {
                        try {
                            this.provider = await this.web3Modal.connect(), this.onProvider(), this.isAlreadyConnected || (this.provider.on("accountsChanged", t => {
                                console.log(t), this.onProvider()
                            }), this.provider.on("chainChanged", t => {
                                console.log(t), this.onProvider()
                            }))
                        } catch (t) {
                            return void console.log("Could not get a wallet connection", t)
                        }
                    },
                    async onProvider() {
                        this.isAlreadyConnected = !0;
                        let t = new S.a(this.provider),
                            e = await t.eth.getAccounts(),
                            a = await t.eth.getChainId();
                        if (this.CHAIN_ID.includes(Number(a))) this.SET_WALLETCHAINID(Number(a));
                        else try {
                            return await window.ethereum.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: "0x" + this.CHAIN_ID[0].toString(16)
                                }]
                            }), void this.onProvider()
                        } catch (E) {
                            return void this.$toasted.show(`Only Ethereum ${this.NETWORK[0]} Network is supported`)
                        }
                        let n = new t.eth.Contract(_.CARN_ABI, this.CARN_ADDRESS),
                            s = new t.eth.Contract(_.PLSD_ABI, this.PLSD_ADDRESS),
                            i = new t.eth.Contract(_.PLSB_ABI, this.PLSB_ADDRESS),
                            o = new t.eth.Contract(_.ASIC_ABI, this.ASIC_ADDRESS),
                            r = new t.eth.Contract(_.USDC_ABI, this.USDC_ADDRESS),
                            l = new t.eth.Contract(_.HEX_ABI, this.HEX_ADDRESS),
                            d = new t.eth.Contract(_.CHAINLINK_ABI, this.CHAINLINK_ADDRESS),
                            c = new t.eth.Contract(_.STAKING_ABI, this.STAKING_ADDRESS),
                            u = new t.eth.Contract(_.WAATCA_ABI, this.WAATCA_ADDRESS),
                            p = new t.eth.Contract(_.NFT_REWARDS_ABI, this.NFT_REWARDS_ADDRESS),
                            y = new t.eth.Contract(_.NFT_HEX_REWARDS_ABI, this.NFT_HEX_REWARDS_ADDRESS),
                            m = new t.eth.Contract(_.BURN_ABI, this.BURN_ADDRESS),
                            h = new t.eth.Contract(_.ASIC_MINER_ABI, this.ASIC_MINER_ADDRESS),
                            A = new t.eth.Contract(_.HEX_STAKER_ABI, this.HEX_STAKER_ADDRESS),
                            T = new t.eth.Contract(_.CARN_FAUCET_ABI, this.CARN_FAUCET_ADDRESS),
                            g = new t.eth.Contract(_.PLSD_FAUCET_ABI, this.PLSD_FAUCET_ADDRESS),
                            C = new t.eth.Contract(_.PLSB_FAUCET_ABI, this.PLSB_FAUCET_ADDRESS),
                            b = new t.eth.Contract(_.ASIC_FAUCET_ABI, this.ASIC_FAUCET_ADDRESS),
                            f = new t.eth.Contract(_.USDC_FAUCET_ABI, this.USDC_FAUCET_ADDRESS),
                            w = new t.eth.Contract(_.HEX_FAUCET_ABI, this.HEX_FAUCET_ADDRESS),
                            v = new t.eth.Contract(_.TOKEN_ABI, this.TOKEN_ADDRESS),
                            D = new t.eth.Contract(_.CONTRACT_ABI, this.CONTRACT_ADDRESS);
                        this.SET_WEB3(t), this.SET_USER_ADDRESS(e[0]), this.SET_CARN_INSTANCE(n), this.SET_PLSD_INSTANCE(s), this.SET_PLSB_INSTANCE(i), this.SET_ASIC_INSTANCE(o), this.SET_USDC_INSTANCE(r), this.SET_HEX_INSTANCE(l), this.SET_CHAINLINK_INSTANCE(d), this.SET_STAKING_INSTANCE(c), this.SET_WAATCA_INSTANCE(u), this.SET_NFT_REWARDS_INSTANCE(p), this.SET_NFT_HEX_REWARDS_INSTANCE(y), this.SET_BURN_INSTANCE(m), this.SET_ASIC_MINER_INSTANCE(h), this.SET_HEX_STAKER_INSTANCE(A), this.SET_CARN_FAUCET_INSTANCE(T), this.SET_PLSD_FAUCET_INSTANCE(g), this.SET_PLSB_FAUCET_INSTANCE(C), this.SET_ASIC_FAUCET_INSTANCE(b), this.SET_USDC_FAUCET_INSTANCE(f), this.SET_HEX_FAUCET_INSTANCE(w), this.SET_TOKEN_INSTANCE(v), this.SET_CONTRACT_INSTANCE(D), this.$toasted.show("Wallet Connected Successfully")
                    },
                    async switchChain() {
                        let t = null;
                        t = this.walletChainID === this.CHAIN_ID[0] ? this.CHAIN_ID[1] : this.CHAIN_ID[0];
                        try {
                            await window.ethereum.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: "0x" + t.toString(16)
                                }]
                            }), this.SET_WEB3(null), this.SET_USER_ADDRESS(null), this.onProvider()
                        } catch (e) {
                            switch (t) {
                                case 369:
                                    await window.ethereum.request({
                                        method: "wallet_addEthereumChain",
                                        params: [{
                                            chainId: "0x" + t.toString(16),
                                            rpcUrls: ["https://rpc.pulsechain.com"],
                                            chainName: "PulseChain",
                                            nativeCurrency: {
                                                symbol: "PLS",
                                                decimals: 18
                                            },
                                            blockExplorerUrls: ["https://scan.pulsechain.com"]
                                        }]
                                    }), this.SET_WEB3(null), this.SET_USER_ADDRESS(null), this.onProvider();
                                    break;
                                case 943:
                                    await window.ethereum.request({
                                        method: "wallet_addEthereumChain",
                                        params: [{
                                            chainId: "0x" + t.toString(16),
                                            rpcUrls: ["https://rpc.v4.testnet.pulsechain.com"],
                                            chainName: "Testnet v4",
                                            nativeCurrency: {
                                                symbol: "tPLS",
                                                decimals: 18
                                            },
                                            blockExplorerUrls: ["https://scan.v4.testnet.pulsechain.com"]
                                        }]
                                    }), this.SET_WEB3(null), this.SET_USER_ADDRESS(null), this.onProvider();
                                    break
                            }
                        }
                    }
                },
                computed: {
                    ...Object(s["c"])("wallet", ["isLoading"]),
                    dynamicLink() {
                        let t = "";
                        switch (this.$route.name) {
                            case "StakePulseDogecoin":
                                t = this.ETHERSCAN_URL_BASE + "address/" + this.STAKING_ADDRESS;
                                break;
                            case "CommunityCarnivalAsicMiner":
                                t = this.ETHERSCAN_URL_BASE + "address/" + this.ASIC_MINER_ADDRESS;
                                break;
                            case "FreeCarn":
                                t = this.ETHERSCAN_URL_BASE + "address/" + this.NFT_REWARDS_ADDRESS;
                                break;
                            case "FreeHex":
                                t = this.ETHERSCAN_URL_BASE + "address/" + this.NFT_HEX_REWARDS_ADDRESS;
                                break;
                            case "Hex":
                                t = this.ETHERSCAN_URL_BASE + "address/" + this.HEX_STAKER_ADDRESS;
                                break;
                            case "CarnTicketBooth":
                                t = this.ETHERSCAN_URL_BASE + "address/" + this.CARN_ADDRESS;
                                break;
                            case "BuyAndBurn":
                                t = this.ETHERSCAN_URL_BASE + "address/" + this.BURN_ADDRESS;
                                break;
                            case "Lotteries":
                                t = this.ETHERSCAN_URL_BASE + "address/";
                                break;
                            case "WAATCA":
                                t = this.ETHERSCAN_URL_BASE + "address/" + this.WAATCA_ADDRESS
                        }
                        return t
                    }
                }
            },
            w = f,
            v = (a("9b29"), a("2877")),
            D = Object(v["a"])(w, A, T, !1, null, null, null),
            E = D.exports,
            I = a("8c4f"),
            N = a("b0af"),
            R = a("62ad"),
            k = a("ce7e"),
            L = a("8270"),
            x = a("0fd9"),
            B = a("8654"),
            P = a("3a2f"),
            M = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e(x["a"], {
                    staticClass: "justify-center"
                }, [e(R["a"], [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("PLSD")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("d5e2")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.PLSDBalance)) + " $PLSD ")])], 1)], 1)], 1)], 1), e(R["a"], [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("PLSB")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "blue"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("d52b")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.PLSBBalance)) + " $PLSB ")])], 1)], 1)], 1)], 1), e(R["a"], [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("ASIC")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "purple darken-2"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("76e7")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.ASICBalance)) + " $ASIC ")])], 1)], 1)], 1)], 1), e(R["a"], [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.CARNBalance)) + " $CARN ")])], 1)], 1)], 1)], 1), e(R["a"], [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("HEX")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("c06d")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.eightFormat(t.HEXBalance)) + " $HEX ")])], 1)], 1)], 1)], 1)], 1), e(x["a"], {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.getUserAddress,
                        expression: "getUserAddress"
                    }],
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-5"
                }, [e(N["a"], {
                    staticClass: "mx-auto text-center"
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "demo"
                    }
                }, [t._v("0 Days 0 Hours 0 Minutes 0 Seconds")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" until the " + t._s(t.text) + " Period is Over. ")])], 1)], 1)], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12 col-md-6"
                }, [e(N["a"], {
                    staticClass: "pa-3 pa-sm-5",
                    class: 0 === this.state ? "" : "bg-grey",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("10 Day Reload Period")]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" 10 days to withdraw principal + rewards and then stake again ")]), e(k["a"], {
                    staticClass: "my-5"
                }), e(N["a"], {
                    staticClass: "pa-5 my-5",
                    attrs: {
                        outlined: ""
                    }
                }, [e("h3", {
                    staticClass: "font-weight-regular"
                }, [t._v(" Withdraw Principal + Rewards from the Last Staking Period "), e(P["a"], {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function ({
                            on: n,
                            attrs: s
                        }) {
                            return [e("img", t._g(t._b({
                                attrs: {
                                    width: "18px",
                                    src: a("7b13")
                                }
                            }, "img", s, !1), n))]
                        }
                    }])
                }, [e("span", [t._v(" Rewards come from all the different parts of the Carnival including the Community ASIC Miner, the Lotteries, Penalties from Emergency End Staking and Not Withdrawing rewards on time etc. ")])])], 1), e(l["a"], {
                    staticClass: "py-5 mt-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || Number(t.stakes.stakeId) === t.currentStakeId || !Number(t.stakes.amount)
                    },
                    on: {
                        click: t.onClaimRewards
                    }
                }, [t._v(" Withdraw ")])], 1), e(N["a"], {
                    staticClass: "pa-5 my-5",
                    attrs: {
                        outlined: ""
                    }
                }, [e(B["a"], {
                    attrs: {
                        outlined: "",
                        type: "text",
                        label: "Enter Stake Amount"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        t.stakeAmount = t.twelveFormat(t.PLSDBalance, 12)
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.stakeAmount,
                        callback: function (e) {
                            t.stakeAmount = e
                        },
                        expression: "stakeAmount"
                    }
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || !!Number(t.stakes.amount)
                    },
                    on: {
                        click: function (e) {
                            return t.onPLSDApprove(!0)
                        }
                    }
                }, [t._v(" " + t._s(t.isPLSDApproved ? t.isCARNApproved ? Number(t.stakes.stakeId) === t.currentStakeId && t.stakes.amount > 0 ? `You Staked: ${t.twelveFormat(t.stakes.amount)} $PLSD` : "Stake" : "Approve CARN" : "Approve PLSD") + " ")]), e("small", [t._v("30 CARN PER RIDE")])], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-md-6"
                }, [e(N["a"], {
                    staticClass: "pa-3 pa-sm-5",
                    class: 1 === this.state ? "" : "bg-grey",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("90 Day Staked Period")]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" 90 day period where your $PLSD is staked. ")]), e(k["a"], {
                    staticClass: "my-6"
                }), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" You Staked: " + t._s(Number(t.stakes.stakeId) > t.currentStakeId - 2 ? t.twelveFormat(t.stakes.amount) : 0) + " PLSD ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Total Staked: " + t._s(t.twelveFormat(t.totalStaked)) + " PLSD ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Pool Ownership: " + t._s(Number(t.totalStaked) ? 100 * ((Number(t.stakes.stakeId) === t.currentStakeId - 1 ? Number(t.stakes.amount) : 0) / Number(t.totalStaked)).toFixed(5) : 0) + "% (This field will populate once stake begins) ")]), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Total Pool PLSD Rewards: " + t._s(t.twelveFormat(t.plsdRewardPoolTotal)) + " $PLSD ")]), e("h3", {
                    staticClass: "my-3"
                }, [t._v(" Total Pool PLSB Rewards: " + t._s(t.twelveFormat(t.plsbRewardPoolTotal)) + " $PLSB ")]), e("h3", {
                    staticClass: "my-3"
                }, [t._v(" Total Pool ASIC Rewards: " + t._s(t.twelveFormat(t.asicRewardPoolTotal)) + " $ASIC ")]), e("h3", {
                    staticClass: "my-3"
                }, [t._v(" Total Pool HEX Rewards: " + t._s(t.eightFormat(t.hexRewardPoolTotal)) + " $HEX ")]), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "red white--text",
                        disabled: !t.getUserAddress || t.isLoading || !Number(t.stakes.amount) || 0 === t.state
                    },
                    on: {
                        click: t.onEmergency
                    }
                }, [t._v(" Emergency End Stake and Withdraw"), e("br"), t._v(" 75% Principal and No Rewards ")])], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-6"
                }, [e(N["a"], {
                    staticClass: "mx-auto"
                }, [e(l["a"], {
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "secondary",
                        disabled: !t.getUserAddress || t.isLoading || !t.showStartReloadPeriodButton
                    },
                    on: {
                        click: t.onLockingPeriod
                    }
                }, [t._v(" Start Reload Period ")])], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-6"
                }, [e(N["a"], {
                    staticClass: "mx-auto"
                }, [e(l["a"], {
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "secondary",
                        disabled: !t.getUserAddress || t.isLoading || !t.showStartStakedPeriodButton
                    },
                    on: {
                        click: t.onLockedPeriod
                    }
                }, [t._v(" Start Staked Period ")])], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12"
                }, [e(N["a"], {
                    staticClass: "pa-5",
                    attrs: {
                        outlined: ""
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v(" Reward Pool Donations "), e(P["a"], {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function ({
                            on: n,
                            attrs: s
                        }) {
                            return [e("img", t._g(t._b({
                                attrs: {
                                    width: "18px",
                                    src: a("7b13")
                                }
                            }, "img", s, !1), n))]
                        }
                    }])
                }, [e("span", [t._v('The following 4 functions allow anyone to "Donate" some PLSD, PLSB, ASIC or HEX to the staking rewards pool. '), e("br"), t._v('If the "Donation" is made during the reload period,then the amount will be "Pending" until the Staked Period starts at which point, all "Pending" donations will be transferred to the reward pool. '), e("br"), t._v(" These are the same 4 functions that the Lottery and Community ASIC Miner use to give some of their revenue towards the PLSD Staking Rewards Pool. "), e("br"), t._v(" Do Not send any coins directly to the contract address itself as they will be lost forever!")])])], 1), t._v(" The following 4 functions allow anyone to Benevolently DONATE some PLSD, PLSB, ASIC and HEX to the staking rewards pool. "), e(k["a"], {
                    staticClass: "my-5"
                }), e(x["a"], [e("div", {
                    staticClass: "col-12 col-md-3"
                }, [e("label", {
                    attrs: {
                        for: ""
                    }
                }, [t._v("PLSD Pending Reward: " + t._s(t.twelveFormat(t.plsdPendingRewards)))]), e(B["a"], {
                    staticClass: "mt-3",
                    attrs: {
                        outlined: "",
                        label: "Enter PLSD Amount",
                        type: "text"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        t.PLSDDepositAmount = t.twelveFormat(t.PLSDBalance, 12)
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.PLSDDepositAmount,
                        callback: function (e) {
                            t.PLSDDepositAmount = e
                        },
                        expression: "PLSDDepositAmount"
                    }
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading
                    },
                    on: {
                        click: function (e) {
                            return t.onPLSDApprove(!1)
                        }
                    }
                }, [t._v(" " + t._s(t.isPLSDApproved ? "Donate PLSD" : "Approve PLSD") + " ")]), e(k["a"], {
                    staticClass: "d-block d-sm-none mt-6"
                })], 1), e("div", {
                    staticClass: "col-12 col-md-3"
                }, [e("label", {
                    attrs: {
                        for: ""
                    }
                }, [t._v("PLSB Pending Reward: " + t._s(t.twelveFormat(t.plsbPendingRewards)))]), e(B["a"], {
                    staticClass: "mt-3",
                    attrs: {
                        outlined: "",
                        label: "Enter PLSB Amount",
                        type: "text"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        t.PLSBDepositAmount = t.twelveFormat(t.PLSBBalance, 12)
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.PLSBDepositAmount,
                        callback: function (e) {
                            t.PLSBDepositAmount = e
                        },
                        expression: "PLSBDepositAmount"
                    }
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading
                    },
                    on: {
                        click: t.onPLSBApprove
                    }
                }, [t._v(" " + t._s(t.isPLSBApproved ? "Donate PLSB" : "Approve PLSB") + " ")]), e(k["a"], {
                    staticClass: "d-block d-sm-none mt-6"
                })], 1), e("div", {
                    staticClass: "col-12 col-md-3"
                }, [e("label", {
                    attrs: {
                        for: ""
                    }
                }, [t._v("ASIC Pending Reward: " + t._s(t.twelveFormat(t.asicPendingRewards)))]), e(B["a"], {
                    staticClass: "mt-3",
                    attrs: {
                        outlined: "",
                        label: "Enter ASIC Amount",
                        type: "text"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        t.ASICDepositAmount = t.twelveFormat(t.ASICBalance, 12)
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.ASICDepositAmount,
                        callback: function (e) {
                            t.ASICDepositAmount = e
                        },
                        expression: "ASICDepositAmount"
                    }
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading
                    },
                    on: {
                        click: t.onASICApprove
                    }
                }, [t._v(" " + t._s(t.isASICApproved ? "Donate ASIC" : "Approve ASIC") + " ")])], 1), e("div", {
                    staticClass: "col-12 col-md-3"
                }, [e("label", {
                    attrs: {
                        for: ""
                    }
                }, [t._v("HEX Pending Reward: " + t._s(t.eightFormat(t.hexPendingRewards)))]), e(B["a"], {
                    staticClass: "mt-3",
                    attrs: {
                        outlined: "",
                        label: "Enter HEX Amount",
                        type: "text"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        t.HEXDepositAmount = t.eightFormat(t.HEXBalance, 8)
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.HEXDepositAmount,
                        callback: function (e) {
                            t.HEXDepositAmount = e
                        },
                        expression: "HEXDepositAmount"
                    }
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading
                    },
                    on: {
                        click: t.onHEXApprove
                    }
                }, [t._v(" " + t._s(t.isHEXApproved ? "Donate HEX" : "Approve HEX") + " ")])], 1)])], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12"
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("h1", [t._v("Staking Instructions")]), e(k["a"], {
                    staticClass: "my-2"
                }), e("ol", [e("li", [e("strong", [t._v(" Approve the smart contract to interact with your PLSD and CARN")])]), e("li", [e("strong", [t._v(' During a Reload Period, Choose how much PLSD you want to stake and enter that number into the "Enter Stake Amount" field, then click Stake')])]), e("li", [e("strong", [t._v(" Upon staking, 30 CARN will be withdrawn from your wallet also, so make sure to have at least 30 CARN in you wallet before staking")])]), e("li", [e("strong", [t._v(" You can only stake 1 time per wallet")])]), e("li", [e("strong", [t._v(" A normal reload period is 10 days, but the initial reload period will be 30 days")])]), e("li", [e("strong", [t._v(" Once the Reload Period Ends, anyone can click the START STAKED PERIOD button, and like wise once the Staker Period ends, anyone can click the START RELOAD PERIOD button")])]), e("li", [e("strong", [t._v(" Once a staked period ends, and the 10 day reload period begins, you must withdraw your principal PLSD and PLSD, PLSB, ASIC and HEX rewards in that 10 days or you lose all your principal and rewards")])]), e("li", [e("strong", [t._v(" After you withdraw your principal and rewards, you can stake again for the next 90 day period if you want.")])]), e("li", [e("strong", [t._v(" During the 90 day staking period you can Emergency End Stake if want and get 75% of your principal and NO REWARDS")])]), e("li", [e("strong", [t._v(' The purpose of the "Reward Pool Donations" section above is for benevolent whales - if they choose to - deposit coins using those functions to increase rewards for stakers. (Behind the scenes those same 4 functions are being utilized by the ASIC community Miner, the Hex Community Staker and the Lotteries to distribute a portion of their revenues to the PLSD stakers.')])])])], 1)], 1)])], 1)
            },
            F = [],
            H = {
                name: "StakePulseDogecoin",
                data() {
                    return {
                        text: "Reload",
                        clearIntervalX: null,
                        stakeAmount: 0,
                        reloadStart: 0,
                        reloadEnd: 0,
                        state: 0,
                        isCARNApproved: !1,
                        isPLSDApproved: !1,
                        isPLSBApproved: !1,
                        isASICApproved: !1,
                        isHEXApproved: !1,
                        CARNBalance: 0,
                        PLSDBalance: 0,
                        PLSBBalance: 0,
                        ASICBalance: 0,
                        HEXBalance: 0,
                        currentStakeId: 0,
                        totalStaked: 0,
                        stakes: 0,
                        PLSDDepositAmount: 0,
                        PLSBDepositAmount: 0,
                        ASICDepositAmount: 0,
                        HEXDepositAmount: 0,
                        plsdPendingRewards: 0,
                        plsbPendingRewards: 0,
                        asicPendingRewards: 0,
                        hexPendingRewards: 0,
                        plsdRewardPoolTotal: 0,
                        plsbRewardPoolTotal: 0,
                        asicRewardPoolTotal: 0,
                        hexRewardPoolTotal: 0,
                        PLSDContractBalance: 0
                    }
                },
                beforeDestroy() {
                    clearInterval(this.clearIntervalX)
                },
                async mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    readValues() {
                        let t = this.getUserAddress;
                        Promise.all([this.getCARNInstance.methods.allowance(t, this.STAKING_ADDRESS).call(), this.getPLSDInstance.methods.allowance(t, this.STAKING_ADDRESS).call(), this.getPLSBInstance.methods.allowance(t, this.STAKING_ADDRESS).call(), this.getASICInstance.methods.allowance(t, this.STAKING_ADDRESS).call(), this.getHEXInstance.methods.allowance(t, this.STAKING_ADDRESS).call(), this.getPLSDInstance.methods.balanceOf(t).call(), this.getPLSBInstance.methods.balanceOf(t).call(), this.getCARNInstance.methods.balanceOf(t).call(), this.getASICInstance.methods.balanceOf(t).call(), this.getHEXInstance.methods.balanceOf(t).call(), this.getStakingInstance.methods.currentStakeId().call(), this.getStakingInstance.methods.stakes(t).call(), this.getStakingInstance.methods.plsdRewardPoolTotal().call(), this.getStakingInstance.methods.plsbRewardPoolTotal().call(), this.getStakingInstance.methods.asicRewardPoolTotal().call(), this.getStakingInstance.methods.hexRewardPoolTotal().call(), this.getStakingInstance.methods.plsdPendingRewards().call(), this.getStakingInstance.methods.plsbPendingRewards().call(), this.getStakingInstance.methods.asicPendingRewards().call(), this.getStakingInstance.methods.hexPendingRewards().call(), this.getStakingInstance.methods.reloadStart().call(), this.getStakingInstance.methods.reloadEnd().call(), this.getStakingInstance.methods.state().call(), this.getPLSDInstance.methods.balanceOf(this.STAKING_ADDRESS).call()]).then(async ([t, e, a, n, s, i, o, r, l, d, c, u, p, y, m, h, A, T, g, S, C, b, _, f]) => {
                            console.log("stakes:", u), console.log("reloadEnd:", b), console.log("reloadStart:", C), console.log("state:", _), console.log("currentStakeId:", c), console.log("isCARNApproved:", !!t), console.log("isPLSDApproved:", !!e), console.log("isPLSBApproved:", !!a), console.log("isASICApproved:", !!n), console.log("isHEXApproved:", !!s), console.log("PLSDBalance:", this.twelveFormat(i)), console.log("PLSBBalance:", this.twelveFormat(o)), console.log("CARNBalance:", this.twelveFormat(r)), console.log("ASICBalance:", this.twelveFormat(l)), console.log("HEXBalance:", this.twelveFormat(d)), console.log("plsdRewardPoolTotal:", p), console.log("plsbRewardPoolTotal:", y), console.log("asicRewardPoolTotal:", m), console.log("hexRewardPoolTotal:", h), console.log("plsdPendingRewards:", A), console.log("plsbPendingRewards:", T), console.log("asicPendingRewards:", g), console.log("hexPendingRewards:", S), console.log("PLSDContractBalance:", f), this.isCARNApproved = t > 0, this.isPLSDApproved = e > 0, this.isPLSBApproved = a > 0, this.isASICApproved = n > 0, this.isHEXApproved = s > 0, this.currentStakeId = Number(c), this.CARNBalance = r, this.PLSDBalance = i, this.PLSBBalance = o, this.ASICBalance = l, this.HEXBalance = d, this.stakes = u, this.plsdRewardPoolTotal = p, this.plsbRewardPoolTotal = y, this.asicRewardPoolTotal = m, this.hexRewardPoolTotal = h, this.plsdPendingRewards = A, this.plsbPendingRewards = T, this.asicPendingRewards = g, this.hexPendingRewards = S, this.totalStaked = await this.getStakingInstance.methods.stakePool(this.currentStakeId - 1).call(), console.log("totalStaked:", this.totalStaked), this.reloadStart = Number(C), this.reloadEnd = Number(b), this.state = Number(_), this.PLSDContractBalance = f, clearInterval(this.clearIntervalX), this.counter()
                        })
                    },
                    counter() {
                        let t = 0;
                        0 === this.state ? (this.text = "Reload", t = 1e3 * this.reloadEnd, console.log("here state is 0")) : 1 === this.state && (this.text = "Staked", t = 1e3 * this.reloadStart, console.log("here state is 1")), this.clearIntervalX = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e + 2e4,
                                n = Math.floor(a / 864e5),
                                s = Math.floor(a % 864e5 / 36e5),
                                i = Math.floor(a % 36e5 / 6e4),
                                o = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalX), document.getElementById("demo").innerHTML = "0 Days 0 Hours 0 Minutes 0 Seconds") : document.getElementById("demo").innerHTML = `${n} Days ${s} Hours ${i} Minutes ${o} Seconds`
                        }), 1e3)
                    },
                    onPLSDApprove(t) {
                        this.getUserAddress ? this.isPLSDApproved ? t ? this.isCARNApproved ? this.onStake() : this.onCARNApprove() : this.onPLSDDeposit() : (this.SET_LOADING(!0), this.getPLSDInstance.methods.approve(this.STAKING_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("PLSD Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("PLSD Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("PLSD Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onCARNApprove() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getCARNInstance.methods.approve(this.STAKING_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("CARN Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("CARN Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("CARN Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onStake() {
                        this.stakeAmount ? Number(this.twelveFormat(this.CARNBalance)) < 30 ? this.$toasted.show("You Need at least 30 CARN in your account to Stake") : Number(this.stakeAmount) > Number(this.twelveFormat(this.PLSDBalance, 12)) ? this.$toasted.show("Insufficient balance in your wallet.") : (this.SET_LOADING(!0), this.getStakingInstance.methods.stake(this.twelveToWei(this.stakeAmount)).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Staking transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("Staking transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Staking transaction has Failed")
                        })) : this.$toasted.show("Enter PLSD Staking Amount")
                    },
                    onPLSDDeposit() {
                        this.PLSDDepositAmount ? Number(this.PLSDDepositAmount) > Number(this.twelveFormat(this.PLSDBalance)) ? this.$toasted.show("Insufficient balance in your wallet.") : (this.SET_LOADING(!0), this.getStakingInstance.methods.depositPLSD(this.twelveToWei(this.PLSDDepositAmount)).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("PLSD Deposit transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("PLSD Deposit transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("PLSD Deposit transaction has Failed")
                        })) : this.$toasted.show("Enter PLSD Deposit Amount")
                    },
                    onPLSBApprove() {
                        this.getUserAddress ? this.isPLSBApproved ? this.onPLSBDeposit() : (this.SET_LOADING(!0), this.getPLSBInstance.methods.approve(this.STAKING_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("PLSB Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("PLSB Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("PLSB Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onPLSBDeposit() {
                        this.PLSBDepositAmount ? Number(this.PLSBDepositAmount) > Number(this.twelveFormat(this.PLSBBalance)) ? this.$toasted.show("Insufficient balance in your wallet.") : (this.SET_LOADING(!0), this.getStakingInstance.methods.depositPLSB(this.twelveToWei(this.PLSBDepositAmount)).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("PLSB Deposit transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("PLSB Deposit transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("PLSB Deposit transaction has Failed")
                        })) : this.$toasted.show("Enter PLSB Deposit Amount")
                    },
                    onASICApprove() {
                        this.getUserAddress ? this.isASICApproved ? this.onASICDeposit() : (this.SET_LOADING(!0), this.getASICInstance.methods.approve(this.STAKING_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("ASIC Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("ASIC Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("ASIC Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onASICDeposit() {
                        this.ASICDepositAmount ? Number(this.ASICDepositAmount) > Number(this.twelveFormat(this.ASICBalance)) ? this.$toasted.show("Insufficient balance in your wallet.") : (this.SET_LOADING(!0), this.getStakingInstance.methods.depositASIC(this.twelveToWei(this.ASICDepositAmount)).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("ASIC Deposit transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("ASIC Deposit transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("ASIC Deposit transaction has Failed")
                        })) : this.$toasted.show("Enter ASIC Deposit Amount")
                    },
                    onHEXApprove() {
                        this.getUserAddress ? this.isHEXApproved ? this.onHEXDeposit() : (this.SET_LOADING(!0), this.getHEXInstance.methods.approve(this.STAKING_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("HEX Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("HEX Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("HEX Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onHEXDeposit() {
                        this.HEXDepositAmount ? Number(this.HEXDepositAmount) > Number(this.eightFormat(this.HEXBalance)) ? this.$toasted.show("Insufficient balance in your wallet.") : (this.SET_LOADING(!0), this.getStakingInstance.methods.depositHEX(this.eightToWei(this.HEXDepositAmount)).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("HEX Deposit transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("HEX Deposit transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("HEX Deposit transaction has Failed")
                        })) : this.$toasted.show("Enter HEX Deposit Amount")
                    },
                    onClaimRewards() {
                        this.SET_LOADING(!0), this.getStakingInstance.methods.claimRewards().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Claim Rewards transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Claim Rewards transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Claim Rewards transaction has Failed")
                        })
                    },
                    onEmergency() {
                        this.SET_LOADING(!0), this.getStakingInstance.methods.emergencyEnd().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Emergency end transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Emergency end transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Emergency end transaction has Failed")
                        })
                    },
                    onLockingPeriod() {
                        this.SET_LOADING(!0), this.getStakingInstance.methods.startReloadPeriod().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Start Reload Period transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Start Reload Period transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Start Reload Period transaction has Failed")
                        })
                    },
                    onLockedPeriod() {
                        this.SET_LOADING(!0), this.getStakingInstance.methods.startLockedPeriod().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Start Locked transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Start Locked transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Start Locked transaction has Failed")
                        })
                    },
                    clearForm() {
                        this.stakeAmount = 0, this.PLSDDepositAmount = 0, this.PLSBDepositAmount = 0, this.ASICDepositAmount = 0
                    }
                },
                computed: {
                    showStartReloadPeriodButton() {
                        return 1 === this.state && (new Date).getTime() > 1e3 * this.reloadStart
                    },
                    showStartStakedPeriodButton() {
                        return 0 === this.state && (new Date).getTime() > 1e3 * this.reloadEnd
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            U = H,
            O = (a("19a1"), Object(v["a"])(U, M, F, !1, null, null, null)),
            $ = O.exports,
            W = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e(x["a"], [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("ASIC")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "purple darken-2"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("76e7")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.ASICBalance)) + " $ASIC ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("PLSB")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "blue"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("d52b")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.PLSBBalance)) + " $PLSB ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.CARNBalance)) + " $CARN ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.getUserAddress,
                        expression: "getUserAddress"
                    }],
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-5"
                }, [e(N["a"], {
                    staticClass: "mx-auto text-center"
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "demo"
                    }
                }, [t._v("0 Days 0 Hours 0 Minutes 0 Seconds")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v("until the " + t._s(t.text) + " is Over.")])], 1)], 1)], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12 col-md-6"
                }, [e(N["a"], {
                    staticClass: "pa-3 pa-sm-5",
                    class: 0 === this.state ? "" : "bg-grey",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("5 Day Reload Period")]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" 5 days to withdraw your share of the mined PulseBitcoin and then deposit more ASIC for the next mining session ")]), e(k["a"], {
                    staticClass: "my-5"
                }), e(N["a"], {
                    staticClass: "pa-5 my-5",
                    attrs: {
                        outlined: ""
                    }
                }, [e("h3", {
                    staticClass: "font-weight-regular"
                }, [t._v(" Withdraw your share of the mined PulseBitcoin from the last mining session ")]), e(l["a"], {
                    staticClass: "py-5 mt-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || Number(t.asicDeposits.sessionId) === t.currentSessionId || !Number(t.asicDeposits.amount)
                    },
                    on: {
                        click: t.onClaimReward
                    }
                }, [t._v(" Withdraw PulseBitcoin ")])], 1), e(N["a"], {
                    staticClass: "pa-5 my-5",
                    attrs: {
                        outlined: ""
                    }
                }, [e(B["a"], {
                    attrs: {
                        outlined: "",
                        type: "text",
                        label: "Enter ASIC Deposit Amount"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        t.ASICDepositAmount = t.twelveFormat(t.ASICBalance, 12)
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.ASICDepositAmount,
                        callback: function (e) {
                            t.ASICDepositAmount = e
                        },
                        expression: "ASICDepositAmount"
                    }
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading
                    },
                    on: {
                        click: function (e) {
                            return t.onASICApprove()
                        }
                    }
                }, [t._v(" " + t._s(t.isASICApproved ? t.isCARNApproved ? "Deposit ASIC" : "Approve CARN" : "Approve ASIC") + " ")]), e("small", [t._v("10 CARN PER RIDE")]), e("br"), e("small", [t._v("Note: You do NOT get your ASIC back, ever.")]), e("br"), e("small", [t._v("Note: With this deposit, you will only get $PLSB for THIS mining session, NOT future sessions")])], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-md-6"
                }, [e(N["a"], {
                    staticClass: "pa-3 pa-sm-5",
                    class: 1 === this.state ? "" : "bg-grey",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("30 Day ASIC Mining Session")]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" 30 days period where the community's ASIC goes to work. ")]), e(k["a"], {
                    staticClass: "my-6"
                }), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" You Deposited: " + t._s(Number(t.asicDeposits.sessionId) > t.currentSessionId - 2 ? t.twelveFormat(t.asicDeposits.amount) : 0) + " $ASIC ")]), e("h3", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 === t.state,
                        expression: "state===0"
                    }],
                    staticClass: "my-5"
                }, [t._v(" Total ASIC Deposited For Upcoming Session: " + t._s(t.twelveFormat(t.totalAsicDepositForTheCurrentSession)) + " $ASIC ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Total ASIC Deposited for " + t._s(0 === t.state ? "Previous" : "This") + " Mining Session: " + t._s(Number(t.twelveFormat(t.totalAsicDepositForThePreviousSession))) + " $ASIC ")]), 0 === t.state && Number(t.asicDeposits.sessionId) === t.currentSessionId ? e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Upcoming Pool Ownership: " + t._s(Number(t.totalAsicDepositForTheCurrentSession) ? 100 * (Number(t.asicDeposits.amount) / Number(t.totalAsicDepositForTheCurrentSession)).toFixed(2) : 0) + "% ")]) : t._e(), 0 === t.state && Number(t.asicDeposits.sessionId) === t.currentSessionId - 1 ? e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Previous Pool Ownership: " + t._s(Number(t.totalAsicDepositForThePreviousSession) ? 100 * (Number(t.asicDeposits.amount) / Number(t.totalAsicDepositForThePreviousSession)).toFixed(2) : 0) + "% ")]) : t._e(), 1 === t.state && Number(t.asicDeposits.sessionId) === t.currentSessionId - 1 ? e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Pool Ownership: " + t._s(Number(t.totalAsicDepositForThePreviousSession) ? 100 * (Number(t.asicDeposits.amount) / Number(t.totalAsicDepositForThePreviousSession)).toFixed(2) : 0) + "% ")]) : t._e(), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Total ASIC " + t._s(0 === t.state ? "Held By" : "Mined with") + " the Community Miner: " + t._s(0 === t.state ? Number(t.twelveFormat(t.totalAsicHeldByTheAsicMinerAddress)) : Number(t.twelveFormat(t.asicUsedToMine))) + " $ASIC ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Number of Deposits for " + t._s(0 === t.state ? "Upcoming Mining Session" : "This Mining Session") + ": " + t._s(t.numParticipantsForThisSession) + " Deposits ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Number of Deposits in ALL sessions: " + t._s(t.numTotalDepositsForAllSessions) + " Deposits ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Total PLSB " + t._s(0 === t.state ? "Mined in Previous Mining Session" : "Being Mined In This Session") + " + Unclaimed $PLSB: " + t._s(t.twelveFormat(t.totalPLSBRewards)) + " $PLSB ")]), 0 === t.state ? e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Total Unclaimed Rewards: " + t._s(t.twelveFormat(t.unclaimedRewards)) + " ")]) : t._e()], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-6"
                }, [e(N["a"], {
                    staticClass: "mx-auto"
                }, [e(l["a"], {
                    staticClass: "mt-5 py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "secondary",
                        disabled: !t.getUserAddress || t.isLoading || !t.showStartReloadPeriodButton
                    },
                    on: {
                        click: t.onStartReloadPeriod
                    }
                }, [t._v(" End Mining Session ")])], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-6"
                }, [e(N["a"], {
                    staticClass: "mx-auto"
                }, [e(l["a"], {
                    staticClass: "mt-5 py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "secondary",
                        disabled: !t.getUserAddress || t.isLoading || !t.showStartStakedPeriodButton
                    },
                    on: {
                        click: t.onStartMiningSession
                    }
                }, [t._v(" Mine PulseBitcoin with " + t._s(t.twelveFormat(t.totalAsicHeldByTheAsicMinerAddress)) + " $ASIC Tokens ")])], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-md-6"
                }, [e(N["a"], {
                    staticClass: "pa-5",
                    attrs: {
                        outlined: ""
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v(" The Trapped ASIC Release Pool ")]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" ALL the ASIC that has been collected over time will be trapped in the contract until this pool reaches 100K $CARN, at which point ALL the trapped ASIC will be released: 60% to PulseDogecoin Stakers and 40% to the WAATCA POOL. The 100K CARN will all go to the BUY and BURN Contract. ")]), e(k["a"], {
                    staticClass: "my-5"
                }), e(x["a"], [e("div", {
                    staticClass: "col-12"
                }, [e("label", {
                    attrs: {
                        for: ""
                    }
                }, [t._v("Amount of CARN Collected So Far: " + t._s(t.twelveFormat(t.trappedAsicReleasePool)))]), e(B["a"], {
                    staticClass: "mt-3",
                    attrs: {
                        outlined: "",
                        label: "CARN Amount",
                        type: "text"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        t.CARNDepositAmount = t.twelveFormat(t.CARNBalance, 12)
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.CARNDepositAmount,
                        callback: function (e) {
                            t.CARNDepositAmount = e
                        },
                        expression: "CARNDepositAmount"
                    }
                }), t.isCARNApproved ? e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading
                    },
                    on: {
                        click: t.onCARNDeposit
                    }
                }, [t._v(" " + t._s(Number(t.CARNDepositAmount) + Number(t.twelveFormat(t.trappedAsicReleasePool)) >= 1e5 ? "DEPOSIT CARN AND RELEASE ALL TRAPPED ASIC" : "Deposit CARN") + " ")]) : e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading
                    },
                    on: {
                        click: t.onCARNApprove
                    }
                }, [t._v(" Approve CARN ")])], 1)])], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12"
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("h1", [t._v("Community ASIC Miner Instructions")]), e(k["a"], {
                    staticClass: "my-2"
                }), e("ol", [e("li", [e("strong", [t._v(" Approve the smart contract to interact with your ASIC and CARN")])]), e("li", [e("strong", [t._v(' During a Reload Period, Choose how much ASIC you want to deposit into the community Miner and enter that number into the "Enter ASIC Deposit Amount" field, then click "Deposit ASIC". To participate, you must deposit at least 25 ASIC.')])]), e("li", [e("strong", [t._v(" Upon depositing ASIC, 10 CARN will be withdrawn from your wallet also, so make sure to have at least 10 CARN in you wallet before staking")])]), e("li", [e("strong", [t._v("You can deposit ASIC multiple times from the same wallet. So if you deposit a certain amount of ASIC, then you can deposit more after that from the same wallet.")])]), e("li", [e("strong", [t._v(" A normal reload period is 5 days, but the initial reload period will be 30 days")])]), e("li", [e("strong", [t._v(' Once the Reload Period Ends, anyone can click the "Mine PulseBitcoin" button, and like wise once the Mining Session ends, anyone can click the "End Mining Session" button')])]), e("li", [e("strong", [t._v(" Once a Mining Session ends, and the 5 day reload period begins, you must withdraw your PLSB rewards in that 10 days or you lose it all and it will be distributed to the next set of Community Miners in the next mining session")])]), e("li", [e("strong", [t._v(" Your PLSB reward is a percentage of the total PLSB Mined during current session with all the ASIC in the Community Miner. That percentage is the ASIC you deposited in this session only divided by the total ASIC deposited for this session only.")])]), e("li", [e("strong", [t._v("Example: At the start of the 10th reload period (~10 months after launch of the Carnival) lets say there is 1,000,000 ASIC in the Community Miner that has built up over the last 10 months. Then during that 10th reload period ONLY 2 people deposit 25 ASIC into the Community Miner. Then those 2 people will split the total PLSB mined with that 1,000,050 (around ~75K PLSB). All people who deposited ASIC in the earlier mining session will get a piece of that ~75K PLSB")])]), e("li", [e("strong", [t._v(" After you withdraw your PLSB reward, you can deposit more ASIC for the next 30 day Mining Session if you want.")])]), e("li", [e("strong", [t._v(' All the ASIC deposited into the Community Miner is trapped inside the smart contract until "The Trapped ASIC Release Pool" reaches 100K CARN, at which point all trapped ASIC gets released (60% to the PLSD stakers, 40% to the WAATCA NFT Pool) ')])]), e("li", [e("strong", [t._v(" That 100K CARN all gets sent to the Buy and Burn contract")])])])], 1)], 1)])], 1)
            },
            X = [],
            G = {
                name: "ASICMiner",
                data() {
                    return {
                        text: "Reload",
                        clearIntervalX: null,
                        ASICBalance: 0,
                        CARNBalance: 0,
                        PLSBBalance: 0,
                        isASICApproved: !1,
                        isCARNApproved: !1,
                        ASICDepositAmount: 0,
                        CARNDepositAmount: 0,
                        state: 0,
                        currentSessionId: 0,
                        asicDeposits: 0,
                        nextReloadTime: 0,
                        nextMiningStartTime: 0,
                        unclaimedRewards: 0,
                        totalPLSBRewards: 0,
                        trappedAsicReleasePool: 0,
                        totalAsicDepositForTheCurrentSession: 0,
                        totalAsicDepositForThePreviousSession: 0,
                        totalAsicHeldByTheAsicMinerAddress: 0,
                        numTotalDepositsForAllSessions: 0,
                        numParticipantsForThisSession: 0,
                        asicUsedToMine: 0
                    }
                },
                beforeDestroy() {
                    clearInterval(this.clearIntervalX)
                },
                async mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    readValues() {
                        let t = this.getUserAddress;
                        Promise.all([this.getASICInstance.methods.allowance(t, this.ASIC_MINER_ADDRESS).call(), this.getCARNInstance.methods.allowance(t, this.ASIC_MINER_ADDRESS).call(), this.getASICInstance.methods.balanceOf(t).call(), this.getCARNInstance.methods.balanceOf(t).call(), this.getPLSBInstance.methods.balanceOf(t).call(), this.getASICMinerInstance.methods.state().call(), this.getASICMinerInstance.methods.currentSessionId().call(), this.getASICMinerInstance.methods.asicDeposits(t).call(), this.getASICMinerInstance.methods.nextReloadTime().call(), this.getASICMinerInstance.methods.nextMiningStartTime().call(), this.getASICMinerInstance.methods.unclaimedRewards().call(), this.getASICMinerInstance.methods.totalPLSBRewards().call(), this.getASICMinerInstance.methods.trappedAsicReleasePool().call(), this.getASICMinerInstance.methods.totalAsicDepositForTheCurrentSession().call(), this.getASICMinerInstance.methods.totalAsicDepositForThePreviousSession().call(), this.getASICInstance.methods.balanceOf(this.ASIC_MINER_ADDRESS).call(), this.getASICMinerInstance.methods.asicUsedToMine().call(), this.getASICMinerInstance.methods.numTotalDepositsForAllSessions().call(), this.getASICMinerInstance.methods.numParticipantsForThisSession().call()]).then(async ([t, e, a, n, s, i, o, r, l, d, c, u, p, y, m, h, A, T, g]) => {
                            console.log("isASICApproved:", !!Number(t)), console.log("isCARNApproved:", !!Number(e)), console.log("ASICBalance:", this.twelveFormat(a)), console.log("CARNBalance:", this.twelveFormat(n)), console.log("PLSBBalance:", this.twelveFormat(s)), console.log("state:", i), console.log("currentSessionId:", o), console.log("asicDeposits:", r), console.log("nextReloadTime:", l), console.log("nextMiningStartTime:", d), console.log("unclaimedRewards:", c), console.log("totalPLSBRewards:", u), console.log("trappedAsicReleasePool:", p), console.log("totalAsicDepositForTheCurrentSession:", y), console.log("totalAsicDepositForThePreviousSession:", m), console.log("totalAsicHeldByTheAsicMinerAddress: ", h), console.log("asicUsedToMine:", A), console.log("numTotalDepositsForAllSessions:", T), console.log("numParticipantsForThisSession: ", g), this.isASICApproved = Number(t) > 0, this.isCARNApproved = Number(e) > 0, this.ASICBalance = a, this.CARNBalance = n, this.PLSBBalance = s, this.state = Number(i), this.currentSessionId = Number(o), this.asicDeposits = r, this.nextReloadTime = Number(l), this.nextMiningStartTime = Number(d), this.unclaimedRewards = c, this.totalPLSBRewards = u, this.trappedAsicReleasePool = p, this.totalAsicDepositForTheCurrentSession = y, this.totalAsicDepositForThePreviousSession = m, this.totalAsicHeldByTheAsicMinerAddress = h, this.asicUsedToMine = A, this.numTotalDepositsForAllSessions = T, this.numParticipantsForThisSession = g, clearInterval(this.clearIntervalX), this.counter()
                        })
                    },
                    counter() {
                        let t = 0;
                        0 === this.state ? (this.text = "Reload Period", t = 1e3 * this.nextMiningStartTime, console.log("here state is 0")) : 1 === this.state && (this.text = "Mining Session", t = 1e3 * this.nextReloadTime, console.log("here state is 1")), this.clearIntervalX = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a / 864e5),
                                s = Math.floor(a % 864e5 / 36e5),
                                i = Math.floor(a % 36e5 / 6e4),
                                o = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalX), document.getElementById("demo").innerHTML = "0 Days 0 Hours 0 Minutes 0 Seconds") : document.getElementById("demo").innerHTML = `${n} Days ${s} Hours ${i} Minutes ${o} Seconds`
                        }), 1e3)
                    },
                    onClaimReward() {
                        this.SET_LOADING(!0), this.getASICMinerInstance.methods.claimReward().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Claim Rewards transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Claim Rewards transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Claim Rewards transaction has Failed")
                        })
                    },
                    onASICApprove() {
                        this.getUserAddress ? this.isASICApproved ? this.isCARNApproved ? this.onASICDeposit() : this.onCARNApprove() : (this.SET_LOADING(!0), this.getASICInstance.methods.approve(this.ASIC_MINER_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("ASIC Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("ASIC Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("ASIC Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onASICDeposit() {
                        this.ASICDepositAmount ? Number(this.ASICDepositAmount) < 25 ? this.$toasted.show("You need at least 25 ASIC in your account to deposit") : Number(this.ASICDepositAmount) > Number(this.twelveFormat(this.ASICBalance)) ? this.$toasted.show("Insufficient balance in your wallet.") : Number(this.twelveFormat(this.CARNBalance)) < 10 ? this.$toasted.show("You need at least 10 CARN in your account to deposit") : (this.SET_LOADING(!0), this.getASICMinerInstance.methods.deposit(this.twelveToWei(this.ASICDepositAmount)).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("ASIC Deposit transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("ASIC Deposit transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("ASIC Deposit transaction has Failed")
                        })) : this.$toasted.show("Enter ASIC Deposit Amount")
                    },
                    onStartMiningSession() {
                        this.SET_LOADING(!0), this.getASICMinerInstance.methods.startMiningSession().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Start Mining Session transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Start Mining Session transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Start Mining Session transaction has Failed")
                        })
                    },
                    onStartReloadPeriod() {
                        this.SET_LOADING(!0), this.getASICMinerInstance.methods.startReloadPeriod().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Start Reload Period transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Start Reload Period transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Start Reload Period transaction has Failed")
                        })
                    },
                    onCARNApprove() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getCARNInstance.methods.approve(this.ASIC_MINER_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("CARN Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("CARN Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("CARN Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onCARNDeposit() {
                        this.CARNDepositAmount ? Number(this.CARNDepositAmount) > Number(this.twelveFormat(this.CARNBalance)) ? this.$toasted.show("Insufficient balance in your wallet.") : (this.SET_LOADING(!0), this.getASICMinerInstance.methods.depositCARNToTrappedPool(this.twelveToWei(this.CARNDepositAmount)).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("CARN Deposit transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("CARN Deposit transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("CARN Deposit transaction has Failed")
                        })) : this.$toasted.show("Enter CARN Deposit Amount")
                    },
                    clearForm() {
                        this.ASICDepositAmount = 0, this.CARNDepositAmount = 0
                    }
                },
                computed: {
                    showStartReloadPeriodButton() {
                        return 1 === this.state && (new Date).getTime() > 1e3 * this.nextReloadTime
                    },
                    showStartStakedPeriodButton() {
                        return 0 === this.state && (new Date).getTime() > 1e3 * this.nextMiningStartTime
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            Y = G,
            K = (a("e593"), Object(v["a"])(Y, W, X, !1, null, null, null)),
            V = K.exports,
            j = a("ac7c"),
            q = a("23a7"),
            z = a("e449"),
            J = a("67b6"),
            Q = a("43a6"),
            Z = a("a844"),
            tt = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "stake_card_body"
                }, [e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-9 col-xl-5"
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("div", {
                    staticClass: "d-flex justify-space-between align-center"
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v(" Stake Your PLS at the PulseChain Carnival ")])]), e(k["a"], {
                    staticClass: "mt-0 my-7"
                }), e("div", {
                    staticClass: "d-flex justify-end mb-4"
                }, [e("small", [t._v(" Available Amount: "), e("strong", [t._v(t._s(t.formator(t.tokenBalance, 2)) + " " + t._s(t.TOKEN_SYMBOL))])])]), e(x["a"], [e("div", {
                    staticClass: "col-6 py-1"
                }, [e(B["a"], {
                    attrs: {
                        outlined: "",
                        type: "number",
                        placeholder: "1",
                        label: "Number of " + t.TOKEN_SYMBOL + " tokens to lock up"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: "",
                                    disabled: !t.getUserAddress
                                },
                                on: {
                                    click: function (e) {
                                        t.lockupAmount = t.tokenBalance / t.TOKEN_DECIMAL_CONVERSION
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.lockupAmount,
                        callback: function (e) {
                            t.lockupAmount = t._n(e)
                        },
                        expression: "lockupAmount"
                    }
                })], 1), e("div", {
                    staticClass: "col-6 py-1"
                }, [e(B["a"], {
                    attrs: {
                        outlined: "",
                        type: "number",
                        placeholder: "Example: 1, 5555 or 10000!",
                        label: "Number of days to lock up"
                    },
                    on: {
                        keypress: function (e) {
                            return t.isNumber(e)
                        }
                    },
                    model: {
                        value: t.lockupDays,
                        callback: function (e) {
                            t.lockupDays = t._n(e)
                        },
                        expression: "lockupDays"
                    }
                })], 1), e("div", {
                    staticClass: "col-6 py-1"
                }, [e(q["a"], {
                    attrs: {
                        outlined: "",
                        "prepend-icon": "",
                        "append-icon": "mdi-paperclip",
                        label: "Upload an image for your NFT",
                        placeholder: "350 x 350 image is recommended"
                    },
                    on: {
                        change: t.onSelect
                    }
                })], 1), e("div", {
                    staticClass: "col-6 py-1"
                }, [e(B["a"], {
                    attrs: {
                        outlined: "",
                        type: "text",
                        label: "Optional Developer Tip (in  " + t.TOKEN_SYMBOL + ")",
                        placeholder: "Example: 0"
                    },
                    model: {
                        value: t.lockupTip,
                        callback: function (e) {
                            t.lockupTip = t._n(e)
                        },
                        expression: "lockupTip"
                    }
                })], 1), e("div", {
                    staticClass: "col-12 py-1 text-center"
                }, [t.imageSrc ? e("img", {
                    staticClass: "imageSrc",
                    attrs: {
                        src: t.imageSrc,
                        width: "350px",
                        height: "350px"
                    }
                }) : t._e()]), e("div", {
                    staticClass: "col-12 py-1"
                }, [e(Z["a"], {
                    attrs: {
                        outlined: "",
                        label: "Enter a statement for your NFT",
                        placeholder: 'Example: "Not your keys, not your coins" or "A failure to plan, is a plan for failure"...You can put a poem, lyrics to your favorite song, an inspiring quote, a goal of yours, what you plan on doing with these coins once you Burn your NFT etc BE CREATIVE and remember this statement is immutable.'
                    },
                    model: {
                        value: t.lockupDescription,
                        callback: function (e) {
                            t.lockupDescription = e
                        },
                        expression: "lockupDescription"
                    }
                })], 1), e("div", {
                    staticClass: "col-6 py-1"
                }, [e(Q["a"], {
                    attrs: {
                        mandatory: ""
                    },
                    model: {
                        value: t.transferable,
                        callback: function (e) {
                            t.transferable = e
                        },
                        expression: "transferable"
                    }
                }, [e(J["a"], {
                    attrs: {
                        label: "Non-Transferable (until Lock Up period ends)",
                        value: !1
                    }
                }), e(J["a"], {
                    attrs: {
                        label: "Transferable (even before Lock Up period ends)",
                        value: !0
                    }
                })], 1)], 1), e("div", {
                    staticClass: "col-6 py-1"
                }, [e(j["a"], {
                    attrs: {
                        label: "Mint to a different address?"
                    },
                    model: {
                        value: t.mint_to_different_address,
                        callback: function (e) {
                            t.mint_to_different_address = e
                        },
                        expression: "mint_to_different_address"
                    }
                }), t.mint_to_different_address ? e(B["a"], {
                    attrs: {
                        outlined: "",
                        type: "text",
                        label: "Enter Address",
                        placeholder: "Paste the address that you want the NFT to be minted to"
                    },
                    model: {
                        value: t.mint_to_address,
                        callback: function (e) {
                            t.mint_to_address = e
                        },
                        expression: "mint_to_address"
                    }
                }) : t._e()], 1)]), e(l["a"], {
                    staticClass: "mt-8",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isBtnLoading
                    },
                    on: {
                        click: t.onApprove
                    }
                }, [t._v(" " + t._s(t.isBtnLoading ? "Loading.." : t.isApproved ? `Lock up ${t.lockupAmount} ${t.TOKEN_SYMBOL} for ${0 | t.lockupDays} ${t.isPlural(0 | t.lockupDays)} and Mint my ${this.transferable ? "Transferable" : "Non-Transferable"} NFT ${t.mintToText()}` : "Approve PLSB") + " ")]), e(k["a"], {
                    staticClass: "mt-10"
                }), e("small", {
                    staticClass: "d-block text-right"
                }, [t._v("If you'd like to tip in USDC, ETH, ASIC, PLSB, HEX, HDRN etc, donate here ---\x3e "), e(l["a"], {
                    staticClass: "py-0 pr-0",
                    attrs: {
                        small: "",
                        text: ""
                    },
                    on: {
                        click: function (e) {
                            return t.copy_to_clipboard(t.TIP_ADDRESS)
                        }
                    }
                }, [t._v(" 📋" + t._s(t.addrTruncation(t.TIP_ADDRESS)) + " ")])], 1)], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12"
                }, [e(N["a"], {
                    staticClass: "pa-5",
                    staticStyle: {
                        "max-width": "1080px",
                        margin: "auto"
                    }
                }, [e("div", {
                    staticClass: "row mt-1"
                }, [e("div", {
                    staticClass: "col-12"
                }, [e("div", {
                    staticClass: "d-flex justify-space-between align-items-center"
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("Your NFTs")]), e(z["a"], {
                    attrs: {
                        "offset-y": ""
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function ({
                            on: a,
                            attrs: n
                        }) {
                            return [e(l["a"], t._g(t._b({
                                attrs: {
                                    color: "primary",
                                    dark: ""
                                }
                            }, "v-btn", n, !1), a), [t._v(" Sort ")])]
                        }
                    }])
                }, [e(d["a"], [e(c["a"], {
                    staticClass: "cursor-pointer"
                }, [e(u["b"], {
                    on: {
                        click: function (e) {
                            t.nfts.sort(t.compareValues("amounts"))
                        }
                    }
                }, [t._v("Amount")])], 1), e(c["a"], {
                    staticClass: "cursor-pointer"
                }, [e(u["b"], {
                    on: {
                        click: function (e) {
                            t.nfts.sort(t.compareValues("totalTime"))
                        }
                    }
                }, [t._v("Total Lock Time")])], 1), e(c["a"], {
                    staticClass: "cursor-pointer"
                }, [e(u["b"], {
                    on: {
                        click: function (e) {
                            t.nfts.sort(t.compareValues("timeLeft"))
                        }
                    }
                }, [t._v("Time Remaining")])], 1)], 1)], 1)], 1), e(k["a"], {
                    staticClass: "mb-2"
                })], 1), t.nftLoader ? e("div", {
                    staticClass: "col-12"
                }, [e("div", {
                    staticClass: "mx-auto my-5 loader"
                })]) : t.getUserAddress ? t.nfts.length ? t._e() : [e("p", {
                    staticClass: "mx-auto text-muted my-5"
                }, [t._v("No NFT to show")])] : [e("p", {
                    staticClass: "mx-auto text-muted my-5"
                }, [t._v(" Connect Your Wallet to see your NFTs here ")])], t._l(t.paginatedNFTs, (function (n, s) {
                    return [e("div", {
                        key: s,
                        staticClass: "col-12"
                    }, [e("div", {
                        staticClass: "d-block d-md-flex text-center text-md-left"
                    }, [e("div", {
                        staticClass: "mr-5"
                    }, [e("a", {
                        attrs: {
                            href: `${t.OPENSEA_URL_BASE}${t.CONTRACT_ADDRESS}/${n.token_id}`,
                            target: "_blank"
                        }
                    }, [e("vue-load-image", [e("img", {
                        attrs: {
                            slot: "image",
                            src: n.metadata.image
                        },
                        slot: "image"
                    }), e("img", {
                        attrs: {
                            slot: "preloader",
                            src: a("24b4")
                        },
                        slot: "preloader"
                    }), e("img", {
                        attrs: {
                            slot: "error",
                            src: a("24b4")
                        },
                        slot: "error"
                    })])], 1)]), e("div", [e("h3", {
                        staticClass: "card-title my-0",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "top",
                            title: t.formator(n.amounts, 10)
                        }
                    }, [t._v(" " + t._s(t.formator(n.amounts, 2)) + " " + t._s(t.TOKEN_SYMBOL) + " "), n.transferable ? e("img", {
                        attrs: {
                            src: a("875b"),
                            width: "20",
                            height: "20"
                        }
                    }) : t._e(), n.transferable ? t._e() : e("img", {
                        attrs: {
                            src: a("433f"),
                            width: "20",
                            height: "20"
                        }
                    })]), e("b", [t._v("NFT ID: ")]), e("a", {
                        attrs: {
                            href: `${t.ETHERSCAN_URL_BASE}token/${t.CONTRACT_ADDRESS}?a=${n.token_id}`,
                            target: "_blank"
                        }
                    }, [t._v(t._s(n.token_id))]), e("div", [e("b", [t._v(" Description: ")]), t._v(" " + t._s(n.description) + " ")]), e("div", {
                        staticClass: "d-flex justify-space-between"
                    }, [n.isBurnAble ? e("div", [e(l["a"], {
                        staticClass: "px-5 mt-3",
                        attrs: {
                            small: "",
                            color: "yellow"
                        },
                        on: {
                            click: function (e) {
                                return t.onBurn(n.id.tokenId, n.amounts)
                            }
                        }
                    }, [t._v(" BURN ")])], 1) : e("div", [e("div", [e("b", [t._v(" Time Remaining: ")]), e("span", {
                        staticClass: "text-blue"
                    }, [t._v(t._s(t.secondstoDays(n.timeLeft)))])])])])])]), e(k["a"], {
                        staticClass: "mt-3"
                    })], 1)]
                })), e("div", {
                    staticClass: "col-12 text-center"
                }, [e("jw-pagination", {
                    attrs: {
                        pageSize: 6,
                        maxPages: 3,
                        items: this.nfts
                    },
                    on: {
                        changePage: t.onChangePage
                    }
                })], 1)], 2)])], 1)])], 1)
            },
            et = [],
            at = (a("14d9"), a("f904")),
            nt = a.n(at),
            st = {
                name: "PulseBitcoinLockApp",
                data() {
                    return {
                        nfts: [],
                        order: "desc",
                        nftLoader: !1,
                        paginatedNFTs: [],
                        tokenBalance: 0,
                        ipfsInstance: null,
                        lockupAmount: 1,
                        lockupDays: null,
                        lockupUri: null,
                        lockupTip: null,
                        imageSrc: null,
                        lockupImage: null,
                        lockupDescription: null,
                        mint_to_address: null,
                        mint_to_different_address: !1,
                        transferable: !1,
                        isApproved: !1,
                        isBtnLoading: !1
                    }
                },
                async mounted() {
                    this.getUserAddress && (this.getData(), this.readValues())
                },
                methods: {
                    mintToText() {
                        return this.mint_to_different_address ? "To " + this.mint_to_address : ""
                    },
                    copy_to_clipboard(t) {
                        nt()(t), this.$toasted.show(`Copied ${t} to clipboard`)
                    },
                    onChangePage(t) {
                        this.paginatedNFTs = t
                    },
                    compareValues(t) {
                        return this.order = "asc" === this.order ? "desc" : "asc", (e, a) => {
                            let n = e[t] - a[t];
                            return "asc" === this.order ? n : -1 * n
                        }
                    },
                    async getData() {
                        this.nfts = [], this.nftLoader = !0;
                        let t = await this.fetchNFTs(),
                            e = (new Date).getTime() / 1e3;
                        t.length || (this.nftLoader = !1), t.forEach((a, n) => {
                            Promise.all([this.getContractInstance.methods.ownerOf(a.id.tokenId).call(), this.getContractInstance.methods.lockTime(a.id.tokenId).call(), this.getContractInstance.methods.tokenIdsToAmounts(a.id.tokenId).call(), this.getContractInstance.methods.tokenIdsToTransferable(a.id.tokenId).call()]).then(([s, i, o, r]) => {
                                a.owenr = s, a.amounts = o, a.token_id = this.getWeb3.utils.hexToNumber(a.id.tokenId);
                                let l = new Date(a.timeLastUpdated).getTime() / 1e3;
                                a.totalTime = Number(i) - Number(l), a.isBurnAble = !(i > e), a.timeLeft = Number(i) - Number(e), a.transferable = r, this.nfts.push(a), this.nfts.sort(this.compareValues("amounts")).reverse(), t.length === n + 1 && (this.nftLoader = !1)
                            })
                        })
                    },
                    onApprove() {
                        this.getUserAddress ? this.isApproved ? this.onLockUp() : (this.isBtnLoading = !0, this.getTokenInstance.methods.approve(this.CONTRACT_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("In the process of approving the smart contract to interact with your PLSB")
                        }).on("receipt", t => {
                            this.isBtnLoading = !1, this.readValues(), console.log(t), this.$toasted.show("The smart contract is now approved to interact with your PLSB!")
                        }).on("error", (t, e) => {
                            this.isBtnLoading = !1, console.log(t, e), this.$toasted.show("The transaction to approve the smart contract to interact with your PLSB failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    async onLockUp() {
                        if (this.getUserAddress)
                            if (this.lockupAmount)
                                if (this.lockupImage)
                                    if (this.lockupDescription)
                                        if (null !== this.lockupTip && "" !== this.lockupTip)
                                            if (this.lockupAmount * this.TOKEN_DECIMAL_CONVERSION > this.tokenBalance) this.$toasted.show("Insufficient balance");
                                            else if (!this.mint_to_different_address || this.getWeb3.utils.isAddress(this.mint_to_address)) try {
                            this.isBtnLoading = !0, await this.submitToIPFS(this.lockupAmount, this.lockupDays, this.lockupTip, this.transferable);
                            let t, e = this.getWeb3.utils.toWei(this.lockupAmount.toString(), this.UNIT_CONVERSION),
                                a = this.getWeb3.utils.toWei(this.lockupTip.toString(), this.UNIT_CONVERSION),
                                n = 86400 * Number(this.lockupDays),
                                s = this.transferable;
                            t = this.mint_to_different_address ? this.mint_to_address : this.getUserAddress, console.log(e), console.log(a), this.getContractInstance.methods.lockUpAndMint(e, a, n, s, t, this.lockupUri).send({
                                from: this.getUserAddress
                            }).on("transactionHash", t => {
                                console.log(t), this.clearInputs(), this.$toasted.show("Your PLSB is being locked up, and an NFT is being minted")
                            }).on("receipt", async t => {
                                console.log(t), setTimeout(() => {
                                    this.getData()
                                }, 3e3), this.readValues(), this.clearInputs(), this.isBtnLoading = !1, this.$toasted.show("Your PLSB has been locked up, and an NFT has been minted")
                            }).on("error", (t, e) => {
                                this.isBtnLoading = !1, console.log(t, e), this.$toasted.show("Lock up transaction has Failed")
                            })
                        } catch (t) {
                            this.isBtnLoading = !1, console.log("Error:", t), this.$toasted.show("Invalid input value")
                        } else this.$toasted.show("Non existent 'Mint To Address': " + this.mint_to_address);
                        else this.$toasted.show("Enter developer tip amount");
                        else this.$toasted.show("Write NFT description");
                        else this.$toasted.show("Upload NFT image");
                        else this.$toasted.show("Enter lockup amount");
                        else this.$toasted.show("Connect you wallet first!")
                    },
                    readValues() {
                        Promise.all([this.getTokenInstance.methods.balanceOf(this.getUserAddress).call(), this.getTokenInstance.methods.allowance(this.getUserAddress, this.CONTRACT_ADDRESS).call()]).then(([t, e]) => {
                            this.isApproved = 0 != e, this.tokenBalance = t
                        })
                    },
                    onSelect(t) {
                        if (this.imageSrc = null, this.lockupImage = null, t) {
                            this.lockupImage = t;
                            var e = t["type"].split("/"),
                                a = e[0];
                            if ("image" == a) {
                                var n = new FileReader;
                                n.onload = t => {
                                    this.imageSrc = t.target.result
                                }, n.readAsDataURL(t)
                            } else "video" == a && (console.log("Only Images are allowed"), this.$toasted.show("Only Images are allowed"))
                        } else this.$toasted.show("Select an image")
                    },
                    async submitToIPFS(t, e, a, n) {
                        const s = "Basic " + window.buffer.Buffer.from(this.INFURA_ID + ":" + this.INFURA_SECRET_KEY).toString("base64");
                        this.ipfsInstance = window.IpfsHttpClient.create({
                            host: "ipfs.infura.io",
                            port: 5001,
                            protocol: "https",
                            headers: {
                                authorization: s
                            }
                        });
                        let i = {
                            name: `${t} ${this.TOKEN_SYMBOL} locked for ${e} ${this.isPlural(e)}`,
                            image: null,
                            description: this.lockupDescription,
                            attributes: [{
                                display_type: "number",
                                trait_type: `Amount of ${this.TOKEN_SYMBOL} Locked Up`,
                                value: t
                            }, {
                                display_type: "number",
                                trait_type: "Total Lock Up Days",
                                value: e
                            }, {
                                display_type: "number",
                                trait_type: `Dev Tip (in ${this.TOKEN_SYMBOL})`,
                                value: a
                            }, {
                                value: "" + (n ? "Transferable" : "Non-Transferable")
                            }]
                        };
                        if (this.lockupImage) {
                            let t = await this.ipfsInstance.add(this.lockupImage, {
                                    progress: t => console.log("received: " + t)
                                }),
                                e = "https://ipfs.io/ipfs/" + t.path;
                            i.image = e
                        }
                        console.log("data:", i);
                        let o = await this.ipfsInstance.add(JSON.stringify(i), {
                            progress: t => console.log("received: " + t)
                        });
                        this.lockupUri = "https://ipfs.io/ipfs/" + o.path
                    },
                    async onBurn(t, e) {
                        this.getUserAddress ? this.getContractInstance.methods.burn(t).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show(`Your NFT is being Burnt, and your ${this.TOKEN_SYMBOL} tokens are being returned to your wallet, great job HODLing!`)
                        }).on("receipt", async t => {
                            console.log(t), this.getData(), this.readValues(), this.$toasted.show(`${this.formator(e, 2)} ${this.TOKEN_SYMBOL} has been unlocked and returned to your wallet`)
                        }).on("error", (t, e) => {
                            console.log(t, e), this.$toasted.show("Burn transaction Failed")
                        }) : this.$toasted.show("Connect you wallet first!")
                    },
                    clearInputs() {
                        this.ipfsInstance = null, this.lockupUri = null, this.imageSrc = null, this.lockupAmount = 1, this.lockupDays = 0, this.lockupImage = null, this.lockupDescription = null, this.lockupTip = null, this.mint_to_address = null, this.mint_to_different_address = !1, this.transferable = !1, this.isBtnLoading = !1, this.nfts = []
                    }
                },
                watch: {
                    async getUserAddress() {
                        this.getData(), this.readValues()
                    }
                }
            },
            it = st,
            ot = (a("ec1c"), Object(v["a"])(it, tt, et, !1, null, null, null)),
            rt = ot.exports,
            lt = a("490a"),
            dt = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto"
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("2cc6")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.currentDay) + " "), e("br"), t._v(" Current Day ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        href: t.ETHERSCAN_URL_BASE + "address/" + t.PULSE_BITCOIN_LOCK_ADDRESS,
                        target: "_blank"
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("2be1")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.nfts.length) + " "), e("br"), t._v(" PulseBitcoinLock NFTs ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.CARNBalance)) + " "), e("br"), t._v(" Your CARN Balance ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.CARNInContract)) + " "), e("br"), t._v(" CARN Rewards Available ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.totalFreeCarnWithdrawn)) + " "), e("br"), t._v(" Total CARN Withdrawn ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.getUserAddress && t.nfts.length,
                        expression: "getUserAddress && nfts.length"
                    }],
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-5"
                }, [e(N["a"], {
                    staticClass: "mx-auto text-center"
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "endOfDay"
                    }
                }, [t._v("0 Hours 0 Minutes 0 Seconds")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" until the next days CARN Rewards will be available for withdrawal. ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 369 == this.walletChainID,
                        expression: "this.walletChainID == 369"
                    }]
                }, [e("div", {
                    staticClass: "col-12"
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("Maintenance")]), t._v(" Carn rewards on PulseChain is undergoing some maintenance ")])], 1)]), e(x["a"], {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 369 != this.walletChainID,
                        expression: "this.walletChainID != 369"
                    }]
                }, [e("div", {
                    staticClass: "col-12"
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("CARN Rewards "), e(P["a"], {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function ({
                            on: n,
                            attrs: s
                        }) {
                            return [e("img", t._g(t._b({
                                attrs: {
                                    width: "18px",
                                    src: a("7b13")
                                }
                            }, "img", s, !1), n))]
                        }
                    }])
                }, [e("span", [e("ul", [t._v(" * To get CARN Rewards, you must register your PulseBitcoinLock NFT for rewards before the Unlock Time ")]), e("ul", [t._v(" * You only get rewards starting the day you register. ")]), e("ul", [t._v(" * Upon Registering you'll get your days worth of rewards and when the countdown timer hits zero, you can claim again. ")]), e("ul", [t._v(" * The first 1343 PulseBitcoinLock NFT's that get created will get a special bonus upon registering (that is any PulseBitcoinLock NFT with IDs 0-1343) ")]), e("ul", [t._v(" * You dont have to claim every day. You can wait as many days as you want and then claim your $CARN (similar to $HDRN except without the borrowing!) ")]), e("ul", [t._v(" * As long as your NFT is registered before the Unlock Time, you can still collect your CARN Rewards even after the Unlock Time is over. ")]), e("ul", [t._v(" * The amount of CARN Rewards you can collect every day is equal to (amount_locked_up) * (days_locked_up) * (0.0000015) ")]), e("ul", [t._v(" * For that formula, the amount_locked_up and the days_locked_up are both capped at 1000. Meaning, an NFT that has 5000 PLSB locked up for 5000 days will still get 1.5 CARN Rewards per day. ")])])])], 1), e(k["a"], {
                    staticClass: "my-6"
                }), t.getUserAddress ? t.isNFTLoading ? [e("div", {
                    staticClass: "d-flex justify-center my-10"
                }, [e(lt["a"], {
                    attrs: {
                        indeterminate: "",
                        color: "primary"
                    }
                })], 1)] : t.nfts.length ? t._e() : [e("div", {
                    staticClass: "d-flex justify-center"
                }, [e("p", {
                    staticClass: "mt-5 text-center"
                }, [t._v(" HEX Rewards is for PulseBitcoinLock NFT Holders only. "), e("br"), t._v(" Head on over to "), e("a", {
                    attrs: {
                        href: "https://PulseBitcoinLock.app/",
                        target: "_blank"
                    }
                }, [e("strong", [t._v("PulseBitcoinLock.app")])]), t._v(" and Lock Up some PulseBitcoin, then come back here to get CARN Rewards. ")])])] : [e("div", {
                    staticClass: "d-flex justify-center"
                }, [e("p", {
                    staticClass: "mt-5 mb-10 text-center"
                }, [t._v(" Connect your wallet to see your NFT's ")])])], e("div", {
                    staticClass: "row"
                }, [t._l(t.nfts, (function (a, n) {
                    return [e("div", {
                        key: n,
                        staticClass: "col-12"
                    }, [e("div", {
                        staticClass: "d-block d-md-flex text-center text-md-left"
                    }, [e("div", [e("a", {
                        attrs: {
                            href: "http://pulsebitcoinlock.app",
                            target: "_blank"
                        }
                    }, [e("img", {
                        staticClass: "nft_img",
                        attrs: {
                            src: a.image
                        }
                    })])]), e("div", [e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Id: ")]), t._v(t._s(a.id))]), e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Total Lock Time: ")]), t._v(t._s(t.HHMMSS(a.lockTime)) + " ")]), e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Unlock Time (must register before this time): ")]), t._v(t._s(t.humanDate(a.unlockTime)) + " ")]), e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Locked Amount: ")]), t._v(t._s(t.twelveFormat(a.lockedAmount)) + " PLSB ")]), a.transferable ? e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("This NFT is Transferable")])]) : t._e(), a.transferable ? t._e() : e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("This NFT is Non-Transferable")])]), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isRegisterAllowed(a.unlockTime) && a.isRegistered,
                            expression: "\n                      isRegisterAllowed(nft.unlockTime) && nft.isRegistered\n                    "
                        }]
                    }, [e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Daily Reward: ")]), t._v(t._s(t.twelveFormat(a.reward, 2)) + " $CARN ")]), e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Days Since Last Withdrawal: ")]), t._v(t._s(t.currentDay - a.withdrawalDay) + " Days ")]), e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Rewards End On Day: ")]), t._v(t._s(a.endRewardDay) + " ")])]), a.isRegistered ? [t.cannotWithdrawCarn(a.withdrawalDay) ? e(l["a"], {
                        staticClass: "px-7",
                        attrs: {
                            small: "",
                            color: "mt-1 yellow",
                            disabled: !0
                        }
                    }, [t._v("Come back tomorrow to withdraw more $CARN ")]) : e(l["a"], {
                        staticClass: "px-7",
                        attrs: {
                            small: "",
                            color: "mt-1 yellow"
                        },
                        on: {
                            click: function (e) {
                                return t.onWithdraw(a.id)
                            }
                        }
                    }, [t._v(t._s(`Withdraw ${t.twelveFormat((t.currentDay - a.withdrawalDay) * a.reward, 2)} Free $CARN!!`) + " ")]), e("small")] : e(l["a"], {
                        staticClass: "px-7",
                        attrs: {
                            small: "",
                            color: "mt-1 yellow",
                            disabled: !t.isRegisterAllowed(a.unlockTime)
                        },
                        on: {
                            click: function (e) {
                                return t.onRegister(a.id)
                            }
                        }
                    }, [t._v(" " + t._s(t.isRegisterAllowed(a.unlockTime) ? "Register NFT For Free $CARN" : "Cannot Register - NFT expired") + " ")])], 2)]), e(k["a"], {
                        staticClass: "my-3"
                    })], 1)]
                }))], 2)], 2)], 1)])], 1)
            },
            ct = [],
            ut = a("cee4"),
            pt = {
                name: "FreeCarn",
                data() {
                    return {
                        nfts: [],
                        totalNFTS: 0,
                        currentDay: 0,
                        CARNBalance: 0,
                        CARNInContract: 0,
                        isNFTLoading: !0,
                        clearIntervalX: null,
                        totalFreeCarnWithdrawn: 0
                    }
                },
                beforeDestroy() {
                    clearInterval(this.clearIntervalX)
                },
                async mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    compareValues(t) {
                        return (e, a) => {
                            let n = 0;
                            return e[t] > a[t] ? n = 1 : e[t] < a[t] && (n = -1), n
                        }
                    },
                    readValues() {
                        console.log("readvalues"), Promise.all([this.getNftRewardsInstance.methods.currentDay().call(), this.getCARNInstance.methods.balanceOf(this.getUserAddress).call(), this.getCARNInstance.methods.balanceOf(this.NFT_REWARDS_ADDRESS).call(), this.getNftRewardsInstance.methods.totalFreeCarnWithdrawn().call()]).then(([t, e, a, n]) => {
                            this.currentDay = t, this.CARNBalance = e, this.CARNInContract = a, this.totalFreeCarnWithdrawn = n, console.log("end read values"), clearInterval(this.clearIntervalX), this.counter(), this.getUserNFTs()
                        }), console.log("end read values")
                    },
                    counter() {
                        const t = (new Date).setUTCHours(23, 59, 59, 999);
                        this.clearIntervalX = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a % 864e5 / 36e5),
                                s = Math.floor(a % 36e5 / 6e4),
                                i = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalX), document.getElementById("endOfDay").innerHTML = "0 Hours 0 Minutes 0 Seconds") : document.getElementById("endOfDay").innerHTML = `${n} Hours ${s} Minutes ${i} Seconds`
                        }), 1e3)
                    },
                    getUserNFTs() {
                        console.log("get user nfts"), this.nfts = [], this.isNFTLoading = !0;
                        let t = "https://api.thegraph.com/subgraphs/name/korkey128k/pulsebitcoinlocknft";
                        369 == this.walletChainID && (t = "https://pulse.graph.korkey.tech/subgraphs/name/pulsebitcoinlock");
                        const e = `\n                    {\n                      owner(id:"${this.getUserAddress.toLowerCase()}") {\n                        id\n                        nfts {\n                          id\n                          minter\n                          lockedAmount\n                          tipAmount\n                          lockTime\n                          unlockTime\n                          uri\n                          tokenId\n                          timestamp\n                          burner\n                          burned\n                          burnTime\n                          transferable\n                        }\n                      }\n                    }\n                    `,
                            a = {
                                "Content-Type": "application/json"
                            };
                        console.log("hello"), ut["a"].post(t, {
                            query: e
                        }, {
                            headers: a
                        }).then(t => {
                            let e = t.data.data,
                                a = e.owner ? e.owner.nfts : [];
                            console.log(a), a.length ? a.forEach(async (t, e) => {
                                let n = this.geturi(t.uri);
                                ut["a"].get(n).then(n => {
                                    t.name = n.data.name, t.image = this.geturi(n.data.image), Promise.all([this.getNftRewardsInstance.methods.tokenIdsToRegistered(t.id).call(), this.getNftRewardsInstance.methods.tokenIdsToDailyRewardAmount(t.id).call(), this.getNftRewardsInstance.methods.tokenIdsToLastWithdrawalDay(t.id).call(), this.getNftRewardsInstance.methods.tokenIdsToEndRewardsDay(t.id).call()]).then(([n, s, i, o]) => {
                                        console.log("isRegistered: ", n), console.log("REWARD: ", s), console.log("WithdrawalDay: ", i), t.reward = s, t.isRegistered = n, t.withdrawalDay = i, t.endRewardDay = o, this.nfts.push(t), e + 1 === a.length && this.nfts.sort(this.compareValues("id")), this.isNFTLoading = !1
                                    })
                                }).catch(t => {
                                    console.log(t), this.isNFTLoading = !1
                                })
                            }) : this.isNFTLoading = !1
                        }).catch(t => {
                            console.log(t), this.isNFTLoading = !1
                        })
                    },
                    onRegister(t) {
                        this.SET_LOADING(!0), this.getNftRewardsInstance.methods.registerNftForRewards(t).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Register transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Register transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Register transaction has Failed")
                        })
                    },
                    onWithdraw(t) {
                        this.SET_LOADING(!0), this.getNftRewardsInstance.methods.withdrawRewards(t).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Withdraw Rewards transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Withdraw Rewards transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Withdraw Rewards transaction has Failed")
                        })
                    },
                    isRegisterAllowed(t) {
                        return (new Date).getTime() < 1e3 * t
                    },
                    cannotWithdrawCarn(t) {
                        return console.log(typeof t), console.log(typeof this.currentDay), Number(this.currentDay) <= Number(t)
                    },
                    geturi(t) {
                        if (console.log("nfturi", t), t.includes("ipfs://")) return t = t.replace("ipfs://", ""), "https://carn.infura-ipfs.io/ipfs/" + t;
                        let e = t.split("/"),
                            a = e[e.length - 1];
                        return "https://carn.infura-ipfs.io/ipfs/" + a
                    }
                },
                computed: {},
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            yt = pt,
            mt = (a("cc07"), Object(v["a"])(yt, dt, ct, !1, null, null, null)),
            ht = mt.exports,
            At = (a("13d5"), function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto"
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("2cc6")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.currentDay) + " "), e("br"), t._v(" Current Day ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        href: t.ETHERSCAN_URL_BASE + "address/" + t.PULSE_BITCOIN_LOCK_ADDRESS,
                        target: "_blank"
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.CARNBalance)) + " "), e("br"), t._v(" CARN Balance ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("c06d")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.eightFormat(t.HEXBalance, 9)) + " "), e("br"), t._v(" Your HEX Balance ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("c06d")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.eightFormat(t.HEXInContract, 3)) + " "), e("br"), t._v(" HEX Rewards Available ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("c06d")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.eightFormat(t.totalFreeHexWithdrawn, 3)) + " "), e("br"), t._v(" Total HEX Withdrawn ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.getUserAddress && t.nfts.length,
                        expression: "getUserAddress && nfts.length"
                    }],
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-5"
                }, [e(N["a"], {
                    staticClass: "mx-auto text-center"
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "endOfDay"
                    }
                }, [t._v("0 Hours 0 Minutes 0 Seconds")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" until the next days HEX Rewards will be available for withdrawal. ")])], 1)], 1)], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12",
                    class: t.notEnoughHexRewardsAvailable ? "disabledSection" : ""
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("HEX Rewards "), e(P["a"], {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function ({
                            on: n,
                            attrs: s
                        }) {
                            return [e("img", t._g(t._b({
                                attrs: {
                                    width: "18px",
                                    src: a("7b13")
                                }
                            }, "img", s, !1), n))]
                        }
                    }])
                }, [e("br"), e("span", [e("ul", [t._v(" * To get HEX Rewards, you must register your PulseBitcoinLock NFT for rewards before the Unlock Time ")]), e("ul", [t._v(" * You only get rewards starting the day you register. ")]), e("ul", [t._v(" * Upon Registering you'll get your days worth of rewards and when the countdown timer hits zero, you can claim again. ")]), e("ul", [t._v(" * You dont have to claim every day. You can wait as many days as you want and then claim your $HEX (similar to $HDRN except without the borrowing!) ")]), e("ul", [t._v(" * As long as your NFT is registered before the Unlock Time, you can still collect your HEX Rewards even after the Unlock Time is over. ")]), e("ul", [t._v(" * The amount of CARN Rewards you can collect every day is equal to (amount_locked_up) * (days_locked_up) * (0.0000015) ")]), e("ul", [t._v(" * For that formula, the amount_locked_up and the days_locked_up are both capped at 1000. Meaning, an NFT that has 5000 PLSB locked up for 5000 days will still get 1.5 CARN Rewards per day. ")])])])], 1), e("small", [t._v("Total # of NFTs Registered for Hex Rewards: " + t._s(t.twelveFormat(this.currentRegistrationFee) - 369))]), e("br"), e("small", [t._v("Current CARN Registration Fee: " + t._s(t.twelveFormat(this.currentRegistrationFee)) + " CARN")]), e("br"), e("small", [t._v("Total CARN Burnt via Registration Fees: " + t._s(Array.from({
                    length: t.twelveFormat(this.currentRegistrationFee) - 368
                }, (t, e) => e + 369).reduce((t, e) => t + e, 0)) + " CARN")]), e("h3", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.notEnoughHexRewardsAvailable,
                        expression: "(notEnoughHexRewardsAvailable)"
                    }]
                }, [t._v("MAY I HAVE YOUR ATTENTION PLEASE: THIS SECTION IS DISABLED WHENEVER THERE IS NOT AT LEAST 200 HEX IN THE REWARDS POOL AVAILABLE IN THE CONTRACT. Either deposit at least 200 HEX in the contract at 0xeb9014610d4daC128f9DA00C397Ce9119Ee777F5 or wait until the Hex Community Staker finishes a 60 day cycle and more HEX gets deposited in the rewards pool that way. ")]), e(k["a"], {
                    staticClass: "my-6"
                }), t.getUserAddress ? t.isNFTLoading ? [e("div", {
                    staticClass: "d-flex justify-center my-10"
                }, [e(lt["a"], {
                    attrs: {
                        indeterminate: "",
                        color: "primary"
                    }
                })], 1)] : t.nfts.length ? t._e() : [e("div", {
                    staticClass: "d-flex justify-center"
                }, [e("p", {
                    staticClass: "mt-5 text-center"
                }, [t._v(" HEX Rewards is for PulseBitcoinLock NFT Holders only. "), e("br"), t._v(" Head on over to "), e("a", {
                    attrs: {
                        href: "https://PulseBitcoinLock.app/",
                        target: "_blank"
                    }
                }, [e("strong", [t._v("PulseBitcoinLock.app")])]), t._v(" and Lock Up some PulseBitcoin, then come back here to get HEX Rewards. ")])])] : [e("div", {
                    staticClass: "d-flex justify-center"
                }, [e("p", {
                    staticClass: "mt-5 mb-10 text-center"
                }, [t._v(" Connect your wallet to see your NFT's ")])])], e("div", {
                    staticClass: "row"
                }, [t._l(t.nfts, (function (a, n) {
                    return [e("div", {
                        key: n,
                        staticClass: "col-12"
                    }, [e("div", {
                        staticClass: "d-block d-md-flex text-center text-md-left"
                    }, [e("div", [e("a", {
                        attrs: {
                            href: "http://pulsebitcoinlock.app",
                            target: "_blank"
                        }
                    }, [e("img", {
                        staticClass: "nft_img",
                        attrs: {
                            src: a.image
                        }
                    })])]), e("div", [e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Id: ")]), t._v(t._s(a.id))]), e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Total Lock Time: ")]), t._v(t._s(t.HHMMSS(a.lockTime)) + " ")]), e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Unlock Time (must register before this time): ")]), t._v(t._s(t.humanDate(a.unlockTime)) + " ")]), e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Locked Amount: ")]), t._v(t._s(t.twelveFormat(a.lockedAmount)) + " PLSB ")]), a.transferable ? e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("This NFT is Transferable")])]) : t._e(), a.transferable ? t._e() : e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("This NFT is Non-Transferable")])]), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isRegisterAllowed(a.unlockTime) && a.isRegistered,
                            expression: "\n                      isRegisterAllowed(nft.unlockTime) && nft.isRegistered\n                    "
                        }]
                    }, [e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Daily Reward: ")]), t._v(t._s(t.eightFormat(a.reward, 2)) + " $HEX ")]), e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Days Since Last Withdrawal: ")]), t._v(t._s(t.currentDay - a.withdrawalDay) + " Days ")]), e("div", {
                        staticClass: "mb-1"
                    }, [e("b", [t._v("Rewards End On Day: ")]), t._v(t._s(a.endRewardDay) + " ")])]), a.isRegistered ? [t.cannotWithdrawCarn(a.withdrawalDay, a.endRewardDay) ? e(l["a"], {
                        staticClass: "px-7",
                        attrs: {
                            small: "",
                            color: "mt-1 yellow",
                            disabled: !0
                        }
                    }, [t._v("Come back tomorrow to withdraw more $HEX ")]) : e(l["a"], {
                        staticClass: "px-7",
                        attrs: {
                            small: "",
                            color: "mt-1 yellow"
                        },
                        on: {
                            click: function (e) {
                                return t.onWithdraw(a.id)
                            }
                        }
                    }, [t._v(t._s(`Withdraw ${t.eightFormat((t.currentDay - a.withdrawalDay) * a.reward, 2)} Free $HEX!!`) + " ")]), e("small")] : e(l["a"], {
                        staticClass: "px-7",
                        attrs: {
                            small: "",
                            color: "mt-1 yellow",
                            disabled: !t.isRegisterAllowed(a.unlockTime)
                        },
                        on: {
                            click: function (e) {
                                return t.onRegister(a.id)
                            }
                        }
                    }, [t._v(" " + t._s(t.isRegisterAllowed(a.unlockTime) ? "Register NFT For Free $HEX" : "Cannot Register - NFT expired") + " ")]), t._v(" "), e("br"), t.isRegisterAllowed(a.unlockTime) && !a.isRegistered ? e("small", [t._v(" Current Registration Fee is " + t._s(t.twelveFormat(t.currentRegistrationFee)) + " CARN ")]) : t._e()], 2)]), e(k["a"], {
                        staticClass: "my-3"
                    })], 1)]
                }))], 2), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.shouldDisableBulkRegistration || t.nfts.length > 0,
                        expression: "!shouldDisableBulkRegistration || nfts.length>0"
                    }]
                }, [e("br"), e(l["a"], {
                    staticClass: "px-7",
                    staticStyle: {
                        "margin-right": "50px"
                    },
                    attrs: {
                        small: "",
                        color: "mt-1 yellow",
                        disabled: t.shouldDisableBulkRegistration
                    },
                    on: {
                        click: function (e) {
                            t.onBulkRegister(t.NftsThatCanBeRegistered.map(t => t.id))
                        }
                    }
                }, [t._v(" " + t._s("Bulk Register") + " "), e("br")]), e(l["a"], {
                    staticClass: "px-7",
                    attrs: {
                        small: "",
                        color: "mt-1 yellow",
                        disabled: t.shouldDisableBulkWithdrawal
                    },
                    on: {
                        click: function (e) {
                            t.onBulkWithdraw(t.NftsThatCanBeWithdrawed.map(t => t.id))
                        }
                    }
                }, [t._v(" " + t._s("Bulk Withdraw") + " ")]), e("br"), e("small", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.getBulkRegisterCarnFee(t.NftsThatCanBeRegistered.map(t => t.id)) > 0,
                        expression: "getBulkRegisterCarnFee( NftsThatCanBeRegistered.map(nft => nft.id))>0"
                    }]
                }, [t._v(" Bulk Register CARN Fee: " + t._s(t.twelveFormat(t.getBulkRegisterCarnFee(t.NftsThatCanBeRegistered.map(t => t.id)))) + " ")])], 1)], 2)], 1)])], 1)
            }),
            Tt = [],
            gt = {
                name: "FreeHex",
                data() {
                    return {
                        nfts: [],
                        totalNFTS: 0,
                        currentDay: 0,
                        HEXBalance: 0,
                        HEXInContract: 0,
                        isNFTLoading: !0,
                        clearIntervalX: null,
                        totalFreeHexWithdrawn: 0,
                        isCARNApproved: !1,
                        isBULKCARNApproved: !1,
                        CARNBalance: 0,
                        currentRegistrationFee: 0,
                        CARNallowance: 0
                    }
                },
                beforeDestroy() {
                    clearInterval(this.clearIntervalX)
                },
                async mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    compareValues(t) {
                        return (e, a) => {
                            let n = 0;
                            return e[t] > a[t] ? n = 1 : e[t] < a[t] && (n = -1), n
                        }
                    },
                    readValues() {
                        Promise.all([this.getNftHexRewardsInstance.methods.currentDay().call(), this.getHEXInstance.methods.balanceOf(this.getUserAddress).call(), this.getHEXInstance.methods.balanceOf(this.NFT_HEX_REWARDS_ADDRESS).call(), this.getNftHexRewardsInstance.methods.totalFreeHexWithdrawn().call(), this.getCARNInstance.methods.allowance(this.getUserAddress, this.NFT_HEX_REWARDS_ADDRESS).call(), this.getCARNInstance.methods.balanceOf(this.getUserAddress).call(), this.getNftHexRewardsInstance.methods.CARN_FEE().call()]).then(([t, e, a, n, s, i, o]) => {
                            this.currentDay = t, this.HEXBalance = e, this.HEXInContract = a, this.totalFreeHexWithdrawn = n, this.CARNBalance = i, this.currentRegistrationFee = Number(o), this.CARNallowance = Number(s), this.isCARNApproved = s >= this.currentRegistrationFee, clearInterval(this.clearIntervalX), this.counter(), this.getUserNFTs()
                        })
                    },
                    counter() {
                        const t = (new Date).setUTCHours(23, 59, 59, 999);
                        this.clearIntervalX = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a % 864e5 / 36e5),
                                s = Math.floor(a % 36e5 / 6e4),
                                i = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalX), document.getElementById("endOfDay").innerHTML = "0 Hours 0 Minutes 0 Seconds") : document.getElementById("endOfDay").innerHTML = `${n} Hours ${s} Minutes ${i} Seconds`
                        }), 1e3)
                    },
                    getUserNFTs() {
                        this.nfts = [], this.isNFTLoading = !0;
                        let t = "https://api.thegraph.com/subgraphs/name/korkey128k/pulsebitcoinlocknft";
                        369 == this.walletChainID && (t = "https://pulse.graph.korkey.tech/subgraphs/name/pulsebitcoinlock");
                        const e = `\n                    {\n                      owner(id:"${this.getUserAddress.toLowerCase()}") {\n                        id\n                        nfts {\n                          id\n                          minter\n                          lockedAmount\n                          tipAmount\n                          lockTime\n                          unlockTime\n                          uri\n                          tokenId\n                          timestamp\n                          burner\n                          burned\n                          burnTime\n                          transferable\n                        }\n                      }\n                    }\n                    `,
                            a = {
                                "Content-Type": "application/json"
                            };
                        ut["a"].post(t, {
                            query: e
                        }, {
                            headers: a
                        }).then(t => {
                            let e = t.data.data,
                                a = e.owner ? e.owner.nfts : [];
                            a.length ? a.forEach(async (t, e) => {
                                console.log("nft.uri: ", t.uri);
                                let n = this.geturi(t.uri);
                                console.log("uri: ", n), ut["a"].get(n).then(n => {
                                    t.name = n.data.name, t.image = this.geturi(n.data.image), console.log("nft.image: ", t.image), Promise.all([this.getNftHexRewardsInstance.methods.tokenIdsToRegistered(t.id).call(), this.getNftHexRewardsInstance.methods.tokenIdsToDailyRewardAmount(t.id).call(), this.getNftHexRewardsInstance.methods.tokenIdsToLastWithdrawalDay(t.id).call(), this.getNftHexRewardsInstance.methods.tokenIdsToEndRewardsDay(t.id).call()]).then(([n, s, i, o]) => {
                                        t.reward = s, t.isRegistered = n, t.withdrawalDay = i, t.endRewardDay = o, this.nfts.push(t), e + 1 === a.length && this.nfts.sort(this.compareValues("id")), this.isNFTLoading = !1
                                    })
                                }).catch(t => {
                                    console.log(t), this.isNFTLoading = !1
                                })
                            }) : this.isNFTLoading = !1
                        }).catch(t => {
                            console.log(t), this.isNFTLoading = !1
                        })
                    },
                    onRegister(t) {
                        this.isCARNApproved ? (this.SET_LOADING(!0), this.getNftHexRewardsInstance.methods.registerNftForRewards(t).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Register transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Register transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Register transaction has Failed")
                        })) : this.onCARNApprove()
                    },
                    getBulkRegisterCarnFee(t) {
                        let e = this.currentRegistrationFee,
                            a = 0;
                        for (let n = 0; n < t.length; n++) a += e + 1e12 * n;
                        return a
                    },
                    onBulkRegister(t) {
                        let e = this.currentRegistrationFee,
                            a = 0;
                        for (let i = 0; i < t.length; i++) a += e + 1e12 * i;
                        if (console.log("totalCarnForBulkRegistration: ", a), console.log("CARNallowance: ", this.CARNallowance), this.CARNallowance < a) return void this.onCARNApprove();
                        let n = .001,
                            s = n * t.length;
                        s < 10 * n && (s = 10 * n), console.log("txnFee: ", s), this.SET_LOADING(!0), this.getNftHexRewardsInstance.methods.bulkRegister(t).send({
                            from: this.getUserAddress,
                            value: this.getWeb3.utils.toWei(s.toString(), "ether")
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Bulk Register transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Bulk Register transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Bulk Register transaction has Failed")
                        })
                    },
                    onBulkWithdraw(t) {
                        let e = .001,
                            a = e * t.length;
                        a < 10 * e && (a = 10 * e), console.log("txnFee: ", a), this.SET_LOADING(!0), this.getNftHexRewardsInstance.methods.bulkWithdraw(t).send({
                            from: this.getUserAddress,
                            value: this.getWeb3.utils.toWei(a.toString(), "ether")
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Bulk Withdrawal transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Bulk Withdrawal transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Bulk Withdrawal transaction has Failed")
                        })
                    },
                    onCARNApprove() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getCARNInstance.methods.approve(this.NFT_HEX_REWARDS_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("CARN Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("CARN Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("CARN Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onWithdraw(t) {
                        this.SET_LOADING(!0), this.getNftHexRewardsInstance.methods.withdrawRewards(t).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Withdraw Rewards transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Withdraw Rewards transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Withdraw Rewards transaction has Failed")
                        })
                    },
                    isRegisterAllowed(t) {
                        return (new Date).getTime() < 1e3 * t
                    },
                    cannotWithdrawCarn(t, e) {
                        return Number(this.currentDay) <= Number(t) || Number(t) >= Number(e)
                    },
                    geturi(t) {
                        if (t.includes("ipfs://")) return console.log("converting: ", t), t = t.replace("ipfs://", ""), "https://carn.infura-ipfs.io/ipfs/" + t;
                        let e = t.split("/"),
                            a = e[e.length - 1];
                        return "https://carn.infura-ipfs.io/ipfs/" + a
                    }
                },
                computed: {
                    NftsThatCanBeRegistered() {
                        return this.nfts.filter(t => this.isRegisterAllowed(t.unlockTime) && t.id && !t.isRegistered)
                    },
                    shouldDisableBulkRegistration() {
                        return 0 === this.NftsThatCanBeRegistered.length
                    },
                    NftsThatCanBeWithdrawed() {
                        return this.nfts.filter(t => !this.cannotWithdrawCarn(t.withdrawalDay, t.endRewardDay) && t.id && t.isRegistered)
                    },
                    shouldDisableBulkWithdrawal() {
                        return 0 === this.NftsThatCanBeWithdrawed.length
                    },
                    notEnoughHexRewardsAvailable() {
                        return this.HEXInContract < 2e10
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            St = gt,
            Ct = (a("395a"), Object(v["a"])(St, At, Tt, !1, null, null, null)),
            bt = Ct.exports,
            _t = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "d-flex justify-center align-center",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12"
                }, [e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("USDC")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("8f66")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.sixFormat(t.USDCBalance)) + " USDC ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto"
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "blue"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("da52")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s((1 / (t.currentRate / 1e6)).toFixed(2)) + " $USDC per $CARN ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.CARNBalance)) + " $CARN ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto"
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "purple darken-2"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("ca18")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.maxSupply - t.totalSupply, 0)) + " Remaining $CARN ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.getUserAddress,
                        expression: "getUserAddress"
                    }],
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6"
                }, [e(N["a"], {
                    staticClass: "mx-auto text-center"
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "increaseInterval"
                    }
                }, [t._v(" 0 Days 0 Hours 0 Minutes 0 Seconds ")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" until the next rate increase! ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6"
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("$CARN Token Booth")]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" The rate started off at 1 $USDC per 1 $CARN and increases 5% every week. ")]), e(k["a"], {
                    staticClass: "my-5"
                }), e(B["a"], {
                    staticClass: "mt-3",
                    attrs: {
                        outlined: "",
                        type: "text",
                        label: "Enter USDC Amount"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        t.USDCAmount = t.sixFormat(t.USDCBalance, 6)
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.USDCAmount,
                        callback: function (e) {
                            t.USDCAmount = e
                        },
                        expression: "USDCAmount"
                    }
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 369 == t.walletChainID
                    },
                    on: {
                        click: function (e) {
                            return t.onUSDCApprove()
                        }
                    }
                }, [t._v(" " + t._s(1 == t.walletChainID || 5 == t.walletChainID ? t.isUSDCApproved ? `BUY ${Number(t.USDCAmount) ? t.twelveFormat(1e6 * t.USDCAmount * t.currentRate) : ""} CARN` : "Approve USDC" : "You can only buy CARN from the token Booth on ETHEREUM") + " ")])], 1)], 1)])], 1)])], 1)
            },
            ft = [],
            wt = {
                name: "CarnTicketBooth",
                data() {
                    return {
                        USDCAmount: 0,
                        USDCBalance: 0,
                        CARNBalance: 0,
                        isUSDCApproved: !1,
                        nextHike: 0,
                        currentRate: 0,
                        clearIntervalX: null,
                        maxSupply: 0,
                        totalSupply: 0
                    }
                },
                beforeDestroy() {
                    clearInterval(this.clearIntervalX)
                },
                async mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    readValues() {
                        let t = this.getUserAddress;
                        Promise.all([this.getCARNInstance.methods.nextHike().call(), this.getCARNInstance.methods.currentRate().call(), this.getCARNInstance.methods.MAX_SUPPLY().call(), this.getCARNInstance.methods.totalSupply().call(), this.getUSDCInstance.methods.balanceOf(t).call(), this.getCARNInstance.methods.balanceOf(t).call(), this.getUSDCInstance.methods.allowance(t, this.CARN_ADDRESS).call()]).then(([t, e, a, n, s, i, o]) => {
                            console.log("nextHike:", t), console.log("currentRate:", e), console.log("maxSupply:", a), console.log("totalSupply:", n), console.log("USDCBalance:", s), console.log("CARNBalance:", i), console.log("isUSDCApproved:", o), this.nextHike = t, this.currentRate = e, this.USDCBalance = s, this.CARNBalance = i, this.maxSupply = a, this.totalSupply = n, this.isUSDCApproved = o > 0, clearInterval(this.clearIntervalX), this.counter()
                        })
                    },
                    counter() {
                        let t = 1e3 * this.nextHike;
                        this.clearIntervalX = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a / 864e5),
                                s = Math.floor(a % 864e5 / 36e5),
                                i = Math.floor(a % 36e5 / 6e4),
                                o = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalX), document.getElementById("increaseInterval").innerHTML = "0 Days 0 Hours 0 Minutes 0 Seconds") : document.getElementById("increaseInterval").innerHTML = `${n} Days ${s} Hours ${i} Minutes ${o} Seconds`
                        }), 1e3)
                    },
                    onUSDCApprove() {
                        this.getUserAddress ? this.isUSDCApproved ? this.onBuy() : (this.SET_LOADING(!0), this.getUSDCInstance.methods.approve(this.CARN_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("USDC Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("USDC Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("USDC Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onBuy() {
                        this.USDCAmount ? Number(this.USDCAmount) > Number(this.sixFormat(this.USDCBalance, 6)) ? this.$toasted.show("Insufficient balance in your wallet.") : (this.SET_LOADING(!0), this.getCARNInstance.methods.buyCARN(this.sixToWei(this.USDCAmount)).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("CARN Buy transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("CARN Buy transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("CARN Buy transaction has Failed")
                        })) : this.$toasted.show("Enter USDC Amount")
                    },
                    clearForm() {
                        this.USDCAmount = 0
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            vt = wt,
            Dt = (a("9b45"), Object(v["a"])(vt, _t, ft, !1, null, null, null)),
            Et = Dt.exports,
            It = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        target: "_blank",
                        href: t.deadPage("PLSB")
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "blue"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("d52b")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.PLSBBalance)) + " $PLSB "), e("br"), t._v(" Bought & Burned ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        target: "_blank",
                        href: t.deadPage("PLSB")
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "blue"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("d52b")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.plsbSentToWaatca)) + " $PLSB "), e("br"), t._v(" Bought + Sent To WAATCA ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        target: "_blank",
                        href: t.deadPage("ASIC")
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "purple darken-2"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("76e7")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.ASICBalance)) + " $ASIC "), e("br"), t._v(" Bought & Burned ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        target: "_blank",
                        href: t.deadPage("ASIC")
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "purple darken-2"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("76e7")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.asicSentToWaatca)) + " $ASIC "), e("br"), t._v(" Bought + Sent To WAATCA ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        target: "_blank",
                        href: t.deadPage("PLSD")
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("d5e2")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.PLSDBalance)) + " $PLSD "), e("br"), t._v(" Bought & Burned ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        target: "_blank",
                        href: t.deadPage("PLSD")
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("d5e2")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.plsdSentToWaatca)) + " $PLSD "), e("br"), t._v(" Bought + Sent To WAATCA ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        target: "_blank",
                        href: t.deadPage("HEX")
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "purple darken-2"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("c06d")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.eightFormat(t.HEXBalance)) + " $HEX "), e("br"), t._v(" Bought & Burned ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        target: "_blank",
                        href: t.deadPage("HEX")
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "purple darken-2"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("c06d")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.eightFormat(t.hexSentToWaatca)) + " $HEX "), e("br"), t._v(" Bought + Sent To WAATCA ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        target: "_blank",
                        href: t.deadPage("CARN")
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.CARNBalance)) + " $CARN "), e("br"), t._v(" Burned ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    attrs: {
                        target: "_blank",
                        href: t.deadPage("CARN")
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "blue"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("2be1")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.carnSentToPulseBitcoinLockNftRewards)) + " $CARN "), e("br"), t._v(' Sent to PulseBitcoinLock NFT "CARN Rewards" Pool ')])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center align-center",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e("div", {
                    staticClass: "col-12"
                }, [e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-8"
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("BUY & BURN")]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" - " + t._s(t.twelveFormat(t.CARNBalanceOfContract)) + " CARN available for Buy & Burn "), e("br"), t._v(" - For each button you press, you get 5% of the CARN for that transaction :) Enjoy! ")]), e(k["a"], {
                    staticClass: "my-5"
                }), e(l["a"], {
                    staticClass: "py-5 mb-4",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 0 == t.processable_six
                    },
                    on: {
                        click: function (e) {
                            return t.onProcessCarn(6, t.processable_six)
                        }
                    }
                }, [t._v(" BUY PLSB WITH " + t._s(t.twelveFormat(t.processable_six, 2)) + " $CARN AND BURN IT ")]), e(l["a"], {
                    staticClass: "py-5 mb-4",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 0 == t.processable_seven
                    },
                    on: {
                        click: function (e) {
                            return t.onProcessCarn(7, t.processable_seven)
                        }
                    }
                }, [t._v(" BUY ASIC WITH " + t._s(t.twelveFormat(t.processable_seven, 2)) + " $CARN AND BURN IT ")]), e(l["a"], {
                    staticClass: "py-5 mb-4",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 0 == t.processable_five
                    },
                    on: {
                        click: function (e) {
                            return t.onProcessCarn(5, t.processable_five)
                        }
                    }
                }, [t._v(" BUY PLSD WITH " + t._s(t.twelveFormat(t.processable_five, 2)) + " $CARN AND BURN IT ")]), e(l["a"], {
                    staticClass: "py-5 mb-4",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 0 == t.processable_nine
                    },
                    on: {
                        click: function (e) {
                            return t.onProcessCarn(9, t.processable_nine)
                        }
                    }
                }, [t._v(" BUY HEX WITH " + t._s(t.twelveFormat(t.processable_nine, 2)) + " $CARN AND BURN IT ")]), e(l["a"], {
                    staticClass: "py-5 mb-4",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 0 == t.processable_three
                    },
                    on: {
                        click: function (e) {
                            return t.onProcessCarn(3, t.processable_three)
                        }
                    }
                }, [t._v(" BUY PLSB WITH " + t._s(t.twelveFormat(t.processable_three, 2)) + " $CARN AND SEND TO WAATCA ")]), e(l["a"], {
                    staticClass: "py-5 mb-4",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 0 == t.processable_four
                    },
                    on: {
                        click: function (e) {
                            return t.onProcessCarn(4, t.processable_four)
                        }
                    }
                }, [t._v(" BUY ASIC WITH " + t._s(t.twelveFormat(t.processable_four, 2)) + " $CARN AND SEND TO WAATCA ")]), e(l["a"], {
                    staticClass: "py-5 mb-4",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 0 == t.processable_two
                    },
                    on: {
                        click: function (e) {
                            return t.onProcessCarn(2, t.processable_two)
                        }
                    }
                }, [t._v(" BUY PLSD WITH " + t._s(t.twelveFormat(t.processable_two, 2)) + " $CARN AND SEND TO WAATCA ")]), e(l["a"], {
                    staticClass: "py-5 mb-4",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 0 == t.processable_eight
                    },
                    on: {
                        click: function (e) {
                            return t.onProcessCarn(8, t.processable_eight)
                        }
                    }
                }, [t._v(" BUY HEX WITH " + t._s(t.twelveFormat(t.processable_eight, 2)) + " $CARN AND SEND TO WAATCA ")]), e(l["a"], {
                    staticClass: "py-5 mb-4",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 0 == t.processable_one
                    },
                    on: {
                        click: function (e) {
                            return t.onProcessCarn(1, t.processable_one)
                        }
                    }
                }, [t._v(" SEND " + t._s(t.twelveFormat(t.processable_one, 2)) + " $CARN TO PULSEBITCOINLOCK NFT "), e("br"), t._v(' "FREE $CARN POOL" ')]), e(l["a"], {
                    staticClass: "py-5 mb-4",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || 0 == t.processable_zero
                    },
                    on: {
                        click: function (e) {
                            return t.onProcessCarn(0, t.processable_zero)
                        }
                    }
                }, [t._v(" BURN " + t._s(t.twelveFormat(t.processable_zero, 2)) + " $CARN ")])], 1)], 1)])], 1)])], 1)
            },
            Nt = [],
            Rt = {
                name: "BuyAndBurn",
                data() {
                    return {
                        CARNBalanceOfContract: 0,
                        processable_zero: 0,
                        processable_one: 0,
                        processable_two: 0,
                        processable_three: 0,
                        processable_four: 0,
                        processable_five: 0,
                        processable_six: 0,
                        processable_seven: 0,
                        processable_eight: 0,
                        processable_nine: 0,
                        PLSBBalance: 0,
                        ASICBalance: 0,
                        PLSDBalance: 0,
                        HEXBalance: 0,
                        CARNBalance: 0,
                        plsbSentToWaatca: 0,
                        asicSentToWaatca: 0,
                        plsdSentToWaatca: 0,
                        hexSentToWaatca: 0,
                        carnSentToPulseBitcoinLockNftRewards: 0
                    }
                },
                async mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    deadPage(t) {
                        let e = "";
                        switch (t) {
                            case "PLSB":
                                e = this.ETHERSCAN_URL_BASE + "token/" + this.PLSB_ADDRESS + "?a=0x0000000000000000000000000000000000deadca";
                                break;
                            case "ASIC":
                                e = this.ETHERSCAN_URL_BASE + "token/" + this.ASIC_ADDRESS + "?a=0x0000000000000000000000000000000000deadca";
                                break;
                            case "PLSD":
                                e = this.ETHERSCAN_URL_BASE + "token/" + this.PLSD_ADDRESS + "?a=0x0000000000000000000000000000000000deadca";
                                break;
                            case "HEX":
                                e = this.ETHERSCAN_URL_BASE + "token/" + this.HEX_ADDRESS + "?a=0x0000000000000000000000000000000000deadca";
                                break;
                            case "CARN":
                                e = this.ETHERSCAN_URL_BASE + "token/" + this.CARN_ADDRESS + "?a=0x0000000000000000000000000000000000deadca";
                                break
                        }
                        return e
                    },
                    readValues() {
                        console.log(this.getBurnInstance.methods), Promise.all([this.getCARNInstance.methods.balanceOf(this.BURN_ADDRESS).call(), this.getBurnInstance.methods.processable(0).call(), this.getBurnInstance.methods.processable(1).call(), this.getBurnInstance.methods.processable(2).call(), this.getBurnInstance.methods.processable(3).call(), this.getBurnInstance.methods.processable(4).call(), this.getBurnInstance.methods.processable(5).call(), this.getBurnInstance.methods.processable(6).call(), this.getBurnInstance.methods.processable(7).call(), this.getBurnInstance.methods.processable(8).call(), this.getBurnInstance.methods.processable(9).call(), this.getBurnInstance.methods.plsbSentToWaatca().call(), this.getBurnInstance.methods.asicSentToWaatca().call(), this.getBurnInstance.methods.plsdSentToWaatca().call(), this.getBurnInstance.methods.hexSentToWaatca().call(), this.getBurnInstance.methods.carnSentToPulseBitcoinLockNftRewards().call(), this.getPLSBInstance.methods.balanceOf("0x0000000000000000000000000000000000deadca").call(), this.getASICInstance.methods.balanceOf("0x0000000000000000000000000000000000deadca").call(), this.getPLSDInstance.methods.balanceOf("0x0000000000000000000000000000000000deadca").call(), this.getHEXInstance.methods.balanceOf("0x0000000000000000000000000000000000deadca").call(), this.getCARNInstance.methods.balanceOf("0x0000000000000000000000000000000000deadca").call()]).then(([t, e, a, n, s, i, o, r, l, d, c, u, p, y, m, h, A, T, g, S, C]) => {
                            console.log("CARNBalanceOfContract:", t), console.log("processable_zero:", e), console.log("processable_one:", a), console.log("processable_two:", n), console.log("processable_three:", s), console.log("processable_four:", i), console.log("processable_five:", o), console.log("processable_six:", r), console.log("processable_seven:", l), console.log("processable_eight:", d), console.log("processable_nine:", c), console.log("plsbSentToWaatca:", u), console.log("asicSentToWaatca:", p), console.log("plsdSentToWaatca:", y), console.log("hexSentToWaatca:", m), console.log("carnSentToPulseBitcoinLockNftRewards:", h), console.log("PLSBBalance:", A), console.log("ASICBalance:", T), console.log("PLSDBalance:", g), console.log("HEXBalance:", S), console.log("CARNBalance:", C), this.CARNBalanceOfContract = t, this.processable_zero = e, this.processable_one = a, this.processable_two = n, this.processable_three = s, this.processable_four = i, this.processable_five = o, this.processable_six = r, this.processable_seven = l, this.processable_eight = d, this.processable_nine = c, this.plsbSentToWaatca = u, this.asicSentToWaatca = p, this.plsdSentToWaatca = y, this.hexSentToWaatca = m, this.carnSentToPulseBitcoinLockNftRewards = h, this.PLSBBalance = A, this.ASICBalance = T, this.PLSDBalance = g, this.HEXBalance = S, this.CARNBalance = C
                        })
                    },
                    onProcessCarn(t, e) {
                        Number(e) > 369e12 && (e = "369000000000000"), console.log("after", e), console.log(typeof Number(e)), this.getUserAddress ? (this.SET_LOADING(!0), this.getBurnInstance.methods.processCarn(t, e).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Buy and Burn transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Buy and Burn transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Buy and Burn transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onBurn() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getBurnInstance.methods.buyCARN().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Burn transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Burn transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Burn transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            kt = Rt,
            Lt = (a("7a65"), Object(v["a"])(kt, It, Nt, !1, null, null, null)),
            xt = Lt.exports,
            Bt = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e("router-view")], 1)
            },
            Pt = [],
            Mt = {
                name: "Lotteries",
                data() {
                    return {}
                }
            },
            Ft = Mt,
            Ht = Object(v["a"])(Ft, Bt, Pt, !1, null, null, null),
            Ut = Ht.exports,
            Ot = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e(x["a"], {
                    staticClass: "justify-center"
                }, [t._l(t.lotteries, (function (n, s) {
                    return [e("div", {
                        key: s,
                        staticClass: "col-12 col-sm-4 col-md-2"
                    }, [e(N["a"], {
                        staticClass: "mx-auto",
                        on: {
                            click: function (e) {
                                return t.addToken(n.token)
                            }
                        }
                    }, [e(c["a"], {
                        attrs: {
                            "two-line": ""
                        }
                    }, [e(L["a"], {
                        attrs: {
                            size: "55",
                            color: "cyan lighten-1"
                        }
                    }, ["PLSD" === n.token ? e("img", {
                        attrs: {
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            src: a("c06d")
                        }
                    }) : t._e()]), e(u["a"], [e(u["b"], {
                        staticClass: "text-h7 mb-1"
                    }, [t._v(" " + t._s(t.generalFormat(n.balance, n.decimals)) + " $" + t._s(n.token) + " ")])], 1)], 1)], 1)], 1)]
                }))], 2), e(x["a"], [t._l(t.lotteries, (function (n, s) {
                    return [e("div", {
                        key: s,
                        staticClass: "col-12 col-sm-6 col-md-4"
                    }, [e(N["a"], {
                        staticClass: "pa-5"
                    }, [e("a", {
                        staticClass: "black--text",
                        attrs: {
                            href: t.ETHERSCAN_URL_BASE + "address/" + n.address,
                            target: "_blank"
                        }
                    }, [e("h2", {
                        staticClass: "mb-4 text-center"
                    }, ["PLSD" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("c06d")
                        }
                    }) : t._e(), t._v(" Daily " + t._s(n.token) + " Lottery #" + t._s(n.currentDrawId) + " "), "PLSD" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("c06d")
                        }
                    }) : t._e()])]), e("h4", [t._v("Your Tickets: " + t._s(n.yourTickets) + " Tickets")]), e("h4", [t._v("Total Tickets: " + t._s(n.totalTickets) + " Tickets")]), e("h4", [t._v("Jackpot: " + t._s(n.totalTickets * Number(t.generalFormat(n.ticketPrice, n.decimals))) + " $" + t._s(n.token))]), e("small", [t._v("Each ticket is " + t._s(t.generalFormat(n.ticketPrice, n.decimals)) + " " + t._s(n.token) + " (+ 0.1 CARN per ticket)")]), e(k["a"], {
                        staticClass: "my-5"
                    }), e(B["a"], {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: (new Date).getTime() < 1e3 * n.lotteryDeadline && (1e3 * n.lotteryDeadline - (new Date).getTime()) / 1e3 < n.timeLength - 50,
                            expression: "new Date().getTime() < lottery.lotteryDeadline * 1000 && ((lottery.lotteryDeadline*1000) - (new Date().getTime()))/1000 < (lottery.timeLength-50)"
                        }],
                        staticClass: "mt-3",
                        attrs: {
                            outlined: "",
                            type: "text",
                            label: "Enter the amount of lottery tickets you want to purchase"
                        },
                        scopedSlots: t._u([{
                            key: "append",
                            fn: function () {
                                return [e(l["a"], {
                                    attrs: {
                                        text: "",
                                        color: "yellow",
                                        small: ""
                                    },
                                    on: {
                                        click: function (t) {
                                            n.amount = Math.floor(n.balance / n.ticketPrice)
                                        }
                                    }
                                }, [t._v(" MAX ")])]
                            },
                            proxy: !0
                        }], null, !0),
                        model: {
                            value: n.amount,
                            callback: function (e) {
                                t.$set(n, "amount", e)
                            },
                            expression: "lottery.amount"
                        }
                    }), (new Date).getTime() > 1e3 * n.lotteryDeadline || (1e3 * n.lotteryDeadline - (new Date).getTime()) / 1e3 > n.timeLength - 50 ? e(l["a"], {
                        staticClass: "py-5 mb-4",
                        attrs: {
                            block: "",
                            "x-large": "",
                            color: "yellow",
                            disabled: !t.getUserAddress || t.isLoading || n.CHAINLINKBalance < 1e19
                        },
                        on: {
                            click: function (e) {
                                return t.onApprove(n, !0)
                            }
                        }
                    }, [t._v(" Select Winner ")]) : e(l["a"], {
                        staticClass: "py-5 mb-4",
                        attrs: {
                            block: "",
                            "x-large": "",
                            color: "yellow",
                            disabled: !t.getUserAddress || t.isLoading
                        },
                        on: {
                            click: function (e) {
                                return t.onApprove(n, !1)
                            }
                        }
                    }, [t._v(" Buy Tickets (Deadline: "), e("span", {
                        attrs: {
                            id: n.token + "demo"
                        }
                    }, [t._v("0D 0H 0M 0S")]), t._v(") ")]), e("small", [t._v("ChainLink Balance: " + t._s(t.eighteenFormat(n.CHAINLINKBalance, 2)))]), e(P["a"], {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: t._u([{
                            key: "activator",
                            fn: function ({
                                on: n,
                                attrs: s
                            }) {
                                return [e("img", t._g(t._b({
                                    attrs: {
                                        width: "18px",
                                        src: a("7b13")
                                    }
                                }, "img", s, !1), n))]
                            }
                        }], null, !0)
                    }, [e("span", [t._v('Executing the "Select Winner" function costs around 5-10 ChainLink tokens.')])])], 1)], 1)]
                }))], 2), e("small", [t._v("Note: After selecting a winner for any lottery, it takes a little less than a minute before the next lottery starts. After selecting a winner, wait a minute and refresh.")]), e(x["a"], [t._l(t.lotteries, (function (n, s) {
                    return ["0x0000000000000000000000000000000000000000" != n.drawHistories.winner ? e("div", {
                        key: s,
                        staticClass: "col-12"
                    }, [e(N["a"], {
                        staticClass: "pa-5"
                    }, [e("h1", ["PLSD" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("c06d")
                        }
                    }) : t._e(), t._v(" " + t._s(n.token) + " Carnival Lottery #" + t._s(n.currentDrawId - 1) + " Winner - Claim Prize Here")]), e("ul", [e("li", [e("strong", [t._v(t._s(n.drawHistories.winner) + " won " + t._s(t.generalFormat(n.drawHistories.totalDeposits, n.decimals)) + " $" + t._s(n.token) + "!! ---\x3e "), e(l["a"], {
                        attrs: {
                            disabled: n.drawHistories.isRewardClaimed
                        },
                        on: {
                            click: function (e) {
                                return t.sendReward(n)
                            }
                        }
                    }, [t._v("Claim Prize")])], 1)])])])], 1) : t._e()]
                }))], 2)], 1)
            },
            $t = [],
            Wt = {
                name: "LotteriesHour",
                data() {
                    return {
                        CHAINLINKBalance: 0,
                        lotteries: [{
                            instance: null,
                            token: "PLSD",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "PLSB",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "ASIC",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "CARN",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "USDC",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "six",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "HEX",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "eight",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }]
                    }
                },
                mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    readValues() {
                        this.lotteries.forEach(t => {
                            t.address = this[t.token + "_HOUR_LOTTERY_ADDRESS"], t.instance = new this.getWeb3.eth.Contract(_.LOTTERY_ABI, t.address)
                        }), this.lotteries.forEach(t => {
                            let e = this.getUserAddress;
                            Promise.all([this["get" + t.token + "Instance"].methods.allowance(e, t.address).call(), this.getCARNInstance.methods.allowance(e, t.address).call(), this["get" + t.token + "Instance"].methods.balanceOf(e).call(), this.getCHAINLINKInstance.methods.balanceOf(this[t.token + "_HOUR_LOTTERY_ADDRESS"]).call(), t.instance.methods.getTicketsSold().call(), t.instance.methods.lotteryDeadline().call(), t.instance.methods.getPlayerEntries(e).call(), t.instance.methods.ticketPrice().call(), t.instance.methods.getCurrentDrawId().call(), t.instance.methods.timeLength().call()]).then(async ([e, a, n, s, i, o, r, l, d, c]) => {
                                console.log("isApproved", !!Number(e), e), console.log("isCARNApproved", !!Number(a), a), console.log("balance", n), console.log("totalTickets", i), console.log("lotteryDeadline", o), console.log("yourTickets", r), console.log("ticketPrice", l), console.log("currentDrawId", d), console.log("timeLength", c), console.log("now", (new Date).getTime()), console.log("lotteryDeadline", o), console.log("deadline - now --\x3e", (1e3 * o - (new Date).getTime()) / 1e3), console.log("token name", t.token), console.log("balance of chainlinke", await this.getCHAINLINKInstance.methods.balanceOf(this[t.token + "_HOUR_LOTTERY_ADDRESS"])), console.log("lottery address", this[t.token + "_HOUR_LOTTERY_ADDRESS"]), console.log("this.CHAINLINKInstance", this.getCHAINLINKInstance), console.log("CHAINLINKBalance", s), console.log("----------------"), t.isApproved = Number(e) > 0, t.isCARNApproved = Number(a) > 0, t.balance = n, t.CHAINLINKBalance = s, t.totalTickets = i, t.yourTickets = r, t.lotteryDeadline = o, t.ticketPrice = l, t.currentDrawId = d, t.timeLength = c, t.drawHistories = await t.instance.methods.drawHistory(d - 1).call(), console.log("drawHistories.isRewardClaimed", t.drawHistories.isRewardClaimed), console.log("drawHistories.totalDeposits", t.drawHistories.totalDeposits), console.log("drawHistories.winner", t.drawHistories.winner), console.log("name", t.token), clearInterval(t.clearInterval), this.counter(t)
                            })
                        })
                    },
                    counter(t) {
                        let e = 1e3 * t.lotteryDeadline;
                        t.clearInterval = setInterval((function () {
                            let a = (new Date).getTime();
                            const n = e - a + 2e4,
                                s = Math.floor(n / 864e5),
                                i = Math.floor(n % 864e5 / 36e5),
                                o = Math.floor(n % 36e5 / 6e4),
                                r = Math.floor(n % 6e4 / 1e3);
                            let l = document.getElementById(t.token + "demo");
                            l && (n <= 0 ? (clearInterval(t.clearInterval), l.innerHTML = "0D 0H 0M 0S") : l.innerHTML = `${s}D ${i}H ${o}M ${r}S`)
                        }), 1e3)
                    },
                    onApprove(t, e) {
                        t.isApproved ? t.isCARNApproved ? this.buyTickets(t, e) : this.onCARNApprove(t) : (this.SET_LOADING(!0), this["get" + t.token + "Instance"].methods.approve(t.address, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", e => {
                            console.log(e), this.$toasted.show(`Approving your ${t.token}!`)
                        }).on("receipt", e => {
                            console.log(e), this.readValues(), this.SET_LOADING(!1), this.$toasted.show(`Your ${t.token} is approved!`)
                        }).on("error", (e, a) => {
                            console.log(e, a), this.SET_LOADING(!1), this.$toasted.show(`Sorry, approving your ${t.token} failed.`)
                        }))
                    },
                    onCARNApprove(t) {
                        this.SET_LOADING(!0), this.getCARNInstance.methods.approve(t.address, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Approving your CARN!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Your CARN is approved!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Sorry, approving your CARN failed.")
                        })
                    },
                    buyTickets(t, e) {
                        if (Number(t.amount) > this.generalFormat(t.balance, t.decimals)) return void this.$toasted.show("Insufficient balance in your wallet.");
                        this.SET_LOADING(!0);
                        let a = e ? 0 : t.amount;
                        t.instance.methods.buyTickets(a).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Lottery Ticket Purchase In Progress!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("Lottery Tickets Purchased!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Purchasing Lottery Tickets Failed")
                        })
                    },
                    sendReward(t) {
                        this.SET_LOADING(!0), t.instance.methods.sendRewards(t.currentDrawId - 1).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Jackpot is being sent to the winner!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("Jackpot has been sent to the winner!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Jackpot failed to be sent to the winner")
                        })
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            Xt = Wt,
            Gt = Object(v["a"])(Xt, Ot, $t, !1, null, null, null),
            Yt = Gt.exports,
            Kt = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e(x["a"], {
                    staticClass: "justify-center"
                }, [t._l(t.lotteries, (function (n, s) {
                    return [e("div", {
                        key: s,
                        staticClass: "col-12 col-sm-4 col-md-2"
                    }, [e(N["a"], {
                        staticClass: "mx-auto",
                        on: {
                            click: function (e) {
                                return t.addToken(n.token)
                            }
                        }
                    }, [e(c["a"], {
                        attrs: {
                            "two-line": ""
                        }
                    }, [e(L["a"], {
                        attrs: {
                            size: "55",
                            color: "cyan lighten-1"
                        }
                    }, ["PLSD" === n.token ? e("img", {
                        attrs: {
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            src: a("c06d")
                        }
                    }) : t._e()]), e(u["a"], [e(u["b"], {
                        staticClass: "text-h7 mb-1"
                    }, [t._v(" " + t._s(t.generalFormat(n.balance, n.decimals)) + " $" + t._s(n.token) + " ")])], 1)], 1)], 1)], 1)]
                }))], 2), e(x["a"], [t._l(t.lotteries, (function (n, s) {
                    return [e("div", {
                        key: s,
                        staticClass: "col-12 col-sm-6 col-md-4"
                    }, [e(N["a"], {
                        staticClass: "pa-5"
                    }, [e("a", {
                        staticClass: "black--text",
                        attrs: {
                            href: t.ETHERSCAN_URL_BASE + "address/" + n.address,
                            target: "_blank"
                        }
                    }, [e("h2", {
                        staticClass: "mb-4 text-center"
                    }, ["PLSD" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("c06d")
                        }
                    }) : t._e(), t._v(" Weekly " + t._s(n.token) + " Lottery #" + t._s(n.currentDrawId) + " "), "PLSD" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("c06d")
                        }
                    }) : t._e()])]), e("h4", [t._v("Your Tickets: " + t._s(n.yourTickets) + " Tickets")]), e("h4", [t._v("Total Tickets: " + t._s(n.totalTickets) + " Tickets")]), e("h4", [t._v("Jackpot: " + t._s(n.totalTickets * Number(t.generalFormat(n.ticketPrice, n.decimals))) + " $" + t._s(n.token))]), e("small", [t._v("Each ticket is " + t._s(t.generalFormat(n.ticketPrice, n.decimals)) + " " + t._s(n.token) + " (+ 0.1 CARN per ticket)")]), e(k["a"], {
                        staticClass: "my-5"
                    }), e(B["a"], {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: (new Date).getTime() < 1e3 * n.lotteryDeadline && (1e3 * n.lotteryDeadline - (new Date).getTime()) / 1e3 < n.timeLength - 50,
                            expression: "new Date().getTime() < lottery.lotteryDeadline * 1000 && ((lottery.lotteryDeadline*1000) - (new Date().getTime()))/1000 < (lottery.timeLength-50)"
                        }],
                        staticClass: "mt-3",
                        attrs: {
                            outlined: "",
                            type: "text",
                            label: "Enter the amount of lottery tickets you want to purchase"
                        },
                        scopedSlots: t._u([{
                            key: "append",
                            fn: function () {
                                return [e(l["a"], {
                                    attrs: {
                                        text: "",
                                        color: "primary",
                                        small: ""
                                    },
                                    on: {
                                        click: function (t) {
                                            n.amount = Math.floor(n.balance / n.ticketPrice)
                                        }
                                    }
                                }, [t._v(" MAX ")])]
                            },
                            proxy: !0
                        }], null, !0),
                        model: {
                            value: n.amount,
                            callback: function (e) {
                                t.$set(n, "amount", e)
                            },
                            expression: "lottery.amount"
                        }
                    }), (new Date).getTime() > 1e3 * n.lotteryDeadline || (1e3 * n.lotteryDeadline - (new Date).getTime()) / 1e3 > n.timeLength - 50 ? e(l["a"], {
                        staticClass: "py-5 mb-4",
                        attrs: {
                            block: "",
                            "x-large": "",
                            color: "primary",
                            disabled: !t.getUserAddress || t.isLoading || n.CHAINLINKBalance < 1e19
                        },
                        on: {
                            click: function (e) {
                                return t.onApprove(n, !0)
                            }
                        }
                    }, [t._v(" Select Winner ")]) : e(l["a"], {
                        staticClass: "py-5 mb-4",
                        attrs: {
                            block: "",
                            "x-large": "",
                            color: "primary",
                            disabled: !t.getUserAddress || t.isLoading
                        },
                        on: {
                            click: function (e) {
                                return t.onApprove(n, !1)
                            }
                        }
                    }, [t._v(" Buy Tickets (Deadline: "), e("span", {
                        attrs: {
                            id: n.token + "demo"
                        }
                    }, [t._v("0D 0H 0M 0S")]), t._v(") ")]), e("small", [t._v("ChainLink Balance: " + t._s(t.eighteenFormat(n.CHAINLINKBalance, 2)))]), e(P["a"], {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: t._u([{
                            key: "activator",
                            fn: function ({
                                on: n,
                                attrs: s
                            }) {
                                return [e("img", t._g(t._b({
                                    attrs: {
                                        width: "18px",
                                        src: a("7b13")
                                    }
                                }, "img", s, !1), n))]
                            }
                        }], null, !0)
                    }, [e("span", [t._v('Executing the "Select Winner" function costs around 5-10 ChainLink tokens.')])])], 1)], 1)]
                }))], 2), e("small", [t._v("Note: After selecting a winner for any lottery, it takes a little less than a minute before the next lottery starts. After selecting a winner, wait a minute and refresh.")]), e(x["a"], [t._l(t.lotteries, (function (n, s) {
                    return ["0x0000000000000000000000000000000000000000" != n.drawHistories.winner ? e("div", {
                        key: s,
                        staticClass: "col-12"
                    }, [e(N["a"], {
                        staticClass: "pa-5"
                    }, [e("h1", ["PLSD" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("c06d")
                        }
                    }) : t._e(), t._v(" " + t._s(n.token) + " Carnival Lottery #" + t._s(n.currentDrawId - 1) + " Winner - Claim Prize Here")]), e("ul", [e("li", [e("strong", [t._v(t._s(n.drawHistories.winner) + " won " + t._s(t.generalFormat(n.drawHistories.totalDeposits, n.decimals)) + " $" + t._s(n.token) + "!! ---\x3e "), e(l["a"], {
                        attrs: {
                            disabled: n.drawHistories.isRewardClaimed
                        },
                        on: {
                            click: function (e) {
                                return t.sendReward(n)
                            }
                        }
                    }, [t._v("Claim Prize")])], 1)])])])], 1) : t._e()]
                }))], 2)], 1)
            },
            Vt = [],
            jt = {
                name: "LotteriesWeek",
                data() {
                    return {
                        CHAINLINKBalance: 0,
                        lotteries: [{
                            instance: null,
                            token: "PLSD",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "PLSB",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "ASIC",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "CARN",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "USDC",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "six",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "HEX",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "eight",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }]
                    }
                },
                mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    readValues() {
                        this.lotteries.forEach(t => {
                            t.address = this[t.token + "_WEEK_LOTTERY_ADDRESS"], t.instance = new this.getWeb3.eth.Contract(_.LOTTERY_ABI, t.address)
                        }), this.lotteries.forEach(t => {
                            let e = this.getUserAddress;
                            Promise.all([this["get" + t.token + "Instance"].methods.allowance(e, t.address).call(), this.getCARNInstance.methods.allowance(e, t.address).call(), this["get" + t.token + "Instance"].methods.balanceOf(e).call(), this.getCHAINLINKInstance.methods.balanceOf(this[t.token + "_WEEK_LOTTERY_ADDRESS"]).call(), t.instance.methods.getTicketsSold().call(), t.instance.methods.lotteryDeadline().call(), t.instance.methods.getPlayerEntries(e).call(), t.instance.methods.ticketPrice().call(), t.instance.methods.getCurrentDrawId().call(), t.instance.methods.timeLength().call()]).then(async ([e, a, n, s, i, o, r, l, d, c]) => {
                                console.log("isApproved", !!Number(e), e), console.log("isCARNApproved", !!Number(a), a), console.log("balance", n), console.log("totalTickets", i), console.log("lotteryDeadline", o), console.log("yourTickets", r), console.log("ticketPrice", l), console.log("currentDrawId", d), console.log("timeLength", c), console.log("now", (new Date).getTime()), console.log("lotteryDeadline", o), console.log("deadline - now --\x3e", (1e3 * o - (new Date).getTime()) / 1e3), console.log("token name", t.token), console.log("balance of chainlinke", await this.getCHAINLINKInstance.methods.balanceOf(this[t.token + "_WEEK_LOTTERY_ADDRESS"])), console.log("lottery address", this[t.token + "_WEEK_LOTTERY_ADDRESS"]), console.log("this.CHAINLINKInstance", this.getCHAINLINKInstance), console.log("CHAINLINKBalance", s), console.log("----------------"), t.isApproved = Number(e) > 0, t.isCARNApproved = Number(a) > 0, t.balance = n, t.CHAINLINKBalance = s, t.totalTickets = i, t.yourTickets = r, t.lotteryDeadline = o, t.ticketPrice = l, t.currentDrawId = d, t.timeLength = c, t.drawHistories = await t.instance.methods.drawHistory(d - 1).call(), console.log("drawHistories.isRewardClaimed", t.drawHistories.isRewardClaimed), console.log("drawHistories.totalDeposits", t.drawHistories.totalDeposits), console.log("drawHistories.winner", t.drawHistories.winner), console.log("name", t.token), clearInterval(t.clearInterval), this.counter(t)
                            })
                        })
                    },
                    counter(t) {
                        let e = 1e3 * t.lotteryDeadline;
                        t.clearInterval = setInterval((function () {
                            let a = (new Date).getTime();
                            const n = e - a + 2e4,
                                s = Math.floor(n / 864e5),
                                i = Math.floor(n % 864e5 / 36e5),
                                o = Math.floor(n % 36e5 / 6e4),
                                r = Math.floor(n % 6e4 / 1e3);
                            let l = document.getElementById(t.token + "demo");
                            l && (n <= 0 ? (clearInterval(t.clearInterval), l.innerHTML = "0D 0H 0M 0S") : l.innerHTML = `${s}D ${i}H ${o}M ${r}S`)
                        }), 1e3)
                    },
                    onApprove(t, e) {
                        t.isApproved ? t.isCARNApproved ? this.buyTickets(t, e) : this.onCARNApprove(t) : (this.SET_LOADING(!0), this["get" + t.token + "Instance"].methods.approve(t.address, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", e => {
                            console.log(e), this.$toasted.show(`Approving your ${t.token}!`)
                        }).on("receipt", e => {
                            console.log(e), this.readValues(), this.SET_LOADING(!1), this.$toasted.show(`Your ${t.token} is approved!`)
                        }).on("error", (e, a) => {
                            console.log(e, a), this.SET_LOADING(!1), this.$toasted.show(`Sorry, approving your ${t.token} failed.`)
                        }))
                    },
                    onCARNApprove(t) {
                        this.SET_LOADING(!0), this.getCARNInstance.methods.approve(t.address, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Approving your CARN!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Your CARN is approved!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Sorry, approving your CARN failed.")
                        })
                    },
                    buyTickets(t, e) {
                        if (Number(t.amount) > this.generalFormat(t.balance, t.decimals)) return void this.$toasted.show("Insufficient balance in your wallet.");
                        this.SET_LOADING(!0);
                        let a = e ? 0 : t.amount;
                        t.instance.methods.buyTickets(a).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Lottery Ticket Purchase In Progress!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("Lottery Tickets Purchased!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Purchasing Lottery Tickets Failed")
                        })
                    },
                    sendReward(t) {
                        this.SET_LOADING(!0), t.instance.methods.sendRewards(t.currentDrawId - 1).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Jackpot is being sent to the winner!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("Jackpot has been sent to the winner!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Jackpot failed to be sent to the winner")
                        })
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            qt = jt,
            zt = Object(v["a"])(qt, Kt, Vt, !1, null, null, null),
            Jt = zt.exports,
            Qt = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == t.walletChainID,
                        expression: "walletChainID==1"
                    }]
                }, [e(x["a"], {
                    staticClass: "justify-center"
                }, [t._l(t.lotteries, (function (n, s) {
                    return [e("div", {
                        key: s,
                        staticClass: "col-12 col-sm-4 col-md-2"
                    }, [e(N["a"], {
                        staticClass: "mx-auto",
                        on: {
                            click: function (e) {
                                return t.addToken(n.token)
                            }
                        }
                    }, [e(c["a"], {
                        attrs: {
                            "two-line": ""
                        }
                    }, [e(L["a"], {
                        attrs: {
                            size: "55",
                            color: "cyan lighten-1"
                        }
                    }, ["PLSD" === n.token ? e("img", {
                        attrs: {
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            src: a("c06d")
                        }
                    }) : t._e()]), e(u["a"], [e(u["b"], {
                        staticClass: "text-h7 mb-1"
                    }, [t._v(" " + t._s(t.generalFormat(n.balance, n.decimals)) + " $" + t._s(n.token) + " ")])], 1)], 1)], 1)], 1)]
                }))], 2), e(x["a"], [t._l(t.lotteries, (function (n, s) {
                    return [e("div", {
                        key: s,
                        staticClass: "col-12 col-sm-6 col-md-4"
                    }, [e(N["a"], {
                        staticClass: "pa-5"
                    }, [e("a", {
                        staticClass: "black--text",
                        attrs: {
                            href: t.ETHERSCAN_URL_BASE + "address/" + n.address,
                            target: "_blank"
                        }
                    }, [e("h2", {
                        staticClass: "mb-4 text-center"
                    }, ["PLSD" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("c06d")
                        }
                    }) : t._e(), t._v(" Monthly " + t._s(n.token) + " Lottery #" + t._s(n.currentDrawId) + " "), "PLSD" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            width: "45",
                            src: a("c06d")
                        }
                    }) : t._e()])]), e("h4", [t._v("Your Tickets: " + t._s(n.yourTickets) + " Tickets")]), e("h4", [t._v("Total Tickets: " + t._s(n.totalTickets) + " Tickets")]), e("h4", [t._v("Jackpot: " + t._s(n.totalTickets * Number(t.generalFormat(n.ticketPrice, n.decimals))) + " $" + t._s(n.token))]), e("small", [t._v("Each ticket is " + t._s(t.generalFormat(n.ticketPrice, n.decimals)) + " " + t._s(n.token) + " (+ 0.1 CARN per ticket)")]), e(k["a"], {
                        staticClass: "my-5"
                    }), e(B["a"], {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: (new Date).getTime() < 1e3 * n.lotteryDeadline && (1e3 * n.lotteryDeadline - (new Date).getTime()) / 1e3 < n.timeLength - 50,
                            expression: "new Date().getTime() < lottery.lotteryDeadline * 1000 && ((lottery.lotteryDeadline*1000) - (new Date().getTime()))/1000 < (lottery.timeLength-50)"
                        }],
                        staticClass: "mt-3",
                        attrs: {
                            outlined: "",
                            type: "text",
                            label: "Enter the amount of lottery tickets you want to purchase"
                        },
                        scopedSlots: t._u([{
                            key: "append",
                            fn: function () {
                                return [e(l["a"], {
                                    attrs: {
                                        text: "",
                                        color: "yellow",
                                        small: ""
                                    },
                                    on: {
                                        click: function (t) {
                                            n.amount = Math.floor(n.balance / n.ticketPrice)
                                        }
                                    }
                                }, [t._v(" MAX ")])]
                            },
                            proxy: !0
                        }], null, !0),
                        model: {
                            value: n.amount,
                            callback: function (e) {
                                t.$set(n, "amount", e)
                            },
                            expression: "lottery.amount"
                        }
                    }), (new Date).getTime() > 1e3 * n.lotteryDeadline || (1e3 * n.lotteryDeadline - (new Date).getTime()) / 1e3 > n.timeLength - 50 ? e(l["a"], {
                        staticClass: "py-5 mb-4",
                        attrs: {
                            block: "",
                            "x-large": "",
                            color: "yellow",
                            disabled: !t.getUserAddress || t.isLoading || n.CHAINLINKBalance < 1e19
                        },
                        on: {
                            click: function (e) {
                                return t.onApprove(n, !0)
                            }
                        }
                    }, [t._v(" Select Winner ")]) : e(l["a"], {
                        staticClass: "py-5 mb-4",
                        attrs: {
                            block: "",
                            "x-large": "",
                            color: "yellow",
                            disabled: !t.getUserAddress || t.isLoading
                        },
                        on: {
                            click: function (e) {
                                return t.onApprove(n, !1)
                            }
                        }
                    }, [t._v(" Buy Tickets (Deadline: "), e("span", {
                        attrs: {
                            id: n.token + "demo"
                        }
                    }, [t._v("0D 0H 0M 0S")]), t._v(") ")]), e("small", [t._v("ChainLink Balance: " + t._s(t.eighteenFormat(n.CHAINLINKBalance, 2)))]), e(P["a"], {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: t._u([{
                            key: "activator",
                            fn: function ({
                                on: n,
                                attrs: s
                            }) {
                                return [e("img", t._g(t._b({
                                    attrs: {
                                        width: "18px",
                                        src: a("7b13")
                                    }
                                }, "img", s, !1), n))]
                            }
                        }], null, !0)
                    }, [e("span", [t._v('Executing the "Select Winner" function costs around 5-10 ChainLink tokens.')])])], 1)], 1)]
                }))], 2), e("small", [t._v("Note: After selecting a winner for any lottery, it takes a little less than a minute before the next lottery starts. After selecting a winner, wait a minute and refresh.")]), e(x["a"], [t._l(t.lotteries, (function (n, s) {
                    return ["0x0000000000000000000000000000000000000000" != n.drawHistories.winner ? e("div", {
                        key: s,
                        staticClass: "col-12"
                    }, [e(N["a"], {
                        staticClass: "pa-5"
                    }, [e("h1", ["PLSD" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("d5e2")
                        }
                    }) : t._e(), "PLSB" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("d52b")
                        }
                    }) : t._e(), "ASIC" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("76e7")
                        }
                    }) : t._e(), "CARN" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("6a7a")
                        }
                    }) : t._e(), "USDC" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("8f66")
                        }
                    }) : t._e(), "HEX" === n.token ? e("img", {
                        attrs: {
                            width: "30",
                            src: a("c06d")
                        }
                    }) : t._e(), t._v(" " + t._s(n.token) + " Carnival Lottery #" + t._s(n.currentDrawId - 1) + " Winner - Claim Prize Here")]), e("ul", [e("li", [e("strong", [t._v(t._s(n.drawHistories.winner) + " won " + t._s(t.generalFormat(n.drawHistories.totalDeposits, n.decimals)) + " $" + t._s(n.token) + "!! ---\x3e "), e(l["a"], {
                        attrs: {
                            disabled: n.drawHistories.isRewardClaimed
                        },
                        on: {
                            click: function (e) {
                                return t.sendReward(n)
                            }
                        }
                    }, [t._v("Claim Prize")])], 1)])])])], 1) : t._e()]
                }))], 2)], 1)
            },
            Zt = [],
            te = {
                name: "LotteriesMonth",
                data() {
                    return {
                        CHAINLINKBalance: 0,
                        lotteries: [{
                            instance: null,
                            token: "PLSD",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "PLSB",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "ASIC",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "CARN",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "twelve",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "USDC",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "six",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }, {
                            instance: null,
                            token: "HEX",
                            yourTickets: 0,
                            totalTickets: 0,
                            ticketPrice: 0,
                            amount: 0,
                            balance: 0,
                            lotteryDeadline: null,
                            clearInterval: null,
                            decimals: "eight",
                            currentDrawId: 0,
                            timeLength: 0,
                            drawHistories: null
                        }]
                    }
                },
                mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    readValues() {
                        this.lotteries.forEach(t => {
                            t.address = this[t.token + "_MONTH_LOTTERY_ADDRESS"], t.instance = new this.getWeb3.eth.Contract(_.LOTTERY_ABI, t.address)
                        }), this.lotteries.forEach(t => {
                            let e = this.getUserAddress;
                            Promise.all([this["get" + t.token + "Instance"].methods.allowance(e, t.address).call(), this.getCARNInstance.methods.allowance(e, t.address).call(), this["get" + t.token + "Instance"].methods.balanceOf(e).call(), this.getCHAINLINKInstance.methods.balanceOf(this[t.token + "_MONTH_LOTTERY_ADDRESS"]).call(), t.instance.methods.getTicketsSold().call(), t.instance.methods.lotteryDeadline().call(), t.instance.methods.getPlayerEntries(e).call(), t.instance.methods.ticketPrice().call(), t.instance.methods.getCurrentDrawId().call(), t.instance.methods.timeLength().call()]).then(async ([e, a, n, s, i, o, r, l, d, c]) => {
                                console.log("isApproved", !!Number(e), e), console.log("isCARNApproved", !!Number(a), a), console.log("balance", n), console.log("totalTickets", i), console.log("lotteryDeadline", o), console.log("yourTickets", r), console.log("ticketPrice", l), console.log("currentDrawId", d), console.log("timeLength", c), console.log("now", (new Date).getTime()), console.log("lotteryDeadline", o), console.log("deadline - now --\x3e", (1e3 * o - (new Date).getTime()) / 1e3), console.log("token name", t.token), console.log("balance of chainlinke", await this.getCHAINLINKInstance.methods.balanceOf(this[t.token + "_MONTH_LOTTERY_ADDRESS"])), console.log("lottery address", this[t.token + "_MONTH_LOTTERY_ADDRESS"]), console.log("this.CHAINLINKInstance", this.getCHAINLINKInstance), console.log("CHAINLINKBalance", s), console.log("----------------"), t.isApproved = Number(e) > 0, t.isCARNApproved = Number(a) > 0, t.balance = n, t.CHAINLINKBalance = s, t.totalTickets = i, t.yourTickets = r, t.lotteryDeadline = o, t.ticketPrice = l, t.currentDrawId = d, t.timeLength = c, t.drawHistories = await t.instance.methods.drawHistory(d - 1).call(), console.log("drawHistories.isRewardClaimed", t.drawHistories.isRewardClaimed), console.log("drawHistories.totalDeposits", t.drawHistories.totalDeposits), console.log("drawHistories.winner", t.drawHistories.winner), console.log("name", t.token), clearInterval(t.clearInterval), this.counter(t)
                            })
                        })
                    },
                    counter(t) {
                        let e = 1e3 * t.lotteryDeadline;
                        t.clearInterval = setInterval((function () {
                            let a = (new Date).getTime();
                            const n = e - a + 2e4,
                                s = Math.floor(n / 864e5),
                                i = Math.floor(n % 864e5 / 36e5),
                                o = Math.floor(n % 36e5 / 6e4),
                                r = Math.floor(n % 6e4 / 1e3);
                            let l = document.getElementById(t.token + "demo");
                            l && (n <= 0 ? (clearInterval(t.clearInterval), l.innerHTML = "0D 0H 0M 0S") : l.innerHTML = `${s}D ${i}H ${o}M ${r}S`)
                        }), 1e3)
                    },
                    onApprove(t, e) {
                        t.isApproved ? t.isCARNApproved ? this.buyTickets(t, e) : this.onCARNApprove(t) : (this.SET_LOADING(!0), this["get" + t.token + "Instance"].methods.approve(t.address, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", e => {
                            console.log(e), this.$toasted.show(`Approving your ${t.token}!`)
                        }).on("receipt", e => {
                            console.log(e), this.readValues(), this.SET_LOADING(!1), this.$toasted.show(`Your ${t.token} is approved!`)
                        }).on("error", (e, a) => {
                            console.log(e, a), this.SET_LOADING(!1), this.$toasted.show(`Sorry, approving your ${t.token} failed.`)
                        }))
                    },
                    onCARNApprove(t) {
                        this.SET_LOADING(!0), this.getCARNInstance.methods.approve(t.address, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Approving your CARN!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Your CARN is approved!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Sorry, approving your CARN failed.")
                        })
                    },
                    buyTickets(t, e) {
                        if (Number(t.amount) > this.generalFormat(t.balance, t.decimals)) return void this.$toasted.show("Insufficient balance in your wallet.");
                        this.SET_LOADING(!0);
                        let a = e ? 0 : t.amount;
                        t.instance.methods.buyTickets(a).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Lottery Ticket Purchase In Progress!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("Lottery Tickets Purchased!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Purchasing Lottery Tickets Failed")
                        })
                    },
                    sendReward(t) {
                        this.SET_LOADING(!0), t.instance.methods.sendRewards(t.currentDrawId - 1).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Jackpot is being sent to the winner!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("Jackpot has been sent to the winner!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Jackpot failed to be sent to the winner")
                        })
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            ee = te,
            ae = (a("47e5"), Object(v["a"])(ee, Qt, Zt, !1, null, null, null)),
            ne = ae.exports,
            se = a("8fea"),
            ie = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("PLSD")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("d5e2")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.yourPLSDBalance)) + " $PLSD ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("PLSB")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "blue"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("d52b")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.yourPLSBBalance)) + " $PLSB ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("ASIC")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "purple darken-2"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("76e7")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.yourASICBalance)) + " $ASIC ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.yourCARNBalance)) + " $CARN ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("USDC")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("8f66")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.sixFormat(t.yourUSDCBalance)) + " $USDC ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("HEX")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("c06d")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.eightFormat(t.yourHEXBalance)) + " $HEX ")])], 1)], 1)], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12 col-md-6"
                }, [e(N["a"], {
                    staticClass: "pa-3 pa-sm-5",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v(" WAATCA - We Are All The Carnival Address ")]), e("h3", {
                    staticClass: "font-weight-regular"
                }, [t._v(" WAATCA NFTs give you a percentage ownership of all the YIELD that the Carnival generates. The best part is that your percentage ownership Gets BIGGER and BIGGER over time, because as people BURN their NFT to extract the YIELD, they get removed from the pool and then you get a bigger piece of the PIE going forward. Its like a game of CHICKEN, to see who can hold on to their NFT the longest and SECURE the biggest percentage of the YIELD pool. The only catch is, the only way to benefit from that yield is to burn your NFT. "), e("br"), e("br"), t._v(" So, how long will you hold yours? "), e("br"), e("br"), t._v(" See the White Paper for more details "), e("br"), e("br"), t._v(" Update: The WAATCA Minting Phase has ended, the only way to get one now is to purchase one for sale on any NFT marketplace. If you have a WAATCA and you want to extract the yield, youll need to burn your NFT with the BURN button below. But be careful, once you burn your NFT you are out of the game forever and can no longer earn yield. ")]), e(k["a"], {
                    staticClass: "my-5"
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || (new Date).getTime() > 1e3 * t.mintDeadline || 369 == t.walletChainID
                    },
                    on: {
                        click: function (e) {
                            return t.onUSDCApprove()
                        }
                    }
                }, [t._v(" " + t._s(t.buttonText) + " ")])], 1)], 1), e("div", {
                    staticClass: "col-12 col-md-6"
                }, [e(N["a"], {
                    staticClass: "pa-3 pa-sm-5",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("WAATCA Stats")]), e(k["a"], {
                    staticClass: "my-6"
                }), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Your WAATCA NFTs: " + t._s(t.nfts.length) + " ")]), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Your WAATCA Points: " + t._s(t.bpointconversion(t.yourPoints)) + " ")]), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Total WAATCA NFTs: " + t._s(t.totalWaatcaNfts) + " out of " + t._s(1 == t.walletChainID ? 464 : 357) + " remaining ")]), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Total WAATCA Points: " + t._s(t.bpointconversion(t.totalPoints)) + " ")]), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Total PLSD in WAATCA Pool: " + t._s(t.twelveFormat(t.totalPLSDBalance, 2)) + " $PLSD ")]), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Total PLSB in WAATCA Pool: " + t._s(t.twelveFormat(t.totalPLSBBalance, 2)) + " $PLSB ")]), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Total ASIC in WAATCA Pool: " + t._s(t.twelveFormat(t.totalASICBalance, 2)) + " $ASIC ")]), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Total CARN in WAATCA Pool: " + t._s(t.twelveFormat(t.totalCARNBalance, 2)) + " $CARN ")]), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Total USDC in WAATCA Pool: " + t._s(t.sixFormat(t.totalUSDCBalance, 2)) + " $USDC ")]), e("h3", {
                    staticClass: "my-4"
                }, [t._v(" Total HEX in WAATCA Pool: " + t._s(t.eightFormat(t.totalHEXBalance, 2)) + " $HEX ")])], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12"
                }, [e(k["a"], {
                    staticClass: "mb-5"
                }), e(se["a"], {
                    attrs: {
                        headers: t.headers,
                        items: t.nfts,
                        "items-per-page": 100,
                        "hide-default-footer": "",
                        "no-data-text": "No NFT Data to show",
                        loading: t.nftLoader
                    },
                    scopedSlots: t._u([{
                        key: "body",
                        fn: function ({
                            items: a
                        }) {
                            return [e("tbody", t._l(a, (function (a) {
                                return e("tr", {
                                    key: a.id
                                }, [e("td", {
                                    staticClass: "text-center"
                                }, [e("a", {
                                    attrs: {
                                        href: t.OPENSEA_URL_BASE + t.WAATCA_ADDRESS + "/" + a.id,
                                        target: "_blank"
                                    }
                                }, [t._v(t._s(a.id))])]), e("td", {
                                    staticClass: "text-center"
                                }, [t._v(t._s(t.bpointconversion(a.points)))]), e("td", {
                                    staticClass: "text-center"
                                }, [t._v(t._s(a.plsd) + " $PLSD")]), e("td", {
                                    staticClass: "text-center"
                                }, [t._v(t._s(a.plsb) + " $PLSB")]), e("td", {
                                    staticClass: "text-center"
                                }, [t._v(t._s(a.asic) + " $ASIC")]), e("td", {
                                    staticClass: "text-center"
                                }, [t._v(t._s(a.carn) + " $CARN")]), e("td", {
                                    staticClass: "text-center"
                                }, [t._v(t._s(a.usdc) + " $USDC")]), e("td", {
                                    staticClass: "text-center"
                                }, [t._v(t._s(a.hex) + " $HEX")]), e("td", {
                                    staticClass: "text-center"
                                }, [e(l["a"], {
                                    attrs: {
                                        small: "",
                                        variant: "outlined",
                                        color: "primary",
                                        disabled: !t.getUserAddress || t.isLoading || (new Date).getTime() < 1e3 * t.mintDeadline
                                    },
                                    on: {
                                        click: function (e) {
                                            return t.onBurn(a.id)
                                        }
                                    }
                                }, [t._v(" Burn ")])], 1)])
                            })), 0)]
                        }
                    }])
                })], 1)])], 1)
            },
            oe = [],
            re = {
                name: "WAATCA",
                data() {
                    return {
                        percentage_complete: 0,
                        mintDeadline: 0,
                        clearIntervalX: null,
                        mintUri: "",
                        USDCAmount: 0,
                        isUSDCApproved: !1,
                        yourPoints: 0,
                        yourWaatcaNfts: 0,
                        yourPLSDBalance: 0,
                        yourPLSBBalance: 0,
                        yourASICBalance: 0,
                        yourCARNBalance: 0,
                        yourUSDCBalance: 0,
                        yourHEXBalance: 0,
                        totalPoints: 0,
                        totalWaatcaNfts: 0,
                        totalPLSDBalance: 0,
                        totalPLSBBalance: 0,
                        totalASICBalance: 0,
                        totalCARNBalance: 0,
                        totalUSDCBalance: 0,
                        totalHEXBalance: 0,
                        desserts: [{
                            id: "Frozen Yogurt",
                            points: 159,
                            plsd: 6,
                            plsb: 6,
                            asic: 6,
                            carn: 24,
                            usdc: 4,
                            hex: 4
                        }],
                        nfts: [],
                        headers: [{
                            value: "id",
                            text: "Token ID",
                            align: "center",
                            sortable: !1
                        }, {
                            value: "points",
                            text: "NFT Points",
                            align: "center",
                            sortable: !1
                        }, {
                            value: "plsd",
                            text: "PLSD Yield",
                            align: "center",
                            sortable: !1
                        }, {
                            value: "plsb",
                            text: "PLSB Yield",
                            align: "center",
                            sortable: !1
                        }, {
                            value: "asic",
                            text: "ASIC Yield",
                            align: "center",
                            sortable: !1
                        }, {
                            value: "carn",
                            text: "CARN Yield",
                            align: "center",
                            sortable: !1
                        }, {
                            value: "usdc",
                            text: "USDC Yield",
                            align: "center",
                            sortable: !1
                        }, {
                            value: "hex",
                            text: "HEX Yield",
                            align: "center",
                            sortable: !1
                        }, {
                            value: "action",
                            text: "Actions",
                            align: "center",
                            sortable: !1
                        }],
                        nftLoader: !1
                    }
                },
                beforeDestroy() {
                    clearInterval(this.clearIntervalX)
                },
                async mounted() {
                    this.getUserAddress && this.readValues();
                    let t = "";
                    t = this.CHAIN_ID.includes(1) ? "https://mainnet.infura.io/v3/2af64799935b4be086c072d13f0dad73" : "https://goerli.infura.io/v3/2af64799935b4be086c072d13f0dad73", console.log("url:", t);
                    let e = new S.a(t),
                        a = new e.eth.Contract(_.WAATCA_ABI, this.WAATCA_ADDRESS);
                    Promise.all([a.methods.totalPoints().call(), a.methods.mintDeadline().call()]).then(([t, e]) => {
                        console.log("totalPoints:", t), console.log("mintDeadline:", e), this.totalPoints = t, this.mintDeadline = e, this.counter()
                    })
                },
                methods: {
                    counter() {
                        let t = 1e3 * this.mintDeadline;
                        this.clearIntervalX = setInterval(() => {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a / 864e5),
                                s = Math.floor(a % 864e5 / 36e5),
                                i = Math.floor(a % 36e5 / 6e4),
                                o = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalX), document.getElementById("increaseInterval").innerHTML = "0 Days 0 Hours 0 Minutes 0 Seconds") : document.getElementById("increaseInterval").innerHTML = `${n} Days ${s}:${i}:${o}`
                        }, 1e3)
                    },
                    async fetchNFTs() {
                        this.nfts = [], this.nftLoader = !0;
                        let t = `${this.ALCHEMY_URL_BASE}${this.ALCHEMY_API_KEY}/getNFTs/`,
                            e = `${t}?owner=${this.getUserAddress}&contractAddresses%5B%5D=${this.WAATCA_ADDRESS}`,
                            a = await fetch(e).then(t => t.json());
                        a && a.ownedNfts ? (a.ownedNfts.forEach(t => {
                            t.id = parseInt(t.id.tokenId, 16), t && t.metadata && t.metadata.attributes.length ? t.points = t.metadata.attributes[0].value || 0 : t.points = 0, this.yourPoints += Number(t.points)
                        }), a.ownedNfts.forEach(t => {
                            this.totalPoints && this.yourPoints && (t.plsd = (t.points / this.totalPoints * this.totalPLSDBalance / 1e12).toFixed(2), t.plsb = (t.points / this.totalPoints * this.totalPLSBBalance / 1e12).toFixed(2), t.asic = (t.points / this.totalPoints * this.totalASICBalance / 1e12).toFixed(2), t.carn = (t.points / this.totalPoints * this.totalCARNBalance / 1e12).toFixed(2), t.usdc = (t.points / this.totalPoints * this.totalUSDCBalance / 1e6).toFixed(2), t.hex = (t.points / this.totalPoints * this.totalHEXBalance / 1e8).toFixed(2))
                        }), this.nftLoader = !1, this.nfts = a.ownedNfts, console.log("this.nfts:", this.nfts)) : this.nfts = []
                    },
                    async readValues() {
                        let t = this.getUserAddress;
                        Promise.all([this.getPLSDInstance.methods.balanceOf(t).call(), this.getPLSBInstance.methods.balanceOf(t).call(), this.getASICInstance.methods.balanceOf(t).call(), this.getCARNInstance.methods.balanceOf(t).call(), this.getUSDCInstance.methods.balanceOf(t).call(), this.getHEXInstance.methods.balanceOf(t).call(), this.getPLSDInstance.methods.balanceOf(this.WAATCA_ADDRESS).call(), this.getPLSBInstance.methods.balanceOf(this.WAATCA_ADDRESS).call(), this.getASICInstance.methods.balanceOf(this.WAATCA_ADDRESS).call(), this.getCARNInstance.methods.balanceOf(this.WAATCA_ADDRESS).call(), this.getUSDCInstance.methods.balanceOf(this.WAATCA_ADDRESS).call(), this.getHEXInstance.methods.balanceOf(this.WAATCA_ADDRESS).call(), this.getWAATCAInstance.methods.totalPoints().call(), this.getWAATCAInstance.methods.totalWaatcaNfts().call(), this.getWAATCAInstance.methods.mintDeadline().call(), this.getUSDCInstance.methods.allowance(t, this.WAATCA_ADDRESS).call()]).then(([t, e, a, n, s, i, o, r, l, d, c, u, p, y, m, h]) => {
                            this.yourPLSDBalance = t, this.yourPLSBBalance = e, this.yourASICBalance = a, this.yourCARNBalance = n, this.yourUSDCBalance = s, this.yourHEXBalance = i, this.mintDeadline = m, this.totalPoints = p, this.totalWaatcaNfts = y, this.totalPLSDBalance = o, this.totalPLSBBalance = r, this.totalASICBalance = l, this.totalCARNBalance = d, this.totalUSDCBalance = c, this.totalHEXBalance = u, this.USDCAllowance = h, this.isUSDCApproved = this.USDCAllowance > this.USDCAmount, console.log("yourPLSDBalance:", t), console.log("yourPLSBBalance:", e), console.log("yourASICBalance:", a), console.log("yourCARNBalance:", n), console.log("yourUSDCBalance:", s), console.log("yourHEXBalance:", i), console.log("totalPLSDBalance:", o), console.log("totalPLSBBalance:", r), console.log("totalASICBalance:", l), console.log("totalCARNBalance:", d), console.log("totalUSDCBalance:", c), console.log("totalHEXBalance:", u), console.log("totalPoints:", p), console.log("totalWaatcaNfts:", y), console.log("mintDeadline:", m), console.log("USDCAllowance:", h), this.fetchNFTs()
                        })
                    },
                    onUSDCApprove() {
                        if (this.getUserAddress) {
                            if (this.isUSDCApproved) return Number(this.USDCAmount) > Number(this.sixFormat(this.yourUSDCBalance)) ? void this.$toasted.show("Insufficient balance in your wallet.") : void this.submitToIPFS();
                            this.SET_LOADING(!0), this.getUSDCInstance.methods.approve(this.WAATCA_ADDRESS, "1000000000000000000000000000").send({
                                from: this.getUserAddress
                            }).on("transactionHash", t => {
                                console.log(t), this.$toasted.show("USDC Approve transaction is Processing!")
                            }).on("receipt", t => {
                                console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("USDC Approve transaction has Completed!")
                            }).on("error", (t, e) => {
                                console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("USDC Approve transaction has Failed")
                            })
                        } else this.$toasted.show("Connect your wallet first!")
                    },
                    async submitToIPFS() {
                        if (!this.USDCAmount || Number(this.USDCAmount) <= 0) return void this.$toasted.show("Enter USDC Amount Greater than zero");
                        this.SET_LOADING(!0);
                        const t = "Basic " + window.buffer.Buffer.from(this.INFURA_ID + ":" + this.INFURA_SECRET_KEY).toString("base64");
                        let e = window.IpfsHttpClient.create({
                                host: "ipfs.infura.io",
                                port: 5001,
                                protocol: "https",
                                headers: {
                                    authorization: t
                                }
                            }),
                            a = {
                                name: "WAATCA - " + this.bpointconversion(1e6 * this.USDCAmount),
                                image: "https://ipfs.io/ipfs/QmTfrJkzLarpXq9vgs74EgiQCiAm1vVn8nCDDNB31noiQm",
                                description: "This WAATCA NFT represents 'ownership' within The PulseDogecoinStakingCarnival.com ecosystem. The owner of this NFT may burn this NFT at any time and redeem the underlying coins ($PLSD, $PLSB, $ASIC, $CARN, $USDC and $HEX) according to the percentage of the pool they own",
                                attributes: [{
                                    value: 1e6 * this.USDCAmount,
                                    display_type: "number",
                                    trait_type: "Points"
                                }]
                            };
                        console.log("data:", a);
                        let n = await e.add(JSON.stringify(a), {
                            progress: t => console.log("received: " + t)
                        });
                        this.mintUri = "https://ipfs.io/ipfs/" + n.path, console.log("mintUri:", this.mintUri), this.onMint()
                    },
                    onMint() {
                        this.SET_LOADING(!0), this.getWAATCAInstance.methods.mintWaatcaNft(this.sixToWei(this.USDCAmount), this.mintUri).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("WAATCA is Minting!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("WAATCA has Minted!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("WAATCA Mint has Failed")
                        })
                    },
                    onBurn(t) {
                        this.SET_LOADING(!0), this.getWAATCAInstance.methods.burn(t).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("WAATCA burn transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("WAATCA burn transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("WAATCA burn transaction has Failed")
                        })
                    },
                    clearForm() {
                        this.USDCAmount = 0
                    },
                    bpointconversion(t) {
                        return t < 1e6 ? String(t) + " Points" : t < 1e9 && t >= 1e6 ? String(t / 1e6) + " M-Points" : t < 1e12 && t >= 1e9 ? String(t / 1e9) + " B-Points" : t < 1e15 && t >= 1e12 ? String(t / 1e12) + " T-Points" : void 0
                    },
                    bpointconversion_int(t) {
                        return t < 1e6 ? t : t < 1e9 && t >= 1e6 ? t / 1e6 : t < 1e12 && t >= 1e9 ? t / 1e9 : t < 1e15 && t >= 1e12 ? t / 1e12 : void 0
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    },
                    USDCAmount() {
                        this.isUSDCApproved = Number(this.USDCAmount) <= Number(this.sixFormat(this.USDCAllowance))
                    }
                },
                computed: {
                    buttonText() {
                        return 369 == this.walletChainID ? "WAATCA MINTING ONLY ON ETHEREUM" : (new Date).getTime() > 1e3 * this.mintDeadline ? "Minting Period Has Ended" : this.isUSDCApproved ? "Mint WAATCA NFT" : "Approve USDC"
                    }
                }
            },
            le = re,
            de = (a("a619"), Object(v["a"])(le, ie, oe, !1, null, null, null)),
            ce = de.exports,
            ue = a("adda"),
            pe = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e(ue["a"], {
                    attrs: {
                        src: a("4445")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("34ab")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("eb37")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("095f")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("1363")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("125d")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("d8fb")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("1ffa")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("0a73")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("15d8")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("5795")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("47e1")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("fcfb")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("1ddd")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("4507")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("d80b")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("5562")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("3eda")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("2e9e")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("588b")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("2acd")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("7395")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("4ba4")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("3f13")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("b5e3")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("b617")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("67f2")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                }), e(ue["a"], {
                    attrs: {
                        src: a("60ea")
                    }
                }), e(k["a"], {
                    staticClass: "my-5"
                })], 1)
            },
            ye = [],
            me = {
                name: "WhitePaper"
            },
            he = me,
            Ae = (a("f683"), Object(v["a"])(he, pe, ye, !1, null, null, null)),
            Te = Ae.exports,
            ge = a("cd55"),
            Se = a("49e2"),
            Ce = a("c865"),
            be = a("0393"),
            _e = function () {
                var t = this,
                    e = t._self._c;
                return e(x["a"], [e("div", {
                    staticClass: "col-12"
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("h1", [t._v("F.A.Q")]), e(k["a"], {
                    staticClass: "mb-10"
                }), e(be["a"], {
                    attrs: {
                        focusable: ""
                    }
                }, t._l(t.FAQS, (function (a, n) {
                    return e(ge["a"], {
                        key: n
                    }, [e(Ce["a"], {
                        staticClass: "pa-6"
                    }, [e("b", [t._v(" " + t._s(a.question) + " ")])]), e(Se["a"], {
                        staticClass: "pt-4"
                    }, [t._v(" " + t._s(a.answer) + " ")])], 1)
                })), 1)], 1)], 1)])
            },
            fe = [],
            we = {
                name: "Faq",
                data() {
                    return {
                        FAQS: [{
                            question: "Where Does the PulseDogecoin Staking Rewards come from?",
                            answer: "The rewards come from a percentage of other parts of the carnival activities like the Community ASIC Miner, Lotteries, Hex Community Stake and any other carnival activity that will be added to the mix"
                        }, {
                            question: "Who gets the 30 CARN fee for staking?",
                            answer: "All of that CARN is sent to the BUY and BURN Contract is equally split 10 ways between 10 different operations. Check out the Buy and Burn tab for those 10 operations."
                        }, {
                            question: "How does the Community ASIC Miner Work?",
                            answer: "You Deposit some ASIC into the Community Miner, and depending on your percentage of the total ASIC that was deposited for that session, you'll get that percentage of PulseBitcoin that is mined for that session. For example lets say a year from now, there is 1 Million ASIC in the Community Miner, and you deposit 50 ASIC into the Community Miner. And lets say for example you are the only person to deposit ASIC for that specific mining session. Then you will get 100% of ALL the PulseBitcoin mined with the 1,000,050 ASIC tokens. If alternatively 4 people each deposited 50 ASIC for that session then those 4 people would split the total PulseBitcoin mined during that session each getting 25% of the PulseBitcoin mined with the 1,000,200 ASIC tokens. "
                        }, {
                            question: "Is the deposited ASIC stuck in there forever?",
                            answer: "No, all the ASIC will be released when the Trapped ASIC release pool reaches 100K CARN, and at that point 60% of the ASIC will be released into the PulseDogecoin Staking rewards pool and 40% of it will be released into the WAATCA pool. The 100K CARN will all be sent to the Buy and Burn Contract, similar to ALL CARN that's collected at the Carnival"
                        }, {
                            question: "How does the Buy and Burn work?",
                            answer: "Any CARN that is collected at the Carnival (like the 30 CARN for PulseDogecoin Staking), is deposited into the Buy and Burn Contract. Immediately all that deposited CARN is equally divided amongst 10 different operations you can see in the Buy and Burn tab. 10% of all CARN is burnt. 10% of all CARN is deposited into the CARN Rewards pool. The other 80% is used to Market Buy different coins on Uniswap and either burn those coins or send them to WAATCA."
                        }, {
                            question: "Where Does the WAATCA Rewards come from?",
                            answer: "Similar to the PulseDogecoin Staking Rewards, WAATCA gets a percentage from all the activities of the Carnival, but WAATCA also gets a 'copy' of any CARN Rewards that is withdraw from the CARN Rewards PulseBitcoinLock NFT reward pool, also WAATCA gets 50% of any USDC used to acquire CARN from the CARN Token Booth"
                        }]
                    }
                }
            },
            ve = we,
            De = Object(v["a"])(ve, _e, fe, !1, null, null, null),
            Ee = De.exports,
            Ie = function () {
                var t = this,
                    e = t._self._c;
                return e(x["a"], [e("div", {
                    staticClass: "col-12"
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("h1", [t._v("Disclaimer")]), e(k["a"], {
                    staticClass: "my-2"
                }), e("h2", [t._v("Disclaimer: Risks of DeFi and Cryptocurrency")]), e("p", [t._v("Cryptocurrency and Decentralized Finance (DeFi) are relatively new and complex technologies that come with a high degree of risk. Before investing in cryptocurrency or participating in DeFi projects, it's important to understand the risks involved. This disclaimer aims to highlight some of these risks, but it is not exhaustive.")]), e("ol", [e("li", [e("strong", [t._v("Volatility and market risk")]), e("p", [t._v("Cryptocurrency markets are highly volatile and subject to significant price fluctuations. The value of your investment may increase or decrease rapidly, and there is no guarantee that you will make a profit. You should never invest more than you can afford to lose.")])]), e("li", [e("strong", [t._v("Regulatory risk")]), e("p", [t._v("The regulatory environment surrounding cryptocurrency and DeFi is constantly evolving, and it is possible that new laws and regulations may be introduced that could impact the value of your investment. Regulatory changes could result in restrictions on cryptocurrency or even an outright ban, which could have a significant impact on the market.")])]), e("li", [e("strong", [t._v("Smart contract risk")]), e("p", [t._v("DeFi platforms rely on smart contracts, which are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code. These contracts are complex and could contain errors or vulnerabilities that could be exploited by bad actors, resulting in the loss of your investment.")])]), e("li", [e("strong", [t._v("Cybersecurity risk")]), e("p", [t._v("Cryptocurrency and DeFi platforms are vulnerable to cyber attacks, and hackers have successfully stolen millions of dollars from these platforms. You should take steps to secure your cryptocurrency and DeFi investments, such as using a hardware wallet, enabling two-factor authentication, and never typing your seed phrase anywhere.")])]), e("li", [e("strong", [t._v("Liquidity risk")]), e("p", [t._v("Some DeFi projects may have low liquidity, meaning that it may be difficult to buy or sell tokens on the open market. In some cases, it may be impossible to sell your tokens at a fair price, or you may have to wait for an extended period to find a buyer. Never expect anyone to provide liquidity.")])]), e("li", [e("strong", [t._v("Penalty risk")]), e("p", [t._v("It's important to note that our project has a very detailed white paper that outlines all the rules for participation. We strongly advise that you read this white paper carefully as certain parts contain penalties for not following the rules. By participating in our project, you acknowledge that you have read and understood the white paper and agree to abide by its rules and guidelines.")])]), e("li", [e("strong", [t._v("Expectations risk")]), e("p", [t._v("Its important that you should NEVER have expectations of profit from the work of others in any capacity, whatsoever. The Carnival is a 100% decentralized and finished product. Any developer may add things to the CARNival in the future if they want, but that will be at their own discretion.")])])]), e("p", [t._v("In conclusion, investing in cryptocurrency and participating in DeFi projects comes with significant risks. Before investing, you should thoroughly research the project, understand the technology, and be aware of the risks involved. You should also seek advice from a professional financial advisor to help you assess the risks and make an informed decision about your investment.")])], 1)], 1)])
            },
            Ne = [],
            Re = {
                name: "Disclaimer"
            },
            ke = Re,
            Le = Object(v["a"])(ke, Ie, Ne, !1, null, null, null),
            xe = Le.exports,
            Be = function () {
                var t = this,
                    e = t._self._c;
                return e("div", [e(x["a"], [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-6"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("Hex")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "purple darken-2"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("c06d")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.eightFormat(t.HEXBalance)) + " $HEX ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-6"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "75",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        width: "50px",
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.CARNBalance)) + " $CARN ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.getUserAddress,
                        expression: "getUserAddress"
                    }],
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-5"
                }, [e(N["a"], {
                    staticClass: "mx-auto text-center"
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "demo"
                    }
                }, [t._v("0 Days 0 Hours 0 Minutes 0 Seconds")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v("until the " + t._s(t.text) + " is Over.")])], 1)], 1)], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12 col-md-6"
                }, [e(N["a"], {
                    staticClass: "pa-3 pa-sm-5",
                    class: 0 === this.state ? "" : "bg-grey",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("9 Day Reload Period")]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" 9 days to withdraw your HEX Rewards and then stake again for the next staking session. (Note: the first 60 day stake can only start once the deposits reach 1 Million HEX, regardless of the countdown timer) ")]), e(k["a"], {
                    staticClass: "my-5"
                }), e(N["a"], {
                    staticClass: "pa-5 my-5",
                    attrs: {
                        outlined: ""
                    }
                }, [e("h3", {
                    staticClass: "font-weight-regular"
                }, [t._v(" Withdraw your share of the HEX Rewards from the last Hex Stake ")]), e(l["a"], {
                    staticClass: "py-5 mt-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || Number(t.asicDeposits.sessionId) === t.currentSessionId || !Number(t.asicDeposits.amount)
                    },
                    on: {
                        click: t.onClaimReward
                    }
                }, [t._v(" Withdraw HEX Rewards ")])], 1), e(N["a"], {
                    staticClass: "pa-5 my-5",
                    attrs: {
                        outlined: ""
                    }
                }, [e(B["a"], {
                    attrs: {
                        outlined: "",
                        type: "text",
                        label: "Enter HEX Deposit Amount"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        t.HEXDepositAmount = t.eightFormat(t.HEXBalance, 3)
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.HEXDepositAmount,
                        callback: function (e) {
                            t.HEXDepositAmount = e
                        },
                        expression: "HEXDepositAmount"
                    }
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || Number(t.asicDeposits.sessionId) > t.currentSessionId || !!Number(t.asicDeposits.amount) && Number(t.asicDeposits.sessionId) !== t.currentSessionId
                    },
                    on: {
                        click: function (e) {
                            return t.onASICApprove()
                        }
                    }
                }, [t._v(" " + t._s(t.isASICApproved ? "Deposit HEX" : "Approve HEX") + " ")])], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-md-6"
                }, [e(N["a"], {
                    staticClass: "pa-3 pa-sm-5",
                    class: 1 === this.state ? "" : "bg-grey",
                    staticStyle: {
                        height: "100%"
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("60 Day Hex Stake")]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" 60 Days where the communities HEX goes to work. ")]), e(k["a"], {
                    staticClass: "my-6"
                }), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" You Deposited: " + t._s(Number(t.asicDeposits.sessionId) > t.currentSessionId - 2 ? t.eightFormat(t.asicDeposits.amount) : 0) + " $HEX ")]), e("h3", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 === t.state,
                        expression: "state===0"
                    }],
                    staticClass: "my-5"
                }, [t._v(" Total HEX Deposited For Upcoming Stake: " + t._s(t.eightFormat(t.totalAsicDepositForTheCurrentSession)) + " $HEX ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Total HEX Deposited for " + t._s(0 === t.state ? "Previous" : "This") + " Stake: " + t._s(Number(t.eightFormat(t.totalAsicDepositForThePreviousSession))) + " $HEX ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Total HEX " + t._s(0 === t.state ? "Held By" : "Staked with") + " the Community Hex Staker: " + t._s(0 === t.state ? Number(t.eightFormat(t.totalAsicHeldByTheAsicMinerAddress)) : Number(t.eightFormat(t.asicUsedToMine))) + " $HEX ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Number of Deposits in " + t._s(0 === t.state ? "Upcoming Stake" : "This Stake") + ": " + t._s(t.numParticipantsForThisSession) + " Deposits ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Number of Deposits in ALL Stakes: " + t._s(t.numTotalDepositsForAllSessions) + " Deposits ")]), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Total HEX Rewards Minted in Previous Stake + Unclaimed: " + t._s(t.eightFormat(t.totalPLSBRewards)) + " $HEX ")]), 0 === t.state ? e("h3", {
                    staticClass: "my-5"
                }, [t._v(" Total Unclaimed Rewards: " + t._s(t.eightFormat(t.unclaimedRewards)) + " ")]) : t._e(), e("h3", {
                    staticClass: "my-5"
                }, [t._v(" ETH Fees collected for the Stake Ender: " + t._s(t.eighteenFormat(t.hexStakerEthBalance, 3)) + " ")])], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-6"
                }, [e(N["a"], {
                    staticClass: "mx-auto"
                }, [e(l["a"], {
                    staticClass: "mt-5 py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || !t.showStartReloadPeriodButton
                    },
                    on: {
                        click: t.onStartReloadPeriod
                    }
                }, [t._v(" End Stake ")])], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-6"
                }, [e(N["a"], {
                    staticClass: "mx-auto"
                }, [e(l["a"], {
                    staticClass: "mt-5 py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading || !t.showStartStakedPeriodButton
                    },
                    on: {
                        click: t.onStartMiningSession
                    }
                }, [t._v(" Stake HEX with " + t._s(t.eightFormat(t.totalAsicHeldByTheAsicMinerAddress)) + " $HEX Tokens ")])], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-md-6"
                }, [e(N["a"], {
                    staticClass: "pa-5",
                    attrs: {
                        outlined: ""
                    }
                }, [e("h1", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v(" The Trapped HEX Release Pool ")]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" ALL the HEX that has been collected over time will be trapped in the contract until this pool reaches 369K $CARN, at which point ALL the trapped HEX will be released: 30% to PulseDogecoin Stakers and 40% to the WAATCA POOL and 30% to a surprise pool :) The 369K CARN will all go to the BUY and BURN Contract. ")]), e(k["a"], {
                    staticClass: "my-5"
                }), e(x["a"], [e("div", {
                    staticClass: "col-12"
                }, [e("label", {
                    attrs: {
                        for: ""
                    }
                }, [t._v("Amount of CARN Collected So Far: " + t._s(t.twelveFormat(t.trappedAsicReleasePool)))]), e(B["a"], {
                    staticClass: "mt-3",
                    attrs: {
                        outlined: "",
                        label: "CARN Amount",
                        type: "text"
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function () {
                            return [e(l["a"], {
                                attrs: {
                                    text: "",
                                    color: "primary",
                                    small: ""
                                },
                                on: {
                                    click: function (e) {
                                        t.CARNDepositAmount = t.twelveFormat(t.CARNBalance)
                                    }
                                }
                            }, [t._v(" MAX ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.CARNDepositAmount,
                        callback: function (e) {
                            t.CARNDepositAmount = e
                        },
                        expression: "CARNDepositAmount"
                    }
                }), t.isCARNApproved ? e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading
                    },
                    on: {
                        click: t.onCARNDeposit
                    }
                }, [t._v(" " + t._s(Number(t.CARNDepositAmount) + Number(t.eightFormat(t.trappedAsicReleasePool)) >= 1e5 ? "DEPOSIT CARN AND RELEASE ALL TRAPPED HEX" : "Deposit CARN") + " ")]) : e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "yellow",
                        disabled: !t.getUserAddress || t.isLoading
                    },
                    on: {
                        click: t.onCARNApprove
                    }
                }, [t._v(" Approve CARN ")])], 1)])], 1)], 1)])], 1)
            },
            Pe = [],
            Me = {
                name: "HEXStaker",
                data() {
                    return {
                        text: "Reload",
                        clearIntervalX: null,
                        HEXBalance: 0,
                        CARNBalance: 0,
                        isASICApproved: !1,
                        isCARNApproved: !1,
                        HEXDepositAmount: 0,
                        CARNDepositAmount: 0,
                        state: 0,
                        currentSessionId: 0,
                        asicDeposits: 0,
                        nextMiningStartTime: 0,
                        nextReloadTime: 0,
                        unclaimedRewards: 0,
                        totalPLSBRewards: 0,
                        trappedAsicReleasePool: 0,
                        totalAsicDepositForTheCurrentSession: 0,
                        totalAsicDepositForThePreviousSession: 0,
                        totalAsicHeldByTheAsicMinerAddress: 0,
                        numTotalDepositsForAllSessions: 0,
                        numParticipantsForThisSession: 0,
                        asicUsedToMine: 0,
                        hexStakerEthBalance: 0
                    }
                },
                beforeDestroy() {
                    clearInterval(this.clearIntervalX)
                },
                async mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    readValues() {
                        let t = this.getUserAddress;
                        Promise.all([this.getHEXInstance.methods.allowance(t, this.HEX_STAKER_ADDRESS).call(), this.getCARNInstance.methods.allowance(t, this.HEX_STAKER_ADDRESS).call(), this.getHEXInstance.methods.balanceOf(t).call(), this.getCARNInstance.methods.balanceOf(t).call(), this.getHEXStakerInstance.methods.state().call(), this.getHEXStakerInstance.methods.currentSessionId().call(), this.getHEXStakerInstance.methods.hexDeposits(t).call(), this.getHEXStakerInstance.methods.nextStakingStartTime().call(), this.getHEXStakerInstance.methods.unclaimedRewards().call(), this.getHEXStakerInstance.methods.totalRewards().call(), this.getHEXStakerInstance.methods.trappedHexReleasePool().call(), this.getHEXStakerInstance.methods.totalHexDepositForTheCurrentSession().call(), this.getHEXStakerInstance.methods.totalHexDepositForThePreviousSession().call(), this.getHEXInstance.methods.balanceOf(this.HEX_STAKER_ADDRESS).call(), this.getHEXStakerInstance.methods.balanceBefore().call(), this.getHEXStakerInstance.methods.numTotalDepositsForAllSessions().call(), this.getHEXStakerInstance.methods.numParticipantsForThisSession().call(), this.getWeb3.eth.getBalance(this.HEX_STAKER_ADDRESS)]).then(async ([t, e, a, n, s, i, o, r, l, d, c, u, p, y, m, h, A, T]) => {
                            console.log("isASICApproved:", !!Number(t)), console.log("isCARNApproved:", !!Number(e)), console.log("HEXBalance:", this.eightFormat(a)), console.log("CARNBalance:", this.twelveFormat(n)), console.log("state:", s), console.log("currentSessionId:", i), console.log("asicDeposits:", o), console.log("nextMiningStartTime:", r), console.log("unclaimedRewards:", l), console.log("totalPLSBRewards:", d), console.log("trappedAsicReleasePool:", c), console.log("totalAsicDepositForTheCurrentSession:", u), console.log("totalAsicDepositForThePreviousSession:", p), console.log("totalAsicHeldByTheAsicMinerAddress: ", y), console.log("asicUsedToMine:", m), console.log("numTotalDepositsForAllSessions:", h), console.log("numParticipantsForThisSession: ", A), console.log("ASIC Approved amount:", Number(t)), console.log("CARN Approved amount:", Number(e)), console.log("hexStakerEthBalance:", Number(T)), this.isASICApproved = Number(t) > 0, this.isCARNApproved = Number(e) > 0, this.HEXBalance = a, this.CARNBalance = n, this.state = Number(s), this.currentSessionId = Number(i), this.asicDeposits = o, this.nextMiningStartTime = Number(r), this.unclaimedRewards = l, this.totalPLSBRewards = d, this.trappedAsicReleasePool = c, this.totalAsicDepositForTheCurrentSession = u, this.totalAsicDepositForThePreviousSession = p, this.totalAsicHeldByTheAsicMinerAddress = y, this.hexStakerEthBalance = T, this.asicUsedToMine = m, this.numTotalDepositsForAllSessions = h, this.numParticipantsForThisSession = A, this.state || (console.log("********************state = 0***********************"), clearInterval(this.clearIntervalX), this.counter()), this.state && (console.log("********************state = 1***********************"), Promise.all([this.getHEXStakerInstance.methods.getStakeStore().call(), this.getHEXInstance.methods.currentDay().call()]).then(async ([t, e]) => {
                                console.log("getStakeStore******************: ", t), console.log("hexCurrentDay", e), console.log("getStakeStore[3]", t[3]), this.nextReloadTime = 60 - (Number(e) - Number(t[3])), console.log("this.nextReloadTime!! ", this.nextReloadTime), clearInterval(this.clearIntervalX), this.counter()
                            }))
                        })
                    },
                    counter() {
                        let t = 0;
                        0 === this.state ? (this.text = "Reload Period", t = 1e3 * this.nextMiningStartTime, console.log("here state is 0")) : 1 === this.state && (this.text = "Hex Stake", t = this.nextReloadTime, console.log("here state is 1!!!")), console.log("countDownDate: ", t);
                        let e = this.state;
                        this.clearIntervalX = setInterval((function () {
                            if (console.log("inside the clearintervalX the state is: ", e), console.log("inside the clearintervalX the state is: ", !!e), e) console.log("inside state = 1"), t <= 0 ? (clearInterval(this.clearIntervalX), document.getElementById("demo").innerHTML = "0 Days") : document.getElementById("demo").innerHTML = t + " Days ";
                            else {
                                console.log("inside state = 0");
                                let e = (new Date).getTime() + 0;
                                const a = t - e,
                                    n = Math.floor(a / 864e5),
                                    s = Math.floor(a % 864e5 / 36e5),
                                    i = Math.floor(a % 36e5 / 6e4),
                                    o = Math.floor(a % 6e4 / 1e3);
                                a <= 0 ? (clearInterval(this.clearIntervalX), document.getElementById("demo").innerHTML = "0 Days 0 Hours 0 Minutes 0 Seconds") : document.getElementById("demo").innerHTML = `${n} Days ${s} Hours ${i} Minutes ${o} Seconds`
                            }
                        }), 1e3)
                    },
                    onClaimReward() {
                        this.SET_LOADING(!0), this.getHEXStakerInstance.methods.claimReward().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Claim Rewards transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Claim Rewards transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Claim Rewards transaction has Failed")
                        })
                    },
                    onASICApprove() {
                        this.getUserAddress ? this.isASICApproved ? this.onASICDeposit() : (this.SET_LOADING(!0), this.getHEXInstance.methods.approve(this.HEX_STAKER_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("HEX Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("HEX Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("HEX Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onASICDeposit() {
                        this.HEXDepositAmount ? Number(this.HEXDepositAmount) < 10 ? this.$toasted.show("You need at least 100 HEX in your account to deposit") : Number(this.HEXDepositAmount) > Number(this.eightFormat(this.HEXBalance)) ? this.$toasted.show("Insufficient balance in your wallet.") : Number(this.twelveFormat(this.CARNBalance)) < 10 ? this.$toasted.show("You need at least 10 CARN in your account to deposit") : (this.SET_LOADING(!0), console.log("DEPOSIT:", this.eightToWei(this.HEXDepositAmount)), this.getHEXStakerInstance.methods.deposit(this.eightToWei(this.HEXDepositAmount)).send({
                            from: this.getUserAddress,
                            value: this.getWeb3.utils.toWei("0.002", "ether")
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("HEX Deposit transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("HEX Deposit transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("HEX Deposit transaction has Failed")
                        })) : this.$toasted.show("Enter HEX Staking Amount")
                    },
                    onStartMiningSession() {
                        this.SET_LOADING(!0), this.getHEXStakerInstance.methods.startStakingSession().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Start Staking Session transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Start Staking Session transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Start Staking Session transaction has Failed")
                        })
                    },
                    onStartReloadPeriod() {
                        this.SET_LOADING(!0), this.getHEXStakerInstance.methods.startReloadPeriod().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Start Reload Period transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Start Reload Period transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Start Reload Period transaction has Failed")
                        })
                    },
                    onCARNApprove() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getCARNInstance.methods.approve(this.HEX_STAKER_ADDRESS, "1000000000000000000000000000").send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("CARN Approve transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("CARN Approve transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("CARN Approve transaction has Failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    onCARNDeposit() {
                        this.CARNDepositAmount ? Number(this.CARNDepositAmount) > Number(this.twelveFormat(this.CARNBalance)) ? this.$toasted.show("Insufficient balance in your wallet.") : (this.SET_LOADING(!0), this.getHEXStakerInstance.methods.depositCARNToTrappedPool(this.twelveToWei(this.CARNDepositAmount)).send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("CARN Deposit transaction is Processing!")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.clearForm(), this.SET_LOADING(!1), this.$toasted.show("CARN Deposit transaction has Completed!")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("CARN Deposit transaction has Failed")
                        })) : this.$toasted.show("Enter CARN Deposit Amount")
                    },
                    clearForm() {
                        this.HEXDepositAmount = 0, this.CARNDepositAmount = 0
                    }
                },
                computed: {
                    showStartReloadPeriodButton() {
                        return 1 === this.state && this.nextReloadTime <= 0
                    },
                    showStartStakedPeriodButton() {
                        return 0 === this.state && (new Date).getTime() + 0 > 1e3 * this.nextMiningStartTime
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            Fe = Me,
            He = (a("e7f2"), Object(v["a"])(Fe, Be, Pe, !1, null, null, null)),
            Ue = He.exports,
            Oe = function () {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticStyle: {
                        height: "100%"
                    }
                }, [e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("PLSD")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "cyan lighten-1"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("d5e2")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.PLSDBalance)) + " $PLSD ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("PLSB")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "blue"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("d52b")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.PLSBBalance)) + " $PLSB ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("ASIC")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "purple darken-2"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("76e7")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.ASICBalance)) + " $ASIC ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("CARN")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("6a7a")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.twelveFormat(t.CARNBalance)) + " $CARN ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("USDC")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("8f66")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.sixFormat(t.USDCBalance)) + " $USDC ")])], 1)], 1)], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-4 col-md-2"
                }, [e(N["a"], {
                    staticClass: "mx-auto",
                    on: {
                        click: function (e) {
                            return t.addToken("HEX")
                        }
                    }
                }, [e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(L["a"], {
                    attrs: {
                        size: "55",
                        color: "green"
                    }
                }, [e("img", {
                    attrs: {
                        src: a("c06d")
                    }
                })]), e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [t._v(" " + t._s(t.eightFormat(t.HEXBalance)) + " $HEX ")])], 1)], 1)], 1)], 1)]), e(x["a"], {
                    staticClass: "justify-center"
                }, [e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "pa-5 text-center"
                }, [e("a", {
                    staticClass: "black--text",
                    attrs: {
                        href: t.ETHERSCAN_URL_BASE + "address/" + t.PLSB_FAUCET_ADDRESS,
                        target: "_blank"
                    }
                }, [e("h2", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("PulseBitcoin Faucet")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v("7 Free PulseBitcoin, once a week.")]), e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "increaseIntervalPLSB"
                    }
                }, [t._v("0D 0H 0M 0S")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" until the next time you can withdraw. ")])], 1)], 1), t._v(" Faucet Balance: " + t._s(t.twelveFormat(t.PLSBFaucetBalance)) + " $PLSB "), e(k["a"], {
                    staticClass: "my-5"
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "primary",
                        disabled: !t.getUserAddress || t.isLoading || !Number(t.PLSBFaucetBalance) || Number(t.CARNBalance) < 369e12 || !t.hasAtLeastOneNonTransferableNFT() || t.cantWithdrawPLSB()
                    },
                    on: {
                        click: function (e) {
                            return t.withdrawPLSB()
                        }
                    }
                }, [t._v(" Withdraw 7 $PLSB ")])], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "pa-5 text-center"
                }, [e("a", {
                    staticClass: "black--text",
                    attrs: {
                        href: t.ETHERSCAN_URL_BASE + "address/" + t.ASIC_FAUCET_ADDRESS,
                        target: "_blank"
                    }
                }, [e("h2", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("ASIC Faucet")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v("7 Free ASIC, once a week.")]), e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "increaseIntervalASIC"
                    }
                }, [t._v("0D 0H 0M 0S")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" until the next time you can withdraw. ")])], 1)], 1), t._v(" Faucet Balance: " + t._s(t.twelveFormat(t.ASICFaucetBalance)) + " $ASIC "), e(k["a"], {
                    staticClass: "my-5"
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "primary",
                        disabled: !t.getUserAddress || t.isLoading || !Number(t.ASICFaucetBalance) || Number(t.CARNBalance) < 369e12 || t.hasAtLeastOneNonTransferableNFT() || t.cantWithdrawASIC()
                    },
                    on: {
                        click: function (e) {
                            return t.withdrawASIC()
                        }
                    }
                }, [t._v(" Withdraw 7 $ASIC ")])], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "pa-5 text-center"
                }, [e("a", {
                    staticClass: "black--text",
                    attrs: {
                        href: t.ETHERSCAN_URL_BASE + "address/" + t.PLSD_FAUCET_ADDRESS,
                        target: "_blank"
                    }
                }, [e("h2", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("PulseDogecoin Faucet")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" 7 Free PulseDogecoin, once a week. ")]), e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "increaseIntervalPLSD"
                    }
                }, [t._v("0D 0H 0M 0S")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" until the next time you can withdraw. ")])], 1)], 1), t._v(" Faucet Balance: " + t._s(t.twelveFormat(t.PLSDFaucetBalance)) + " $PLSD "), e(k["a"], {
                    staticClass: "my-5"
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "primary",
                        disabled: !t.getUserAddress || t.isLoading || !Number(t.PLSDFaucetBalance) || Number(t.CARNBalance) < 369e12 || t.hasAtLeastOneNonTransferableNFT() || t.cantWithdrawPLSD()
                    },
                    on: {
                        click: function (e) {
                            return t.withdrawPLSD()
                        }
                    }
                }, [t._v(" Withdraw $PLSD ")])], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "pa-5 text-center"
                }, [e("a", {
                    staticClass: "black--text",
                    attrs: {
                        href: t.ETHERSCAN_URL_BASE + "address/" + t.CARN_FAUCET_ADDRESS,
                        target: "_blank"
                    }
                }, [e("h2", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("CARN Faucet")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v("7 CARN Rewards, once a week.")]), e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "increaseIntervalCARN"
                    }
                }, [t._v("0D 0H 0M 0S")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" until the next time you can withdraw. ")])], 1)], 1), t._v(" Faucet Balance: " + t._s(t.twelveFormat(t.CARNFaucetBalance)) + " $CARN "), e(k["a"], {
                    staticClass: "my-5"
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "primary",
                        disabled: !t.getUserAddress || t.isLoading || !Number(t.CARNFaucetBalance) || Number(t.CARNBalance) < 369e12 || t.hasAtLeastOneNonTransferableNFT() || t.cantWithdrawCARN()
                    },
                    on: {
                        click: function (e) {
                            return t.withdrawCARN()
                        }
                    }
                }, [t._v(" Withdraw 7 $CARN ")])], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "pa-5 text-center"
                }, [e("a", {
                    staticClass: "black--text",
                    attrs: {
                        href: t.ETHERSCAN_URL_BASE + "address/" + t.HEX_FAUCET_ADDRESS,
                        target: "_blank"
                    }
                }, [e("h2", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("HEX Faucet")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v("7 HEX Rewards, once a week.")]), e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "increaseIntervalHEX"
                    }
                }, [t._v("0D 0H 0M 0S")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" until the next time you can withdraw. ")])], 1)], 1), t._v(" Faucet Balance: " + t._s(t.twelveFormat(t.HEXFaucetBalance)) + " $HEX "), e(k["a"], {
                    staticClass: "my-5"
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "primary",
                        disabled: !t.getUserAddress || t.isLoading || !Number(t.HEXFaucetBalance) || Number(t.CARNBalance) < 369e12 || t.hasAtLeastOneNonTransferableNFT() || t.cantWithdrawHEX()
                    },
                    on: {
                        click: function (e) {
                            return t.withdrawHEX()
                        }
                    }
                }, [t._v(" Withdraw 7 $HEX ")])], 1)], 1), e("div", {
                    staticClass: "col-12 col-sm-6 col-md-4"
                }, [e(N["a"], {
                    staticClass: "pa-5 text-center"
                }, [e("a", {
                    staticClass: "black--text",
                    attrs: {
                        href: t.ETHERSCAN_URL_BASE + "address/" + t.USDC_FAUCET_ADDRESS,
                        target: "_blank"
                    }
                }, [e("h2", {
                    staticClass: "grey--text text--darken-2"
                }, [t._v("USDC Faucet")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v("7 Free USDC, once a week.")]), e(c["a"], {
                    attrs: {
                        "two-line": ""
                    }
                }, [e(u["a"], [e(u["b"], {
                    staticClass: "text-h7 mb-1"
                }, [e("h3", {
                    attrs: {
                        id: "increaseIntervalUSDC"
                    }
                }, [t._v("0D 0H 0M 0S")])]), e("h4", {
                    staticClass: "font-weight-regular"
                }, [t._v(" until the next time you can withdraw. ")])], 1)], 1), t._v(" Faucet Balance: " + t._s(t.twelveFormat(t.USDCFaucetBalance)) + " $USDC "), e(k["a"], {
                    staticClass: "my-5"
                }), e(l["a"], {
                    staticClass: "py-5",
                    attrs: {
                        block: "",
                        "x-large": "",
                        color: "primary",
                        disabled: !t.getUserAddress || t.isLoading || !Number(t.USDCFaucetBalance) || Number(t.CARNBalance) < 369e12 || t.hasAtLeastOneNonTransferableNFT() || t.cantWithdrawUSDC()
                    },
                    on: {
                        click: function (e) {
                            return t.withdrawUSDC()
                        }
                    }
                }, [t._v(" Withdraw $USDC ")])], 1)], 1)]), e(x["a"], [e("div", {
                    staticClass: "col-12"
                }, [e(N["a"], {
                    staticClass: "pa-5"
                }, [e("h1", [t._v("Faucet Instructions")]), e(k["a"], {
                    staticClass: "my-2"
                }), e("p", [t._v("To prevent bots from taking advantage of these faucets, In order to withdraw from any of the above faucets you must have both of the following two things:")]), e("ol", [e("li", [e("strong", [t._v(" Own at least one "), e("a", {
                    attrs: {
                        href: "https://pulsebitcoinlock.app"
                    }
                }, [t._v("PulseBitcoinLock")]), t._v(" Non-Transferable NFT")])]), e("li", [e("strong", [t._v(" Own at least 369 CARN Tokens in your wallet")])])]), e("br"), e("p", [t._v("To be clear: If you dont have 369 CARN in your wallet or you do not have a Non-Transferable PulseBitcoinLock NFT in your wallet, then the WITHDRAW buttons above will be greyed out and the contract wont let you withdraw.")])], 1)], 1)])], 1)
            },
            $e = [],
            We = {
                name: "PulseBitcoinFaucet",
                data() {
                    return {
                        nextRequestPLSB: 0,
                        nextRequestASIC: 0,
                        nextRequestPLSD: 0,
                        nextRequestCARN: 0,
                        nextRequestHEX: 0,
                        nextRequestUSDC: 0,
                        PLSBBalance: 0,
                        ASICBalance: 0,
                        PLSDBalance: 0,
                        CARNBalance: 0,
                        HEXBalance: 0,
                        USDCBalance: 0,
                        PLSBFaucetBalance: 0,
                        ASICFaucetBalance: 0,
                        PLSDFaucetBalance: 0,
                        CARNFaucetBalance: 0,
                        HEXFaucetBalance: 0,
                        USDCFaucetBalance: 0,
                        clearIntervalPLSB: null,
                        clearIntervalASIC: null,
                        clearIntervalPLSD: null,
                        clearIntervalCARN: null,
                        clearIntervalHEX: null,
                        clearIntervalUSDC: null,
                        nfts: [],
                        totalNFTS: 0
                    }
                },
                beforeDestroy() {
                    clearInterval(this.clearIntervalPLSB), clearInterval(this.clearIntervalASIC), clearInterval(this.clearIntervalPLSD), clearInterval(this.clearIntervalCARN), clearInterval(this.clearIntervalHEX), clearInterval(this.clearIntervalUSDC)
                },
                async mounted() {
                    this.getUserAddress && this.readValues()
                },
                methods: {
                    readValues() {
                        let t = this.getUserAddress;
                        Promise.all([this.getPLSBFaucetInstance.methods.nextRequestAt(t).call(), this.getASICFaucetInstance.methods.nextRequestAt(t).call(), this.getPLSDFaucetInstance.methods.nextRequestAt(t).call(), this.getCARNFaucetInstance.methods.nextRequestAt(t).call(), this.getHEXFaucetInstance.methods.nextRequestAt(t).call(), this.getUSDCFaucetInstance.methods.nextRequestAt(t).call(), this.getPLSBInstance.methods.balanceOf(t).call(), this.getASICInstance.methods.balanceOf(t).call(), this.getPLSDInstance.methods.balanceOf(t).call(), this.getCARNInstance.methods.balanceOf(t).call(), this.getHEXInstance.methods.balanceOf(t).call(), this.getUSDCInstance.methods.balanceOf(t).call(), this.getPLSBInstance.methods.balanceOf(this.PLSB_FAUCET_ADDRESS).call(), this.getASICInstance.methods.balanceOf(this.ASIC_FAUCET_ADDRESS).call(), this.getPLSDInstance.methods.balanceOf(this.PLSD_FAUCET_ADDRESS).call(), this.getCARNInstance.methods.balanceOf(this.CARN_FAUCET_ADDRESS).call(), this.getHEXInstance.methods.balanceOf(this.HEX_FAUCET_ADDRESS).call(), this.getUSDCInstance.methods.balanceOf(this.USDC_FAUCET_ADDRESS).call()]).then(([t, e, a, n, s, i, o, r, l, d, c, u, p, y, m, h, A, T]) => {
                            this.nextRequestPLSB = t, this.nextRequestASIC = e, this.nextRequestPLSD = a, this.nextRequestCARN = n, this.nextRequestHEX = s, this.nextRequestUSDC = i, this.PLSBBalance = o, this.ASICBalance = r, this.PLSDBalance = l, this.CARNBalance = d, this.HEXBalance = c, this.USDCBalance = u, this.PLSBFaucetBalance = p, this.ASICFaucetBalance = y, this.PLSDFaucetBalance = m, this.CARNFaucetBalance = h, this.HEXFaucetBalance = A, this.USDCFaucetBalance = T, console.log("nextRequestPLSB: ", t), console.log("nextRequestASIC: ", e), console.log("nextRequestPLSD: ", a), console.log("nextRequestCARN: ", n), console.log("nextRequestHEX: ", s), console.log("nextRequestUSDC: ", i), console.log("PLSBBalance: ", o), console.log("ASICBalance: ", r), console.log("PLSDBalance: ", l), console.log("CARNBalance: ", d), console.log("HEXBalance: ", c), console.log("USDCBalance: ", u), console.log("PLSBFaucetBalance: ", p), console.log("ASICFaucetBalance: ", y), console.log("PLSDFaucetBalance: ", m), console.log("CARNFaucetBalance: ", h), console.log("HEXFaucetBalance: ", A), console.log("USDCFaucetBalance: ", T), clearInterval(this.clearIntervalPLSB), clearInterval(this.clearIntervalASIC), clearInterval(this.clearIntervalPLSD), clearInterval(this.clearIntervalCARN), clearInterval(this.clearIntervalHEX), clearInterval(this.clearIntervalUSDC), this.counterPLSB(), this.counterASIC(), this.counterPLSD(), this.counterCARN(), this.counterHEX(), this.counterUSDC(), this.getUserNFTs()
                        })
                    },
                    cantWithdrawPLSB() {
                        let t = 1e3 * this.nextRequestPLSB,
                            e = (new Date).getTime();
                        const a = t - e;
                        return a > 0
                    },
                    cantWithdrawASIC() {
                        let t = 1e3 * this.nextRequestASIC,
                            e = (new Date).getTime();
                        const a = t - e;
                        return a > 0
                    },
                    cantWithdrawPLSD() {
                        let t = 1e3 * this.nextRequestPLSD,
                            e = (new Date).getTime();
                        const a = t - e;
                        return a > 0
                    },
                    cantWithdrawCARN() {
                        let t = 1e3 * this.nextRequestCARN,
                            e = (new Date).getTime();
                        const a = t - e;
                        return a > 0
                    },
                    cantWithdrawHEX() {
                        let t = 1e3 * this.nextRequestHEX,
                            e = (new Date).getTime();
                        const a = t - e;
                        return a > 0
                    },
                    cantWithdrawUSDC() {
                        let t = 1e3 * this.nextRequestUSDC,
                            e = (new Date).getTime();
                        const a = t - e;
                        return a > 0
                    },
                    counterPLSB() {
                        let t = 1e3 * this.nextRequestPLSB;
                        this.clearIntervalPLSB = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a / 864e5),
                                s = Math.floor(a % 864e5 / 36e5),
                                i = Math.floor(a % 36e5 / 6e4),
                                o = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalPLSB), document.getElementById("increaseIntervalPLSB").innerHTML = "0D 0H 0M 0S") : document.getElementById("increaseIntervalPLSB").innerHTML = `${n} Days ${s} Hours ${i} Minutes ${o} Seconds`
                        }), 1e3)
                    },
                    withdrawPLSB() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getPLSBFaucetInstance.methods.withdraw().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Withdrawing Free PLSB")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet completed")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    counterASIC() {
                        let t = 1e3 * this.nextRequestASIC;
                        this.clearIntervalASIC = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a / 864e5),
                                s = Math.floor(a % 864e5 / 36e5),
                                i = Math.floor(a % 36e5 / 6e4),
                                o = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalASIC), document.getElementById("increaseIntervalASIC").innerHTML = "0D 0H 0M 0S") : document.getElementById("increaseIntervalASIC").innerHTML = `${n} Days ${s} Hours ${i} Minutes ${o} Seconds`
                        }), 1e3)
                    },
                    withdrawASIC() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getASICFaucetInstance.methods.withdraw().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Withdrawing Free ASIC")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet completed")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    counterPLSD() {
                        let t = 1e3 * this.nextRequestPLSD;
                        this.clearIntervalPLSD = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a / 864e5),
                                s = Math.floor(a % 864e5 / 36e5),
                                i = Math.floor(a % 36e5 / 6e4),
                                o = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalPLSD), document.getElementById("increaseIntervalPLSD").innerHTML = "0D 0H 0M 0S") : document.getElementById("increaseIntervalPLSD").innerHTML = `${n} Days ${s} Hours ${i} Minutes ${o} Seconds`
                        }), 1e3)
                    },
                    withdrawPLSD() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getPLSDFaucetInstance.methods.withdraw().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Withdrawing Free PLSD")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet completed")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    counterCARN() {
                        let t = 1e3 * this.nextRequestCARN;
                        this.clearIntervalCARN = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a / 864e5),
                                s = Math.floor(a % 864e5 / 36e5),
                                i = Math.floor(a % 36e5 / 6e4),
                                o = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalCARN), document.getElementById("increaseIntervalCARN").innerHTML = "0D 0H 0M 0S") : document.getElementById("increaseIntervalCARN").innerHTML = `${n} Days ${s} Hours ${i} Minutes ${o} Seconds`
                        }), 1e3)
                    },
                    withdrawCARN() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getCARNFaucetInstance.methods.withdraw().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Withdrawing CARN Rewards")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet completed")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    counterHEX() {
                        let t = 1e3 * this.nextRequestHEX;
                        this.clearIntervalHEX = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a / 864e5),
                                s = Math.floor(a % 864e5 / 36e5),
                                i = Math.floor(a % 36e5 / 6e4),
                                o = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalHEX), document.getElementById("increaseIntervalHEX").innerHTML = "0D 0H 0M 0S") : document.getElementById("increaseIntervalHEX").innerHTML = `${n} Days ${s} Hours ${i} Minutes ${o} Seconds`
                        }), 1e3)
                    },
                    withdrawHEX() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getHEXFaucetInstance.methods.withdraw().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Withdrawing HEX Rewards")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet completed")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    counterUSDC() {
                        let t = 1e3 * this.nextRequestUSDC;
                        this.clearIntervalUSDC = setInterval((function () {
                            let e = (new Date).getTime();
                            const a = t - e,
                                n = Math.floor(a / 864e5),
                                s = Math.floor(a % 864e5 / 36e5),
                                i = Math.floor(a % 36e5 / 6e4),
                                o = Math.floor(a % 6e4 / 1e3);
                            a <= 0 ? (clearInterval(this.clearIntervalUSDC), document.getElementById("increaseIntervalUSDC").innerHTML = "0D 0H 0M 0S") : document.getElementById("increaseIntervalUSDC").innerHTML = `${n} Days ${s} Hours ${i} Minutes ${o} Seconds`
                        }), 1e3)
                    },
                    withdrawUSDC() {
                        this.getUserAddress ? (this.SET_LOADING(!0), this.getUSDCFaucetInstance.methods.withdraw().send({
                            from: this.getUserAddress
                        }).on("transactionHash", t => {
                            console.log(t), this.$toasted.show("Withdrawing Free USDC")
                        }).on("receipt", t => {
                            console.log(t), this.readValues(), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet completed")
                        }).on("error", (t, e) => {
                            console.log(t, e), this.SET_LOADING(!1), this.$toasted.show("Withdraw from faucet failed")
                        })) : this.$toasted.show("Connect your wallet first!")
                    },
                    getUserNFTs() {
                        console.log("get user nfts"), this.nfts = [], this.isNFTLoading = !0;
                        let t = "https://api.thegraph.com/subgraphs/name/korkey128k/pulsebitcoinlocknft";
                        const e = `\n                    {\n                      owner(id:"${this.getUserAddress.toLowerCase()}") {\n                        id\n                        nfts {\n                          id\n                          minter\n                          lockedAmount\n                          tipAmount\n                          lockTime\n                          unlockTime\n                          uri\n                          tokenId\n                          timestamp\n                          burner\n                          burned\n                          burnTime\n                          transferable\n\n                        }\n                      }\n                    }\n                    `,
                            a = {
                                "Content-Type": "application/json"
                            };
                        console.log("hello"), ut["a"].post(t, {
                            query: e
                        }, {
                            headers: a
                        }).then(t => {
                            let e = t.data.data,
                                a = e.owner ? e.owner.nfts : [];
                            a.length ? a.forEach(async (t, e) => {
                                let n = this.geturi(t.uri);
                                ut["a"].get(n).then(n => {
                                    t.name = n.data.name, t.image = this.geturi(n.data.image), Promise.all([this.getNftRewardsInstance.methods.tokenIdsToRegistered(t.id).call(), this.getNftRewardsInstance.methods.tokenIdsToDailyRewardAmount(t.id).call(), this.getNftRewardsInstance.methods.tokenIdsToLastWithdrawalDay(t.id).call(), this.getNftRewardsInstance.methods.tokenIdsToEndRewardsDay(t.id).call()]).then(([n, s, i, o]) => {
                                        console.log("isRegistered: ", n), console.log("REWARD: ", s), console.log("WithdrawalDay: ", i), t.reward = s, t.isRegistered = n, t.withdrawalDay = i, t.endRewardDay = o, this.nfts.push(t), e + 1 === a.length && this.nfts.sort(this.compareValues("id")), this.isNFTLoading = !1
                                    })
                                }).catch(t => {
                                    console.log(t), this.isNFTLoading = !1
                                })
                            }) : this.isNFTLoading = !1
                        }).catch(t => {
                            console.log(t), this.isNFTLoading = !1
                        })
                    },
                    geturi(t) {
                        let e = t.split("/"),
                            a = e[e.length - 1];
                        return "https://carn.infura-ipfs.io/ipfs/" + a
                    },
                    hasAtLeastOneNonTransferableNFT() {
                        console.log("inside: hasAtLeastOneNonTransferableNFT"), console.log(this.nfts);
                        for (let t of this.nfts)
                            if (!t.transferable) return !0;
                        return !1
                    }
                },
                watch: {
                    getUserAddress() {
                        this.getUserAddress && this.readValues()
                    }
                }
            },
            Xe = We,
            Ge = (a("9ef1"), Object(v["a"])(Xe, Oe, $e, !1, null, null, null)),
            Ye = Ge.exports;
        n["a"].use(I["a"]);
        const Ke = [{
                path: "/waatca",
                name: "WAATCA",
                component: ce
            }, {
                path: "/stake_pulsedogecoin",
                name: "StakePulseDogecoin",
                component: $
            }, {
                path: "/community_asic_miner",
                name: "CommunityCarnivalAsicMiner",
                component: V
            }, {
                path: "/pulse_bitcoin_lock_app_secret",
                name: "PulseBitcoinLockApp",
                component: rt
            }, {
                path: "/lotteries",
                name: "Lotteries",
                component: Ut,
                redirect: {
                    name: "LotteriesMonth"
                },
                children: [{
                    path: "daily_secret",
                    name: "LotteriesHour",
                    component: Yt
                }, {
                    path: "weekly_secret",
                    name: "LotteriesWeek",
                    component: Jt
                }, {
                    path: "monthly",
                    name: "LotteriesMonth",
                    component: ne
                }]
            }, {
                path: "/carn_rewards",
                name: "FreeCarn",
                component: ht
            }, {
                path: "/hex_rewards",
                name: "FreeHex",
                component: bt
            }, {
                path: "/carn_token_booth",
                name: "CarnTicketBooth",
                component: Et
            }, {
                path: "/buy_n_burn",
                name: "BuyAndBurn",
                component: xt
            }, {
                path: "/",
                name: "Hex",
                component: Ue
            }, {
                path: "/white_paper",
                name: "WhitePaper",
                component: Te
            }, {
                path: "/faq",
                name: "Faq",
                component: Ee
            }, {
                path: "/disclaimer",
                name: "Disclaimer",
                component: xe
            }, {
                path: "/faucets_secret",
                name: "PulseBitcoinFaucet",
                component: Ye
            }],
            Ve = new I["a"]({
                mode: "history",
                base: "/",
                routes: Ke
            });
        var je = Ve;
        const qe = () => ({
            loading: !1,
            web3: null,
            walletChainID: null,
            userAddress: null,
            CARNInstance: null,
            PLSDInstance: null,
            PLSBInstance: null,
            ASICInstance: null,
            USDCInstance: null,
            stakingInstance: null,
            WAATCAInstance: null,
            nftRewardsInstance: null,
            burnInstance: null,
            ASICMinerInstance: null,
            HEXStakerInstance: null,
            tokenInstance: null,
            contractInstance: null
        });
        var ze = qe;
        const Je = {
            SET_LOADING: (t, e) => {
                t.loading = e
            },
            SET_WALLETCHAINID: (t, e) => {
                t.walletChainID = e
            },
            SET_WEB3: (t, e) => {
                t.web3 = e
            },
            SET_USER_ADDRESS: (t, e) => {
                t.userAddress = e
            },
            SET_CARN_INSTANCE: (t, e) => {
                t.CARNInstance = e
            },
            SET_PLSD_INSTANCE: (t, e) => {
                t.PLSDInstance = e
            },
            SET_PLSB_INSTANCE: (t, e) => {
                t.PLSBInstance = e
            },
            SET_ASIC_INSTANCE: (t, e) => {
                t.ASICInstance = e
            },
            SET_USDC_INSTANCE: (t, e) => {
                t.USDCInstance = e
            },
            SET_HEX_INSTANCE: (t, e) => {
                t.HEXInstance = e
            },
            SET_CHAINLINK_INSTANCE: (t, e) => {
                t.CHAINLINKInstance = e
            },
            SET_STAKING_INSTANCE: (t, e) => {
                t.stakingInstance = e
            },
            SET_WAATCA_INSTANCE: (t, e) => {
                t.WAATCAInstance = e
            },
            SET_NFT_REWARDS_INSTANCE: (t, e) => {
                t.nftRewardsInstance = e
            },
            SET_NFT_HEX_REWARDS_INSTANCE: (t, e) => {
                t.nftHexRewardsInstance = e
            },
            SET_BURN_INSTANCE: (t, e) => {
                t.burnInstance = e
            },
            SET_ASIC_MINER_INSTANCE: (t, e) => {
                t.ASICMinerInstance = e
            },
            SET_HEX_STAKER_INSTANCE: (t, e) => {
                t.HEXStakerInstance = e
            },
            SET_CARN_FAUCET_INSTANCE: (t, e) => {
                t.CARNFaucetInstance = e
            },
            SET_PLSD_FAUCET_INSTANCE: (t, e) => {
                t.PLSDFaucetInstance = e
            },
            SET_PLSB_FAUCET_INSTANCE: (t, e) => {
                t.PLSBFaucetInstance = e
            },
            SET_ASIC_FAUCET_INSTANCE: (t, e) => {
                t.ASICFaucetInstance = e
            },
            SET_USDC_FAUCET_INSTANCE: (t, e) => {
                t.USDCFaucetInstance = e
            },
            SET_HEX_FAUCET_INSTANCE: (t, e) => {
                t.HEXFaucetInstance = e
            },
            SET_TOKEN_INSTANCE: (t, e) => {
                t.tokenInstance = e
            },
            SET_CONTRACT_INSTANCE: (t, e) => {
                t.contractInstance = e
            }
        };
        var Qe = Je;
        const Ze = {
            isLoading: t => t.loading,
            getWeb3: t => t.web3,
            walletChainID: t => t.walletChainID,
            getUserAddress: t => t.userAddress,
            getCARNInstance: t => t.CARNInstance,
            getPLSDInstance: t => t.PLSDInstance,
            getPLSBInstance: t => t.PLSBInstance,
            getASICInstance: t => t.ASICInstance,
            getUSDCInstance: t => t.USDCInstance,
            getHEXInstance: t => t.HEXInstance,
            getCHAINLINKInstance: t => t.CHAINLINKInstance,
            getStakingInstance: t => t.stakingInstance,
            getWAATCAInstance: t => t.WAATCAInstance,
            getNftRewardsInstance: t => t.nftRewardsInstance,
            getNftHexRewardsInstance: t => t.nftHexRewardsInstance,
            getBurnInstance: t => t.burnInstance,
            getASICMinerInstance: t => t.ASICMinerInstance,
            getHEXStakerInstance: t => t.HEXStakerInstance,
            getCARNFaucetInstance: t => t.CARNFaucetInstance,
            getPLSDFaucetInstance: t => t.PLSDFaucetInstance,
            getPLSBFaucetInstance: t => t.PLSBFaucetInstance,
            getASICFaucetInstance: t => t.ASICFaucetInstance,
            getUSDCFaucetInstance: t => t.USDCFaucetInstance,
            getHEXFaucetInstance: t => t.HEXFaucetInstance,
            getTokenInstance: t => t.tokenInstance,
            getContractInstance: t => t.contractInstance
        };
        var ta = Ze;
        const ea = {
            SET_LOADING({
                commit: t
            }, e) {
                t("SET_LOADING", e)
            },
            SET_WALLETCHAINID({
                commit: t
            }, e) {
                t("SET_WALLETCHAINID", e)
            },
            SET_WEB3({
                commit: t
            }, e) {
                t("SET_WEB3", e)
            },
            SET_USER_ADDRESS({
                commit: t
            }, e) {
                t("SET_USER_ADDRESS", e)
            },
            SET_CARN_INSTANCE({
                commit: t
            }, e) {
                t("SET_CARN_INSTANCE", e)
            },
            SET_PLSD_INSTANCE({
                commit: t
            }, e) {
                t("SET_PLSD_INSTANCE", e)
            },
            SET_PLSB_INSTANCE({
                commit: t
            }, e) {
                t("SET_PLSB_INSTANCE", e)
            },
            SET_ASIC_INSTANCE({
                commit: t
            }, e) {
                t("SET_ASIC_INSTANCE", e)
            },
            SET_USDC_INSTANCE({
                commit: t
            }, e) {
                t("SET_USDC_INSTANCE", e)
            },
            SET_HEX_INSTANCE({
                commit: t
            }, e) {
                t("SET_HEX_INSTANCE", e)
            },
            SET_CHAINLINK_INSTANCE({
                commit: t
            }, e) {
                t("SET_CHAINLINK_INSTANCE", e)
            },
            SET_STAKING_INSTANCE({
                commit: t
            }, e) {
                t("SET_STAKING_INSTANCE", e)
            },
            SET_WAATCA_INSTANCE({
                commit: t
            }, e) {
                t("SET_WAATCA_INSTANCE", e)
            },
            SET_NFT_REWARDS_INSTANCE({
                commit: t
            }, e) {
                t("SET_NFT_REWARDS_INSTANCE", e)
            },
            SET_NFT_HEX_REWARDS_INSTANCE({
                commit: t
            }, e) {
                t("SET_NFT_HEX_REWARDS_INSTANCE", e)
            },
            SET_BURN_INSTANCE({
                commit: t
            }, e) {
                t("SET_BURN_INSTANCE", e)
            },
            SET_ASIC_MINER_INSTANCE({
                commit: t
            }, e) {
                t("SET_ASIC_MINER_INSTANCE", e)
            },
            SET_HEX_STAKER_INSTANCE({
                commit: t
            }, e) {
                t("SET_HEX_STAKER_INSTANCE", e)
            },
            SET_CARN_FAUCET_INSTANCE({
                commit: t
            }, e) {
                t("SET_CARN_FAUCET_INSTANCE", e)
            },
            SET_PLSD_FAUCET_INSTANCE({
                commit: t
            }, e) {
                t("SET_PLSD_FAUCET_INSTANCE", e)
            },
            SET_PLSB_FAUCET_INSTANCE({
                commit: t
            }, e) {
                t("SET_PLSB_FAUCET_INSTANCE", e)
            },
            SET_ASIC_FAUCET_INSTANCE({
                commit: t
            }, e) {
                t("SET_ASIC_FAUCET_INSTANCE", e)
            },
            SET_USDC_FAUCET_INSTANCE({
                commit: t
            }, e) {
                t("SET_USDC_FAUCET_INSTANCE", e)
            },
            SET_HEX_FAUCET_INSTANCE({
                commit: t
            }, e) {
                t("SET_HEX_FAUCET_INSTANCE", e)
            },
            SET_TOKEN_INSTANCE({
                commit: t
            }, e) {
                t("SET_TOKEN_INSTANCE", e)
            },
            SET_CONTRACT_INSTANCE({
                commit: t
            }, e) {
                t("SET_CONTRACT_INSTANCE", e)
            }
        };
        var aa = ea;
        const na = {
            namespaced: !0,
            state: ze,
            mutations: Qe,
            actions: aa,
            getters: ta
        };
        var sa = na;
        n["a"].use(s["a"]);
        var ia = new s["a"].Store({
                modules: {
                    wallet: sa
                }
            }),
            oa = a("a65d"),
            ra = a.n(oa),
            la = a("f309");
        n["a"].use(la["a"]);
        var da = new la["a"]({}),
            ca = a("451a");
        const ua = ca;
        var pa = ua,
            ya = {
                data() {
                    return {
                        CHAIN_ID: pa.CHAIN_ID,
                        NETWORK: pa.NETWORK,
                        INFURA_ID: pa.INFURA_ID,
                        ALCHEMY_API_KEY: pa.ALCHEMY_API_KEY,
                        INFURA_SECRET_KEY: pa.INFURA_SECRET_KEY,
                        OPENSEA_URL_BASE: pa.OPENSEA_URL_BASE,
                        ETHERSCAN_URL_BASE: pa.ETHERSCAN_URL_BASE,
                        ALCHEMY_URL_BASE_NFT: pa.ALCHEMY_URL_BASE_NFT,
                        ALCHEMY_URL_BASE: pa.ALCHEMY_URL_BASE,
                        CARN_ADDRESS: pa.CARN_ADDRESS,
                        PLSD_ADDRESS: pa.PLSD_ADDRESS,
                        PLSB_ADDRESS: pa.PLSB_ADDRESS,
                        ASIC_ADDRESS: pa.ASIC_ADDRESS,
                        USDC_ADDRESS: pa.USDC_ADDRESS,
                        HEX_ADDRESS: pa.HEX_ADDRESS,
                        CHAINLINK_ADDRESS: pa.CHAINLINK_ADDRESS,
                        STAKING_ADDRESS: pa.STAKING_ADDRESS,
                        WAATCA_ADDRESS: pa.WAATCA_ADDRESS,
                        NFT_REWARDS_ADDRESS: pa.NFT_REWARDS_ADDRESS,
                        NFT_HEX_REWARDS_ADDRESS: pa.NFT_HEX_REWARDS_ADDRESS,
                        BURN_ADDRESS: pa.BURN_ADDRESS,
                        ASIC_MINER_ADDRESS: pa.ASIC_MINER_ADDRESS,
                        HEX_STAKER_ADDRESS: pa.HEX_STAKER_ADDRESS,
                        PULSE_BITCOIN_LOCK_ADDRESS: pa.PULSE_BITCOIN_LOCK_ADDRESS,
                        CARN_FAUCET_ADDRESS: pa.CARN_FAUCET_ADDRESS,
                        PLSD_FAUCET_ADDRESS: pa.PLSD_FAUCET_ADDRESS,
                        PLSB_FAUCET_ADDRESS: pa.PLSB_FAUCET_ADDRESS,
                        ASIC_FAUCET_ADDRESS: pa.ASIC_FAUCET_ADDRESS,
                        USDC_FAUCET_ADDRESS: pa.USDC_FAUCET_ADDRESS,
                        HEX_FAUCET_ADDRESS: pa.HEX_FAUCET_ADDRESS,
                        PLSB_HOUR_LOTTERY_ADDRESS: pa.PLSB_HOUR_LOTTERY_ADDRESS,
                        ASIC_HOUR_LOTTERY_ADDRESS: pa.ASIC_HOUR_LOTTERY_ADDRESS,
                        PLSD_HOUR_LOTTERY_ADDRESS: pa.PLSD_HOUR_LOTTERY_ADDRESS,
                        CARN_HOUR_LOTTERY_ADDRESS: pa.CARN_HOUR_LOTTERY_ADDRESS,
                        HEX_HOUR_LOTTERY_ADDRESS: pa.HEX_HOUR_LOTTERY_ADDRESS,
                        USDC_HOUR_LOTTERY_ADDRESS: pa.USDC_HOUR_LOTTERY_ADDRESS,
                        PLSB_WEEK_LOTTERY_ADDRESS: pa.PLSB_WEEK_LOTTERY_ADDRESS,
                        ASIC_WEEK_LOTTERY_ADDRESS: pa.ASIC_WEEK_LOTTERY_ADDRESS,
                        PLSD_WEEK_LOTTERY_ADDRESS: pa.PLSD_WEEK_LOTTERY_ADDRESS,
                        CARN_WEEK_LOTTERY_ADDRESS: pa.CARN_WEEK_LOTTERY_ADDRESS,
                        HEX_WEEK_LOTTERY_ADDRESS: pa.HEX_WEEK_LOTTERY_ADDRESS,
                        USDC_WEEK_LOTTERY_ADDRESS: pa.USDC_WEEK_LOTTERY_ADDRESS,
                        PLSB_MONTH_LOTTERY_ADDRESS: pa.PLSB_MONTH_LOTTERY_ADDRESS,
                        ASIC_MONTH_LOTTERY_ADDRESS: pa.ASIC_MONTH_LOTTERY_ADDRESS,
                        PLSD_MONTH_LOTTERY_ADDRESS: pa.PLSD_MONTH_LOTTERY_ADDRESS,
                        CARN_MONTH_LOTTERY_ADDRESS: pa.CARN_MONTH_LOTTERY_ADDRESS,
                        HEX_MONTH_LOTTERY_ADDRESS: pa.HEX_MONTH_LOTTERY_ADDRESS,
                        USDC_MONTH_LOTTERY_ADDRESS: pa.USDC_MONTH_LOTTERY_ADDRESS,
                        TOKEN_SYMBOL: pa.TOKEN_SYMBOL,
                        TOKEN_ADDRESS: pa.TOKEN_ADDRESS,
                        CONTRACT_ADDRESS: pa.CONTRACT_ADDRESS,
                        UNIT_CONVERSION: pa.UNIT_CONVERSION,
                        TOKEN_DECIMAL_CONVERSION: pa.TOKEN_DECIMAL_CONVERSION,
                        TIP_ADDRESS: pa.TIP_ADDRESS,
                        TOKEN_ABI: pa.TOKEN_ABI,
                        CONTRACT_ABI: pa.CONTRACT_ABI,
                        ...Object(s["b"])("wallet", ["SET_LOADING", "SET_WEB3", "SET_WALLETCHAINID", "SET_USER_ADDRESS", "SET_CARN_INSTANCE", "SET_PLSD_INSTANCE", "SET_PLSB_INSTANCE", "SET_ASIC_INSTANCE", "SET_USDC_INSTANCE", "SET_HEX_INSTANCE", "SET_CHAINLINK_INSTANCE", "SET_STAKING_INSTANCE", "SET_WAATCA_INSTANCE", "SET_NFT_REWARDS_INSTANCE", "SET_NFT_HEX_REWARDS_INSTANCE", "SET_BURN_INSTANCE", "SET_ASIC_MINER_INSTANCE", "SET_HEX_STAKER_INSTANCE", "SET_CARN_FAUCET_INSTANCE", "SET_PLSD_FAUCET_INSTANCE", "SET_PLSB_FAUCET_INSTANCE", "SET_ASIC_FAUCET_INSTANCE", "SET_USDC_FAUCET_INSTANCE", "SET_HEX_FAUCET_INSTANCE", "SET_TOKEN_INSTANCE", "SET_CONTRACT_INSTANCE"])
                    }
                },
                methods: {
                    async addToken(t) {
                        let e = {};
                        switch (t) {
                            case "CARN":
                                e = {
                                    address: this.CARN_ADDRESS,
                                    symbol: "CARN",
                                    decimals: "12"
                                };
                                break;
                            case "PLSD":
                                e = {
                                    address: this.PLSD_ADDRESS,
                                    symbol: "PLSD",
                                    decimals: "12"
                                };
                                break;
                            case "PLSB":
                                e = {
                                    address: this.PLSB_ADDRESS,
                                    symbol: "PLSB",
                                    decimals: "12"
                                };
                                break;
                            case "ASIC":
                                e = {
                                    address: this.ASIC_ADDRESS,
                                    symbol: "ASIC",
                                    decimals: "12"
                                };
                                break;
                            case "USDC":
                                e = {
                                    address: this.USDC_ADDRESS,
                                    symbol: "USDC",
                                    decimals: "6"
                                };
                                break;
                            case "HEX":
                                e = {
                                    address: this.HEX_ADDRESS,
                                    symbol: "HEX",
                                    decimals: "8"
                                };
                                break
                        }
                        await window.ethereum.request({
                            method: "wallet_watchAsset",
                            params: {
                                type: "ERC20",
                                options: {
                                    address: e.address,
                                    symbol: e.symbol,
                                    decimals: e.decimals
                                }
                            }
                        })
                    },
                    secondstoDays(t) {
                        if (t > 0) {
                            var e = parseInt(t, 10),
                                a = Math.floor(e / 86400) + 1;
                            return a > 1 ? a + " Days" : a + " Day"
                        }
                        return "Few Seconds"
                    },
                    addrTruncation(t) {
                        return t.slice(0, 6) + ". . . . ." + t.slice(t.length - 6, t.length)
                    },
                    sixFormat(t, e = 0) {
                        return this.getWeb3 && t ? parseFloat(Number(this.getWeb3.utils.fromWei(t.toString(), "Mwei")).toFixed(e)).toString() : 0
                    },
                    eightFormat(t, e = 0) {
                        return this.getWeb3 && t ? parseFloat(Number(t / 1e8).toFixed(e)).toString() : 0
                    },
                    twelveFormat(t, e = 0) {
                        return this.getWeb3 && t ? parseFloat(Number(this.getWeb3.utils.fromWei(t.toString(), "szabo")).toFixed(e)).toString() : 0
                    },
                    eighteenFormat(t, e = 0) {
                        return this.getWeb3 && t ? parseFloat(Number(this.getWeb3.utils.fromWei(t.toString(), "ether")).toFixed(e)).toString() : 0
                    },
                    generalFormat(t, e, a = 0) {
                        return this.getWeb3 && t ? "six" === e ? Number(this.getWeb3.utils.fromWei(t.toString(), "Mwei")).toFixed(a) : "eight" === e ? Number(t / 1e8).toFixed(a) : Number(this.getWeb3.utils.fromWei(t.toString(), "szabo")).toFixed(a) : 0
                    },
                    sixToWei(t) {
                        return this.getWeb3 && t ? this.getWeb3.utils.toWei(t.toString(), "Mwei") : 0
                    },
                    eightToWei(t) {
                        return this.getWeb3 && t ? 1e8 * t : 0
                    },
                    twelveToWei(t) {
                        return this.getWeb3 && t ? this.getWeb3.utils.toWei(t.toString(), "szabo") : 0
                    },
                    isNumber: function (t) {
                        t = t || window.event;
                        var e = t.which ? t.which : t.keyCode;
                        if (!(e > 31 && (e < 48 || e > 57))) return !0;
                        t.preventDefault()
                    },
                    HHMMSS(t) {
                        var e = 86400,
                            a = Math.floor(t / e);
                        return a + " Days"
                    },
                    humanDate(t) {
                        return new Date(1e3 * t).toLocaleString("en-US")
                    },
                    async fetchNFTs() {
                        let t = `${this.ALCHEMY_URL_BASE}${this.ALCHEMY_API_KEY}/getNFTs/`,
                            e = `${t}?owner=${this.getUserAddress}&contractAddresses%5B%5D=${this.CONTRACT_ADDRESS}`,
                            a = await fetch(e).then(t => t.json());
                        return a && a.ownedNfts ? a.ownedNfts : []
                    },
                    formator(t, e = 2) {
                        return this.getWeb3 && t ? Number(this.getWeb3.utils.fromWei(t.toString(), this.UNIT_CONVERSION)).toFixed(e) : 0
                    },
                    isPlural: function (t) {
                        return 1 == t ? "day" : "days"
                    }
                },
                computed: {
                    ...Object(s["c"])("wallet", ["isLoading", "getWeb3", "walletChainID", "getUserAddress", "getCARNInstance", "getPLSDInstance", "getPLSBInstance", "getASICInstance", "getUSDCInstance", "getHEXInstance", "getCHAINLINKInstance", "getStakingInstance", "getWAATCAInstance", "getNftRewardsInstance", "getNftHexRewardsInstance", "getBurnInstance", "getASICMinerInstance", "getHEXStakerInstance", "getCARNFaucetInstance", "getPLSDFaucetInstance", "getPLSBFaucetInstance", "getASICFaucetInstance", "getUSDCFaucetInstance", "getHEXFaucetInstance", "getTokenInstance", "getContractInstance"])
                }
            },
            ma = a("118d"),
            ha = a.n(ma),
            Aa = a("eb2e"),
            Ta = a.n(Aa);
        n["a"].use(s["a"]), n["a"].mixin(ya), n["a"].component("VueLoadImage", ha.a), n["a"].component("JwPagination", Ta.a), n["a"].use(ra.a, {
            theme: "outline",
            duration: 3e3,
            position: "bottom-right"
        }), n["a"].config.productionTip = !1, new n["a"]({
            store: ia,
            router: je,
            vuetify: da,
            render: t => t(E)
        }).$mount("#app")
    },
    5795: function (t, e, a) {
        t.exports = a.p + "img/11.10892d96.png"
    },
    "588b": function (t, e, a) {
        t.exports = a.p + "img/20.656e1103.png"
    },
    "59fd": function (t, e, a) {
        t.exports = a.p + "img/lit_daily.4e68eb50.png"
    },
    "5a33": function (t, e, a) {
        t.exports = a.p + "img/lit_hex_staker.7c8910e7.png"
    },
    "5d8c": function (t, e, a) {
        t.exports = a.p + "img/10.64d8443e.png"
    },
    "60ea": function (t, e, a) {
        t.exports = a.p + "img/28.2cf91167.png"
    },
    "63b1": function (t, e, a) {
        t.exports = a.p + "img/lit_waatca.7d697111.png"
    },
    "67cd": function (t, e, a) {},
    "67f2": function (t, e, a) {
        t.exports = a.p + "img/27.dab0d36d.png"
    },
    "6a7a": function (t, e, a) {
        t.exports = a.p + "img/carn_logo.9557de72.png"
    },
    "71e8": function (t, e, a) {},
    7395: function (t, e, a) {
        t.exports = a.p + "img/22.066cee13.png"
    },
    "76e7": function (t, e, a) {
        t.exports = a.p + "img/asiclogo.35e52aaa.png"
    },
    7747: function (t, e, a) {},
    "7a65": function (t, e, a) {
        "use strict";
        a("3ac5")
    },
    "7b13": function (t, e, a) {
        t.exports = a.p + "img/info.9d7554ba.webp"
    },
    8302: function (t, e, a) {},
    8439: function (t, e, a) {
        t.exports = a.p + "img/plsblogo.43ae61b0.png"
    },
    8641: function (t, e, a) {},
    "875b": function (t, e, a) {
        t.exports = a.p + "img/money.6f44f568.png"
    },
    "8f66": function (t, e, a) {
        t.exports = a.p + "img/usdc.c76b33ca.png"
    },
    9142: function (t, e, a) {
        var n = {
            "./1.png": "0ca1",
            "./10.png": "5d8c",
            "./2.png": "b9af",
            "./3.png": "c2e4",
            "./4.png": "1105",
            "./5.png": "9310",
            "./6.png": "2175",
            "./7.png": "34bf",
            "./8.png": "f8bf",
            "./9.png": "15b3",
            "./LogoTransparent.png": "ccab",
            "./ThePulseDogecoinStakingCarnivalTicketLogo.png": "e765",
            "./asiclogo.png": "76e7",
            "./bg.png": "d68e",
            "./calendar.png": "2cc6",
            "./carn_logo.png": "6a7a",
            "./diamond.png": "433f",
            "./hex.png": "c06d",
            "./lit_asic_miner.png": "975b",
            "./lit_booth.png": "06a6",
            "./lit_buy_and_burn.png": "2de0",
            "./lit_carn.png": "3d11",
            "./lit_carnuniswap.png": "a455",
            "./lit_daily.png": "59fd",
            "./lit_disclaimer.png": "e950",
            "./lit_faq.png": "a58a",
            "./lit_hex_rewards.png": "18ba",
            "./lit_hex_staker.png": "5a33",
            "./lit_lottery_general.png": "2499",
            "./lit_monthly.png": "16c6",
            "./lit_pulsebitcoinlock.png": "aa2d",
            "./lit_stake_plsd.png": "4f75",
            "./lit_telegram.png": "f144",
            "./lit_twitter.png": "103d",
            "./lit_waatca.png": "63b1",
            "./lit_weekly.png": "f3c3",
            "./lit_wp.png": "1da1",
            "./logo.png": "cf05",
            "./money.png": "875b",
            "./new_logo_lit.png": "bcad",
            "./percent-modified.png": "da52",
            "./plsblogo-modified.png": "d52b",
            "./plsblogo.png": "8439",
            "./plsblogo2.png": "c49a",
            "./plsdlogov2-modified.png": "d5e2",
            "./remaining_carn.png": "ca18",
            "./telegram.png": "c2ea",
            "./twitter.png": "e4d7",
            "./usdc.png": "8f66",
            "./waatca_nft_logo.png": "34a2"
        };

        function s(t) {
            var e = i(t);
            return a(e)
        }

        function i(t) {
            if (!a.o(n, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return n[t]
        }
        s.keys = function () {
            return Object.keys(n)
        }, s.resolve = i, t.exports = s, s.id = "9142"
    },
    9310: function (t, e, a) {
        t.exports = a.p + "img/5.d9f34ebf.png"
    },
    "975b": function (t, e, a) {
        t.exports = a.p + "img/lit_asic_miner.7c1402c1.png"
    },
    "9b29": function (t, e, a) {
        "use strict";
        a("553a")
    },
    "9b45": function (t, e, a) {
        "use strict";
        a("196a")
    },
    "9de2": function (t, e, a) {},
    "9ef1": function (t, e, a) {
        "use strict";
        a("8641")
    },
    a455: function (t, e, a) {
        t.exports = a.p + "img/lit_carnuniswap.2f9d204f.png"
    },
    a58a: function (t, e, a) {
        t.exports = a.p + "img/lit_faq.f00b48b3.png"
    },
    a619: function (t, e, a) {
        "use strict";
        a("71e8")
    },
    aa2d: function (t, e, a) {
        t.exports = a.p + "img/lit_pulsebitcoinlock.2e619c40.png"
    },
    b5e3: function (t, e, a) {
        t.exports = a.p + "img/25.e43fc9bd.png"
    },
    b617: function (t, e, a) {
        t.exports = a.p + "img/26.7a7abb71.png"
    },
    b9af: function (t, e, a) {
        t.exports = a.p + "img/2.73049895.png"
    },
    bcad: function (t, e, a) {
        t.exports = a.p + "img/new_logo_lit.68deb398.png"
    },
    c06d: function (t, e, a) {
        t.exports = a.p + "img/hex.5f34a2c9.png"
    },
    c2e4: function (t, e, a) {
        t.exports = a.p + "img/3.63756f15.png"
    },
    c2ea: function (t, e, a) {
        t.exports = a.p + "img/telegram.4f61bed2.png"
    },
    c49a: function (t, e, a) {
        t.exports = a.p + "img/plsblogo2.43ae61b0.png"
    },
    ca18: function (t, e, a) {
        t.exports = a.p + "img/remaining_carn.7245c42d.png"
    },
    cc07: function (t, e, a) {
        "use strict";
        a("4d25")
    },
    ccab: function (t, e, a) {
        t.exports = a.p + "img/LogoTransparent.63d0f903.png"
    },
    cf05: function (t, e, a) {
        t.exports = a.p + "img/logo.afcb4a0f.png"
    },
    d52b: function (t, e, a) {
        t.exports = a.p + "img/plsblogo-modified.b3350579.png"
    },
    d5e2: function (t, e, a) {
        t.exports = a.p + "img/plsdlogov2-modified.7d13acc1.png"
    },
    d68e: function (t, e, a) {
        t.exports = a.p + "img/bg.ea7f5a53.png"
    },
    d80b: function (t, e, a) {
        t.exports = a.p + "img/16.b890ffa4.png"
    },
    d8fb: function (t, e, a) {
        t.exports = a.p + "img/7.b018f1d0.png"
    },
    da52: function (t, e, a) {
        t.exports = a.p + "img/percent-modified.81b42bdb.png"
    },
    defa: function (t, e, a) {},
    e4d7: function (t, e, a) {
        t.exports = a.p + "img/twitter.1fcdfa46.png"
    },
    e593: function (t, e, a) {
        "use strict";
        a("67cd")
    },
    e765: function (t, e, a) {
        t.exports = a.p + "img/ThePulseDogecoinStakingCarnivalTicketLogo.90dc9820.png"
    },
    e7f2: function (t, e, a) {
        "use strict";
        a("8302")
    },
    e950: function (t, e, a) {
        t.exports = a.p + "img/lit_disclaimer.bb4208fe.png"
    },
    eb37: function (t, e, a) {
        t.exports = a.p + "img/3.49d8f3b4.png"
    },
    ec1c: function (t, e, a) {
        "use strict";
        a("7747")
    },
    f144: function (t, e, a) {
        t.exports = a.p + "img/lit_telegram.a4fa1659.png"
    },
    f3c3: function (t, e, a) {
        t.exports = a.p + "img/lit_weekly.80f64a36.png"
    },
    f65b: function (t, e, a) {
        t.exports = a.p + "img/ThePulseDogecoinStakingCarnivalTicketLogo2.bd7de12d.jpg"
    },
    f683: function (t, e, a) {
        "use strict";
        a("2b96")
    },
    f8bf: function (t, e, a) {
        t.exports = a.p + "img/8.a36db736.png"
    },
    fcfb: function (t, e, a) {
        t.exports = a.p + "img/13.1d4107ce.png"
    }
});
//# sourceMappingURL=app.7b71d175.js.map