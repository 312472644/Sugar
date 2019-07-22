const userModules = {
  state: {
    userName: 'sa'
  },
  mutations: {
    UPDATE_USER(context: any, paramValue: string): void {
      context.userName = paramValue;
    }
  },
  actions: {
    ASYNC_UPDATE_USER(context: any, paramValue: string): void {
      setTimeout(() => {
        context.commit('UPDATE_USER', paramValue);
      }, 3000 * 1);
    }
  },
  getters: {
    userNameResult(context: any): any {
      return 'getter_'.concat(context.userName);
    }
  }
};

export default userModules;
