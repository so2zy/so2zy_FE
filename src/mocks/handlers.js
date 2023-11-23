import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`/accommodations/1`, () => {
    //숙소 타입
    return HttpResponse.json([
      {
        id: 1, //백엔드에 추가요청
        accommodationName: '롯데호텔',
        latitude: 30.5,
        longitude: 30.2,
        addressCode: '서울특별시 송파구 올림픽로 300',
        phoneNumber: '02-020-2021',
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
            originalPrice: 3000000,
            salePrice: 2400000, //백엔드에 추가요청
            capacity: 3,
            maxCapacity: 4,
            checkIn: '13:00', //백엔드에 수정요청
            checkOut: '18:00', //백엔드에 수정요청
            stock: 4,
            imageUrl:
              'https://yaimg.yanolja.com/v5/2023/11/14/10/640/65534a484efab3.93517110.jpg', //백엔드에 수정요청
          },
          {
            id: 2,
            type: 'premium',
            originalPrice: 58000,
            salePrice: 34000, //백엔드에 추가요청
            capacity: 2,
            maxCapacity: 4,
            checkIn: '13:00',
            checkOut: '18:00',
            stock: 0,
            imageUrl:
              'https://yaimg.yanolja.com/v5/2023/11/14/10/640/65534a484efab3.93517110.jpg',
          },
        ],
      },
    ]);
  }),
];
