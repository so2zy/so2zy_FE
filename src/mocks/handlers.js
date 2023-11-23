import { http, HttpResponse } from 'msw';

export const handlers = [
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
