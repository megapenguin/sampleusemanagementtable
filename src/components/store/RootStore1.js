import { types, flow, cast } from "mobx-state-tree";
import UserModel from "./UserModel";
import { Modal } from "antd";

const USER_URL = "http://localhost:500/users";

const fetchUsers = async () => {
  const res = await fetch(USER_URL);
  const data = await res.json();
  return data;
};

const fetchUser = async (id) => {
  const res = await fetch(`${USER_URL}/${id}`);
  const data = await res.json();
  return data;
};

const RootStore = types
  .model("RootStore", {
    users: types.optional(types.array(UserModel), []),
    user: types.optional(UserModel, {}),
  })
  .views((self) => ({}))
  .actions((self) => ({
    fetchUserList: flow(function* () {
      const data = yield fetchUsers();
      console.log("Here", data);
      const newUsers = data.map((user) => ({
        id: user.id,
        name: user.name,
        age: user.age,
        tel: user.tel,
        phone: user.phone,
        address: user.address,
      }));
      self.users = cast(newUsers);
    }),
    fetchOneUser: flow(function* (id, form) {
      const data = yield fetchUser(id);
      form.setFieldsValue({
        id: data.id,
        name: data.name,
        age: data.age,
        tel: data.tel,
        phone: data.phone,
        address: data.address,
      });
      self.user = Object.assign(data);
    }),
    updateUser: flow(function* (id, values) {
      const data = yield fetchUser(id);
      const updateData = {
        ...data,
        name: values.name,
        age: values.age,
        tel: values.tel,
        phone: values.phone,
        address: values.address,
      };
      const updated = yield fetch(`${USER_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      self.user = Object.assign(updateData);
      Modal.success({
        content: "Successfully updated user info",
        okButtonProps: {},
      });
    }),
    addUser: flow(function* (values) {
      console.log("value", values);
      const res = yield fetch(`${USER_URL}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const addedData = yield res.json();
      Modal.success({
        content: "Successfully added a new user",
        okButtonProps: {},
      });
      self.users.push(addedData);
    }),
    deleteUser: flow(function* (id) {
      const res = yield fetch(`${USER_URL}/${id}`, { method: "DELETE" });
      const newData = yield fetchUsers();
      const filteredData = newData.filter((data) => data.id !== id);
      self.users = cast(filteredData);
      Modal.success({
        content: `Successfuly deleted user`,
        okButtonProps: {},
      });
    }),
  }));

export default RootStore;
