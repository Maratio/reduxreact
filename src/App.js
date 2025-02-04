import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import fetchCustomers from './AsyncAction/fetchCustomers';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cashReducer.cash)
  const customers = useSelector((state) => state.customerReducer.customers)

  console.log(cash);


  const addCash = (newcash) => {
    dispatch({ type: 'ADD_CASH', payload: newcash })
  }

  const getCash = (newcash) => {
    dispatch({ type: 'GET_CASH', payload: newcash })
  }

  const addCustomer  = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer  = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }


  return (
    <div>
      <div style={{
        fontSize: '3rem'
      }}>{cash}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => addCash(Number(prompt()))}
          style={{ width: 'auto', height: 30, background: 'green', margin: 20 }}>
          Пополнить счет
        </button>
        <button
          onClick={() => getCash(Number(prompt()))}
          style={{ width: 'auto', height: 30, background: 'green', margin: 20 }}>
          Снять со счета
        </button>
        <button
          onClick={() => addCustomer(prompt())}
          style={{ width: 'auto', height: 30, background: 'yellow', margin: 20 }}>
          Добавить клиента
        </button>
        <button
          onClick={() => removeCustomer(Number(prompt()))}
          style={{ width: 'auto', height: 30, background: 'yellow', margin: 20 }}>
          Удалить клиента
        </button>
        <button
          onClick={() => dispatch(fetchCustomers())}
          style={{ width: 'auto', height: 30, background: 'pink', margin: 20 }}>
          Получать клиентов из базы
        </button>
      </div>
      {(customers.length > 0)
        ?
        <div >
          {customers.map((customer) =>
            <div onClick={() => removeCustomer(customer)} style={{border:'1px solid black', padding: 10, marginTop: 5}} key={customer.id}>
              {customer.name}
            </div>
          )}
        </div>
        :
        <div style={{ fontSize: '2rem', marginTop: 20 }}>
          Клиенты отсутствуют
        </div>

      }
    </div>
  );
}

export default App;
