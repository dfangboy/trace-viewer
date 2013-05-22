// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

/**
 * @fileoverview 2D Rectangle math.
 */
base.require('base.gl_matrix');

base.exportTo('base', function() {

  /**
   * Tracks a 2D bounding box.
   * @constructor
   */
  function Rect() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  Rect.FromXYWH = function(x, y, w, h) {
    var rect = new Rect();
    rect.x = x;
    rect.y = y;
    rect.width = w;
    rect.height = h;
    return rect;
  }
  Rect.FromArray = function(ary) {
    if (ary.length != 4)
      throw new Error('ary.length must be 4');
    var rect = new Rect();
    rect.x = ary[0];
    rect.y = ary[1];
    rect.width = ary[2];
    rect.height = ary[3];
    return rect;
  }

  Rect.prototype = {
    __proto__: Object.prototype,

    get left() {
      return this.x;
    },

    get top() {
      return this.y;
    },

    get right() {
      return this.x + this.width;
    },

    get bottom() {
      return this.y + this.height;
    },

    toString: function() {
      return 'Rect(' + this.x + ', ' + this.y + ', ' +
        this.width + ', ' + this.height + ')';
    },

    enlarge: function(pad) {
      var rect = new Rect();
      this.enlargeFast(rect, pad);
      return rect;
    },

    enlargeFast: function(out, pad) {
      out.x = this.x - pad;
      out.y = this.y - pad;
      out.width = this.width + 2 * pad;
      out.height = this.height + 2 * pad;
      return out;
    },

    scale: function(s) {
      var rect = new Rect();
      this.scaleFast(rect, s);
      return rect;
    },

    scaleFast: function(out, s) {
      out.x = this.x * s;
      out.y = this.y * s;
      out.width = this.width * s;
      out.height = this.height * s;
      return out;
    },

    translate: function(v) {
      var rect = new Rect();
      this.translateFast(rect, v);
      return rect;
    },

    translateFast: function(out, v) {
      out.x = this.x + v[0];
      out.y = this.x + v[1];
      out.width = this.width;
      out.height = this.height;
      return out;
    },

    asUVRectInside: function(containingRect) {
      var rect = new Rect();
      rect.x = (this.x - containingRect.x) / containingRect.width;
      rect.y = (this.y - containingRect.y) / containingRect.height;
      rect.width = this.width / containingRect.width;
      rect.height = this.height / containingRect.height;
      return rect;
    }
  };

  return {
    Rect: Rect
  };

});
