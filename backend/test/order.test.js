
const Order = require("../models/orderModel");
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/easyshoe";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
  });
});
afterAll(async () => {
  await mongoose.connection.close();
});

//Order Testing 
describe("Order Schema test anything", () => {
  
  it("Add Order testing anything", () => {
    const order = {
      orderItems: {
        name: "test",
        price: "123",
        quantity: "123",
        image: "image.jpg",
        product: "620a59f45d749d691915eaa8", 
      },
      shippingInfo: {
        address: "test",
        city: "test",
        state: "123",
        country: "test",
        pinCode: "123",
        phoneNo: "123",
      },
      user: "620a2bc885c3079daee14685", // Add _id from user table
      paidAt: "2022-02-02",
    };

    return Order.create(order).then((pro_ret) => {
      expect(pro_ret.orderItems.length > 0).toEqual(true);
    });
  });

  it("to get Order", async () => {
    const status = Order.find();
    expect(status.ok).toBe(undefined);
  });
});
