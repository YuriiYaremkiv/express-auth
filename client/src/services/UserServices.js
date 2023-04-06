import API from "../http";

class UserService {
  static fetchUsers() {
    return API.get("/users");
  }
}

export default UserService;
