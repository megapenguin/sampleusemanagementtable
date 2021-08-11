import { types, flow, cast } from "mobx-state-tree";

const UserModel = types
  .model("UserModel", {
    id: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    age: types.optional(types.string, ""),
    tel: types.optional(types.string, ""),
    phone: types.optional(types.string, ""),
    address: types.optional(types.string, ""),
  })
  .views((self) => ({}))
  .actions((self) => ({}));

export default UserModel;
