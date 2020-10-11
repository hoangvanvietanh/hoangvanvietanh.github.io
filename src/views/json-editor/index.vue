<template>
  <el-row :gutter="40" class="panel-group" style="padding: 30px">
    <splitpanes style="height: 80vh;">
      <pane min-size="20">
        <div id="jsoneditor" style="width: 100%; height: 85vh;"></div>
      </pane>
      <pane in-size="20">
        <div id="jsoneditor2" style="width: 100%; height: 85vh;"></div>
      </pane>
    </splitpanes>
  </el-row>

</template>

<script>
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  name: "json-editor",
  components: { Splitpanes, Pane },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      const container = document.getElementById("jsoneditor")
      const container2 = document.getElementById("jsoneditor2")
      const options = {
        modes: ['text', 'code', 'tree', 'form', 'view'],
        mode: 'code',
      }
      const options2 = {
        modes: ['text', 'code', 'tree', 'form', 'view'],
        mode: 'view',
      }
      const editor = new JSONEditor(container, options)
      const editor2 = new JSONEditor(container2, options2)
      // set json
      const initialJson = {
        "Array": [1, 2, 3],
        "Boolean": true,
        "Null": null,
        "Number": 123,
        "Object": {"a": "b", "c": "d"},
        "String": "Hello World"
      }
      editor.set(initialJson)
      editor2.set(initialJson)

      // get json
      //const updatedJson = editor.get()
    }
  }
}
</script>

<style>
.splitpanes {background-color: #f8f8f8;}

.splitpanes__splitter {background-color: #ccc;position: relative;}
.splitpanes__splitter:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.4s;
  background-color: rgba(255, 0, 0, 0.3);
  opacity: 0;
  z-index: 1;
}
.splitpanes__splitter:hover:before {opacity: 1;}
.splitpanes--vertical > .splitpanes__splitter:before {left: -5px;right: -5px;height: 100%;}
.splitpanes--horizontal > .splitpanes__splitter:before {top: -30px;bottom: -30px;width: 100%;}
</style>
