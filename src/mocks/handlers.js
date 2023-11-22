import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`/accommodations/1`, () => {
    //숙소 타입
    return HttpResponse.json([
      {
        accommodationName: '롯데호텔', //string
        latitude: 30.5, // number
        longitude: 30.2, // number
        addressCode: '경기도 고양시 일산동구', //string
        phoneNumber: '01039966042', //string, 여기서의 phone number는 숙소 번호?
        accommodationImageList: [
          //호텔 사진 여러장
          {
            id: 1, //이미지 아이디
            url: 'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg', //이미지 url
          },
        ],
        roomList: [
          //객실 사진
          {
            id: 1,
            type: 'deluxe',
            price: 3000000,
            capacity: 3,
            maxCapacity: 4,
            checkIn: '2023-11-16T01:44:54.366046',
            checkOut: '2023-11-16T01:44:54.366046',
            stock: 4,
            roomImageList: [
              {
                id: 1,
                url: 'https://yaimg.yanolja.com/v5/2023/11/14/10/640/65534a484efab3.93517110.jpg',
              },
            ],
          },
          {
            id: 2,
            type: 'premium',
            price: 500000,
            capacity: 2,
            maxCapacity: 4,
            checkIn: '2023-11-16T01:44:54.366046',
            checkOut: '2023-11-16T01:44:54.366046',
            stock: 0,
            roomImageList: [],
          },
        ],
      },
    ]);
  }),
];
