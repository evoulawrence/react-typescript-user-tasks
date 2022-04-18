import { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import getUsers from '../../service/userService'
import './user.scss';

type Props = {
  active: any
  showUserTasks: (id: number) => void
}

const User: FC<Props> = ({ showUserTasks, active }) => {
  const [userData, setUserData] = useState<IUser[]>([]);

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    const resp = await getUsers.getAllUsers();
    setUserData(resp);
  }

  return (
    <ul className="user">
      {
        userData.map((user) => (
          <li className={active === user.id ? "user__name active" : "user__name"}
            key={user.id}
            onClick={() => showUserTasks(user.id)}
          >
            <NavLink to={`/tasks/${user.id}`} className="user__name__link">
              {user.name}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}

export default User