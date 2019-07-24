import { Vue, Component } from 'vue-property-decorator';
import { AxiosRequestConfig } from 'axios';
// declare module 'vue/types/vue' {
//   // 自定义vue全局属性
//   interface Vue {
//     $myProperty: string | null;
//   }
// }

@Component
// Vue实现了 interface Vue接口，所以Vue新增的属性，继承了Vue的子类都能访问
export default class Mixins extends Vue {
  // public $myProperty: string | null = null;
  private created() {
    // this.instanceRequest();
    // this.instanceResponse();
  }
  // 拦截请求
  private instanceRequest(): void {
    this.axios.interceptors.request.use(
      (config: any) => {
        const token: boolean = JSON.parse(sessionStorage.getItem(
          'token'
        ) as string);
        if (token) {
          return config;
        }
        console.log('请登录');
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
  // 拦截响应
  private instanceResponse(): void {
    this.axios.interceptors.response.use(
      (res): any => {
        if (res.status === 200) {
          return res;
        }
        return '请求数据失败';
        // console.log('请求数据失败');
      }
    );
  }
}
