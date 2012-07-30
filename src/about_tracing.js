// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
* WARNING: This file is generated by generate_about_tracing_contents.py
*
*        Do not edit directly.
*/

window.FLATTENED = {};
window.FLATTENED['base'] = true;
window.FLATTENED['event_target'] = true;
window.FLATTENED['ui'] = true;
window.FLATTENED['measuring_stick'] = true;
window.FLATTENED['sorted_array_utils'] = true;
window.FLATTENED['fast_rect_renderer'] = true;
window.FLATTENED['timeline_slice'] = true;
window.FLATTENED['timeline_color_scheme'] = true;
window.FLATTENED['timeline_slice_group'] = true;
window.FLATTENED['timeline_async_slice_group'] = true;
window.FLATTENED['timeline_thread'] = true;
window.FLATTENED['timeline_counter'] = true;
window.FLATTENED['timeline_process'] = true;
window.FLATTENED['timeline_cpu'] = true;
window.FLATTENED['timeline_model'] = true;
window.FLATTENED['timeline_track'] = true;
window.FLATTENED['timeline'] = true;
window.FLATTENED['timeline_analysis'] = true;
window.FLATTENED['overlay'] = true;
window.FLATTENED['trace_event_importer'] = true;
window.FLATTENED['linux_perf_parser'] = true;
window.FLATTENED['linux_perf_cpufreq_parser'] = true;
window.FLATTENED['linux_perf_drm_parser'] = true;
window.FLATTENED['linux_perf_exynos_parser'] = true;
window.FLATTENED['linux_perf_i915_parser'] = true;
window.FLATTENED['linux_perf_mali_parser'] = true;
window.FLATTENED['linux_perf_power_parser'] = true;
window.FLATTENED['linux_perf_sched_parser'] = true;
window.FLATTENED['linux_perf_workqueue_parser'] = true;
window.FLATTENED['linux_perf_importer'] = true;
window.FLATTENED['timeline_view'] = true;
window.FLATTENED['tracing_controller'] = true;
window.FLATTENED['profiling_view'] = true;
<include src="base.js">
<include src="event_target.js">
<include src="ui.js">
<include src="measuring_stick.js">
<include src="sorted_array_utils.js">
<include src="fast_rect_renderer.js">
<include src="timeline_slice.js">
<include src="timeline_color_scheme.js">
<include src="timeline_slice_group.js">
<include src="timeline_async_slice_group.js">
<include src="timeline_thread.js">
<include src="timeline_counter.js">
<include src="timeline_process.js">
<include src="timeline_cpu.js">
<include src="timeline_model.js">
<include src="timeline_track.js">
<include src="timeline.js">
<include src="timeline_analysis.js">
<include src="overlay.js">
<include src="trace_event_importer.js">
<include src="linux_perf_parser.js">
<include src="linux_perf_cpufreq_parser.js">
<include src="linux_perf_drm_parser.js">
<include src="linux_perf_exynos_parser.js">
<include src="linux_perf_i915_parser.js">
<include src="linux_perf_mali_parser.js">
<include src="linux_perf_power_parser.js">
<include src="linux_perf_sched_parser.js">
<include src="linux_perf_workqueue_parser.js">
<include src="linux_perf_importer.js">
<include src="timeline_view.js">
<include src="tracing_controller.js">
<include src="profiling_view.js">


var tracingController;
var profilingView;  // Made global for debugging purposes only.

document.addEventListener('DOMContentLoaded', function() {
  tracingController = new tracing.TracingController(
      chrome.send.bind(chrome));

  profilingView = document.body.querySelector('#profiling-view');
  base.ui.decorate(profilingView, tracing.ProfilingView);
  profilingView.tracingController = tracingController;
});
