# Copyright (c) 2013 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

{
  'variables': {
    'tracing_css_files': [
      'third_party/tvcm/src/tvcm/ui/bar_chart.css',
      'third_party/tvcm/src/tvcm/ui/common.css',
      'third_party/tvcm/src/tvcm/ui/drag_handle.css',
      'third_party/tvcm/src/tvcm/ui/info_bar.css',
      'third_party/tvcm/src/tvcm/ui/line_chart.css',
      'third_party/tvcm/src/tvcm/ui/list_and_associated_view.css',
      'third_party/tvcm/src/tvcm/ui/list_view.css',
      'third_party/tvcm/src/tvcm/ui/mouse_mode_selector.css',
      'third_party/tvcm/src/tvcm/ui/pie_chart.css',
      'third_party/tvcm/src/tvcm/ui/quad_stack_view.css',
      'third_party/tvcm/src/tvcm/ui/sortable_table.css',
      'third_party/tvcm/src/tvcm/ui/sunburst_chart.css',
      'third_party/tvcm/src/tvcm/ui/tool_button.css',
      'third_party/tvcm/src/tvcm/unittest/common.css',
      'trace_viewer/about_tracing/common.css',
      'trace_viewer/cc/layer_picker.css',
      'trace_viewer/cc/layer_tree_host_impl_view.css',
      'trace_viewer/cc/layer_tree_quad_stack_view.css',
      'trace_viewer/cc/layer_view.css',
      'trace_viewer/cc/picture_ops_chart_summary_view.css',
      'trace_viewer/cc/picture_ops_chart_view.css',
      'trace_viewer/cc/picture_ops_list_view.css',
      'trace_viewer/cc/picture_view.css',
      'trace_viewer/cc/raster_task_slice_view.css',
      'trace_viewer/gpu/state_view.css',
      'trace_viewer/system_stats/system_stats_instance_track.css',
      'trace_viewer/system_stats/system_stats_snapshot_view.css',
      'trace_viewer/tcmalloc/heap_instance_track.css',
      'trace_viewer/tcmalloc/tcmalloc_instance_view.css',
      'trace_viewer/tcmalloc/tcmalloc_snapshot_view.css',
      'trace_viewer/tracing/analysis/analysis_link.css',
      'trace_viewer/tracing/analysis/analysis_results.css',
      'trace_viewer/tracing/analysis/analysis_view.css',
      'trace_viewer/tracing/analysis/analyze_slices.css',
      'trace_viewer/tracing/analysis/default_object_view.css',
      'trace_viewer/tracing/analysis/generic_object_view.css',
      'trace_viewer/tracing/side_panel/timeline_view.css',
      'trace_viewer/tracing/timeline_track_view.css',
      'trace_viewer/tracing/timeline_view.css',
      'trace_viewer/tracing/tracks/counter_track.css',
      'trace_viewer/tracing/tracks/drawing_container.css',
      'trace_viewer/tracing/tracks/heading_track.css',
      'trace_viewer/tracing/tracks/object_instance_track.css',
      'trace_viewer/tracing/tracks/process_track_base.css',
      'trace_viewer/tracing/tracks/rect_track.css',
      'trace_viewer/tracing/tracks/ruler_track.css',
      'trace_viewer/tracing/tracks/spacing_track.css',
      'trace_viewer/tracing/tracks/stacked_bars_track.css',
      'trace_viewer/tracing/tracks/thread_track.css',
      'trace_viewer/tracing/tracks/trace_model_track.css',
      'trace_viewer/tracing/tracks/track.css',
    ],
    'tracing_js_html_files': [
      'third_party/tvcm/src/tvcm/__init__.js',
      'third_party/tvcm/src/tvcm/base64.js',
      'third_party/tvcm/src/tvcm/bbox2.js',
      'third_party/tvcm/src/tvcm/color.js',
      'third_party/tvcm/src/tvcm/event_target.js',
      'third_party/tvcm/src/tvcm/events.js',
      'third_party/tvcm/src/tvcm/gl_matrix.js',
      'third_party/tvcm/src/tvcm/guid.js',
      'third_party/tvcm/src/tvcm/interval_tree.js',
      'third_party/tvcm/src/tvcm/iteration_helpers.js',
      'third_party/tvcm/src/tvcm/key_event_manager.js',
      'third_party/tvcm/src/tvcm/measuring_stick.js',
      'third_party/tvcm/src/tvcm/polymer.js',
      'third_party/tvcm/src/tvcm/promise.js',
      'third_party/tvcm/src/tvcm/properties.js',
      'third_party/tvcm/src/tvcm/quad.html',
      'third_party/tvcm/src/tvcm/raf.js',
      'third_party/tvcm/src/tvcm/range.js',
      'third_party/tvcm/src/tvcm/rect.js',
      'third_party/tvcm/src/tvcm/settings.js',
      'third_party/tvcm/src/tvcm/sorted_array_utils.js',
      'third_party/tvcm/src/tvcm/statistics.js',
      'third_party/tvcm/src/tvcm/still_a_js_module.js',
      'third_party/tvcm/src/tvcm/ui/__init__.js',
      'third_party/tvcm/src/tvcm/ui/animation.js',
      'third_party/tvcm/src/tvcm/ui/animation_controller.js',
      'third_party/tvcm/src/tvcm/ui/bar_chart.js',
      'third_party/tvcm/src/tvcm/ui/camera.js',
      'third_party/tvcm/src/tvcm/ui/chart_base.html',
      'third_party/tvcm/src/tvcm/ui/chart_base.js',
      'third_party/tvcm/src/tvcm/ui/color_scheme.js',
      'third_party/tvcm/src/tvcm/ui/container_that_decorates_its_children.js',
      'third_party/tvcm/src/tvcm/ui/d3.js',
      'third_party/tvcm/src/tvcm/ui/dom_helpers.js',
      'third_party/tvcm/src/tvcm/ui/drag_handle.js',
      'third_party/tvcm/src/tvcm/ui/info_bar.js',
      'third_party/tvcm/src/tvcm/ui/line_chart.js',
      'third_party/tvcm/src/tvcm/ui/list_and_associated_view.js',
      'third_party/tvcm/src/tvcm/ui/list_view.js',
      'third_party/tvcm/src/tvcm/ui/mouse_mode_selector.html',
      'third_party/tvcm/src/tvcm/ui/mouse_mode_selector.js',
      'third_party/tvcm/src/tvcm/ui/mouse_tracker.js',
      'third_party/tvcm/src/tvcm/ui/overlay.html',
      'third_party/tvcm/src/tvcm/ui/overlay.js',
      'third_party/tvcm/src/tvcm/ui/pie_chart.js',
      'third_party/tvcm/src/tvcm/ui/quad_stack_view.html',
      'third_party/tvcm/src/tvcm/ui/quad_stack_view.js',
      'third_party/tvcm/src/tvcm/ui/sortable_table.js',
      'third_party/tvcm/src/tvcm/ui/sunburst_chart.js',
      'third_party/tvcm/src/tvcm/unittest/__init__.js',
      'third_party/tvcm/src/tvcm/unittest/assertions.js',
      'third_party/tvcm/src/tvcm/unittest/constants.js',
      'third_party/tvcm/src/tvcm/unittest/html_test_results.html',
      'third_party/tvcm/src/tvcm/unittest/html_test_results.js',
      'third_party/tvcm/src/tvcm/unittest/interactive_test_runner.html',
      'third_party/tvcm/src/tvcm/unittest/interactive_test_runner.js',
      'third_party/tvcm/src/tvcm/unittest/module_test_case_runner.html',
      'third_party/tvcm/src/tvcm/unittest/suite_loader.js',
      'third_party/tvcm/src/tvcm/unittest/test_case.js',
      'third_party/tvcm/src/tvcm/unittest/test_error.js',
      'third_party/tvcm/src/tvcm/unittest/test_runner.js',
      'third_party/tvcm/src/tvcm/unittest/test_suite.js',
      'third_party/tvcm/src/tvcm/unittest/text_test_results.js',
      'third_party/tvcm/src/tvcm/utils.js',
      'trace_viewer/about_tracing.html',
      'trace_viewer/about_tracing/features.html',
      'trace_viewer/about_tracing/inspector_connection.html',
      'trace_viewer/about_tracing/inspector_tracing_controller_client.html',
      'trace_viewer/about_tracing/mock_tracing_controller_client.html',
      'trace_viewer/about_tracing/profiling_view.html',
      'trace_viewer/about_tracing/record_and_capture_controller.html',
      'trace_viewer/about_tracing/record_selection_dialog.html',
      'trace_viewer/about_tracing/tracing_controller_client.html',
      'trace_viewer/about_tracing/xhr_based_tracing_controller_client.html',
      'trace_viewer/cc.html',
      'trace_viewer/cc/constants.html',
      'trace_viewer/cc/debug_colors.html',
      'trace_viewer/cc/layer_impl.html',
      'trace_viewer/cc/layer_picker.html',
      'trace_viewer/cc/layer_tree_host_impl.html',
      'trace_viewer/cc/layer_tree_host_impl_view.html',
      'trace_viewer/cc/layer_tree_impl.html',
      'trace_viewer/cc/layer_tree_quad_stack_view.html',
      'trace_viewer/cc/layer_view.html',
      'trace_viewer/cc/picture.html',
      'trace_viewer/cc/picture_as_image_data.html',
      'trace_viewer/cc/picture_debugger.html',
      'trace_viewer/cc/picture_ops_chart_summary_view.html',
      'trace_viewer/cc/picture_ops_chart_view.html',
      'trace_viewer/cc/picture_ops_list_view.html',
      'trace_viewer/cc/picture_view.html',
      'trace_viewer/cc/raster_task_slice_view.html',
      'trace_viewer/cc/region.html',
      'trace_viewer/cc/render_pass.html',
      'trace_viewer/cc/selection.html',
      'trace_viewer/cc/tile.html',
      'trace_viewer/cc/tile_coverage_rect.html',
      'trace_viewer/cc/tile_view.html',
      'trace_viewer/cc/util.html',
      'trace_viewer/gpu.html',
      'trace_viewer/gpu/state.html',
      'trace_viewer/gpu/state_view.html',
      'trace_viewer/system_stats.html',
      'trace_viewer/system_stats/system_stats_instance_track.html',
      'trace_viewer/system_stats/system_stats_snapshot.html',
      'trace_viewer/system_stats/system_stats_snapshot_view.html',
      'trace_viewer/tcmalloc.html',
      'trace_viewer/tcmalloc/heap.html',
      'trace_viewer/tcmalloc/heap_instance_track.html',
      'trace_viewer/tcmalloc/tcmalloc_instance_view.html',
      'trace_viewer/tcmalloc/tcmalloc_snapshot_view.html',
      'trace_viewer/tracing/analysis/analysis_link.html',
      'trace_viewer/tracing/analysis/analysis_results.html',
      'trace_viewer/tracing/analysis/analysis_view.html',
      'trace_viewer/tracing/analysis/analyze_counters.html',
      'trace_viewer/tracing/analysis/analyze_samples.html',
      'trace_viewer/tracing/analysis/analyze_selection.html',
      'trace_viewer/tracing/analysis/analyze_slices.html',
      'trace_viewer/tracing/analysis/cpu_slice_view.html',
      'trace_viewer/tracing/analysis/default_object_view.html',
      'trace_viewer/tracing/analysis/generic_object_view.html',
      'trace_viewer/tracing/analysis/object_instance_view.html',
      'trace_viewer/tracing/analysis/object_snapshot_view.html',
      'trace_viewer/tracing/analysis/slice_view.html',
      'trace_viewer/tracing/analysis/stub_analysis_results.html',
      'trace_viewer/tracing/analysis/stub_analysis_table.html',
      'trace_viewer/tracing/analysis/thread_time_slice_view.html',
      'trace_viewer/tracing/analysis/util.html',
      'trace_viewer/tracing/color_scheme.html',
      'trace_viewer/tracing/constants.html',
      'trace_viewer/tracing/draw_helpers.html',
      'trace_viewer/tracing/elided_cache.html',
      'trace_viewer/tracing/fast_rect_renderer.html',
      'trace_viewer/tracing/filter.html',
      'trace_viewer/tracing/find_control.html',
      'trace_viewer/tracing/find_controller.html',
      'trace_viewer/tracing/importer/__init__.js',
      'trace_viewer/tracing/importer/etw/eventtrace_parser.js',
      'trace_viewer/tracing/importer/etw/parser.js',
      'trace_viewer/tracing/importer/etw/process_parser.js',
      'trace_viewer/tracing/importer/etw/thread_parser.js',
      'trace_viewer/tracing/importer/etw_importer.js',
      'trace_viewer/tracing/importer/gzip_importer.js',
      'trace_viewer/tracing/importer/importer.js',
      'trace_viewer/tracing/importer/linux_perf/android_parser.js',
      'trace_viewer/tracing/importer/linux_perf/bus_parser.js',
      'trace_viewer/tracing/importer/linux_perf/clock_parser.js',
      'trace_viewer/tracing/importer/linux_perf/cpufreq_parser.js',
      'trace_viewer/tracing/importer/linux_perf/disk_parser.js',
      'trace_viewer/tracing/importer/linux_perf/drm_parser.js',
      'trace_viewer/tracing/importer/linux_perf/exynos_parser.js',
      'trace_viewer/tracing/importer/linux_perf/gesture_parser.js',
      'trace_viewer/tracing/importer/linux_perf/i915_parser.js',
      'trace_viewer/tracing/importer/linux_perf/kfunc_parser.js',
      'trace_viewer/tracing/importer/linux_perf/mali_parser.js',
      'trace_viewer/tracing/importer/linux_perf/parser.js',
      'trace_viewer/tracing/importer/linux_perf/power_parser.js',
      'trace_viewer/tracing/importer/linux_perf/sched_parser.js',
      'trace_viewer/tracing/importer/linux_perf/sync_parser.js',
      'trace_viewer/tracing/importer/linux_perf/workqueue_parser.js',
      'trace_viewer/tracing/importer/linux_perf_importer.js',
      'trace_viewer/tracing/importer/simple_line_reader.js',
      'trace_viewer/tracing/importer/task.js',
      'trace_viewer/tracing/importer/trace2html_importer.js',
      'trace_viewer/tracing/importer/trace_event_importer.js',
      'trace_viewer/tracing/importer/v8/codemap.js',
      'trace_viewer/tracing/importer/v8/log_reader.js',
      'trace_viewer/tracing/importer/v8/splaytree.js',
      'trace_viewer/tracing/importer/v8_log_importer.js',
      'trace_viewer/tracing/importer/zip_importer.js',
      'trace_viewer/tracing/selection.html',
      'trace_viewer/tracing/side_panel/input_latency.html',
      'trace_viewer/tracing/side_panel/input_latency.js',
      'trace_viewer/tracing/side_panel/sampling_summary.html',
      'trace_viewer/tracing/side_panel/sampling_summary.js',
      'trace_viewer/tracing/side_panel/time_summary.html',
      'trace_viewer/tracing/side_panel/time_summary.js',
      'trace_viewer/tracing/side_panel/timeline_view.js',
      'trace_viewer/tracing/standalone_timeline_view.html',
      'trace_viewer/tracing/test_utils.html',
      'trace_viewer/tracing/timeline_display_transform.html',
      'trace_viewer/tracing/timeline_display_transform_animations.html',
      'trace_viewer/tracing/timeline_interest_range.html',
      'trace_viewer/tracing/timeline_track_view.html',
      'trace_viewer/tracing/timeline_view.html',
      'trace_viewer/tracing/timeline_viewport.html',
      'trace_viewer/tracing/timing_tool.html',
      'trace_viewer/tracing/trace_model.html',
      'trace_viewer/tracing/trace_model/async_slice.js',
      'trace_viewer/tracing/trace_model/async_slice_group.js',
      'trace_viewer/tracing/trace_model/counter.js',
      'trace_viewer/tracing/trace_model/counter_sample.js',
      'trace_viewer/tracing/trace_model/counter_series.js',
      'trace_viewer/tracing/trace_model/cpu.js',
      'trace_viewer/tracing/trace_model/event.js',
      'trace_viewer/tracing/trace_model/flow_event.js',
      'trace_viewer/tracing/trace_model/instant_event.js',
      'trace_viewer/tracing/trace_model/kernel.js',
      'trace_viewer/tracing/trace_model/object_collection.js',
      'trace_viewer/tracing/trace_model/object_instance.js',
      'trace_viewer/tracing/trace_model/object_snapshot.js',
      'trace_viewer/tracing/trace_model/process.js',
      'trace_viewer/tracing/trace_model/process_base.js',
      'trace_viewer/tracing/trace_model/sample.js',
      'trace_viewer/tracing/trace_model/slice.js',
      'trace_viewer/tracing/trace_model/slice_group.js',
      'trace_viewer/tracing/trace_model/stack_frame.js',
      'trace_viewer/tracing/trace_model/thread.js',
      'trace_viewer/tracing/trace_model/time_to_object_instance_map.js',
      'trace_viewer/tracing/trace_model/timed_event.js',
      'trace_viewer/tracing/trace_model_settings.html',
      'trace_viewer/tracing/tracks/async_slice_group_track.js',
      'trace_viewer/tracing/tracks/container_track.js',
      'trace_viewer/tracing/tracks/counter_track.js',
      'trace_viewer/tracing/tracks/cpu_track.js',
      'trace_viewer/tracing/tracks/drawing_container.js',
      'trace_viewer/tracing/tracks/heading_track.js',
      'trace_viewer/tracing/tracks/kernel_track.js',
      'trace_viewer/tracing/tracks/object_instance_track.js',
      'trace_viewer/tracing/tracks/process_track.js',
      'trace_viewer/tracing/tracks/process_track_base.js',
      'trace_viewer/tracing/tracks/rect_track.js',
      'trace_viewer/tracing/tracks/ruler_track.js',
      'trace_viewer/tracing/tracks/sample_track.js',
      'trace_viewer/tracing/tracks/slice_group_track.js',
      'trace_viewer/tracing/tracks/slice_track.js',
      'trace_viewer/tracing/tracks/spacing_track.js',
      'trace_viewer/tracing/tracks/stacked_bars_track.js',
      'trace_viewer/tracing/tracks/thread_track.js',
      'trace_viewer/tracing/tracks/trace_model_track.js',
      'trace_viewer/tracing/tracks/track.js',
    ],
    'tracing_img_files': [
      'third_party/tvcm/src/tvcm/images/chrome-left.png',
      'third_party/tvcm/src/tvcm/images/chrome-mid.png',
      'third_party/tvcm/src/tvcm/images/chrome-right.png',
      'third_party/tvcm/src/tvcm/images/ui-states.png',
      'trace_viewer/images/checkerboard.png',
      'trace_viewer/images/collapse.png',
      'trace_viewer/images/expand.png',
    ],
    'tracing_files': [
      '<@(tracing_css_files)',
      '<@(tracing_js_html_files)',
      '<@(tracing_img_files)',
    ],
  },
  'targets': [
    {
      'target_name': 'generate_about_tracing',
      'type': 'none',
      'actions': [
        {
          'action_name': 'generate_about_tracing',
          'script_name': 'trace_viewer/build/generate_about_tracing_contents',
          'inputs': [
            '<@(tracing_files)',
          ],
          'outputs': [
            '<(SHARED_INTERMEDIATE_DIR)/content/browser/tracing/about_tracing.js',
            '<(SHARED_INTERMEDIATE_DIR)/content/browser/tracing/about_tracing.html'
          ],
          'action': ['python', '<@(_script_name)',
                     '--outdir', '<(SHARED_INTERMEDIATE_DIR)/content/browser/tracing']
        }
      ]
    }
  ]
}
