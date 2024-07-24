
// import Count from './Count'
import CakeView from './features/cake/CakeView'
import IceCreamView from './features/iceCream/IceCreamView'
import UserView from './features/user/UserView'
function App() {

  return (
    <div className='container'>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
      {/* <Count/> */}
    </div>
  )
}

export default App
