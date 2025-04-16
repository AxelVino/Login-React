// components/UserList.tsx
import { Component } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

interface User {
  username: string;
  email: string;
}

interface UserListState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export class UserList extends Component<{}, UserListState> {
  state: UserListState = {
    users: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await axios.get<User[]>(`${API_URL}/api/v1/users`, {
        withCredentials: true,
      });
      this.setState({ users: response.data, loading: false });
    } catch (error: any) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.username} className="border p-2 rounded shadow">
              <p className="font-semibold">{user.username}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
