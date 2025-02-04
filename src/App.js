import { useDispatch, useSelector } from 'react-redux';
import { asyncDecCreator, asyncIncCreator } from './store/countReducer';
import { fetchUsers } from './store/userReducer';

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.countReducer.count)
  const users = useSelector((state) => state.userReducer.users)


  return (
    <div>
      <div style={{
        fontSize: '3rem'
      }}>
        {count}
        </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => dispatch(asyncIncCreator())}
          style={{ width: 'auto', height: 30, background: 'green', margin: 20 }}>
          Инкремент
        </button>
        <button
          onClick={() => dispatch(asyncDecCreator())}
          style={{ width: 'auto', height: 30, background: 'green', margin: 20 }}>
          Дикремент
        </button>
        <button
          onClick={() => dispatch(fetchUsers())}
          style={{ width: 'auto', height: 30, background: 'yellow', margin: 20 }}>
          Получить юзеров
        </button>
      </div>
      {users.length > 0
        ?
        <div >
          {users.map((user) =>
            <div style={{border:'1px solid black', padding: 10, marginTop: 5}} key={user.id}>
              {user.name}
            </div>
          )}
        </div>
        :
        <div style={{ fontSize: '2rem', marginTop: 20 }}>
          Юзеры отсутствуют
        </div>

      }
    </div>
  );
}

export default App;
