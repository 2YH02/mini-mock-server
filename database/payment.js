exports.paymentList = {
  message: "결제 전체 불러오기",
  data: [
    {
      id: 2,
      totalPrice: 100,
      totalCount: 3,
      paymentAt: "2023-11-30T03:19:35.791408",
      rooms: [
        {
          id: 6,
          accommodationName: "Accommodation1",
          roomName: "Room1",
          price: 100,
          numberOfGuests: 3,
          checkInAt: "2023-12-24",
          checkOutAt: "2023-12-25",
          roomUrl: "",
        },
        {
          id: 7,
          accommodationName: "Accommodation8",
          roomName: "Room3",
          price: 120,
          numberOfGuests: 2,
          checkInAt: "2023-12-26",
          checkOutAt: "2023-12-28",
          roomUrl: "",
        },
        {
          id: 8,
          accommodationName: "Accommodation4",
          roomName: "Room7",
          price: 150,
          numberOfGuests: 4,
          checkInAt: "2023-12-29",
          checkOutAt: "2023-12-31",
          roomUrl: "",
        },
        {
          id: 9,
          accommodationName: "Accommodation6",
          roomName: "Room10",
          price: 180,
          numberOfGuests: 2,
          checkInAt: "2023-12-30",
          checkOutAt: "2024-01-02",
          roomUrl: "",
        },
      ],
    },
  ],
};

exports.paymentDetail = {
  message: "결제 불러오기 성공",
  data: {
    id: 1,
    totalPrice: 200,
    totalCount: 3,
    paymentAt: "2023-11-30T00:42:23.925436",
    rooms: [
      {
        id: 1,
        accommodationName: "Accommodation1",
        roomName: "Room2",
        price: 200,
        numberOfGuests: 3,
        checkInAt: "2023-12-24",
        checkOutAt: null,
        roomUrl: "",
      },
    ],
  },
};
