import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`/accommodations/:id`, ({ params }) => {
    const { id } = params;
    console.log(`handler test ${id}`);

    return HttpResponse.json({
      id: 1, //백엔드에 추가요청(v1)
      accommodationName: '롯데호텔',
      latitude: 30.5,
      longitude: 30.2,
      addressCode: '서울특별시 송파구 올림픽로 300',
      phoneNumber: '02-020-2021',
      accommodationImageList: [
        {
          id: 1,
          url: 'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg', //이미지 url
        },
      ],
      roomList: [
        {
          id: 1,
          type: 'deluxe',
          originalPrice: 3000000, //백엔드에 수정요청(v2)
          salePrice: 2400000, //백엔드에 추가요청(v2)
          capacity: 3,
          maxCapacity: 4,
          checkIn: '13:00', //백엔드에 수정요청(v1)
          checkOut: '18:00', //백엔드에 수정요청(v1)
          stock: 4, //날짜랑 같이 관리 필요해서 백엔드에 요청(v2)
          //백엔드에 수정요청(v1)
          imageUrl:
            'https://yaimg.yanolja.com/v5/2023/11/14/10/640/65534a484efab3.93517110.jpg', //백엔드에 수정요청
        },
        {
          id: 2,
          type: 'premium',
          originalPrice: 58000,
          salePrice: 34000,
          capacity: 2,
          maxCapacity: 4,
          checkIn: '13:00',
          checkOut: '18:00',
          stock: 0,
          imageUrl:
            'https://yaimg.yanolja.com/v5/2023/11/14/10/640/65534a484efab3.93517110.jpg',
        },
      ],
    });
  }),
  http.get('/api/main/mostsell', () => {
    return HttpResponse.json([
      {
        id: 1,
        ranking: 1,
        name: '파크 하얏트 서울',
        price: '59,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 2,
        ranking: 2,
        name: '네스트 호텔',
        price: '129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 3,
        ranking: 3,
        name: '롯데호텔 제주',
        price: '1,129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 4,
        ranking: 4,
        name: '콘래드 서울',
        price: '149,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 5,
        ranking: 5,
        name: '강릉 씨마크 호텔',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 11,
        ranking: 11,
        name: '파크 하얏트 서울',
        price: '59,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 12,
        ranking: 12,
        name: '네스트 호텔',
        price: '129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 13,
        ranking: 13,
        name: '롯데호텔 제주',
        price: '1,129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 14,
        ranking: 14,
        name: '콘래드 서울',
        price: '149,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 15,
        ranking: 15,
        name: '강릉 씨마크 호텔',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
    ]);
  }),
  http.get('/api/main/favorite', () => {
    return HttpResponse.json([
      {
        id: 6,
        ranking: 1,
        name: '소피텔 앰배서더',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 7,
        ranking: 2,
        name: '인터컨티넨탈 ...',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 8,
        ranking: 3,
        name: '노보텔 앰배서더 ...',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 9,
        ranking: 4,
        name: '파라다이스 시티',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 10,
        ranking: 5,
        name: '속초 롯데리조트',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 11,
        ranking: 11,
        name: '파크 하얏트 서울',
        price: '59,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 12,
        ranking: 12,
        name: '네스트 호텔',
        price: '129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 13,
        ranking: 13,
        name: '롯데호텔 제주',
        price: '1,129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 14,
        ranking: 14,
        name: '콘래드 서울',
        price: '149,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 15,
        ranking: 15,
        name: '강릉 씨마크 호텔',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
    ]);
  }),
  http.get('/api/main/allproduct', () => {
    return HttpResponse.json([
      {
        id: 11,
        ranking: 1,
        name: '소피텔 앰배서더',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 12,
        ranking: 2,
        name: '인터컨티넨탈 ...',
        price: '529,000원',
        saleprice: '329,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      // {
      //   id: 13,
      //   ranking: 3,
      //   name: '노보텔 앰배서더 ...',
      //   price: '529,000원',
      // },
      // {
      //   id: 14,
      //   ranking: 4,
      //   name: '파라다이스 시티',
      //   price: '529,000원',
      // },
      // {
      //   id: 15,
      //   ranking: 5,
      //   name: '속초 롯데리조트',
      //   price: '529,000원',
      // },
    ]);
  }),
  http.get('/api/searchList', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: '글래드 호텔',
        image: '@assets/HotelGlad.jpg',
        favorites: false,
        regularPrice: 300000,
        discountPrice: 150000,
        salesCount: 38,
        isAvailable: true,
      },
      {
        id: 2,
        name: '신라 호텔',
        image: '@assets/HotelShilla',
        favorites: false,
        regularPrice: 280000,
        discountPrice: 170000,
        salesCount: 15,
        isAvailable: true,
      },
      {
        id: 3,
        name: '베스트웨스턴 호텔',
        image: '@assets/HotelBestWestern',
        favorites: false,
        regularPrice: 700000,
        discountPrice: 630000,
        salesCount: 89,
        isAvailable: false,
      },
      {
        id: 4,
        name: '카푸치노 호텔',
        image: '@assets/HotelCapuccino',
        favorites: true,
        regularPrice: 610000,
        discountPrice: 410000,
        salesCount: 44,
        isAvailable: true,
      },
      {
        id: 5,
        name: '뉴브 호텔',
        image: '@assets/HotelNewv',
        favorites: false,
        regularPrice: 930000,
        discountPrice: 840000,
        salesCount: 61,
        isAvailable: false,
      },
      {
        id: 6,
        name: '나인 호텔',
        image: '@assets/HotelNine',
        favorites: true,
        regularPrice: 450000,
        discountPrice: 290000,
        salesCount: 3,
        isAvailable: false,
      },
      {
        id: 7,
        name: '크레센도 호텔',
        image: '@assets/HotelCrescendo',
        favorites: true,
        regularPrice: 830000,
        discountPrice: 550000,
        salesCount: 50,
        isAvailable: true,
      },
      {
        id: 8,
        name: '크레센도 호텔',
        image: '@assets/HotelCrescendo',
        favorites: true,
        regularPrice: 160000,
        discountPrice: 70000,
        salesCount: 97,
        isAvailable: true,
      },
      {
        id: 9,
        name: '크레센도 호텔',
        image: '@assets/HotelCrescendo',
        favorites: true,
        regularPrice: 170000,
        discountPrice: 120000,
        salesCount: 72,
        isAvailable: true,
      },
    ]);
  }),
  http.post('/api/messages', async ({ request }) => {
    const authToken = request.headers.get('Authorization');
    if (!authToken)
      return HttpResponse.json({ msg: 'Unauthorized' }, { status: 401 });
    const requestBody = await request.json();
    return HttpResponse.json(
      {
        content: requestBody.content,
        createdAt: new Date().toLocaleString(),
      },
      { status: 201 },
    );
  }),
];
