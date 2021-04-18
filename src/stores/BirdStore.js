import { observable, action, computed } from "mobx";

class BirdStore {
  @observable birds = [];
}

const store = new BirdStore();

export default store;
