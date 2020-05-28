/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default [
  {
    chartType: 'ChartNum',
    title: 'Instance Avg ResponseTime',
    width: 3,
    height: 80,
    metricName: 'service_instance_resp_time',
    queryMetricType: 'readMetricsValue',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: 'ms',
    normal: true,
  },
  {
    chartType: 'ChartNum',
    title: 'Instance Avg Throughput',
    width: 3,
    height: 80,
    metricName: 'service_instance_cpm',
    queryMetricType: 'readMetricsValue',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: 'ms',
    normal: true,
  },
  {
    chartType: 'ChartNum',
    title: 'Instance Avg SLA',
    width: 3,
    height: 80,
    metricName: 'service_instance_sla',
    queryMetricType: 'readMetricsValue',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    unit: '%',
    aggregation: '/',
    aggregationNum: 100,
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'Instance ResponseTime',
    width: 3,
    height: 170,
    metricName: 'service_instance_resp_time',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'Instance Throughput',
    width: 3,
    height: 170,
    metricName: 'service_instance_cpm',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: 'ms',
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'Instance SLA',
    width: 3,
    height: 170,
    metricName: 'service_instance_sla',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    unit: '%',
    aggregation: '/',
    aggregationNum: 100,
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'JVM Heap (MB)',
    width: 3,
    height: 250,
    metricName: 'instance_jvm_memory_heap, instance_jvm_memory_heap_max',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'JVM Non-Heap (MB)',
    width: 3,
    height: 250,
    metricName: 'instance_jvm_memory_noheap, instance_jvm_memory_noheap_max',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'JVM GC (ms)',
    width: 3,
    height: 250,
    metricName: 'instance_jvm_young_gc_time, instance_jvm_old_gc_time',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
  {
    chartType: 'ChartCount',
    title: 'JVM GC Count',
    width: 3,
    height: 250,
    metricName: 'instance_jvm_young_gc_count, instance_jvm_old_gc_count',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'JVM CPU (%)',
    width: 3,
    height: 250,
    metricName: 'instance_jvm_cpu',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'CLR CPU (%)',
    width: 3,
    height: 250,
    metricName: 'instance_clr_cpu',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'CLR GC (Count)',
    width: 3,
    height: 250,
    metricName: 'instance_clr_gen0_collect_count, instance_clr_gen1_collect_count, instance_clr_gen2_collect_count',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'CLR HeapMemory (MB)',
    width: 3,
    height: 250,
    metricName: 'instance_clr_heap_memory',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'Envoy Count',
    width: 3,
    height: 250,
    metricName: 'envoy_total_connections_used, envoy_parent_connections_used',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
  {
    chartType: 'ChartLine',
    title: 'Envoy Heap Memory Max Used',
    width: 3,
    height: 250,
    metricName: 'envoy_heap_memory_max_used',
    queryMetricType: 'readMetricsValues',
    entityType: 'ServiceInstance',
    independentSelector: false,
    metricType: 'REGULAR_VALUE',
    aggregation: '',
    aggregationNum: null,
    unit: '',
    normal: true,
  },
];