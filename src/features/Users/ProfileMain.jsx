import useAuth from "../../hooks/useAuth"
import OrderData from "../Order/orderData"
import UserProfile from "./UserProfile"

const ProfileMain = () => {
  const user=useAuth()
  return (
    <div className="grid grid-cols-3 p-4" >
      <UserProfile user={user} />
      <OrderData user={user} />
    </div>
  )
}
export default ProfileMain