// 

import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { useAddOrderMutation } from "../features/Order/orderApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeCart } from "../features/Cart/cartSlice";

const CustomDialog = ({ open, handleOpen, carts, user, totalAmount }) => {
  const dispatch = useDispatch();

  // Extracting qty and product ID from carts
  const updateCart = carts.map((cart) => ({
    qty: cart.qty,
    product: cart._id,
  }));

  const [addOrder, { isLoading }] = useAddOrderMutation();

  const handleOrder = async () => {
    try {
      await addOrder({
        body: {
          totalAmount,
          products: updateCart,
        },
        token: user.token,
      }).unwrap();

      dispatch(removeCart());
      toast.success("Order Placed Successfully");
      
      // Close the dialog only after the operation succeeds
      handleOpen();
    } catch (err) {
      toast.error(err.data?.message);
    }
  };

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>Are You Sure??</DialogHeader>
      
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button
          loading={isLoading}
          variant="gradient"
          color="green"
          onClick={handleOrder}
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CustomDialog;
