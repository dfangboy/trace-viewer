// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

/**
 * @fileoverview Provides the Process class.
 */
base.require('tracing.trace_model.process_base');
base.exportTo('tracing.trace_model', function() {
  /**
   * The Process represents a single userland process in the
   * trace.
   * @constructor
   */
  function Process(model, pid) {
    if (model === undefined)
      throw new Error('model must be provided');
    if (pid === undefined)
      throw new Error('pid must be provided');
    tracing.trace_model.ProcessBase.call(this, model);
    this.pid = pid;
    this.name = undefined;
    this.labels = [];
  };

  /**
   * Comparison between processes that orders by pid.
   */
  Process.compare = function(x, y) {
    var tmp = tracing.trace_model.ProcessBase.compare(x, y);
    if (tmp)
      return tmp;

    tmp = base.comparePossiblyUndefinedValues(
        x.name, y.name,
        function(x, y) { return x.localeCompare(y); });
    if (tmp)
      return tmp;

    tmp = base.compareArrays(x.labels, y.labels,
        function(x, y) { return x.localeCompare(y); });
    if (tmp)
      return tmp;

    return x.pid - y.pid;
  };

  Process.prototype = {
    __proto__: tracing.trace_model.ProcessBase.prototype,

    compareTo: function(that) {
      return Process.compare(this, that);
    },

    get userFriendlyName() {
      var res;
      if (this.name)
        res = this.name;
      else
        res = 'Process ' + this.pid;
      if (this.labels.length)
        res += ': ' + this.labels.join(', ');
      return res;
    },

    get userFriendlyDetails() {
      if (this.name)
        return this.name + ' (pid ' + this.pid + ')';
      return 'pid: ' + this.pid;
    }
  };

  return {
    Process: Process
  };
});
