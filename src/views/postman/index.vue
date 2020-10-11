<template>
  <el-row :gutter="20" class="panel-group" style="padding: 15px;height: 60vh">
    <el-col :xs="12" :sm="12" :lg="5" class="card-panel-col"  >
      <el-menu v-for="(data,date) in postman" :key="date">
      <el-submenu index="">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{date}}</span>
        </template>
        <el-menu-item v-for="(value,index) in data" @click="selectRequest(value,date,index)" :key="index" :title="value.createOn">{{value.method +' '+value.request}} </el-menu-item>
      </el-submenu>
      </el-menu>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="19" class="card-panel-col" >
      <el-row >
        <el-col :xs="12" :sm="12" :lg="5" class="card-panel-col">
          <el-select v-model="value" filterable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="indexSelectedRequest != -1 ? 15 : 17" class="card-panel-col">
            <el-input  placeholder="Enter request URL" v-model="request"></el-input>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="2" class="card-panel-col">
          <el-button :loading="loading" class="el-button--primary" @click="sendRequest">Send</el-button>
        </el-col>
        <el-col v-if="indexSelectedRequest != -1" :xs="12" :sm="12" :lg="2" class="card-panel-col" style="text-align: center">
          <el-button :loading="loading" class="el-button--danger" @click="deleteSelectedRequest()">delete</el-button>
        </el-col>
      </el-row>
      <el-tabs type="border-card" @tab-click="handleTabClick">
        <el-tab-pane label="params">
          <span slot="label"><i class="el-icon-c-scale-to-original" />Params</span>
          <el-row >
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <h5>KEY</h5>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <h5>VALUE</h5>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <h5>DESCRIPTION</h5>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col" style="text-align: center">
              <h5>ACTION</h5>
            </el-col>
          </el-row>
          <div v-for="(param, index) in params">
            <el-row :key="index" style="margin-bottom: 5px">
              <el-col  :xs="12" :sm="12" :lg="1" class="card-panel-col">
                <el-checkbox v-model="param.isActive"></el-checkbox>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <el-input v-model='param.key'></el-input>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <el-input v-model='param.value'></el-input>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <el-input v-model='param.description'></el-input>
              </el-col>
              <el-col v-if="params.length-1 == index" :xs="12" :sm="12" :lg="4" class="card-panel-col" style="text-align: center">
                <el-button style="border-radius: 50%" @click="addParam"><i class="el-icon-plus" /></el-button>
              </el-col>
              <el-col v-else :xs="12" :sm="12" :lg="4" class="card-panel-col" style="text-align: center">
                <el-button style="border-radius: 50%" @click="deleteParam(index)"><i class="el-icon-minus" /></el-button>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="headers"><span slot="label"><i class="el-icon-tickets" />Headers</span>
          <el-row >
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <h5>KEY</h5>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <h5>VALUE</h5>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <h5>DESCRIPTION</h5>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col" style="text-align: center">
              <h5>ACTION</h5>
            </el-col>
          </el-row>
          <div v-for="(header, index) in headers">
            <el-row :key="index" style="margin-bottom: 5px">
              <el-col  :xs="12" :sm="12" :lg="1" class="card-panel-col">
                <el-checkbox v-model="header.isActive"></el-checkbox>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <el-input v-model='header.key'></el-input>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <el-input v-model='header.value'></el-input>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <el-input v-model='header.description'></el-input>
              </el-col>
              <el-col v-if="headers.length-1 == index" :xs="12" :sm="12" :lg="4" class="card-panel-col" style="text-align: center">
                <el-button style="border-radius: 50%" @click="addHeader"><i class="el-icon-plus" /></el-button>
              </el-col>
              <el-col v-else :xs="12" :sm="12" :lg="4" class="card-panel-col" style="text-align: center">
                <el-button style="border-radius: 50%" @click="deleteHeader(index)"><i class="el-icon-minus" /></el-button>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="body"><span slot="label"><i class="el-icon-mobile" />Body</span>
          <el-row >
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <h5>KEY</h5>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <h5>VALUE</h5>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <h5>DESCRIPTION</h5>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col" style="text-align: center">
              <h5>ACTION</h5>
            </el-col>
          </el-row>
          <div v-for="(body, index) in formBody">
            <el-row :key="index" style="margin-bottom: 5px">
              <el-col  :xs="12" :sm="12" :lg="1" class="card-panel-col">
                <el-checkbox v-model="body.isActive"></el-checkbox>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <el-input v-model='body.key'></el-input>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <el-input v-model='body.value'></el-input>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
                <el-input v-model='body.description'></el-input>
              </el-col>
              <el-col v-if="formBody.length-1 == index" :xs="12" :sm="12" :lg="4" class="card-panel-col" style="text-align: center">
                <el-button style="border-radius: 50%" @click="addFormBody"><i class="el-icon-plus" /></el-button>
              </el-col>
              <el-col v-else :xs="12" :sm="12" :lg="4" class="card-panel-col" style="text-align: center">
                <el-button style="border-radius: 50%" @click="deleteFormBody(index)"><i class="el-icon-minus" /></el-button>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="response"><span slot="label"><i class="el-icon-mobile" />Response</span>
          <div id="jsoneditor" style="width: 100%;height: 60vh"></div>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<script>
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css'
import axios_api from './axios/Axios.js'
import { mapGetters } from 'vuex'

export default {
  name:'postman',
  mounted() {
    this.createJsonEditor()
  },
  data() {
    return {
      loading: false,
      editor: {},
      activeName: 'first',
      options: [{
        value: 'GET',
        label: 'GET'
      }, {
        value: 'POST',
        label: 'POST'
      }, {
        value: 'PUT',
        label: 'PUT'
      }, {
        value: 'DELETE',
        label: 'DELETE'
      }],
      value: 'GET',
      params: [{ key: '', value: '', description: '', isActive: true }],
      headers: [{ key: '', value: '', description: '', isActive: true }],
      formBody: [{ key: '', value: '', description: '', isActive: true }],
      request: '',
      responseData: '',
      tabSelected: '',
      indexSelectedRequest: -1,
      indexPostman: -1
    }
  },
  methods: {
    handleTabClick: function(tab, event) {
      this.tabSelected = tab.label
      if (this.tabSelected === 'body') {
        const resquestArray = this.request.split('?')
        this.request = resquestArray[0]
      }
    },
    addParam: function() {
      this.params.push({ key: '', value: '', description: '', isActive: true })
    },
    deleteParam: function(index) {
      this.params.splice(index, 1)
    },
    addHeader: function() {
      this.headers.push({ key: '', value: '', description: '', isActive: true })
    },
    deleteHeader: function(index) {
      this.headers.splice(index, 1)
    },
    addFormBody: function() {
      this.formBody.push({ key: '', value: '', description: '', isActive: true })
    },
    deleteFormBody: function(index) {
      this.formBody.splice(index, 1)
    },
    createJsonEditor: function() {
      const container = document.getElementById("jsoneditor")
      const options = {
        modes: ['text', 'code', 'tree', 'form', 'view'],
        mode: 'code'
      }
      const _editor = new JSONEditor(container, options)
      this.editor = _editor
      _editor.set('')
    },
    setResponseToJSonEditor: function(data) {
      this.editor.set(data)
    },
    sendRequest: function() {
      this.loading = true
      if (this.value === 'GET') {
        const _headers = {}
        this.headers.forEach(x => {
          _headers[x.key] = x.value
        })
        const data = {}
        data['headers'] = this.headers
        data['request'] = this.request.split('?')[0]
        data['param'] = this.params
        data['body'] = this.formBody
        data['method'] = this.value
        data['createOn'] = new Date()
        this.$store.dispatch('user/addPostman', data)
        axios_api.get(this.request, this.headers[0].key !== '' ? _headers : '').then(value => {
          this.setResponseToJSonEditor(value.data)
          this.loading = false
        })
      } else if (this.value === 'POST') {
        const _headers = {}
        this.headers.forEach(x => {
          _headers[x.key] = x.value
        })
        axios_api.post(this.getRequestParams(), _headers).then(value => {
          this.setResponseToJSonEditor(value)
          this.loading = false
        })
      } else if (this.value === 'PUT') {

      } else {

      }
      this.loading = false
    },
    getRequestParams: function() {
      let content = this.request + '?'
      this.params.forEach((x, index) => {
        if (x.isActive) {
          if (x.key !== '' || x.value !== '') {
            content += x.key + '=' + x.value
          }
          if (this.params.length - 1 > index) {
            content += '&'
          }
        }
      })
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.request = content
      return content
    },
    selectRequest: function(value, date, index) {
      this.formBody = value.body
      this.headers = value.headers
      this.value = value.method
      this.params = value.param
      this.request = value.request
      this.indexSelectedRequest = index
      this.indexPostman = date
      this.setResponseToJSonEditor('')
    },
    deleteSelectedRequest: function() {
      const data = {}
      data['date'] = this.indexPostman;
      data['index'] = this.indexSelectedRequest;
      this.$store.dispatch('user/deletePostman', data)
    }
  },
  watch: {

  },
  computed: {
    ...mapGetters([
      'postman'
    ])
  },
  props: {

  }
}
</script>
