// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * WARNING: This file is generated by generate_deps_js_contents.py
 *
 *        Do not edit directly.
 */
base.addModuleDependency(
    'ui.overlay',
    'base.event_target');
base.addModuleDependency(
    'ui.overlay',
    'ui');
base.addModuleStylesheet(
    'ui.overlay',
    'ui.overlay');
base.addModuleDependency(
    'about_tracing.tracing_controller',
    'base.event_target');
base.addModuleDependency(
    'about_tracing.tracing_controller',
    'ui.overlay');
base.addModuleStylesheet(
    'about_tracing.tracing_controller',
    'about_tracing.tracing_controller');
base.addModuleDependency(
    'tracing.analysis.analyze_counters',
    'tracing.analysis.util');
base.addModuleDependency(
    'tracing.analysis.analyze_counters',
    'ui');
base.addModuleDependency(
    'tracing.analysis.analyze_slices',
    'tracing.analysis.util');
base.addModuleDependency(
    'tracing.analysis.analyze_slices',
    'ui');
base.addModuleStylesheet(
    'tracing.analysis.analyze_slices',
    'tracing.analysis.analyze_slices');
base.addModuleDependency(
    'tracing.analysis.analyze_selection',
    'tracing.analysis.analyze_counters');
base.addModuleDependency(
    'tracing.analysis.analyze_selection',
    'tracing.analysis.analyze_slices');
base.addModuleDependency(
    'tracing.analysis.analyze_selection',
    'tracing.analysis.util');
base.addModuleDependency(
    'tracing.analysis.analyze_selection',
    'ui');
base.addModuleDependency(
    'tracing.selection',
    'base.range');
base.addModuleDependency(
    'tracing.selection',
    'base.event_target');
base.addModuleDependency(
    'tracing.analysis.analysis_link',
    'tracing.selection');
base.addModuleDependency(
    'tracing.analysis.analysis_link',
    'tracing.analysis.util');
base.addModuleDependency(
    'tracing.analysis.analysis_link',
    'ui');
base.addModuleStylesheet(
    'tracing.analysis.analysis_link',
    'tracing.analysis.analysis_link');
base.addModuleDependency(
    'tracing.analysis.analysis_results',
    'tracing.analysis.util');
base.addModuleDependency(
    'tracing.analysis.analysis_results',
    'tracing.analysis.analysis_link');
base.addModuleDependency(
    'tracing.analysis.analysis_results',
    'ui');
base.addModuleStylesheet(
    'tracing.analysis.analysis_results',
    'tracing.analysis.analysis_results');
base.addModuleDependency(
    'tracing.analysis.object_instance_view',
    'ui');
base.addModuleDependency(
    'tracing.analysis.default_object_view',
    'tracing.analysis.analysis_link');
base.addModuleDependency(
    'tracing.analysis.default_object_view',
    'tracing.analysis.object_instance_view');
base.addModuleDependency(
    'tracing.analysis.default_object_view',
    'tracing.analysis.object_snapshot_view');
base.addModuleDependency(
    'tracing.analysis.default_object_view',
    'tracing.analysis.util');
base.addModuleStylesheet(
    'tracing.analysis.default_object_view',
    'tracing.analysis.default_object_view');
base.addModuleDependency(
    'tracing.analysis.analysis_view',
    'tracing.analysis.analyze_selection');
base.addModuleDependency(
    'tracing.analysis.analysis_view',
    'tracing.analysis.analysis_results');
base.addModuleDependency(
    'tracing.analysis.analysis_view',
    'tracing.analysis.object_instance_view');
base.addModuleDependency(
    'tracing.analysis.analysis_view',
    'tracing.analysis.object_snapshot_view');
base.addModuleDependency(
    'tracing.analysis.analysis_view',
    'tracing.analysis.default_object_view');
base.addModuleDependency(
    'tracing.analysis.analysis_view',
    'tracing.analysis.util');
base.addModuleDependency(
    'tracing.analysis.analysis_view',
    'ui');
base.addModuleStylesheet(
    'tracing.analysis.analysis_view',
    'tracing.analysis.analysis_view');
base.addModuleDependency(
    'tracing.category_filter_dialog',
    'tracing.filter');
base.addModuleDependency(
    'tracing.category_filter_dialog',
    'ui.overlay');
base.addModuleDependency(
    'tracing.timeline_viewport',
    'base.event_target');
base.addModuleDependency(
    'tracing.tracks.track',
    'ui');
base.addModuleStylesheet(
    'tracing.tracks.track',
    'tracing.tracks.track');
base.addModuleDependency(
    'tracing.tracks.container_track',
    'tracing.tracks.track');
base.addModuleDependency(
    'tracing.tracks.container_track',
    'tracing.filter');
base.addModuleDependency(
    'tracing.tracks.container_track',
    'ui');
base.addModuleDependency(
    'tracing.tracks.canvas_based_track',
    'tracing.tracks.track');
base.addModuleDependency(
    'tracing.tracks.canvas_based_track',
    'tracing.fast_rect_renderer');
base.addModuleDependency(
    'tracing.tracks.canvas_based_track',
    'tracing.color_scheme');
base.addModuleDependency(
    'tracing.tracks.canvas_based_track',
    'ui');
base.addModuleStylesheet(
    'tracing.tracks.canvas_based_track',
    'tracing.tracks.canvas_based_track');
base.addModuleDependency(
    'tracing.tracks.slice_track',
    'base.sorted_array_utils');
base.addModuleDependency(
    'tracing.tracks.slice_track',
    'tracing.tracks.canvas_based_track');
base.addModuleDependency(
    'tracing.tracks.slice_track',
    'tracing.fast_rect_renderer');
base.addModuleDependency(
    'tracing.tracks.slice_track',
    'tracing.color_scheme');
base.addModuleDependency(
    'tracing.tracks.slice_track',
    'ui');
base.addModuleStylesheet(
    'tracing.tracks.slice_track',
    'tracing.tracks.slice_track');
base.addModuleDependency(
    'tracing.model.counter',
    'base.range');
base.addModuleDependency(
    'tracing.model.counter',
    'tracing.guid');
base.addModuleDependency(
    'tracing.model.object_instance',
    'base.range');
base.addModuleDependency(
    'tracing.model.object_instance',
    'base.sorted_array_utils');
base.addModuleDependency(
    'tracing.model.time_to_object_instance_map',
    'base.range');
base.addModuleDependency(
    'tracing.model.time_to_object_instance_map',
    'base.sorted_array_utils');
base.addModuleDependency(
    'tracing.model.object_collection',
    'base.range');
base.addModuleDependency(
    'tracing.model.object_collection',
    'base.sorted_array_utils');
base.addModuleDependency(
    'tracing.model.object_collection',
    'tracing.model.object_instance');
base.addModuleDependency(
    'tracing.model.object_collection',
    'tracing.model.time_to_object_instance_map');
base.addModuleDependency(
    'tracing.model.slice_group',
    'base.range');
base.addModuleDependency(
    'tracing.model.slice_group',
    'tracing.model.slice');
base.addModuleDependency(
    'tracing.model.slice_group',
    'tracing.color_scheme');
base.addModuleDependency(
    'tracing.model.slice_group',
    'tracing.filter');
base.addModuleDependency(
    'tracing.model.async_slice_group',
    'base.range');
base.addModuleDependency(
    'tracing.model.async_slice_group',
    'tracing.model.slice');
base.addModuleDependency(
    'tracing.model.thread',
    'base.range');
base.addModuleDependency(
    'tracing.model.thread',
    'tracing.guid');
base.addModuleDependency(
    'tracing.model.thread',
    'tracing.model.slice');
base.addModuleDependency(
    'tracing.model.thread',
    'tracing.model.slice_group');
base.addModuleDependency(
    'tracing.model.thread',
    'tracing.model.async_slice_group');
base.addModuleDependency(
    'tracing.model.thread',
    'tracing.model.sample');
base.addModuleDependency(
    'tracing.model.process_base',
    'base.range');
base.addModuleDependency(
    'tracing.model.process_base',
    'tracing.guid');
base.addModuleDependency(
    'tracing.model.process_base',
    'tracing.model.counter');
base.addModuleDependency(
    'tracing.model.process_base',
    'tracing.model.object_collection');
base.addModuleDependency(
    'tracing.model.process_base',
    'tracing.model.thread');
base.addModuleDependency(
    'tracing.model.process',
    'tracing.model.process_base');
base.addModuleDependency(
    'tracing.model.kernel',
    'tracing.model.process_base');
base.addModuleDependency(
    'tracing.model.cpu',
    'base.range');
base.addModuleDependency(
    'tracing.model.cpu',
    'tracing.model.slice');
base.addModuleDependency(
    'tracing.model.cpu',
    'tracing.model.counter');
base.addModuleDependency(
    'tracing.model',
    'base.range');
base.addModuleDependency(
    'tracing.model',
    'base.event_target');
base.addModuleDependency(
    'tracing.model',
    'tracing.model.process');
base.addModuleDependency(
    'tracing.model',
    'tracing.model.kernel');
base.addModuleDependency(
    'tracing.model',
    'tracing.model.cpu');
base.addModuleDependency(
    'tracing.model',
    'tracing.filter');
base.addModuleDependency(
    'tracing.tracks.cpu_track',
    'tracing.tracks.container_track');
base.addModuleDependency(
    'tracing.tracks.cpu_track',
    'tracing.tracks.slice_track');
base.addModuleDependency(
    'tracing.tracks.cpu_track',
    'tracing.filter');
base.addModuleDependency(
    'tracing.tracks.cpu_track',
    'tracing.model');
base.addModuleDependency(
    'tracing.tracks.cpu_track',
    'ui');
base.addModuleDependency(
    'tracing.tracks.counter_track',
    'tracing.tracks.canvas_based_track');
base.addModuleDependency(
    'tracing.tracks.counter_track',
    'tracing.color_scheme');
base.addModuleDependency(
    'tracing.tracks.counter_track',
    'ui');
base.addModuleStylesheet(
    'tracing.tracks.counter_track',
    'tracing.tracks.counter_track');
base.addModuleDependency(
    'tracing.tracks.object_instance_track',
    'base.sorted_array_utils');
base.addModuleDependency(
    'tracing.tracks.object_instance_track',
    'tracing.tracks.canvas_based_track');
base.addModuleDependency(
    'tracing.tracks.object_instance_track',
    'tracing.color_scheme');
base.addModuleDependency(
    'tracing.tracks.object_instance_track',
    'ui');
base.addModuleStylesheet(
    'tracing.tracks.object_instance_track',
    'tracing.tracks.object_instance_track');
base.addModuleDependency(
    'tracing.tracks.slice_group_track',
    'base.sorted_array_utils');
base.addModuleDependency(
    'tracing.tracks.slice_group_track',
    'tracing.tracks.container_track');
base.addModuleDependency(
    'tracing.tracks.slice_group_track',
    'ui');
base.addModuleDependency(
    'tracing.tracks.async_slice_group_track',
    'tracing.tracks.slice_group_track');
base.addModuleDependency(
    'tracing.tracks.async_slice_group_track',
    'ui');
base.addModuleDependency(
    'tracing.tracks.thread_track',
    'tracing.tracks.container_track');
base.addModuleDependency(
    'tracing.tracks.thread_track',
    'tracing.tracks.slice_track');
base.addModuleDependency(
    'tracing.tracks.thread_track',
    'tracing.tracks.slice_group_track');
base.addModuleDependency(
    'tracing.tracks.thread_track',
    'tracing.tracks.async_slice_group_track');
base.addModuleDependency(
    'tracing.tracks.thread_track',
    'tracing.filter');
base.addModuleDependency(
    'tracing.tracks.thread_track',
    'ui');
base.addModuleStylesheet(
    'tracing.tracks.thread_track',
    'tracing.tracks.thread_track');
base.addModuleDependency(
    'tracing.tracks.process_track',
    'tracing.tracks.container_track');
base.addModuleDependency(
    'tracing.tracks.process_track',
    'tracing.tracks.counter_track');
base.addModuleDependency(
    'tracing.tracks.process_track',
    'tracing.tracks.object_instance_track');
base.addModuleDependency(
    'tracing.tracks.process_track',
    'tracing.tracks.thread_track');
base.addModuleDependency(
    'tracing.tracks.process_track',
    'tracing.filter');
base.addModuleDependency(
    'tracing.tracks.process_track',
    'ui');
base.addModuleDependency(
    'tracing.tracks.model_track',
    'base.measuring_stick');
base.addModuleDependency(
    'tracing.tracks.model_track',
    'tracing.tracks.container_track');
base.addModuleDependency(
    'tracing.tracks.model_track',
    'tracing.tracks.cpu_track');
base.addModuleDependency(
    'tracing.tracks.model_track',
    'tracing.tracks.process_track');
base.addModuleDependency(
    'tracing.tracks.model_track',
    'ui');
base.addModuleStylesheet(
    'tracing.tracks.model_track',
    'tracing.tracks.model_track');
base.addModuleDependency(
    'tracing.tracks.ruler_track',
    'tracing.tracks.track');
base.addModuleDependency(
    'tracing.tracks.ruler_track',
    'tracing.tracks.canvas_based_track');
base.addModuleDependency(
    'tracing.tracks.ruler_track',
    'ui');
base.addModuleStylesheet(
    'tracing.tracks.ruler_track',
    'tracing.tracks.ruler_track');
base.addModuleDependency(
    'tracing.timeline_track_view',
    'base.event_target');
base.addModuleDependency(
    'tracing.timeline_track_view',
    'tracing.filter');
base.addModuleDependency(
    'tracing.timeline_track_view',
    'tracing.selection');
base.addModuleDependency(
    'tracing.timeline_track_view',
    'tracing.timeline_viewport');
base.addModuleDependency(
    'tracing.timeline_track_view',
    'tracing.tracks.model_track');
base.addModuleDependency(
    'tracing.timeline_track_view',
    'tracing.tracks.ruler_track');
base.addModuleDependency(
    'tracing.timeline_track_view',
    'ui');
base.addModuleStylesheet(
    'tracing.timeline_track_view',
    'tracing.timeline_track_view');
base.addModuleDependency(
    'tracing.find_control',
    'tracing.timeline_track_view');
base.addModuleDependency(
    'tracing.find_control',
    'tracing.filter');
base.addModuleDependency(
    'tracing.find_control',
    'ui.overlay');
base.addModuleDependency(
    'ui.drag_handle',
    'ui');
base.addModuleStylesheet(
    'ui.drag_handle',
    'ui.drag_handle');
base.addModuleDependency(
    'tracing.importer.linux_perf.bus_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.clock_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.cpufreq_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.disk_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.drm_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.exynos_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.gesture_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.i915_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.mali_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.power_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.sched_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.workqueue_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.android_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf.kfunc_parser',
    'tracing.importer.linux_perf.parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.model');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.color_scheme');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.bus_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.clock_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.cpufreq_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.disk_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.drm_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.exynos_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.gesture_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.i915_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.mali_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.power_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.sched_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.workqueue_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.android_parser');
base.addModuleDependency(
    'tracing.importer.linux_perf_importer',
    'tracing.importer.linux_perf.kfunc_parser');
base.addModuleDependency(
    'tracing.importer.trace_event_importer',
    'tracing.model');
base.addModuleDependency(
    'tracing.importer.trace_event_importer',
    'tracing.color_scheme');
base.addModuleDependency(
    'tracing.importer.v8.codemap',
    'tracing.importer.v8.splaytree');
base.addModuleDependency(
    'tracing.importer.v8_log_importer',
    'tracing.model');
base.addModuleDependency(
    'tracing.importer.v8_log_importer',
    'tracing.model.slice');
base.addModuleDependency(
    'tracing.importer.v8_log_importer',
    'tracing.color_scheme');
base.addModuleDependency(
    'tracing.importer.v8_log_importer',
    'tracing.importer.v8.log_reader');
base.addModuleDependency(
    'tracing.importer.v8_log_importer',
    'tracing.importer.v8.codemap');
base.addModuleDependency(
    'tracing.timeline_view',
    'tracing.analysis.analysis_view');
base.addModuleDependency(
    'tracing.timeline_view',
    'tracing.category_filter_dialog');
base.addModuleDependency(
    'tracing.timeline_view',
    'tracing.filter');
base.addModuleDependency(
    'tracing.timeline_view',
    'tracing.find_control');
base.addModuleDependency(
    'tracing.timeline_view',
    'tracing.settings');
base.addModuleDependency(
    'tracing.timeline_view',
    'tracing.timeline_track_view');
base.addModuleDependency(
    'tracing.timeline_view',
    'ui.overlay');
base.addModuleDependency(
    'tracing.timeline_view',
    'ui.drag_handle');
base.addModuleDependency(
    'tracing.timeline_view',
    'tracing.importer.linux_perf_importer');
base.addModuleDependency(
    'tracing.timeline_view',
    'tracing.importer.trace_event_importer');
base.addModuleDependency(
    'tracing.timeline_view',
    'tracing.importer.v8_log_importer');
base.addModuleStylesheet(
    'tracing.timeline_view',
    'tracing.timeline_view');
base.addModuleDependency(
    'about_tracing.profiling_view',
    'about_tracing.tracing_controller');
base.addModuleDependency(
    'about_tracing.profiling_view',
    'tracing.timeline_view');
base.addModuleDependency(
    'about_tracing.profiling_view',
    'ui');
base.addModuleDependency(
    'about_tracing.profiling_view',
    'ui.overlay');
base.addModuleStylesheet(
    'about_tracing.profiling_view',
    'about_tracing.profiling_view');
base.addModuleStylesheet(
    'base.unittest',
    'base.unittest');
base.addModuleDependency(
    'tracing.test_utils',
    'tracing.model.counter');
base.addModuleDependency(
    'tracing.importer.timeline_stream_importer',
    'tracing.model');
base.addModuleDependency(
    'tracing.importer.timeline_stream_importer',
    'tracing.model.slice');
base.addModuleDependency(
    'ui.list_view',
    'ui');
base.addModuleStylesheet(
    'ui.list_view',
    'ui.list_view');
base.addModuleDependency(
    'ui.list_and_associated_view',
    'ui');
base.addModuleDependency(
    'ui.list_and_associated_view',
    'ui.list_view');
base.addModuleStylesheet(
    'ui.list_and_associated_view',
    'ui.list_and_associated_view');
