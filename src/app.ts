interface findParams {
  id: number;
}

class UserStorage {
  users: Person[] = [];

  constructor() {}

  setStorage(data: Person[]): void {
    this.users = [...data];
  }

  find(data: findParams): Person | undefined {
    return this.users.find((el) => el.id === data.id);
  }
}
const userStorage: UserStorage = new UserStorage();

class Person {
  avatar?: string;
  email?: string;
  first_name?: string;
  id?: number;
  last_name?: string;
}

interface ReqResResponse {
  data: Person[];
  page: number;
  per_page: number;
  support: {
    text: string;
    url: string;
  };
  total_pages: number;
  total: number;
}

// type person = {
//     avatar?: string;
//     email?: string;
//     first_name?: string;
//     id?: number;
//     last_name?: string;
// }

const fetchUsers = async (page: number = 1): Promise<ReqResResponse | null> => {
  try {
    const response: Response = await fetch(
      `https://reqres.in/api/users?page=${page}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const result: ReqResResponse = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

fetchUsers().then((result) => {
  if (!!result?.data) {
    userStorage.setStorage(result.data);
  }
});
