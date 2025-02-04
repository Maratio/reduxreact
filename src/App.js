import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cashReducer.cash)
  console.log(cash);


  const addCash = (newcash) => {
    dispatch({ type: 'ADD_CASH', payload: newcash })
  }

  const getCash = (newcash) => {
    dispatch({ type: 'GET_CASH', payload: newcash })
  }

  return (
    <div>
      <div style={{
        fontSize: '3rem'
      }}>{cash}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => addCash(Number(prompt()))}
          style={{ width: 'auto', height: 30, background: 'green', margin: 20 }}>Пополнить счет</button>
        <button
          onClick={() => getCash(Number(prompt()))}
          style={{ width: 'auto', height: 30, background: 'green', margin: 20 }}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
