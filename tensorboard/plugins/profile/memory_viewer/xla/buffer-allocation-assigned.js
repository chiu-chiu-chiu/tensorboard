/* Copyright 2015 The TensorFlow Authors. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an 'AS IS' BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
var memory_viewer_xla_baa;
(function (memory_viewer_xla_baa) {
    /**
     * HLO assigned buffer allocation representation.
     * @final
     */
    var BufferAllocationAssigned = /** @class */ (function () {
        function BufferAllocationAssigned(assigned) {
            this.logicalBufferId = parseInt(assigned.logicalBufferId, 10);
            this.offset = parseInt(assigned.offset, 10);
            this.size = parseInt(assigned.size, 10);
        }
        return BufferAllocationAssigned;
    }());
    memory_viewer_xla_baa.BufferAllocationAssigned = BufferAllocationAssigned;
})(memory_viewer_xla_baa || (memory_viewer_xla_baa = {})); // namespace memory_viewer_xla_baa