import { observable, action, computed } from "mobx";

class VinylStore {
  @observable Vinyls = ["spearow"];

  @action addBird = (bird) => {
    this.Vinyls.push(bird);
  };

  @computed get birdCount() {
    return this.Vinyls.length;
  }
}

const store = new VinylStore();

export default store;
// export default VinylStore;
